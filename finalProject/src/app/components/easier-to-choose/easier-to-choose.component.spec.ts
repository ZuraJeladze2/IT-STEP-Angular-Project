import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasierToChooseComponent } from './easier-to-choose.component';

describe('EasierToChooseComponent', () => {
  let component: EasierToChooseComponent;
  let fixture: ComponentFixture<EasierToChooseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EasierToChooseComponent]
    });
    fixture = TestBed.createComponent(EasierToChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
