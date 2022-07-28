import { Component,HostBinding, OnInit } from '@angular/core';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import { Especialidad } from 'src/app/modelo/Especialidad';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import { environment } from 'src/environments/environment';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-addespecialidad',
  templateUrl: './addespecialidad.component.html',
  styleUrls: ['./addespecialidad.component.css']
})
export class AddespecialidadComponent implements OnInit {

  private url = environment.cloudinary_url;
  public imgUpload: File;

  @HostBinding('class') classes ='row';

  formEspecialidad: FormGroup;  

  constructor(private snackBar: MatSnackBar,private formBuilder: FormBuilder,private service:PoliclinicoService,private uploadService:UploadService,  private router: Router) { }

  ngOnInit() {
    this.formMiEspecialidad();
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

  agregarEspecialidad() {
    if(this.formEspecialidad.valid){
      this.service.agregarEspecialidad(this.formEspecialidad.value)
      .subscribe( res => {

        if (res.result==1) {
          this.openSnackBar('Registrado Correctamente ','');
          this.router.navigate(['main/especialidades']);
        }else{
          if(res.message.constraint=="uq_especialidad"){
            this.openSnackBar('Error : La especialidad ya esta registrada','');
          }

      }
    });
  }

}

cancelar(){
  this.router.navigate(['main/especialidades']);
}


}