import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoffchartComponent } from './payoffchart.component';

describe('PayoffchartComponent', () => {
  let component: PayoffchartComponent;
  let fixture: ComponentFixture<PayoffchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayoffchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayoffchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
