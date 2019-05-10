import { LayoutService } from './../../../core/services/layout.service';
import { UserRegistration } from './../../../core/models/userRegistration.model';
import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { Store } from '@ngrx/store';
import * as fromAuth from '@app/features/marasco/core/store/auth';
import { environment } from '@env/environment';
import { PwaService } from '@app/features/marasco/core/services/pwa.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit, OnDestroy {
  private subs = new SubSink();

  private _device: any;

  private _notification: any;

  public isMobile: boolean = false;

  public termsAgreed: boolean = false;

  public showAddToHomeScreenButton: boolean = true;

  public validationOptions: any;

  public validationOptionsDesktop: any;

  public validationOptionsMobile: any;

  bsModalRef: BsModalRef;

  constructor(
    private _store: Store<any>,
    private _layoutService: LayoutService,
    private _modalService: BsModalService,
    private _pwaService: PwaService
  ) {
    this.subs.add(
      this._pwaService.onBeforeInstallPrompt.subscribe((prompt) => {
        this.showAddToHomeScreenButton = !!prompt;
      })
    );
  }

  addToHome($event) {
    this._pwaService.prompt();
  }

  ngOnInit() {
    this.initDevice();

    this.validationOptionsDesktop = {
      //Custom method
      store: this._store,
      device: this._device,
      notification: this._notification,
      isMobile: false,
      // Rules for form validation
      rules: {
        // username: {
        //   required: true
        // },
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 6,
          maxlength: 20
        },
        passwordConfirm: {
          required: true,
          equalTo: '#password'
        },
        firstName: {
          required: true
        },
        lastName: {
          required: true
        },
        termsAgreed: {
          required: true
        }
      },

      // Messages for form validation
      messages: {
        // username: {
        //   required: 'Please enter a username or email'
        // },
        email: {
          required: 'Please enter your email address',
          email: 'Please enter a VALID email address'
        },
        password: {
          required: 'Please enter your password'
        },
        passwordConfirm: {
          required: 'Please enter your password one more time',
          equalTo: 'Please enter the same password as above'
        },
        firstName: {
          required: 'Please select your first name'
        },
        lastName: {
          required: 'Please select your last name'
        },
        termsAgreed: {
          required: 'You must agree with Terms and Conditions'
        }
      },
      submitHandler: this.register
    };

    this.validationOptionsMobile = {
      //Custom method
      store: this._store,
      device: this._device,
      notification: this._notification,
      isMobile: true,
      // Rules for form validation
      rules: {
        // username: {
        //   required: true
        // },
        email: {
          required: true,
          email: true
        }
      },

      // Messages for form validation
      messages: {
        // username: {
        //   required: 'Please enter a username or email'
        // },
        email: {
          required: 'Please enter your email address',
          email: 'Please enter a VALID email address'
        }
      },
      submitHandler: this.register
    };

    this.isMobile = this._layoutService.store.isMobile;
    this.validationOptions = this.isMobile
      ? this.validationOptionsMobile
      : this.validationOptionsDesktop;
  }

  async initDevice() {
    const localStorageItem = await localStorage.getItem(environment.devicekey);
    const localStorageNotification = await localStorage.getItem(
      environment.pushNotificationkey
    );

    const device = JSON.parse(localStorageItem);
    const notification = JSON.parse(localStorageNotification);

    this._device = device;
    this._notification = notification;

    this.validationOptionsMobile.device = device;
    this.validationOptionsDesktop.device = device;

    this.validationOptionsMobile.notification = notification;
    this.validationOptionsDesktop.notification = notification;

    this.validationOptions.notification = notification;
    this.validationOptions.device = device;
  }

  register($event) {
    if (this['settings'].isMobile) {
      let model: UserRegistration = {
        email: $event.elements.email.value,
        applicationId: environment.application
      };

      if (!!this['settings'].device) {
        model.devices = [this['settings'].device];
      }

      if (!!this['settings'].notification) {
        this['settings'].notification.schemaType = 'capacitor';
        model.notifications = [this['settings'].notification];
      }

      this['settings'].store.dispatch(new fromAuth.SignupMobileAction(model));
    } else {
      let model: UserRegistration = {
        email: $event.elements.email.value,
        firstName: $event.elements.firstName.value,
        lastName: $event.elements.lastName.value,
        username: $event.elements.email.value,
        password: $event.elements.password.value,
        passwordConfirm: $event.elements.passwordConfirm.value,
        termsAgreed: $event.elements.termsAgreed.value,
        applicationId: environment.application
      };

      if (!!this['settings'].device) {
        model.devices = [this['settings'].device];
      }

      if (!!this['settings'].notification) {
        this['settings'].notification.schemaType = 'serviceWorker';
        model.notifications = [this['settings'].notification];
      }

      this['settings'].store.dispatch(new fromAuth.SignupAction(model));
    }
  }

  openModal(event, template: TemplateRef<any>) {
    event.preventDefault();
    this.bsModalRef = this._modalService.show(template);
  }

  onTermsAgree() {
    this.termsAgreed = true;
    this.bsModalRef.hide();
  }

  onTermsClose() {
    this.bsModalRef.hide();
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
    this.subs.unsubscribe();
  }
}
