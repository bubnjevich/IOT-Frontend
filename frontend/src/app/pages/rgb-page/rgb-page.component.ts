import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-rgb-page',
  templateUrl: './rgb-page.component.html',
  styleUrls: ['./rgb-page.component.css']
})
export class RgbPageComponent {
  routeName : string;
  title : string = "title";
  selectedLightSetting: string = "";
  socket: any;

  constructor(private route: ActivatedRoute){
    this.socket = io('http://127.0.0.1:5000');
    this.routeName = this.route.snapshot.routeConfig?.path || "";
    if(this.routeName == "rgb"){
      this.title = "RGB LED:"
    }
  }
  submitLightSetting(): void {
    this.socket.emit('SetLightColor', this.selectedLightSetting );
  }
}
