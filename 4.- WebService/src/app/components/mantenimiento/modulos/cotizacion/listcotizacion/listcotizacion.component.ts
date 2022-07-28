import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliclinicoService } from 'src/app/service/policlinico.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/tools/dialog/dialog.component';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { Cotizacion } from 'src/app/Modelo/Cotizacion';

@Component({
  selector: 'app-listcotizacion',
  templateUrl: './listcotizacion.component.html',
  styleUrls: ['./listcotizacion.component.css']
})
export class ListcotizacionComponent implements OnInit {

  cotizaciones: any = [];
  persona: any = [];
  usuario: any = [];

  formularioFechas: FormGroup;


  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  displayedColumns: string[] = ['ID', 'EMPRESA', 'USUARIO', 'COTIZACION', 'TOTAL', 'DESCUENTO', 'OBSERVACIONES', 'ACCIONES'];

  public dataSource: MatTableDataSource<Cotizacion>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  private dataArray: any;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog, private snackBar: MatSnackBar, private service: PoliclinicoService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.validarFechas();
    //this.listarPerfil();
    //this.dataSource.paginator = this.paginator;
  }


  listarPerfil() {
    this.service.listarPerfil()
      .subscribe(
        res => {

          this.persona = res.persona
          this.usuario = res.usuario
        },
        err => console.log(err)
      )
  }


  validarFechas() {
    this.formularioFechas = this.formBuilder.group({
      fecha1: [null, Validators.required],
      fecha2: [null, Validators.required]
    });
  }


  listarCotizacion() {
    if (this.formularioFechas.valid) {
      this.service.listarCotizacion(this.formularioFechas.value)
        .subscribe(res => {
          console.log(res)
          this.dataArray = res;
          this.dataSource = new MatTableDataSource<Cotizacion>(this.dataArray);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
    }

  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }







}