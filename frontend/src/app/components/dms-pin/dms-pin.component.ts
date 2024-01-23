import { Component } from '@angular/core';
import {CodeInputComponent} from 'angular-code-input';

@Component({
  selector: 'app-dms-pin',
  templateUrl: './dms-pin.component.html',
  styleUrls: ['./dms-pin.component.css']
})
export class DmsPinComponent {

    onCodeChanged(code: string) {

    }

  // this called only if user entered full code
  onCodeCompleted(code: string) {
    }


    send() : void {

    }
}
