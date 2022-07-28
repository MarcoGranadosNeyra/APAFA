import { AfterViewInit,Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RolService } from 'src/app/service/rol/rol.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/tools/dialog/dialog.component';
import { dataTableLanguage} from 'src/app/components/tools/dataTableLanguage/dataTableLanguage';

declare const $  : any;

@Component({
  selector: 'app-listar-rol',
  templateUrl: './listar-rol.component.html',
  styleUrls: ['./listar-rol.component.css']
})
export class ListarRolComponent implements OnInit {


  dtOptions: DataTables.Settings = {};

  roles: any = [];

  icono_estado : any = "";

  constructor(public dialog:MatDialog,private snackBar: MatSnackBar,private rolService:RolService,private activateRoute:ActivatedRoute,private router : Router) { }


  ngOnInit() {
    this.listarRoles();
  }

  listarRoles(){
    this.rolService.listarRol().subscribe(
      res => {
        this.roles=res;
        console.log(this.roles)
      },
        err=>console.error(err)
    );
  }

  agregarRol(){
    this.router.navigate(['main/agregarRol']);
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition:'right',
    });
  }

  confirmarDialogo(idRol:number):void{
    const dialogRef=this.dialog.open(DialogComponent,{
          width:'450px',
          data:'¿Esta seguro de eliminar el registro?'
    });

    dialogRef.afterClosed().subscribe(res=>{

      if (res) {
        this.eliminarRol(idRol);
        this.openSnackBar('Registro Eliminado!','Mensaje de Sistema')  
        
      }

    });
  }

  eliminarRol(idRol:number){
    this.rolService.eliminarRol(idRol).subscribe(
      res => {
        this.listarRoles();
      },
      err => console.log(err)
    )
  }

  
}


