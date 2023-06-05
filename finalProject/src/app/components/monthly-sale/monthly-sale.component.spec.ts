import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlySaleComponent } from './monthly-sale.component';

describe('MonthlySaleComponent', () => {
  let component: MonthlySaleComponent;
  let fixture: ComponentFixture<MonthlySaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlySaleComponent]
    });
    fixture = TestBed.createComponent(MonthlySaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
