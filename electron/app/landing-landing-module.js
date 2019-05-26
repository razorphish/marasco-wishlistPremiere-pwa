(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"],{

/***/ "./src/app/features/marasco/features/home/landing/landing-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/features/marasco/features/home/landing/landing-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: LandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function() { return LandingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing.component */ "./src/app/features/marasco/features/home/landing/landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"],
        data: { pageTitle: 'Welcome' }
    }
];
var LandingRoutingModule = /** @class */ (function () {
    function LandingRoutingModule() {
    }
    LandingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], LandingRoutingModule);
    return LandingRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/home/landing/landing.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/features/marasco/features/home/landing/landing.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs\n      [items]=\"['Home', '']\"\n      icon=\"home\"\n      class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"\n    ></sa-big-breadcrumbs>\n  </div>\n\n  <sa-widgets-grid>\n    <div class=\"row\">\n      <article class=\"col-sm-12\"></article>\n    </div>\n\n    <div class=\"row\">\n      <article class=\"col-sm-12 col-md-12 col-lg-12\">\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div\n          sa-widget\n          class=\"well\"\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [custombutton]=\"false\"\n          [sortable]=\"false\"\n        >\n          <!-- widget options:\n                    usage: <div sa-widget [editbutton]=\"false\">\n          \n                    [colorbutton]=\"false\"\n                    [editbutton]=\"false\"\n                    [togglebutton]=\"false\"\n                    [deletebutton]=\"false\"\n                    [fullscreenbutton]=\"false\"\n                    [custombutton]=\"false\"\n                    [collapsed]=\"true\"\n                    [sortable]=\"false\"\n          \n                    -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-hand-o-up\"></i> </span>\n            <h2>Create your wishlists Fast and Easy</h2>\n          </header>\n\n          <!-- widget div-->\n          <div>\n            <!-- widget content -->\n            <div class=\"widget-body\">\n              <h1>Create your wishlists Fast and Easy!!!</h1>\n              <p>\n                See how aspects of the Bootstrap button system look and feel\n                like at a glance.\n              </p>\n\n              <button\n                class=\"btn btn-primary btn-block btn-lg\"\n                (click)=\"createEvent($event)\"\n              >\n                Create your Wishlist\n              </button>\n            </div>\n            <!-- end widget content -->\n          </div>\n          <!-- end widget div -->\n        </div>\n        <!-- end widget -->\n      </article>\n\n      <article class=\"col-sm-12 col-md-12 col-lg-6\"></article>\n    </div>\n  </sa-widgets-grid>\n</div>\n"

/***/ }),

/***/ "./src/app/features/marasco/features/home/landing/landing.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/marasco/features/home/landing/landing.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = /** @class */ (function () {
    function LandingComponent(_router) {
        this._router = _router;
    }
    LandingComponent.prototype.createEvent = function ($event) {
        this._router.navigate(['/wishlistPremiere/wishlists/details/0']);
    };
    LandingComponent.prototype.ngOnInit = function () { };
    LandingComponent.prototype.ngOnDestroy = function () { };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/features/marasco/features/home/landing/landing.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/home/landing/landing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/marasco/features/home/landing/landing.module.ts ***!
  \**************************************************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_features_marasco_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/features/marasco/shared/shared.module */ "./src/app/features/marasco/shared/shared.module.ts");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-routing.module */ "./src/app/features/marasco/features/home/landing/landing-routing.module.ts");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing.component */ "./src/app/features/marasco/features/home/landing/landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LandingModule = /** @class */ (function () {
    function LandingModule() {
    }
    LandingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_app_features_marasco_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__["LandingRoutingModule"]],
            declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]],
            providers: []
        })
    ], LandingModule);
    return LandingModule;
}());



/***/ })

}]);
//# sourceMappingURL=landing-landing-module.js.map