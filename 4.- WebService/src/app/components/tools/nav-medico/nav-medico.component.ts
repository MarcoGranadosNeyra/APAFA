import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { PoliclinicoService } from 'src/app/service/policlinico.service';

@Component({
  selector: 'app-nav-medico',
  templateUrl: './nav-medico.component.html',
  styleUrls: ['./nav-medico.component.css']
})
export class NavMedicoComponent {


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private service:PoliclinicoService) {}

  cerrarSession(){
    this.service.logout()
  }


}
