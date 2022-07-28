import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  private URL = 'http://192.168.1.78:3333/api/v1/clinica';

  constructor(private http: HttpClient, private router: Router) { }

  
  listarEspecialidad() {
    return this.http.get<any>(this.URL + '/especialidad');
  }


listarEspecialidadById(idEspecialidad: number) {
  return this.http.get(`${this.URL}/especialidad/${idEspecialidad}`);
}

agregarEspecialidad(especialidad: any) {
  return this.http.post<any>(this.URL + '/especialidad/add', especialidad);
}


actualizarEspecialidad(idEspecialidad: number, especialidad: any) {
  return this.http.put(`${this.URL}/especialidad/${idEspecialidad}`, especialidad);
}


eliminarPersona(idEspecialidad: number) {
  return this.http.delete(`${this.URL}/especialidad/${idEspecialidad}`);
}


}






