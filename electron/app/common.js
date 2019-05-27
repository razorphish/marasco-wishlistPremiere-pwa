(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/features/marasco/features/auth/reset/reset.guard.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/marasco/features/auth/reset/reset.guard.ts ***!
  \*********************************************************************/
/*! exports provided: ResetGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetGuard", function() { return ResetGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./src/app/features/marasco/core/services/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_features_marasco_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/features/marasco/core/services/notification.service */ "./src/app/features/marasco/core/services/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ResetGuard = /** @class */ (function () {
    function ResetGuard(_authService, _router, _notificationService) {
        this._authService = _authService;
        this._router = _router;
        this._notificationService = _notificationService;
        this.loginUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].loginUrl;
    }
    ResetGuard.prototype.canActivate = function (route) {
        var _this = this;
        var token = route.params.token;
        return this._authService
            .resetPasswordRequest(token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            if (!result.status) {
                return false;
            }
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error, caught) {
            _this.notify('Password Reset Expired', 'Your password reset is invalid or has expired.  Please reset your password again', 30001);
            _this._router.navigate([_this.loginUrl]);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }));
    };
    ResetGuard.prototype.notify = function (title, content, number, isMessage) {
        var color = isMessage ? '#739E73' : '#C46A69';
        var icon = isMessage ? 'fa fa-check' : 'fa fa-warning shake animated';
        this._notificationService.bigBox({
            title: title,
            content: content,
            color: color,
            icon: icon,
            number: number || '1',
            timeout: 8000
        });
    };
    ResetGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_features_marasco_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
    ], ResetGuard);
    return ResetGuard;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/shared/settings/settings.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/shared/settings/settings.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sparks li {\n  padding: 5px 10px 0 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbWFyYXNjby9mZWF0dXJlcy93aXNobGlzdFByZW1pZXJlL3dpc2hsaXN0cy9zaGFyZWQvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtDQUMxQiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL21hcmFzY28vZmVhdHVyZXMvd2lzaGxpc3RQcmVtaWVyZS93aXNobGlzdHMvc2hhcmVkL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3BhcmtzIGxpIHtcbiAgcGFkZGluZzogNXB4IDEwcHggMCAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/shared/settings/settings.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/shared/settings/settings.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-8\" saSparklineContainer>\n  <ul id=\"sparks\" class=\"\">\n    <li class=\"sparks-info\">\n      <h5>\n        Total\n        <span class=\"txt-color-blue\">{{\n          calculateTotal(wishlist) | currency\n        }}</span>\n      </h5>\n    </li>\n    <li class=\"sparks-info\">\n      <h5>\n        Items\n        <span class=\"txt-color-purple\"\n          ><i class=\"fa fa-gift\"></i>&nbsp;{{ wishlist.items.length }}</span\n        >\n      </h5>\n    </li>\n    <li class=\"sparks-info\">\n      <h5>\n        Purchased\n        <span class=\"txt-color-greenDark\"\n          ><i class=\"fa fa-shopping-cart\"></i>&nbsp;{{\n            calculateTotalPurchased(wishlist)\n          }}</span\n        >\n      </h5>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/shared/settings/settings.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/shared/settings/settings.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
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

var SettingsComponent = /** @class */ (function () {
    // private _wishlist: Wishlist;
    //   @Input() set wishlist(value: Wishlist) {
    //      this._wishlist = value;
    //      //this.doSomething(this._categoryId);
    //   }
    //   get wishlist(): Wishlist {
    //       return this._wishlist;
    //   }
    //////////////END Input variables////////////////////
    //////////////////Private variables//////////////////
    //////////////END Private variables//////////////////
    //////////////////Publicly exposed variables////////
    //////////////END Publicly exposed variables////////
    function SettingsComponent() {
    }
    SettingsComponent.prototype.calculateTotal = function (wishlist) {
        var total = 0;
        if (!wishlist.items) {
            return 0;
        }
        wishlist.items.forEach(function (item) {
            if (!!item.price) {
                total += item.price;
            }
        });
        return total;
    };
    SettingsComponent.prototype.calculateTotalPurchased = function (wishlist) {
        var increment = 0;
        wishlist.items.forEach(function (item) {
            if (!!item.purchased && item.purchased) {
                increment++;
            }
        });
        return increment;
    };
    SettingsComponent.prototype.init = function (wishlist) { };
    SettingsComponent.prototype.ngOnInit = function () { };
    SettingsComponent.prototype.ngOnChanges = function (changes) { };
    SettingsComponent.prototype.ngOnDestroy = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SettingsComponent.prototype, "wishlist", void 0);
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wp-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/shared/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/shared/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/shared/settings/settings.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/shared/settings/settings.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.component */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/shared/settings/settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"]],
            exports: [_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"]]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map