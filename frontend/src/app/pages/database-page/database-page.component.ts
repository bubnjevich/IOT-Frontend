import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { io, Socket } from 'socket.io-client';  // Import the Socket class


@Component({
  selector: 'app-database-page',
  templateUrl: './database-page.component.html',
  styleUrls: ['./database-page.component.css']
})
export class DatabasePageComponent {
  routeName : string;
  title : string = "title";
  alarmTime: string = '';
  alarmSet: boolean = false;
  alarmActive: boolean = false;
  socket: any;


  constructor(private route: ActivatedRoute){
    this.socket = io('http://127.0.0.1:5000');
    this.routeName = this.route.snapshot.routeConfig?.path || "";
    if(this.routeName == "database"){
      this.title = "Alarm Clock:"
    }
  }
  
  setAlarm(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    this.alarmTime = form["alarmTime"].value;
    this.alarmSet = true;
    this.alarmActive = true;  
    this.socket.emit('AlarmClockSet', { time: this.alarmTime });
  }



  disableAlarm(): void {
    this.alarmActive = false;
    this.socket.emit('DisableAlarm', { time: this.alarmTime });
  }
}
