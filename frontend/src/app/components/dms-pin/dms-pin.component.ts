import { Component } from '@angular/core';
import {CodeInputComponent} from 'angular-code-input';
import { io } from 'socket.io-client';


@Component({
  selector: 'app-dms-pin',
  templateUrl: './dms-pin.component.html',
  styleUrls: ['./dms-pin.component.css']
})
export class DmsPinComponent {
  socket: any;
  pin : string =  "";

  onCodeChanged(newCode: string): void {
    this.pin = newCode;
  }

  onCodeCompleted(newCode: string): void {
    this.pin = newCode;
  }

  constructor(){
    this.socket = io('http://127.0.0.1:5000');
  }


  send() : void {
    this.socket.emit('PINInput', this.pin );
  }
}
