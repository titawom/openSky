import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalsTableComponent } from './arrivals-table.component';

describe('ArrivalsTableComponent', () => {
  let component: ArrivalsTableComponent;
  let fixture: ComponentFixture<ArrivalsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrivalsTableComponent]
    });
    fixture = TestBed.createComponent(ArrivalsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
