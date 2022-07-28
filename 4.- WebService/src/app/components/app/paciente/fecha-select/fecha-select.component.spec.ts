import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaSelectComponent } from './fecha-select.component';

describe('FechaSelectComponent', () => {
  let component: FechaSelectComponent;
  let fixture: ComponentFixture<FechaSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechaSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
