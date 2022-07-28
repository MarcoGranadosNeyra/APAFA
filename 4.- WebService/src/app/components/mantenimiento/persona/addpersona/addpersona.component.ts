import { Component,HostBinding, OnInit } from '@angular/core';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import { Persona } from 'src/app/modelo/Persona';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import { environment } from 'src/environments/environment';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-addpersona',
  templateUrl: './addpersona.component.html',
  styleUrls: ['./addpersona.component.css']
})
export class AddpersonaComponent implements OnInit {



  @HostBinding('class') classes ='row';

  private url = environment.cloudinary_url;
  public imgUpload: File;

  formPersona: FormGroup;  

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

  constructor(private formBuilder: FormBuilder,private snackBar: MatSnackBar,private service:PoliclinicoService,  private router: Router,private uploadService:UploadService,) { }

  ngOnInit() {
    this.formMiPersona();
    this.listarDepartamento();
    this.listarProvincia('15');
    this.listarDistrito('1501');

    this.listarDocumento();
    this.listarSexo();
  }


  formMiPersona(){
    this.formPersona = this.formBuilder.group({
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
      this.service.agregarPersona(this.formPersona.value)
      .subscribe( res => {
       console.log(res)
        
       if (res.result==1) {
        this.openSnackBar('Registrado Correctamente ','');
        this.router.navigate(['main/personas']);
      }else{
        
        if(res.message.constraint=="uq_id_documento_nro_documento"){
          this.openSnackBar('Error : Tipo de Documento y Nro de Documento ya existe','');
        }

        if(res.message.constraint=="uq_correo_persona"){
          this.openSnackBar('Error : el correo ya existe','');
        }

        if(res.message.constraint=="users_usuario_unique"){
          this.openSnackBar('Error : el usuario ya existe','');
        }
      }
      
    });
  }
}

cancelar(){
  this.router.navigate(['main/personas']);
}







}
