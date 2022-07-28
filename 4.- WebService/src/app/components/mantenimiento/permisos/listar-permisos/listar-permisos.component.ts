import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PermisosService } from 'src/app/service/permisos/permisos.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/tools/dialog/dialog.component';

@Component({
  selector: 'app-listar-permisos',
  templateUrl: './listar-permisos.component.html',
  styleUrls: ['./listar-permisos.component.css']
})
export class ListarPermisosComponent implements OnInit {


  dtOptions: DataTables.Settings = {};

  permisos: any = [];

  constructor(public dialog:MatDialog,private snackBar: MatSnackBar,private permisosService:PermisosService,private activateRoute:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.listarPermisos()
  }

  listarPermisos(){
    this.permisosService.listarPermisos().subscribe(
      res => {
     
        this.permisos=res;
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
  
  confirmarDialogo(idPermiso:number):void{
    const dialogRef=this.dialog.open(DialogComponent,{
          width:'450px',
          data:'¿Esta seguro de Eliminar el Registro?'
    });

    dialogRef.afterClosed().subscribe(res=>{

      if (res) {
        this.eliminarPermiso(idPermiso);
        this.openSnackBar('Mensaje : Registro Eliminado!','')  
        
      }

    });
  }

  eliminarPermiso(idPermiso:number){
    this.permisosService.eliminarPermiso(idPermiso).subscribe(
      res => {
        this.listarPermisos();
      },
      err => console.log(err)
    )
  }

  agregarPemiso(){
    this.router.navigate(['main/agregarPermiso']);
  }


}
