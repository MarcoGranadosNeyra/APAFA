import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCitasAtendidasComponent } from './reporte-citas-atendidas.component';

describe('ReporteCitasAtendidasComponent', () => {
  let component: ReporteCitasAtendidasComponent;
  let fixture: ComponentFixture<ReporteCitasAtendidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteCitasAtendidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteCitasAtendidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
