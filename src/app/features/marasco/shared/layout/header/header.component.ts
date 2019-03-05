import { User } from './../../../core/interfaces/UserInfo.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as fromAuth from '@app/features/marasco/core/store/auth';
import { NotificationService } from '@app/features/marasco/core/services/notification.service';
import { AuthService } from '@app/features/marasco/core/services/auth.service';
import { Store, select } from '@ngrx/store';

declare var $: any;

@Component({
  selector: 'sa-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: boolean;
  public user: User;

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _notificationService: NotificationService,
    private _store: Store<fromAuth.AuthState>
  ) {}

  ngOnInit() {
    //Subscribe
    // this._authService.isLoggedIn().subscribe((loggedIn) => {
    //   this.isLoggedIn = loggedIn;
    // });

    const testis = this._store.pipe(
      select(fromAuth.getUser)
    );

    testis.subscribe(data => {
      this.isLoggedIn = !!data;
      this.user = data.user;
    })
  }

  searchMobileActive = false;

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
      (ButtonPressed) => {
        if (ButtonPressed == 'Yes') {
          this.logout();
        }
      }
    );
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
}
