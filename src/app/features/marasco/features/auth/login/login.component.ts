//**DO NOT DELETE:  THIS IS SUBSCRIBE TO ACTION EXAMPLE */
// import { Subject } from 'rxjs';
// import { takeUntil, tap } from 'rxjs/operators';
// import *  as actions from '../../../core/store/auth/auth.actions';
// import { AuthService as SocialAuthService, SocialUser } from "angularx-social-login";
// import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
// import { Actions } from '@ngrx/effects';
//\\DO NOT DELETE:  THIS IS SUBSCRIBE TO ACTION EXAMPLE */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '@app/features/marasco/core/store/auth';
import { PwaService } from '@app/features/marasco/core/services/pwa.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  //**DO NOT DELETE:  THIS IS SUBSCRIBE TO ACTION EXAMPLE */
  //destroyed$ = new Subject<boolean>();
  //\\DO NOT DELETE:  THIS IS SUBSCRIBE TO ACTION EXAMPLE */
  public showAddToHomeScreenButton: boolean = true;

  public validationOptions: any = {
    //Custom method
    store: this._store,
    // Rules for form validation
    rules: {
      username: {
        required: true
      },
      password: {
        required: true
      }
    },

    // Messages for form validation
    messages: {
      username: {
        required: 'Please enter your username or email'
      },
      password: {
        required: 'Please enter your password'
      }
    },
    submitHandler: this.login
  };

  // constructor(
  //   updates$: Actions,
  //   formBuilder: FormBuilder,
  //   private _store: Store<any>,
  //   private _notificationService: NotificationService,
  //   private authService: SocialAuthService
  //   ) {

  constructor(private _store: Store<any>, private _pwaService: PwaService) {
    //**DO NOT DELETE:  THIS IS SUBSCRIBE TO ACTION EXAMPLE */
    // updates$
    //   .ofType(actions.AuthActionTypes.AuthFailure)
    //   .pipe(takeUntil(this.destroyed$),
    //     tap((error: any) => {
    //       this.dispatchError(error);
    //     }),
    //   )
    //   .subscribe();
    //\\DO NOT DELETE:  THIS IS SUBSCRIBE TO ACTION EXAMPLE */
    this._pwaService.onBeforeInstallPrompt
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((prompt) => {
        this.showAddToHomeScreenButton = !!prompt;
      });
  }

  addToHome($event) {
    this._pwaService.prompt();
  }

  ngOnInit() {}
  //**DO NOT DELETE:  THIS IS SUBSCRIBE TO ACTION EXAMPLE */
  // dispatchError(error: any) {
  //   switch (error.payload.code) {
  //     case 'invalid_grant':
  //       this.notify('Invalid username and/or password', 'Please re-enter your sign in credentials.', ' ');
  //       break;
  //     default:
  //       this.notify('Error occurred', 'Please contact your administrator');
  //       break;
  //   }
  // }
  //\\DO NOT DELETE:  THIS IS SUBSCRIBE TO ACTION EXAMPLE */

  login($event) {
    let model: any = {
      username: $event.elements.username.value,
      password: $event.elements.password.value,
      forceRefresh: $event.elements.forceRefresh.value
    };

    this['settings'].store.dispatch(new fromAuth.LoginAction(model));
  }

  signInWithGoogle(): void {
    //this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this._store.dispatch(new fromAuth.GoogleSign());
  }

  signInWithFB(): void {
    // this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
    this._store.dispatch(new fromAuth.FacebookSign());
  }

  signInWithLinkedIn(): void {
    //this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
    this._store.dispatch(new fromAuth.LinkedInSign());
  }

  ngOnDestroy(): void {
    //**DO NOT DELETE:  THIS IS SUBSCRIBE TO ACTION EXAMPLE */
    //this.destroyed$.next(true);
    //this.destroyed$.complete();
    //\\DO NOT DELETE:  THIS IS SUBSCRIBE TO ACTION EXAMPLE */
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
