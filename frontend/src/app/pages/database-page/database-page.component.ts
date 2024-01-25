import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  private webSocket: WebSocket;


  constructor(private route: ActivatedRoute){
    this.webSocket = new WebSocket('http://localhost:8086/budilnik');
    this.routeName = this.route.snapshot.routeConfig?.path || "";
    if(this.routeName == "database"){
      this.title = "Alarm Clock:"
    }
  }
  
  setAlarm(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    this.alarmTime = form["alarmTime"];
    this.alarmSet = true;
    this.alarmActive = true;  // Assuming the alarm is active immediately for simplicity

    // Send alarm info via WebSocket
    this.sendMessage({ alarmTime: this.alarmTime });
  }

  sendMessage(message: any): void {
    this.webSocket.send(JSON.stringify(message));
  }

  disableAlarm(): void {
    this.alarmActive = false;
    // Add any additional logic for disabling the alarm
  }
}
