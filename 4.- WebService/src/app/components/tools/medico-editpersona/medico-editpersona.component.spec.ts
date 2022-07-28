import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoEditpersonaComponent } from './medico-editpersona.component';

describe('MedicoEditpersonaComponent', () => {
  let component: MedicoEditpersonaComponent;
  let fixture: ComponentFixture<MedicoEditpersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoEditpersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoEditpersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
