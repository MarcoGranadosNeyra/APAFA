import { Component, EventEmitter, Input, OnInit ,Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import { PoliclinicoService } from 'src/app/service/policlinico.service';

@Component({
  selector: 'app-agregarcitarecepcion',
  templateUrl: './agregarcitarecepcion.component.html',
  styleUrls: ['./agregarcitarecepcion.component.css']
})
export class AgregarcitarecepcionComponent implements OnInit {

  especialidades: any = [];
  id_especialidad: number = 0;

  id_dia:number=0;

  fechaActual0 = new Date();         /* lunes   */
  fechaActual1: Date = new Date();   /* martes     */
  fechaActual2: Date = new Date();   /* miercoles    */
  fechaActual3: Date = new Date();   /* jueves */
  fechaActual4: Date = new Date();   /* viernes    */
  fechaActual5: Date = new Date();   /* sabado   */
  fechaActual6: Date = new Date();   /* domingo    */

  parametros = {id_especialidad:0,id_dia:0};

  calendario :any= {};

  constructor(private formBuilder: FormBuilder,private service:PoliclinicoService,private activateRoute:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    const params = this.activateRoute.snapshot.params;
    this.listarPacienteById(params.id)
    this.listarEspecialidades()
    this.listarDia()
    
  }

  listarEspecialidades(){
    this.service.listarEspecialidad().subscribe(
      res => {
        this.especialidades=res;
      },
        err=>console.error(err)
    );
  }

getIdEspecialidad (event: any) {
  this.id_especialidad = event.target.value;
  this.parametros.id_especialidad=this.id_especialidad;
  this.listarCalendario()
}


/*DIA */
listarDia(){
  this.fechaActual0.setDate(this.fechaActual0.getDate());
  this.fechaActual1.setDate(this.fechaActual1.getDate()+1);
  this.fechaActual2.setDate(this.fechaActual2.getDate()+2);
  this.fechaActual3.setDate(this.fechaActual3.getDate()+3);
  this.fechaActual4.setDate(this.fechaActual4.getDate()+4);
  this.fechaActual5.setDate(this.fechaActual5.getDate()+5);
  this.fechaActual6.setDate(this.fechaActual6.getDate()+6);
}


seasons: any = [
  this.fechaActual0, 
  this.fechaActual1, 
  this.fechaActual2, 
  this.fechaActual3, 
  this.fechaActual4, 
  this.fechaActual5,
  this.fechaActual6 
];


getFecha:any=null;

obtenerDia(fecha: Date) {
 
  this.getFecha=fecha

  let day = fecha.getDate()
  let month = fecha.getMonth()+1
  let year = fecha.getFullYear()

this.getFecha=year+'-'+month+'-'+day

  this.parametros.id_especialidad=this.id_especialidad;
  this.parametros.id_dia=fecha.getDay();

  this.listarCalendario()
}


listarCalendario() {
    this.service.listarCalendarioByIdEspecialidad(this.parametros)
    .subscribe( res => {
      this.calendario=res;
    });
}


getIdCalendario (idCalendario:number,hora:string) {
  this.citaParams.id_calendario=idCalendario
  this.citaParams.id_paciente=this.paciente.id
  this.citaParams.fecha=this.getFecha
  this.citaParams.hora=hora
  
  this.agregarCita()
}


id_usuario:number=0;
id_calendario:number=0;

citaParams = {
  id_paciente:0,
  id_calendario:0,
  fecha:null,
  hora: null
};

paciente:any=[];



listarPacienteById(idPaciente:number){
  this.service.listarPacienteById(idPaciente).subscribe(
    res => {
      this.paciente=res
      console.log(res);
    },
    err => console.log(err)
  )
}

agregarCita() {
  console.log(this.citaParams);
    this.service.agregarCita(this.citaParams)
    .subscribe( res =>
      {
        /*ME FALTA VALIDA ESTE REST */
        console.log(res);
        this.router.navigate(['/agregarpagorecepcion/',res]);
    });
}
 

}



