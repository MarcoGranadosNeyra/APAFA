import { Component,HostBinding, OnInit } from '@angular/core';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import { Persona } from 'src/app/modelo/Persona';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import { environment } from 'src/environments/environment';
import { UploadService } from 'src/app/service/upload.service';
import { validarQueSeanIguales} from 'src/app/components/tools/validatorPassword'
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  
  formPersona: FormGroup;  
  formUsuario: FormGroup;  

  persona: Persona = { 
    id              : 0, 
    id_documento    : null, 
    id_departamento : null, 
    id_provincia    : null, 
    id_distrito     : null ,
    nro_documento   : null,
    nombre          : null,
    apaterno        : null,
    amaterno        : null,
    telefono        : null,
    direccion       : null,
    fecha_naci      : null,
    id_sexo         : 0,
    correo          : null,
    firma           : null,
    huella          : null,
    foto            : null,
  };

  getId_documento: string = '';
  getId_departamento: string = '';
  getId_provincia: string = '';

  departamento: any = [];
  provincia: any = [];
  distrito: any = [];
  documento: any = [];
  sexo: any = [];



  constructor(private sendDataService:MessageService,private snackBar: MatSnackBar,private formBuilder: FormBuilder,private service:PoliclinicoService,  private router: Router,private uploadService:UploadService,private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    const params = this.activateRoute.snapshot.params;
    this.listarPersonaById(params.id)
    this.formMiPersona();
    this.formMiUsuario();

   
    
  }

  listarPersonaById(idPersona:number){
    this.service.listarPersonaById(idPersona).subscribe(
      res => {
       
        this.persona=res

        /*
        delete this.persona.id;
        delete this.persona.id_departamento;
        delete this.persona.id_distrito;
        delete this.persona.id_provincia;
        delete this.persona.firma;
        delete this.persona.huella;
        delete this.persona.foto;
        this.formPersona.setValue(this.persona);
        */
       const id_persona=this.persona.id
        this.formUsuario.get('id_persona').setValue(this.persona.id)
        
        console.log(this.formUsuario.value);
      },
      err => console.log(err)
    )
  }

  

  checarSiSonIguales(): boolean {
    return this.formUsuario.hasError('noSonIguales') &&
      this.formUsuario.get('password').dirty &&
      this.formUsuario.get('confirmarPassword').dirty;
  }

  formMiUsuario(){
    this.formUsuario = this.formBuilder.group({
      id_persona      :  [null, Validators.required] ,
      usuario         :  [null, Validators.minLength(6)],
      password        :  [null, Validators.minLength(4)],
      confirmarPassword :[null, Validators.required],
      acceptTerms     :  [false, Validators.requiredTrue]
    }, {
      validators: validarQueSeanIguales
    });
  }

  formMiPersona(){
    this.formPersona = this.formBuilder.group({
      id_documento    :  [null, Validators.required],
      nro_documento   :  [null, Validators.minLength(6)],
      nombre          :  [null, Validators.required],
      apaterno        :  [null, Validators.required],
      amaterno        :  [null, Validators.required],
      telefono        :  [null],
      direccion       :  [null],
      fecha_naci      :  [null, Validators.required],   
      id_sexo         :  [null, Validators.required],
      correo          :  [null, Validators.email]
    });
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition:'right',
    });
  }

  agregarUsuario() {
    if(this.formUsuario.valid){
      
      this.service.agregarUsuarioPaciente(this.formUsuario.value)
      .subscribe( res => {
       
          if (res.message==1) {
            this.openSnackBar('Registro agregado!','') 
            this.router.navigate(['welcome']);
          }
          if (res.message==0) {
            this.openSnackBar('Error : ' + res.error,'') 
          }

      });
    }
  }


  




}
