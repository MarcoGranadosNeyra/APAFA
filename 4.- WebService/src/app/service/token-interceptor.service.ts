import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import {PoliclinicoService} from './policlinico.service'


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private service: PoliclinicoService) { }

  intercept(req, next) {
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.service.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }

}