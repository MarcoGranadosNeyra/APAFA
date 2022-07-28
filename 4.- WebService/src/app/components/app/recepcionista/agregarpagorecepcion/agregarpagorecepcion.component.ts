import { Component,HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import { Cita } from 'src/app/Modelo/Cita';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-agregarpagorecepcion',
  templateUrl: './agregarpagorecepcion.component.html',
  styleUrls: ['./agregarpagorecepcion.component.css']
})
export class AgregarpagorecepcionComponent implements OnInit {

  
  cita: any=[];
  persona : any = [];
  especialidad: any = [];
  forma_pago: any = [];
  descuentodefault: any=0.0;

  formularioPago: FormGroup;  

  @HostBinding('class') classes ='row';

  constructor(private snackBar: MatSnackBar,private formBuilder:FormBuilder,private service:PoliclinicoService,private activateRoute:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const params = this.activateRoute.snapshot.params;

    this.listarMiCita(params.id);
    this.miformularioPago();
    this.listarFormaPago();
  }

  listarFormaPago(){
    this.service.listarFormaPago()
    .subscribe(
      res => {
        
        this.forma_pago=res
        console.log(this.forma_pago);
      },
      err => console.log(err)
    )
  }


  listarMiCita(idCita:number){
    this.service.listarMiCitaRecepcion(idCita)
    .subscribe(
      res => {
 
        this.cita=res.cita
        this.persona=res.persona
        this.especialidad=res.especialidad
        
        this.formularioPago.get('id_cita').setValue(this.cita.id)
        this.formularioPago.get('id_paciente').setValue(this.cita.id_paciente)
        this.formularioPago.get('id_especialidad').setValue(this.especialidad.id)
        this.formularioPago.get('precio_pago').setValue(this.especialidad.precio);
        this.formularioPago.get('descuento').setValue(this.descuentodefault);
      },
      err => console.log(err)
    )
  }



  miformularioPago(){
    this.formularioPago = this.formBuilder.group({
      id_cita           :  [null, Validators.required],
      id_forma_pago     :  [null, Validators.required],
      id_paciente       :  [null, Validators.required],
      id_especialidad   :  [null, Validators.required],
      precio_pago       :  [null, {disabled: true },Validators.required],
      descuento         :  [null, Validators.required],
    });
  }


  

  /*
  miformularioPago(){
    return new FormGroup({
      id_cita           :  new FormControl( [null, Validators.required]),
      id_paciente       :  new FormControl( [null, Validators.required]),
      id_especialidad   :  new FormControl( [null, Validators.required]),
      precio_pago       :  new FormControl( [null, Validators.required]),
      number_card       :  new FormControl( [null, Validators.required,Validators.minLength(16)]),
      expire_card       :  new FormControl( [null, Validators.required,Validators.minLength(5)]),
      ccv_card          :  new FormControl( [null, Validators.required,Validators.minLength(3)]),
      correo_card       :  new FormControl( [null]),
      telf_card         :  new FormControl( [null]),
      titular_card      :  new FormControl( [null]),
    });
  }
*/
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition:'right',
    });
  }

  agregarPago() {
    
    if(this.formularioPago.valid){
      this.service.agregarPagoRecepcion(this.formularioPago.value)
      .subscribe( res => {

        if (res.message==1) {
          console.log(res)
          this.openSnackBar('Registro agregado!','Mensaje de Sistema : ')  
          this.router.navigate(['imprimir/',this.cita.id]);
        }else{
          console.log(res.message)
          this.openSnackBar('Error!','Complete los datos: ')  
        }
      });
    }


  }



  get number_card() {
    return this.formularioPago.get('number_card');
  }

  
  get expire_card() {
    return this.formularioPago.get('expire_card');
  }

  get ccv_card() {
    return this.formularioPago.get('ccv_card');
  }


  cancelarPago(idCita:number){
    this.service.cancelarPago(idCita).subscribe(
      res => {
         //this.router.navigate(['cita']);
         this.router.navigate(['agregarcitarecepcion/',this.cita.id_paciente]);
      },
      err => console.log(err)
    )
  }






}

