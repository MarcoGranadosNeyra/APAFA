import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarcitarecepcionComponent } from './agregarcitarecepcion.component';

describe('AgregarcitarecepcionComponent', () => {
  let component: AgregarcitarecepcionComponent;
  let fixture: ComponentFixture<AgregarcitarecepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarcitarecepcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarcitarecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
