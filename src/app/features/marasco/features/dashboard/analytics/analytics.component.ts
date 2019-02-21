import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'sa-analytics',
  templateUrl: './analytics.component.html',
})
export class AnalyticsComponent implements OnInit {

  public calendar$
  constructor(
    private store: Store<any>
  ) {
    
  }

  ngOnInit() {
  }

}
