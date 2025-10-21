import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoboffreDetailsComponent } from './joboffre-details.component';

describe('JoboffreDetailsComponent', () => {
  let component: JoboffreDetailsComponent;
  let fixture: ComponentFixture<JoboffreDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoboffreDetailsComponent]
    });
    fixture = TestBed.createComponent(JoboffreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
