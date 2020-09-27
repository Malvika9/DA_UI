import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivativeselectionComponent } from './derivativeselection.component';

describe('DerivativeselectionComponent', () => {
  let component: DerivativeselectionComponent;
  let fixture: ComponentFixture<DerivativeselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerivativeselectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DerivativeselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
