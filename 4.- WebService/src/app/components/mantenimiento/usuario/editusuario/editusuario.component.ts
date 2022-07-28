import { Component,HostBinding, OnInit } from '@angular/core';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import { Usuario } from 'src/app/modelo/Usuario';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-editusuario',
  templateUrl: './editusuario.component.html',
  styleUrls: ['./editusuario.component.css']
})
export class EditusuarioComponent implements OnInit {

  @HostBinding('class') classes ='row';

  formUsuario: FormGroup;  

  usuario: Usuario = { id: 0, id_persona: 0, id_perfil: 0, usuario: null, password: null };
  persona: any = [];
  perfil: any = [];

  id_persona:number = 0;
  id_perfil:number = 0;

  constructor(private snackBar: MatSnackBar,private formBuilder: FormBuilder,private service:PoliclinicoService, private router: Router,private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.formMiUsuario();
    this.listarPersona();
    this.listarPerfiles();
    const params = this.activateRoute.snapshot.params;
    this.listarUsuarioById(params.id);


  }

  
  getIdPersona(event: any) {
    this.id_persona = event.target.value;

  }

  getIdPerfil(event: any) {
  this.id_perfil = event.target.value;

  }

  listarPersona(){
    this.service.listarPersona()
    .subscribe(
      res=> {this.persona=res;
      },
      err=> console.error(err)
    )
  }


  listarPerfiles(){
    this.service.listarPerfiles()
    .subscribe(
      res=> {this.perfil=res;
      },
      err=> console.error(err)
    )
  }

  formMiUsuario(){
    this.formUsuario = this.formBuilder.group({
      id_persona        :  [null, Validators.required],
      id_perfil         :  [null, Validators.required],
      usuario           :  [null, Validators.required],
      password          :  [null, Validators.required]
    })
  }

  listarUsuarioById(idUsuario:number){
    this.service.listarUsuarioById(idUsuario).subscribe(
      res => {
        this.usuario=res
        delete this.usuario.id;
        console.log(this.usuario)
        //this.formSucursal.setValue(res);
        this.formUsuario.setValue(this.usuario);
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





  actualizarUsuario() {
    const params = this.activateRoute.snapshot.params;
    if(this.formUsuario.valid){
      this.service.actualizarUsuario(params.id,this.formUsuario.value)
      .subscribe( res => {
        if (res) {
          this.openSnackBar('Registro Actualizado!','Mensaje de Sistema : ')  
          this.router.navigate(['listarUsuario']);
        }else{
          this.openSnackBar('Error al Actualizar!','Mensaje de Sistema : ')  
          this.router.navigate(['listarUsuario']);
        }
      });
    }
  }









  
}