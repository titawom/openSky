import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportSelectorComponent } from './airport-selector.component';

describe('AirportSelectorComponent', () => {
  let component: AirportSelectorComponent;
  let fixture: ComponentFixture<AirportSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirportSelectorComponent]
    });
    fixture = TestBed.createComponent(AirportSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
