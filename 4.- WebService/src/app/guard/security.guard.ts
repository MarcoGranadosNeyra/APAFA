import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PoliclinicoService } from 'src/app/service/policlinico.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {

  constructor(private service: PoliclinicoService,private router: Router) { }

  canActivate(): boolean {
    if (this.service.loggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}

