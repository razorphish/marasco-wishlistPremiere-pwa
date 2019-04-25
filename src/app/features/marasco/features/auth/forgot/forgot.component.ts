import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromAuth from '@app/features/marasco/core/store/auth';
import { PwaService } from '@app/features/marasco/core/services/pwa.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LayoutService } from '@app/features/marasco/core/services';
import { environment } from '@env/environment.prod';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styles: []
})
export class ForgotComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  public isMobile: boolean = false;
  public showAddToHomeScreenButton: boolean = true;

  public validationOptions: any = {
    //Custom method
    store: this._store,
    // Rules for form validation
    rules: {
      username: {
        // required: function (element) {
        //   return $("#email").is(':empty');
        // }
      },
      email: {
        required: function(element) {
          return !$('#username').val();
        },
        email: true
      }
    },

    // Messages for form validation
    messages: {
      username: {
        required: 'Please enter a username or email'
      },
      email: {
        required: 'Please enter your email address',
        email: 'Please enter a VALID email address'
      }
    },
    submitHandler: this.forgotPasswordSubmit
  };

  constructor(
    private _store: Store<any>, 
    private _pwaService: PwaService,
    private _layoutService: LayoutService) {
    this._pwaService.onBeforeInstallPrompt
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((prompt) => {
        this.showAddToHomeScreenButton = !!prompt;
      });
  }

  addToHome($event) {
    this._pwaService.prompt();
  }

  ngOnInit() {
    this.isMobile = this._layoutService.store.isMobile;
  }

  forgotPasswordSubmit($event) {
    let model = {
      email: $event.elements.email.value,
      username: $event.elements.username.value,
      applicationId: environment.application
    };

    this['settings'].store.dispatch(new fromAuth.ForgotPasswordAction(model));
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

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
