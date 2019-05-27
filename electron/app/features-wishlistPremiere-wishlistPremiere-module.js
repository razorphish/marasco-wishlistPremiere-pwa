(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-wishlistPremiere-wishlistPremiere-module"],{

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlistPremiere-routing.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlistPremiere-routing.ts ***!
  \****************************************************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        redirectTo: 'wishlists',
        pathMatch: 'full'
    },
    {
        path: 'wishlists',
        loadChildren: './wishlists/wishlists.module#WishlistsModule',
        data: { pageTitle: 'Wishlist' }
    }
];
var routing = /** @class */ (function () {
    function routing() {
    }
    routing = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], routing);
    return routing;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlistPremiere.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlistPremiere.module.ts ***!
  \***************************************************************************************/
/*! exports provided: WishlistPremiereModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPremiereModule", function() { return WishlistPremiereModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wishlistPremiere_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wishlistPremiere-routing */ "./src/app/features/marasco/features/wishlistPremiere/wishlistPremiere-routing.ts");
/* harmony import */ var _app_features_marasco_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/features/marasco/shared/shared.module */ "./src/app/features/marasco/shared/shared.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/activitylog.subject-service */ "./src/app/features/marasco/shared/activitylog.subject-service.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//https://www.npmjs.com/package/ng-multiselect-dropdown

var WishlistPremiereModule = /** @class */ (function () {
    function WishlistPremiereModule() {
    }
    WishlistPremiereModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_features_marasco_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _wishlistPremiere_routing__WEBPACK_IMPORTED_MODULE_1__["routing"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["NgMultiSelectDropDownModule"].forRoot()
            ],
            providers: [
                _shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_4__["ActivityLogSubjectService"]
            ]
        })
    ], WishlistPremiereModule);
    return WishlistPremiereModule;
}());



/***/ })

}]);
//# sourceMappingURL=features-wishlistPremiere-wishlistPremiere-module.js.map