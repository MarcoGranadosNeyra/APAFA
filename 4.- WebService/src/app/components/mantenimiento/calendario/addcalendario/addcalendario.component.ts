import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliclinicoService } from 'src/app/service/policlinico/policlinico.service';
import { MedicoService } from 'src/app/service/medico/medico.service';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import {MatSnackBar} from '@angular/material/snack-bar';
import { CalendarioService } from 'src/app/service/calendario/calendario.service';


@Component({
  selector: 'app-addcalendario',
  templateUrl: './addcalendario.component.html',
  styleUrls: ['./addcalendario.component.css']
})
export class AddcalendarioComponent implements OnInit {

  medico: any = [];

  get_id_medico: string = '';

  dia: any = [];
  hora: any = [];

  diaSelected = new FormControl();
  horaSelected = new FormControl();

  formCalendario: FormGroup;  

  calendario:any={
    
    id_medico   :   '',
    id_dia      :   '',
    id_hora     :   ''
  }

  constructor(private snackBar: MatSnackBar,private medicoService:MedicoService,private servicePoliclinico:PoliclinicoService,private calendarioService:CalendarioService,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(){
    this.listarMedico();
    this.listarDia();
    this.listarHora();
    this.formMiPersona();
  }

  formMiPersona(){
    this.formCalendario = this.formBuilder.group({
      id_medico     :  [null, Validators.required],

    });
  }

  listarMedico(){
    this.medicoService.listarMedico()
    .subscribe(
      res=> {this.medico=res;
      },
      err=> console.error(err)
    )
  }

  getIdDepartamento (event: any) {
    this.get_id_medico = event.target.value;
  }
 

  listarDia(){
    this.servicePoliclinico.listarDia()
    .subscribe(
      res=> {this.dia=res;
      },
      err=> console.error(err)
    )
  }

  listarHora(){
    this.servicePoliclinico.listarHora()
    .subscribe(
      res=> {this.hora=res;
      },
      err=> console.error(err)
    )
  }

  /*
  miclick(){

    const arraydia=this.diaSelected.value
    const arrayHora=this.horaSelected.value
    
    
          
          for (let i = 0; i < arraydia.length; i++) {
              const id_dia = arraydia[i];
              console.log("ID  DIA : "+id_dia);


              for (let j = 0; j < arrayHora.length; j++) {
                const id_hora = arrayHora[j];
                console.log("ID  HORA : "+id_hora);

                this.calendario.id_medico=this.formCalendario.get('id_medico').value
                this.calendario.id_dia=id_dia
                this.calendario.id_hora=id_hora
                console.log(this.calendario)
          
              }
          }
    }
*/
    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 5000,
        verticalPosition: 'bottom',
        horizontalPosition:'right',
      });
    }

    agregarCalendario() {
      if(this.formCalendario.valid){


        const id_medico=this.formCalendario.get('id_medico').value

        const arraydia=this.diaSelected.value
        const arrayHora=this.horaSelected.value
        
      
              for (let i = 0; i < arraydia.length; i++) {
                  const id_dia = arraydia[i];
                 
                  for (let j = 0; j < arrayHora.length; j++) {
                    const id_hora = arrayHora[j];

                    this.calendario.id_medico=this.formCalendario.get('id_medico').value
                    this.calendario.id_dia=id_dia
                    this.calendario.id_hora=id_hora

                    this.calendarioService.agregarCalendario(this.calendario)
                    .subscribe( res => {

                      if (res.message==1) {
                        this.openSnackBar('Registrado Correctamente ','');
                        this.router.navigate(['calendarios']);
                      }else{
                
                        if(res.error.constraint=="uq_medico_id_dia_id_hora_calendario"){
                          this.openSnackBar('Error : El Horario ya esta registrado','');
                        }
                      }
                    });

                  }/*fir for*/
              }/*second for*/

      }//formCalendario.valid
    }//agregar calendario


    cancelar(){
      this.router.navigate(['main/calendarios']);
    }
    

 

}
