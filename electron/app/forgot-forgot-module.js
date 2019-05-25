(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-forgot-module"],{

/***/ "./src/app/features/marasco/features/auth/forgot/forgot-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/features/marasco/features/auth/forgot/forgot-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: ForgotRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotRoutingModule", function() { return ForgotRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forgot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot.component */ "./src/app/features/marasco/features/auth/forgot/forgot.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _forgot_component__WEBPACK_IMPORTED_MODULE_2__["ForgotComponent"]
    }];
var ForgotRoutingModule = /** @class */ (function () {
    function ForgotRoutingModule() {
    }
    ForgotRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], ForgotRoutingModule);
    return ForgotRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/auth/forgot/forgot.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/features/marasco/features/auth/forgot/forgot.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"animated fadeInDown\">\n  <!-- < id=\"logo-group\"> -->\n  <div>\n    <span id=\"logo\">\n      <img src=\"assets/img/268x67.png\" alt=\"SmartAdmin\" />\n    </span>\n  </div>\n\n  <span id=\"extr-page-header-space\">\n    <span class=\"hidden-mobile hiddex-xs\">Need an account?</span>\n    <a routerLink=\"/auth/register\" class=\"btn btn-primary\">Create account</a>\n  </span>\n</header>\n<div id=\"main\" role=\"main\" class=\"animated fadeInDown\">\n  <!-- MAIN CONTENT -->\n  <div id=\"content\" class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-7 col-lg-8 hidden-xs hidden-sm\">\n        <h1 class=\"login-header-big\">\n          <span class=\"txt-color-blue\">Maras.</span\n          ><span clas=\"txt-color-blueLight\">co</span>\n          <span class=\"txt-color-blue\"> Admin</span>\n        </h1>\n        <div class=\"hero\">\n          <div class=\"pull-left login-desc-box-l\">\n            <h4 class=\"paragraph-header\">\n              Forgot your password? No worries! Simply enter your username or\n              email address and we will send a reset link to your email address\n            </h4>\n            <div class=\"login-app-icons\">\n              <a href=\"https://www.maras.co\" class=\"btn btn-primary btn-lg\"\n                >Find out more</a\n              >\n            </div>\n          </div>\n\n          <img\n            src=\"assets/img/demo/iphoneview.png\"\n            class=\"pull-right display-image\"\n            alt=\"\"\n            style=\"width:210px\"\n          />\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <h5 class=\"about-heading\">About Maras.co</h5>\n            <p>\n              To find out more about Maras.co please contact us by going to our\n              contact page\n            </p>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <h5 class=\"about-heading\">Mobile/Web Application Development</h5>\n            <p>\n              Maras.co specializes in mobile and web application development. We\n              have hundreds of mobile apps that we maintain through our admin\n              platform\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-4\">\n        <div class=\"well no-padding\">\n          <form\n            id=\"form-forgot-password\"\n            name=\"form-forgot-password\"\n            class=\"smart-form client-form\"\n            [saUiValidate]=\"validationOptions\"\n            novalidate=\"novalidate\"\n          >\n            <header>\n              Forgot Password\n            </header>\n\n            <fieldset>\n              <section>\n                <label class=\"label\">Enter your email address</label>\n                <label class=\"input\">\n                  <!-- <i class=\"icon-append fa fa-envelope\"></i> -->\n                  <input\n                    type=\"email\"\n                    name=\"email\"\n                    id=\"email\"\n                    placeholder=\"Email address\"\n                    class=\"input-lg\"\n                  />\n                  <b class=\"tooltip tooltip-top-right\"\n                    ><i class=\"fa fa-envelope txt-color-teal\"></i> Please enter\n                    email address for password reset</b\n                  ></label\n                >\n              </section>\n              <section>\n                <span class=\"timeline-seperator text-center text-primary\">\n                  <span class=\"font-sm\">OR</span>\n                </span>\n              </section>\n              <section>\n                <label class=\"label\">Your Username</label>\n                <label class=\"input\">\n                  <!-- <i class=\"icon-append fa fa-user\"></i> -->\n                  <input\n                    type=\"text\"\n                    name=\"username\"\n                    id=\"username\"\n                    placeholder=\"Username\"\n                    class=\"input-lg\"\n                  />\n                  <b class=\"tooltip tooltip-top-right\"\n                    ><i class=\"fa fa-user txt-color-teal\"></i> Enter your\n                    username</b\n                  >\n                </label>\n                <div class=\"note\">\n                  <a routerLink=\"/auth/login\">I remembered my password!</a>\n                </div>\n              </section>\n            </fieldset>\n            <footer>\n              <button typ=\"submit\" class=\"btn btn-primary btn-lg btn-block\">\n                <i class=\"fa fa-refresh\"></i> Reset Password\n              </button>\n            </footer>\n          </form>\n        </div>\n\n        <div *ngIf=\"!isMobile\">\n          <h5 class=\"text-center\">- Or sign in using -</h5>\n\n          <ul class=\"list-inline text-center\">\n            <li>\n              <a (click)=\"signInWithFB()\" class=\"btn btn-primary btn-circle\"\n                ><i class=\"fa fa-facebook\"></i\n              ></a>\n            </li>\n            <li>\n              <a (click)=\"signInWithGoogle()\" class=\"btn btn-info btn-circle\"\n                ><i class=\"fa fa-google\"></i\n              ></a>\n            </li>\n            <li>\n              <a\n                (click)=\"signInWithLinkedIn()\"\n                class=\"btn btn-warning btn-circle\"\n                ><i class=\"fa fa-linkedin\"></i\n              ></a>\n            </li>\n          </ul>\n        </div>\n\n        <button\n          *ngIf=\"showAddToHomeScreenButton\"\n          type=\"button\"\n          name=\"addToHome\"\n          class=\"btn btn-primary btn-block btn-lg\"\n          (click)=\"addToHome($event)\"\n        >\n          <i class=\"fa fa-plus\"></i>\n          Add to Home Screen\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/marasco/features/auth/forgot/forgot.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/marasco/features/auth/forgot/forgot.component.ts ***!
  \***************************************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/features/marasco/core/store/auth */ "./src/app/features/marasco/core/store/auth/index.ts");
/* harmony import */ var _app_features_marasco_core_services_pwa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/features/marasco/core/services/pwa.service */ "./src/app/features/marasco/core/services/pwa.service.ts");
/* harmony import */ var _app_features_marasco_core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/features/marasco/core/services */ "./src/app/features/marasco/core/services/index.ts");
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @env/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(_store, _pwaService, _layoutService) {
        var _this = this;
        this._store = _store;
        this._pwaService = _pwaService;
        this._layoutService = _layoutService;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_6__["SubSink"]();
        this.isMobile = false;
        this.showAddToHomeScreenButton = true;
        this.validationOptions = {
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
                    required: function (element) {
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
        this.subs.add(this._pwaService.onBeforeInstallPrompt.subscribe(function (prompt) {
            _this.showAddToHomeScreenButton = !!prompt;
        }));
    }
    ForgotComponent.prototype.addToHome = function ($event) {
        this._pwaService.prompt();
    };
    ForgotComponent.prototype.ngOnInit = function () {
        this.isMobile = this._layoutService.store.isMobile;
    };
    ForgotComponent.prototype.forgotPasswordSubmit = function ($event) {
        var model = {
            email: $event.elements.email.value,
            username: $event.elements.username.value,
            applicationId: _env_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].application
        };
        this['settings'].store.dispatch(new _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordAction"](model));
    };
    ForgotComponent.prototype.signInWithGoogle = function () {
        //this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
        this._store.dispatch(new _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_2__["GoogleSign"]());
    };
    ForgotComponent.prototype.signInWithFB = function () {
        // this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
        this._store.dispatch(new _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_2__["FacebookSign"]());
    };
    ForgotComponent.prototype.signInWithLinkedIn = function () {
        //this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
        this._store.dispatch(new _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_2__["LinkedInSign"]());
    };
    ForgotComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    ForgotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.component.html */ "./src/app/features/marasco/features/auth/forgot/forgot.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _app_features_marasco_core_services_pwa_service__WEBPACK_IMPORTED_MODULE_3__["PwaService"],
            _app_features_marasco_core_services__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/auth/forgot/forgot.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/marasco/features/auth/forgot/forgot.module.ts ***!
  \************************************************************************/
/*! exports provided: ForgotModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotModule", function() { return ForgotModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-routing.module */ "./src/app/features/marasco/features/auth/forgot/forgot-routing.module.ts");
/* harmony import */ var _forgot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot.component */ "./src/app/features/marasco/features/auth/forgot/forgot.component.ts");
/* harmony import */ var _app_features_marasco_shared_forms_validation_smartadmin_validation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/features/marasco/shared/forms/validation/smartadmin-validation.module */ "./src/app/features/marasco/shared/forms/validation/smartadmin-validation.module.ts");
/* harmony import */ var _app_features_marasco_shared_forms_input_smartadmin_input_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/features/marasco/shared/forms/input/smartadmin-input.module */ "./src/app/features/marasco/shared/forms/input/smartadmin-input.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ForgotModule = /** @class */ (function () {
    function ForgotModule() {
    }
    ForgotModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _forgot_routing_module__WEBPACK_IMPORTED_MODULE_2__["ForgotRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _app_features_marasco_shared_forms_validation_smartadmin_validation_module__WEBPACK_IMPORTED_MODULE_4__["SmartadminValidationModule"],
                _app_features_marasco_shared_forms_input_smartadmin_input_module__WEBPACK_IMPORTED_MODULE_5__["SmartadminInputModule"]
            ],
            declarations: [_forgot_component__WEBPACK_IMPORTED_MODULE_3__["ForgotComponent"]]
        })
    ], ForgotModule);
    return ForgotModule;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: 'AIzaSyCUDutHgAw251N38tdRHiBUTz20P6c7odE',
        authDomain: 'marasco-wishlistpremiere-pwa.firebaseapp.com',
        databaseURL: 'https://marasco-wishlistpremiere-pwa.firebaseio.com',
        projectId: 'marasco-wishlistpremiere-pwa',
        storageBucket: 'marasco-wishlistpremiere-pwa.appspot.com',
        messagingSenderId: '852120795509'
    },
    serviceWorkerOptions: {
        vap: {
            publicKey: 'BDCIWOBrQvMpw0lY7p87qO-HkSxGAunOAj9sInXZCJ42GRrj1nmd7zUyFdfaoOPolKJfvHIvzfyv0D25uWh0ydQ',
            privateKey: 'omSWGpqwpFKJZGkhuUXrUNuLt6cG0uq_MMgz8L5DPKc'
        }
    },
    debug: false,
    wishlist: {
        firebaseDbName: 'wishlist-images'
    },
    log: {
        auth: false,
        wishlist: false,
        store: false,
    },
    smartadmin: {
        api: null,
        db: 'marasco-ui'
    },
    notificationStatus: ['pending', 'opened', 'archived'],
    apiUrl: 'https://api.maras.co/api/',
    apiUrlAuth: 'https://api.maras.co/oauth/',
    // apiUrl: 'http://localhost:3002/api/',
    // apiUrlAuth: 'http://localhost:3002/oauth/',
    deepLinkUrl: 'https://marasco-wishlist.app.link/pbaSX2e6WW',
    application: '5c4b1303fc13ae60b4000002',
    devicekey: 'device',
    pushTokenKey: 'pushNotificationToken',
    pushNotificationkey: 'pushNotification',
    notificationSchema: {
        mobile: 'capacitor',
        web: 'serviceWorker'
    },
    redirectUrl: '/home/landing',
    loginUrl: '/auth/login',
    registerUrl: '/auth/register',
    resetPasswordUrl: '/auth/forgot-password',
    clientId: 'wishlistPremiere-pwa',
    clientSecret: 'gbUJGCTin19mKfp24ZODrWJQWgCsRpz4ZPCSdI48r5vBMUBMdbtfOSK9uQI' +
        '4Aljko911aerffIZg9Wruidt3M78J6qji598eoKo9xkiKSKto0eemRq2xiQ' +
        'acm9nL5qCGhfnFQZUCHQ597q1cI5MoCmMseBD49XPexoYfx5y0Oo2eBOgvZ' +
        '6Ig8DHrv9LvzZYle6VEWIQrFBOFrPrezynlqGl632Sso3PLUu2kRRQWuOU5' +
        '2Ng6VhD7vqgnzgEawRj8'
};


/***/ })

}]);
//# sourceMappingURL=forgot-forgot-module.js.map