import { Component, EventEmitter, Input, OnInit ,Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import { EspecialidadService } from 'src/app/service/especialidad/especialidad.service';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-especialidad-select',
  templateUrl: './especialidad-select.component.html',
  styleUrls: ['./especialidad-select.component.css']
})
export class EspecialidadSelectComponent implements OnInit {


  especialidades: any = [];

  constructor(private dataService:DataService,private formBuilder: FormBuilder,private service:PoliclinicoService,private especialidadService:EspecialidadService,private activateRoute:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.listarEspecialidades()
  }

  listarEspecialidades(){
    this.especialidadService.listarEspecialidad().subscribe(
      res => {
        this.especialidades=res;
      },
        err=>console.error(err)
    );
  }

  
  getEspecialidad(idEspecialidad:number){
    console.log(idEspecialidad)
    this.dataService.id_especialidad=idEspecialidad;
    this.router.navigate(['main/examenes']);
  }

}

