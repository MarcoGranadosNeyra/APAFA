import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionclienteComponent } from './atencioncliente.component';

describe('AtencionclienteComponent', () => {
  let component: AtencionclienteComponent;
  let fixture: ComponentFixture<AtencionclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtencionclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtencionclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
