import {Component, NgZone, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-database-page',
  templateUrl: './database-page.component.html',
  styleUrls: ['./database-page.component.css']
})
export class DatabasePageComponent {

  @ViewChild('picker') picker: any;

  public color: ThemePalette = 'primary';
  ind: boolean = false;
  isPickerFocused: boolean = false;
  isCalendarIconClicked: boolean = false;
  isCalendarOpen: boolean = false;


  public formGroup = new FormGroup({
    date: new FormControl(null, [Validators.required]),
    date2: new FormControl(null, [Validators.required])
  })


  ngOnInit() {
  }



  closePicker() {
    this.picker.cancel();
  }


  hideButton() {
    this.ind = !this.ind;
  }
}
