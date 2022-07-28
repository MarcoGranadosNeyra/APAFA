import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PoliclinicoService {

  //private URL = 'http://192.168.1.88:3333/api/v1/apafa';
  private URL = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }

  listarCotizacion(fechas) {
    return this.http.post<any>(this.URL + '/cotizacion', fechas);
  }

  listarEvento(fechas) {
    return this.http.post<any>(this.URL + '/evento', fechas);
  }

  listarIngresos(fechas) {
    return this.http.post<any>(this.URL + '/ingreso', fechas);
  }

  listarGastos(fechas) {
    return this.http.post<any>(this.URL + '/gasto', fechas);
  }

  login(user) {
    return this.http.post<any>(this.URL + '/login', user);
  }

  registro(user) {
    return this.http.post<any>(this.URL + '/usuario/add', user);
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



  listarPerfil() {
    return this.http.get<any>(this.URL + '/perfil');
  }

  listarPerfiles() {
    return this.http.get<any>(this.URL + '/perfiles');
  }

  listarModulosUsuario() {
    return this.http.get<any>(this.URL + '/modulosUsuario');
  }



  listarCalendarioByIdEspecialidad(calendario) {
    return this.http.post<any>(this.URL + '/calendarioByIdEspecialidad', calendario);
  }


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

  
  agregarPersona(persona) {
    return this.http.post<any>(this.URL + '/persona/add', persona);
  }

  agregarPersonaLogin(persona) {
    return this.http.post<any>(this.URL + '/persona/add/login', persona);
  }

  actualizarPersona(idPersona: number, persona) {
    return this.http.put(`${this.URL}/persona/${idPersona}`, persona);
  }


  eliminarPersona(idPersona: number) {
    return this.http.delete(`${this.URL}/persona/${idPersona}`);
  }

  listarPersonaById(idPersona: number) {
    return this.http.get(`${this.URL}/persona/${idPersona}`);
  }

  validatorPersona(datos) {
    return this.http.post<any>(this.URL + '/validatorPersona', datos);
  }

  validatorUsuario(idPersona:number) {
    //return this.http.post<any>(this.URL + '/validatorUsuario', datos);
    return this.http.get(`${this.URL}/validatorUsuario/${idPersona}`);
  }

  /*mantenimiento de Sucursales */

  listarSucursal() {
    return this.http.get<any>(this.URL + '/sucursal');
  }

  listarSucursalById(id: number) {
    return this.http.get(`${this.URL}/sucursal/${id}`);
  }

  agregarSucursal(sucursal) {
    return this.http.post<any>(this.URL + '/sucursal/add', sucursal);
  }


  actualizarSucursal(idSucursal: number, sucursal) {
    return this.http.put(`${this.URL}/sucursal/${idSucursal}`, sucursal);
  }


  eliminarSucursal(idSucursal: number) {
    return this.http.delete(`${this.URL}/sucursal/${idSucursal}`);
  }


  /*mantenimiento de Especialidades */

  listarEspecialidad() {
    return this.http.get<any>(this.URL + '/especialidad');
  }


  listarEspecialidadById(idEspecialidad: number) {
    return this.http.get(`${this.URL}/especialidad/${idEspecialidad}`);
  }

  agregarEspecialidad(especialidad) {
    return this.http.post<any>(this.URL + '/especialidad/add', especialidad);
  }

  actualizarEspecialidad(idEspecialidad: number, especialidad) {
    return this.http.put(`${this.URL}/especialidad/${idEspecialidad}`, especialidad);
  }


  eliminarEspecialidad(idEspecialidad: number) {
    return this.http.delete(`${this.URL}/especialidad/${idEspecialidad}`);
  }

  /*mantenimiento de medicos */

  listarMedico() {
    return this.http.get<any>(this.URL + '/medico');
  }


  listarMedicoById(idMedico: number) {
    return this.http.get(`${this.URL}/medico/${idMedico}`);
  }

  agregarMedico(medico) {
    return this.http.post<any>(this.URL + '/medico/add', medico);
  }

  actualizarMedico(idMedico: number, medico) {
    return this.http.put(`${this.URL}/medico/${idMedico}`, medico);
  }


  eliminarMedico(idMedico: number) {
    return this.http.delete(`${this.URL}/medico/${idMedico}`);
  }


  /*mantenimiento de Users */

  listarUsuarios() {
    return this.http.get<any>(this.URL + '/usuario');
  }


  listarUsuarioById(idUser: number) {
    return this.http.get(`${this.URL}/usuario/${idUser}`);
  }

  agregarUsuario(user) {
    return this.http.post<any>(this.URL + '/usuario/add', user);
  }

  agregarUsuarioPaciente(user) {
    return this.http.post<any>(this.URL + '/usuario/add/paciente', user);
  }


  actualizarUsuario(idUsuario: number, usuario) {
    return this.http.put(`${this.URL}/usuario/${idUsuario}`, usuario);
  }


  eliminarUsuario(idUsuario: number) {
    return this.http.delete(`${this.URL}/usuario/${idUsuario}`);
  }


  /*mantenimiento de Calendario */

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


  desactivarCalendario(idCalendar: number) {
    return this.http.delete(`${this.URL}/desactivarcalendario/${idCalendar}`);
  }

  activarCalendario(idCalendar: number) {
    return this.http.delete(`${this.URL}/activarcalendario/${idCalendar}`);
  }


/* AGREGAR CITA*/

listarCita() {
  return this.http.get<any>(this.URL + '/cita');
}

listarCitaById(idCita: number) {
  return this.http.get(`${this.URL}/cita/${idCita}`);
}

agregarCita(cita) {
  return this.http.post<any>(this.URL + '/cita/add', cita);
}

actualizarCita(idCita: number, cita) {
  return this.http.put(`${this.URL}/cita/update/${idCita}`, cita);
}

eliminarCita(idCita: number) {
  return this.http.delete(`${this.URL}/cita/${idCita}`);
}

agregarPago(pago) {
  return this.http.post<any>(this.URL + '/pago/add', pago);
}

cancelarPago(idCita: number) {
  return this.http.delete(`${this.URL}/cancel/pago/${idCita}`);
}

listarMiCita(idCita: number) {
  return this.http.get<any>(`${this.URL}/micita/${idCita}`);
}

listarMiCitaRecepcion(idCita: number) {
  return this.http.get<any>(`${this.URL}/micitarecepcion/${idCita}`);
}


listarCitasPendientes() {
  return this.http.get<any>(`${this.URL}/pendientes/`);
}
/*EL PACIENTE VISUALIZA LAS CITAS QUE EL MEDICO LE REPROGRAMO */
listarCitasreprogramadas() {
  return this.http.get<any>(`${this.URL}/listarCitasreprogramadas/`);
}


listarPacientesdeMedico() {
  return this.http.get<any>(this.URL + '/pacientesdeMedico');
}

reporteMedicoAtenciones(fechas) {
  return this.http.post<any>(this.URL + '/reporteMedicoAtenciones', fechas);
}

reporteCitasAtendidas(fechas) {
  return this.http.post<any>(this.URL + '/reporteCitasAtendidas', fechas);
}


atenderCita(idCita: number) {
  return this.http.delete(`${this.URL}/atenderCita/${idCita}`);
}

reprogramarCita(idCita: number) {
  return this.http.delete(`${this.URL}/reprogramarCita/${idCita}`);
}

listarDia() {
  return this.http.get<any>(this.URL + '/dia');
}

listarHora() {
  return this.http.get<any>(this.URL + '/hora');
}

listarTotalIngresos() {
  return this.http.get<any>(this.URL + '/ingresos');
}

listarTotalIngresosHoy() {
  return this.http.get<any>(this.URL + '/ingresoshoy');
}

listarTotalDescuentos() {
  return this.http.get<any>(this.URL + '/descuentos');
}

listarTotalDescuentosHoy() {
  return this.http.get<any>(this.URL + '/descuentoshoy');
}

totalCitasPendientes() {
  return this.http.get<any>(this.URL + '/totalPendientes');
}

totalCitasAtendidas() {
  return this.http.get<any>(this.URL + '/totalAtendidos');
}

listarPaciente() {
  return this.http.get<any>(this.URL + '/listarPaciente');
}

listarPacienteById(idPaciente: number) {
  return this.http.get<any>(`${this.URL}/listarPaciente/${idPaciente}`);
}

listarFormaPago() {
  return this.http.get<any>(this.URL + '/listarFormaPago');
}


agregarPagoRecepcion(pago) {
  return this.http.post<any>(this.URL + '/pago/recepcion', pago);
}

listarCitaByIdRecepcion(idCita: number) {
  return this.http.get(`${this.URL}/citarecepcion/${idCita}`);
}


listarSeguro() {
  return this.http.get<any>(this.URL + '/listarSeguro');
}


agregarPacienteRecepcion(paciente) {
  return this.http.post<any>(this.URL + '/agregarpacienterecepcion', paciente);
}



listarPacienteByIdRecepcion(idPaciente: number) {
  return this.http.get(`${this.URL}/listarPacienterecepcion/${idPaciente}`);
}


actualizarPacienteRecepcion(idPaciente: number, paciente) {
  return this.http.put(`${this.URL}/actualizarpacienterecepcion/${idPaciente}`, paciente);
}

reporteIngresos(fechas) {
  return this.http.post<any>(this.URL + '/reporteIngresos', fechas);
}

reporteIngresosTotal(fechas) {
  return this.http.post<any>(this.URL + '/reporteIngresosTotal', fechas);
}

reporteDescuentos(fechas) {
  return this.http.post<any>(this.URL + '/reporteDescuentos', fechas);
}

reporteDescuentosTotal(fechas) {
  return this.http.post<any>(this.URL + '/reporteDescuentosTotal', fechas);
}

listarCitasPendientesRecepcion() {
  return this.http.get<any>(this.URL + '/listarCitasPendientesRecepcion');
}

listarIngresosRecepcion() {
  return this.http.get<any>(this.URL + '/listarIngresosRecepcion');
}

cuadrarCajaRecepcion() {
  return this.http.get<any>(this.URL + '/cuadrarCajaRecepcion');
}

listarIngresosEfectivorecepcion() {
  return this.http.get<any>(this.URL + '/listarIngresosEfectivorecepcion');
}

listarReporteEspecialidades(fechas) {
  return this.http.post<any>(this.URL + '/listarReporteEspecialidades', fechas);
}

}//fin de service

