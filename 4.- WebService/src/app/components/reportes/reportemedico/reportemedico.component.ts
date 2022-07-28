import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/tools/dialog/dialog.component';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-reportemedico',
  templateUrl: './reportemedico.component.html',
  styleUrls: ['./reportemedico.component.css']
})
export class ReportemedicoComponent implements OnInit {

  pacientes: any = [];
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


  listarReporte() {
    if(this.formularioFechas.valid){
      this.service.reporteMedicoAtenciones(this.formularioFechas.value)
      .subscribe( res => {
        console.log(res)
        this.pacientes=res

      });
    }
    
  }





}
