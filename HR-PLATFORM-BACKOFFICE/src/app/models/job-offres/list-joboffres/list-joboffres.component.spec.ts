import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJoboffresComponent } from './list-joboffres.component';

describe('ListJoboffresComponent', () => {
  let component: ListJoboffresComponent;
  let fixture: ComponentFixture<ListJoboffresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListJoboffresComponent]
    });
    fixture = TestBed.createComponent(ListJoboffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
