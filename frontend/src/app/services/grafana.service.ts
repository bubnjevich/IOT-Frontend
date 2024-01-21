import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrafanaService {

  constructor() { }

   getDHTDashboardUrl(): string {
    return 'http://localhost:3000/d/afdbfc83-be02-4b4a-96fc-7fa2de9e9631/sensors?orgId=1&viewPanel=1&from=now-3h&to=now';
  }
}
