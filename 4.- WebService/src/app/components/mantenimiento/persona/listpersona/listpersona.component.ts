import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliclinicoService } from 'src/app/service/policlinico.service';

@Component({
  selector: 'app-listpersona',
  templateUrl: './listpersona.component.html',
  styleUrls: ['./listpersona.component.css']
})
export class ListpersonaComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  personas: any = [];


  constructor(private service:PoliclinicoService,private activateRoute:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.listarPersonas();
  }

  listarPersonas(){
    this.service.listarPersona().subscribe(
      res => {
        this.personas=res;
      },
        err=>console.error(err)
    );
  }

  agregarPersona(){
    this.router.navigate(['main/agregarPersona']);
  }


  eliminarPersona(idPersona:number){
    this.service.eliminarPersona(idPersona).subscribe(
      res => {
        this.listarPersonas();
      },
      err => console.log(err)
    )
  }






}
