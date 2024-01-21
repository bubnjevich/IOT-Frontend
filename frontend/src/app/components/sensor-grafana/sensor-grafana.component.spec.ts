import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorGrafanaComponent } from './sensor-grafana.component';

describe('SensorGrafanaComponent', () => {
  let component: SensorGrafanaComponent;
  let fixture: ComponentFixture<SensorGrafanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SensorGrafanaComponent]
    });
    fixture = TestBed.createComponent(SensorGrafanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
