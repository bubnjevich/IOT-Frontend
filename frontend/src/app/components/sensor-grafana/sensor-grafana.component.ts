import {Component, OnInit} from '@angular/core';
import { GrafanaService} from "../../services/grafana.service";

@Component({
  selector: 'app-sensor-grafana',
  templateUrl: './sensor-grafana.component.html',
  styleUrls: ['./sensor-grafana.component.css']
})
export class SensorGrafanaComponent implements OnInit{
     dashboardUrl: string;

     constructor(private grafanaService: GrafanaService) {
           this.dashboardUrl = this.grafanaService.getDHTDashboardUrl();

     }

    ngOnInit() {
    this.dashboardUrl = this.grafanaService.getDHTDashboardUrl();
    console.log(this.dashboardUrl);
    }

}
