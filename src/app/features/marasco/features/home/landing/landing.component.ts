import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'sa-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {
  public calendar$;
  constructor(
    private _store: Store<any>,
    private _router: Router) {}

  ngOnInit() {}

  createEvent($event){
    this._router.navigate(['/wishlistPremiere/wishlists/details/0']);
  }
}
