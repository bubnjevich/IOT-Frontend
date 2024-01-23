import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmsPinComponent } from './dms-pin.component';

describe('DmsPinComponent', () => {
  let component: DmsPinComponent;
  let fixture: ComponentFixture<DmsPinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DmsPinComponent]
    });
    fixture = TestBed.createComponent(DmsPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
