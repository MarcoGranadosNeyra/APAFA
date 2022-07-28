import { Component,HostBinding, OnInit } from '@angular/core';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import { Medico } from 'src/app/modelo/Medico';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import { environment } from 'src/environments/environment';
import { UploadService } from 'src/app/service/upload.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-editmedico',
  templateUrl: './editmedico.component.html',
  styleUrls: ['./editmedico.component.css']
})
export class EditmedicoComponent implements OnInit {

  @HostBinding('class') classes ='row';
  
  formMedico: FormGroup;

  get_id_persona:number = 0;
  get_id_especialidad:number = 0;

  persona: any = [];
  especialidad: any = [];

  medico: any = {};

  response : any = {}


  constructor(private snackBar: MatSnackBar,private formBuilder: FormBuilder,private service:PoliclinicoService,private uploadService:UploadService,  private router: Router,private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.formMiMedico();
    this.listarPersona();
    this.listarEspecialidad();
    const params = this.activateRoute.snapshot.params;
    this.listarMedicoById(params.id);
  }


  listarMedicoById(idMedico:number){
    this.service.listarMedicoById(idMedico).subscribe(
      res => {
        this.medico=res
        delete this.medico.id;
        this.formMedico.setValue(this.medico);
      },
      err => console.log(err)
    )
  }

  getIdPersona(event: any) {
    this.get_id_persona = event.target.value;
  }

  getIdEspecialidad(event: any) {
  this.get_id_especialidad = event.target.value;
  }

  listarPersona(){
    this.service.listarPersona()
    .subscribe(
      res=> {this.persona=res;
      },
      err=> console.error(err)
    )
  }


  listarEspecialidad(){
    this.service.listarEspecialidad()
    .subscribe(
      res=> {this.especialidad=res;
      },
      err=> console.error(err)
    )
  }


  formMiMedico(){
    this.formMedico = this.formBuilder.group({
      id_persona        :  [null, Validators.required],
      id_especialidad   :  [null, Validators.required],
      especialista      :  [null, Validators.required],
      colegiatura       :  [null, Validators.required]
    })
  }
  

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition:'right',
    });
  }




  actualizarMedico() {
    const params = this.activateRoute.snapshot.params;
    if(this.formMedico.valid){
      this.service.actualizarMedico(params.id,this.formMedico.value)
      .subscribe( res => {
       
        this.response=res;

        if(this.response.result===1){
          this.openSnackBar('Mensaje : Registro Actualizado!','')  
          this.router.navigate(['main/medicos']);
        }
        else{
          this.openSnackBar('Mensaje : Error al Actualizar Registro!','')  
          this.router.navigate(['main/medicos']);
        }
      });
    }
  }

  cancelar(){
    this.router.navigate(['main/medicos']);
  }



}
