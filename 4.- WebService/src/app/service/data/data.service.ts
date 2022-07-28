import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  id_especialidad : number = 0;
  id_examen       : number = 0;
  id_dia          : number = 0;
  fecha           : Date   = null;
  hora            : String = null;
  id_calendario   : number = 0;


  persona : any = {}

  id_cita       : number = 0;
  
  
  constructor() { }
}
