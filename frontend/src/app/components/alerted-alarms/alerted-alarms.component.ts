import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { AlarmService } from 'src/app/services/alarm.service';
import { ReportService } from 'src/app/services/report.service';
import { io, Socket } from 'socket.io-client';
import {Alarm} from "../../models/Alarm";  // Import the Socket class

@Component({
  selector: 'app-alerted-alarms',
  templateUrl: './alerted-alarms.component.html',
  styleUrls: ['./alerted-alarms.component.css']
})
export class AlertedAlarmsComponent implements OnInit{
  alarmAlerts : Alarm[] = [];
  socket: any;  // Change the type to Socket
   options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };
  public constructor(){
    // OVDE STAVI ADRESU NA KOJOJ SE SERVER IZVRSAVA - PISE TI KADA POKRENES SERVER KOJA JE ADRESA
    this.socket = io('http://127.0.0.1:5000');
  }

  ngOnInit() {
    this.subscribeToAlarmAlerted();
  }

 subscribeToAlarmAlerted() {
    // Replace with the actual server URL

    this.socket.on('alarm_detected', (data: any) => {
      console.log('Alarm Detected:', data);
    const jsonData = JSON.parse(data);
    console.log(jsonData.status)

    const alarm: Alarm = {
      alarm_name: jsonData.alarm_name,
      device_name: jsonData.device_name,
      type: jsonData.type,
      status: jsonData.start == 0 ? "Off" : "On",
      time: jsonData.time
    };
  this.alarmAlerts.push(alarm);
      // this.cdRef.detectChanges();  // Trigger change detection if needed
    });
  }

  getRecentAlarms(){

  }

  isUpercase(alarm : any){
    if(alarm.Alarm != undefined) return true;
    else return false;
    let date = new Date().toDateString
  }

  getPriority(priority : number){
    if(priority == 0) return "LOW";
    if(priority == 1) return "MEDIUM";
    return "HIGH"
  }
  getType(type : number){
    if(type == 0) return "LOWER";
    return "HIGHER";
  }

formatDate(dateString: string): string {
    const date = new Date(dateString);
  return date.toLocaleString('en-US', this.options);
}

}
