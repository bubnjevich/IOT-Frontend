import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrendingPageComponent } from './pages/trending-page/trending-page.component';
import { TrendingTableComponent } from './components/trending-table/trending-table.component';
import { DatabasePageComponent } from './pages/database-page/database-page.component';
import { DatabaseTableComponent } from './components/database-table/database-table.component';
import { AlarmsPageComponent } from './pages/alarms-page/alarms-page.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';
import { TagPreviewComponent } from './components/tag-preview/tag-preview.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateTagComponent } from './components/create-tag/create-tag.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AlarmsPreviewComponent } from './components/alarms-preview/alarms-preview.component';
import { AlertedAlarmsComponent } from './components/alerted-alarms/alerted-alarms.component';
import { ReportComponent } from './components/report/report.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { CreateAlarmComponent } from './components/create-alarm/create-alarm.component';
import {MatRadioModule} from '@angular/material/radio';
import { SensorGrafanaComponent } from './components/sensor-grafana/sensor-grafana.component';
import { CommonModule } from '@angular/common';
import { DmsPinComponent } from './components/dms-pin/dms-pin.component';

import { CodeInputModule } from 'angular-code-input';
import { RgbPageComponent } from './pages/rgb-page/rgb-page.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    RegisterComponent,
    NavbarComponent,
    TrendingPageComponent,
    TrendingTableComponent,
    DatabasePageComponent,
    DatabaseTableComponent,
    AlarmsPageComponent,
    ReportsPageComponent,
    DeleteConfirmationComponent,
    TagPreviewComponent,
    CreateTagComponent,
    AlarmsPreviewComponent,
    AlertedAlarmsComponent,
    ReportComponent,
    CreateAlarmComponent,
    SensorGrafanaComponent,
    DmsPinComponent,
    RgbPageComponent
  ],
  imports: [
    MatRadioModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    MatChipsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CodeInputModule,
 CodeInputModule.forRoot({
      codeLength: 4,
      isCharsCode: true,
    }),
    [CommonModule],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
