import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/tools/dialog/dialog.component';

@Component({
  selector: 'app-miscitasreprogramadas',
  templateUrl: './miscitasreprogramadas.component.html',
  styleUrls: ['./miscitasreprogramadas.component.css']
})
export class MiscitasreprogramadasComponent implements OnInit {

  citas: any = [];

  constructor(public dialog:MatDialog,private snackBar: MatSnackBar,private service:PoliclinicoService,private activateRoute:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    
    this.listarCitasreprogramadas();
  }


  listarCitasreprogramadas(){
    this.service.listarCitasreprogramadas().subscribe(
      res => {
        this.citas=res;

        //this.pendiente=res;
        console.log(res)
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
          
          data:'¿Confirma la reprogramacion de la cita? '
    });

    dialogRef.afterClosed().subscribe(res=>{

      if (res) {
        this.reprogramarCita(idCita);
        //this.openSnackBar('Se envio Reprogramacion Al Medico!','Mensaje de Sistema')  
        
      }

    });
  }

  

  reprogramarCita(idCita:number){
    this.service.reprogramarCita(idCita).subscribe(
      res => {
        //this.listarPacientesdeMedico();
        this.router.navigate(['/reprogramar/',idCita]);
      },
      err => console.log(err)
    )
  }






}