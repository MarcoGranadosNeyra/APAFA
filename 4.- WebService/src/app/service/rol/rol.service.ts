import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  //private URL = 'http://51.161.34.30:3333';
  private URL = 'http://192.168.1.88:3333/api/v1/apafa';

  constructor(private http: HttpClient, private router: Router) { }

/*mantenimiento de personas */

listarRol() {
  return this.http.get<any>(this.URL + '/rol');
}

listarRolById(idRol: number) {
  return this.http.get(`${this.URL}/rol/${idRol}`);
}

agregarRol(rol: any) {
  return this.http.post<any>(this.URL + '/rol/add', rol);
}

actualizarRol(idRol: number, rol) {
  return this.http.put(`${this.URL}/rol/${idRol}`, rol);
}


eliminarRol(idRol: number) {
  return this.http.delete(`${this.URL}/rol/${idRol}`);
}







listarDetalleRol(idRol: number) {
  return this.http.get(`${this.URL}/detalleRol/${idRol}`);
}

eliminarRolDetalle(idRol: number) {
  return this.http.delete(`${this.URL}/eliminarRolDetalle/${idRol}`);
}






}


