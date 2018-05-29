import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSheetComponent } from './info-sheet.component';

describe('InfoSheetComponent', () => {
  let component: InfoSheetComponent;
  let fixture: ComponentFixture<InfoSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
