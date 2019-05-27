(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-home-home-module"],{

/***/ "./src/app/features/marasco/features/home/home.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/marasco/features/home/home.module.ts ***!
  \***************************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.routing */ "./src/app/features/marasco/features/home/home.routing.ts");
/* harmony import */ var _app_features_marasco_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/features/marasco/shared/shared.module */ "./src/app/features/marasco/shared/shared.module.ts");
/* harmony import */ var _shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/activitylog.subject-service */ "./src/app/features/marasco/shared/activitylog.subject-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_app_features_marasco_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _home_routing__WEBPACK_IMPORTED_MODULE_1__["routing"]],
            declarations: [],
            providers: [
                _shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_3__["ActivityLogSubjectService"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/home/home.routing.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/marasco/features/home/home.routing.ts ***!
  \****************************************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    {
        path: '', redirectTo: 'landing', pathMatch: 'full'
    },
    {
        path: 'landing',
        loadChildren: './landing/landing.module#LandingModule',
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=features-home-home-module.js.map