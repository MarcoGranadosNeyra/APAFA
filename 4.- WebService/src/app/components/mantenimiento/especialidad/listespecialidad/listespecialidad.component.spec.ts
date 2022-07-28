import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListespecialidadComponent } from './listespecialidad.component';

describe('ListespecialidadComponent', () => {
  let component: ListespecialidadComponent;
  let fixture: ComponentFixture<ListespecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListespecialidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListespecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
