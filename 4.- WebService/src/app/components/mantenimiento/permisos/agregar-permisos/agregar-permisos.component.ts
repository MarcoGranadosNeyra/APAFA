import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PermisosService } from 'src/app/service/permisos/permisos.service';
import { RolService } from 'src/app/service/rol/rol.service';
import { ModuloService } from 'src/app/service/modulo/modulo.service';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import {MatSnackBar} from '@angular/material/snack-bar';
import { CalendarioService } from 'src/app/service/calendario/calendario.service';

@Component({
  selector: 'app-agregar-permisos',
  templateUrl: './agregar-permisos.component.html',
  styleUrls: ['./agregar-permisos.component.css']
})
export class AgregarPermisosComponent implements OnInit {

  roles: any = [];
  modulos: any = [];

  rolSelected = new FormControl();
  moduloSelected = new FormControl();

  formPermiso: FormGroup;

  permiso: any = {};
  get_id_rol: string = '';

  rolSelecionado = 1
  moduloSelecionado = 1


 constructor(private snackBar: MatSnackBar,private permisoService:PermisosService,private moduloService:ModuloService,private rolService:RolService,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(){
    this.listarRol();
    this.listarModulo();
    this.formMiPermiso();
  }

  formMiPermiso(){
    this.formPermiso = this.formBuilder.group({
      id_rol     :  [null, Validators.required],

    });
  }

  listarRol(){
    this.rolService.listarRol()
    .subscribe(
      res=> {this.roles=res;
      },
      err=> console.error(err)
    )
  }

  getIdRol (event: any) {
    this.get_id_rol = event.target.value;
  }
 

  listarModulo(){
    this.moduloService.listarModulo()
    .subscribe(
      res=> {this.modulos=res;
      },
      err=> console.error(err)
    )
  }

   openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 5000,
        verticalPosition: 'bottom',
        horizontalPosition:'right',
      });
    }

    agregarPermiso() {
      if(this.formPermiso.valid){


        const id_rol=this.formPermiso.get('id_rol').value


        const arrayModulo=this.moduloSelected.value
        
                  for (let j = 0; j < arrayModulo.length; j++) {
                    const id_modulo = arrayModulo[j];

                    this.permiso.id_rol=this.formPermiso.get('id_rol').value
                    this.permiso.id_modulo=id_modulo
                    
                    this.permisoService.agregarPermiso(this.permiso)
                    .subscribe( res => {

                      if (res.result==1) {
                        this.openSnackBar('Registrado Correctamente ','');
                        this.router.navigate(['main/permisos']);
                      }else{
                
                        if(res.message.constraint=="uq_id_rol_id_modulo_permiso"){
                          this.openSnackBar('Error : El Permiso ya esta registrado','');
                        }
                      }
                      
                    });
                    

                  }/*fir for*/

      }//formCalendario.valid
    }//agregar calendario


    cancelar(){
      this.router.navigate(['main/permisos']);
    }
    

 

}
