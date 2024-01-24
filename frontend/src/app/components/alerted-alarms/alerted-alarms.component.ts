import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { AlarmAlert } from 'src/app/models/Alarm';
import { AlarmService } from 'src/app/services/alarm.service';
import { ReportService } from 'src/app/services/report.service';
import { io, Socket } from 'socket.io-client';  // Import the Socket class

@Component({
  selector: 'app-alerted-alarms',
  templateUrl: './alerted-alarms.component.html',
  styleUrls: ['./alerted-alarms.component.css']
})
export class AlertedAlarmsComponent implements OnInit{
  alarmAlerts : any[] = [];
  socket: any;  // Change the type to Socket
  public constructor(private reportService : ReportService, private alarmService: AlarmService, private cdRef: ChangeDetectorRef){
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
      this.alarmAlerts.push(data);
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

  formatDate(dateString : string){
    const date = new Date(dateString);
    const formattedDate = date.toUTCString();
    console.log(formattedDate);
    return formattedDate;
  }
}
