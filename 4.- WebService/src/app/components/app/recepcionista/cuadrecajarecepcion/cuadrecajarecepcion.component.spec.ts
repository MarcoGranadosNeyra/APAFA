import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrecajarecepcionComponent } from './cuadrecajarecepcion.component';

describe('CuadrecajarecepcionComponent', () => {
  let component: CuadrecajarecepcionComponent;
  let fixture: ComponentFixture<CuadrecajarecepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadrecajarecepcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrecajarecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
