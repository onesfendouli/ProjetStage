import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntretiensComponent } from './list-entretiens.component';

describe('ListEntretiensComponent', () => {
  let component: ListEntretiensComponent;
  let fixture: ComponentFixture<ListEntretiensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEntretiensComponent]
    });
    fixture = TestBed.createComponent(ListEntretiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
