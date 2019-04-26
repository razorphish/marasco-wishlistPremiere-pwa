import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sa-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {
  constructor(private _router: Router) {}

  public createEvent($event) {
    this._router.navigate(['/wishlistPremiere/wishlists/details/0']);
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
