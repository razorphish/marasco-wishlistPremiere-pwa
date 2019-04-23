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

module.exports = "<header id=\"header\" class=\"animated fadeInDown\">\n\n  <!-- < id=\"logo-group\"> -->\n  <div>\n    <span id=\"logo\"> <img src=\"assets/img/268x67.png\" alt=\"SmartAdmin\"> </span>\n  </div>\n\n  <span id=\"extr-page-header-space\"> <span class=\"hidden-mobile hiddex-xs\">Need an account?</span> \n  <a routerLink=\"/auth/register\" class=\"btn btn-primary\">Create account</a> </span>\n\n</header>\n<div id=\"main\" role=\"main\" class=\"animated fadeInDown\">\n\n  <!-- MAIN CONTENT -->\n  <div id=\"content\" class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-7 col-lg-8 hidden-xs hidden-sm\">\n        <h1 class=\"login-header-big\"><span class=\"txt-color-blue\">Maras.</span><span clas=\"txt-color-blueLight\">co</span> \n          <span class=\"txt-color-blue\"> Admin</span></h1>\n        <div class=\"hero\">\n\n          <div class=\"pull-left login-desc-box-l\">\n            <h4 class=\"paragraph-header\">\n              Forgot your password? No worries!  Simply enter your username\n              or email address and we will send a reset link to your email address</h4>\n            <div class=\"login-app-icons\">\n              <a href=\"https://www.maras.co\"  class=\"btn btn-primary btn-sm\">Find out more</a>\n            </div>\n          </div>\n\n          <img src=\"assets/img/demo/iphoneview.png\" class=\"pull-right display-image\" alt=\"\" style=\"width:210px\">\n\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <h5 class=\"about-heading\">About Maras.co</h5>\n            <p>\n              To find out more about Maras.co please contact us by going to our contact page\n            </p>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <h5 class=\"about-heading\">Mobile/Web Application Development</h5>\n            <p>\n              Maras.co specializes in mobile and web application development. We have hundreds of mobile apps that we\n              maintain through our admin platform\n            </p>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-4\">\n        <div class=\"well no-padding\">\n          <form \n            id=\"form-forgot-password\" \n            class=\"smart-form client-form\"\n            [saUiValidate]=\"validationOptions\"\n             novalidate=\"novalidate\">\n            <header>\n              Forgot Password\n            </header>\n\n            <fieldset>\n\n              <section>\n                <label class=\"label\">Enter your email address</label>\n                <label class=\"input\"> <i class=\"icon-append fa fa-envelope\"></i>\n                  <input type=\"email\" name=\"email\" id=\"email\">\n                  <b class=\"tooltip tooltip-top-right\"><i class=\"fa fa-envelope txt-color-teal\"></i> Please enter email address for password reset</b></label>\n              </section>\n              <section>\n\t\t\t\t\t\t\t\t\t\t<span class=\"timeline-seperator text-center text-primary\"> <span class=\"font-sm\">OR</span>\n              </span></section>\n              <section>\n                <label class=\"label\">Your Username</label>\n                <label class=\"input\"> <i class=\"icon-append fa fa-user\"></i>\n                  <input type=\"text\" name=\"username\" id=\"username\">\n                  <b class=\"tooltip tooltip-top-right\"><i class=\"fa fa-user txt-color-teal\"></i> Enter your username</b> </label>\n                <div class=\"note\">\n                  <a routerLink=\"/auth/login\">I remembered my password!</a>\n                </div>\n              </section>\n\n            </fieldset>\n            <footer>\n              <button typ=\"submit\" class=\"btn btn-primary\">\n                <i class=\"fa fa-refresh\"></i> Reset Password\n              </button>\n            </footer>\n          </form>\n\n        </div>\n\n        <h5 class=\"text-center\"> - Or sign in using -</h5>\n\n        <ul class=\"list-inline text-center\">\n          <li>\n            <a (click)=\"signInWithFB()\" class=\"btn btn-primary btn-circle\"><i class=\"fa fa-facebook\"></i></a>\n          </li>\n          <li>\n            <a (click)=\"signInWithGoogle()\" class=\"btn btn-info btn-circle\"><i class=\"fa fa-google\"></i></a>\n          </li>\n          <li>\n            <a (click)=\"signInWithLinkedIn()\" class=\"btn btn-warning btn-circle\"><i class=\"fa fa-linkedin\"></i></a>\n          </li>\n        </ul>\n\n        <button\n        *ngIf=\"showAddToHomeScreenButton\"\n        type=\"button\"\n        name=\"addToHome\"\n        class=\"btn btn-primary btn-block\"\n        (click)=\"addToHome($event)\"\n        >\n        <i class=\"fa fa-plus\"></i>\n        Add to Home Screen\n      </button>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    function ForgotComponent(_store, _pwaService) {
        var _this = this;
        this._store = _store;
        this._pwaService = _pwaService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
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
        this._pwaService.onBeforeInstallPrompt
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (prompt) {
            _this.showAddToHomeScreenButton = !!prompt;
        });
    }
    ForgotComponent.prototype.addToHome = function ($event) {
        this._pwaService.prompt();
    };
    ForgotComponent.prototype.ngOnInit = function () { };
    ForgotComponent.prototype.forgotPasswordSubmit = function ($event) {
        var model = {
            email: $event.elements.email.value,
            username: $event.elements.username.value
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
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    ForgotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.component.html */ "./src/app/features/marasco/features/auth/forgot/forgot.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _app_features_marasco_core_services_pwa_service__WEBPACK_IMPORTED_MODULE_3__["PwaService"]])
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



/***/ })

}]);
//# sourceMappingURL=forgot-forgot-module.js.map