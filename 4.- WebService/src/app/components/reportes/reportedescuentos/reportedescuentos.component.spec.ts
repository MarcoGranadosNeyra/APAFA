import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedescuentosComponent } from './reportedescuentos.component';

describe('ReportedescuentosComponent', () => {
  let component: ReportedescuentosComponent;
  let fixture: ComponentFixture<ReportedescuentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportedescuentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedescuentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
