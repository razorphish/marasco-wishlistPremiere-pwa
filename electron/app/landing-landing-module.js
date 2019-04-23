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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/features/marasco/core/store/auth */ "./src/app/features/marasco/core/store/auth/index.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _app_features_marasco_core_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/features/marasco/core/services */ "./src/app/features/marasco/core/services/index.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _app_features_marasco_shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/features/marasco/shared/activitylog.subject-service */ "./src/app/features/marasco/shared/activitylog.subject-service.ts");
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











var Device = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Device;
var LandingComponent = /** @class */ (function () {
    function LandingComponent(_store, _router, _swPush, _activityLogService, _userService) {
        this._store = _store;
        this._router = _router;
        this._swPush = _swPush;
        this._activityLogService = _activityLogService;
        this._userService = _userService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    LandingComponent.prototype.addNotification = function (uuid) {
        var _this = this;
        this._swPush
            .requestSubscription({
            serverPublicKey: _env_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].serviceWorkerOptions.vap.publicKey
        })
            .then(function (pushSubscription) {
            // Save to
            //console.log(pushSubscription.toJSON());
            var notification = Object.assign(pushSubscription.toJSON());
            notification.uuid = uuid;
            notification.userId = _this.user._id;
            _this.user.notifications.push(notification);
            _this._userService
                .addNotification(_this.user._id, _this.user.notifications)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.unsubscribe$))
                .subscribe(function (item) {
                if (item) {
                    //TODO: Add update to user store HERE
                    //this._store.dispatch(new actions.AuthUserChange(this.user));
                }
                else {
                    //Do Nothing
                }
            }, function (err) {
                _this._activityLogService.addError(err);
            }, function () {
                // Clean up
            });
        })
            .catch(function (error) {
            // Do Nothing
        });
    };
    LandingComponent.prototype.createEvent = function ($event) {
        this._router.navigate(['/wishlistPremiere/wishlists/details/0']);
    };
    LandingComponent.prototype.initDevice = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                Device.getInfo()
                    .then(function (result) {
                    var device = {
                        uuid: result.uuid,
                        diskFree: result.diskFree,
                        osVersion: result.osVersion,
                        memUsed: result.memUsed,
                        batteryLevel: result.batteryLevel,
                        model: result.model,
                        platform: result.platform,
                        manufacturer: result.manufacturer,
                        isVirtual: result.isVirtual,
                        mode: result.model,
                        appVersion: result.appVersion
                    };
                    _this.addDevice(device);
                    _this.addNotification(device.uuid);
                })
                    .catch(function (error) {
                    //For now do not disrupt user experience
                });
                return [2 /*return*/];
            });
        });
    };
    LandingComponent.prototype.addDevice = function (deviceInfo) {
        var _this = this;
        var device = this.user.devices.find(function (result) {
            return result.uuid === deviceInfo.uuid;
        });
        if (!!device) {
            return;
        }
        this.user.devices.push(deviceInfo);
        this._userService
            .addDevice(this.user._id, this.user.devices)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (item) {
            if (item) {
                // let userSource = new UserInfo(item);
                // this._store.dispatch(new actions.AuthUserChange(userSource));
            }
            else {
                //Do Nothing
            }
        }, function (err) {
            _this._activityLogService.addError(err);
        }, function () {
            // Clean up
        });
    };
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentState = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_5__["getUser"]));
        currentState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (data) {
            _this.isLoggedIn = !!data;
            if (!!data) {
                _this.user = data.user;
                _this.initDevice();
            }
        });
    };
    LandingComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sa-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/features/marasco/features/home/landing/landing.component.html")
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["SwPush"],
            _app_features_marasco_shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_10__["ActivityLogSubjectService"],
            _app_features_marasco_core_services__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
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
//# sourceMappingURL=landing-landing-module.js.map