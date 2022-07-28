import { Component,HostBinding, OnInit } from '@angular/core';
import { RolService } from 'src/app/service/rol/rol.service';
import { Medico } from 'src/app/modelo/Medico';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import { environment } from 'src/environments/environment';
import { UploadService } from 'src/app/service/upload.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-rol',
  templateUrl: './editar-rol.component.html',
  styleUrls: ['./editar-rol.component.css']
})
export class EditarRolComponent implements OnInit {


  @HostBinding('class') classes ='row';
  
  formRol: FormGroup;

  rol: any = {};

  response : any = {}

  constructor(private snackBar: MatSnackBar,private formBuilder: FormBuilder,private rolService:RolService,private uploadService:UploadService,  private router: Router,private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.formMiRol();
    const params = this.activateRoute.snapshot.params;
    this.listarRolById(params.id);
  }


  listarRolById(idRol:number){
    this.rolService.listarRolById(idRol).subscribe(
      res => {
        this.rol=res
        delete this.rol.id;
        this.formRol.setValue(this.rol);
      },
      err => console.log(err)
    )
  }


  formMiRol(){
    this.formRol = this.formBuilder.group({
      rol               :  [null, Validators.required],
    })
  }
  

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition:'right',
    });
  }




  actualizarRol() {
    const params = this.activateRoute.snapshot.params;
    if(this.formRol.valid){
      this.rolService.actualizarRol(params.id,this.formRol.value)
      .subscribe( res => {
       
        this.response=res;
        console.log(res)

        if(this.response.result===1){
          this.openSnackBar('Mensaje : Registro Actualizado!','')  
          this.router.navigate(['main/roles']);
        }
        else{
          this.openSnackBar('Mensaje : Error al Actualizar Registro!','')  
          this.router.navigate(['main/roles']);
        }
      });
    }
  }

  cancelar(){
    this.router.navigate(['main/roles']);
  }



}
