import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJoboffreComponent } from './add-joboffre.component';

describe('AddJoboffreComponent', () => {
  let component: AddJoboffreComponent;
  let fixture: ComponentFixture<AddJoboffreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddJoboffreComponent]
    });
    fixture = TestBed.createComponent(AddJoboffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
