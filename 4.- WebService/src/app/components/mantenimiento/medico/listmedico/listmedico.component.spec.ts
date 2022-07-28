import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmedicoComponent } from './listmedico.component';

describe('ListmedicoComponent', () => {
  let component: ListmedicoComponent;
  let fixture: ComponentFixture<ListmedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
