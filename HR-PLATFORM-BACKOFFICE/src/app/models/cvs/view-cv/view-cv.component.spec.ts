import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCvComponent } from './view-cv.component';

describe('ViewCvComponent', () => {
  let component: ViewCvComponent;
  let fixture: ComponentFixture<ViewCvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCvComponent]
    });
    fixture = TestBed.createComponent(ViewCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
