(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-profile-module"],{

/***/ "./src/app/features/marasco/features/profile/user/edit-modal/edit-modal.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/features/marasco/features/profile/user/edit-modal/edit-modal.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL21hcmFzY28vZmVhdHVyZXMvcHJvZmlsZS91c2VyL2VkaXQtbW9kYWwvZWRpdC1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/marasco/features/profile/user/edit-modal/edit-modal.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/marasco/features/profile/user/edit-modal/edit-modal.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <button\n    type=\"button\"\n    class=\"close\"\n    data-dismiss=\"modal\"\n    aria-hidden=\"true\"\n    (click)=\"close.emit(true)\"\n  >\n    &times;\n  </button>\n  <h4 class=\"modal-title\" id=\"myModalLabel\">Edit Profile</h4>\n</div>\n\n<div class=\"modal-body custom-scroll\">\n  <form\n    id=\"form-wishlist-options\"\n    class=\"smart-form\"\n    [saUiValidate]=\"validationOptions\"\n    novalidate=\"novalidate\"\n  >\n    <fieldset>\n      <div class=\"row\">\n        <section class=\"col col-md-12 col-lg-12 col-sm-12\">\n          <label class=\"input\">\n            <input\n              type=\"text\"\n              id=\"firstName\"\n              name=\"firstName\"\n              placeholder=\"First Name\"\n              class=\"input-lg\"\n              [ngModel]=\"user.firstName\"\n            />\n            <b class=\"tooltip tooltip-bottom-right\">First name of User</b>\n          </label>\n        </section>\n      </div>\n      <div class=\"row\">\n        <section class=\"col col-md-12 col-lg-12 col-sm-12\">\n          <label class=\"input\">\n            <input\n              type=\"text\"\n              id=\"lastName\"\n              name=\"lastName\"\n              placeholder=\"Last Name\"\n              class=\"input-lg\"\n              [ngModel]=\"user.lastName\"\n            />\n            <b class=\"tooltip tooltip-bottom-right\">First name of User</b>\n          </label>\n        </section>\n      </div>\n      <div class=\"row\">\n        <section class=\"col col-md-12 col-lg-12 col-sm-12\">\n          <label class=\"input\">\n            <i class=\"icon-append fa fa-lock\"></i>\n            <input\n              type=\"password\"\n              id=\"password\"\n              name=\"password\"\n              placeholder=\"Password\"\n              autocomplete=\"new-password\"\n              class=\"input-lg\"\n            />\n            <b class=\"tooltip tooltip-bottom-right\"\n              >Don't forget your password!</b\n            >\n          </label>\n        </section>\n      </div>\n      <div class=\"row\">\n        <section class=\"col col-md-12 col-lg-12 col-sm-12\">\n          <label class=\"input\">\n            <i class=\"icon-append fa fa-lock\"></i>\n            <input\n              type=\"password\"\n              id=\"passwordConfirm\"\n              name=\"passwordConfirm\"\n              placeholder=\"Confirm password\"\n              autocomplete=\"new-password\"\n              class=\"input-lg\"\n            />\n            <b class=\"tooltip tooltip-bottom-right\"\n              >Don't forget your password</b\n            >\n          </label>\n        </section>\n      </div>\n    </fieldset>\n\n    <fieldset>\n      <div class=\"row\">\n        <section class=\"col col-12\" style=\"float: right\">\n          <button\n            type=\"button\"\n            class=\"btn btn-default btn-lg\"\n            (click)=\"close.emit(true)\"\n          >\n            Close\n          </button>\n          &nbsp;\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary btn-lg\"\n            id=\"save-user\"\n          >\n            <i class=\"fa fa-check\"></i> Save\n          </button>\n        </section>\n      </div>\n    </fieldset>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/features/marasco/features/profile/user/edit-modal/edit-modal.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/marasco/features/profile/user/edit-modal/edit-modal.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: UserProfileEditModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileEditModalComponent", function() { return UserProfileEditModalComponent; });
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/notification.service */ "./src/app/features/marasco/core/services/notification.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_features_marasco_shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/features/marasco/shared/activitylog.subject-service */ "./src/app/features/marasco/shared/activitylog.subject-service.ts");
/* harmony import */ var _app_features_marasco_core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/features/marasco/core/services */ "./src/app/features/marasco/core/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserProfileEditModalComponent = /** @class */ (function () {
    function UserProfileEditModalComponent(_notificationService, _activityLogService, _userService, _modalService) {
        this._notificationService = _notificationService;
        this._activityLogService = _activityLogService;
        this._userService = _userService;
        this._modalService = _modalService;
        this.options = {
            mode: 'popup',
            disabled: false,
            inline: true
        };
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**============Privately exposed properties ========= */
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        var initialState = this._modalService.config.initialState;
        this.user = initialState.user;
    }
    UserProfileEditModalComponent.prototype.ngOnInit = function () {
        this.validationOptions = {
            // Rules for form validation
            user: this.user,
            rules: {
                firstName: {
                    required: true
                },
                lastName: {
                    required: true
                },
                password: {
                    minlength: 6,
                    maxlength: 20
                },
                passwordConfirm: {
                    equalTo: '#password'
                }
            },
            // Messages for form validation
            messages: {
                firstName: {
                    required: 'Please enter your First Name'
                },
                lastName: {
                    required: 'Please enter your Last Name'
                },
                password: {
                    required: 'Please enter your password'
                },
                passwordConfirm: {
                    required: 'Please enter your password one more time',
                    equalTo: 'Please enter the same password as above'
                }
            },
            userService: this._userService,
            activityLogService: this._activityLogService,
            notificationService: this._notificationService,
            close: this.close,
            unsub: this.unsubscribe$,
            submitHandler: this.saveUser
        };
    };
    /**
     *Saves the current user profile
     *
     * @param {*} $event
     * @memberof UserProfileEditModalComponent
     */
    UserProfileEditModalComponent.prototype.saveUser = function ($event) {
        var _this = this;
        var user = this['settings'].user;
        var model = {
            _id: user._id,
            firstName: $event.elements.firstName.value,
            lastName: $event.elements.lastName.value,
            password: $event.elements.password.value,
            passwordConfirm: $event.elements.passwordConfirm.value,
            email: user.email
        };
        this['settings'].userService
            .update(model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this['settings'].unsub))
            .subscribe(function (item) {
            if (item) {
                _this['settings'].activityLogService.addUpdate("User Profile updated [" + item._id + "] [" + item.firstName + " " + item.lastName + "]");
                _this['settings'].notificationService.smallBox({
                    title: 'Update Success!',
                    content: 'Your profile has been successfully updated! ',
                    color: '#739E73',
                    timeout: 2000,
                    icon: 'fa fa-check',
                    number: '4',
                    sound: false
                });
                _this['settings'].close.emit(true);
            }
            else {
                _this['settings'].activityLogService.addError('Profile: Update Failed');
                _this['settings'].notificationService.bigBox({
                    title: 'Oops! the database has returned an error',
                    content: 'Your profile has not been updated',
                    color: '#C46A69',
                    icon: 'fa fa-warning shake animated',
                    number: '1',
                    timeout: 3000,
                    sound: false
                });
            }
        }, function (err) {
            _this['settings'].activityLogService.addError(err);
            _this['settings'].notificationService.bigBox({
                title: 'Oops!  there is an issue with the call to update',
                content: err,
                color: '#C46A69',
                icon: 'fa fa-warning shake animated',
                number: '1',
                timeout: 3000,
                sound: false
            });
        }, function () {
            // Clean up
        });
    };
    UserProfileEditModalComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], UserProfileEditModalComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], UserProfileEditModalComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], UserProfileEditModalComponent.prototype, "save", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], UserProfileEditModalComponent.prototype, "close", void 0);
    UserProfileEditModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-profile-edit-modal',
            template: __webpack_require__(/*! ./edit-modal.component.html */ "./src/app/features/marasco/features/profile/user/edit-modal/edit-modal.component.html"),
            styles: [__webpack_require__(/*! ./edit-modal.component.css */ "./src/app/features/marasco/features/profile/user/edit-modal/edit-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_notification_service__WEBPACK_IMPORTED_MODULE_0__["NotificationService"],
            _app_features_marasco_shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_4__["ActivityLogSubjectService"],
            _app_features_marasco_core_services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], UserProfileEditModalComponent);
    return UserProfileEditModalComponent;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/profile/user/user-profile-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/features/marasco/features/profile/user/user-profile-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: UserProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileRoutingModule", function() { return UserProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile.component */ "./src/app/features/marasco/features/profile/user/user-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"],
        data: { pageTitle: 'User Profile' }
    }
];
var UserProfileRoutingModule = /** @class */ (function () {
    function UserProfileRoutingModule() {
    }
    UserProfileRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], UserProfileRoutingModule);
    return UserProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/profile/user/user-profile.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/features/marasco/features/profile/user/user-profile.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs\n      [items]=\"['Home', 'Profile']\"\n      icon=\"group\"\n      class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"\n    ></sa-big-breadcrumbs>\n  </div>\n  <!-- end row -->\n  <!-- row -->\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"well well-sm\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-12 col-lg-12\">\n            <div class=\"well well-light well-sm no-margin no-padding\">\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-3 profile-pic\">\n                      <img\n                        src=\"assets/img/avatars/sunny-big.png\"\n                        alt=\"demo user\"\n                      />\n\n                      <div class=\"padding-10\">\n                        <h4 class=\"font-md\">\n                          <strong>{{ wishlists.length }}</strong>\n                          <br />\n                          <small>Wishlists</small>\n                        </h4>\n                        <br />\n                      </div>\n                    </div>\n                    <div class=\"col-sm-9\">\n                      <h1>\n                        {{ user.firstName }}\n                        <span class=\"semi-bold\">{{ user.lastName }}</span>\n                        <br />\n                        <small> User</small>\n                        <small><a href=\"#\" (click)=\"\n                          openModal($event, userProfileEditModal, user)\"> [edit]</a></small>\n                      </h1>\n                      <ul class=\"list-unstyled\">\n                        <li>\n                          <p class=\"text-muted\">\n                            <i class=\"fa fa-phone\"></i>&#xA0;&#xA0;<span\n                              class=\"txt-color-darken\"\n                              >{{ user.homePhone }}</span\n                            >\n                          </p>\n                        </li>\n                        <li>\n                          <p class=\"text-muted\">\n                            <i class=\"fa fa-envelope\"></i>&#xA0;&#xA0;<a\n                              href=\"mailto:{{ user.email }}\"\n                              >{{ user.email }}</a\n                            >\n                          </p>\n                        </li>\n                        <li>\n                          <p class=\"text-muted\">\n                            <i class=\"fa fa-calendar\"></i>&#xA0;&#xA0;<span\n                              class=\"txt-color-darken\"\n                              >Joined\n                              {{ user.dateCreated | moment: 'LLL' }}</span\n                            >\n                          </p>\n                        </li>\n                      </ul>\n                      <br />\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <hr />\n                  <div class=\"padding-10\">\n                    <ul class=\"nav nav-tabs tabs-pull-right\">\n                      <li class=\"active\">\n                        <a href=\"#a1\" data-toggle=\"tab\">Wishlists</a>\n                      </li>\n                      <li>\n                        <a href=\"#a2\" data-toggle=\"tab\">Followers</a>\n                      </li>\n                      <li class=\"pull-left\">\n                        <span class=\"margin-top-10 display-inline\"\n                          ><i class=\"fa fa-rss text-success\"></i> Activity</span\n                        >\n                      </li>\n                    </ul>\n                    <div class=\"tab-content padding-top-10\">\n                      <div class=\"tab-pane fade in active\" id=\"a1\">\n                        <div class=\"row\">\n                          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                            <div *ngIf=\"wishlists.length === 0\">\n                              <button\n                                class=\"btn btn-primary btn-block btn-lg\"\n                                (click)=\"createEvent($event)\"\n                              >\n                                Create your First Wishlist!\n                              </button>\n                            </div>\n                          </div>\n\n                          <div\n                            *ngFor=\"let wishlist of wishlists; let i = index\"\n                          >\n                            <div class=\"col-xs-2 col-sm-1\">\n                              <time datetime=\"2014-09-20\" class=\"icon\">\n                                <strong>{{\n                                  wishlist.dateCreated | moment: 'MMM'\n                                }}</strong>\n                                <span>{{\n                                  wishlist.dateCreated | moment: 'DD'\n                                }}</span>\n                              </time>\n                            </div>\n                            <div class=\"col-xs-10 col-sm-11\">\n                              <h6 class=\"no-margin\">\n                                <a\n                                  routerLink=\"/wishlistPremiere/wishlists/details/{{\n                                    wishlist._id\n                                  }}\"\n                                  >{{ wishlist.name }}</a\n                                >\n                              </h6>\n\n                              <p>\n                                Status: {{ wishlist.statusId }}<br />\n                                Privacy: {{ wishlist.privacy }}\n                              </p>\n                            </div>\n                            <div class=\"col-sm-12\">\n                              <hr />\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"tab-pane fade\" id=\"a2\">\n                        <div class=\"alert alert-info fade in\">\n                          <button class=\"close\" data-dismiss=\"alert\">\n                            &#xD7;\n                          </button>\n                          <i class=\"fa-fw fa fa-info\"></i>\n                          <strong>Coming Soon! </strong>\n                        </div>\n                      </div>\n                      <!-- end tab -->\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- end row -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- end row -->\n</div>\n\n<ng-template #userProfileEditModal>\n  <user-profile-edit-modal\n    (user)=\"user\"\n    (save)=\"closeModal()\"\n    (close)=\"onModalClose()\"\n  ></user-profile-edit-modal>\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/features/marasco/features/profile/user/user-profile.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/features/marasco/features/profile/user/user-profile.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/features/marasco/core/store/auth */ "./src/app/features/marasco/core/store/auth/index.ts");
/* harmony import */ var _app_features_marasco_core_store_wishlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/features/marasco/core/store/wishlist */ "./src/app/features/marasco/core/store/wishlist/index.ts");
/* harmony import */ var _app_features_marasco_shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/features/marasco/shared/activitylog.subject-service */ "./src/app/features/marasco/shared/activitylog.subject-service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(_store, _activityLogService, _router, _modalService) {
        this._store = _store;
        this._activityLogService = _activityLogService;
        this._router = _router;
        this._modalService = _modalService;
        this.unsubscribeUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.unsubscribeWishlist$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    UserProfileComponent.prototype.closeModal = function () {
        this.bsModalRef.hide();
    };
    UserProfileComponent.prototype.createEvent = function ($event) {
        this._router.navigate(['/wishlistPremiere/wishlists/details/0']);
    };
    UserProfileComponent.prototype.edit = function () { };
    UserProfileComponent.prototype.onModalClose = function () {
        this.bsModalRef.hide();
    };
    UserProfileComponent.prototype.openModal = function (event, template, user) {
        var initialState = {
            user: user || {
                name: ''
            }
        };
        event.preventDefault();
        this.bsModalRef = this._modalService.show(template, { initialState: initialState });
    };
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentState = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_5__["getUser"]));
        var wishlistCurrentState = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_app_features_marasco_core_store_wishlist__WEBPACK_IMPORTED_MODULE_6__["getUserWishlists"]));
        currentState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribeUser$)).subscribe(function (data) {
            _this.isLoggedIn = !!data;
            if (!!data) {
                _this.user = data.user;
            }
        });
        wishlistCurrentState
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribeWishlist$))
            .subscribe(function (data) {
            if (!!data) {
                _this.wishlists = data;
            }
        });
    };
    UserProfileComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeUser$.next();
        this.unsubscribeWishlist$.next();
        this.unsubscribeUser$.complete();
        this.unsubscribeWishlist$.complete();
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/features/marasco/features/profile/user/user-profile.component.html")
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _app_features_marasco_shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_7__["ActivityLogSubjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/profile/user/user-profile.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/marasco/features/profile/user/user-profile.module.ts ***!
  \*******************************************************************************/
/*! exports provided: UserProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModule", function() { return UserProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_features_marasco_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/features/marasco/shared/shared.module */ "./src/app/features/marasco/shared/shared.module.ts");
/* harmony import */ var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile-routing.module */ "./src/app/features/marasco/features/profile/user/user-profile-routing.module.ts");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile.component */ "./src/app/features/marasco/features/profile/user/user-profile.component.ts");
/* harmony import */ var _edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-modal/edit-modal.component */ "./src/app/features/marasco/features/profile/user/edit-modal/edit-modal.component.ts");
/* harmony import */ var _app_features_marasco_shared_forms_validation_smartadmin_validation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/features/marasco/shared/forms/validation/smartadmin-validation.module */ "./src/app/features/marasco/shared/forms/validation/smartadmin-validation.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UserProfileModule = /** @class */ (function () {
    function UserProfileModule() {
    }
    UserProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_app_features_marasco_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserProfileRoutingModule"], _app_features_marasco_shared_forms_validation_smartadmin_validation_module__WEBPACK_IMPORTED_MODULE_5__["SmartadminValidationModule"],],
            declarations: [
                _user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"],
                _edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileEditModalComponent"]
            ],
            providers: []
        })
    ], UserProfileModule);
    return UserProfileModule;
}());



/***/ }),

/***/ "./src/app/features/marasco/shared/activitylog.subject-service.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/marasco/shared/activitylog.subject-service.ts ***!
  \************************************************************************/
/*! exports provided: ActivityLogSubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityLogSubjectService", function() { return ActivityLogSubjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivityLogSubjectService = /** @class */ (function () {
    function ActivityLogSubjectService() {
        this.store = {
            errors: [],
            updates: [],
            gets: [],
            inserts: [],
            lastUpdated: ''
        };
        this._activityLogName = 'activityLog';
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.activate();
    }
    ActivityLogSubjectService.prototype.activate = function () {
        var store = localStorage.getItem(this._activityLogName);
        if (store) {
            this.store = JSON.parse(store);
        }
        else {
            this.store.lastUpdated = moment__WEBPACK_IMPORTED_MODULE_2__();
            this.store.gets.push('Init Get');
            this.setActivityLog(this.store);
        }
        this.subject.next(this.store);
    };
    ActivityLogSubjectService.prototype.subscribe = function (next, error, complete) {
        this.subject.subscribe(next, error, complete);
    };
    ActivityLogSubjectService.prototype.addError = function (error) {
        this.store.errors.push(error);
        this.store.lastUpdated = moment__WEBPACK_IMPORTED_MODULE_2__();
        this.setActivityLog(this.store);
        this.subject.next(this.store);
    };
    ActivityLogSubjectService.prototype.addUpdate = function (updateMessage) {
        this.store.updates.push(updateMessage);
        this.store.lastUpdated = moment__WEBPACK_IMPORTED_MODULE_2__();
        this.setActivityLog(this.store);
        this.subject.next(this.store);
    };
    ActivityLogSubjectService.prototype.addGet = function (getMessage) {
        this.store.gets.push(getMessage);
        this.store.lastUpdated = moment__WEBPACK_IMPORTED_MODULE_2__();
        this.setActivityLog(this.store);
        this.subject.next(this.store);
    };
    ActivityLogSubjectService.prototype.addInserts = function (insertMessage) {
        this.store.inserts.push(insertMessage);
        this.store.lastUpdated = moment__WEBPACK_IMPORTED_MODULE_2__();
        this.setActivityLog(this.store);
        this.subject.next(this.store);
    };
    ActivityLogSubjectService.prototype.refresh = function () {
        this.store = {
            errors: [],
            updates: [],
            gets: [],
            inserts: [],
            lastUpdated: ''
        };
        this.setActivityLog(this.store);
        this.subject.next(this.store);
    };
    ActivityLogSubjectService.prototype.setActivityLog = function (store) {
        localStorage.setItem(this._activityLogName, JSON.stringify(store));
    };
    ActivityLogSubjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ActivityLogSubjectService);
    return ActivityLogSubjectService;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-profile-module.js.map