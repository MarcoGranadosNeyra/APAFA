import { Component,HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import {MatSnackBar} from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { PersonaService } from 'src/app/service/persona/persona.service';
import { RolService } from 'src/app/service/rol/rol.service';

@Component({
  selector: 'app-agregar-rol',
  templateUrl: './agregar-rol.component.html',
  styleUrls: ['./agregar-rol.component.css']
})
export class AgregarRolComponent implements OnInit {


  @HostBinding('class') classes ='row';
  
  rolFormulario: FormGroup;

  constructor(private snackBar: MatSnackBar,private formBuilder: FormBuilder,private rolService:RolService, private router: Router) { }

  ngOnInit() {
    this.formularioRol();
  }

  formularioRol(){
    this.rolFormulario = this.formBuilder.group({
      rol           :  [null, Validators.required],
    })
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition:'right',
    });
  }

   agregarRol() {
    if(this.rolFormulario.valid){
      
      this.rolService.agregarRol(this.rolFormulario.value)
      .subscribe( res => {

        console.log(res)

        if (res.result==1) {
          this.openSnackBar('Registro agregado!','')
          this.router.navigate(['main/roles']);
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


}







