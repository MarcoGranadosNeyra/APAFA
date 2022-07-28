import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import {ApisPeruService} from '../apisPeru/apis-peru.service';

@Injectable({
  providedIn: 'root'
})

  export class TokenInterceptorApisPeruService implements HttpInterceptor {

    constructor(private service: ApisPeruService) { }
  
    intercept(req: { clone: (arg0: { setHeaders: { Authorization: string; }; }) => any; },next: { handle: (arg0: any) => any; }) {
      let tokenizeReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.service.getToken()}`
        }
      });
      return next.handle(tokenizeReq);
    }
  
  }
  
  