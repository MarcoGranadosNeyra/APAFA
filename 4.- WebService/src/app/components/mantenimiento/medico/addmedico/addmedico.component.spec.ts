import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmedicoComponent } from './addmedico.component';

describe('AddmedicoComponent', () => {
  let component: AddmedicoComponent;
  let fixture: ComponentFixture<AddmedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
