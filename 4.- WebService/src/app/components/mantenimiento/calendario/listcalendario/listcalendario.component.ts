import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/tools/dialog/dialog.component';

@Component({
  selector: 'app-listcalendario',
  templateUrl: './listcalendario.component.html',
  styleUrls: ['./listcalendario.component.css']
})
export class ListcalendarioComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  calendario: any = [];

  constructor(public dialog:MatDialog,private snackBar: MatSnackBar,private service:PoliclinicoService,private activateRoute:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.listarCalendario()
  }

  listarCalendario(){
    this.service.listarCalendario().subscribe(
      res => {
     
        this.calendario=res;
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
  
  confirmarDialogoDesactivar(idCalendario:number):void{
    const dialogRef=this.dialog.open(DialogComponent,{
          width:'450px',
          data:'¿Esta seguro de Desactivar el Horario del Medico?'
    });

    dialogRef.afterClosed().subscribe(res=>{

      if (res) {
        this.desactivarCalendario(idCalendario);
        this.openSnackBar('El Horario se ha Desactivado!','')  
        
      }

    });
  }




  confirmarDialogoActivar(idCalendario:number):void{
    const dialogRef=this.dialog.open(DialogComponent,{
          width:'450px',
          data:'¿Esta seguro de Activar el Horario del Medico?'
    });

    dialogRef.afterClosed().subscribe(res=>{

      if (res) {
        this.activarCalendario(idCalendario);
        this.openSnackBar('El Horario se ha Activado!','')  
        
      }

    });
  }

  activarCalendario(idCalendario:number){
    this.service.activarCalendario(idCalendario).subscribe(
      res => {
        this.listarCalendario();
      },
      err => console.log(err)
    )
  }

  desactivarCalendario(idCalendario:number){
    this.service.desactivarCalendario(idCalendario).subscribe(
      res => {
        this.listarCalendario();
      },
      err => console.log(err)
    )
  }

  agregarCalendario(){
    this.router.navigate(['main/agregarCalendario']);
  }


}
