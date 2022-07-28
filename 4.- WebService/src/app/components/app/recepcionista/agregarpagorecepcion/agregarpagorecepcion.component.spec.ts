import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarpagorecepcionComponent } from './agregarpagorecepcion.component';

describe('AgregarpagorecepcionComponent', () => {
  let component: AgregarpagorecepcionComponent;
  let fixture: ComponentFixture<AgregarpagorecepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarpagorecepcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarpagorecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
