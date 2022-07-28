import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenSelectComponent } from './examen-select.component';

describe('ExamenSelectComponent', () => {
  let component: ExamenSelectComponent;
  let fixture: ComponentFixture<ExamenSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
