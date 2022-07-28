import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEditpersonaComponent } from './usuario-editpersona.component';

describe('UsuarioEditpersonaComponent', () => {
  let component: UsuarioEditpersonaComponent;
  let fixture: ComponentFixture<UsuarioEditpersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioEditpersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioEditpersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
