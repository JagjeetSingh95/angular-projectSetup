import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPipelineComponent } from './sales-pipeline.component';

describe('SalesPipelineComponent', () => {
  let component: SalesPipelineComponent;
  let fixture: ComponentFixture<SalesPipelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPipelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
