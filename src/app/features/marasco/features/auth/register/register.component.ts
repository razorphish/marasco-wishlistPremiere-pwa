import { LayoutService } from './../../../core/services/layout.service';
import { UserRegistration } from './../../../core/models/userRegistration.model';
import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { Store } from '@ngrx/store';
import * as fromAuth from '@app/features/marasco/core/store/auth';
import { environment } from '@env/environment';
import { PwaService } from '@app/features/marasco/core/services/pwa.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Plugins } from '@capacitor/core';
const { Device } = Plugins;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  private _device: any;

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
    this.initDevice();

    this.validationOptionsDesktop  = {
      //Custom method
      store: this._store,
      device: this._device,
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
    const info = await Device.getInfo();
    let device = {
      uuid: info.uuid,
      diskFree: info.diskFree,
      osVersion: info.osVersion,
      memUsed: info.memUsed,
      batteryLevel: info.batteryLevel,
      model: info.model,
      platform: info.platform,
      manufacturer: info.manufacturer,
      isVirtual: info.isVirtual,
      appVersion: info.appVersion
    };

    this._device = device;
    this.validationOptionsMobile.device = device;
    this.validationOptionsDesktop.device = device;
    this.validationOptions.device = device;
  }

  register($event) {
    if (this['settings'].isMobile) {
      let model: UserRegistration = {
        email: $event.elements.email.value,
        applicationId: environment.application,
        devices: [this['settings'].device]
      };
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
        applicationId: environment.application,
        devices: [this['settings'].device]
      };
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
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
