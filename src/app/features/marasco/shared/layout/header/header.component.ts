import { User } from './../../../core/interfaces/UserInfo.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import * as fromAuth from '@app/features/marasco/core/store/auth';
import { NotificationService } from '@app/features/marasco/core/services/notification.service';
import { Store, select } from '@ngrx/store';
import { Subject, Observable, of, from } from 'rxjs';
import { takeUntil, mergeMap } from 'rxjs/operators';
import {
  LayoutService,
  WishlistService
} from '@app/features/marasco/core/services';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';

declare var $: any;

@Component({
  selector: 'sa-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

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

  statesComplex: any[] = [
    { id: 1, name: 'Alabama', region: 'South' },
    { id: 2, name: 'Alaska', region: 'West' },
    { id: 3, name: 'Arizona', region: 'West' },
    { id: 4, name: 'Arkansas', region: 'South' },
    { id: 5, name: 'California', region: 'West' },
    { id: 6, name: 'Colorado', region: 'West' },
    { id: 7, name: 'Connecticut', region: 'Northeast' },
    { id: 8, name: 'Delaware', region: 'South' },
    { id: 9, name: 'Florida', region: 'South' },
    { id: 10, name: 'Georgia', region: 'South' },
    { id: 11, name: 'Hawaii', region: 'West' },
    { id: 12, name: 'Idaho', region: 'West' },
    { id: 13, name: 'Illinois', region: 'Midwest' },
    { id: 14, name: 'Indiana', region: 'Midwest' },
    { id: 15, name: 'Iowa', region: 'Midwest' },
    { id: 16, name: 'Kansas', region: 'Midwest' },
    { id: 17, name: 'Kentucky', region: 'South' },
    { id: 18, name: 'Louisiana', region: 'South' },
    { id: 19, name: 'Maine', region: 'Northeast' },
    { id: 21, name: 'Maryland', region: 'South' },
    { id: 22, name: 'Massachusetts', region: 'Northeast' },
    { id: 23, name: 'Michigan', region: 'Midwest' },
    { id: 24, name: 'Minnesota', region: 'Midwest' },
    { id: 25, name: 'Mississippi', region: 'South' },
    { id: 26, name: 'Missouri', region: 'Midwest' },
    { id: 27, name: 'Montana', region: 'West' },
    { id: 28, name: 'Nebraska', region: 'Midwest' },
    { id: 29, name: 'Nevada', region: 'West' },
    { id: 30, name: 'New Hampshire', region: 'Northeast' },
    { id: 31, name: 'New Jersey', region: 'Northeast' },
    { id: 32, name: 'New Mexico', region: 'West' },
    { id: 33, name: 'New York', region: 'Northeast' },
    { id: 34, name: 'North Dakota', region: 'Midwest' },
    { id: 35, name: 'North Carolina', region: 'South' },
    { id: 36, name: 'Ohio', region: 'Midwest' },
    { id: 37, name: 'Oklahoma', region: 'South' },
    { id: 38, name: 'Oregon', region: 'West' },
    { id: 39, name: 'Pennsylvania', region: 'Northeast' },
    { id: 40, name: 'Rhode Island', region: 'Northeast' },
    { id: 41, name: 'South Carolina', region: 'South' },
    { id: 42, name: 'South Dakota', region: 'Midwest' },
    { id: 43, name: 'Tennessee', region: 'South' },
    { id: 44, name: 'Texas', region: 'South' },
    { id: 45, name: 'Utah', region: 'West' },
    { id: 46, name: 'Vermont', region: 'Northeast' },
    { id: 47, name: 'Virginia', region: 'South' },
    { id: 48, name: 'Washington', region: 'South' },
    { id: 49, name: 'West Virginia', region: 'South' },
    { id: 50, name: 'Wisconsin', region: 'Midwest' },
    { id: 51, name: 'Wyoming', region: 'West' }
  ];

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

    currentState.pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
      this.isLoggedIn = !!data;
      if (!!data) {
        this.user = data.user;
      }
    });
  }

  toggleSearchMobile() {
    this.searchMobileActive = !this.searchMobileActive;

    $('body').toggleClass('search-mobile', this.searchMobileActive);
  }

  showPopup() {
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
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
