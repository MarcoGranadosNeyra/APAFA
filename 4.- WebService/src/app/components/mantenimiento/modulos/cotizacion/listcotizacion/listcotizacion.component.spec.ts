import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcotizacionComponent } from './listcotizacion.component';

describe('ListcotizacionComponent', () => {
  let component: ListcotizacionComponent;
  let fixture: ComponentFixture<ListcotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcotizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
