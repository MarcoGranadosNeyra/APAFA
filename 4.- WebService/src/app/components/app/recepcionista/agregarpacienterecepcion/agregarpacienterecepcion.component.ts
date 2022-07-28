import { Component,HostBinding, OnInit } from '@angular/core';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import { Persona } from 'src/app/modelo/Persona';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import { environment } from 'src/environments/environment';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-agregarpacienterecepcion',
  templateUrl: './agregarpacienterecepcion.component.html',
  styleUrls: ['./agregarpacienterecepcion.component.css']
})
export class AgregarpacienterecepcionComponent implements OnInit {

  private url = environment.cloudinary_url;
  public imgUpload: File;

  @HostBinding('class') classes ='row';

  formPaciente: FormGroup;  


  seguro: any = [];
  persona: any = [];


  constructor(private formBuilder: FormBuilder,private snackBar: MatSnackBar,private service:PoliclinicoService,  private router: Router,private uploadService:UploadService,private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    const params = this.activateRoute.snapshot.params;
    this.formMiPaciente();
    this.listarSeguro();
    this.listarPersonaById(params.id)
  }

  listarPersonaById(idPersona:number){
    this.service.listarPersonaById(idPersona).subscribe(
      res => {
        this.persona=res
        this.formPaciente.get('id_persona').setValue(this.persona.id)
      },
      err => console.log(err)
    )
  }


  formMiPaciente(){
    this.formPaciente = this.formBuilder.group({
      id_persona      :  [null, Validators.required],
      id_seguro       :  [null, Validators.required],
      p_contacto      :  [null, Validators.required],
      t_contacto      :  [null, Validators.required],
    });
  }

  
  listarSeguro(){
    this.service.listarSeguro()
    .subscribe(
      res=> {this.seguro=res;
      },
      err=> console.error(err)
    )
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition:'right',
    });
  }


  agregarPaciente() {
    if(this.formPaciente.valid){
      this.service.agregarPacienteRecepcion(this.formPaciente.value)
      .subscribe( res => {
       
        console.log(res);

       if (res.message==1) {
        this.openSnackBar('Registrado Correctamente ','');
        this.router.navigate(['recepcion/']);
        
      }
    });
  }
}







}
