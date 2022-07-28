import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL = 'http://192.168.1.88:3333/api/v1/apafa';

  constructor(private http: HttpClient, private router: Router) { }

  
  listarUsuarios() {
    return this.http.get<any>(this.URL + '/usuario');
  }


  listarUsuarioById(idUser: number) {
    return this.http.get(`${this.URL}/usuario/${idUser}`);
  }

  listarUsuarioByUsuario(user: any) {
    return this.http.post<any>(this.URL + '/buscarUsuario', user);
  }

  agregarUsuario(user: any) {
    return this.http.post<any>(this.URL + '/usuario/add', user);
  }

  agregarUsuarioPaciente(persona: any) {
    return this.http.post<any>(this.URL + '/usuarioPaciente/add', persona);
  }

  actualizarUsuario(idUsuario: number, usuario: any) {
    return this.http.put(`${this.URL}/usuario/${idUsuario}`, usuario);
  }


  desactivarUsuario(idUsuario: number) {
    return this.http.delete(`${this.URL}/desactivar/usuario/${idUsuario}`);
  }

  activarUsuario(idUsuario: number) {
    return this.http.delete(`${this.URL}/activar/usuario/${idUsuario}`);
  }



}






