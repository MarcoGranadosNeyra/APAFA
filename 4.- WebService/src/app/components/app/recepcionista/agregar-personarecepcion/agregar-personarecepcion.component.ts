import { Component,HostBinding, OnInit } from '@angular/core';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import { Persona } from 'src/app/modelo/Persona';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import { environment } from 'src/environments/environment';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-agregar-personarecepcion',
  templateUrl: './agregar-personarecepcion.component.html',
  styleUrls: ['./agregar-personarecepcion.component.css']
})
export class AgregarPersonarecepcionComponent implements OnInit {

  private url = environment.cloudinary_url;
  public imgUpload: File;

  @HostBinding('class') classes ='row';

  formPaciente: FormGroup;  

  getId_documento: string = '';
  getId_departamento: string = '';
  getId_provincia: string = '';

  departamento: any = [];
  provincia: any = [];
  distrito: any = [];
  documento: any = [];
  sexo: any = [];
  seguro: any = [];

  constructor(private formBuilder: FormBuilder,private snackBar: MatSnackBar,private service:PoliclinicoService,  private router: Router,private uploadService:UploadService,) { }

  ngOnInit() {
    this.formMiPaciente();
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

  formMiPaciente(){
    this.formPaciente = this.formBuilder.group({
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
      foto            :  [null],
      id_seguro       :  [null, Validators.required],
      p_contacto      :  [null],
      t_contacto      :  [null],
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
        
        
      }else{

        if(res.error.constraint=="uq_id_documento_nro_documento"){
          this.openSnackBar('Error : Tipo de Documento y Nro de Documento ya existe','');
        }

        if(res.error.constraint=="uq_correo_persona"){
          this.openSnackBar('Error : el correo ya existe','');
        }

        if(res.error.constraint=="users_usuario_unique"){
          this.openSnackBar('Error : el usuario ya existe','');
        }

      }
    });
  }
  
}







}
