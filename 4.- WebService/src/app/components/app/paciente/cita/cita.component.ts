import { Component, EventEmitter, Input, OnInit ,Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import { EspecialidadService } from 'src/app/service/especialidad/especialidad.service';


@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  especialidades: any = [];

  @Output()
  emisor : EventEmitter<string> = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder,private service:PoliclinicoService,private especialidadService:EspecialidadService,private activateRoute:ActivatedRoute,private router : Router) { }

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

  
  getEspecialidad(idEspecialidad:string){
    console.log(idEspecialidad)
    this.emisor.emit(idEspecialidad);
  
  }

}

