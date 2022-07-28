import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprogramarcitarecepcionComponent } from './reprogramarcitarecepcion.component';

describe('ReprogramarcitarecepcionComponent', () => {
  let component: ReprogramarcitarecepcionComponent;
  let fixture: ComponentFixture<ReprogramarcitarecepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReprogramarcitarecepcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprogramarcitarecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
