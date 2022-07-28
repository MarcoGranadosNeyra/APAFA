import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliclinicoService } from 'src/app/service/policlinico.service';

@Component({
  selector: 'app-mat-toolbar',
  templateUrl: './mat-toolbar.component.html',
  styleUrls: ['./mat-toolbar.component.css']
})
export class MatToolbarComponent implements OnInit {

  constructor(private service:PoliclinicoService,private activateRoute:ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
  }

  cerrarSession(){
    this.service.logout()
  }


}
