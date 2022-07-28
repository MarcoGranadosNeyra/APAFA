import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {

    private URL = 'http://192.168.1.88:3333/api/v1/apafa';

    constructor(private http: HttpClient, private router: Router) { }

  listarPermisos() {
    return this.http.get<any>(this.URL + '/permiso');
  }


  listarPermisoById(idPermiso: number) {
    return this.http.get(`${this.URL}/permiso/${idPermiso}`);
  }

  agregarPermiso(permiso) {
    return this.http.post<any>(this.URL + '/permiso/add', permiso);
  }

  actualizarPermiso(idPermiso: number, permiso) {
    return this.http.put(`${this.URL}/permiso/${idPermiso}`, permiso);
  }


  eliminarPermiso(idPermiso: number) {
    return this.http.delete(`${this.URL}/permiso/${idPermiso}`);
  }

}