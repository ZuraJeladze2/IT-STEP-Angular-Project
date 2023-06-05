import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCategoriesComponent } from './other-categories.component';

describe('OtherCategoriesComponent', () => {
  let component: OtherCategoriesComponent;
  let fixture: ComponentFixture<OtherCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherCategoriesComponent]
    });
    fixture = TestBed.createComponent(OtherCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
