import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsCostPerSfComponent } from './contacts-cost-per-sf.component';

describe('ContactsCostPerSfComponent', () => {
  let component: ContactsCostPerSfComponent;
  let fixture: ComponentFixture<ContactsCostPerSfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsCostPerSfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsCostPerSfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
