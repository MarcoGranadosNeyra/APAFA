import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogModule,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
/**
 * @title Dialog elements
 */
@Component({
  selector: 'app-atencioncliente',
  templateUrl: './atencioncliente.component.html',
  styleUrls: ['./atencioncliente.component.css']
})
export class AtencionclienteComponent implements OnInit {

  constructor(
    public dialogo: MatDialogRef<AtencionclienteComponent>,
    @Inject(MAT_DIALOG_DATA)public mensaje: string) { }

  ngOnInit() {
  }

  cerrarDialogo(): void {
    this.dialogo.close(false);
  }

  
  confirmado(): void {
    this.dialogo.close(true);
  }



  
}
