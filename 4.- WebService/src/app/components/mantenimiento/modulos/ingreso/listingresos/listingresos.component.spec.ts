import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingresosComponent } from './listingresos.component';

describe('ListingresosComponent', () => {
  let component: ListingresosComponent;
  let fixture: ComponentFixture<ListingresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingresosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
