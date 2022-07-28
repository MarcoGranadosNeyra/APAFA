import { Component,HostBinding, OnInit } from '@angular/core';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import { UploadService } from 'src/app/service/upload.service';
import { environment } from 'src/environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  private url = environment.cloudinary_url;
  public imgUpload: File;

  @HostBinding('class') classes ='row';

  formPersona: FormGroup;  

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
    id_sexo          : null,
    correo          : null,
    firma           : null,
    huella          : null,
    foto            : null,
  };

  getId_Sexo: string = '';
  getId_documento: string = '';
  getId_departamento: string = '';
  getId_provincia: string = '';
  

  departamento: any = [];
  provincia: any = [];
  distrito: any = [];
  documento: any = [];

  sexo: any = [];

  constructor(private snackBar: MatSnackBar,private formBuilder: FormBuilder,private service:PoliclinicoService,private uploadService:UploadService,  private router: Router,private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    const params = this.activateRoute.snapshot.params;
    this.listarPersonaById(params.id);
    this.formMiPersona();
    this.listarDepartamento();
    this.listarDocumento();
    this.listarSexo();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  listarSexo(){
    this.service.listarSexo()
    .subscribe(
      
      res=> {this.sexo=res;
       
      },
      err=> console.error(err)
    )
  }

  listarDocumento(){
    this.service.listarDocumento()
    .subscribe(
      res=> {this.documento=res;
      },
      err=> console.error(err)
    )
  }

  listarDepartamento(){
    this.service.listarDepartamento()
    .subscribe(
      res=> {this.departamento=res;
      },
      err=> console.error(err)
    )
  }

  getIdSexo(event: any) {
    this.getId_Sexo = event.target.value;
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
    this.service.listarProvincia(idDepartamento).subscribe(
      res => {
        this.provincia=res
      },
      err => console.log(err)
    )
  }



  listarDistrito(idProvincia:string){
    this.service.listarDistrito(idProvincia).subscribe(
      res => {
        this.distrito=res
      },
      err => console.log(err)
    )
  }


  formMiPersona(){
    this.formPersona = this.formBuilder.group({
      id_documento    :  [null, Validators.required],
      id_departamento :  [null, Validators.required],
      id_provincia    :  [null, Validators.required],
      id_distrito     :  [null, Validators.required],
      nro_documento   :  [null, Validators.minLength(6)],
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
  

  listarPersonaById(idPersona:number){
    this.service.listarPersonaById(idPersona).subscribe(
      res => {
        this.persona=res
        
        delete this.persona.id;
        this.formPersona.setValue(this.persona);
        this.listarProvincia(this.formPersona.get('id_departamento').value)
        this.listarDistrito(this.formPersona.get('id_provincia').value)

      },
      err => console.log(err)
    )
  }

  mensaje : any ={};

actualizarPersona() {
  const params = this.activateRoute.snapshot.params;
  if(this.formPersona.valid){
    this.service.actualizarPersona(params.id,this.formPersona.value)
    .subscribe( res => {
      this.mensaje=res     
      if (this.mensaje.message==1) {
        this.openSnackBar('Actualizado Correctamente ','');
        this.router.navigate(['paciente']);
      }else{
        this.openSnackBar('Error al Actualizar Registro!','');      
      }

    });
  }

}



async changeImage(file: File) {
  this.imgUpload = file;

  if (this.imgUpload) {
    const foto = await this.uploadService.uploadFile(this.imgUpload);
    this.formPersona.get('foto').setValue(foto);
  }
}







  

}

