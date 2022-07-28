import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  montoHoy: any = [];
  monto: any = [];
  persona:any=[];
  usuario:any=[];
  totalPendietes:any=[];
  totalAtendidas:any=[];

  descuentos: any = [];
  descuentosHoy: any = [];


  constructor(private service:PoliclinicoService,private activateRoute:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.listarTotalIngresos();
    this.listarPerfil();
    this.totalCitasAtendidas();
    this.totalCitasPendientes();
    this.listarTotalIngresosHoy();
    this.listarTotalDescuentos();
    this.listarTotalDescuentosHoy();
  }

  listarTotalDescuentosHoy(){
    this.service.listarTotalDescuentosHoy().subscribe(
      res => {
        this.descuentosHoy=res;
        console.log("total descuetos hoy",res)
      },
        err=>console.error(err)
    );
  }

  listarTotalDescuentos(){
    this.service.listarTotalDescuentos().subscribe(
      res => {
        this.descuentos=res;
        console.log("descuentos",res)
      },
        err=>console.error(err)
    );
  }

  listarTotalIngresosHoy(){
    this.service.listarTotalIngresosHoy().subscribe(
      res => {
        this.montoHoy=res;
        console.log("hoy",res)
      },
        err=>console.error(err)
    );
  }

  listarTotalIngresos(){
    this.service.listarTotalIngresos().subscribe(
      res => {
        this.monto=res;
        console.log(res)
      },
        err=>console.error(err)
    );
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

  totalCitasPendientes(){
    this.service.totalCitasPendientes()
    .subscribe(
      res => {
        
        this.totalPendietes=res
      },
      err => console.log(err)
    )
  }

  totalCitasAtendidas(){
    this.service.totalCitasAtendidas()
    .subscribe(
      res => {

        this.totalAtendidas=res

      },
      err => console.log(err)
    )
  }

}
