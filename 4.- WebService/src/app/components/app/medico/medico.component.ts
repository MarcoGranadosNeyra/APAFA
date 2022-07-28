import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/tools/dialog/dialog.component';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  cita: any = [];
  persona:any=[];
  usuario:any=[];

  constructor(public dialog:MatDialog,private snackBar: MatSnackBar,private service:PoliclinicoService,private activateRoute:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.listarPacientesdeMedico()
    this.listarPerfil();
  }

  listarPerfil(){
    this.service.listarPerfil()
    .subscribe(
      res => {
        
        this.persona=res.persona
        this.usuario=res.usuario
      },
      err => console.log(err)
    )
  }

  listarPacientesdeMedico(){
    this.service.listarPacientesdeMedico().subscribe(
      res => {
        this.cita=res;
        
      },
        err=>console.error(err)
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition:'right',
    });
  }


  confirmarDialogo(idCita:number):void{
    const dialogRef=this.dialog.open(DialogComponent,{
          width:'450px',
          data:'¿Confirma la atencion al paciente?'
    });

    dialogRef.afterClosed().subscribe(res=>{

      if (res) {
        this.atenderCita(idCita);
        this.openSnackBar('Paciente Atendido!','Mensaje de Sistema')  
        
      }

    });
  }


  confirmarReprogramacion(idCita:number):void{
    const dialogRef=this.dialog.open(DialogComponent,{
          width:'450px',
          data:'¿Confirma la reprogramacion al paciente?'
    });

    dialogRef.afterClosed().subscribe(res=>{

      if (res) {
        this.reprogramarCita(idCita);
        this.openSnackBar('Se envio Reprogramacion Al Paciente!','Mensaje de Sistema')  
        
      }

    });
  }





  atenderCita(idCita:number){
    this.service.atenderCita(idCita).subscribe(
      res => {
        this.listarPacientesdeMedico();
      },
      err => console.log(err)
    )
  }


  reprogramarCita(idCita:number){
    this.service.reprogramarCita(idCita).subscribe(
      res => {
        this.listarPacientesdeMedico();
      },
      err => console.log(err)
    )
  }





}
