import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntretienComponent } from './add-entretien.component';

describe('AddEntretienComponent', () => {
  let component: AddEntretienComponent;
  let fixture: ComponentFixture<AddEntretienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEntretienComponent]
    });
    fixture = TestBed.createComponent(AddEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
