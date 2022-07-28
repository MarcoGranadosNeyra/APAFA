import { Component,HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import { Cita } from 'src/app/Modelo/Cita';
import * as printJS from 'print-js';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.css']
})
export class CongratulationsComponent implements OnInit {

  cita :any={}

  constructor(public dataService: DataService ,private formBuilder:FormBuilder,private service:PoliclinicoService,private activateRoute:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
    this.listarCitaById(this.dataService.id_cita);
  }

  listarCitaById(idCita:number){
    this.service.listarCitaById(idCita).subscribe(
      res => {
        this.cita=res
      },
      err => console.log(err)
    )
  }

  inicio(){
    this.router.navigate(['main']);
  }
  

}
