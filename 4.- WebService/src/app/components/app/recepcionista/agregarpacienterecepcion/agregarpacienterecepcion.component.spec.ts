import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarpacienterecepcionComponent } from './agregarpacienterecepcion.component';

describe('AgregarpacienterecepcionComponent', () => {
  let component: AgregarpacienterecepcionComponent;
  let fixture: ComponentFixture<AgregarpacienterecepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarpacienterecepcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarpacienterecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
