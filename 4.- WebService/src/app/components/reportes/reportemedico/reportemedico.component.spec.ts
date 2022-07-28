import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportemedicoComponent } from './reportemedico.component';

describe('ReportemedicoComponent', () => {
  let component: ReportemedicoComponent;
  let fixture: ComponentFixture<ReportemedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportemedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportemedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
