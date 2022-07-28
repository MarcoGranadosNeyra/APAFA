import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/tools/dialog/dialog.component';



@Component({
  selector: 'app-listespecialidad',
  templateUrl: './listespecialidad.component.html',
  styleUrls: ['./listespecialidad.component.css']
})
export class ListespecialidadComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  durationInSeconds = 5;
  especialidad: any = [];


  constructor(public dialog:MatDialog,private snackBar: MatSnackBar,private service:PoliclinicoService,private activateRoute:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.listarEspecialidad()
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition:'right',
    });
  }

  confirmarDialogo(idEspecialidad:number):void{
    const dialogRef=this.dialog.open(DialogComponent,{
          width:'450px',
          data:'¿Esta seguro de eliminar el registro?'
    });

    dialogRef.afterClosed().subscribe(res=>{

      if (res) {
        this.eliminarEspecialidad(idEspecialidad);
        this.openSnackBar('Registro Eliminado!','Mensaje de Sistema')  
      }
    });
  }

  agregarEspecialidad(){
    this.router.navigate(['main/agregarEspecialidad']);
  }

  listarEspecialidad(){
    this.service.listarEspecialidad().subscribe(
      res => {
        this.especialidad=res;
      },
        err=>console.error(err)
    );
  }


  eliminarEspecialidad(idEspecialidad:number){
    this.service.eliminarEspecialidad(idEspecialidad).subscribe(
      res => {
        this.listarEspecialidad();
      },
      err => console.log(err)
    )
  }


}
