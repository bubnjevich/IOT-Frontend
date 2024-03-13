import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trending-table',
  templateUrl: './trending-table.component.html',
  styleUrls: ['./trending-table.component.css']
})
export class TrendingTableComponent {

  public constructor(

    private cdRef: ChangeDetectorRef,
    private router: Router){


  }


  redirectToPage(page: string) {
    this.router.navigate([page]);
  }

}
