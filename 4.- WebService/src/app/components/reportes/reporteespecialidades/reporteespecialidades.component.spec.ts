import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteespecialidadesComponent } from './reporteespecialidades.component';

describe('ReporteespecialidadesComponent', () => {
  let component: ReporteespecialidadesComponent;
  let fixture: ComponentFixture<ReporteespecialidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteespecialidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteespecialidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
