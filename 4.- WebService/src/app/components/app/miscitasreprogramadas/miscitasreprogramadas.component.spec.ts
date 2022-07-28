import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscitasreprogramadasComponent } from './miscitasreprogramadas.component';

describe('MiscitasreprogramadasComponent', () => {
  let component: MiscitasreprogramadasComponent;
  let fixture: ComponentFixture<MiscitasreprogramadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscitasreprogramadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscitasreprogramadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
