import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeventoComponent } from './listevento.component';

describe('ListeventoComponent', () => {
  let component: ListeventoComponent;
  let fixture: ComponentFixture<ListeventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
