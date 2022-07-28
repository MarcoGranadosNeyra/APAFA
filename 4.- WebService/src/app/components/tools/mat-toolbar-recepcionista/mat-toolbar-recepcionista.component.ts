import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliclinicoService } from 'src/app/service/policlinico.service';

@Component({
  selector: 'app-mat-toolbar-recepcionista',
  templateUrl: './mat-toolbar-recepcionista.component.html',
  styleUrls: ['./mat-toolbar-recepcionista.component.css']
})
export class MatToolbarRecepcionistaComponent implements OnInit {
  
  constructor(private service:PoliclinicoService,private activateRoute:ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
  }

  cerrarSession(){
    this.service.logout()
  }

}