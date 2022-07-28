import { Component,HostBinding, OnInit } from '@angular/core';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import { Persona } from 'src/app/modelo/Persona';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import { environment } from 'src/environments/environment';
import { UploadService } from 'src/app/service/upload.service';
import { validarQueSeanIguales} from 'src/app/components/tools/validatorPassword'
import { DataService } from 'src/app/service/data/data.service';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { PersonaService } from 'src/app/service/persona/persona.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  @HostBinding('class') classes ='row';

  private url = environment.cloudinary_url;
  public imgUpload: File;

  formPersona: FormGroup;
  form: FormGroup;

  getId_documento: string = '';
  getId_departamento: string = '';
  getId_provincia: string = '';

  departamento: any = [];
  provincia: any = [];
  distrito: any = [];
  documento: any = [];
  sexo: any = [];

  departamentoSelected = '15'
  provinciaSelected = '1501'
  distritoSelected = '150101'
  documentoSelected = 1
  sexoSelected = 1

  constructor(public dataService:DataService,private formBuilder: FormBuilder,private fb: FormBuilder,private snackBar: MatSnackBar,private personaService:PersonaService,private usuarioService:UsuarioService,  private router: Router,private uploadService:UploadService,) { }

  ngOnInit() {
    this.formMiPersona();
    this.listarDepartamento();
    this.listarProvincia('15');
    this.listarDistrito('1501');

    this.listarDocumento();
    this.listarSexo();
    this.getPersona();
  }

  getPersona(){
    this.formPersona.get('nro_documento').setValue(this.dataService.persona.dni);
    this.formPersona.get('nombre').setValue(this.dataService.persona.nombres);
    this.formPersona.get('apaterno').setValue(this.dataService.persona.paterno);
    this.formPersona.get('amaterno').setValue(this.dataService.persona.materno);
    if(this.dataService.persona.sexo==='F'){
      this.sexoSelected=2
    }
  }

  initFormPassword() {
    this.form = this.fb.group({
      'password':  ['', Validators.required],
      'confirmarPassword': ['', Validators.required]
    }, {
      validators: validarQueSeanIguales
    });
  }

  checarSiSonIguales(): boolean {
    return this.formPersona.hasError('noSonIguales') &&
      this.formPersona.get('password').dirty &&
      this.formPersona.get('confirmarPassword').dirty;
  }


  formMiPersona(){
    this.formPersona = this.formBuilder.group({
      usuario         :  [null, Validators.minLength(6)],
      password        :  [null, Validators.minLength(4)],
      confirmarPassword :[null, Validators.required],
      id_documento    :  [null, Validators.required],
      id_departamento :  [null, Validators.required],
      id_provincia    :  [null, Validators.required],
      id_distrito     :  [null, Validators.required],
      nro_documento   :  [null, Validators.minLength(8)],
      nombre          :  [null, Validators.required],
      apaterno        :  [null, Validators.required],
      amaterno        :  [null, Validators.required],
      telefono        :  [null],
      direccion       :  [null],
      fecha_naci      :  [null, Validators.required],   
      id_sexo         :  [null, Validators.required],
      correo          :  [null, Validators.email],
      firma           :  [null],
      huella          :  [null],
      foto            :  [null]
    });
  }


  
  listarSexo(){
    this.personaService.listarSexo()
    .subscribe(
      res=> {this.sexo=res;
      },
      err=> console.error(err)
    )
  }

  listarDocumento(){
    this.personaService.listarDocumento()
    .subscribe(
      res=> {this.documento=res;
      },
      err=> console.error(err)
    )
  }


  listarDepartamento(){

    this.personaService.listarDepartamento()
    .subscribe(
      res=> {this.departamento=res;
      },
      err=> console.error(err)
    )
  }

  getIdDocumento(event: any) {
    this.getId_documento = event.target.value;
  }

  getIdDepartamento (event: any) {
    this.getId_departamento = event.target.value;
    this.listarProvincia(this.getId_departamento);
  }

  getIdProvincia (event: any) {
    this.getId_provincia = event.target.value;
    this.listarDistrito(this.getId_provincia);
  }


  listarProvincia(idDepartamento:string){
    this.personaService.listarProvincia(idDepartamento).subscribe(
      res => {
        this.provincia=res
      },
      err => console.log(err)
    )
  }

  listarDistrito(idProvincia:string){
    this.personaService.listarDistrito(idProvincia).subscribe(
      res => {
        this.distrito=res
      },
      err => console.log(err)
    )
  }



  async subirFirma(file: File) {
    this.imgUpload = file;

    if (this.imgUpload) {
      const firma = await this.uploadService.uploadFile(this.imgUpload);
      this.formPersona.get('firma').setValue(firma);
    }
  }

  async subirHuella(file: File) {
    this.imgUpload = file;

    if (this.imgUpload) {
      const huella = await this.uploadService.uploadFile(this.imgUpload);
      this.formPersona.get('huella').setValue(huella);
    }
  }

  async subirFoto(file: File) {
    this.imgUpload = file;

    if (this.imgUpload) {
      const foto = await this.uploadService.uploadFile(this.imgUpload);
      this.formPersona.get('foto').setValue(foto);
    }
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition:'right',
    });
  }


  agregarPersona() {
        
    if(this.formPersona.valid){
      this.usuarioService.listarUsuarioByUsuario(this.formPersona.value)
      .subscribe( res =>{

        if (res.result==1) {
          this.openSnackBar('Error : el nombre de usuario ya esta registrado','');
        }else{

            this.usuarioService.agregarUsuarioPaciente(this.formPersona.value)
            .subscribe( res => {

            if (res.result==1) {
              this.openSnackBar('Registrado Correctamente ','');
              this.router.navigate(['welcome']);
            }else{
              
              if(res.message.constraint=="uq_id_documento_nro_documento"){
                this.openSnackBar('Error : Tipo de Documento y Nro de Documento ya esta registrado','');
              }

              if(res.message.constraint=="uq_correo_persona"){
                this.openSnackBar('Error : el correo ya esta registrado','');
              }

              if(res.message.constraint=="users_usuario_unique"){
                this.openSnackBar('Error : el nombre de usuario ya esta registrado','');
              }
            }
          });
    
        }
       
      });
      
    }
      
}

cancelar(){
  this.router.navigate(['main/personas']);
}



}