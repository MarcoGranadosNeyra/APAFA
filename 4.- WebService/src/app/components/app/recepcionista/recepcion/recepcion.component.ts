import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliclinicoService } from 'src/app/service/policlinico.service';

@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.component.html',
  styleUrls: ['./recepcion.component.css']
})
export class RecepcionComponent implements OnInit {


  pacientes: any = [];


  constructor(private service:PoliclinicoService,private activateRoute:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.listarPacientes();

  }

  
  listarPacientes(){
    this.service.listarPaciente().subscribe(
      res => {
        this.pacientes=res;
        console.log(res);
      },
        err=>console.error(err)
    );
  }


  eliminarPersona(idPersona:number){
    this.service.eliminarPersona(idPersona).subscribe(
      res => {
        this.listarPacientes();
      },
      err => console.log(err)
    )
  }






}
