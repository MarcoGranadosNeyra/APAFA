import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadSelectComponent } from './especialidad-select.component';

describe('EspecialidadSelectComponent', () => {
  let component: EspecialidadSelectComponent;
  let fixture: ComponentFixture<EspecialidadSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
