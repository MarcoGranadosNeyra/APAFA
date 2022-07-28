import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListgastosComponent } from './listgastos.component';

describe('ListgastosComponent', () => {
  let component: ListgastosComponent;
  let fixture: ComponentFixture<ListgastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListgastosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListgastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
