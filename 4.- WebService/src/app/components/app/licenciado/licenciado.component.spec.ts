import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciadoComponent } from './licenciado.component';

describe('LicenciadoComponent', () => {
  let component: LicenciadoComponent;
  let fixture: ComponentFixture<LicenciadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenciadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenciadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
