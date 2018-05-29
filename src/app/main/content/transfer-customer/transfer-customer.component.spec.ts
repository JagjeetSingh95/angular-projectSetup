import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferCustomerComponent } from './transfer-customer.component';

describe('TransferCustomerComponent', () => {
  let component: TransferCustomerComponent;
  let fixture: ComponentFixture<TransferCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
