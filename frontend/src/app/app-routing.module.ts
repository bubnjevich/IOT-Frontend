import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/auth.guard';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TrendingPageComponent } from './pages/trending-page/trending-page.component';
import { AlarmsPageComponent } from './pages/alarms-page/alarms-page.component';
import { DatabasePageComponent } from './pages/database-page/database-page.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';
import { SensorGrafanaComponent } from './components/sensor-grafana/sensor-grafana.component';

const routes: Routes = [
  {path:'trending', component: TrendingPageComponent, canActivate: [AuthGuard]},
  {path:'alarms', component: AlarmsPageComponent, canActivate: [AuthGuard]},
  {path:'database', component: DatabasePageComponent, canActivate: [AuthGuard]},
  {path:'reports', component: ReportsPageComponent, canActivate: [AuthGuard]},
  {path: 'grafana', component: SensorGrafanaComponent, canActivate: [AuthGuard]},
  {path: '**',  redirectTo: '/trending'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
