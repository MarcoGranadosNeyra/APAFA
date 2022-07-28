import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationusuarioComponent } from './informationusuario.component';

describe('InformationusuarioComponent', () => {
  let component: InformationusuarioComponent;
  let fixture: ComponentFixture<InformationusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
