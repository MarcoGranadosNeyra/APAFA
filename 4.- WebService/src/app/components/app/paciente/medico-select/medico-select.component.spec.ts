import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoSelectComponent } from './medico-select.component';

describe('MedicoSelectComponent', () => {
  let component: MedicoSelectComponent;
  let fixture: ComponentFixture<MedicoSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
