import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatToolbarRecepcionistaComponent } from './mat-toolbar-recepcionista.component';

describe('MatToolbarRecepcionistaComponent', () => {
  let component: MatToolbarRecepcionistaComponent;
  let fixture: ComponentFixture<MatToolbarRecepcionistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatToolbarRecepcionistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatToolbarRecepcionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
