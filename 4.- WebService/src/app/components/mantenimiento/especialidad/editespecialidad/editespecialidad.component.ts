import { Component,HostBinding, OnInit } from '@angular/core';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import { Especialidad } from 'src/app/modelo/Especialidad';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import { environment } from 'src/environments/environment';
import { UploadService } from 'src/app/service/upload.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-editespecialidad',
  templateUrl: './editespecialidad.component.html',
  styleUrls: ['./editespecialidad.component.css']
})
export class EditespecialidadComponent implements OnInit {

  private url = environment.cloudinary_url;
  public imgUpload: File;


  @HostBinding('class') classes ='row';

  formEspecialidad: FormGroup;  
/*
  especialidad: Especialidad = {
     id             : 0,
     especialidad   : '', 
     descripcion    : '', 
     precio         : 0,
     imagen         : ''
    };
*/

especialidad: any = { };

  constructor(private snackBar: MatSnackBar,private formBuilder: FormBuilder,private service:PoliclinicoService,private uploadService:UploadService,  private router: Router,private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    const params = this.activateRoute.snapshot.params;
    this.listarEspecialidadById(params.id);
    this.formMiEspecialidad();
   
  }

  listarEspecialidadById(idEspecialidad:number){
    this.service.listarEspecialidadById(idEspecialidad).subscribe(
      res => {
        
        this.especialidad=res
        delete this.especialidad.id;
        console.log(this.especialidad)
        this.formEspecialidad.setValue(this.especialidad);
      },
      err => console.log(err)
    )
  }


  formMiEspecialidad(){
    this.formEspecialidad = this.formBuilder.group({
      especialidad        :  [null, Validators.required],
      descripcion         :  [null],
      imagen              :  [null, Validators.required]
    });
  }
  

  async changeImage(file: File) {
    this.imgUpload = file;

    if (this.imgUpload) {
      const imagen = await this.uploadService.uploadFile(this.imgUpload);
      this.formEspecialidad.get('imagen').setValue(imagen);
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition:'right',
    });
  }

  actualizarEspecialidad() {
    const params = this.activateRoute.snapshot.params;
    if(this.formEspecialidad.valid){
      this.service.actualizarEspecialidad(params.id,this.formEspecialidad.value)
      .subscribe( res => {
        this.openSnackBar('Registro Actualizado!','')  
        this.router.navigate(['main/especialidades']);
      });
    }
  
  }

  cancelar(){
    this.router.navigate(['main/especialidades']);
  }



}
