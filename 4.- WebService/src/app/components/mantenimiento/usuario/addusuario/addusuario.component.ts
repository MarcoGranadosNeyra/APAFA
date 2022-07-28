import { Component,HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import {MatSnackBar} from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { PersonaService } from 'src/app/service/persona/persona.service';
import { RolService } from 'src/app/service/rol/rol.service';

@Component({
  selector: 'app-addusuario',
  templateUrl: './addusuario.component.html',
  styleUrls: ['./addusuario.component.css']
})
export class AddusuarioComponent implements OnInit {


  @HostBinding('class') classes ='row';
  
  formUsuario: FormGroup;

  id_persona:number = 0;
  id_rol:number = 0;

  persona: any = [];
  rol: any = [];

  personaSelected = 1
  rolSelected = 1

  constructor(private snackBar: MatSnackBar,private formBuilder: FormBuilder,private usuarioService:UsuarioService,private personaService:PersonaService,private rolService:RolService, private router: Router) { }

  ngOnInit() {
    this.formMiUsuario();
    this.listarPersona();
    this.listarRoles();
  }

  getIdPersona(event: any) {
    this.id_persona = event.target.value;

  }

  getIdRol(event: any) {
  this.id_rol= event.target.value;

  }

  listarPersona(){
    this.personaService.listarPersona()
    .subscribe(
      res=> {this.persona=res;
      },
      err=> console.error(err)
    )
  }


  listarRoles(){
    this.rolService.listarRol()
    .subscribe(
      res=> {this.rol=res;
      },
      err=> console.error(err)
    )
  }


  formMiUsuario(){
    this.formUsuario = this.formBuilder.group({
      id_persona        :  [null, Validators.required],
      id_rol            :  [null, Validators.required],
      usuario           :  [null, Validators.required],
      password          :  [null, Validators.required]
    })
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
      
      this.usuarioService.agregarUsuario(this.formUsuario.value)
      .subscribe( res => {

        console.log(res)

        if (res.result==1) {
          this.openSnackBar('Registro agregado!','')
          this.router.navigate(['main/usuarios']);
        }else{
          if(res.message.constraint=="uq_id_persona"){
            this.openSnackBar('Error : La Persona ya tiene un usuario!','')  
          }
          if(res.message.constraint=="users_usuario_unique"){
            this.openSnackBar('Error : El Usuario ya esta registrado!','')  
          }
          if(res.message.constraint=="uq_id_persona_id_rol"){
            this.openSnackBar('Error : El Rol ya esta registrado!','')  
          }
        }
       
      });
    }
  }

  cancelar(){
    this.router.navigate(['main/usuarios']);
  }

  


}







