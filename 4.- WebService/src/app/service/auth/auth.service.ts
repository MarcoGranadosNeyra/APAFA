import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  //private URL = 'http://51.161.34.30:3333';
  private URL = 'http://192.168.1.88:3333/api/v1/apafa';

  constructor(private http: HttpClient, private router: Router) { }

  registro(user: any) {
    return this.http.post<any>(this.URL + '/usuario/add', user);
  }

  login(user: any) {
    return this.http.post<any>(this.URL + '/login', user);
  }


  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  listarModulosUsuario() {
    return this.http.get<any>(this.URL + '/modulosUsuario');
  }

  listarPerfilUsuario() {
    return this.http.get<any>(this.URL + '/perfilUsuario');
  }



}






