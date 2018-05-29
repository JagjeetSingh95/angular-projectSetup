import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerinfoComponent } from './customerinfo.component';

describe('CustomerinfoComponent', () => {
  let component: CustomerinfoComponent;
  let fixture: ComponentFixture<CustomerinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
