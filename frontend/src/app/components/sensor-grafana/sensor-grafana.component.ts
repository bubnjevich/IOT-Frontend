import {Component, OnInit} from '@angular/core';
import { GrafanaService} from "../../services/grafana.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sensor-grafana',
  templateUrl: './sensor-grafana.component.html',
  styleUrls: ['./sensor-grafana.component.css']
})
export class SensorGrafanaComponent implements OnInit{
     sensor : string = "";

     constructor(private grafanaService: GrafanaService, private route: ActivatedRoute) {

     }

    ngOnInit() {
     this.route.params.subscribe(params => {
       this.sensor = params['sensor'];
    });

    }

}
