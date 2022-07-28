import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/tools/dialog/dialog.component';
import { dataTableLanguage } from 'src/app/components/tools/dataTableLanguage/dataTableLanguage';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';


@Component({
  selector: 'app-listusuario',
  templateUrl: './listusuario.component.html',
  styleUrls: ['./listusuario.component.css']
})
export class ListusuarioComponent implements OnInit {
  dtOptions = { 
    language: dataTableLanguage.spanish_datatables
  };

  usuario: any = [];

  icono_estado : any = "";

  constructor(public dialog:MatDialog,private snackBar: MatSnackBar,private service:PoliclinicoService,private usuarioService:UsuarioService,private activateRoute:ActivatedRoute,private router : Router) { }


  ngOnInit() {
    this.listarUsuario();
  }

  listarUsuario(){
    this.usuarioService.listarUsuarios().subscribe(
      res => {
        this.usuario=res;
      },
        err=>console.error(err)
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition:'right',
    });
  }

  confirmarDesactivarUsuario(idUsuario:number):void{
    const dialogRef=this.dialog.open(DialogComponent,{
          width:'450px',
          data:'¿Esta seguro de Desactivar el Usuario?'
    });

    dialogRef.afterClosed().subscribe(res=>{

      if (res) {
        this.desactivarUsuario(idUsuario);
       
        this.openSnackBar('Usuario Desactivado!','Mensaje de Sistema')  
        
      }

    });
  }

  confirmarActivarUsuario(idUsuario:number):void{
    const dialogRef=this.dialog.open(DialogComponent,{
          width:'450px',
          data:'¿Esta seguro de Activar el Usuario?'
    });

    dialogRef.afterClosed().subscribe(res=>{

      if (res) {
        this.activarUsuario(idUsuario);
       
        this.openSnackBar('Usuario Activado!','Mensaje de Sistema')  
        
      }

    });
  }

  desactivarUsuario(idUsuario:number){
    this.usuarioService.desactivarUsuario(idUsuario).subscribe(
      res => {
        this.listarUsuario();
      },
      err => console.log(err)
    )
  }

  activarUsuario(idUsuario:number){
    this.usuarioService.activarUsuario(idUsuario).subscribe(
      res => {
        this.listarUsuario();
      },
      err => console.log(err)
    )
  }

}
