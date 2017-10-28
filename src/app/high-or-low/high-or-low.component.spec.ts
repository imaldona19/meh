import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighOrLowComponent } from './high-or-low.component';

describe('HighOrLowComponent', () => {
  let component: HighOrLowComponent;
  let fixture: ComponentFixture<HighOrLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighOrLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighOrLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
