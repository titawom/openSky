import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalMapComponent } from './arrival-map.component';

describe('ArrivalMapComponent', () => {
  let component: ArrivalMapComponent;
  let fixture: ComponentFixture<ArrivalMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrivalMapComponent]
    });
    fixture = TestBed.createComponent(ArrivalMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
