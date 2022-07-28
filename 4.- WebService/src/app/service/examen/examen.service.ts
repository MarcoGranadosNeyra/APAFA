import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {


  private URL = 'http://192.168.1.78:3333/api/v1/clinica';

  constructor(private http: HttpClient, private router: Router) { }

  listarExamenByIdEspecialidad(idEspecialidad: number) {
    return this.http.get(`${this.URL}/examenespecialidad/${idEspecialidad}`);
  }

  listarExamenById(idExamen: number) {
    return this.http.get(`${this.URL}/examen/${idExamen}`);
  }




}


