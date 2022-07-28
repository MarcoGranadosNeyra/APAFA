import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/tools/dialog/dialog.component';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-reporte-citas-atendidas',
  templateUrl: './reporte-citas-atendidas.component.html',
  styleUrls: ['./reporte-citas-atendidas.component.css']
})
export class ReporteCitasAtendidasComponent implements OnInit {

  pacientes: any = [];

  formularioFechas: FormGroup;

  constructor(private formBuilder:FormBuilder,public dialog:MatDialog,private snackBar: MatSnackBar,private service:PoliclinicoService,private activateRoute:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.validarFechas();
  }


  validarFechas(){
    this.formularioFechas = this.formBuilder.group({
      fecha1            :  [null, Validators.required],
      fecha2            :  [null, Validators.required]
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition:'right',
    });
  }


  listarReporte() {
    if(this.formularioFechas.valid){
      this.service.reporteCitasAtendidas(this.formularioFechas.value)
      .subscribe( res => {
       
        this.openSnackBar(res.length +' Registros Encotrados!','')  
        this.pacientes=res
      });
    }
    
  }


}
