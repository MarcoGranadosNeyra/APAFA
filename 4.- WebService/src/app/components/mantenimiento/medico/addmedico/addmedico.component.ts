import { Component,HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PoliclinicoService} from 'src/app/service/policlinico.service';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-addmedico',
  templateUrl: './addmedico.component.html',
  styleUrls: ['./addmedico.component.css']
})
export class AddmedicoComponent implements OnInit {

  @HostBinding('class') classes ='row';
  
  formMedico: FormGroup;

  id_persona:number = 0;
  id_Especialidad:number = 0;

  persona: any = [];
  especialidad: any = [];

  personaSelected = 1;
  especialidadSelected = 1;

  constructor(private snackBar: MatSnackBar,private formBuilder: FormBuilder,private service:PoliclinicoService, private router: Router) { }

  ngOnInit() {
    this.formMiMedico();
    this.listarPersona();
    this.listarEspecialidad();
  }

  getIdPersona(event: any) {
    this.id_persona = event.target.value;
    
  }

  getIdEspecialidad(event: any) {
  this.id_Especialidad = event.target.value;
 
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

   agregarMedico() {
    if(this.formMedico.valid){
      this.service.agregarMedico(this.formMedico.value)
      .subscribe( res => {
        
        console.log(res)
        
        if (res.result==1) {
          this.openSnackBar('Mensaje : Registrado agregado!','')
          this.router.navigate(['main/medicos']);
        }else{
          
          if(res.message.constraint=="uq_id_persona_medico"){
            this.openSnackBar('Error : El Medico ya esta registrado','');
          }
        }
       
      });
    }
    
  }

  cancelar(){
    this.router.navigate(['main/medicos']);
  }





}









