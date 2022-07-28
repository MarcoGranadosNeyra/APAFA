import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimirCitaComponent } from './imprimir-cita.component';

describe('ImprimirCitaComponent', () => {
  let component: ImprimirCitaComponent;
  let fixture: ComponentFixture<ImprimirCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprimirCitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimirCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
