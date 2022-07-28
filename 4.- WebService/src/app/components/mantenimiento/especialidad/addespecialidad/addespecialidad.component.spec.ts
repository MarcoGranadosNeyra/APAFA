import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddespecialidadComponent } from './addespecialidad.component';

describe('AddespecialidadComponent', () => {
  let component: AddespecialidadComponent;
  let fixture: ComponentFixture<AddespecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddespecialidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddespecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
