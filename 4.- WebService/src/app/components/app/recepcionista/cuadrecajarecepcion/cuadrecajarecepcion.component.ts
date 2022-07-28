import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/tools/dialog/dialog.component';
import * as printJS from 'print-js';

@Component({
  selector: 'app-cuadrecajarecepcion',
  templateUrl: './cuadrecajarecepcion.component.html',
  styleUrls: ['./cuadrecajarecepcion.component.css']
})
export class CuadrecajarecepcionComponent implements OnInit {

  efectivo: any = [];
  ingresos: any = [];
  cuadrecaja: any = [];


  constructor(public dialog:MatDialog,private snackBar: MatSnackBar,private service:PoliclinicoService,private activateRoute:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.listarIngresosRecepcion();
    this.cuadrarCajaRecepcion();
    this.listarIngresosEfectivorecepcion();
  }

  
  listarIngresosRecepcion(){
    this.service.listarIngresosRecepcion().subscribe(
      res => {
        this.ingresos=res;
        
      },
        err=>console.error(err)
    );
  }

  cuadrarCajaRecepcion(){
    this.service.cuadrarCajaRecepcion().subscribe(
      res => {
        this.cuadrecaja=res;
        
      },
        err=>console.error(err)
    );
  }

  listarIngresosEfectivorecepcion(){
    this.service.listarIngresosEfectivorecepcion().subscribe(
      res => {
        this.efectivo=res;
        console.log(res);
      },
        err=>console.error(err)
    );
  }





  imprimir(){
    printJS({printable: this.ingresos, properties: ['id','forma_pago','especialidad','ingresos','descuentos','fecha','hora'], type: 'json'})
    
  }




  




}
