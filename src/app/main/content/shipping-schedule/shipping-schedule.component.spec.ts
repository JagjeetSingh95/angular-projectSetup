import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingScheduleComponent } from './shipping-schedule.component';

describe('ShippingScheduleComponent', () => {
  let component: ShippingScheduleComponent;
  let fixture: ComponentFixture<ShippingScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
