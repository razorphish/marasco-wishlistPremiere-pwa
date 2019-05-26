(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-profile-profile-module"],{

/***/ "./src/app/features/marasco/features/profile/profile.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/marasco/features/profile/profile.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.routing */ "./src/app/features/marasco/features/profile/profile.routing.ts");
/* harmony import */ var _app_features_marasco_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/features/marasco/shared/shared.module */ "./src/app/features/marasco/shared/shared.module.ts");
/* harmony import */ var _shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/activitylog.subject-service */ "./src/app/features/marasco/shared/activitylog.subject-service.ts");
/* harmony import */ var _wishlistPremiere_wishlists_shared_settings_settings_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wishlistPremiere/wishlists/shared/settings/settings.module */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/shared/settings/settings.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_wishlistPremiere_wishlists_shared_settings_settings_module__WEBPACK_IMPORTED_MODULE_4__["SettingsModule"], _app_features_marasco_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _profile_routing__WEBPACK_IMPORTED_MODULE_1__["routing"]],
            declarations: [],
            providers: [_shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_3__["ActivityLogSubjectService"]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/profile/profile.routing.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/marasco/features/profile/profile.routing.ts ***!
  \**********************************************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    {
        path: '', redirectTo: 'profile', pathMatch: 'full'
    },
    {
        path: 'profile',
        loadChildren: './user/user-profile.module#UserProfileModule',
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=features-profile-profile-module.js.map