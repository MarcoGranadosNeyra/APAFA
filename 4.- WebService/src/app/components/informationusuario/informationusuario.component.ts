import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AtencionclienteComponent } from 'src/app/components/tools/atencioncliente/atencioncliente.component';

@Component({
  selector: 'app-informationusuario',
  templateUrl: './informationusuario.component.html',
  styleUrls: ['./informationusuario.component.css']
})
export class InformationusuarioComponent {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
    
  }


  
  confirmarDialogo():void{
    const dialogRef=this.dialog.open(AtencionclienteComponent,{
          width:'650px',
          data:'escribanos al correo : administracion@clinicalurin.com o llamenos a telefono : 923667760'
    });

    dialogRef.afterClosed().subscribe(res=>{

      if (res) {

      }

    });
  }




}
