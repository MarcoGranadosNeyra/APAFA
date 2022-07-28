import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditespecialidadComponent } from './editespecialidad.component';

describe('EditespecialidadComponent', () => {
  let component: EditespecialidadComponent;
  let fixture: ComponentFixture<EditespecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditespecialidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditespecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
