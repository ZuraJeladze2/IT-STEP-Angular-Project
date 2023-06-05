import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceCategoryComponent } from './choice-category.component';

describe('ChoiceCategoryComponent', () => {
  let component: ChoiceCategoryComponent;
  let fixture: ComponentFixture<ChoiceCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoiceCategoryComponent]
    });
    fixture = TestBed.createComponent(ChoiceCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
