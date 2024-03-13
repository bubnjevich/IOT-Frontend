import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingPageComponent } from './pages/trending-page/trending-page.component';
import { AlarmsPageComponent } from './pages/alarms-page/alarms-page.component';
import { DatabasePageComponent } from './pages/database-page/database-page.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';
import { SensorGrafanaComponent } from './components/sensor-grafana/sensor-grafana.component';
import { RgbPageComponent } from './pages/rgb-page/rgb-page.component';

const routes: Routes = [
  {path:'trending', component: TrendingPageComponent, },
  {path:'alarms', component: AlarmsPageComponent, },
  {path:'database', component: DatabasePageComponent, },
  {path:'reports', component: ReportsPageComponent, },
  {path: 'grafana/:sensor', component: SensorGrafanaComponent,},
  {path: 'rgb', component: RgbPageComponent,},

  {path: '**',  redirectTo: '/trending'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
