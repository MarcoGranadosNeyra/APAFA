import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPersonarecepcionComponent } from './agregar-personarecepcion.component';

describe('AgregarPersonarecepcionComponent', () => {
  let component: AgregarPersonarecepcionComponent;
  let fixture: ComponentFixture<AgregarPersonarecepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPersonarecepcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPersonarecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
