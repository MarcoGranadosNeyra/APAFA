import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private URL = 'http://192.168.1.88:3333/api/v1/apafa';

  constructor(private http: HttpClient, private router: Router) { }

  
  listarDepartamento() {
    return this.http.get<any>(this.URL + '/departamento');
  }

  listarProvincia(idDepartamento: string) {
    return this.http.get(`${this.URL}/provincia/${idDepartamento}`);
  }

  listarDistrito(idProvincia: string) {
    return this.http.get(`${this.URL}/distrito/${idProvincia}`);
  }


  listarDocumento() {
    return this.http.get<any>(this.URL + '/documento');
  }

  listarSexo() {
    return this.http.get<any>(this.URL + '/sexo');
  }


/*mantenimiento de personas */

listarPersona() {
  return this.http.get<any>(this.URL + '/persona');
}

listarPersonaById(idPersona: number) {
  return this.http.get(`${this.URL}/persona/${idPersona}`);
}

listarPersonaByDNI(datos: any) {
  return this.http.post<any>(this.URL + '/persona/DNI', datos);
}

agregarPersona(persona: any) {
  return this.http.post<any>(this.URL + '/persona/add', persona);
}

/*
agregarPersonaLogin(persona: any) {
  return this.http.post<any>(this.URL + '/persona/add/login', persona);
}
*/

actualizarPersona(idPersona: number, persona: any) {
  return this.http.put(`${this.URL}/persona/${idPersona}`, persona);
}


eliminarPersona(idPersona: number) {
  return this.http.delete(`${this.URL}/persona/${idPersona}`);
}








/*
validatorUsuario(idPersona:number) {
  //return this.http.post<any>(this.URL + '/validatorUsuario', datos);
  return this.http.get(`${this.URL}/validatorUsuario/${idPersona}`);
}
*/

}






