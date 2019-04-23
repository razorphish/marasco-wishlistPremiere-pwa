(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-reset-module"],{

/***/ "./src/app/features/marasco/features/auth/reset/reset-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/marasco/features/auth/reset/reset-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ResetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetRoutingModule", function() { return ResetRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset.component */ "./src/app/features/marasco/features/auth/reset/reset.component.ts");
/* harmony import */ var _reset_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset.guard */ "./src/app/features/marasco/features/auth/reset/reset.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: _reset_component__WEBPACK_IMPORTED_MODULE_2__["ResetComponent"],
        canActivate: [_reset_guard__WEBPACK_IMPORTED_MODULE_3__["ResetGuard"]]
    }];
var ResetRoutingModule = /** @class */ (function () {
    function ResetRoutingModule() {
    }
    ResetRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], ResetRoutingModule);
    return ResetRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/auth/reset/reset.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/features/marasco/features/auth/reset/reset.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL21hcmFzY28vZmVhdHVyZXMvYXV0aC9yZXNldC9yZXNldC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/marasco/features/auth/reset/reset.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/features/marasco/features/auth/reset/reset.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"animated fadeInDown\">\n\n  <!-- < id=\"logo-group\"> -->\n  <div>\n    <span id=\"logo\"> <img src=\"assets/img/268x67.png\" alt=\"Wishlist Premiere\"> </span>\n  </div>\n\n  <span id=\"extr-page-header-space\"> <span class=\"hidden-mobile hiddex-xs\">Need an account?</span> \n  <a routerLink=\"/auth/register\" class=\"btn btn-primary\">Create account</a> </span>\n\n</header>\n<div id=\"main\" role=\"main\" class=\"animated fadeInDown\">\n\n  <!-- MAIN CONTENT -->\n  <div id=\"content\" class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-7 col-lg-8 hidden-xs hidden-sm\">\n        <h1 class=\"login-header-big\"><span class=\"txt-color-blue\">Maras.</span><span clas=\"txt-color-blueLight\">co</span> \n          <span class=\"txt-color-blue\"> Admin</span></h1>\n        <div class=\"hero\">\n\n          <div class=\"pull-left login-desc-box-l\">\n            <h4 class=\"paragraph-header\">\n              Reset your password! Enter a new password and make sure to keep it hidden!</h4>\n            <div class=\"login-app-icons\">\n              <a href=\"https://www.maras.co\"  class=\"btn btn-primary btn-sm\">Find out more</a>\n            </div>\n          </div>\n\n          <img src=\"assets/img/demo/iphoneview.png\" class=\"pull-right display-image\" alt=\"\" style=\"width:210px\">\n\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <h5 class=\"about-heading\">About Maras.co</h5>\n            <p>\n              To find out more about Maras.co please contact us by going to our contact page\n            </p>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <h5 class=\"about-heading\">Mobile/Web Application Development</h5>\n            <p>\n              Maras.co specializes in mobile and web application development. We have hundreds of mobile apps that we\n              maintain through our admin platform\n            </p>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-4\">\n        <div class=\"well no-padding\">\n          <form \n            id=\"form-reset-password\" \n            class=\"smart-form client-form\"\n            [saUiValidate]=\"validationOptions\"\n             novalidate=\"novalidate\">\n            <header>\n              Reset Password\n            </header>\n\n            <fieldset>\n\n              <section>\n                <label class=\"label\">Password</label>\n                <label class=\"input\"> <i class=\"icon-append fa fa-envelope\"></i>\n                  <input type=\"password\" name=\"password\" id=\"password\">\n                  <b class=\"tooltip tooltip-top-right\"><i class=\"fa fa-envelope txt-color-teal\"></i> Please enter email address for password reset</b></label>\n              </section>\n\n              <section>\n                <label class=\"label\">Password Confirm</label>\n                <label class=\"input\"> <i class=\"icon-append fa fa-user\"></i>\n                  <input type=\"password\" name=\"passwordConfirm\" id=\"passwordConfirm\">\n                  <b class=\"tooltip tooltip-top-right\"><i class=\"fa fa-user txt-color-teal\"></i> Enter your username</b> </label>\n                <div class=\"note\">\n                </div>\n              </section>\n\n            </fieldset>\n            <footer>\n              <input type=\"hidden\" id=\"token\" name=\"token\" [(ngModel)]=\"token\">\n              <button typ=\"submit\" class=\"btn btn-primary\">\n                <i class=\"fa fa-refresh\"></i> Reset Password\n              </button>\n            </footer>\n          </form>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/features/marasco/features/auth/reset/reset.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/marasco/features/auth/reset/reset.component.ts ***!
  \*************************************************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/features/marasco/core/store/auth */ "./src/app/features/marasco/core/store/auth/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetComponent = /** @class */ (function () {
    function ResetComponent(_store, _route) {
        this._store = _store;
        this._route = _route;
        this.token = '';
        this.validationOptions = {
            //Custom method
            store: this._store,
            // Rules for form validation
            rules: {
                password: {
                    required: true,
                    minlength: 6,
                    maxlength: 20
                },
                passwordConfirm: {
                    required: true,
                    equalTo: '#password'
                }
            },
            // Messages for form validation
            messages: {
                password: {
                    required: 'Please enter your password'
                },
                passwordConfirm: {
                    required: 'Please enter your password one more time',
                    equalTo: 'Please enter the same password as above'
                }
            },
            submitHandler: this.resetPasswordSubmit
        };
        this.token = this._route.snapshot.paramMap.get('token');
    }
    ResetComponent.prototype.ngOnInit = function () {
    };
    ResetComponent.prototype.resetPasswordSubmit = function ($event) {
        var model = {
            password: $event.elements.password.value,
            passwordConfirm: $event.elements.passwordConfirm.value,
            token: $event.elements.token.value
        };
        this['settings'].store.dispatch(new _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordAction"](model));
    };
    ResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__(/*! ./reset.component.html */ "./src/app/features/marasco/features/auth/reset/reset.component.html"),
            styles: [__webpack_require__(/*! ./reset.component.css */ "./src/app/features/marasco/features/auth/reset/reset.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/auth/reset/reset.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/marasco/features/auth/reset/reset.module.ts ***!
  \**********************************************************************/
/*! exports provided: ResetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetModule", function() { return ResetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reset_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-routing.module */ "./src/app/features/marasco/features/auth/reset/reset-routing.module.ts");
/* harmony import */ var _reset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset.component */ "./src/app/features/marasco/features/auth/reset/reset.component.ts");
/* harmony import */ var _app_features_marasco_shared_forms_validation_smartadmin_validation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/features/marasco/shared/forms/validation/smartadmin-validation.module */ "./src/app/features/marasco/shared/forms/validation/smartadmin-validation.module.ts");
/* harmony import */ var _app_features_marasco_shared_forms_input_smartadmin_input_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/features/marasco/shared/forms/input/smartadmin-input.module */ "./src/app/features/marasco/shared/forms/input/smartadmin-input.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ResetModule = /** @class */ (function () {
    function ResetModule() {
    }
    ResetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _reset_routing_module__WEBPACK_IMPORTED_MODULE_2__["ResetRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _app_features_marasco_shared_forms_validation_smartadmin_validation_module__WEBPACK_IMPORTED_MODULE_4__["SmartadminValidationModule"],
                _app_features_marasco_shared_forms_input_smartadmin_input_module__WEBPACK_IMPORTED_MODULE_5__["SmartadminInputModule"]
            ],
            declarations: [_reset_component__WEBPACK_IMPORTED_MODULE_3__["ResetComponent"]]
        })
    ], ResetModule);
    return ResetModule;
}());



/***/ })

}]);
//# sourceMappingURL=reset-reset-module.js.map