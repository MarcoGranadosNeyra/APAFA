import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID,NgModule } from '@angular/core';

//import { ReactiveFormsModule } from '@angular/forms';
//import { FormsModule } from '@angular/forms'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorService } from './service/token-interceptor.service';

/*Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';


/* Angular material */
import { AngularMaterialModule } from './angularMaterial.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './components/template/main/main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AddsucursalComponent } from './components/mantenimiento/sucursal/addsucursal/addsucursal.component';
import { LoginComponent } from './components/app/login/login.component';
import { AdminComponent } from './components/app/admin/admin.component';
import { MedicoComponent } from './components/app/medico/medico.component';
import { LicenciadoComponent } from './components/app/licenciado/licenciado.component';

import { AddpersonaComponent } from './components/mantenimiento/persona/addpersona/addpersona.component';
import { EditpersonaComponent } from './components/mantenimiento/persona/editpersona/editpersona.component';
import { ListpersonaComponent } from './components/mantenimiento/persona/listpersona/listpersona.component';
import { AddmedicoComponent } from './components/mantenimiento/medico/addmedico/addmedico.component';
import { EditmedicoComponent } from './components/mantenimiento/medico/editmedico/editmedico.component';
import { ListmedicoComponent } from './components/mantenimiento/medico/listmedico/listmedico.component';
import { AddespecialidadComponent } from './components/mantenimiento/especialidad/addespecialidad/addespecialidad.component';
import { EditespecialidadComponent } from './components/mantenimiento/especialidad/editespecialidad/editespecialidad.component';
import { ListespecialidadComponent } from './components/mantenimiento/especialidad/listespecialidad/listespecialidad.component';
import { AddusuarioComponent } from './components/mantenimiento/usuario/addusuario/addusuario.component';
import { EditusuarioComponent } from './components/mantenimiento/usuario/editusuario/editusuario.component';
import { ListusuarioComponent } from './components/mantenimiento/usuario/listusuario/listusuario.component';
import { ListcalendarioComponent } from './components/mantenimiento/calendario/listcalendario/listcalendario.component';
import { AddcalendarioComponent } from './components/mantenimiento/calendario/addcalendario/addcalendario.component';
import { EditcalendarioComponent } from './components/mantenimiento/calendario/editcalendario/editcalendario.component';



import localeES from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import { CitaComponent } from './components/app/paciente/cita/cita.component';

import { DatePipe } from "@angular/common";

import { PagoCardComponent } from './components/app/pago-card/pago-card.component';
import { CongratulationsComponent } from './components/app/congratulations/congratulations.component';
import { RegisterComponent } from './components/app/register/register.component';
import { PerfilComponent } from './components/app/perfil/perfil.component';
import { MiscitasComponent } from './components/app/miscitas/miscitas.component';
import { NavPacienteComponent } from './components/app/nav-paciente/nav-paciente.component';

import {MatDialogModule} from '@angular/material/dialog';
import {DialogComponent} from './components/tools/dialog/dialog.component';
import { MedicoEditpersonaComponent } from './components/tools/medico-editpersona/medico-editpersona.component';
import { UsuarioEditpersonaComponent } from './components/tools/usuario-editpersona/usuario-editpersona.component';
import { RegisterUserComponent } from './components/app/register-user/register-user.component';
import { NavMedicoComponent } from './components/tools/nav-medico/nav-medico.component';
import { MatToolbarComponent } from './components/tools/mat-toolbar/mat-toolbar.component';
import { WelcomeComponent } from './components/app/welcome/welcome.component';
import { FormaPagoComponent } from './components/app/forma-pago/forma-pago.component';
import { ReportemedicoComponent } from './components/reportes/reportemedico/reportemedico.component';
import { ReporteCitasAtendidasComponent } from './components/reportes/reporte-citas-atendidas/reporte-citas-atendidas.component';
import { ReprogramacionComponent } from './components/app/reprogramacion/reprogramacion.component';
import { MiscitasreprogramadasComponent } from './components/app/miscitasreprogramadas/miscitasreprogramadas.component';
import { TerminosComponent } from './components/terminos/terminos.component';
import {SecurityGuard} from './guard/security.guard';
import { BuscarpersonaComponent } from './components/buscarpersona/buscarpersona.component';
import { InformationusuarioComponent } from './components/informationusuario/informationusuario.component';
import { AtencionclienteComponent } from './components/tools/atencioncliente/atencioncliente.component';
import { RecepcionComponent } from './components/app/recepcionista/recepcion/recepcion.component';
import { AgregarPersonarecepcionComponent } from './components/app/recepcionista/agregar-personarecepcion/agregar-personarecepcion.component';
import { AgregarcitarecepcionComponent } from './components/app/recepcionista/agregarcitarecepcion/agregarcitarecepcion.component';
import { AgregarpagorecepcionComponent } from './components/app/recepcionista/agregarpagorecepcion/agregarpagorecepcion.component';
import { ImprimirCitaComponent } from './components/app/recepcionista/imprimir-cita/imprimir-cita.component';
import { AgregarpacienterecepcionComponent } from './components/app/recepcionista/agregarpacienterecepcion/agregarpacienterecepcion.component';
import { EditarpacienterecepcionComponent } from './components/app/recepcionista/editarpacienterecepcion/editarpacienterecepcion.component';
import { ReporteingresosComponent } from './components/reportes/reporteingresos/reporteingresos.component';
import { ReportedescuentosComponent } from './components/reportes/reportedescuentos/reportedescuentos.component';
import { MatToolbarRecepcionistaComponent } from './components/tools/mat-toolbar-recepcionista/mat-toolbar-recepcionista.component';
import { CitaspendientesComponent } from './components/app/recepcionista/citaspendientes/citaspendientes.component';
import { ReprogramarcitarecepcionComponent } from './components/app/recepcionista/reprogramarcitarecepcion/reprogramarcitarecepcion.component';
import { CuadrecajarecepcionComponent } from './components/app/recepcionista/cuadrecajarecepcion/cuadrecajarecepcion.component';
import { ReporteespecialidadesComponent } from './components/reportes/reporteespecialidades/reporteespecialidades.component';
import { PerfilUsuarioComponent } from './components/template/perfil-usuario/perfil-usuario.component';

import { AgregarRolComponent } from './components/mantenimiento/roles/agregar-rol/agregar-rol.component';
import { ListarRolComponent } from './components/mantenimiento/roles/listar-rol/listar-rol.component';
import { EditarRolComponent } from './components/mantenimiento/roles/editar-rol/editar-rol.component';
import { ListarPermisosComponent } from './components/mantenimiento/permisos/listar-permisos/listar-permisos.component';
import { AgregarPermisosComponent } from './components/mantenimiento/permisos/agregar-permisos/agregar-permisos.component';
import { EspecialidadSelectComponent } from './components/app/paciente/especialidad-select/especialidad-select.component';
import { FechaSelectComponent } from './components/app/paciente/fecha-select/fecha-select.component';
import { MedicoSelectComponent } from './components/app/paciente/medico-select/medico-select.component';
import { ExamenSelectComponent } from './components/app/paciente/examen-select/examen-select.component';
import { ListcotizacionComponent } from './components/mantenimiento/modulos/cotizacion/listcotizacion/listcotizacion.component';
import { ListeventoComponent } from './components/mantenimiento/modulos/evento/listevento/listevento.component';
import { ListingresosComponent } from './components/mantenimiento/modulos/ingreso/listingresos/listingresos.component';
import { ListgastosComponent } from './components/mantenimiento/modulos/gasto/listgastos/listgastos.component';



registerLocaleData(localeES,'es');



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    PerfilUsuarioComponent,
    ListusuarioComponent,
    AddusuarioComponent,
    EditusuarioComponent,
    ListarRolComponent,
    AgregarRolComponent,
    EditarRolComponent,
    AddsucursalComponent,
    AdminComponent,
    MedicoComponent,
    LicenciadoComponent,

    AddpersonaComponent,
    EditpersonaComponent,
    ListpersonaComponent,
    AddmedicoComponent,
    EditmedicoComponent,
    ListmedicoComponent,
    AddespecialidadComponent,
    EditespecialidadComponent,
    ListespecialidadComponent,

    ListcalendarioComponent,
    AddcalendarioComponent,
    EditcalendarioComponent,

    CitaComponent,
    PagoCardComponent,
    CongratulationsComponent,
    RegisterComponent,
    PerfilComponent,
    MiscitasComponent,
    NavPacienteComponent,
    DialogComponent,
    MedicoEditpersonaComponent,
    UsuarioEditpersonaComponent,
    RegisterUserComponent,
    NavMedicoComponent,
    MatToolbarComponent,
    WelcomeComponent,
    FormaPagoComponent,
    ReportemedicoComponent,
    ReporteCitasAtendidasComponent,
    ReprogramacionComponent,
    MiscitasreprogramadasComponent,
    TerminosComponent,
    BuscarpersonaComponent,
    InformationusuarioComponent,
    AtencionclienteComponent,
    RecepcionComponent,
    AgregarPersonarecepcionComponent,
    AgregarcitarecepcionComponent,
    AgregarpagorecepcionComponent,
    ImprimirCitaComponent,
    AgregarpacienterecepcionComponent,
    EditarpacienterecepcionComponent,
    ReporteingresosComponent,
    ReportedescuentosComponent,
    MatToolbarRecepcionistaComponent,
    CitaspendientesComponent,
    ReprogramarcitarecepcionComponent,
    CuadrecajarecepcionComponent,
    ReporteespecialidadesComponent,
    ListarPermisosComponent,
    AgregarPermisosComponent,
    EspecialidadSelectComponent,
    FechaSelectComponent,
    MedicoSelectComponent,
    ExamenSelectComponent,
    ListcotizacionComponent,
    ListeventoComponent,
    ListingresosComponent,
    ListgastosComponent

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
 
    /*material */
    AngularMaterialModule,
    MatDialogModule,
    DataTablesModule,
  ],

  //providers: [DatePipe]

  providers: [SecurityGuard,
    {
      provide:LOCALE_ID,useValue:'es'}
      ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide:DatePipe
    },

    
  ],


  bootstrap: [AppComponent],
  entryComponents:[DialogComponent],

})
export class AppModule { }

