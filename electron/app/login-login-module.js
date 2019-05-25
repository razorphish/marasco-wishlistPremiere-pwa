(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/features/marasco/features/auth/login/login-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/marasco/features/auth/login/login-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/features/marasco/features/auth/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/auth/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/features/marasco/features/auth/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"animated fadeInDown\">\n  <!-- < id=\"logo-group\"> -->\n  <div>\n    <span id=\"logo\">\n      <a routerLink=\"/\"\n        ><img src=\"assets/img/268x67.png\" alt=\"Wishlist Premiere\"\n      /></a>\n    </span>\n  </div>\n\n  <span id=\"extr-page-header-space\">\n    <span class=\"hidden-mobile hiddex-xs\">Need an account?</span>\n    <a routerLink=\"/auth/register\" class=\"btn btn-primary\">Create account</a>\n  </span>\n</header>\n<div id=\"main\" role=\"main\" class=\"animated fadeInDown\">\n  <div id=\"content\" class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-7 col-lg-8 hidden-xs hidden-sm\">\n        <h1 class=\"txt-color-blue login-header-big\">Wishlist Premiere</h1>\n\n        <div class=\"hero\">\n          <div class=\"pull-left login-desc-box-l\">\n            <h4 class=\"paragraph-header\">\n              Create an account to begin creating wishlists with your friends\n              and family<br />\n            </h4>\n            <br/>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <a\n                  href=\"https://itunes.apple.com/us/app/wishlist-premiere/id1461819820?mt=8\"\n                  ><img alt=\"Get it on iOS\"\n                  src=\"https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-05-04&kind=iossoftware&bubble=ios_apps\"/>\n                </a>\n              </div>\n              <div class=\"col-md-6\">\n                <a\n                  href=\"https://play.google.com/store/apps/details?id=com.wishlistPremiere.marasco&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1\"\n                  ><img\n                    alt=\"Get it on Google Play\"\n                    src=\"assets/img/google-play-badge.png\"\n                    width=\"135\"\n                /></a>\n              </div>\n            </div>\n\n            <div class=\"login-app-icons\">\n              <!-- <a routerLink=\"/dashboard/analytics\" class=\"btn btn-danger btn-sm\">Frontend Template</a>&nbsp; -->\n              <a routerLink=\"/\" class=\"btn btn-primary btn-sm\">Back Home</a>\n            </div>\n          </div>\n          <img\n            src=\"assets/img/demo/iphoneview.png\"\n            class=\"pull-right display-image\"\n            alt=\"\"\n            style=\"width:210px\"\n          />\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <h5 class=\"about-heading\">Share your lists with Friends</h5>\n\n            <p>\n              Wishlist Premiere allows you to create wishlists and share them\n              with your friends!\n            </p>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <h5 class=\"about-heading\">Get Notifications!</h5>\n\n            <p>\n              Wishlist Premiere allows you to create wishlists and share them\n              with your friends! Get notifications on your lists when someone\n              purchases an item from one of your lists\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-4\">\n        <div class=\"well no-padding\">\n          <form\n            id=\"form-login\"\n            class=\"smart-form client-form\"\n            [saUiValidate]=\"validationOptions\"\n            novalidate=\"novalidate\"\n          >\n            <header>\n              Sign In\n            </header>\n\n            <fieldset>\n              <section>\n                <label class=\"label\">Username/Email</label>\n                <label class=\"input\">\n                  <!-- <i class=\"icon-append fa fa-user\"></i> -->\n                  <input\n                    type=\"text\"\n                    name=\"username\"\n                    id=\"username\"\n                    autocomplete=\"username\"\n                    class=\"input-lg\"\n                    placeholder=\"Username\"\n                  />\n                  <b class=\"tooltip tooltip-top-right\"\n                    ><i class=\"fa fa-user fa-2x txt-color-teal\"></i> Please\n                    enter email/username. CASE Sensitive</b\n                  ></label\n                >\n              </section>\n\n              <section>\n                <label class=\"label\">Password</label>\n                <label class=\"input\">\n                  <!-- <i class=\"icon-append fa fa-lg fa-lock\"></i> -->\n                  <input\n                    type=\"password\"\n                    name=\"password\"\n                    id=\"password\"\n                    autocomplete=\"current-password\"\n                    placeholder=\"Password\"\n                    class=\"input-lg\"\n                  />\n                  <b class=\"tooltip tooltip-top-right\">\n                    <i class=\"fa fa-lock txt-color-teal\"></i>\n                    Enter your password</b\n                  >\n                </label>\n                <div class=\"note\">\n                  <a routerLink=\"/auth/forgot-password\">Forgot password?</a>\n                </div>\n              </section>\n\n              <section>\n                <label class=\"checkbox\">\n                  <input\n                    type=\"checkbox\"\n                    name=\"forceRefresh\"\n                    id=\"forceRefresh\"\n                    checked\n                    value=\"true\"\n                  />\n                  <i></i>Stay signed in</label\n                >\n              </section>\n            </fieldset>\n            <footer>\n              <button type=\"submit\" name=\"submit\" class=\"btn btn-primary\">\n                Sign in\n              </button>\n            </footer>\n          </form>\n        </div>\n\n        <div *ngIf=\"!isMobile\">\n          <h5 class=\"text-center\">- Or sign in using -</h5>\n          <ul class=\"list-inline text-center\">\n            <li>\n              <a (click)=\"signInWithFB()\" class=\"btn btn-primary btn-circle\"\n                ><i class=\"fa fa-facebook\"></i\n              ></a>\n            </li>\n            <li>\n              <a (click)=\"signInWithGoogle()\" class=\"btn btn-info btn-circle\"\n                ><i class=\"fa fa-google\"></i\n              ></a>\n            </li>\n            <li>\n              <a\n                (click)=\"signInWithLinkedIn()\"\n                class=\"btn btn-warning btn-circle\"\n                ><i class=\"fa fa-linkedin\"></i\n              ></a>\n            </li>\n          </ul>\n        </div>\n\n        <div *ngIf=\"isMobile\">\n          <h5 class=\"text-center\">- mobile stores</h5>\n\n          <ul class=\"list-inline text-center\">\n            <li>\n              <a\n                href=\"https://itunes.apple.com/us/app/wishlist-premiere/id1461819820?mt=8\"\n                style=\"display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/assets/shared/badges/en-us/appstore-sm.svg) no-repeat;width:60px;height:15px;\"\n              ></a>\n            </li>\n            <li></li>\n          </ul>\n        </div>\n\n        <button\n          *ngIf=\"showAddToHomeScreenButton\"\n          type=\"button\"\n          name=\"addToHome\"\n          class=\"btn btn-primary btn-block\"\n          (click)=\"addToHome($event)\"\n        >\n          <i class=\"fa fa-plus\"></i>\n          Add to Home Screen\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/marasco/features/auth/login/login.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/marasco/features/auth/login/login.component.ts ***!
  \*************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _app_features_marasco_core_services_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/features/marasco/core/services/layout.service */ "./src/app/features/marasco/core/services/layout.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/features/marasco/core/store/auth */ "./src/app/features/marasco/core/store/auth/index.ts");
/* harmony import */ var _app_features_marasco_core_services_pwa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/features/marasco/core/services/pwa.service */ "./src/app/features/marasco/core/services/pwa.service.ts");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//**DO NOT DELETE:  THIS IS SUBSCRIBE TO ACTION EXAMPLE */
// import { Subject } from 'rxjs';
// import { takeUntil, tap } from 'rxjs/operators';
// import *  as actions from '../../../core/store/auth/auth.actions';
// import { AuthService as SocialAuthService, SocialUser } from "angularx-social-login";
// import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
// import { Actions } from '@ngrx/effects';
//\\DO NOT DELETE:  THIS IS SUBSCRIBE TO ACTION EXAMPLE */





var LoginComponent = /** @class */ (function () {
    // constructor(
    //   updates$: Actions,
    //   formBuilder: FormBuilder,
    //   private _store: Store<any>,
    //   private _notificationService: NotificationService,
    //   private authService: SocialAuthService
    //   ) {
    function LoginComponent(_store, _pwaService, _layoutService) {
        var _this = this;
        this._store = _store;
        this._pwaService = _pwaService;
        this._layoutService = _layoutService;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_5__["SubSink"]();
        //**DO NOT DELETE:  THIS IS SUBSCRIBE TO ACTION EXAMPLE */
        //destroyed$ = new Subject<boolean>();
        //\\DO NOT DELETE:  THIS IS SUBSCRIBE TO ACTION EXAMPLE */
        this.isMobile = false;
        this.showAddToHomeScreenButton = true;
        this.validationOptions = {
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
        this.subs.add(this._pwaService.onBeforeInstallPrompt.subscribe(function (prompt) {
            _this.showAddToHomeScreenButton = !!prompt;
        }));
    }
    LoginComponent.prototype.addToHome = function ($event) {
        this._pwaService.prompt();
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.isMobile = this._layoutService.store.isMobile;
    };
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
    LoginComponent.prototype.login = function ($event) {
        var model = {
            username: $event.elements.username.value,
            password: $event.elements.password.value,
            forceRefresh: $event.elements.forceRefresh.value
        };
        this['settings'].store.dispatch(new _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_3__["LoginAction"](model));
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        //this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
        this._store.dispatch(new _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_3__["GoogleSign"]());
    };
    LoginComponent.prototype.signInWithFB = function () {
        // this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
        this._store.dispatch(new _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_3__["FacebookSign"]());
    };
    LoginComponent.prototype.signInWithLinkedIn = function () {
        //this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
        this._store.dispatch(new _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_3__["LinkedInSign"]());
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        //**DO NOT DELETE:  THIS IS SUBSCRIBE TO ACTION EXAMPLE */
        //this.destroyed$.next(true);
        //this.destroyed$.complete();
        //\\DO NOT DELETE:  THIS IS SUBSCRIBE TO ACTION EXAMPLE */
        this.subs.unsubscribe();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/features/marasco/features/auth/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _app_features_marasco_core_services_pwa_service__WEBPACK_IMPORTED_MODULE_4__["PwaService"],
            _app_features_marasco_core_services_layout_service__WEBPACK_IMPORTED_MODULE_0__["LayoutService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/auth/login/login.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/marasco/features/auth/login/login.module.ts ***!
  \**********************************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/features/marasco/features/auth/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/features/marasco/features/auth/login/login.component.ts");
/* harmony import */ var _app_features_marasco_shared_forms_validation_smartadmin_validation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/features/marasco/shared/forms/validation/smartadmin-validation.module */ "./src/app/features/marasco/shared/forms/validation/smartadmin-validation.module.ts");
/* harmony import */ var _app_features_marasco_shared_forms_input_smartadmin_input_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/features/marasco/shared/forms/input/smartadmin-input.module */ "./src/app/features/marasco/shared/forms/input/smartadmin-input.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _app_features_marasco_shared_forms_validation_smartadmin_validation_module__WEBPACK_IMPORTED_MODULE_4__["SmartadminValidationModule"],
                _app_features_marasco_shared_forms_input_smartadmin_input_module__WEBPACK_IMPORTED_MODULE_5__["SmartadminInputModule"]
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map