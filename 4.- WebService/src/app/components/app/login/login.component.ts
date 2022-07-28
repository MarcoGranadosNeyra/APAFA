import { Component, OnInit } from '@angular/core';
import { PoliclinicoService  } from 'src/app/service/policlinico.service'
import { Router } from '@angular/router'
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import {MatSnackBar} from '@angular/material/snack-bar';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  durationInSeconds = 5;

  user = {};
  message:string='';

  formLogin: FormGroup;  

  constructor(private snackBar: MatSnackBar,private formBuilder: FormBuilder,private service: PoliclinicoService, private router: Router ) { }

  ngOnInit() {
    this.formMiLogin();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


  validarUsuario() {
    console.log("formulario : ",this.formLogin.value)
    this.service.login(this.formLogin.value)
      .subscribe(
        res => {
          const result =res.result;
          console.log(res)
          if(result==0){
            this.openSnackBar('Mensaje de Sistema : ',res.message)   
          }else{
            localStorage.setItem('token', res.token);
            this.router.navigate(['/main']);
          }
         },
        err => 
        console.log(err)
      )
  }

  formMiLogin(){
    this.formLogin = this.formBuilder.group({
      usuario        :  [null, Validators.required],
      password       :  [null, Validators.required]
    });
  }

  registrarme() {
      this.router.navigate(['/validate']);
      localStorage.setItem('token',"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Mjg5NzgyODQsImlzcyI6ImxvY2FsaG9zdCIsInVzZXJfaWQiOjQzMDF9.Tk3DGm2b7ChKjqxI8fnqP5_oHti1gGMDjnBui5Fo4N4");
      //localStorage.setItem('token',"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1ncmFuYWRvc0B1bmlmbGV4LmNvbS5wZSJ9.p5OrGD6oKVpegjZVk2Zj6-I_gDQT4n6C1kiXxtdOy9c");
  }





}