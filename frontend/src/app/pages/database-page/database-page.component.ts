import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import {io} from "socket.io-client";
import * as moment from 'moment';

@Component({
  selector: 'app-database-page',
  templateUrl: './database-page.component.html',
  styleUrls: ['./database-page.component.css']
})
export class DatabasePageComponent {

  @ViewChild('picker') picker: any;
  socket: any;

  public color: ThemePalette = 'primary';
  ind: boolean = false;
  isPickerFocused: boolean = false;
  isCalendarIconClicked: boolean = false;
  isCalendarOpen: boolean = false;

  public formGroup = new FormGroup({
    date: new FormControl(null, [Validators.required])
  });

  constructor(private router: Router){
    this.socket = io('http://127.0.0.1:5000');
  }

    closeClock() {
    const alarmTime = this.formGroup.get('date')?.value;
    console.log('Clock Deactivated:', alarmTime); // Debugging: Proverite vrednost
    if (alarmTime) {
      this.sendAlarmToBackend(alarmTime, false);
    } else {
      console.error('No date selected');
    }
  }

  setClock() {
    const alarmTime = this.formGroup.get('date')?.value;
    console.log('Clock Activated:', alarmTime); // Debugging: Proverite vrednost
    if (alarmTime) {
      this.sendAlarmToBackend(alarmTime, true);
    } else {
      console.error('No date selected');
    }
  }

sendAlarmToBackend(alarmTime: Date, isOn: boolean) {
  const localAlarmTime = moment(alarmTime).format('YYYY-MM-DDTHH:mm:ss');
  const alarmData = { alarmTime: localAlarmTime, isOn: isOn };
  this.socket.emit('Clock', alarmData);
  alert("Clock set: " + localAlarmTime);
}

  ngOnInit() {}

  closePicker() {
    this.picker.cancel();
  }

  hideButton() {
    this.ind = !this.ind;
  }
}
