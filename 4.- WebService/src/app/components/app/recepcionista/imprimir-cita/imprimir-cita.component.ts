import { Component,HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import { Cita } from 'src/app/Modelo/Cita';
import * as printJS from 'print-js';

@Component({
  selector: 'app-imprimir-cita',
  templateUrl: './imprimir-cita.component.html',
  styleUrls: ['./imprimir-cita.component.css']
})
export class ImprimirCitaComponent implements OnInit {

  cita :any={}
  printcita :any={}

  constructor(private formBuilder:FormBuilder,private service:PoliclinicoService,private activateRoute:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const params = this.activateRoute.snapshot.params;
    this.listarCitaById(params.id);


  }

  listarCitaById(idCita:number){
    this.service.listarCitaByIdRecepcion(idCita).subscribe(
      res => {
        this.cita=res;
      },
      err => console.log(err)
    )
  }


  listarCitaByIdRecepcion(idCita:number){

    this.service.listarCitaByIdRecepcion(idCita).subscribe(
      res => {
          this.printcita=res;
          const mapped = Object.entries(this.printcita).map(([informacion, detalle]) => ({informacion, detalle}));

          console.log(mapped);

          //printJS({printable: mapped, properties: ['id','paciente','fecha','hora','medico','especialidad'], type: 'json'})
          printJS({printable: mapped, properties: ['informacion','detalle'], type: 'json'})

      },
      err => console.log(err)
    )
  }



  imprimir(){
    const params = this.activateRoute.snapshot.params;
    this.listarCitaByIdRecepcion(params.id)
    
  }

}
