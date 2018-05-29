import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftingScheduleComponent } from './drafting-schedule.component';

describe('DraftingScheduleComponent', () => {
  let component: DraftingScheduleComponent;
  let fixture: ComponentFixture<DraftingScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftingScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftingScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
