import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*mantenimiento */
import { AddpersonaComponent } from './components/mantenimiento/persona/addpersona/addpersona.component';
import { EditpersonaComponent } from './components/mantenimiento/persona/editpersona/editpersona.component';
import { ListpersonaComponent } from './components/mantenimiento/persona/listpersona/listpersona.component';

import { AddespecialidadComponent } from './components/mantenimiento/especialidad/addespecialidad/addespecialidad.component';
import { EditespecialidadComponent } from './components/mantenimiento/especialidad/editespecialidad/editespecialidad.component';
import { ListespecialidadComponent } from './components/mantenimiento/especialidad/listespecialidad/listespecialidad.component';

import { AddusuarioComponent } from './components/mantenimiento/usuario/addusuario/addusuario.component';
import { EditusuarioComponent } from './components/mantenimiento/usuario/editusuario/editusuario.component';
import { ListusuarioComponent } from './components/mantenimiento/usuario/listusuario/listusuario.component';

import { AddmedicoComponent } from './components/mantenimiento/medico/addmedico/addmedico.component';
import { EditmedicoComponent } from './components/mantenimiento/medico/editmedico/editmedico.component';
import { ListmedicoComponent } from './components/mantenimiento/medico/listmedico/listmedico.component';

import { ListcalendarioComponent } from './components/mantenimiento/calendario/listcalendario/listcalendario.component';
import { EditcalendarioComponent } from './components/mantenimiento/calendario/editcalendario/editcalendario.component';
import { AddcalendarioComponent } from './components/mantenimiento/calendario/addcalendario/addcalendario.component';

/*DASHBOARD */
import { LoginComponent } from './components/app/login/login.component';
import { AdminComponent } from './components/app/admin/admin.component';
import { LicenciadoComponent } from './components/app/licenciado/licenciado.component';
import { MedicoComponent } from './components/app/medico/medico.component';


/*PROCESO DE CITA */

import { CitaComponent } from './components/app/paciente/cita/cita.component';
import { PagoCardComponent } from './components/app/pago-card/pago-card.component';
import { CongratulationsComponent } from './components/app/congratulations/congratulations.component';
import { RegisterComponent } from './components/app/register/register.component';
import { PerfilComponent } from './components/app/perfil/perfil.component';
import { MiscitasComponent } from './components/app/miscitas/miscitas.component';
import { MedicoEditpersonaComponent } from './components/tools/medico-editpersona/medico-editpersona.component';
import { UsuarioEditpersonaComponent } from './components/tools/usuario-editpersona/usuario-editpersona.component';
import { RegisterUserComponent } from './components/app/register-user/register-user.component';
import { WelcomeComponent } from './components/app/welcome/welcome.component';
import { ReportemedicoComponent } from './components/reportes/reportemedico/reportemedico.component';
import { ReporteCitasAtendidasComponent } from './components/reportes/reporte-citas-atendidas/reporte-citas-atendidas.component';
import { ReprogramacionComponent } from './components/app/reprogramacion/reprogramacion.component';
import { MiscitasreprogramadasComponent } from './components/app/miscitasreprogramadas/miscitasreprogramadas.component';
import { TerminosComponent } from './components/terminos/terminos.component';


/*guard security */
import {SecurityGuard} from './guard/security.guard';
import { BuscarpersonaComponent } from './components/buscarpersona/buscarpersona.component';
import { InformationusuarioComponent } from './components/informationusuario/informationusuario.component';
import { RecepcionComponent } from './components/app/recepcionista/recepcion/recepcion.component';
import { AgregarPersonarecepcionComponent } from './components/app/recepcionista/agregar-personarecepcion/agregar-personarecepcion.component';
import { AgregarcitarecepcionComponent } from './components/app/recepcionista/agregarcitarecepcion/agregarcitarecepcion.component';
import { AgregarpagorecepcionComponent } from './components/app/recepcionista/agregarpagorecepcion/agregarpagorecepcion.component';
import { ImprimirCitaComponent } from './components/app/recepcionista/imprimir-cita/imprimir-cita.component';
import { AgregarpacienterecepcionComponent } from './components/app/recepcionista/agregarpacienterecepcion/agregarpacienterecepcion.component';
import { EditarpacienterecepcionComponent } from './components/app/recepcionista/editarpacienterecepcion/editarpacienterecepcion.component';


/*repores */
import { ReporteingresosComponent } from './components/reportes/reporteingresos/reporteingresos.component';
import { ReportedescuentosComponent } from './components/reportes/reportedescuentos/reportedescuentos.component';

import { CitaspendientesComponent } from './components/app/recepcionista/citaspendientes/citaspendientes.component';
import { ReprogramarcitarecepcionComponent } from './components/app/recepcionista/reprogramarcitarecepcion/reprogramarcitarecepcion.component';
import { CuadrecajarecepcionComponent } from './components/app/recepcionista/cuadrecajarecepcion/cuadrecajarecepcion.component';
import { ReporteespecialidadesComponent } from './components/reportes/reporteespecialidades/reporteespecialidades.component';
import { MainComponent } from './components/template/main/main.component';
import { PerfilUsuarioComponent } from './components/template/perfil-usuario/perfil-usuario.component';
import { AgregarRolComponent } from './components/mantenimiento/roles/agregar-rol/agregar-rol.component';
import { ListarRolComponent } from './components/mantenimiento/roles/listar-rol/listar-rol.component';
import { EditarRolComponent } from './components/mantenimiento/roles/editar-rol/editar-rol.component';
import { ListarPermisosComponent } from './components/mantenimiento/permisos/listar-permisos/listar-permisos.component';
import { AgregarPermisosComponent } from './components/mantenimiento/permisos/agregar-permisos/agregar-permisos.component';
import { EspecialidadService } from './service/especialidad/especialidad.service';
import { EspecialidadSelectComponent } from './components/app/paciente/especialidad-select/especialidad-select.component';
import { FechaSelectComponent } from './components/app/paciente/fecha-select/fecha-select.component';
import { MedicoSelectComponent } from './components/app/paciente/medico-select/medico-select.component';
import { ExamenSelectComponent } from './components/app/paciente/examen-select/examen-select.component';
import { ListcotizacionComponent } from './components/mantenimiento/modulos/cotizacion/listcotizacion/listcotizacion.component';
import { ListeventoComponent } from './components/mantenimiento/modulos/evento/listevento/listevento.component';
import { ListingresosComponent } from './components/mantenimiento/modulos/ingreso/listingresos/listingresos.component';
import { ListgastosComponent } from './components/mantenimiento/modulos/gasto/listgastos/listgastos.component';




const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent
  },

  {path:'validate',component:BuscarpersonaComponent},
  {path:'register',component:RegisterComponent},
  {path:'registerusuario/:id',component:RegisterUserComponent},
  {path:'informacionusuario',component:InformationusuarioComponent},
  {path:'welcome',component:WelcomeComponent,canActivate : [SecurityGuard]},

  {path:'main',component:MainComponent,children:[
    


                {path:'usuarios',component:ListusuarioComponent,canActivate : [SecurityGuard]},
                {path:'agregarUsuario',component:AddusuarioComponent,canActivate : [SecurityGuard]},
                {path:'perfil/:id',component:PerfilUsuarioComponent,canActivate : [SecurityGuard]},

                {path:'roles',component:ListarRolComponent,canActivate : [SecurityGuard]},
                {path:'agregarRol',component:AgregarRolComponent,canActivate : [SecurityGuard]},
                {path:'editarRol/:id',component:EditarRolComponent,canActivate : [SecurityGuard]},

                {path:'permisos',component:ListarPermisosComponent,canActivate : [SecurityGuard]},
                {path:'agregarPermiso',component:AgregarPermisosComponent,canActivate : [SecurityGuard]},

                {path:'personas',component:ListpersonaComponent,canActivate : [SecurityGuard]},
                {path:'agregarPersona',component:AddpersonaComponent,canActivate : [SecurityGuard]},
                {path:'editarPersona/:id',component:EditpersonaComponent,canActivate : [SecurityGuard]},

                {path:'especialidades',component:ListespecialidadComponent,canActivate : [SecurityGuard]},
                {path:'agregarEspecialidad',component:AddespecialidadComponent,canActivate : [SecurityGuard]},
                {path:'editarEspecialidad/:id',component:EditespecialidadComponent,canActivate : [SecurityGuard]},


                {path:'medicos',component:ListmedicoComponent,canActivate : [SecurityGuard]},
                {path:'agregarMedico',component:AddmedicoComponent,canActivate : [SecurityGuard]},
                {path:'editarMedico/:id',component:EditmedicoComponent,canActivate : [SecurityGuard]},
                {path:'medicoEditPersona/:id',component:MedicoEditpersonaComponent,canActivate : [SecurityGuard]},

                {path:'calendarios',component:ListcalendarioComponent,canActivate : [SecurityGuard]},
                {path:'agregarCalendario',component:AddcalendarioComponent,canActivate : [SecurityGuard]},
                {path:'editarCalendario/:id',component:EditcalendarioComponent,canActivate : [SecurityGuard]},

                {path:'citas',component:EspecialidadSelectComponent,canActivate : [SecurityGuard]},
                {path:'examenes',component:ExamenSelectComponent,canActivate : [SecurityGuard]},
                {path:'fecha',component:FechaSelectComponent,canActivate : [SecurityGuard]},
                {path:'medico-select',component:MedicoSelectComponent,canActivate : [SecurityGuard]},

                {path:'reservarcita',component:PagoCardComponent,canActivate : [SecurityGuard]},
                {path:'reservedo',component:CongratulationsComponent,canActivate : [SecurityGuard]},


                {path:'cotizaciones',component:ListcotizacionComponent,canActivate : [SecurityGuard]},
                
                {path:'eventos',component:ListeventoComponent,canActivate : [SecurityGuard]},

                {path:'ingresos',component:ListingresosComponent,canActivate : [SecurityGuard]},
                
                {path:'gastos',component:ListgastosComponent,canActivate : [SecurityGuard]},
                
  ]},

/*
  {
    path:'admin',
    component:AdminComponent,
    canActivate : [SecurityGuard]
  },
  {
    path:'recepcion',
    component:RecepcionComponent,
    canActivate : [SecurityGuard]
  },
  {
    path:'medico',
    component:MedicoComponent,
    canActivate : [SecurityGuard]
  },
  {
    path:'medico/reporte/pacientes',
    component:ReportemedicoComponent,
    canActivate : [SecurityGuard]
  },
  {
    path:'paciente',
    component:PacienteComponent,
    canActivate : [SecurityGuard]
  },
  {
    path:'citasPendientes',
    component:MiscitasComponent,
    canActivate : [SecurityGuard]
  },
  {
    path:'reporteCitasAtendidas',
    component:ReporteCitasAtendidasComponent,
    canActivate : [SecurityGuard]
  },
  {
    path:'miscitasreprogramadas',
    component:MiscitasreprogramadasComponent,
    canActivate : [SecurityGuard]
  },
  {
    path:'licenciado',
    component:LicenciadoComponent,
    canActivate : [SecurityGuard]
  },



  {
    path:'perfil/:id',
    component:PerfilComponent,
    canActivate : [SecurityGuard]
  },


  {
    path:'agregarPersonarecepcion',
    component:AgregarPersonarecepcionComponent,
    canActivate : [SecurityGuard]
  },
  {
    path:'agregarpacienterecepcion/:id',
    component:AgregarpacienterecepcionComponent,
    canActivate : [SecurityGuard]
  },
  {
    path:'editarpacienterecepcion/:id',
    component:EditarpacienterecepcionComponent,
    canActivate : [SecurityGuard]
  },
  {
    path:'agregarcitarecepcion/:id',
    component:AgregarcitarecepcionComponent,
    canActivate : [SecurityGuard]
  },
  {
    path:'agregarpagorecepcion/:id',
    component:AgregarpagorecepcionComponent,
    canActivate : [SecurityGuard]
  },
  {
    path:'imprimir/:id',
    component:ImprimirCitaComponent,
    canActivate : [SecurityGuard]
  },
  {
    path:'citaspendientesrecepcion',
    component:CitaspendientesComponent,
    canActivate : [SecurityGuard]
  },
  {
    path:'reprogramarcitarecepcion/:id',
    component:ReprogramarcitarecepcionComponent,
    canActivate : [SecurityGuard]
  },
  {
    path:'cuadrecajarecepcion',
    component:CuadrecajarecepcionComponent,
    canActivate : [SecurityGuard]
  },








  {
    path:'editarUsuario/:id',
    component:EditusuarioComponent,
    canActivate : [SecurityGuard]
  },
  {
    path:'usuarioEditPersona/:id',
    component:UsuarioEditpersonaComponent,
    canActivate : [SecurityGuard]
  },

  {
    path:'listarUsuario',
    component:ListusuarioComponent,
    canActivate : [SecurityGuard]
  },


      

    


    {
      path:'reprogramar/:id',
      component:ReprogramacionComponent,
      canActivate : [SecurityGuard]
    },

 
      {
        path:'agregarPago/:id',
        component:PagoCardComponent,
        canActivate : [SecurityGuard]
      },

      {
        path:'reserved/:id',
         component:CongratulationsComponent,
         canActivate : [SecurityGuard]
    },


{
  path:'terminosycondiciones',
   component:TerminosComponent
},


{
  path:'reporteingresos',
   component:ReporteingresosComponent
},
{
  path:'reportedescuentos',
   component:ReportedescuentosComponent
},
{
  path:'reporteespecialidades',
   component:ReporteespecialidadesComponent
},
 */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
