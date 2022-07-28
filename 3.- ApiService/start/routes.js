'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.get('/api/v1/apafa/', () => {
  return { greeting: 'Hello world in JSON' }
})



Route.group(() => {

Route.get('departamento','PersonaController.listarDepartamento');
Route.get('provincia/:id','PersonaController.listarProvinciaByIdDepartamento'); 
Route.get('distrito/:id','PersonaController.listarDistritoByIdProvincia');
Route.get('documento','PersonaController.listarDocumento');  
Route.get('sexo','PersonaController.listarSexo'); 
/*persona */
Route.get('persona','PersonaController.listarPersona');     
Route.get('persona/:id','PersonaController.listarPersonaById');
Route.post('persona/DNI','PersonaController.listarPersonaByDNI'); 
Route.post('persona/add','PersonaController.agregarPersona');
Route.put('persona/:id','PersonaController.actualizarPersona'); 
Route.post('persona/add/login','PersonaController.agregarPersonaLogin');
/* usuario */
Route.post('login','UsuarioController.login');
Route.get('usuario','UsuarioController.listarUsuario');
Route.get('usuario/:id','UsuarioController.listarUsuarioById');
Route.post('buscarUsuario','UsuarioController.listarUsuarioByUsuario'); 
Route.get('usuarioByIdPersona/:id','UsuarioController.listarUsuarioByIdPersona');
Route.post('usuario/add','UsuarioController.agregarUsuario');
Route.post('usuarioPaciente/add','UsuarioController.agregarUsuarioPaciente');   
Route.delete('desactivar/usuario/:id','UsuarioController.desactivarUsuario');
Route.delete('activar/usuario/:id','UsuarioController.activarUsuario'); 
Route.get('modulosUsuario','UsuarioController.listarModulosUsuario');
Route.get('perfilUsuario','UsuarioController.perfilUsuario');
/*rol */
Route.get('rol','RolController.listarRol');
Route.get('rol/:id','RolController.listarRolById');
Route.post('rol/add','RolController.agregarRol');
Route.put('rol/:id','RolController.actualizarRol');
Route.delete('rol/:id','RolController.eliminarRol'); 
/* PERMISO */
Route.get('permiso','PermisoController.listarPermiso');
Route.get('permiso/:id','PermisoController.listarPermisoById');
Route.post('permiso/add','PermisoController.agregarPermiso');
Route.put('permiso/:id','PermisoController.actualizarPermiso');
Route.delete('permiso/:id','PermisoController.eliminarPermiso'); 

Route.get('modulo','ModuloController.listarModulo');

Route.post('rolModulo/add','RolModuloController.agregarRolModulo');
/*ESPECIALIDAD */
Route.get('especialidad','EspecialidadController.listarEspecialidad');
Route.get('especialidad/:id','EspecialidadController.listarEspecialidadById');
Route.post('especialidad/add','EspecialidadController.agregarEspecialidad');
Route.put('especialidad/:id','EspecialidadController.actualizarEspecialidad');
Route.delete('especialidad/:id','EspecialidadController.eliminarEspecialidad');
/* MEDICO */
Route.get('medico','MedicoController.listarMedico');
Route.get('medico/:id','MedicoController.listarMedicoById');
Route.post('medico/add','MedicoController.agregarMedico');
Route.put('medico/:id','MedicoController.actualizarMedico');
Route.delete('medico/:id','MedicoController.eliminarMedico');
/* DIA */
Route.get('dia','ApiController.listarDia');
/* Hora */
Route.get('hora','ApiController.listarHora');
/* Calendario */
Route.get('calendario','CalendarioController.listarCalendario');
Route.get('calendario/:id','CalendarioController.listarCalendarioById');
Route.post('calendario/add','CalendarioController.agregarCalendario');
Route.delete('desactivarcalendario/:id','CalendarioController.desactivarCalendario');
Route.delete('activarcalendario/:id','CalendarioController.activarCalendario');
Route.post('calendarioByIdEspecialidad','CalendarioController.listarCalendarioByIdEspecialidad');
/* Cita */
Route.get('cita','CitaController.listarCita');
Route.get('cita/:id','CitaController.listarCitaById');
Route.post('cita/add','CitaController.agregarCita');
/* paciente */
Route.get('pacienteusuario','PacienteController.listarPacienteByIdUsuario');
/* examen */
Route.get('examen/:id','ExamenController.listarExamenById');
Route.get('examenespecialidad/:id','ExamenController.listarExamenByIdEspecialidad');

Route.post('recibirData','ApiController.recibirData');

/* cotizacion */
Route.post('cotizacion','CotizacionController.listarCotizacion');  

/* cotizacion */
Route.post('evento','EventoController.listarEvento');  

/* ingresos */
Route.post('ingreso','IngresoController.listarIngresos');  

/* gastos */
Route.post('gasto','GastoController.listarGastos');  

}).prefix('api/v1/apafa/');


