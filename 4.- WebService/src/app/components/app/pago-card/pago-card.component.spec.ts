import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoCardComponent } from './pago-card.component';

describe('PagoCardComponent', () => {
  let component: PagoCardComponent;
  let fixture: ComponentFixture<PagoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
