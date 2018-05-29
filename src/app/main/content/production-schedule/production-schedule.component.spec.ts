import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionScheduleComponent } from './production-schedule.component';

describe('ProductionScheduleComponent', () => {
  let component: ProductionScheduleComponent;
  let fixture: ComponentFixture<ProductionScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
