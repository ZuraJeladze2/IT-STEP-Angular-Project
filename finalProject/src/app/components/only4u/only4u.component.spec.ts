import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Only4uComponent } from './only4u.component';

describe('Only4uComponent', () => {
  let component: Only4uComponent;
  let fixture: ComponentFixture<Only4uComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Only4uComponent]
    });
    fixture = TestBed.createComponent(Only4uComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
