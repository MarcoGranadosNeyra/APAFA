import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/tools/dialog/dialog.component';

@Component({
  selector: 'app-listmedico',
  templateUrl: './listmedico.component.html',
  styleUrls: ['./listmedico.component.css']
})
export class ListmedicoComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  medico: any = [];

  constructor(public dialog:MatDialog,private snackBar: MatSnackBar,private service:PoliclinicoService,private activateRoute:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.listarMedico()
  }


  listarMedico(){
    this.service.listarMedico().subscribe(
      res => {
        this.medico=res;
      },
        err=>console.error(err)
    );
  }

  agregarMedico(){
    this.router.navigate(['main/agregarMedico']);
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
        this.eliminarMedico(idEspecialidad);
        this.openSnackBar('Registro Eliminado!','Mensaje de Sistema')  
        
      }

    });
  }


  eliminarMedico(idMedico:number){
    this.service.eliminarMedico(idMedico).subscribe(
      res => {
        this.listarMedico();
      },
      err => console.log(err)
    )
  }

  
}


