import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import {AuthService} from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private service: AuthService) { }

  intercept(req: { clone: (arg0: { setHeaders: { Authorization: string; }; }) => any; },next: { handle: (arg0: any) => any; }) {
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.service.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }

}



