import { Component,HostBinding, OnInit } from '@angular/core';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import { Persona } from 'src/app/modelo/Persona';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import { environment } from 'src/environments/environment';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-editarpacienterecepcion',
  templateUrl: './editarpacienterecepcion.component.html',
  styleUrls: ['./editarpacienterecepcion.component.css']
})
export class EditarpacienterecepcionComponent implements OnInit {

  private url = environment.cloudinary_url;
  public imgUpload: File;

  @HostBinding('class') classes ='row';

  formPaciente: FormGroup;  

  
  persona: any = { 
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
    id_seguro       : 0,
    p_contacto      : null,
    t_contacto      : null,
  };

  getId_documento: string = '';
  getId_departamento: string = '';
  getId_provincia: string = '';
  getId_seguro: string = '';

  departamento: any = [];
  provincia: any = [];
  distrito: any = [];
  documento: any = [];
  sexo: any = [];
  seguro: any = [];

  constructor(private snackBar: MatSnackBar,private formBuilder: FormBuilder,private service:PoliclinicoService,private uploadService:UploadService,  private router: Router,private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    const params = this.activateRoute.snapshot.params;
    this.listarPacienteByIdRecepcion(params.id);
    this.formMiPersona();
    this.listarDepartamento();
    this.listarDocumento();
    this.listarSexo();
    this.listarSeguro();

  }

  listarSeguro(){
    this.service.listarSeguro()
    .subscribe(
      res=> {this.seguro=res;
      },
      err=> console.error(err)
    )
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

  getIdSeguro(event: any) {
    this.getId_seguro = event.target.value;
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
    this.formPaciente = this.formBuilder.group({
      id              :  [null, Validators.required],
      id_departamento :  [null, Validators.required],
      id_provincia    :  [null, Validators.required],
      id_distrito     :  [null, Validators.required],
      id_documento    :  [null, Validators.required],
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
      foto            :  [null],
      id_seguro       :  [null, Validators.required],
      p_contacto      :  [null],
      t_contacto      :  [null],
    });
  }
  

  listarPacienteByIdRecepcion(idPaciente:number){
    this.service.listarPacienteByIdRecepcion(idPaciente).subscribe(
      res => {
        console.log(res);
        this.persona=res
        //delete this.persona.id;
        this.formPaciente.setValue(this.persona);
        this.listarProvincia(this.formPaciente.get('id_departamento').value)
        this.listarDistrito(this.formPaciente.get('id_provincia').value)
        
      },
      err => console.log(err)
    )
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition:'right',
    });
  }

 actualizarPaciente() {

  const params = this.activateRoute.snapshot.params;

  //console.log(this.formPaciente.value);


  if(this.formPaciente.valid){
    this.service.actualizarPacienteRecepcion(params.id,this.formPaciente.value)
    .subscribe( res => {

      console.log(res);

        this.openSnackBar('Registro Actualizado!','')  
        this.router.navigate(['recepcion']);
      
    });
  }

}



async changeImage(file: File) {
  this.imgUpload = file;

  if (this.imgUpload) {
    const foto = await this.uploadService.uploadFile(this.imgUpload);
    this.formPaciente.get('foto').setValue(foto);
  }
}


async subirFirma(file: File) {
  this.imgUpload = file;

  if (this.imgUpload) {
    const firma = await this.uploadService.uploadFile(this.imgUpload);
    this.formPaciente.get('firma').setValue(firma);
  }
}

async subirHuella(file: File) {
  this.imgUpload = file;

  if (this.imgUpload) {
    const huella = await this.uploadService.uploadFile(this.imgUpload);
    this.formPaciente.get('huella').setValue(huella);
  }
}

async subirFoto(file: File) {
  this.imgUpload = file;

  if (this.imgUpload) {
    const foto = await this.uploadService.uploadFile(this.imgUpload);
    this.formPaciente.get('foto').setValue(foto);
  }
}







  

}


