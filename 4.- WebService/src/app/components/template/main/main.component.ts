import { Component, OnInit,ViewChild,EventEmitter ,Output} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
//import { AuthService } from '../../../service/auth/auth.service';
import {MatAccordion} from '@angular/material/expansion';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { PoliclinicoService } from 'src/app/service/policlinico.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  modulos: any = [];
  persona :any={};
  rol :any={};

  @Output()
  emisor : EventEmitter<string> = new EventEmitter<string>();

  constructor(private service:PoliclinicoService,private observer: BreakpointObserver,private router: Router) { }

  ngOnInit(): void {
    this.listarMenuUsuario();
  }

  
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe(( res) => {
      console.log(res)
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }



  cerrarSession(){
    this.service.logout()
  }

  listarMenuUsuario(){
    this.service.listarModulosUsuario().subscribe(
      res => {
        //console.log(res)
        this.modulos=res.modulos
        this.persona=res.persona
        this.rol=res.rol
      },
        err=>console.error(err)
    );
  }

  miperfil(idPersona:number){
    this.router.navigate(['perfil/',idPersona]);
    console.log(idPersona)
  }


  



}
