import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  private URL = 'http://192.168.1.78:3333/api/v1/clinica';

  constructor(private http: HttpClient, private router: Router) { }

  
  listarCalendario() {
    return this.http.get<any>(this.URL + '/calendario');
  }

  listarCalendarioById(idCalendar: number) {
    return this.http.get(`${this.URL}/calendario/${idCalendar}`);
  }

  agregarCalendario(calendar) {
    return this.http.post<any>(this.URL + '/calendario/add', calendar);
  }

  actualizarCalendar(idCalendar: number, calendar) {
    return this.http.put(`${this.URL}/calendar/${idCalendar}`, calendar);
  }


  eliminarCalendario(idCalendar: number) {
    return this.http.delete(`${this.URL}/calendario/${idCalendar}`);
  }

  activarCalendario(idCalendar: number) {
    return this.http.delete(`${this.URL}/activarcalendario/${idCalendar}`);
  }

  listarCalendarioByIdEspecialidad(calendario) {
    return this.http.post<any>(this.URL + '/calendarioByIdEspecialidad', calendario);
  }


}





