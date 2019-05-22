import { User } from './../../../core/interfaces/UserInfo.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import * as fromAuth from '@app/features/marasco/core/store/auth';
import { NotificationService } from '@app/features/marasco/core/services/notification.service';
import { Store, select } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import {
  LayoutService,
  WishlistService
} from '@app/features/marasco/core/services';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';

import { SubSink } from 'subsink';
import { mergeMap } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'sa-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subs$ = new SubSink();

  public dataSource: Observable<any>;
  public asyncSelected: string;
  public isLoggedIn: boolean;
  public isMobile: boolean;
  public searchMobileActive = false;
  public typeaheadNoResults: boolean;
  public typeaheadLoading: boolean;
  public typeAheadUrl: string = '';
  public typeAheadResult: string;
  public user: User;

  constructor(
    private _layoutService: LayoutService,
    private _router: Router,
    private _notificationService: NotificationService,
    private _wishlistService: WishlistService,
    private _store: Store<fromAuth.AuthState>
  ) {}

  ngOnInit() {
    this.dataSource = Observable.create((observer: any) => {
      // Runs on every search
      observer.next(this.asyncSelected);
    }).pipe(mergeMap((token: string) => this.getWishlistsAsObservable(token)));

    const currentState = this._store.pipe(select(fromAuth.getUser));

    this.isMobile = this._layoutService.store.isMobile;

    this.subs$.add(currentState.subscribe(data => {
      this.isLoggedIn = !!data;
      if (!!data) {
        this.user = data.user;
      }
    }));
  }

  toggleSearchMobile() {
    this.searchMobileActive = !this.searchMobileActive;

    $('body').toggleClass('search-mobile', this.searchMobileActive);
  }

  showPopup() {
    let username = this.user.username || '';

    this._notificationService.smartMessageBox(
      {
        title:
          "<i class='fa fa-sign-out txt-color-orangeDark'></i> Logout <span class='txt-color-orangeDark'><strong>" +
          this.user.username +
          '</strong></span> ?',
        content:
          'You can improve your security further after logging out by closing this opened browser',
        buttons: '[No][Yes]'
      },
      ButtonPressed => {
        if (ButtonPressed == 'Yes') {
          this.logout();
        }
      }
    );
  }

  getWishlistsAsObservable(token: string): Observable<any> {
    return from(this._wishlistService.byName(token));
  }

  logout() {
    // this.userService.logout()
    // this.router.navigate(['/auth/login']);
    this._store.dispatch(new fromAuth.LogoutAction());
  }

  login() {
    this._router.navigate(['/auth/login']);
  }

  onSubmit() {
    this._router.navigate(['/miscellaneous/search']);
  }

  changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }

  changeTypeaheadNoResults(e: boolean): void {
    this.typeaheadNoResults = e;
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {
    this._router.navigate(['/wishlistPremiere', 'wishlists', e.item._id]);
    this.asyncSelected = '';
  }

  ngOnDestroy() {
    this.subs$.unsubscribe();
  }
}
