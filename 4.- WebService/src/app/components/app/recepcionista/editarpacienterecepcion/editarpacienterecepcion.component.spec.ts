import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarpacienterecepcionComponent } from './editarpacienterecepcion.component';

describe('EditarpacienterecepcionComponent', () => {
  let component: EditarpacienterecepcionComponent;
  let fixture: ComponentFixture<EditarpacienterecepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarpacienterecepcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarpacienterecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
