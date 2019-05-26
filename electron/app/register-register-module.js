(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/features/marasco/features/auth/register/register-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/features/marasco/features/auth/register/register-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: RegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRoutingModule", function() { return RegisterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component */ "./src/app/features/marasco/features/auth/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    }];
var RegisterRoutingModule = /** @class */ (function () {
    function RegisterRoutingModule() {
    }
    RegisterRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], RegisterRoutingModule);
    return RegisterRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/auth/register/register.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/features/marasco/features/auth/register/register.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"animated fadeInDown\">\n  <!-- < id=\"logo-group\"> -->\n  <div>\n    <span id=\"logo\">\n      <img src=\"assets/img/268x67.png\" alt=\"Wishlist Premiere\" />\n    </span>\n  </div>\n\n  <span id=\"extr-page-header-space\">\n    <span class=\"hidden-mobile hiddex-xs\">Already registered?</span>\n    <a routerLink=\"/auth/login\" class=\"btn btn-primary\">Sign In</a>\n  </span>\n</header>\n<div id=\"main\" role=\"main\" class=\"animated fadeInDown\">\n  <!-- MAIN CONTENT -->\n  <div id=\"content\" class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-7 col-lg-7 hidden-xs hidden-sm\">\n        <h1 class=\"txt-color-blue login-header-big\">Wishlist Premiere</h1>\n        <div class=\"hero\">\n          <div class=\"pull-left login-desc-box-l\">\n            <h4 class=\"paragraph-header\">\n              Register and get access to all the features of our wishlist\n              platform!\n            </h4>\n            <div class=\"login-app-icons\">\n              <a href=\"https://www.maras.co\" class=\"btn btn-primary btn-sm\"\n                >Find out more</a\n              >\n            </div>\n          </div>\n\n          <img\n            src=\"assets/img/demo/iphoneview.png\"\n            alt=\"\"\n            class=\"pull-right display-image\"\n            style=\"width:210px\"\n          />\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <h5 class=\"about-heading\">About Wishlist Premiere</h5>\n            <p>\n              To find out more about Maras.co please contact us by going to our\n              contact page\n            </p>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <h5 class=\"about-heading\">\n              Create wishlists and share with friends!\n            </h5>\n            <p>\n              Create wishlists and share your friends. Get notified about\n              friends who have purchased items for your wishlist!!\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-5\">\n        <div class=\"well no-padding\">\n          <form\n            id=\"form-register\"\n            class=\"smart-form\"\n            [saUiValidate]=\"validationOptions\"\n            novalidate=\"novalidate\"\n          >\n            <header>\n              Register to access the Wishlist Platform! Begin creating and\n              sharing wishlists now!\n            </header>\n\n            <fieldset>\n              <!-- <section>\n                <label class=\"input\"> <i class=\"icon-append fa fa-user\"></i>\n                  <input type=\"text\" id=\"username\" name=\"username\" placeholder=\"Username\" autocomplete=\"username\" />\n                  <b class=\"tooltip tooltip-bottom-right\">Your username or email address</b> \n                </label>\n              </section> -->\n\n              <section>\n                <label class=\"input\">\n                  <!-- <i class=\"icon-append fa fa-envelope-o\"></i> -->\n                  <input\n                    type=\"email\"\n                    id=\"email\"\n                    name=\"email\"\n                    placeholder=\"Email address\"\n                    autocomplete=\"email\"\n                    class=\"input-lg\"\n                  />\n                  <b class=\"tooltip tooltip-bottom-right\"\n                    >Needed to verify your account</b\n                  >\n                </label>\n                <div class=\"note\">\n                  <a routerLink=\"/auth/forgot-password\">Reset password</a>\n                </div>\n              </section>\n\n              <section *ngIf=\"!isMobile\">\n                <label class=\"input\">\n                  <!-- <i class=\"icon-append fa fa-lock\"></i> -->\n                  <input\n                    type=\"password\"\n                    id=\"password\"\n                    name=\"password\"\n                    placeholder=\"Password\"\n                    autocomplete=\"new-password\"\n                    class=\"input-lg\"\n                  />\n                  <b class=\"tooltip tooltip-bottom-right\"\n                    >Don't forget your password!</b\n                  >\n                </label>\n              </section>\n\n              <section *ngIf=\"!isMobile\">\n                <label class=\"input\">\n                  <!-- <i class=\"icon-append fa fa-lock\"></i> -->\n                  <input\n                    type=\"password\"\n                    id=\"passwordConfirm\"\n                    name=\"passwordConfirm\"\n                    placeholder=\"Confirm password\"\n                    autocomplete=\"new-password\"\n                    class=\"input-lg\"\n                  />\n                  <b class=\"tooltip tooltip-bottom-right\"\n                    >Don't forget your password</b\n                  >\n                </label>\n              </section>\n            </fieldset>\n\n            <fieldset *ngIf=\"!isMobile\">\n              <div class=\"row\">\n                <section class=\"col col-6\">\n                  <label class=\"input\">\n                    <input\n                      type=\"text\"\n                      id=\"firstName\"\n                      name=\"firstName\"\n                      placeholder=\"First name\"\n                      class=\"input-lg\"\n                    />\n                  </label>\n                </section>\n                <section class=\"col col-6\">\n                  <label class=\"input\">\n                    <input\n                      type=\"text\"\n                      id=\"lastName\"\n                      name=\"lastName\"\n                      placeholder=\"Last name\"\n                      class=\"input-lg\"\n                    />\n                  </label>\n                </section>\n              </div>\n\n              <section>\n                <label class=\"checkbox\">\n                  <input\n                    type=\"checkbox\"\n                    [(ngModel)]=\"termsAgreed\"\n                    name=\"termsAgreed\"\n                    id=\"termsAgreed\"\n                    value=\"true\"\n                    class=\"input-lg\"\n                  />\n                  <i></i>I agree with the\n                  <a href=\"#\" (click)=\"openModal($event, termsModal)\">\n                    Terms and Conditions\n                  </a></label\n                >\n              </section>\n            </fieldset>\n            <footer>\n              <button\n                type=\"submit\"\n                name=\"submit\"\n                class=\"btn btn-primary btn-block\"\n              >\n                Register\n              </button>\n            </footer>\n          </form>\n        </div>\n        <!-- <p class=\"note text-center\">*You will be given 'GUEST' access until approved for 'User' and/or 'Admin'.</p> -->\n        <div *ngIf=\"!isMobile\">\n          <h5 class=\"text-center\">- Or sign in using -</h5>\n          <ul class=\"list-inline text-center\">\n            <li>\n              <a (click)=\"signInWithFB()\" class=\"btn btn-primary btn-circle\"\n                ><i class=\"fa fa-facebook\"></i\n              ></a>\n            </li>\n            <li>\n              <a (click)=\"signInWithGoogle()\" class=\"btn btn-info btn-circle\"\n                ><i class=\"fa fa-google\"></i\n              ></a>\n            </li>\n            <li>\n              <a\n                (click)=\"signInWithLinkedIn()\"\n                class=\"btn btn-warning btn-circle\"\n                ><i class=\"fa fa-linkedin\"></i\n              ></a>\n            </li>\n          </ul>\n        </div>\n\n        <button\n          *ngIf=\"showAddToHomeScreenButton\"\n          type=\"button\"\n          name=\"addToHome\"\n          class=\"btn btn-primary\"\n          (click)=\"addToHome($event)\"\n        >\n          <i class=\"fa fa-plus\"></i>\n          Add to Home Screen\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- <ng-container  *ngComponentOutlet=\"TermsModalComponent\"></ng-container> -->\n\n<ng-template #termsModal>\n  <smart-terms-modal\n    (agree)=\"onTermsAgree()\"\n    (close)=\"onTermsClose()\"\n  ></smart-terms-modal>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/features/marasco/features/auth/register/register.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/marasco/features/auth/register/register.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _core_services_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../core/services/layout.service */ "./src/app/features/marasco/core/services/layout.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/features/marasco/core/store/auth */ "./src/app/features/marasco/core/store/auth/index.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_features_marasco_core_services_pwa_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/features/marasco/core/services/pwa.service */ "./src/app/features/marasco/core/services/pwa.service.ts");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_store, _layoutService, _modalService, _pwaService) {
        var _this = this;
        this._store = _store;
        this._layoutService = _layoutService;
        this._modalService = _modalService;
        this._pwaService = _pwaService;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_7__["SubSink"]();
        this.isMobile = false;
        this.termsAgreed = false;
        this.showAddToHomeScreenButton = true;
        this.subs.add(this._pwaService.onBeforeInstallPrompt.subscribe(function (prompt) {
            _this.showAddToHomeScreenButton = !!prompt;
        }));
    }
    RegisterComponent.prototype.addToHome = function ($event) {
        this._pwaService.prompt();
    };
    RegisterComponent.prototype.ngOnInit = function () {
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
    };
    RegisterComponent.prototype.initDevice = function () {
        return __awaiter(this, void 0, void 0, function () {
            var localStorageItem, localStorageNotification, device, notification;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, localStorage.getItem(_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].devicekey)];
                    case 1:
                        localStorageItem = _a.sent();
                        return [4 /*yield*/, localStorage.getItem(_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].pushNotificationkey)];
                    case 2:
                        localStorageNotification = _a.sent();
                        device = JSON.parse(localStorageItem);
                        notification = JSON.parse(localStorageNotification);
                        this._device = device;
                        this._notification = notification;
                        this.validationOptionsMobile.device = device;
                        this.validationOptionsDesktop.device = device;
                        this.validationOptionsMobile.notification = notification;
                        this.validationOptionsDesktop.notification = notification;
                        this.validationOptions.notification = notification;
                        this.validationOptions.device = device;
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterComponent.prototype.register = function ($event) {
        if (this['settings'].isMobile) {
            var model = {
                email: $event.elements.email.value,
                applicationId: _env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].application
            };
            if (!!this['settings'].device) {
                model.devices = [this['settings'].device];
            }
            if (!!this['settings'].notification) {
                this['settings'].notification.schemaType = 'capacitor';
                model.notifications = [this['settings'].notification];
            }
            this['settings'].store.dispatch(new _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_4__["SignupMobileAction"](model));
        }
        else {
            var model = {
                email: $event.elements.email.value,
                firstName: $event.elements.firstName.value,
                lastName: $event.elements.lastName.value,
                username: $event.elements.email.value,
                password: $event.elements.password.value,
                passwordConfirm: $event.elements.passwordConfirm.value,
                termsAgreed: $event.elements.termsAgreed.value,
                applicationId: _env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].application
            };
            if (!!this['settings'].device) {
                model.devices = [this['settings'].device];
            }
            if (!!this['settings'].notification) {
                this['settings'].notification.schemaType = 'serviceWorker';
                model.notifications = [this['settings'].notification];
            }
            this['settings'].store.dispatch(new _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_4__["SignupAction"](model));
        }
    };
    RegisterComponent.prototype.openModal = function (event, template) {
        event.preventDefault();
        this.bsModalRef = this._modalService.show(template);
    };
    RegisterComponent.prototype.onTermsAgree = function () {
        this.termsAgreed = true;
        this.bsModalRef.hide();
    };
    RegisterComponent.prototype.onTermsClose = function () {
        this.bsModalRef.hide();
    };
    RegisterComponent.prototype.signInWithGoogle = function () {
        //this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
        this._store.dispatch(new _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_4__["GoogleSign"]());
    };
    RegisterComponent.prototype.signInWithFB = function () {
        // this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
        this._store.dispatch(new _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_4__["FacebookSign"]());
    };
    RegisterComponent.prototype.signInWithLinkedIn = function () {
        //this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
        this._store.dispatch(new _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_4__["LinkedInSign"]());
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/features/marasco/features/auth/register/register.component.html")
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _core_services_layout_service__WEBPACK_IMPORTED_MODULE_0__["LayoutService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _app_features_marasco_core_services_pwa_service__WEBPACK_IMPORTED_MODULE_6__["PwaService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/auth/register/register.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/marasco/features/auth/register/register.module.ts ***!
  \****************************************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/features/marasco/features/auth/register/register-routing.module.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.component */ "./src/app/features/marasco/features/auth/register/register.component.ts");
/* harmony import */ var _terms_modal_terms_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./terms-modal/terms-modal.component */ "./src/app/features/marasco/features/auth/register/terms-modal/terms-modal.component.ts");
/* harmony import */ var _app_features_marasco_shared_forms_validation_smartadmin_validation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/features/marasco/shared/forms/validation/smartadmin-validation.module */ "./src/app/features/marasco/shared/forms/validation/smartadmin-validation.module.ts");
/* harmony import */ var _app_features_marasco_shared_forms_input_smartadmin_input_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/features/marasco/shared/forms/input/smartadmin-input.module */ "./src/app/features/marasco/shared/forms/input/smartadmin-input.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _register_routing_module__WEBPACK_IMPORTED_MODULE_2__["RegisterRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _app_features_marasco_shared_forms_validation_smartadmin_validation_module__WEBPACK_IMPORTED_MODULE_5__["SmartadminValidationModule"],
                _app_features_marasco_shared_forms_input_smartadmin_input_module__WEBPACK_IMPORTED_MODULE_6__["SmartadminInputModule"]
            ],
            exports: [],
            declarations: [_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], _terms_modal_terms_modal_component__WEBPACK_IMPORTED_MODULE_4__["TermsModalComponent"]]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/auth/register/terms-modal/terms-modal.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/auth/register/terms-modal/terms-modal.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n    &times;\n  </button>\n  <h4 class=\"modal-title\" id=\"myModalLabel\">Terms & Conditions</h4>\n</div>\n<div class=\"modal-body custom-scroll terms-body\">\n\n  <div id=\"left\">\n\n    <h1>MARAS.CO TERMS & CONDITIONS TEMPLATE</h1>\n\n    <h2>Introduction</h2>\n\n    <p>These terms and conditions govern your use of this website; by using this website, you accept these terms and\n      conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions,\n      you must not use this website.</p>\n\n    <p>[You must be at least [18] years of age to use this website. By using this website [and by agreeing to these\n      terms and conditions] you warrant and represent that you are at least [18] years of age.]</p>\n\n\n    <h2>License to use website</h2>\n    <p>Unless otherwise stated, [NAME] and/or its licensors own the intellectual property rights in the website and\n      material on the website. Subject to the license below, all these intellectual property rights are reserved.</p>\n\n    <p>You may view, download for caching purposes only, and print pages [or [OTHER CONTENT]] from the website for your\n      own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.</p>\n\n    <p>You must not:</p>\n    <ul>\n      <li>republish material from this website (including republication on another website);</li>\n      <li>sell, rent or sub-license material from the website;</li>\n      <li>show any material from the website in public;</li>\n      <li>reproduce, duplicate, copy or otherwise exploit material on this website for a commercial purpose;]</li>\n      <li>[edit or otherwise modify any material on the website; or]</li>\n      <li>[redistribute material from this website [except for content specifically and expressly made available for\n        redistribution].]</li>\n    </ul>\n    <p>[Where content is specifically made available for redistribution, it may only be redistributed [within your\n      organisation].]</p>\n\n    <h2>Acceptable use</h2>\n\n    <p>You must not use this website in any way that causes, or may cause, damage to the website or impairment of the\n      availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful, or\n      in connection with any\n      unlawful, illegal, fraudulent or harmful purpose or activity.</p>\n\n    <p>You must not use this website to copy, store, host, transmit, send, use, publish or distribute any material\n      which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or\n      other malicious computer\n      software.</p>\n\n    <p>You must not conduct any systematic or automated data collection activities (including without limitation\n      scraping, data mining, data extraction and data harvesting) on or in relation to this website without [NAME'S]\n      express written consent.</p>\n\n    <p>[You must not use this website to transmit or send unsolicited commercial communications.]</p>\n\n    <p>[You must not use this website for any purposes related to marketing without [NAME'S] express written consent.]</p>\n\n    <h2>[Restricted access</h2>\n\n    <p>[Access to certain areas of this website is restricted.] [NAME] reserves the right to restrict access to [other]\n      areas of this website, or indeed this entire website, at [NAME'S] discretion.</p>\n\n    <p>If [NAME] provides you with a user ID and password to enable you to access restricted areas of this website or\n      other content or services, you must ensure that the user ID and password are kept confidential.</p>\n\n    <p>[[NAME] may disable your user ID and password in [NAME'S] sole discretion without notice or explanation.]</p>\n\n    <h2>[User content</h2>\n\n    <p>In these terms and conditions, “your user content” means material (including without limitation text, images,\n      audio material, video material and audio-visual material) that you submit to this website, for whatever purpose.</p>\n\n    <p>You grant to [NAME] a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt,\n      publish, translate and distribute your user content in any existing or future media. You also grant to [NAME] the\n      right to sub-license these\n      rights, and the right to bring an action for infringement of these rights.</p>\n\n    <p>Your user content must not be illegal or unlawful, must not infringe any third party's legal rights, and must\n      not be capable of giving rise to legal action whether against you or [NAME] or a third party (in each case under\n      any applicable law).</p>\n\n    <p>You must not submit any user content to the website that is or has ever been the subject of any threatened or\n      actual legal proceedings or other similar complaint.</p>\n\n    <p>[NAME] reserves the right to edit or remove any material submitted to this website, or stored on [NAME'S]\n      servers, or hosted or published upon this website.</p>\n\n    <p>[Notwithstanding [NAME'S] rights under these terms and conditions in relation to user content, [NAME] does not\n      undertake to monitor the submission of such content to, or the publication of such content on, this website.]</p>\n\n    <h2>No warranties</h2>\n\n    <p>This website is provided “as is” without any representations or warranties, express or implied. [NAME] makes no\n      representations or warranties in relation to this website or the information and materials provided on this\n      website.</p>\n\n    <p>Without prejudice to the generality of the foregoing paragraph, [NAME] does not warrant that:</p>\n    <ul>\n      <li>this website will be constantly available, or available at all; or</li>\n      <li>the information on this website is complete, true, accurate or non-misleading.</li>\n    </ul>\n    <p>Nothing on this website constitutes, or is meant to constitute, advice of any kind. [If you require advice in\n      relation to any [legal, financial or medical] matter you should consult an appropriate professional.]</p>\n\n    <h2>Limitations of liability</h2>\n\n    <p>[NAME] will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation\n      to the contents of, or use of, or otherwise in connection with, this website:</p>\n    <ul>\n      <li>[to the extent that the website is provided free-of-charge, for any direct loss;]</li>\n      <li>for any indirect, special or consequential loss; or</li>\n      <li>for any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or\n        business relationships, loss of reputation or goodwill, or loss or corruption of information or data.</li>\n    </ul>\n    <p>These limitations of liability apply even if [NAME] has been expressly advised of the potential loss.</p>\n\n    <h2>Exceptions</h2>\n\n    <p>Nothing in this website disclaimer will exclude or limit any warranty implied by law that it would be unlawful\n      to exclude or limit; and nothing in this website disclaimer will exclude or limit [NAME'S] liability in respect\n      of any:</p>\n    <ul>\n      <li>death or personal injury caused by [NAME'S] negligence;</li>\n      <li>fraud or fraudulent misrepresentation on the part of [NAME]; or</li>\n      <li>matter which it would be illegal or unlawful for [NAME] to exclude or limit, or to attempt or purport to\n        exclude or limit, its liability.</li>\n    </ul>\n    <h2>Reasonableness</h2>\n\n    <p>By using this website, you agree that the exclusions and limitations of liability set out in this website\n      disclaimer are reasonable.</p>\n\n    <p>If you do not think they are reasonable, you must not use this website.</p>\n\n    <h2>Other parties</h2>\n\n    <p>[You accept that, as a limited liability entity, [NAME] has an interest in limiting the personal liability of\n      its officers and employees. You agree that you will not bring any claim personally against [NAME'S] officers or\n      employees in respect of any\n      losses you suffer in connection with the website.]</p>\n\n    <p>[Without prejudice to the foregoing paragraph,] you agree that the limitations of warranties and liability set\n      out in this website disclaimer will protect [NAME'S] officers, employees, agents, subsidiaries, successors,\n      assigns and sub-contractors\n      as well as [NAME].</p>\n\n    <h2>Unenforceable provisions</h2>\n\n    <p>If any provision of this website disclaimer is, or is found to be, unenforceable under applicable law, that will\n      not affect the enforceability of the other provisions of this website disclaimer.</p>\n\n    <h2>Indemnity</h2>\n\n    <p>You hereby indemnify [NAME] and undertake to keep [NAME] indemnified against any losses, damages, costs,\n      liabilities and expenses (including without limitation legal expenses and any amounts paid by [NAME] to a third\n      party in settlement of a claim\n      or dispute on the advice of [NAME'S] legal advisers) incurred or suffered by [NAME] arising out of any breach by\n      you of any provision of these terms and conditions[, or arising out of any claim that you have breached any\n      provision of these terms\n      and conditions].</p>\n\n    <h2>Breaches of these terms and conditions</h2>\n\n    <p>Without prejudice to [NAME'S] other rights under these terms and conditions, if you breach these terms and\n      conditions in any way, [NAME] may take such action as [NAME] deems appropriate to deal with the breach, including\n      suspending your access to\n      the website, prohibiting you from accessing the website, blocking computers using your IP address from accessing\n      the website, contacting your internet service provider to request that they block your access to the website\n      and/or bringing court proceedings\n      against you.</p>\n\n    <h2>Variation</h2>\n\n    <p>[NAME] may revise these terms and conditions from time-to-time. Revised terms and conditions will apply to the\n      use of this website from the date of the publication of the revised terms and conditions on this website. Please\n      check this page regularly\n      to ensure you are familiar with the current version.</p>\n\n    <h2>Assignment</h2>\n\n    <p>[NAME] may transfer, sub-contract or otherwise deal with [NAME'S] rights and/or obligations under these terms\n      and conditions without notifying you or obtaining your consent.</p>\n\n    <p>You may not transfer, sub-contract or otherwise deal with your rights and/or obligations under these terms and\n      conditions.</p>\n\n    <h2>Severability</h2>\n\n    <p>If a provision of these terms and conditions is determined by any court or other competent authority to be\n      unlawful and/or unenforceable, the other provisions will continue in effect. If any unlawful and/or unenforceable\n      provision would be lawful\n      or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision\n      will continue in effect.</p>\n\n    <h2>Entire agreement</h2>\n\n    <p>These terms and conditions [, together with [DOCUMENTS],] constitute the entire agreement between you and [NAME]\n      in relation to your use of this website, and supersede all previous agreements in respect of your use of this\n      website.</p>\n\n    <h2>Law and jurisdiction</h2>\n\n    <p>These terms and conditions will be governed by and construed in accordance with [GOVERNING LAW], and any\n      disputes relating to these terms and conditions will be subject to the [non-]exclusive jurisdiction of the courts\n      of [JURISDICTION].</p>\n\n    <h2>About these website terms and conditions</h2>\n    <p>We created these website terms and conditions with the help of a free website terms and conditions form\n      developed by Contractology and available at\n      <a href=\"http://www.Maras.co\">www.maras.co</a>. Contractology supply a wide variety of commercial legal\n      documents, such as\n      <a href=\"#\">template data protection statements</a>.\n    </p>\n    <h2>[Registrations and authorisations</h2>\n\n    <p>[[NAME] is registered with [TRADE REGISTER]. You can find the online version of the register at [URL]. [NAME'S]\n      registration number is [NUMBER].]</p>\n\n    <p>[[NAME] is subject to [AUTHORISATION SCHEME], which is supervised by [SUPERVISORY AUTHORITY].]</p>\n\n    <p>[[NAME] is registered with [PROFESSIONAL BODY]. [NAME'S] professional title is [TITLE] and it has been granted\n      in [JURISDICTION]. [NAME] is subject to the [RULES] which can be found at [URL].]</p>\n\n    <p>[[NAME] subscribes to the following code[s] of conduct: [CODE(S) OF CONDUCT]. [These codes/this code] can be\n      consulted electronically at [URL(S)].</p>\n\n    <p>[[NAME'S] [TAX] number is [NUMBER].]]</p>\n\n    <h2>[NAME'S] details</h2>\n\n    <p>The full name of [NAME] is [FULL NAME].</p>\n\n    <p>[[NAME] is registered in [JURISDICTION] under registration number [NUMBER].]</p>\n\n    <p>[NAME'S] [registered] address is [ADDRESS].</p>\n\n    <p>You can contact [NAME] by email to [EMAIL].</p>\n\n\n\n  </div>\n\n  <br>\n  <br>\n\n  <p><strong>\n      By using this WEBSITE TERMS AND CONDITIONS template document, you agree to the\n      <a href=\"https://www.maras.co\">terms and conditions</a> set out on\n      <a href=\"https://www.maras.co\">Maras.co</a>. You must retain the credit\n      set out in the section headed \"ABOUT THESE WEBSITE TERMS AND CONDITIONS\". Subject to the licensing restrictions,\n      you should\n      edit the document, adapting it to the requirements of your jurisdiction, your business and your\n      website. If you are not a lawyer, we recommend that you take professional legal advice in relation to the editing\n      and\n      use of the template.\n    </strong></p>\n\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"close.emit(true)\">\n    Cancel\n  </button>\n  <button type=\"button\" class=\"btn btn-primary\" id=\"i-agree\" (click)=\"agree.emit(true)\">\n    <i class=\"fa fa-check\"></i> I Agree\n  </button>\n\n  <!-- <button type=\"button\" class=\"btn btn-danger pull-left\" id=\"print\">\n    <i class=\"fa fa-print\"></i> Print\n  </button> -->\n</div>"

/***/ }),

/***/ "./src/app/features/marasco/features/auth/register/terms-modal/terms-modal.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/marasco/features/auth/register/terms-modal/terms-modal.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: TermsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsModalComponent", function() { return TermsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsModalComponent = /** @class */ (function () {
    function TermsModalComponent() {
        this.agree = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TermsModalComponent.prototype, "agree", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TermsModalComponent.prototype, "close", void 0);
    TermsModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'smart-terms-modal',
            template: __webpack_require__(/*! ./terms-modal.component.html */ "./src/app/features/marasco/features/auth/register/terms-modal/terms-modal.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TermsModalComponent);
    return TermsModalComponent;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map