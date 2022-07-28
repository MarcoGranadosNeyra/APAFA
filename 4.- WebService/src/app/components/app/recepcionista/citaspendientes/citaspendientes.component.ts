import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/tools/dialog/dialog.component';

@Component({
  selector: 'app-citaspendientes',
  templateUrl: './citaspendientes.component.html',
  styleUrls: ['./citaspendientes.component.css']
})
export class CitaspendientesComponent implements OnInit {

  citaspendientes: any = [];


  constructor(public dialog:MatDialog,private snackBar: MatSnackBar,private service:PoliclinicoService,private activateRoute:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.listarCitasPendientesRecepcion();

  }

  
  listarCitasPendientesRecepcion(){
    this.service.listarCitasPendientesRecepcion().subscribe(
      res => {
        this.citaspendientes=res;
        console.log(res);
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



  confirmarReprogramacion(idCita:number):void{
    const dialogRef=this.dialog.open(DialogComponent,{
          width:'450px',
          data:'¿Confirma la reprogramacion al paciente?'
    });

    dialogRef.afterClosed().subscribe(res=>{

      if (res) {
        this.reprogramarCita(idCita);
       // this.openSnackBar('Se envio Reprogramacion Al Paciente!','Mensaje de Sistema')  
        
      }

    });
  }


  reprogramarCita(idCita:number){
    this.service.reprogramarCita(idCita).subscribe(
      res => {
        this.router.navigate(['/reprogramarcitarecepcion/',idCita]);
      },
      err => console.log(err)
    )
  }


  




}
