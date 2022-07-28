import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/tools/dialog/dialog.component';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import * as printJS from 'print-js';

@Component({
  selector: 'app-reportedescuentos',
  templateUrl: './reportedescuentos.component.html',
  styleUrls: ['./reportedescuentos.component.css']
})
export class ReportedescuentosComponent implements OnInit {

  public mostrar = false;

  descuentoTotal: any = [];
  descuentos: any = [];
  persona:any=[];
  usuario:any=[];

  formularioFechas: FormGroup;

  fechaActual0 = new Date();

  constructor(private formBuilder:FormBuilder,public dialog:MatDialog,private snackBar: MatSnackBar,private service:PoliclinicoService,private activateRoute:ActivatedRoute,private router : Router) { }

  ngOnInit() {

    this.validarFechas();
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


  validarFechas(){
    this.formularioFechas = this.formBuilder.group({
      fecha1            :  [null, Validators.required],
      fecha2            :  [null, Validators.required]
    });
  }

  generarReporte(){
    this.listarReporte();
    this.listarReporteTotal();
    this.mostrarocultar();
  }

  mostrarocultar(){
    this.mostrar=true
  }

  listarReporte() {
    if(this.formularioFechas.valid){
      this.service.reporteDescuentos(this.formularioFechas.value)
      .subscribe( res => {
        console.log(res)
        this.descuentos=res

      });
    }
    
  }

  listarReporteTotal() {
    if(this.formularioFechas.valid){
      this.service.reporteDescuentosTotal(this.formularioFechas.value)
      .subscribe( res => {
        
        this.descuentoTotal=res

      });
    }
    
  }


  
  imprimir(){
    printJS({printable: this.descuentos, properties: ['id','paciente','forma_pago','pago','descuento','fecha','hora'], type: 'json'})
    
  }





}
