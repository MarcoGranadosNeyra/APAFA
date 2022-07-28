import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private URL = 'http://192.168.1.78:3333/api/v1/clinica';

  constructor(private http: HttpClient, private router: Router) { }

  
  listarMedico() {
    return this.http.get<any>(this.URL + '/medico');
  }


  listarMedicoById(idMedico: number) {
    return this.http.get(`${this.URL}/medico/${idMedico}`);
  }

  agregarMedico(medico: any) {
    return this.http.post<any>(this.URL + '/medico/add', medico);
  }

  actualizarMedico(idMedico: number, medico: any) {
    return this.http.put(`${this.URL}/medico/${idMedico}`, medico);
  }



}
