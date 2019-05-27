(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wishlists-wishlists-module"],{

/***/ "./node_modules/angular-sortablejs/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/angular-sortablejs/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./src/sortablejs.directive */ "./node_modules/angular-sortablejs/dist/src/sortablejs.directive.js"));
__export(__webpack_require__(/*! ./src/sortablejs.module */ "./node_modules/angular-sortablejs/dist/src/sortablejs.module.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-sortablejs/dist/src/globals.js":
/*!*************************************************************!*\
  !*** ./node_modules/angular-sortablejs/dist/src/globals.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
exports.GLOBALS = new core_1.InjectionToken('Global config for sortablejs');
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ "./node_modules/angular-sortablejs/dist/src/sortablejs-binding.js":
/*!************************************************************************!*\
  !*** ./node_modules/angular-sortablejs/dist/src/sortablejs-binding.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SortablejsBinding = (function () {
    function SortablejsBinding(target) {
        this.target = target;
    }
    SortablejsBinding.prototype.insert = function (index, item) {
        if (this.isFormArray) {
            this.target.insert(index, item);
        }
        else {
            this.target.splice(index, 0, item);
        }
    };
    SortablejsBinding.prototype.get = function (index) {
        return this.isFormArray ? this.target.at(index) : this.target[index];
    };
    SortablejsBinding.prototype.remove = function (index) {
        var item;
        if (this.isFormArray) {
            item = this.target.at(index);
            this.target.removeAt(index);
        }
        else {
            item = this.target.splice(index, 1)[0];
        }
        return item;
    };
    Object.defineProperty(SortablejsBinding.prototype, "isFormArray", {
        get: function () {
            return !!this.target.at && !!this.target.insert && !!this.target.reset;
        },
        enumerable: true,
        configurable: true
    });
    return SortablejsBinding;
}());
exports.SortablejsBinding = SortablejsBinding;
//# sourceMappingURL=sortablejs-binding.js.map

/***/ }),

/***/ "./node_modules/angular-sortablejs/dist/src/sortablejs-bindings.js":
/*!*************************************************************************!*\
  !*** ./node_modules/angular-sortablejs/dist/src/sortablejs-bindings.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sortablejs_binding_1 = __webpack_require__(/*! ./sortablejs-binding */ "./node_modules/angular-sortablejs/dist/src/sortablejs-binding.js");
var SortablejsBindings = (function () {
    function SortablejsBindings(bindingTargets) {
        this.bindings = bindingTargets.map(function (target) { return new sortablejs_binding_1.SortablejsBinding(target); });
    }
    SortablejsBindings.prototype.injectIntoEvery = function (index, items) {
        this.bindings.forEach(function (b, i) { return b.insert(index, items[i]); });
    };
    SortablejsBindings.prototype.getFromEvery = function (index) {
        return this.bindings.map(function (b) { return b.get(index); });
    };
    SortablejsBindings.prototype.extractFromEvery = function (index) {
        return this.bindings.map(function (b) { return b.remove(index); });
    };
    Object.defineProperty(SortablejsBindings.prototype, "provided", {
        get: function () {
            return !!this.bindings.length;
        },
        enumerable: true,
        configurable: true
    });
    return SortablejsBindings;
}());
exports.SortablejsBindings = SortablejsBindings;
//# sourceMappingURL=sortablejs-bindings.js.map

/***/ }),

/***/ "./node_modules/angular-sortablejs/dist/src/sortablejs.directive.js":
/*!**************************************************************************!*\
  !*** ./node_modules/angular-sortablejs/dist/src/sortablejs.directive.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var globals_1 = __webpack_require__(/*! ./globals */ "./node_modules/angular-sortablejs/dist/src/globals.js");
var sortablejs_bindings_1 = __webpack_require__(/*! ./sortablejs-bindings */ "./node_modules/angular-sortablejs/dist/src/sortablejs-bindings.js");
var sortablejs_service_1 = __webpack_require__(/*! ./sortablejs.service */ "./node_modules/angular-sortablejs/dist/src/sortablejs.service.js");
var OriginalSortable = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/Sortable.js");
var SortablejsDirective = (function () {
    function SortablejsDirective(globalConfig, service, element, zone, renderer) {
        this.globalConfig = globalConfig;
        this.service = service;
        this.element = element;
        this.zone = zone;
        this.renderer = renderer;
        this.runInsideAngular = false;
    }
    SortablejsDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.runInsideAngular) {
            this._sortable = OriginalSortable.create(this.element.nativeElement, this.options);
        }
        else {
            this.zone.runOutsideAngular(function () {
                _this._sortable = OriginalSortable.create(_this.element.nativeElement, _this.options);
            });
        }
    };
    SortablejsDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var optionsChange = changes['inputOptions'];
        if (optionsChange && !optionsChange.isFirstChange()) {
            var previousOptions_1 = optionsChange.previousValue;
            var currentOptions_1 = optionsChange.currentValue;
            Object.keys(currentOptions_1).forEach(function (optionName) {
                if (currentOptions_1[optionName] !== previousOptions_1[optionName]) {
                    _this._sortable.option(optionName, _this.options[optionName]);
                }
            });
        }
    };
    SortablejsDirective.prototype.ngOnDestroy = function () {
        if (this._sortable) {
            this._sortable.destroy();
        }
    };
    SortablejsDirective.prototype.getBindings = function () {
        if (!this.sortablejs) {
            return new sortablejs_bindings_1.SortablejsBindings([]);
        }
        else if (this.sortablejs instanceof sortablejs_bindings_1.SortablejsBindings) {
            return this.sortablejs;
        }
        else {
            return new sortablejs_bindings_1.SortablejsBindings([this.sortablejs]);
        }
    };
    Object.defineProperty(SortablejsDirective.prototype, "options", {
        get: function () {
            return __assign({}, this.optionsWithoutEvents, this.overridenOptions);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortablejsDirective.prototype, "optionsWithoutEvents", {
        get: function () {
            return __assign({}, (this.globalConfig || {}), (this.inputOptions || {}));
        },
        enumerable: true,
        configurable: true
    });
    SortablejsDirective.prototype.proxyEvent = function (eventName) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this.zone.run(function () {
            if (_this.optionsWithoutEvents && _this.optionsWithoutEvents[eventName]) {
                (_a = _this.optionsWithoutEvents)[eventName].apply(_a, params);
            }
            var _a;
        });
    };
    Object.defineProperty(SortablejsDirective.prototype, "isCloning", {
        get: function () {
            return this._sortable.options.group.checkPull(this._sortable, this._sortable) === 'clone';
        },
        enumerable: true,
        configurable: true
    });
    SortablejsDirective.prototype.clone = function (item) {
        return (this.inputCloneFunction || (function (_item) { return _item; }))(item);
    };
    Object.defineProperty(SortablejsDirective.prototype, "overridenOptions", {
        get: function () {
            var _this = this;
            return {
                onAdd: function (event) {
                    _this.service.transfer = function (items) {
                        _this.getBindings().injectIntoEvery(event.newIndex, items);
                        _this.proxyEvent('onAdd', event);
                    };
                    _this.proxyEvent('onAddOriginal', event);
                },
                onRemove: function (event) {
                    var bindings = _this.getBindings();
                    if (bindings.provided) {
                        if (_this.isCloning) {
                            _this.service.transfer(bindings.getFromEvery(event.oldIndex).map(function (item) { return _this.clone(item); }));
                            _this.renderer.removeChild(event.item.parentNode, event.item);
                            _this.renderer.insertBefore(event.clone.parentNode, event.item, event.clone);
                            _this.renderer.removeChild(event.clone.parentNode, event.clone);
                        }
                        else {
                            _this.service.transfer(bindings.extractFromEvery(event.oldIndex));
                        }
                        _this.service.transfer = null;
                    }
                    _this.proxyEvent('onRemove', event);
                },
                onUpdate: function (event) {
                    var bindings = _this.getBindings();
                    bindings.injectIntoEvery(event.newIndex, bindings.extractFromEvery(event.oldIndex));
                    _this.proxyEvent('onUpdate', event);
                },
            };
        },
        enumerable: true,
        configurable: true
    });
    return SortablejsDirective;
}());
SortablejsDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[sortablejs]'
            },] },
];
SortablejsDirective.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [globals_1.GLOBALS,] },] },
    { type: sortablejs_service_1.SortablejsService, },
    { type: core_1.ElementRef, },
    { type: core_1.NgZone, },
    { type: core_1.Renderer2, },
]; };
SortablejsDirective.propDecorators = {
    'sortablejs': [{ type: core_1.Input },],
    'inputOptions': [{ type: core_1.Input, args: ['sortablejsOptions',] },],
    'inputCloneFunction': [{ type: core_1.Input, args: ['sortablejsCloneFunction',] },],
    'runInsideAngular': [{ type: core_1.Input },],
};
exports.SortablejsDirective = SortablejsDirective;
//# sourceMappingURL=sortablejs.directive.js.map

/***/ }),

/***/ "./node_modules/angular-sortablejs/dist/src/sortablejs.module.js":
/*!***********************************************************************!*\
  !*** ./node_modules/angular-sortablejs/dist/src/sortablejs.module.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var globals_1 = __webpack_require__(/*! ./globals */ "./node_modules/angular-sortablejs/dist/src/globals.js");
var sortablejs_directive_1 = __webpack_require__(/*! ./sortablejs.directive */ "./node_modules/angular-sortablejs/dist/src/sortablejs.directive.js");
var sortablejs_service_1 = __webpack_require__(/*! ./sortablejs.service */ "./node_modules/angular-sortablejs/dist/src/sortablejs.service.js");
var SortablejsModule = (function () {
    function SortablejsModule() {
    }
    SortablejsModule.forRoot = function (globalOptions) {
        return {
            ngModule: SortablejsModule,
            providers: [
                sortablejs_service_1.SortablejsService,
                { provide: globals_1.GLOBALS, useValue: globalOptions }
            ]
        };
    };
    return SortablejsModule;
}());
SortablejsModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [sortablejs_directive_1.SortablejsDirective],
                exports: [sortablejs_directive_1.SortablejsDirective],
                providers: [sortablejs_service_1.SortablejsService]
            },] },
];
SortablejsModule.ctorParameters = function () { return []; };
exports.SortablejsModule = SortablejsModule;
//# sourceMappingURL=sortablejs.module.js.map

/***/ }),

/***/ "./node_modules/angular-sortablejs/dist/src/sortablejs.service.js":
/*!************************************************************************!*\
  !*** ./node_modules/angular-sortablejs/dist/src/sortablejs.service.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var SortablejsService = (function () {
    function SortablejsService() {
    }
    return SortablejsService;
}());
SortablejsService.decorators = [
    { type: core_1.Injectable },
];
SortablejsService.ctorParameters = function () { return []; };
exports.SortablejsService = SortablejsService;
//# sourceMappingURL=sortablejs.service.js.map

/***/ }),

/***/ "./node_modules/ngx-moment/fesm5/ngx-moment.js":
/*!*****************************************************!*\
  !*** ./node_modules/ngx-moment/fesm5/ngx-moment.js ***!
  \*****************************************************/
/*! exports provided: AddPipe, CalendarPipe, DateFormatPipe, DifferencePipe, DurationPipe, FromUnixPipe, ParsePipe, MomentModule, SubtractPipe, TimeAgoPipe, UtcPipe, FromUtcPipe, LocalTimePipe, LocalePipe, ParseZonePipe, IsBeforePipe, IsAfterPipe, NGX_MOMENT_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPipe", function() { return AddPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPipe", function() { return CalendarPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormatPipe", function() { return DateFormatPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DifferencePipe", function() { return DifferencePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return DurationPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromUnixPipe", function() { return FromUnixPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParsePipe", function() { return ParsePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentModule", function() { return MomentModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtractPipe", function() { return SubtractPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function() { return TimeAgoPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtcPipe", function() { return UtcPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromUtcPipe", function() { return FromUtcPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalTimePipe", function() { return LocalTimePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalePipe", function() { return LocalePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseZonePipe", function() { return ParseZonePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsBeforePipe", function() { return IsBeforePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAfterPipe", function() { return IsAfterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_MOMENT_OPTIONS", function() { return NGX_MOMENT_OPTIONS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var momentConstructor = moment__WEBPACK_IMPORTED_MODULE_1__;
var AddPipe = /** @class */ (function () {
    function AddPipe() {
    }
    /**
     * @param {?} value
     * @param {?} amount
     * @param {?=} unit
     * @return {?}
     */
    AddPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} amount
     * @param {?=} unit
     * @return {?}
     */
    function (value, amount, unit) {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('AddPipe: missing required arguments');
        }
        return momentConstructor(value).add(amount, unit);
    };
    AddPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amAdd' },] }
    ];
    return AddPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var momentConstructor$1 = moment__WEBPACK_IMPORTED_MODULE_1__;
var CalendarPipe = /** @class */ (function () {
    function CalendarPipe(cdRef, ngZone) {
        var _this = this;
        this.cdRef = cdRef;
        this.ngZone = ngZone;
        // using a single static timer for all instances of this pipe for performance reasons
        CalendarPipe.initTimer(ngZone);
        CalendarPipe.refs++;
        // values such as Today will need to be replaced with Yesterday after midnight,
        // so make sure we subscribe to an EventEmitter that we set up to emit at midnight
        this.midnightSub = CalendarPipe.midnight.subscribe(function () {
            _this.ngZone.run(function () { return _this.cdRef.markForCheck(); });
        });
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    CalendarPipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var formats = null;
        /** @type {?} */
        var referenceTime = null;
        for (var i = 0, len = args.length; i < len; i++) {
            if (args[i] !== null) {
                if (typeof args[i] === 'object' && !Object(moment__WEBPACK_IMPORTED_MODULE_1__["isMoment"])(args[i])) {
                    formats = args[i];
                }
                else {
                    referenceTime = momentConstructor$1(args[i]);
                }
            }
        }
        return momentConstructor$1(value).calendar(referenceTime, formats);
    };
    /**
     * @return {?}
     */
    CalendarPipe.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (CalendarPipe.refs > 0) {
            CalendarPipe.refs--;
        }
        if (CalendarPipe.refs === 0) {
            CalendarPipe.removeTimer();
        }
        this.midnightSub.unsubscribe();
    };
    /**
     * @param {?} ngZone
     * @return {?}
     */
    CalendarPipe.initTimer = /**
     * @param {?} ngZone
     * @return {?}
     */
    function (ngZone) {
        // initialize the timer
        if (!CalendarPipe.midnight) {
            CalendarPipe.midnight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            if (typeof window !== 'undefined') {
                /** @type {?} */
                var timeToUpdate_1 = CalendarPipe._getMillisecondsUntilUpdate();
                CalendarPipe.timer = ngZone.runOutsideAngular(function () {
                    return window.setTimeout(function () {
                        // emit the current date
                        CalendarPipe.midnight.emit(new Date());
                        // refresh the timer
                        CalendarPipe.removeTimer();
                        CalendarPipe.initTimer(ngZone);
                    }, timeToUpdate_1);
                });
            }
        }
    };
    /**
     * @return {?}
     */
    CalendarPipe.removeTimer = /**
     * @return {?}
     */
    function () {
        if (CalendarPipe.timer) {
            window.clearTimeout(CalendarPipe.timer);
            CalendarPipe.timer = null;
            CalendarPipe.midnight = null;
        }
    };
    /**
     * @return {?}
     */
    CalendarPipe._getMillisecondsUntilUpdate = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var now = momentConstructor$1();
        /** @type {?} */
        var tomorrow = momentConstructor$1().startOf('day').add(1, 'days');
        /** @type {?} */
        var timeToMidnight = tomorrow.valueOf() - now.valueOf();
        return timeToMidnight + 1000; // 1 second after midnight
    };
    /**
     * Internal reference counter, so we can clean up when no instances are in use
     */
    CalendarPipe.refs = 0;
    CalendarPipe.timer = null;
    CalendarPipe.midnight = null;
    CalendarPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amCalendar', pure: false },] }
    ];
    /** @nocollapse */
    CalendarPipe.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    return CalendarPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var momentConstructor$2 = moment__WEBPACK_IMPORTED_MODULE_1__;
var DateFormatPipe = /** @class */ (function () {
    function DateFormatPipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    DateFormatPipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!value) {
            return '';
        }
        return momentConstructor$2(value).format(args[0]);
    };
    DateFormatPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amDateFormat' },] }
    ];
    return DateFormatPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var momentConstructor$3 = moment__WEBPACK_IMPORTED_MODULE_1__;
var DifferencePipe = /** @class */ (function () {
    function DifferencePipe() {
    }
    /**
     * @param {?} value
     * @param {?} otherValue
     * @param {?=} unit
     * @param {?=} precision
     * @return {?}
     */
    DifferencePipe.prototype.transform = /**
     * @param {?} value
     * @param {?} otherValue
     * @param {?=} unit
     * @param {?=} precision
     * @return {?}
     */
    function (value, otherValue, unit, precision) {
        /** @type {?} */
        var date = momentConstructor$3(value);
        /** @type {?} */
        var date2 = (otherValue !== null) ? momentConstructor$3(otherValue) : momentConstructor$3();
        return date.diff(date2, unit, precision);
    };
    DifferencePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amDifference' },] }
    ];
    return DifferencePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var NGX_MOMENT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NGX_MOMENT_OPTIONS');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var DurationPipe = /** @class */ (function () {
    function DurationPipe(momentOptions) {
        this.allowedUnits = ['ss', 's', 'm', 'h', 'd', 'M'];
        this._applyOptions(momentOptions);
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    DurationPipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (typeof args === 'undefined' || args.length !== 1) {
            throw new Error('DurationPipe: missing required time unit argument');
        }
        return Object(moment__WEBPACK_IMPORTED_MODULE_1__["duration"])(value, (/** @type {?} */ (args[0]))).humanize();
    };
    /**
     * @param {?} momentOptions
     * @return {?}
     */
    DurationPipe.prototype._applyOptions = /**
     * @param {?} momentOptions
     * @return {?}
     */
    function (momentOptions) {
        var _this = this;
        if (!momentOptions) {
            return;
        }
        if (!!momentOptions.relativeTimeThresholdOptions) {
            /** @type {?} */
            var units = Object.keys(momentOptions.relativeTimeThresholdOptions);
            /** @type {?} */
            var filteredUnits = units.filter(function (unit) { return _this.allowedUnits.indexOf(unit) !== -1; });
            filteredUnits.forEach(function (unit) {
                Object(moment__WEBPACK_IMPORTED_MODULE_1__["relativeTimeThreshold"])(unit, momentOptions.relativeTimeThresholdOptions[unit]);
            });
        }
    };
    DurationPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amDuration' },] }
    ];
    /** @nocollapse */
    DurationPipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NGX_MOMENT_OPTIONS,] }] }
    ]; };
    return DurationPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var FromUnixPipe = /** @class */ (function () {
    function FromUnixPipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    FromUnixPipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (typeof value === 'string') {
            value = +value;
        }
        return Object(moment__WEBPACK_IMPORTED_MODULE_1__["unix"])(value);
    };
    FromUnixPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amFromUnix' },] }
    ];
    return FromUnixPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var momentConstructor$4 = moment__WEBPACK_IMPORTED_MODULE_1__;
var ParsePipe = /** @class */ (function () {
    function ParsePipe() {
    }
    /**
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    ParsePipe.prototype.transform = /**
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    function (value, format) {
        return momentConstructor$4(value, format);
    };
    ParsePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amParse' },] }
    ];
    return ParsePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var FromUtcPipe = /** @class */ (function () {
    function FromUtcPipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    FromUtcPipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return Object(moment__WEBPACK_IMPORTED_MODULE_1__["utc"])(value);
    };
    FromUtcPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amFromUtc' },] }
    ];
    return FromUtcPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var momentConstructor$5 = moment__WEBPACK_IMPORTED_MODULE_1__;
var IsAfterPipe = /** @class */ (function () {
    function IsAfterPipe() {
    }
    /**
     * @param {?} value
     * @param {?} otherValue
     * @param {?=} unit
     * @return {?}
     */
    IsAfterPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} otherValue
     * @param {?=} unit
     * @return {?}
     */
    function (value, otherValue, unit) {
        return momentConstructor$5(value).isAfter(momentConstructor$5(otherValue), unit);
    };
    IsAfterPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'amIsAfter'
                },] }
    ];
    return IsAfterPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var momentConstructor$6 = moment__WEBPACK_IMPORTED_MODULE_1__;
var IsBeforePipe = /** @class */ (function () {
    function IsBeforePipe() {
    }
    /**
     * @param {?} value
     * @param {?} otherValue
     * @param {?=} unit
     * @return {?}
     */
    IsBeforePipe.prototype.transform = /**
     * @param {?} value
     * @param {?} otherValue
     * @param {?=} unit
     * @return {?}
     */
    function (value, otherValue, unit) {
        return momentConstructor$6(value).isBefore(momentConstructor$6(otherValue), unit);
    };
    IsBeforePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'amIsBefore'
                },] }
    ];
    return IsBeforePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var momentConstructor$7 = moment__WEBPACK_IMPORTED_MODULE_1__;
var LocalTimePipe = /** @class */ (function () {
    function LocalTimePipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    LocalTimePipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return momentConstructor$7(value).local();
    };
    LocalTimePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amLocal' },] }
    ];
    return LocalTimePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
// under systemjs, moment is actually exported as the default export, so we account for that
/** @type {?} */
var momentConstructor$8 = moment__WEBPACK_IMPORTED_MODULE_1__;
var LocalePipe = /** @class */ (function () {
    function LocalePipe() {
    }
    /**
     * @param {?} value
     * @param {?} locale
     * @return {?}
     */
    LocalePipe.prototype.transform = /**
     * @param {?} value
     * @param {?} locale
     * @return {?}
     */
    function (value, locale$$1) {
        return momentConstructor$8(value).locale(locale$$1);
    };
    LocalePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amLocale' },] }
    ];
    return LocalePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var ParseZonePipe = /** @class */ (function () {
    function ParseZonePipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ParseZonePipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return Object(moment__WEBPACK_IMPORTED_MODULE_1__["parseZone"])(value);
    };
    ParseZonePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amParseZone' },] }
    ];
    return ParseZonePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var momentConstructor$9 = moment__WEBPACK_IMPORTED_MODULE_1__;
var SubtractPipe = /** @class */ (function () {
    function SubtractPipe() {
    }
    /**
     * @param {?} value
     * @param {?} amount
     * @param {?=} unit
     * @return {?}
     */
    SubtractPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} amount
     * @param {?=} unit
     * @return {?}
     */
    function (value, amount, unit) {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('SubtractPipe: missing required arguments');
        }
        return momentConstructor$9(value).subtract(amount, unit);
    };
    SubtractPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amSubtract' },] }
    ];
    return SubtractPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var momentConstructor$a = moment__WEBPACK_IMPORTED_MODULE_1__;
var TimeAgoPipe = /** @class */ (function () {
    function TimeAgoPipe(cdRef, ngZone) {
        this.cdRef = cdRef;
        this.ngZone = ngZone;
    }
    /**
     * @param {?} value
     * @param {?=} omitSuffix
     * @return {?}
     */
    TimeAgoPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} omitSuffix
     * @return {?}
     */
    function (value, omitSuffix) {
        if (this.hasChanged(value, omitSuffix)) {
            this.lastTime = this.getTime(value);
            this.lastValue = value;
            this.lastOmitSuffix = omitSuffix;
            this.lastLocale = this.getLocale(value);
            this.removeTimer();
            this.createTimer();
            this.lastText = momentConstructor$a(value).from(momentConstructor$a(), omitSuffix);
        }
        else {
            this.createTimer();
        }
        return this.lastText;
    };
    /**
     * @return {?}
     */
    TimeAgoPipe.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeTimer();
    };
    /**
     * @return {?}
     */
    TimeAgoPipe.prototype.createTimer = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.currentTimer) {
            return;
        }
        /** @type {?} */
        var momentInstance = momentConstructor$a(this.lastValue);
        /** @type {?} */
        var timeToUpdate = this.getSecondsUntilUpdate(momentInstance) * 1000;
        this.currentTimer = this.ngZone.runOutsideAngular(function () {
            if (typeof window !== 'undefined') {
                return window.setTimeout(function () {
                    _this.lastText = momentConstructor$a(_this.lastValue).from(momentConstructor$a(), _this.lastOmitSuffix);
                    _this.currentTimer = null;
                    _this.ngZone.run(function () { return _this.cdRef.markForCheck(); });
                }, timeToUpdate);
            }
            else {
                return null;
            }
        });
    };
    /**
     * @return {?}
     */
    TimeAgoPipe.prototype.removeTimer = /**
     * @return {?}
     */
    function () {
        if (this.currentTimer) {
            window.clearTimeout(this.currentTimer);
            this.currentTimer = null;
        }
    };
    /**
     * @param {?} momentInstance
     * @return {?}
     */
    TimeAgoPipe.prototype.getSecondsUntilUpdate = /**
     * @param {?} momentInstance
     * @return {?}
     */
    function (momentInstance) {
        /** @type {?} */
        var howOld = Math.abs(momentConstructor$a().diff(momentInstance, 'minute'));
        if (howOld < 1) {
            return 1;
        }
        else if (howOld < 60) {
            return 30;
        }
        else if (howOld < 180) {
            return 300;
        }
        else {
            return 3600;
        }
    };
    /**
     * @param {?} value
     * @param {?=} omitSuffix
     * @return {?}
     */
    TimeAgoPipe.prototype.hasChanged = /**
     * @param {?} value
     * @param {?=} omitSuffix
     * @return {?}
     */
    function (value, omitSuffix) {
        return this.getTime(value) !== this.lastTime
            || this.getLocale(value) !== this.lastLocale
            || omitSuffix !== this.lastOmitSuffix;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimeAgoPipe.prototype.getTime = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (Object(moment__WEBPACK_IMPORTED_MODULE_1__["isDate"])(value)) {
            return value.getTime();
        }
        else if (Object(moment__WEBPACK_IMPORTED_MODULE_1__["isMoment"])(value)) {
            return value.valueOf();
        }
        else {
            return momentConstructor$a(value).valueOf();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimeAgoPipe.prototype.getLocale = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return Object(moment__WEBPACK_IMPORTED_MODULE_1__["isMoment"])(value) ? value.locale() : Object(moment__WEBPACK_IMPORTED_MODULE_1__["locale"])();
    };
    TimeAgoPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amTimeAgo', pure: false },] }
    ];
    /** @nocollapse */
    TimeAgoPipe.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    return TimeAgoPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var momentConstructor$b = moment__WEBPACK_IMPORTED_MODULE_1__;
var UtcPipe = /** @class */ (function () {
    function UtcPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    UtcPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return momentConstructor$b(value).utc();
    };
    UtcPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'amUtc' },] }
    ];
    return UtcPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var ANGULAR_MOMENT_PIPES = [
    AddPipe,
    CalendarPipe,
    DateFormatPipe,
    DifferencePipe,
    DurationPipe,
    FromUnixPipe,
    ParsePipe,
    SubtractPipe,
    TimeAgoPipe,
    UtcPipe,
    FromUtcPipe,
    LocalTimePipe,
    LocalePipe,
    ParseZonePipe,
    IsBeforePipe,
    IsAfterPipe
];
var MomentModule = /** @class */ (function () {
    function MomentModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    MomentModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return {
            ngModule: MomentModule,
            providers: [
                {
                    provide: NGX_MOMENT_OPTIONS, useValue: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, options)
                }
            ]
        };
    };
    MomentModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: ANGULAR_MOMENT_PIPES,
                    exports: ANGULAR_MOMENT_PIPES
                },] }
    ];
    return MomentModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1vbWVudC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LW1vbWVudC9hZGQucGlwZS50cyIsIm5nOi8vbmd4LW1vbWVudC9jYWxlbmRhci5waXBlLnRzIiwibmc6Ly9uZ3gtbW9tZW50L2RhdGUtZm9ybWF0LnBpcGUudHMiLCJuZzovL25neC1tb21lbnQvZGlmZmVyZW5jZS5waXBlLnRzIiwibmc6Ly9uZ3gtbW9tZW50L21vbWVudC1vcHRpb25zLnRzIiwibmc6Ly9uZ3gtbW9tZW50L2R1cmF0aW9uLnBpcGUudHMiLCJuZzovL25neC1tb21lbnQvZnJvbS11bml4LnBpcGUudHMiLCJuZzovL25neC1tb21lbnQvcGFyc2UucGlwZS50cyIsIm5nOi8vbmd4LW1vbWVudC9mcm9tLXV0Yy5waXBlLnRzIiwibmc6Ly9uZ3gtbW9tZW50L2lzLWFmdGVyLnBpcGUudHMiLCJuZzovL25neC1tb21lbnQvaXMtYmVmb3JlLnBpcGUudHMiLCJuZzovL25neC1tb21lbnQvbG9jYWwucGlwZS50cyIsIm5nOi8vbmd4LW1vbWVudC9sb2NhbGUucGlwZS50cyIsIm5nOi8vbmd4LW1vbWVudC9wYXJzZS16b25lLnBpcGUudHMiLCJuZzovL25neC1tb21lbnQvc3VidHJhY3QucGlwZS50cyIsIm5nOi8vbmd4LW1vbWVudC90aW1lLWFnby5waXBlLnRzIiwibmc6Ly9uZ3gtbW9tZW50L3V0Yy5waXBlLnRzIiwibmc6Ly9uZ3gtbW9tZW50L21vbWVudC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogbmd4LW1vbWVudCAoYykgMjAxNSwgMjAxNiBVcmkgU2hha2VkIC8gTUlUIExpY2VuY2UgKi9cclxuXHJcbmltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuY29uc3QgbW9tZW50Q29uc3RydWN0b3IgPSBtb21lbnQ7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhbUFkZCcgfSlcclxuZXhwb3J0IGNsYXNzIEFkZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhbW91bnQ6IG1vbWVudC5EdXJhdGlvbklucHV0QXJnMSwgdW5pdD86IG1vbWVudC5EdXJhdGlvbklucHV0QXJnMik6IGFueSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnIHx8ICh0eXBlb2YgYW1vdW50ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdW5pdCA9PT0gJ3VuZGVmaW5lZCcpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQWRkUGlwZTogbWlzc2luZyByZXF1aXJlZCBhcmd1bWVudHMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1vbWVudENvbnN0cnVjdG9yKHZhbHVlKS5hZGQoYW1vdW50LCB1bml0KTtcclxuICAgIH1cclxufVxyXG4iLCIvKiBuZ3gtbW9tZW50IChjKSAyMDE1LCAyMDE2IFVyaSBTaGFrZWQgLyBNSVQgTGljZW5jZSAqL1xyXG5cclxuaW1wb3J0IHsgUGlwZSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFBpcGVUcmFuc2Zvcm0sIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuY29uc3QgbW9tZW50Q29uc3RydWN0b3IgPSBtb21lbnQ7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhbUNhbGVuZGFyJywgcHVyZTogZmFsc2UgfSlcclxuZXhwb3J0IGNsYXNzIENhbGVuZGFyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0sIE9uRGVzdHJveSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIHJlZmVyZW5jZSBjb3VudGVyLCBzbyB3ZSBjYW4gY2xlYW4gdXAgd2hlbiBubyBpbnN0YW5jZXMgYXJlIGluIHVzZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlZnMgPSAwO1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyB0aW1lcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgbWlkbmlnaHQ6IEV2ZW50RW1pdHRlcjxEYXRlPiB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIG1pZG5pZ2h0U3ViOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICAvLyB1c2luZyBhIHNpbmdsZSBzdGF0aWMgdGltZXIgZm9yIGFsbCBpbnN0YW5jZXMgb2YgdGhpcyBwaXBlIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXHJcbiAgICBDYWxlbmRhclBpcGUuaW5pdFRpbWVyKG5nWm9uZSk7XHJcblxyXG4gICAgQ2FsZW5kYXJQaXBlLnJlZnMrKztcclxuXHJcbiAgICAvLyB2YWx1ZXMgc3VjaCBhcyBUb2RheSB3aWxsIG5lZWQgdG8gYmUgcmVwbGFjZWQgd2l0aCBZZXN0ZXJkYXkgYWZ0ZXIgbWlkbmlnaHQsXHJcbiAgICAvLyBzbyBtYWtlIHN1cmUgd2Ugc3Vic2NyaWJlIHRvIGFuIEV2ZW50RW1pdHRlciB0aGF0IHdlIHNldCB1cCB0byBlbWl0IGF0IG1pZG5pZ2h0XHJcbiAgICB0aGlzLm1pZG5pZ2h0U3ViID0gQ2FsZW5kYXJQaXBlLm1pZG5pZ2h0LnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBEYXRlIHwgbW9tZW50Lk1vbWVudCwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgbGV0IGZvcm1hdHM6IGFueSA9IG51bGw7XHJcbiAgICBsZXQgcmVmZXJlbmNlVGltZTogYW55ID0gbnVsbDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJncy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBpZiAoYXJnc1tpXSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYXJnc1tpXSA9PT0gJ29iamVjdCcgJiYgIW1vbWVudC5pc01vbWVudChhcmdzW2ldKSkge1xyXG4gICAgICAgICAgZm9ybWF0cyA9IGFyZ3NbaV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlZmVyZW5jZVRpbWUgPSBtb21lbnRDb25zdHJ1Y3RvcihhcmdzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbW9tZW50Q29uc3RydWN0b3IodmFsdWUpLmNhbGVuZGFyKHJlZmVyZW5jZVRpbWUsIGZvcm1hdHMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAoQ2FsZW5kYXJQaXBlLnJlZnMgPiAwKSB7XHJcbiAgICAgIENhbGVuZGFyUGlwZS5yZWZzLS07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKENhbGVuZGFyUGlwZS5yZWZzID09PSAwKSB7XHJcbiAgICAgIENhbGVuZGFyUGlwZS5yZW1vdmVUaW1lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWlkbmlnaHRTdWIudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGluaXRUaW1lcihuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgdGltZXJcclxuICAgIGlmICghQ2FsZW5kYXJQaXBlLm1pZG5pZ2h0KSB7XHJcbiAgICAgIENhbGVuZGFyUGlwZS5taWRuaWdodCA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgY29uc3QgdGltZVRvVXBkYXRlID0gQ2FsZW5kYXJQaXBlLl9nZXRNaWxsaXNlY29uZHNVbnRpbFVwZGF0ZSgpO1xyXG4gICAgICAgIENhbGVuZGFyUGlwZS50aW1lciA9IG5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBlbWl0IHRoZSBjdXJyZW50IGRhdGVcclxuICAgICAgICAgICAgQ2FsZW5kYXJQaXBlLm1pZG5pZ2h0LmVtaXQobmV3IERhdGUoKSk7XHJcblxyXG4gICAgICAgICAgICAvLyByZWZyZXNoIHRoZSB0aW1lclxyXG4gICAgICAgICAgICBDYWxlbmRhclBpcGUucmVtb3ZlVGltZXIoKTtcclxuICAgICAgICAgICAgQ2FsZW5kYXJQaXBlLmluaXRUaW1lcihuZ1pvbmUpO1xyXG4gICAgICAgICAgfSwgdGltZVRvVXBkYXRlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVtb3ZlVGltZXIoKSB7XHJcbiAgICBpZiAoQ2FsZW5kYXJQaXBlLnRpbWVyKSB7XHJcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoQ2FsZW5kYXJQaXBlLnRpbWVyKTtcclxuICAgICAgQ2FsZW5kYXJQaXBlLnRpbWVyID0gbnVsbDtcclxuICAgICAgQ2FsZW5kYXJQaXBlLm1pZG5pZ2h0ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIF9nZXRNaWxsaXNlY29uZHNVbnRpbFVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IG5vdyA9IG1vbWVudENvbnN0cnVjdG9yKCk7XHJcbiAgICBjb25zdCB0b21vcnJvdyA9IG1vbWVudENvbnN0cnVjdG9yKCkuc3RhcnRPZignZGF5JykuYWRkKDEsICdkYXlzJyk7XHJcbiAgICBjb25zdCB0aW1lVG9NaWRuaWdodCA9IHRvbW9ycm93LnZhbHVlT2YoKSAtIG5vdy52YWx1ZU9mKCk7XHJcbiAgICByZXR1cm4gdGltZVRvTWlkbmlnaHQgKyAxMDAwOyAvLyAxIHNlY29uZCBhZnRlciBtaWRuaWdodFxyXG4gIH1cclxufVxyXG4iLCIvKiBuZ3gtbW9tZW50IChjKSAyMDE1LCAyMDE2IFVyaSBTaGFrZWQgLyBNSVQgTGljZW5jZSAqL1xyXG5cclxuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBtb21lbnRDb25zdHJ1Y3RvciA9IG1vbWVudDtcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2FtRGF0ZUZvcm1hdCcgfSlcclxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBEYXRlIHwgbW9tZW50Lk1vbWVudCB8IHN0cmluZyB8IG51bWJlciwgLi4uYXJnczogYW55W10pOiBzdHJpbmcge1xyXG4gICAgaWYgKCF2YWx1ZSkgeyByZXR1cm4gJyc7IH1cclxuICAgIHJldHVybiBtb21lbnRDb25zdHJ1Y3Rvcih2YWx1ZSkuZm9ybWF0KGFyZ3NbMF0pO1xyXG4gIH1cclxufVxyXG4iLCIvKiBuZ3gtbW9tZW50IChjKSAyMDE1LCAyMDE2IFVyaSBTaGFrZWQgLyBNSVQgTGljZW5jZSAqL1xyXG5cclxuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBtb21lbnRDb25zdHJ1Y3RvciA9IG1vbWVudDtcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2FtRGlmZmVyZW5jZScgfSlcclxuZXhwb3J0IGNsYXNzIERpZmZlcmVuY2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBEYXRlIHwgbW9tZW50Lk1vbWVudCxcclxuICAgICAgICAgICAgb3RoZXJWYWx1ZTogRGF0ZSB8IG1vbWVudC5Nb21lbnQsXHJcbiAgICAgICAgICAgIHVuaXQ/OiBtb21lbnQudW5pdE9mVGltZS5EaWZmLFxyXG4gICAgICAgICAgICBwcmVjaXNpb24/OiBib29sZWFuKTogbnVtYmVyIHtcclxuXHJcbiAgICBjb25zdCBkYXRlID0gbW9tZW50Q29uc3RydWN0b3IodmFsdWUpO1xyXG4gICAgY29uc3QgZGF0ZTIgPSAob3RoZXJWYWx1ZSAhPT0gbnVsbCkgPyBtb21lbnRDb25zdHJ1Y3RvcihvdGhlclZhbHVlKSA6IG1vbWVudENvbnN0cnVjdG9yKCk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGUuZGlmZihkYXRlMiwgdW5pdCwgcHJlY2lzaW9uKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBOR1hfTU9NRU5UX09QVElPTlM6IEluamVjdGlvblRva2VuPE5neE1vbWVudE9wdGlvbnM+ID0gbmV3IEluamVjdGlvblRva2VuPE5neE1vbWVudE9wdGlvbnM+KCdOR1hfTU9NRU5UX09QVElPTlMnKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmd4TW9tZW50T3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogcmVsYXRpdmVUaW1lVGhyZXNob2xkT3B0aW9uc1xyXG4gICAqIEBkZXNjcmlwdGlvbiBQcm92aWRlcyB0aGUgYHJlbGF0aXZlVGltZVRocmVzaG9sZGAgdW5pdHMgYWxsb3dpbmcgYSBwaXBlIHRvIHNldCB0aGUgYG1vbWVudC5yZWxhdGl2ZVRpbWVUaHJlc2hvbGRgIHZhbHVlcy5cclxuICAgKiBUaGUgYGtleWAgaXMgYSB1bml0IGRlZmluZWQgYXMgb25lIG9mIGBzc2AsIGBzYCwgYG1gLCBgaGAsIGBkYCwgYE1gLlxyXG4gICAqIEBzZWUgaHR0cHM6Ly9tb21lbnRqcy5jb20vZG9jcy8jL2N1c3RvbWl6YXRpb24vcmVsYXRpdmUtdGltZS10aHJlc2hvbGQvXHJcbiAgICogQGV4YW1wbGUgYnkgZGVmYXVsdCBtb3JlIHRoYW4gNDUgc2Vjb25kcyBpcyBjb25zaWRlcmVkIGEgbWludXRlLCBtb3JlIHRoYW4gMjIgaG91cnMgaXMgY29uc2lkZXJlZCBhIGRheSBhbmQgc28gb24uXHJcbiAgICogU28gc2V0dGluZ3MgdGhlIHVuaXQgJ20nIHRvIGA1OWAgd2lsbCBhZGp1c3QgdGhlIGByZWxhdGl2ZVRpbWVUaHJlc2hvbGRgIGFuZCBjb25zaWRlciBtb3JlIHRoYW4gNTkgbWludXRlc1xyXG4gICAqIHRvIGJlIGFuIGhvdXIgKGRlZmF1bHQgaXMgYDQ1IG1pbnV0ZXNgKVxyXG4gICAqL1xyXG4gIHJlbGF0aXZlVGltZVRocmVzaG9sZE9wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH07XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQgeyBJbmplY3QsIE9wdGlvbmFsLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HWF9NT01FTlRfT1BUSU9OUywgTmd4TW9tZW50T3B0aW9ucyB9IGZyb20gJy4vbW9tZW50LW9wdGlvbnMnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnYW1EdXJhdGlvbicgfSlcclxuZXhwb3J0IGNsYXNzIER1cmF0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICBhbGxvd2VkVW5pdHM6IEFycmF5PHN0cmluZz4gPSBbJ3NzJywgJ3MnLCAnbScsICdoJywgJ2QnLCAnTSddO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE5HWF9NT01FTlRfT1BUSU9OUykgbW9tZW50T3B0aW9ucz86IE5neE1vbWVudE9wdGlvbnMpIHtcclxuICAgIHRoaXMuX2FwcGx5T3B0aW9ucyhtb21lbnRPcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzOiBzdHJpbmdbXSk6IHN0cmluZyB7XHJcbiAgICBpZiAodHlwZW9mIGFyZ3MgPT09ICd1bmRlZmluZWQnIHx8IGFyZ3MubGVuZ3RoICE9PSAxKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRHVyYXRpb25QaXBlOiBtaXNzaW5nIHJlcXVpcmVkIHRpbWUgdW5pdCBhcmd1bWVudCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vbWVudC5kdXJhdGlvbih2YWx1ZSwgYXJnc1swXSBhcyBtb21lbnQudW5pdE9mVGltZS5EdXJhdGlvbkNvbnN0cnVjdG9yKS5odW1hbml6ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYXBwbHlPcHRpb25zKG1vbWVudE9wdGlvbnM6IE5neE1vbWVudE9wdGlvbnMpOiB2b2lkIHtcclxuICAgIGlmICghbW9tZW50T3B0aW9ucykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCEhbW9tZW50T3B0aW9ucy5yZWxhdGl2ZVRpbWVUaHJlc2hvbGRPcHRpb25zKSB7XHJcbiAgICAgIGNvbnN0IHVuaXRzOiBBcnJheTxzdHJpbmc+ID0gT2JqZWN0LmtleXMobW9tZW50T3B0aW9ucy5yZWxhdGl2ZVRpbWVUaHJlc2hvbGRPcHRpb25zKTtcclxuICAgICAgY29uc3QgZmlsdGVyZWRVbml0czogQXJyYXk8c3RyaW5nPiA9IHVuaXRzLmZpbHRlcih1bml0ID0+IHRoaXMuYWxsb3dlZFVuaXRzLmluZGV4T2YodW5pdCkgIT09IC0xKTtcclxuICAgICAgZmlsdGVyZWRVbml0cy5mb3JFYWNoKHVuaXQgPT4ge1xyXG4gICAgICAgIG1vbWVudC5yZWxhdGl2ZVRpbWVUaHJlc2hvbGQodW5pdCwgbW9tZW50T3B0aW9ucy5yZWxhdGl2ZVRpbWVUaHJlc2hvbGRPcHRpb25zW3VuaXRdKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvKiBuZ3gtbW9tZW50IChjKSAyMDE1LCAyMDE2IFVyaSBTaGFrZWQgLyBNSVQgTGljZW5jZSAqL1xyXG5cclxuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhbUZyb21Vbml4JyB9KVxyXG5leHBvcnQgY2xhc3MgRnJvbVVuaXhQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIC4uLmFyZ3M6IHN0cmluZ1tdKTogYW55IHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHZhbHVlID0gK3ZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vbWVudC51bml4KHZhbHVlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmNvbnN0IG1vbWVudENvbnN0cnVjdG9yID0gbW9tZW50O1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnYW1QYXJzZScgfSlcclxuZXhwb3J0IGNsYXNzIFBhcnNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZyk6IG1vbWVudC5Nb21lbnQge1xyXG4gICAgcmV0dXJuIG1vbWVudENvbnN0cnVjdG9yKHZhbHVlLCBmb3JtYXQpO1xyXG4gIH1cclxufVxyXG4iLCIvKiBuZ3gtbW9tZW50IChjKSAyMDE1LCAyMDE2IFVyaSBTaGFrZWQgLyBNSVQgTGljZW5jZSAqL1xyXG5cclxuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhbUZyb21VdGMnIH0pXHJcbmV4cG9ydCBjbGFzcyBGcm9tVXRjUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzOiBzdHJpbmdbXSk6IGFueSB7XHJcbiAgICByZXR1cm4gbW9tZW50LnV0Yyh2YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuY29uc3QgbW9tZW50Q29uc3RydWN0b3IgPSBtb21lbnQ7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2FtSXNBZnRlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIElzQWZ0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogRGF0ZSB8IG1vbWVudC5Nb21lbnQsXHJcbiAgICBvdGhlclZhbHVlOiBEYXRlIHwgbW9tZW50Lk1vbWVudCxcclxuICAgIHVuaXQ/OiBtb21lbnQudW5pdE9mVGltZS5TdGFydE9mKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbW9tZW50Q29uc3RydWN0b3IodmFsdWUpLmlzQWZ0ZXIobW9tZW50Q29uc3RydWN0b3Iob3RoZXJWYWx1ZSksIHVuaXQpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5jb25zdCBtb21lbnRDb25zdHJ1Y3RvciA9IG1vbWVudDtcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnYW1Jc0JlZm9yZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIElzQmVmb3JlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICB0cmFuc2Zvcm0odmFsdWU6IERhdGUgfCBtb21lbnQuTW9tZW50LFxyXG4gICAgb3RoZXJWYWx1ZTogRGF0ZSB8IG1vbWVudC5Nb21lbnQsXHJcbiAgICB1bml0PzogbW9tZW50LnVuaXRPZlRpbWUuU3RhcnRPZik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG1vbWVudENvbnN0cnVjdG9yKHZhbHVlKS5pc0JlZm9yZShtb21lbnRDb25zdHJ1Y3RvcihvdGhlclZhbHVlKSwgdW5pdCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuY29uc3QgbW9tZW50Q29uc3RydWN0b3IgPSBtb21lbnQ7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhbUxvY2FsJyB9KVxyXG5leHBvcnQgY2xhc3MgTG9jYWxUaW1lUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBEYXRlIHwgbW9tZW50Lk1vbWVudCB8IHN0cmluZyB8IG51bWJlcik6IG1vbWVudC5Nb21lbnQge1xyXG4gICAgICAgIHJldHVybiBtb21lbnRDb25zdHJ1Y3Rvcih2YWx1ZSkubG9jYWwoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuLy8gdW5kZXIgc3lzdGVtanMsIG1vbWVudCBpcyBhY3R1YWxseSBleHBvcnRlZCBhcyB0aGUgZGVmYXVsdCBleHBvcnQsIHNvIHdlIGFjY291bnQgZm9yIHRoYXRcclxuY29uc3QgbW9tZW50Q29uc3RydWN0b3IgPSBtb21lbnQ7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhbUxvY2FsZScgfSlcclxuZXhwb3J0IGNsYXNzIExvY2FsZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgbG9jYWxlOiBzdHJpbmcpOiBtb21lbnQuTW9tZW50IHtcclxuICAgIHJldHVybiBtb21lbnRDb25zdHJ1Y3Rvcih2YWx1ZSkubG9jYWxlKGxvY2FsZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhbVBhcnNlWm9uZScgfSlcclxuZXhwb3J0IGNsYXNzIFBhcnNlWm9uZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IG1vbWVudC5Nb21lbnQge1xyXG4gICAgcmV0dXJuIG1vbWVudC5wYXJzZVpvbmUodmFsdWUpO1xyXG4gIH1cclxufVxyXG4iLCIvKiBuZ3gtbW9tZW50IChjKSAyMDE1LCAyMDE2IFVyaSBTaGFrZWQgLyBNSVQgTGljZW5jZSAqL1xyXG5cclxuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBtb21lbnRDb25zdHJ1Y3RvciA9IG1vbWVudDtcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2FtU3VidHJhY3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBTdWJ0cmFjdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhbW91bnQ6IG1vbWVudC5EdXJhdGlvbklucHV0QXJnMSwgdW5pdD86IG1vbWVudC5EdXJhdGlvbklucHV0QXJnMik6IGFueSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnIHx8ICh0eXBlb2YgYW1vdW50ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdW5pdCA9PT0gJ3VuZGVmaW5lZCcpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3VidHJhY3RQaXBlOiBtaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50cycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbW9tZW50Q29uc3RydWN0b3IodmFsdWUpLnN1YnRyYWN0KGFtb3VudCwgdW5pdCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyogbmd4LW1vbWVudCAoYykgMjAxNSwgMjAxNiBVcmkgU2hha2VkIC8gTUlUIExpY2VuY2UgKi9cclxuXHJcbmltcG9ydCB7UGlwZSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFBpcGVUcmFuc2Zvcm0sIE9uRGVzdHJveSwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBtb21lbnRDb25zdHJ1Y3RvciA9IG1vbWVudDtcclxuXHJcbkBQaXBlKHtuYW1lOiAnYW1UaW1lQWdvJywgcHVyZTogZmFsc2V9KVxyXG5leHBvcnQgY2xhc3MgVGltZUFnb1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgY3VycmVudFRpbWVyOiBudW1iZXIgfCBudWxsO1xyXG5cclxuICBwcml2YXRlIGxhc3RUaW1lOiBOdW1iZXI7XHJcbiAgcHJpdmF0ZSBsYXN0VmFsdWU6IG1vbWVudC5Nb21lbnRJbnB1dDtcclxuICBwcml2YXRlIGxhc3RPbWl0U3VmZml4OiBib29sZWFuO1xyXG4gIHByaXZhdGUgbGFzdExvY2FsZT86IHN0cmluZztcclxuICBwcml2YXRlIGxhc3RUZXh0OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0odmFsdWU6IG1vbWVudC5Nb21lbnRJbnB1dCwgb21pdFN1ZmZpeD86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuaGFzQ2hhbmdlZCh2YWx1ZSwgb21pdFN1ZmZpeCkpIHtcclxuICAgICAgdGhpcy5sYXN0VGltZSA9IHRoaXMuZ2V0VGltZSh2YWx1ZSk7XHJcbiAgICAgIHRoaXMubGFzdFZhbHVlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMubGFzdE9taXRTdWZmaXggPSBvbWl0U3VmZml4O1xyXG4gICAgICB0aGlzLmxhc3RMb2NhbGUgPSB0aGlzLmdldExvY2FsZSh2YWx1ZSk7XHJcbiAgICAgIHRoaXMucmVtb3ZlVGltZXIoKTtcclxuICAgICAgdGhpcy5jcmVhdGVUaW1lcigpO1xyXG4gICAgICB0aGlzLmxhc3RUZXh0ID0gbW9tZW50Q29uc3RydWN0b3IodmFsdWUpLmZyb20obW9tZW50Q29uc3RydWN0b3IoKSwgb21pdFN1ZmZpeCk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jcmVhdGVUaW1lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmxhc3RUZXh0O1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZVRpbWVyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVRpbWVyKCkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFRpbWVyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb21lbnRJbnN0YW5jZSA9IG1vbWVudENvbnN0cnVjdG9yKHRoaXMubGFzdFZhbHVlKTtcclxuICAgIGNvbnN0IHRpbWVUb1VwZGF0ZSA9IHRoaXMuZ2V0U2Vjb25kc1VudGlsVXBkYXRlKG1vbWVudEluc3RhbmNlKSAqIDEwMDA7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50VGltZXIgPSB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxhc3RUZXh0ID0gbW9tZW50Q29uc3RydWN0b3IodGhpcy5sYXN0VmFsdWUpLmZyb20obW9tZW50Q29uc3RydWN0b3IoKSwgdGhpcy5sYXN0T21pdFN1ZmZpeCk7XHJcblxyXG4gICAgICAgICAgdGhpcy5jdXJyZW50VGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCkpO1xyXG4gICAgICAgIH0sIHRpbWVUb1VwZGF0ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVUaW1lcigpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lcikge1xyXG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuY3VycmVudFRpbWVyKTtcclxuICAgICAgdGhpcy5jdXJyZW50VGltZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTZWNvbmRzVW50aWxVcGRhdGUobW9tZW50SW5zdGFuY2U6IG1vbWVudC5Nb21lbnQpIHtcclxuICAgIGNvbnN0IGhvd09sZCA9IE1hdGguYWJzKG1vbWVudENvbnN0cnVjdG9yKCkuZGlmZihtb21lbnRJbnN0YW5jZSwgJ21pbnV0ZScpKTtcclxuICAgIGlmIChob3dPbGQgPCAxKSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfSBlbHNlIGlmIChob3dPbGQgPCA2MCkge1xyXG4gICAgICByZXR1cm4gMzA7XHJcbiAgICB9IGVsc2UgaWYgKGhvd09sZCA8IDE4MCkge1xyXG4gICAgICByZXR1cm4gMzAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDM2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc0NoYW5nZWQodmFsdWU6IG1vbWVudC5Nb21lbnRJbnB1dCwgb21pdFN1ZmZpeD86IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmdldFRpbWUodmFsdWUpICE9PSB0aGlzLmxhc3RUaW1lXHJcbiAgICAgIHx8IHRoaXMuZ2V0TG9jYWxlKHZhbHVlKSAhPT0gdGhpcy5sYXN0TG9jYWxlXHJcbiAgICAgIHx8IG9taXRTdWZmaXggIT09IHRoaXMubGFzdE9taXRTdWZmaXg7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRpbWUodmFsdWU6IG1vbWVudC5Nb21lbnRJbnB1dCk6IG51bWJlciB7XHJcbiAgICBpZiAobW9tZW50LmlzRGF0ZSh2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlLmdldFRpbWUoKTtcclxuICAgIH0gZWxzZSBpZiAobW9tZW50LmlzTW9tZW50KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gdmFsdWUudmFsdWVPZigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG1vbWVudENvbnN0cnVjdG9yKHZhbHVlKS52YWx1ZU9mKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldExvY2FsZSh2YWx1ZTogbW9tZW50Lk1vbWVudElucHV0KTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gbW9tZW50LmlzTW9tZW50KHZhbHVlKSA/IHZhbHVlLmxvY2FsZSgpIDogbW9tZW50LmxvY2FsZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuY29uc3QgbW9tZW50Q29uc3RydWN0b3IgPSBtb21lbnQ7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhbVV0YycgfSlcclxuZXhwb3J0IGNsYXNzIFV0Y1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IERhdGUgfCBtb21lbnQuTW9tZW50IHwgc3RyaW5nIHwgbnVtYmVyKTogbW9tZW50Lk1vbWVudCB7XHJcbiAgICByZXR1cm4gbW9tZW50Q29uc3RydWN0b3IodmFsdWUpLnV0YygpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR1hfTU9NRU5UX09QVElPTlMsIE5neE1vbWVudE9wdGlvbnMgfSBmcm9tICcuL21vbWVudC1vcHRpb25zJztcclxuXHJcbmltcG9ydCB7IEFkZFBpcGUgfSBmcm9tICcuL2FkZC5waXBlJztcclxuaW1wb3J0IHsgQ2FsZW5kYXJQaXBlIH0gZnJvbSAnLi9jYWxlbmRhci5waXBlJztcclxuaW1wb3J0IHsgRGF0ZUZvcm1hdFBpcGUgfSBmcm9tICcuL2RhdGUtZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBEaWZmZXJlbmNlUGlwZSB9IGZyb20gJy4vZGlmZmVyZW5jZS5waXBlJztcclxuaW1wb3J0IHsgRHVyYXRpb25QaXBlIH0gZnJvbSAnLi9kdXJhdGlvbi5waXBlJztcclxuaW1wb3J0IHsgRnJvbVVuaXhQaXBlIH0gZnJvbSAnLi9mcm9tLXVuaXgucGlwZSc7XHJcbmltcG9ydCB7IEZyb21VdGNQaXBlIH0gZnJvbSAnLi9mcm9tLXV0Yy5waXBlJztcclxuaW1wb3J0IHsgSXNBZnRlclBpcGUgfSBmcm9tICcuL2lzLWFmdGVyLnBpcGUnO1xyXG5pbXBvcnQgeyBJc0JlZm9yZVBpcGUgfSBmcm9tICcuL2lzLWJlZm9yZS5waXBlJztcclxuaW1wb3J0IHsgTG9jYWxUaW1lUGlwZSB9IGZyb20gJy4vbG9jYWwucGlwZSc7XHJcbmltcG9ydCB7IExvY2FsZVBpcGUgfSBmcm9tICcuL2xvY2FsZS5waXBlJztcclxuaW1wb3J0IHsgUGFyc2VQaXBlIH0gZnJvbSAnLi9wYXJzZS5waXBlJztcclxuaW1wb3J0IHsgUGFyc2Vab25lUGlwZSB9IGZyb20gJy4vcGFyc2Utem9uZS5waXBlJztcclxuaW1wb3J0IHsgU3VidHJhY3RQaXBlIH0gZnJvbSAnLi9zdWJ0cmFjdC5waXBlJztcclxuaW1wb3J0IHsgVGltZUFnb1BpcGUgfSBmcm9tICcuL3RpbWUtYWdvLnBpcGUnO1xyXG5pbXBvcnQgeyBVdGNQaXBlIH0gZnJvbSAnLi91dGMucGlwZSc7XHJcblxyXG5jb25zdCBBTkdVTEFSX01PTUVOVF9QSVBFUyA9IFtcclxuICBBZGRQaXBlLFxyXG4gIENhbGVuZGFyUGlwZSxcclxuICBEYXRlRm9ybWF0UGlwZSxcclxuICBEaWZmZXJlbmNlUGlwZSxcclxuICBEdXJhdGlvblBpcGUsXHJcbiAgRnJvbVVuaXhQaXBlLFxyXG4gIFBhcnNlUGlwZSxcclxuICBTdWJ0cmFjdFBpcGUsXHJcbiAgVGltZUFnb1BpcGUsXHJcbiAgVXRjUGlwZSxcclxuICBGcm9tVXRjUGlwZSxcclxuICBMb2NhbFRpbWVQaXBlLFxyXG4gIExvY2FsZVBpcGUsXHJcbiAgUGFyc2Vab25lUGlwZSxcclxuICBJc0JlZm9yZVBpcGUsXHJcbiAgSXNBZnRlclBpcGVcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBBTkdVTEFSX01PTUVOVF9QSVBFUyxcclxuICBleHBvcnRzOiBBTkdVTEFSX01PTUVOVF9QSVBFU1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9tZW50TW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChvcHRpb25zPzogTmd4TW9tZW50T3B0aW9ucyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE1vbWVudE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTkdYX01PTUVOVF9PUFRJT05TLCB1c2VWYWx1ZToge1xyXG4gICAgICAgICAgICAuLi5vcHRpb25zXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsibW9tZW50Q29uc3RydWN0b3IiLCJtb21lbnQuaXNNb21lbnQiLCJtb21lbnQuZHVyYXRpb24iLCJtb21lbnQucmVsYXRpdmVUaW1lVGhyZXNob2xkIiwibW9tZW50LnVuaXgiLCJtb21lbnQudXRjIiwibG9jYWxlIiwibW9tZW50LnBhcnNlWm9uZSIsIm1vbWVudC5pc0RhdGUiLCJtb21lbnQubG9jYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBS00saUJBQWlCLEdBQUcsTUFBTTtBQUVoQztJQUFBO0tBUUM7Ozs7Ozs7SUFORywyQkFBUzs7Ozs7O0lBQVQsVUFBVSxLQUFVLEVBQUUsTUFBZ0MsRUFBRSxJQUErQjtRQUNuRixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsS0FBSyxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksT0FBTyxJQUFJLEtBQUssV0FBVyxDQUFDLEVBQUU7WUFDOUYsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsT0FBTyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3JEOztnQkFQSixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFOztJQVF2QixjQUFDO0NBUkQ7Ozs7Ozs7SUNETUEsbUJBQWlCLEdBQUcsTUFBTTtBQUVoQztJQWFFLHNCQUFvQixLQUF3QixFQUFVLE1BQWM7UUFBcEUsaUJBV0M7UUFYbUIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFROztRQUVsRSxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRS9CLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7O1FBSXBCLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7WUFDakQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEdBQUEsQ0FBQyxDQUFDO1NBQ2xELENBQUMsQ0FBQztLQUNKOzs7Ozs7SUFFRCxnQ0FBUzs7Ozs7SUFBVCxVQUFVLEtBQTJCO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7O1lBQy9DLE9BQU8sR0FBUSxJQUFJOztZQUNuQixhQUFhLEdBQVEsSUFBSTtRQUU3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9DLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDcEIsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLElBQUksQ0FBQ0MsUUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUM1RCxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNuQjtxQkFBTTtvQkFDTCxhQUFhLEdBQUdELG1CQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM1QzthQUNGO1NBQ0Y7UUFFRCxPQUFPQSxtQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ2xFOzs7O0lBRUQsa0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtZQUN6QixZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckI7UUFFRCxJQUFJLFlBQVksQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO1lBQzNCLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM1QjtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDaEM7Ozs7O0lBRWMsc0JBQVM7Ozs7SUFBeEIsVUFBeUIsTUFBYzs7UUFFckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7WUFDMUIsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1lBQ2pELElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFOztvQkFDM0IsY0FBWSxHQUFHLFlBQVksQ0FBQywyQkFBMkIsRUFBRTtnQkFDL0QsWUFBWSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUM7b0JBQzVDLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQzs7d0JBRXZCLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQzs7d0JBR3ZDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDM0IsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDaEMsRUFBRSxjQUFZLENBQUMsQ0FBQztpQkFDbEIsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtLQUNGOzs7O0lBRWMsd0JBQVc7OztJQUExQjtRQUNFLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRTtZQUN0QixNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QyxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUMxQixZQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUM5QjtLQUNGOzs7O0lBRWMsd0NBQTJCOzs7SUFBMUM7O1lBQ1EsR0FBRyxHQUFHQSxtQkFBaUIsRUFBRTs7WUFDekIsUUFBUSxHQUFHQSxtQkFBaUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQzs7WUFDNUQsY0FBYyxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFO1FBQ3pELE9BQU8sY0FBYyxHQUFHLElBQUksQ0FBQztLQUM5Qjs7OztJQWxGYyxpQkFBSSxHQUFHLENBQUMsQ0FBQztJQUVULGtCQUFLLEdBQWtCLElBQUksQ0FBQztJQUM1QixxQkFBUSxHQUE4QixJQUFJLENBQUM7O2dCQVQzRCxJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7Ozs7Z0JBTjFCLGlCQUFpQjtnQkFBMEMsTUFBTTs7SUErRmhGLG1CQUFDO0NBekZEOzs7Ozs7O0lDSE1BLG1CQUFpQixHQUFHLE1BQU07QUFFaEM7SUFBQTtLQU1DOzs7Ozs7SUFKQyxrQ0FBUzs7Ozs7SUFBVCxVQUFVLEtBQTZDO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDckUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLE9BQU8sRUFBRSxDQUFDO1NBQUU7UUFDMUIsT0FBT0EsbUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2pEOztnQkFMRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFOztJQU05QixxQkFBQztDQU5EOzs7Ozs7O0lDRk1BLG1CQUFpQixHQUFHLE1BQU07QUFFaEM7SUFBQTtLQVlDOzs7Ozs7OztJQVZDLGtDQUFTOzs7Ozs7O0lBQVQsVUFBVSxLQUEyQixFQUMzQixVQUFnQyxFQUNoQyxJQUE2QixFQUM3QixTQUFtQjs7WUFFckIsSUFBSSxHQUFHQSxtQkFBaUIsQ0FBQyxLQUFLLENBQUM7O1lBQy9CLEtBQUssR0FBRyxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUlBLG1CQUFpQixDQUFDLFVBQVUsQ0FBQyxHQUFHQSxtQkFBaUIsRUFBRTtRQUV6RixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztLQUMxQzs7Z0JBWEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTs7SUFZOUIscUJBQUM7Q0FaRDs7Ozs7O0FDUEE7QUFFQSxJQUFhLGtCQUFrQixHQUFxQyxJQUFJLGNBQWMsQ0FBbUIsb0JBQW9CLENBQUM7Ozs7OztBQ0Y5SDtJQVVFLHNCQUFvRCxhQUFnQztRQUZwRixpQkFBWSxHQUFrQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFHNUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUNuQzs7Ozs7O0lBRUQsZ0NBQVM7Ozs7O0lBQVQsVUFBVSxLQUFVO1FBQUUsY0FBaUI7YUFBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO1lBQWpCLDZCQUFpQjs7UUFDckMsSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDcEQsTUFBTSxJQUFJLEtBQUssQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO1NBQ3RFO1FBQ0QsT0FBT0UsUUFBZSxDQUFDLEtBQUsscUJBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUEwQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzVGOzs7OztJQUVPLG9DQUFhOzs7O0lBQXJCLFVBQXNCLGFBQStCO1FBQXJELGlCQVlDO1FBWEMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsNEJBQTRCLEVBQUU7O2dCQUMxQyxLQUFLLEdBQWtCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDOztnQkFDOUUsYUFBYSxHQUFrQixLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUEsQ0FBQztZQUNqRyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFDeEJDLHFCQUE0QixDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUN0RixDQUFDLENBQUM7U0FDSjtLQUNGOztnQkE1QkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTs7OztnREFLYixRQUFRLFlBQUksTUFBTSxTQUFDLGtCQUFrQjs7SUF5QnBELG1CQUFDO0NBOUJEOzs7Ozs7O0lDQUE7S0FRQzs7Ozs7O0lBTkMsZ0NBQVM7Ozs7O0lBQVQsVUFBVSxLQUFVO1FBQUUsY0FBaUI7YUFBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO1lBQWpCLDZCQUFpQjs7UUFDckMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsT0FBT0MsSUFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzNCOztnQkFQRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFOztJQVE1QixtQkFBQztDQVJEOzs7Ozs7QUNMQTtJQUdNSixtQkFBaUIsR0FBRyxNQUFNO0FBRWhDO0lBQUE7S0FLQzs7Ozs7O0lBSEMsNkJBQVM7Ozs7O0lBQVQsVUFBVSxLQUFhLEVBQUUsTUFBYztRQUNyQyxPQUFPQSxtQkFBaUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDekM7O2dCQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7O0lBS3pCLGdCQUFDO0NBTEQ7Ozs7Ozs7SUNBQTtLQUtDOzs7Ozs7SUFIQywrQkFBUzs7Ozs7SUFBVCxVQUFVLEtBQVU7UUFBRSxjQUFpQjthQUFqQixVQUFpQixFQUFqQixxQkFBaUIsRUFBakIsSUFBaUI7WUFBakIsNkJBQWlCOztRQUNyQyxPQUFPSyxHQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDMUI7O2dCQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7O0lBSzNCLGtCQUFDO0NBTEQ7Ozs7OztBQ0xBO0lBSU1MLG1CQUFpQixHQUFHLE1BQU07QUFFaEM7SUFBQTtLQVdDOzs7Ozs7O0lBTkMsK0JBQVM7Ozs7OztJQUFULFVBQVUsS0FBMkIsRUFDbkMsVUFBZ0MsRUFDaEMsSUFBZ0M7UUFDaEMsT0FBT0EsbUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDQSxtQkFBaUIsQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM5RTs7Z0JBVEYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxXQUFXO2lCQUNsQjs7SUFTRCxrQkFBQztDQVhEOzs7Ozs7QUNOQTtJQUlNQSxtQkFBaUIsR0FBRyxNQUFNO0FBRWhDO0lBQUE7S0FXQzs7Ozs7OztJQU5DLGdDQUFTOzs7Ozs7SUFBVCxVQUFVLEtBQTJCLEVBQ25DLFVBQWdDLEVBQ2hDLElBQWdDO1FBQ2hDLE9BQU9BLG1CQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQ0EsbUJBQWlCLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDL0U7O2dCQVRGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsWUFBWTtpQkFDbkI7O0lBU0QsbUJBQUM7Q0FYRDs7Ozs7O0FDTkE7SUFHTUEsbUJBQWlCLEdBQUcsTUFBTTtBQUVoQztJQUFBO0tBS0M7Ozs7O0lBSEcsaUNBQVM7Ozs7SUFBVCxVQUFVLEtBQTZDO1FBQ25ELE9BQU9BLG1CQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQzNDOztnQkFKSixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFOztJQUt6QixvQkFBQztDQUxEOzs7Ozs7QUNMQTs7SUFJTUEsbUJBQWlCLEdBQUcsTUFBTTtBQUVoQztJQUFBO0tBS0M7Ozs7OztJQUhDLDhCQUFTOzs7OztJQUFULFVBQVUsS0FBYSxFQUFFTSxTQUFjO1FBQ3JDLE9BQU9OLG1CQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQ00sU0FBTSxDQUFDLENBQUM7S0FDaEQ7O2dCQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7O0lBSzFCLGlCQUFDO0NBTEQ7Ozs7OztBQ05BO0lBR0E7S0FLQzs7Ozs7SUFIQyxpQ0FBUzs7OztJQUFULFVBQVUsS0FBYTtRQUNyQixPQUFPQyxTQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2hDOztnQkFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFOztJQUs3QixvQkFBQztDQUxEOzs7Ozs7O0lDRU1QLG1CQUFpQixHQUFHLE1BQU07QUFFaEM7SUFBQTtLQVFDOzs7Ozs7O0lBTkcsZ0NBQVM7Ozs7OztJQUFULFVBQVUsS0FBVSxFQUFFLE1BQWdDLEVBQUUsSUFBK0I7UUFDbkYsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEtBQUssT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE9BQU8sSUFBSSxLQUFLLFdBQVcsQ0FBQyxFQUFFO1lBQzlGLE1BQU0sSUFBSSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQztTQUMvRDtRQUNELE9BQU9BLG1CQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDMUQ7O2dCQVBKLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7O0lBUTVCLG1CQUFDO0NBUkQ7Ozs7Ozs7SUNGTUEsbUJBQWlCLEdBQUcsTUFBTTtBQUVoQztJQVVFLHFCQUFvQixLQUF3QixFQUFVLE1BQWM7UUFBaEQsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0tBQ25FOzs7Ozs7SUFFRCwrQkFBUzs7Ozs7SUFBVCxVQUFVLEtBQXlCLEVBQUUsVUFBb0I7UUFDdkQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUM7WUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBR0EsbUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDQSxtQkFBaUIsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBRWhGO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDdEI7Ozs7SUFFRCxpQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEI7Ozs7SUFFTyxpQ0FBVzs7O0lBQW5CO1FBQUEsaUJBb0JDO1FBbkJDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixPQUFPO1NBQ1I7O1lBRUssY0FBYyxHQUFHQSxtQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDOztZQUNsRCxZQUFZLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUk7UUFFdEUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1lBQ2hELElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO2dCQUNqQyxPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUM7b0JBQ3ZCLEtBQUksQ0FBQyxRQUFRLEdBQUdBLG1CQUFpQixDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUNBLG1CQUFpQixFQUFFLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUVqRyxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztvQkFDekIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEdBQUEsQ0FBQyxDQUFDO2lCQUNsRCxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQ2xCO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRixDQUFDLENBQUM7S0FDSjs7OztJQUVPLGlDQUFXOzs7SUFBbkI7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDMUI7S0FDRjs7Ozs7SUFFTywyQ0FBcUI7Ozs7SUFBN0IsVUFBOEIsY0FBNkI7O1lBQ25ELE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDQSxtQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDM0UsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2QsT0FBTyxDQUFDLENBQUM7U0FDVjthQUFNLElBQUksTUFBTSxHQUFHLEVBQUUsRUFBRTtZQUN0QixPQUFPLEVBQUUsQ0FBQztTQUNYO2FBQU0sSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ3ZCLE9BQU8sR0FBRyxDQUFDO1NBQ1o7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRjs7Ozs7O0lBRU8sZ0NBQVU7Ozs7O0lBQWxCLFVBQW1CLEtBQXlCLEVBQUUsVUFBb0I7UUFDaEUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRO2VBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVU7ZUFDekMsVUFBVSxLQUFLLElBQUksQ0FBQyxjQUFjLENBQUM7S0FDekM7Ozs7O0lBRU8sNkJBQU87Ozs7SUFBZixVQUFnQixLQUF5QjtRQUN2QyxJQUFJUSxNQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDeEIsT0FBTyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDeEI7YUFBTSxJQUFJUCxRQUFlLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakMsT0FBTyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDeEI7YUFBTTtZQUNMLE9BQU9ELG1CQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzNDO0tBQ0Y7Ozs7O0lBRU8sK0JBQVM7Ozs7SUFBakIsVUFBa0IsS0FBeUI7UUFDekMsT0FBT0MsUUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBR1EsTUFBYSxFQUFFLENBQUM7S0FDbEU7O2dCQTlGRixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUM7Ozs7Z0JBTHhCLGlCQUFpQjtnQkFBNEIsTUFBTTs7SUFvR2pFLGtCQUFDO0NBL0ZEOzs7Ozs7QUNQQTtJQUdNVCxtQkFBaUIsR0FBRyxNQUFNO0FBRWhDO0lBQUE7S0FLQzs7Ozs7SUFIQywyQkFBUzs7OztJQUFULFVBQVUsS0FBNkM7UUFDckQsT0FBT0EsbUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDdkM7O2dCQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7O0lBS3ZCLGNBQUM7Q0FMRDs7Ozs7OztJQ2VNLG9CQUFvQixHQUFHO0lBQzNCLE9BQU87SUFDUCxZQUFZO0lBQ1osY0FBYztJQUNkLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztJQUNYLE9BQU87SUFDUCxXQUFXO0lBQ1gsYUFBYTtJQUNiLFVBQVU7SUFDVixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7Q0FDWjtBQUVEO0lBQUE7S0FpQkM7Ozs7O0lBWlEsb0JBQU87Ozs7SUFBZCxVQUFlLE9BQTBCO1FBQ3ZDLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsZUFDaEMsT0FBTyxDQUNYO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO0tBQ0g7O2dCQWhCRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLG9CQUFvQjtvQkFDbEMsT0FBTyxFQUFFLG9CQUFvQjtpQkFDOUI7O0lBY0QsbUJBQUM7Q0FqQkQ7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/smartadmin-plugins/bower_components/jquery-nestable/jquery.nestable.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/smartadmin-plugins/bower_components/jquery-nestable/jquery.nestable.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Nestable jQuery Plugin - Copyright (c) 2012 David Bushell - http://dbushell.com/\n * Dual-licensed under the BSD or MIT licenses\n */\n;(function($, window, document, undefined)\n{\n    var hasTouch = 'ontouchstart' in document;\n\n    /**\n     * Detect CSS pointer-events property\n     * events are normally disabled on the dragging element to avoid conflicts\n     * https://github.com/ausi/Feature-detection-technique-for-pointer-events/blob/master/modernizr-pointerevents.js\n     */\n    var hasPointerEvents = (function()\n    {\n        var el    = document.createElement('div'),\n            docEl = document.documentElement;\n        if (!('pointerEvents' in el.style)) {\n            return false;\n        }\n        el.style.pointerEvents = 'auto';\n        el.style.pointerEvents = 'x';\n        docEl.appendChild(el);\n        var supports = window.getComputedStyle && window.getComputedStyle(el, '').pointerEvents === 'auto';\n        docEl.removeChild(el);\n        return !!supports;\n    })();\n\n    var defaults = {\n            listNodeName    : 'ol',\n            itemNodeName    : 'li',\n            rootClass       : 'dd',\n            listClass       : 'dd-list',\n            itemClass       : 'dd-item',\n            dragClass       : 'dd-dragel',\n            handleClass     : 'dd-handle',\n            collapsedClass  : 'dd-collapsed',\n            placeClass      : 'dd-placeholder',\n            noDragClass     : 'dd-nodrag',\n            emptyClass      : 'dd-empty',\n            expandBtnHTML   : '<button data-action=\"expand\" type=\"button\">Expand</button>',\n            collapseBtnHTML : '<button data-action=\"collapse\" type=\"button\">Collapse</button>',\n            group           : 0,\n            maxDepth        : 5,\n            threshold       : 20\n        };\n\n    function Plugin(element, options)\n    {\n        this.w  = $(document);\n        this.el = $(element);\n        this.options = $.extend({}, defaults, options);\n        this.init();\n    }\n\n    Plugin.prototype = {\n\n        init: function()\n        {\n            var list = this;\n\n            list.reset();\n\n            list.el.data('nestable-group', this.options.group);\n\n            list.placeEl = $('<div class=\"' + list.options.placeClass + '\"/>');\n\n            $.each(this.el.find(list.options.itemNodeName), function(k, el) {\n                list.setParent($(el));\n            });\n\n            list.el.on('click', 'button', function(e) {\n                if (list.dragEl) {\n                    return;\n                }\n                var target = $(e.currentTarget),\n                    action = target.data('action'),\n                    item   = target.parent(list.options.itemNodeName);\n                if (action === 'collapse') {\n                    list.collapseItem(item);\n                }\n                if (action === 'expand') {\n                    list.expandItem(item);\n                }\n            });\n\n            var onStartEvent = function(e)\n            {\n                var handle = $(e.target);\n                if (!handle.hasClass(list.options.handleClass)) {\n                    if (handle.closest('.' + list.options.noDragClass).length) {\n                        return;\n                    }\n                    handle = handle.closest('.' + list.options.handleClass);\n                }\n\n                if (!handle.length || list.dragEl) {\n                    return;\n                }\n\n                list.isTouch = /^touch/.test(e.type);\n                if (list.isTouch && e.touches.length !== 1) {\n                    return;\n                }\n\n                e.preventDefault();\n                list.dragStart(e.touches ? e.touches[0] : e);\n            };\n\n            var onMoveEvent = function(e)\n            {\n                if (list.dragEl) {\n                    e.preventDefault();\n                    list.dragMove(e.touches ? e.touches[0] : e);\n                }\n            };\n\n            var onEndEvent = function(e)\n            {\n                if (list.dragEl) {\n                    e.preventDefault();\n                    list.dragStop(e.touches ? e.touches[0] : e);\n                }\n            };\n\n            if (hasTouch) {\n                list.el[0].addEventListener('touchstart', onStartEvent, false);\n                window.addEventListener('touchmove', onMoveEvent, false);\n                window.addEventListener('touchend', onEndEvent, false);\n                window.addEventListener('touchcancel', onEndEvent, false);\n            }\n\n            list.el.on('mousedown', onStartEvent);\n            list.w.on('mousemove', onMoveEvent);\n            list.w.on('mouseup', onEndEvent);\n\n        },\n\n        serialize: function()\n        {\n            var data,\n                depth = 0,\n                list  = this;\n                step  = function(level, depth)\n                {\n                    var array = [ ],\n                        items = level.children(list.options.itemNodeName);\n                    items.each(function()\n                    {\n                        var li   = $(this),\n                            item = $.extend({}, li.data()),\n                            sub  = li.children(list.options.listNodeName);\n                        if (sub.length) {\n                            item.children = step(sub, depth + 1);\n                        }\n                        array.push(item);\n                    });\n                    return array;\n                };\n            data = step(list.el.find(list.options.listNodeName).first(), depth);\n            return data;\n        },\n\n        serialise: function()\n        {\n            return this.serialize();\n        },\n\n        reset: function()\n        {\n            this.mouse = {\n                offsetX   : 0,\n                offsetY   : 0,\n                startX    : 0,\n                startY    : 0,\n                lastX     : 0,\n                lastY     : 0,\n                nowX      : 0,\n                nowY      : 0,\n                distX     : 0,\n                distY     : 0,\n                dirAx     : 0,\n                dirX      : 0,\n                dirY      : 0,\n                lastDirX  : 0,\n                lastDirY  : 0,\n                distAxX   : 0,\n                distAxY   : 0\n            };\n            this.isTouch    = false;\n            this.moving     = false;\n            this.dragEl     = null;\n            this.dragRootEl = null;\n            this.dragDepth  = 0;\n            this.hasNewRoot = false;\n            this.pointEl    = null;\n        },\n\n        expandItem: function(li)\n        {\n            li.removeClass(this.options.collapsedClass);\n            li.children('[data-action=\"expand\"]').hide();\n            li.children('[data-action=\"collapse\"]').show();\n            li.children(this.options.listNodeName).show();\n        },\n\n        collapseItem: function(li)\n        {\n            var lists = li.children(this.options.listNodeName);\n            if (lists.length) {\n                li.addClass(this.options.collapsedClass);\n                li.children('[data-action=\"collapse\"]').hide();\n                li.children('[data-action=\"expand\"]').show();\n                li.children(this.options.listNodeName).hide();\n            }\n        },\n\n        expandAll: function()\n        {\n            var list = this;\n            list.el.find(list.options.itemNodeName).each(function() {\n                list.expandItem($(this));\n            });\n        },\n\n        collapseAll: function()\n        {\n            var list = this;\n            list.el.find(list.options.itemNodeName).each(function() {\n                list.collapseItem($(this));\n            });\n        },\n\n        setParent: function(li)\n        {\n            if (li.children(this.options.listNodeName).length) {\n                li.prepend($(this.options.expandBtnHTML));\n                li.prepend($(this.options.collapseBtnHTML));\n            }\n            li.children('[data-action=\"expand\"]').hide();\n        },\n\n        unsetParent: function(li)\n        {\n            li.removeClass(this.options.collapsedClass);\n            li.children('[data-action]').remove();\n            li.children(this.options.listNodeName).remove();\n        },\n\n        dragStart: function(e)\n        {\n            var mouse    = this.mouse,\n                target   = $(e.target),\n                dragItem = target.closest(this.options.itemNodeName);\n\n            this.placeEl.css('height', dragItem.height());\n\n            mouse.offsetX = e.offsetX !== undefined ? e.offsetX : e.pageX - target.offset().left;\n            mouse.offsetY = e.offsetY !== undefined ? e.offsetY : e.pageY - target.offset().top;\n            mouse.startX = mouse.lastX = e.pageX;\n            mouse.startY = mouse.lastY = e.pageY;\n\n            this.dragRootEl = this.el;\n\n            this.dragEl = $(document.createElement(this.options.listNodeName)).addClass(this.options.listClass + ' ' + this.options.dragClass);\n            this.dragEl.css('width', dragItem.width());\n\n            dragItem.after(this.placeEl);\n            dragItem[0].parentNode.removeChild(dragItem[0]);\n            dragItem.appendTo(this.dragEl);\n\n            $(document.body).append(this.dragEl);\n            this.dragEl.css({\n                'left' : e.pageX - mouse.offsetX,\n                'top'  : e.pageY - mouse.offsetY\n            });\n            // total depth of dragging item\n            var i, depth,\n                items = this.dragEl.find(this.options.itemNodeName);\n            for (i = 0; i < items.length; i++) {\n                depth = $(items[i]).parents(this.options.listNodeName).length;\n                if (depth > this.dragDepth) {\n                    this.dragDepth = depth;\n                }\n            }\n        },\n\n        dragStop: function(e)\n        {\n            var el = this.dragEl.children(this.options.itemNodeName).first();\n            el[0].parentNode.removeChild(el[0]);\n            this.placeEl.replaceWith(el);\n\n            this.dragEl.remove();\n            this.el.trigger('change');\n            if (this.hasNewRoot) {\n                this.dragRootEl.trigger('change');\n            }\n            this.reset();\n        },\n\n        dragMove: function(e)\n        {\n            var list, parent, prev, next, depth,\n                opt   = this.options,\n                mouse = this.mouse;\n\n            this.dragEl.css({\n                'left' : e.pageX - mouse.offsetX,\n                'top'  : e.pageY - mouse.offsetY\n            });\n\n            // mouse position last events\n            mouse.lastX = mouse.nowX;\n            mouse.lastY = mouse.nowY;\n            // mouse position this events\n            mouse.nowX  = e.pageX;\n            mouse.nowY  = e.pageY;\n            // distance mouse moved between events\n            mouse.distX = mouse.nowX - mouse.lastX;\n            mouse.distY = mouse.nowY - mouse.lastY;\n            // direction mouse was moving\n            mouse.lastDirX = mouse.dirX;\n            mouse.lastDirY = mouse.dirY;\n            // direction mouse is now moving (on both axis)\n            mouse.dirX = mouse.distX === 0 ? 0 : mouse.distX > 0 ? 1 : -1;\n            mouse.dirY = mouse.distY === 0 ? 0 : mouse.distY > 0 ? 1 : -1;\n            // axis mouse is now moving on\n            var newAx   = Math.abs(mouse.distX) > Math.abs(mouse.distY) ? 1 : 0;\n\n            // do nothing on first move\n            if (!mouse.moving) {\n                mouse.dirAx  = newAx;\n                mouse.moving = true;\n                return;\n            }\n\n            // calc distance moved on this axis (and direction)\n            if (mouse.dirAx !== newAx) {\n                mouse.distAxX = 0;\n                mouse.distAxY = 0;\n            } else {\n                mouse.distAxX += Math.abs(mouse.distX);\n                if (mouse.dirX !== 0 && mouse.dirX !== mouse.lastDirX) {\n                    mouse.distAxX = 0;\n                }\n                mouse.distAxY += Math.abs(mouse.distY);\n                if (mouse.dirY !== 0 && mouse.dirY !== mouse.lastDirY) {\n                    mouse.distAxY = 0;\n                }\n            }\n            mouse.dirAx = newAx;\n\n            /**\n             * move horizontal\n             */\n            if (mouse.dirAx && mouse.distAxX >= opt.threshold) {\n                // reset move distance on x-axis for new phase\n                mouse.distAxX = 0;\n                prev = this.placeEl.prev(opt.itemNodeName);\n                // increase horizontal level if previous sibling exists and is not collapsed\n                if (mouse.distX > 0 && prev.length && !prev.hasClass(opt.collapsedClass)) {\n                    // cannot increase level when item above is collapsed\n                    list = prev.find(opt.listNodeName).last();\n                    // check if depth limit has reached\n                    depth = this.placeEl.parents(opt.listNodeName).length;\n                    if (depth + this.dragDepth <= opt.maxDepth) {\n                        // create new sub-level if one doesn't exist\n                        if (!list.length) {\n                            list = $('<' + opt.listNodeName + '/>').addClass(opt.listClass);\n                            list.append(this.placeEl);\n                            prev.append(list);\n                            this.setParent(prev);\n                        } else {\n                            // else append to next level up\n                            list = prev.children(opt.listNodeName).last();\n                            list.append(this.placeEl);\n                        }\n                    }\n                }\n                // decrease horizontal level\n                if (mouse.distX < 0) {\n                    // we can't decrease a level if an item preceeds the current one\n                    next = this.placeEl.next(opt.itemNodeName);\n                    if (!next.length) {\n                        parent = this.placeEl.parent();\n                        this.placeEl.closest(opt.itemNodeName).after(this.placeEl);\n                        if (!parent.children().length) {\n                            this.unsetParent(parent.parent());\n                        }\n                    }\n                }\n            }\n\n            var isEmpty = false;\n\n            // find list item under cursor\n            if (!hasPointerEvents) {\n                this.dragEl[0].style.visibility = 'hidden';\n            }\n            this.pointEl = $(document.elementFromPoint(e.pageX - document.body.scrollLeft, e.pageY - (window.pageYOffset || document.documentElement.scrollTop)));\n            if (!hasPointerEvents) {\n                this.dragEl[0].style.visibility = 'visible';\n            }\n            if (this.pointEl.hasClass(opt.handleClass)) {\n                this.pointEl = this.pointEl.parent(opt.itemNodeName);\n            }\n            if (this.pointEl.hasClass(opt.emptyClass)) {\n                isEmpty = true;\n            }\n            else if (!this.pointEl.length || !this.pointEl.hasClass(opt.itemClass)) {\n                return;\n            }\n\n            // find parent list of item under cursor\n            var pointElRoot = this.pointEl.closest('.' + opt.rootClass),\n                isNewRoot   = this.dragRootEl.data('nestable-id') !== pointElRoot.data('nestable-id');\n\n            /**\n             * move vertical\n             */\n            if (!mouse.dirAx || isNewRoot || isEmpty) {\n                // check if groups match if dragging over new root\n                if (isNewRoot && opt.group !== pointElRoot.data('nestable-group')) {\n                    return;\n                }\n                // check depth limit\n                depth = this.dragDepth - 1 + this.pointEl.parents(opt.listNodeName).length;\n                if (depth > opt.maxDepth) {\n                    return;\n                }\n                var before = e.pageY < (this.pointEl.offset().top + this.pointEl.height() / 2);\n                    parent = this.placeEl.parent();\n                // if empty create new list to replace empty placeholder\n                if (isEmpty) {\n                    list = $(document.createElement(opt.listNodeName)).addClass(opt.listClass);\n                    list.append(this.placeEl);\n                    this.pointEl.replaceWith(list);\n                }\n                else if (before) {\n                    this.pointEl.before(this.placeEl);\n                }\n                else {\n                    this.pointEl.after(this.placeEl);\n                }\n                if (!parent.children().length) {\n                    this.unsetParent(parent.parent());\n                }\n                if (!this.dragRootEl.find(opt.itemNodeName).length) {\n                    this.dragRootEl.append('<div class=\"' + opt.emptyClass + '\"/>');\n                }\n                // parent root list has changed\n                if (isNewRoot) {\n                    this.dragRootEl = pointElRoot;\n                    this.hasNewRoot = this.el[0] !== this.dragRootEl[0];\n                }\n            }\n        }\n\n    };\n\n    $.fn.nestable = function(params)\n    {\n        var lists  = this,\n            retval = this;\n\n        lists.each(function()\n        {\n            var plugin = $(this).data(\"nestable\");\n\n            if (!plugin) {\n                $(this).data(\"nestable\", new Plugin(this, params));\n                $(this).data(\"nestable-id\", new Date().getTime());\n            } else {\n                if (typeof params === 'string' && typeof plugin[params] === 'function') {\n                    retval = plugin[params]();\n                }\n            }\n        });\n\n        return retval || lists;\n    };\n\n})(window.jQuery || window.Zepto, window, document);\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/smartadmin-plugins/datatables/datatables.min.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/smartadmin-plugins/datatables/datatables.min.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./node_modules/script-loader/index.js!./node_modules/smartadmin-plugins/bower_components/jquery-nestable/jquery.nestable.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/script-loader!./node_modules/smartadmin-plugins/bower_components/jquery-nestable/jquery.nestable.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !./node_modules/script-loader/addScript.js */ "./node_modules/script-loader/addScript.js")(__webpack_require__(/*! !./node_modules/raw-loader!./node_modules/smartadmin-plugins/bower_components/jquery-nestable/jquery.nestable.js */ "./node_modules/raw-loader/index.js!./node_modules/smartadmin-plugins/bower_components/jquery-nestable/jquery.nestable.js"))

/***/ }),

/***/ "./node_modules/script-loader/index.js!./node_modules/smartadmin-plugins/datatables/datatables.min.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/script-loader!./node_modules/smartadmin-plugins/datatables/datatables.min.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !./node_modules/script-loader/addScript.js */ "./node_modules/script-loader/addScript.js")(__webpack_require__(/*! !./node_modules/raw-loader!./node_modules/smartadmin-plugins/datatables/datatables.min.js */ "./node_modules/raw-loader/index.js!./node_modules/smartadmin-plugins/datatables/datatables.min.js"))

/***/ }),

/***/ "./node_modules/smartadmin-plugins/datatables/datatables.min.css":
/*!***********************************************************************!*\
  !*** ./node_modules/smartadmin-plugins/datatables/datatables.min.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * This combined file was created by the DataTables downloader builder:\n *   https://datatables.net/download\n *\n * To rebuild or modify this file with the latest versions of the included\n * software please visit:\n *   https://datatables.net/download/#bs/pdfmake-0.1.18/dt-1.10.13/b-1.2.4/b-colvis-1.2.4/b-flash-1.2.4/b-html5-1.2.4/b-print-1.2.4/cr-1.3.2/r-2.1.1/se-1.2.0\n *\n * Included libraries:\n *   pdfmake 0.1.18, DataTables 1.10.13, Buttons 1.2.4, Column visibility 1.2.4, Flash export 1.2.4, HTML5 export 1.2.4, Print view 1.2.4, ColReorder 1.3.2, Responsive 2.1.1, Select 1.2.0\n */\n\ntable.dataTable{clear:both;margin-top:6px !important;margin-bottom:6px !important;max-width:none !important;border-collapse:separate !important}\n\ntable.dataTable td,table.dataTable th{box-sizing:content-box}\n\ntable.dataTable td.dataTables_empty,table.dataTable th.dataTables_empty{text-align:center}\n\ntable.dataTable.nowrap th,table.dataTable.nowrap td{white-space:nowrap}\n\ndiv.dataTables_wrapper div.dataTables_length label{font-weight:normal;text-align:left;white-space:nowrap}\n\ndiv.dataTables_wrapper div.dataTables_length select{width:75px;display:inline-block}\n\ndiv.dataTables_wrapper div.dataTables_filter{text-align:right}\n\ndiv.dataTables_wrapper div.dataTables_filter label{font-weight:normal;white-space:nowrap;text-align:left}\n\ndiv.dataTables_wrapper div.dataTables_filter input{margin-left:0.5em;display:inline-block;width:auto}\n\ndiv.dataTables_wrapper div.dataTables_info{padding-top:8px;white-space:nowrap}\n\ndiv.dataTables_wrapper div.dataTables_paginate{margin:0;white-space:nowrap;text-align:right}\n\ndiv.dataTables_wrapper div.dataTables_paginate ul.pagination{margin:2px 0;white-space:nowrap}\n\ndiv.dataTables_wrapper div.dataTables_processing{position:absolute;top:50%;left:50%;width:200px;margin-left:-100px;margin-top:-26px;text-align:center;padding:1em 0}\n\ntable.dataTable thead>tr>th.sorting_asc,table.dataTable thead>tr>th.sorting_desc,table.dataTable thead>tr>th.sorting,table.dataTable thead>tr>td.sorting_asc,table.dataTable thead>tr>td.sorting_desc,table.dataTable thead>tr>td.sorting{padding-right:30px}\n\ntable.dataTable thead>tr>th:active,table.dataTable thead>tr>td:active{outline:none}\n\ntable.dataTable thead .sorting,table.dataTable thead .sorting_asc,table.dataTable thead .sorting_desc,table.dataTable thead .sorting_asc_disabled,table.dataTable thead .sorting_desc_disabled{cursor:pointer;position:relative}\n\ntable.dataTable thead .sorting:after,table.dataTable thead .sorting_asc:after,table.dataTable thead .sorting_desc:after,table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_desc_disabled:after{position:absolute;bottom:8px;right:8px;display:block;font-family:'Glyphicons Halflings';opacity:0.5}\n\ntable.dataTable thead .sorting:after{opacity:0.2;content:\"\\e150\"}\n\ntable.dataTable thead .sorting_asc:after{content:\"\\e155\"}\n\ntable.dataTable thead .sorting_desc:after{content:\"\\e156\"}\n\ntable.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_desc_disabled:after{color:#eee}\n\ndiv.dataTables_scrollHead table.dataTable{margin-bottom:0 !important}\n\ndiv.dataTables_scrollBody table{border-top:none;margin-top:0 !important;margin-bottom:0 !important}\n\ndiv.dataTables_scrollBody table thead .sorting:after,div.dataTables_scrollBody table thead .sorting_asc:after,div.dataTables_scrollBody table thead .sorting_desc:after{display:none}\n\ndiv.dataTables_scrollBody table tbody tr:first-child th,div.dataTables_scrollBody table tbody tr:first-child td{border-top:none}\n\ndiv.dataTables_scrollFoot table{margin-top:0 !important;border-top:none}\n\n@media screen and (max-width: 767px){div.dataTables_wrapper div.dataTables_length,div.dataTables_wrapper div.dataTables_filter,div.dataTables_wrapper div.dataTables_info,div.dataTables_wrapper div.dataTables_paginate{text-align:center}}\n\ntable.dataTable.table-condensed>thead>tr>th{padding-right:20px}\n\ntable.dataTable.table-condensed .sorting:after,table.dataTable.table-condensed .sorting_asc:after,table.dataTable.table-condensed .sorting_desc:after{top:6px;right:6px}\n\ntable.table-bordered.dataTable th,table.table-bordered.dataTable td{border-left-width:0}\n\ntable.table-bordered.dataTable th:last-child,table.table-bordered.dataTable th:last-child,table.table-bordered.dataTable td:last-child,table.table-bordered.dataTable td:last-child{border-right-width:0}\n\ntable.table-bordered.dataTable tbody th,table.table-bordered.dataTable tbody td{border-bottom-width:0}\n\ndiv.dataTables_scrollHead table.table-bordered{border-bottom-width:0}\n\ndiv.table-responsive>div.dataTables_wrapper>div.row{margin:0}\n\ndiv.table-responsive>div.dataTables_wrapper>div.row>div[class^=\"col-\"]:first-child{padding-left:0}\n\ndiv.table-responsive>div.dataTables_wrapper>div.row>div[class^=\"col-\"]:last-child{padding-right:0}\n\ndiv.dt-button-info{position:fixed;top:50%;left:50%;width:400px;margin-top:-100px;margin-left:-200px;background-color:white;border:2px solid #111;box-shadow:3px 3px 8px rgba(0,0,0,0.3);border-radius:3px;text-align:center;z-index:21}\n\ndiv.dt-button-info h2{padding:0.5em;margin:0;font-weight:normal;border-bottom:1px solid #ddd;background-color:#f3f3f3}\n\ndiv.dt-button-info>div{padding:1em}\n\nul.dt-button-collection.dropdown-menu{display:block;z-index:2002;-webkit-column-gap:8px;-ms-column-gap:8px;-o-column-gap:8px;column-gap:8px}\n\nul.dt-button-collection.dropdown-menu.fixed{position:fixed;top:50%;left:50%;margin-left:-75px;border-radius:0}\n\nul.dt-button-collection.dropdown-menu.fixed.two-column{margin-left:-150px}\n\nul.dt-button-collection.dropdown-menu.fixed.three-column{margin-left:-225px}\n\nul.dt-button-collection.dropdown-menu.fixed.four-column{margin-left:-300px}\n\nul.dt-button-collection.dropdown-menu>*{-webkit-column-break-inside:avoid;break-inside:avoid}\n\nul.dt-button-collection.dropdown-menu.two-column{width:300px;padding-bottom:1px;-webkit-column-count:2;-ms-column-count:2;-o-column-count:2;column-count:2}\n\nul.dt-button-collection.dropdown-menu.three-column{width:450px;padding-bottom:1px;-webkit-column-count:3;-ms-column-count:3;-o-column-count:3;column-count:3}\n\nul.dt-button-collection.dropdown-menu.four-column{width:600px;padding-bottom:1px;-webkit-column-count:4;-ms-column-count:4;-o-column-count:4;column-count:4}\n\ndiv.dt-button-background{position:fixed;top:0;left:0;width:100%;height:100%;z-index:2001}\n\n@media screen and (max-width: 767px){div.dt-buttons{float:none;width:100%;text-align:center;margin-bottom:0.5em}div.dt-buttons a.btn{float:none}}\n\ntable.DTCR_clonedTable.dataTable{position:absolute !important;background-color:rgba(255,255,255,0.7);z-index:202}\n\ndiv.DTCR_pointer{width:1px;background-color:#337ab7;z-index:201}\n\ntable.dataTable.dtr-inline.collapsed>tbody>tr>td.child,table.dataTable.dtr-inline.collapsed>tbody>tr>th.child,table.dataTable.dtr-inline.collapsed>tbody>tr>td.dataTables_empty{cursor:default !important}\n\ntable.dataTable.dtr-inline.collapsed>tbody>tr>td.child:before,table.dataTable.dtr-inline.collapsed>tbody>tr>th.child:before,table.dataTable.dtr-inline.collapsed>tbody>tr>td.dataTables_empty:before{display:none !important}\n\ntable.dataTable.dtr-inline.collapsed>tbody>tr>td:first-child,table.dataTable.dtr-inline.collapsed>tbody>tr>th:first-child{position:relative;padding-left:30px;cursor:pointer}\n\ntable.dataTable.dtr-inline.collapsed>tbody>tr>td:first-child:before,table.dataTable.dtr-inline.collapsed>tbody>tr>th:first-child:before{top:9px;left:4px;height:14px;width:14px;display:block;position:absolute;color:white;border:2px solid white;border-radius:14px;box-shadow:0 0 3px #444;box-sizing:content-box;text-align:center;font-family:'Courier New', Courier, monospace;line-height:14px;content:'+';background-color:#337ab7}\n\ntable.dataTable.dtr-inline.collapsed>tbody>tr.parent>td:first-child:before,table.dataTable.dtr-inline.collapsed>tbody>tr.parent>th:first-child:before{content:'-';background-color:#d33333}\n\ntable.dataTable.dtr-inline.collapsed>tbody>tr.child td:before{display:none}\n\ntable.dataTable.dtr-inline.collapsed.compact>tbody>tr>td:first-child,table.dataTable.dtr-inline.collapsed.compact>tbody>tr>th:first-child{padding-left:27px}\n\ntable.dataTable.dtr-inline.collapsed.compact>tbody>tr>td:first-child:before,table.dataTable.dtr-inline.collapsed.compact>tbody>tr>th:first-child:before{top:5px;left:4px;height:14px;width:14px;border-radius:14px;line-height:14px;text-indent:3px}\n\ntable.dataTable.dtr-column>tbody>tr>td.control,table.dataTable.dtr-column>tbody>tr>th.control{position:relative;cursor:pointer}\n\ntable.dataTable.dtr-column>tbody>tr>td.control:before,table.dataTable.dtr-column>tbody>tr>th.control:before{top:50%;left:50%;height:16px;width:16px;margin-top:-10px;margin-left:-10px;display:block;position:absolute;color:white;border:2px solid white;border-radius:14px;box-shadow:0 0 3px #444;box-sizing:content-box;text-align:center;font-family:'Courier New', Courier, monospace;line-height:14px;content:'+';background-color:#337ab7}\n\ntable.dataTable.dtr-column>tbody>tr.parent td.control:before,table.dataTable.dtr-column>tbody>tr.parent th.control:before{content:'-';background-color:#d33333}\n\ntable.dataTable>tbody>tr.child{padding:0.5em 1em}\n\ntable.dataTable>tbody>tr.child:hover{background:transparent !important}\n\ntable.dataTable>tbody>tr.child ul.dtr-details{display:inline-block;list-style-type:none;margin:0;padding:0}\n\ntable.dataTable>tbody>tr.child ul.dtr-details li{border-bottom:1px solid #efefef;padding:0.5em 0}\n\ntable.dataTable>tbody>tr.child ul.dtr-details li:first-child{padding-top:0}\n\ntable.dataTable>tbody>tr.child ul.dtr-details li:last-child{border-bottom:none}\n\ntable.dataTable>tbody>tr.child span.dtr-title{display:inline-block;min-width:75px;font-weight:bold}\n\ndiv.dtr-modal{position:fixed;box-sizing:border-box;top:0;left:0;height:100%;width:100%;z-index:100;padding:10em 1em}\n\ndiv.dtr-modal div.dtr-modal-display{position:absolute;top:0;left:0;bottom:0;right:0;width:50%;height:50%;overflow:auto;margin:auto;z-index:102;overflow:auto;background-color:#f5f5f7;border:1px solid black;border-radius:0.5em;box-shadow:0 12px 30px rgba(0,0,0,0.6)}\n\ndiv.dtr-modal div.dtr-modal-content{position:relative;padding:1em}\n\ndiv.dtr-modal div.dtr-modal-close{position:absolute;top:6px;right:6px;width:22px;height:22px;border:1px solid #eaeaea;background-color:#f9f9f9;text-align:center;border-radius:3px;cursor:pointer;z-index:12}\n\ndiv.dtr-modal div.dtr-modal-close:hover{background-color:#eaeaea}\n\ndiv.dtr-modal div.dtr-modal-background{position:fixed;top:0;left:0;right:0;bottom:0;z-index:101;background:rgba(0,0,0,0.6)}\n\n@media screen and (max-width: 767px){div.dtr-modal div.dtr-modal-display{width:95%}}\n\ndiv.dtr-bs-modal table.table tr:first-child td{border-top:none}\n\ntable.dataTable tbody>tr.selected,table.dataTable tbody>tr>.selected{background-color:#08C}\n\ntable.dataTable.stripe tbody>tr.odd.selected,table.dataTable.stripe tbody>tr.odd>.selected,table.dataTable.display tbody>tr.odd.selected,table.dataTable.display tbody>tr.odd>.selected{background-color:#0085c7}\n\ntable.dataTable.hover tbody>tr.selected:hover,table.dataTable.hover tbody>tr>.selected:hover,table.dataTable.display tbody>tr.selected:hover,table.dataTable.display tbody>tr>.selected:hover{background-color:#0083c5}\n\ntable.dataTable.order-column tbody>tr.selected>.sorting_1,table.dataTable.order-column tbody>tr.selected>.sorting_2,table.dataTable.order-column tbody>tr.selected>.sorting_3,table.dataTable.order-column tbody>tr>.selected,table.dataTable.display tbody>tr.selected>.sorting_1,table.dataTable.display tbody>tr.selected>.sorting_2,table.dataTable.display tbody>tr.selected>.sorting_3,table.dataTable.display tbody>tr>.selected{background-color:#0085c8}\n\ntable.dataTable.display tbody>tr.odd.selected>.sorting_1,table.dataTable.order-column.stripe tbody>tr.odd.selected>.sorting_1{background-color:#0081c1}\n\ntable.dataTable.display tbody>tr.odd.selected>.sorting_2,table.dataTable.order-column.stripe tbody>tr.odd.selected>.sorting_2{background-color:#0082c2}\n\ntable.dataTable.display tbody>tr.odd.selected>.sorting_3,table.dataTable.order-column.stripe tbody>tr.odd.selected>.sorting_3{background-color:#0083c4}\n\ntable.dataTable.display tbody>tr.even.selected>.sorting_1,table.dataTable.order-column.stripe tbody>tr.even.selected>.sorting_1{background-color:#0085c8}\n\ntable.dataTable.display tbody>tr.even.selected>.sorting_2,table.dataTable.order-column.stripe tbody>tr.even.selected>.sorting_2{background-color:#0086ca}\n\ntable.dataTable.display tbody>tr.even.selected>.sorting_3,table.dataTable.order-column.stripe tbody>tr.even.selected>.sorting_3{background-color:#0087cb}\n\ntable.dataTable.display tbody>tr.odd>.selected,table.dataTable.order-column.stripe tbody>tr.odd>.selected{background-color:#0081c1}\n\ntable.dataTable.display tbody>tr.even>.selected,table.dataTable.order-column.stripe tbody>tr.even>.selected{background-color:#0085c8}\n\ntable.dataTable.display tbody>tr.selected:hover>.sorting_1,table.dataTable.order-column.hover tbody>tr.selected:hover>.sorting_1{background-color:#007dbb}\n\ntable.dataTable.display tbody>tr.selected:hover>.sorting_2,table.dataTable.order-column.hover tbody>tr.selected:hover>.sorting_2{background-color:#007ebd}\n\ntable.dataTable.display tbody>tr.selected:hover>.sorting_3,table.dataTable.order-column.hover tbody>tr.selected:hover>.sorting_3{background-color:#007fbf}\n\ntable.dataTable.display tbody>tr:hover>.selected,table.dataTable.display tbody>tr>.selected:hover,table.dataTable.order-column.hover tbody>tr:hover>.selected,table.dataTable.order-column.hover tbody>tr>.selected:hover{background-color:#007dbb}\n\ntable.dataTable td.select-checkbox{position:relative}\n\ntable.dataTable td.select-checkbox:before,table.dataTable td.select-checkbox:after{display:block;position:absolute;top:1.2em;left:50%;width:12px;height:12px;box-sizing:border-box}\n\ntable.dataTable td.select-checkbox:before{content:' ';margin-top:-6px;margin-left:-6px;border:1px solid black;border-radius:3px}\n\ntable.dataTable tr.selected td.select-checkbox:after{content:'\\2714';margin-top:-11px;margin-left:-4px;text-align:center;text-shadow:1px 1px #B0BED9, -1px -1px #B0BED9, 1px -1px #B0BED9, -1px 1px #B0BED9}\n\ndiv.dataTables_wrapper span.select-info,div.dataTables_wrapper span.select-item{margin-left:0.5em}\n\n@media screen and (max-width: 640px){div.dataTables_wrapper span.select-info,div.dataTables_wrapper span.select-item{margin-left:0;display:block}}\n\ntable.dataTable tbody tr.selected,table.dataTable tbody th.selected,table.dataTable tbody td.selected{color:white}\n\ntable.dataTable tbody tr.selected a,table.dataTable tbody th.selected a,table.dataTable tbody td.selected a{color:#a2d4ed}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zbWFydGFkbWluLXBsdWdpbnMvZGF0YXRhYmxlcy9kYXRhdGFibGVzLm1pbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7R0FVRzs7QUFFSCxnQkFBZ0IsV0FBVywwQkFBMEIsNkJBQTZCLDBCQUEwQixtQ0FBbUMsQ0FBQzs7QUFBQSxzQ0FBcUUsc0JBQXNCLENBQUM7O0FBQUEsd0VBQXdFLGlCQUFpQixDQUFDOztBQUFBLG9EQUFvRCxrQkFBa0IsQ0FBQzs7QUFBQSxtREFBbUQsbUJBQW1CLGdCQUFnQixrQkFBa0IsQ0FBQzs7QUFBQSxvREFBb0QsV0FBVyxvQkFBb0IsQ0FBQzs7QUFBQSw2Q0FBNkMsZ0JBQWdCLENBQUM7O0FBQUEsbURBQW1ELG1CQUFtQixtQkFBbUIsZUFBZSxDQUFDOztBQUFBLG1EQUFtRCxrQkFBa0IscUJBQXFCLFVBQVUsQ0FBQzs7QUFBQSwyQ0FBMkMsZ0JBQWdCLGtCQUFrQixDQUFDOztBQUFBLCtDQUErQyxTQUFTLG1CQUFtQixnQkFBZ0IsQ0FBQzs7QUFBQSw2REFBNkQsYUFBYSxrQkFBa0IsQ0FBQzs7QUFBQSxpREFBaUQsa0JBQWtCLFFBQVEsU0FBUyxZQUFZLG1CQUFtQixpQkFBaUIsa0JBQWtCLGFBQWEsQ0FBQzs7QUFBQSwwT0FBME8sa0JBQWtCLENBQUM7O0FBQUEsc0VBQXNFLFlBQVksQ0FBQzs7QUFBQSwrTEFBK0wsZUFBZSxpQkFBaUIsQ0FBQzs7QUFBQSw2TkFBNk4sa0JBQWtCLFdBQVcsVUFBVSxjQUFjLG1DQUFtQyxXQUFXLENBQUM7O0FBQUEscUNBQXFDLFlBQVksZUFBZSxDQUFDOztBQUFBLHlDQUF5QyxlQUFlLENBQUM7O0FBQUEsMENBQTBDLGVBQWUsQ0FBQzs7QUFBQSxxR0FBcUcsVUFBVSxDQUFDOztBQUFBLDBDQUEwQywwQkFBMEIsQ0FBQzs7QUFBQSxnQ0FBZ0MsZ0JBQWdCLHdCQUF3QiwwQkFBMEIsQ0FBQzs7QUFBQSx3S0FBd0ssWUFBWSxDQUFDOztBQUFBLGdIQUFnSCxlQUFlLENBQUM7O0FBQUEsZ0NBQWdDLHdCQUF3QixlQUFlLENBQUM7O0FBQUEscUNBQXFDLG9MQUFvTCxpQkFBaUIsQ0FBQyxDQUFDOztBQUFBLDRDQUE0QyxrQkFBa0IsQ0FBQzs7QUFBQSxzSkFBc0osUUFBUSxTQUFTLENBQUM7O0FBQUEsb0VBQW9FLG1CQUFtQixDQUFDOztBQUFBLG9MQUFvTCxvQkFBb0IsQ0FBQzs7QUFBQSxnRkFBZ0YscUJBQXFCLENBQUM7O0FBQUEsK0NBQStDLHFCQUFxQixDQUFDOztBQUFBLG9EQUFvRCxRQUFRLENBQUM7O0FBQUEsbUZBQW1GLGNBQWMsQ0FBQzs7QUFBQSxrRkFBa0YsZUFBZSxDQUFDOztBQUczbEksbUJBQW1CLGVBQWUsUUFBUSxTQUFTLFlBQVksa0JBQWtCLG1CQUFtQix1QkFBdUIsc0JBQXNCLHVDQUF1QyxrQkFBa0Isa0JBQWtCLFVBQVUsQ0FBQzs7QUFBQSxzQkFBc0IsY0FBYyxTQUFTLG1CQUFtQiw2QkFBNkIsd0JBQXdCLENBQUM7O0FBQUEsdUJBQXVCLFdBQVcsQ0FBQzs7QUFBQSxzQ0FBc0MsY0FBYyxhQUFhLHVCQUF1QixBQUFvQixtQkFBbUIsa0JBQWtCLGNBQWMsQ0FBQzs7QUFBQSw0Q0FBNEMsZUFBZSxRQUFRLFNBQVMsa0JBQWtCLGVBQWUsQ0FBQzs7QUFBQSx1REFBdUQsa0JBQWtCLENBQUM7O0FBQUEseURBQXlELGtCQUFrQixDQUFDOztBQUFBLHdEQUF3RCxrQkFBa0IsQ0FBQzs7QUFBQSx3Q0FBd0Msa0NBQWtDLGtCQUFrQixDQUFDOztBQUFBLGlEQUFpRCxZQUFZLG1CQUFtQix1QkFBdUIsQUFBb0IsbUJBQW1CLGtCQUFrQixjQUFjLENBQUM7O0FBQUEsbURBQW1ELFlBQVksbUJBQW1CLHVCQUF1QixBQUFvQixtQkFBbUIsa0JBQWtCLGNBQWMsQ0FBQzs7QUFBQSxrREFBa0QsWUFBWSxtQkFBbUIsdUJBQXVCLEFBQW9CLG1CQUFtQixrQkFBa0IsY0FBYyxDQUFDOztBQUFBLHlCQUF5QixlQUFlLE1BQU0sT0FBTyxXQUFXLFlBQVksWUFBWSxDQUFDOztBQUFBLHFDQUFxQyxlQUFlLFdBQVcsV0FBVyxrQkFBa0IsbUJBQW1CLENBQUMscUJBQXFCLFVBQVUsQ0FBQyxDQUFDOztBQUd0c0QsaUNBQWlDLDZCQUE2Qix1Q0FBdUMsV0FBVyxDQUFDOztBQUFBLGlCQUFpQixVQUFVLHlCQUF5QixXQUFXLENBQUM7O0FBR2pMLGdMQUFnTCx5QkFBeUIsQ0FBQzs7QUFBQSxxTUFBcU0sdUJBQXVCLENBQUM7O0FBQUEsMEhBQTBILGtCQUFrQixrQkFBa0IsY0FBYyxDQUFDOztBQUFBLHdJQUF3SSxRQUFRLFNBQVMsWUFBWSxXQUFXLGNBQWMsa0JBQWtCLFlBQVksdUJBQXVCLG1CQUFtQix3QkFBd0IsdUJBQXVCLGtCQUFrQiw4Q0FBOEMsaUJBQWlCLFlBQVksd0JBQXdCLENBQUM7O0FBQUEsc0pBQXNKLFlBQVksd0JBQXdCLENBQUM7O0FBQUEsOERBQThELFlBQVksQ0FBQzs7QUFBQSwwSUFBMEksaUJBQWlCLENBQUM7O0FBQUEsd0pBQXdKLFFBQVEsU0FBUyxZQUFZLFdBQVcsbUJBQW1CLGlCQUFpQixlQUFlLENBQUM7O0FBQUEsOEZBQThGLGtCQUFrQixjQUFjLENBQUM7O0FBQUEsNEdBQTRHLFFBQVEsU0FBUyxZQUFZLFdBQVcsaUJBQWlCLGtCQUFrQixjQUFjLGtCQUFrQixZQUFZLHVCQUF1QixtQkFBbUIsd0JBQXdCLHVCQUF1QixrQkFBa0IsOENBQThDLGlCQUFpQixZQUFZLHdCQUF3QixDQUFDOztBQUFBLDBIQUEwSCxZQUFZLHdCQUF3QixDQUFDOztBQUFBLCtCQUErQixpQkFBaUIsQ0FBQzs7QUFBQSxxQ0FBcUMsaUNBQWlDLENBQUM7O0FBQUEsOENBQThDLHFCQUFxQixxQkFBcUIsU0FBUyxTQUFTLENBQUM7O0FBQUEsaURBQWlELGdDQUFnQyxlQUFlLENBQUM7O0FBQUEsNkRBQTZELGFBQWEsQ0FBQzs7QUFBQSw0REFBNEQsa0JBQWtCLENBQUM7O0FBQUEsOENBQThDLHFCQUFxQixlQUFlLGdCQUFnQixDQUFDOztBQUFBLGNBQWMsZUFBZSxzQkFBc0IsTUFBTSxPQUFPLFlBQVksV0FBVyxZQUFZLGdCQUFnQixDQUFDOztBQUFBLG9DQUFvQyxrQkFBa0IsTUFBTSxPQUFPLFNBQVMsUUFBUSxVQUFVLFdBQVcsY0FBYyxZQUFZLFlBQVksY0FBYyx5QkFBeUIsdUJBQXVCLG9CQUFvQixzQ0FBc0MsQ0FBQzs7QUFBQSxvQ0FBb0Msa0JBQWtCLFdBQVcsQ0FBQzs7QUFBQSxrQ0FBa0Msa0JBQWtCLFFBQVEsVUFBVSxXQUFXLFlBQVkseUJBQXlCLHlCQUF5QixrQkFBa0Isa0JBQWtCLGVBQWUsVUFBVSxDQUFDOztBQUFBLHdDQUF3Qyx3QkFBd0IsQ0FBQzs7QUFBQSx1Q0FBdUMsZUFBZSxNQUFNLE9BQU8sUUFBUSxTQUFTLFlBQVksMEJBQTBCLENBQUM7O0FBQUEscUNBQXFDLG9DQUFvQyxTQUFTLENBQUMsQ0FBQzs7QUFBQSwrQ0FBK0MsZUFBZSxDQUFDOztBQUdoNEgscUVBQXFFLHFCQUFxQixDQUFDOztBQUFBLHdMQUF3TCx3QkFBd0IsQ0FBQzs7QUFBQSw4TEFBOEwsd0JBQXdCLENBQUM7O0FBQUEsd2FBQXdhLHdCQUF3QixDQUFDOztBQUFBLDhIQUE4SCx3QkFBd0IsQ0FBQzs7QUFBQSw4SEFBOEgsd0JBQXdCLENBQUM7O0FBQUEsOEhBQThILHdCQUF3QixDQUFDOztBQUFBLGdJQUFnSSx3QkFBd0IsQ0FBQzs7QUFBQSxnSUFBZ0ksd0JBQXdCLENBQUM7O0FBQUEsZ0lBQWdJLHdCQUF3QixDQUFDOztBQUFBLDBHQUEwRyx3QkFBd0IsQ0FBQzs7QUFBQSw0R0FBNEcsd0JBQXdCLENBQUM7O0FBQUEsaUlBQWlJLHdCQUF3QixDQUFDOztBQUFBLGlJQUFpSSx3QkFBd0IsQ0FBQzs7QUFBQSxpSUFBaUksd0JBQXdCLENBQUM7O0FBQUEsME5BQTBOLHdCQUF3QixDQUFDOztBQUFBLG1DQUFtQyxpQkFBaUIsQ0FBQzs7QUFBQSxtRkFBbUYsY0FBYyxrQkFBa0IsVUFBVSxTQUFTLFdBQVcsWUFBWSxxQkFBcUIsQ0FBQzs7QUFBQSwwQ0FBMEMsWUFBWSxnQkFBZ0IsaUJBQWlCLHVCQUF1QixpQkFBaUIsQ0FBQzs7QUFBQSxxREFBcUQsZ0JBQWdCLGlCQUFpQixpQkFBaUIsa0JBQWtCLGtGQUFrRixDQUFDOztBQUFBLGdGQUFnRixpQkFBaUIsQ0FBQzs7QUFBQSxxQ0FBcUMsZ0ZBQWdGLGNBQWMsYUFBYSxDQUFDLENBQUM7O0FBQUEsc0dBQXNHLFdBQVcsQ0FBQzs7QUFBQSw0R0FBNEcsYUFBYSxDQUFDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9zbWFydGFkbWluLXBsdWdpbnMvZGF0YXRhYmxlcy9kYXRhdGFibGVzLm1pbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBjb21iaW5lZCBmaWxlIHdhcyBjcmVhdGVkIGJ5IHRoZSBEYXRhVGFibGVzIGRvd25sb2FkZXIgYnVpbGRlcjpcbiAqICAgaHR0cHM6Ly9kYXRhdGFibGVzLm5ldC9kb3dubG9hZFxuICpcbiAqIFRvIHJlYnVpbGQgb3IgbW9kaWZ5IHRoaXMgZmlsZSB3aXRoIHRoZSBsYXRlc3QgdmVyc2lvbnMgb2YgdGhlIGluY2x1ZGVkXG4gKiBzb2Z0d2FyZSBwbGVhc2UgdmlzaXQ6XG4gKiAgIGh0dHBzOi8vZGF0YXRhYmxlcy5uZXQvZG93bmxvYWQvI2JzL3BkZm1ha2UtMC4xLjE4L2R0LTEuMTAuMTMvYi0xLjIuNC9iLWNvbHZpcy0xLjIuNC9iLWZsYXNoLTEuMi40L2ItaHRtbDUtMS4yLjQvYi1wcmludC0xLjIuNC9jci0xLjMuMi9yLTIuMS4xL3NlLTEuMi4wXG4gKlxuICogSW5jbHVkZWQgbGlicmFyaWVzOlxuICogICBwZGZtYWtlIDAuMS4xOCwgRGF0YVRhYmxlcyAxLjEwLjEzLCBCdXR0b25zIDEuMi40LCBDb2x1bW4gdmlzaWJpbGl0eSAxLjIuNCwgRmxhc2ggZXhwb3J0IDEuMi40LCBIVE1MNSBleHBvcnQgMS4yLjQsIFByaW50IHZpZXcgMS4yLjQsIENvbFJlb3JkZXIgMS4zLjIsIFJlc3BvbnNpdmUgMi4xLjEsIFNlbGVjdCAxLjIuMFxuICovXG5cbnRhYmxlLmRhdGFUYWJsZXtjbGVhcjpib3RoO21hcmdpbi10b3A6NnB4ICFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbTo2cHggIWltcG9ydGFudDttYXgtd2lkdGg6bm9uZSAhaW1wb3J0YW50O2JvcmRlci1jb2xsYXBzZTpzZXBhcmF0ZSAhaW1wb3J0YW50fXRhYmxlLmRhdGFUYWJsZSB0ZCx0YWJsZS5kYXRhVGFibGUgdGh7LXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JveC1zaXppbmc6Y29udGVudC1ib3h9dGFibGUuZGF0YVRhYmxlIHRkLmRhdGFUYWJsZXNfZW1wdHksdGFibGUuZGF0YVRhYmxlIHRoLmRhdGFUYWJsZXNfZW1wdHl7dGV4dC1hbGlnbjpjZW50ZXJ9dGFibGUuZGF0YVRhYmxlLm5vd3JhcCB0aCx0YWJsZS5kYXRhVGFibGUubm93cmFwIHRke3doaXRlLXNwYWNlOm5vd3JhcH1kaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2xlbmd0aCBsYWJlbHtmb250LXdlaWdodDpub3JtYWw7dGV4dC1hbGlnbjpsZWZ0O3doaXRlLXNwYWNlOm5vd3JhcH1kaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2xlbmd0aCBzZWxlY3R7d2lkdGg6NzVweDtkaXNwbGF5OmlubGluZS1ibG9ja31kaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2ZpbHRlcnt0ZXh0LWFsaWduOnJpZ2h0fWRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfZmlsdGVyIGxhYmVse2ZvbnQtd2VpZ2h0Om5vcm1hbDt3aGl0ZS1zcGFjZTpub3dyYXA7dGV4dC1hbGlnbjpsZWZ0fWRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfZmlsdGVyIGlucHV0e21hcmdpbi1sZWZ0OjAuNWVtO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOmF1dG99ZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBkaXYuZGF0YVRhYmxlc19pbmZve3BhZGRpbmctdG9wOjhweDt3aGl0ZS1zcGFjZTpub3dyYXB9ZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBkaXYuZGF0YVRhYmxlc19wYWdpbmF0ZXttYXJnaW46MDt3aGl0ZS1zcGFjZTpub3dyYXA7dGV4dC1hbGlnbjpyaWdodH1kaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX3BhZ2luYXRlIHVsLnBhZ2luYXRpb257bWFyZ2luOjJweCAwO3doaXRlLXNwYWNlOm5vd3JhcH1kaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX3Byb2Nlc3Npbmd7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt3aWR0aDoyMDBweDttYXJnaW4tbGVmdDotMTAwcHg7bWFyZ2luLXRvcDotMjZweDt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjFlbSAwfXRhYmxlLmRhdGFUYWJsZSB0aGVhZD50cj50aC5zb3J0aW5nX2FzYyx0YWJsZS5kYXRhVGFibGUgdGhlYWQ+dHI+dGguc29ydGluZ19kZXNjLHRhYmxlLmRhdGFUYWJsZSB0aGVhZD50cj50aC5zb3J0aW5nLHRhYmxlLmRhdGFUYWJsZSB0aGVhZD50cj50ZC5zb3J0aW5nX2FzYyx0YWJsZS5kYXRhVGFibGUgdGhlYWQ+dHI+dGQuc29ydGluZ19kZXNjLHRhYmxlLmRhdGFUYWJsZSB0aGVhZD50cj50ZC5zb3J0aW5ne3BhZGRpbmctcmlnaHQ6MzBweH10YWJsZS5kYXRhVGFibGUgdGhlYWQ+dHI+dGg6YWN0aXZlLHRhYmxlLmRhdGFUYWJsZSB0aGVhZD50cj50ZDphY3RpdmV7b3V0bGluZTpub25lfXRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZyx0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjLHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjLHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2NfZGlzYWJsZWQsdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2Rlc2NfZGlzYWJsZWR7Y3Vyc29yOnBvaW50ZXI7cG9zaXRpb246cmVsYXRpdmV9dGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nOmFmdGVyLHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2M6YWZ0ZXIsdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2Rlc2M6YWZ0ZXIsdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzY19kaXNhYmxlZDphZnRlcix0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzY19kaXNhYmxlZDphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206OHB4O3JpZ2h0OjhweDtkaXNwbGF5OmJsb2NrO2ZvbnQtZmFtaWx5OidHbHlwaGljb25zIEhhbGZsaW5ncyc7b3BhY2l0eTowLjV9dGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nOmFmdGVye29wYWNpdHk6MC4yO2NvbnRlbnQ6XCJcXGUxNTBcIn10YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjOmFmdGVye2NvbnRlbnQ6XCJcXGUxNTVcIn10YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzYzphZnRlcntjb250ZW50OlwiXFxlMTU2XCJ9dGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzY19kaXNhYmxlZDphZnRlcix0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzY19kaXNhYmxlZDphZnRlcntjb2xvcjojZWVlfWRpdi5kYXRhVGFibGVzX3Njcm9sbEhlYWQgdGFibGUuZGF0YVRhYmxle21hcmdpbi1ib3R0b206MCAhaW1wb3J0YW50fWRpdi5kYXRhVGFibGVzX3Njcm9sbEJvZHkgdGFibGV7Ym9yZGVyLXRvcDpub25lO21hcmdpbi10b3A6MCAhaW1wb3J0YW50O21hcmdpbi1ib3R0b206MCAhaW1wb3J0YW50fWRpdi5kYXRhVGFibGVzX3Njcm9sbEJvZHkgdGFibGUgdGhlYWQgLnNvcnRpbmc6YWZ0ZXIsZGl2LmRhdGFUYWJsZXNfc2Nyb2xsQm9keSB0YWJsZSB0aGVhZCAuc29ydGluZ19hc2M6YWZ0ZXIsZGl2LmRhdGFUYWJsZXNfc2Nyb2xsQm9keSB0YWJsZSB0aGVhZCAuc29ydGluZ19kZXNjOmFmdGVye2Rpc3BsYXk6bm9uZX1kaXYuZGF0YVRhYmxlc19zY3JvbGxCb2R5IHRhYmxlIHRib2R5IHRyOmZpcnN0LWNoaWxkIHRoLGRpdi5kYXRhVGFibGVzX3Njcm9sbEJvZHkgdGFibGUgdGJvZHkgdHI6Zmlyc3QtY2hpbGQgdGR7Ym9yZGVyLXRvcDpub25lfWRpdi5kYXRhVGFibGVzX3Njcm9sbEZvb3QgdGFibGV7bWFyZ2luLXRvcDowICFpbXBvcnRhbnQ7Ym9yZGVyLXRvcDpub25lfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KXtkaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2xlbmd0aCxkaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2ZpbHRlcixkaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2luZm8sZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBkaXYuZGF0YVRhYmxlc19wYWdpbmF0ZXt0ZXh0LWFsaWduOmNlbnRlcn19dGFibGUuZGF0YVRhYmxlLnRhYmxlLWNvbmRlbnNlZD50aGVhZD50cj50aHtwYWRkaW5nLXJpZ2h0OjIwcHh9dGFibGUuZGF0YVRhYmxlLnRhYmxlLWNvbmRlbnNlZCAuc29ydGluZzphZnRlcix0YWJsZS5kYXRhVGFibGUudGFibGUtY29uZGVuc2VkIC5zb3J0aW5nX2FzYzphZnRlcix0YWJsZS5kYXRhVGFibGUudGFibGUtY29uZGVuc2VkIC5zb3J0aW5nX2Rlc2M6YWZ0ZXJ7dG9wOjZweDtyaWdodDo2cHh9dGFibGUudGFibGUtYm9yZGVyZWQuZGF0YVRhYmxlIHRoLHRhYmxlLnRhYmxlLWJvcmRlcmVkLmRhdGFUYWJsZSB0ZHtib3JkZXItbGVmdC13aWR0aDowfXRhYmxlLnRhYmxlLWJvcmRlcmVkLmRhdGFUYWJsZSB0aDpsYXN0LWNoaWxkLHRhYmxlLnRhYmxlLWJvcmRlcmVkLmRhdGFUYWJsZSB0aDpsYXN0LWNoaWxkLHRhYmxlLnRhYmxlLWJvcmRlcmVkLmRhdGFUYWJsZSB0ZDpsYXN0LWNoaWxkLHRhYmxlLnRhYmxlLWJvcmRlcmVkLmRhdGFUYWJsZSB0ZDpsYXN0LWNoaWxke2JvcmRlci1yaWdodC13aWR0aDowfXRhYmxlLnRhYmxlLWJvcmRlcmVkLmRhdGFUYWJsZSB0Ym9keSB0aCx0YWJsZS50YWJsZS1ib3JkZXJlZC5kYXRhVGFibGUgdGJvZHkgdGR7Ym9yZGVyLWJvdHRvbS13aWR0aDowfWRpdi5kYXRhVGFibGVzX3Njcm9sbEhlYWQgdGFibGUudGFibGUtYm9yZGVyZWR7Ym9yZGVyLWJvdHRvbS13aWR0aDowfWRpdi50YWJsZS1yZXNwb25zaXZlPmRpdi5kYXRhVGFibGVzX3dyYXBwZXI+ZGl2LnJvd3ttYXJnaW46MH1kaXYudGFibGUtcmVzcG9uc2l2ZT5kaXYuZGF0YVRhYmxlc193cmFwcGVyPmRpdi5yb3c+ZGl2W2NsYXNzXj1cImNvbC1cIl06Zmlyc3QtY2hpbGR7cGFkZGluZy1sZWZ0OjB9ZGl2LnRhYmxlLXJlc3BvbnNpdmU+ZGl2LmRhdGFUYWJsZXNfd3JhcHBlcj5kaXYucm93PmRpdltjbGFzc149XCJjb2wtXCJdOmxhc3QtY2hpbGR7cGFkZGluZy1yaWdodDowfVxuXG5cbmRpdi5kdC1idXR0b24taW5mb3twb3NpdGlvbjpmaXhlZDt0b3A6NTAlO2xlZnQ6NTAlO3dpZHRoOjQwMHB4O21hcmdpbi10b3A6LTEwMHB4O21hcmdpbi1sZWZ0Oi0yMDBweDtiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO2JvcmRlcjoycHggc29saWQgIzExMTtib3gtc2hhZG93OjNweCAzcHggOHB4IHJnYmEoMCwwLDAsMC4zKTtib3JkZXItcmFkaXVzOjNweDt0ZXh0LWFsaWduOmNlbnRlcjt6LWluZGV4OjIxfWRpdi5kdC1idXR0b24taW5mbyBoMntwYWRkaW5nOjAuNWVtO21hcmdpbjowO2ZvbnQtd2VpZ2h0Om5vcm1hbDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRkO2JhY2tncm91bmQtY29sb3I6I2YzZjNmM31kaXYuZHQtYnV0dG9uLWluZm8+ZGl2e3BhZGRpbmc6MWVtfXVsLmR0LWJ1dHRvbi1jb2xsZWN0aW9uLmRyb3Bkb3duLW1lbnV7ZGlzcGxheTpibG9jazt6LWluZGV4OjIwMDI7LXdlYmtpdC1jb2x1bW4tZ2FwOjhweDstbW96LWNvbHVtbi1nYXA6OHB4Oy1tcy1jb2x1bW4tZ2FwOjhweDstby1jb2x1bW4tZ2FwOjhweDtjb2x1bW4tZ2FwOjhweH11bC5kdC1idXR0b24tY29sbGVjdGlvbi5kcm9wZG93bi1tZW51LmZpeGVke3Bvc2l0aW9uOmZpeGVkO3RvcDo1MCU7bGVmdDo1MCU7bWFyZ2luLWxlZnQ6LTc1cHg7Ym9yZGVyLXJhZGl1czowfXVsLmR0LWJ1dHRvbi1jb2xsZWN0aW9uLmRyb3Bkb3duLW1lbnUuZml4ZWQudHdvLWNvbHVtbnttYXJnaW4tbGVmdDotMTUwcHh9dWwuZHQtYnV0dG9uLWNvbGxlY3Rpb24uZHJvcGRvd24tbWVudS5maXhlZC50aHJlZS1jb2x1bW57bWFyZ2luLWxlZnQ6LTIyNXB4fXVsLmR0LWJ1dHRvbi1jb2xsZWN0aW9uLmRyb3Bkb3duLW1lbnUuZml4ZWQuZm91ci1jb2x1bW57bWFyZ2luLWxlZnQ6LTMwMHB4fXVsLmR0LWJ1dHRvbi1jb2xsZWN0aW9uLmRyb3Bkb3duLW1lbnU+Knstd2Via2l0LWNvbHVtbi1icmVhay1pbnNpZGU6YXZvaWQ7YnJlYWstaW5zaWRlOmF2b2lkfXVsLmR0LWJ1dHRvbi1jb2xsZWN0aW9uLmRyb3Bkb3duLW1lbnUudHdvLWNvbHVtbnt3aWR0aDozMDBweDtwYWRkaW5nLWJvdHRvbToxcHg7LXdlYmtpdC1jb2x1bW4tY291bnQ6MjstbW96LWNvbHVtbi1jb3VudDoyOy1tcy1jb2x1bW4tY291bnQ6Mjstby1jb2x1bW4tY291bnQ6Mjtjb2x1bW4tY291bnQ6Mn11bC5kdC1idXR0b24tY29sbGVjdGlvbi5kcm9wZG93bi1tZW51LnRocmVlLWNvbHVtbnt3aWR0aDo0NTBweDtwYWRkaW5nLWJvdHRvbToxcHg7LXdlYmtpdC1jb2x1bW4tY291bnQ6MzstbW96LWNvbHVtbi1jb3VudDozOy1tcy1jb2x1bW4tY291bnQ6Mzstby1jb2x1bW4tY291bnQ6Mztjb2x1bW4tY291bnQ6M311bC5kdC1idXR0b24tY29sbGVjdGlvbi5kcm9wZG93bi1tZW51LmZvdXItY29sdW1ue3dpZHRoOjYwMHB4O3BhZGRpbmctYm90dG9tOjFweDstd2Via2l0LWNvbHVtbi1jb3VudDo0Oy1tb3otY29sdW1uLWNvdW50OjQ7LW1zLWNvbHVtbi1jb3VudDo0Oy1vLWNvbHVtbi1jb3VudDo0O2NvbHVtbi1jb3VudDo0fWRpdi5kdC1idXR0b24tYmFja2dyb3VuZHtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjIwMDF9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpe2Rpdi5kdC1idXR0b25ze2Zsb2F0Om5vbmU7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tYm90dG9tOjAuNWVtfWRpdi5kdC1idXR0b25zIGEuYnRue2Zsb2F0Om5vbmV9fVxuXG5cbnRhYmxlLkRUQ1JfY2xvbmVkVGFibGUuZGF0YVRhYmxle3Bvc2l0aW9uOmFic29sdXRlICFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuNyk7ei1pbmRleDoyMDJ9ZGl2LkRUQ1JfcG9pbnRlcnt3aWR0aDoxcHg7YmFja2dyb3VuZC1jb2xvcjojMzM3YWI3O3otaW5kZXg6MjAxfVxuXG5cbnRhYmxlLmRhdGFUYWJsZS5kdHItaW5saW5lLmNvbGxhcHNlZD50Ym9keT50cj50ZC5jaGlsZCx0YWJsZS5kYXRhVGFibGUuZHRyLWlubGluZS5jb2xsYXBzZWQ+dGJvZHk+dHI+dGguY2hpbGQsdGFibGUuZGF0YVRhYmxlLmR0ci1pbmxpbmUuY29sbGFwc2VkPnRib2R5PnRyPnRkLmRhdGFUYWJsZXNfZW1wdHl7Y3Vyc29yOmRlZmF1bHQgIWltcG9ydGFudH10YWJsZS5kYXRhVGFibGUuZHRyLWlubGluZS5jb2xsYXBzZWQ+dGJvZHk+dHI+dGQuY2hpbGQ6YmVmb3JlLHRhYmxlLmRhdGFUYWJsZS5kdHItaW5saW5lLmNvbGxhcHNlZD50Ym9keT50cj50aC5jaGlsZDpiZWZvcmUsdGFibGUuZGF0YVRhYmxlLmR0ci1pbmxpbmUuY29sbGFwc2VkPnRib2R5PnRyPnRkLmRhdGFUYWJsZXNfZW1wdHk6YmVmb3Jle2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50fXRhYmxlLmRhdGFUYWJsZS5kdHItaW5saW5lLmNvbGxhcHNlZD50Ym9keT50cj50ZDpmaXJzdC1jaGlsZCx0YWJsZS5kYXRhVGFibGUuZHRyLWlubGluZS5jb2xsYXBzZWQ+dGJvZHk+dHI+dGg6Zmlyc3QtY2hpbGR7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZy1sZWZ0OjMwcHg7Y3Vyc29yOnBvaW50ZXJ9dGFibGUuZGF0YVRhYmxlLmR0ci1pbmxpbmUuY29sbGFwc2VkPnRib2R5PnRyPnRkOmZpcnN0LWNoaWxkOmJlZm9yZSx0YWJsZS5kYXRhVGFibGUuZHRyLWlubGluZS5jb2xsYXBzZWQ+dGJvZHk+dHI+dGg6Zmlyc3QtY2hpbGQ6YmVmb3Jle3RvcDo5cHg7bGVmdDo0cHg7aGVpZ2h0OjE0cHg7d2lkdGg6MTRweDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2NvbG9yOndoaXRlO2JvcmRlcjoycHggc29saWQgd2hpdGU7Ym9yZGVyLXJhZGl1czoxNHB4O2JveC1zaGFkb3c6MCAwIDNweCAjNDQ0O2JveC1zaXppbmc6Y29udGVudC1ib3g7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1mYW1pbHk6J0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO2xpbmUtaGVpZ2h0OjE0cHg7Y29udGVudDonKyc7YmFja2dyb3VuZC1jb2xvcjojMzM3YWI3fXRhYmxlLmRhdGFUYWJsZS5kdHItaW5saW5lLmNvbGxhcHNlZD50Ym9keT50ci5wYXJlbnQ+dGQ6Zmlyc3QtY2hpbGQ6YmVmb3JlLHRhYmxlLmRhdGFUYWJsZS5kdHItaW5saW5lLmNvbGxhcHNlZD50Ym9keT50ci5wYXJlbnQ+dGg6Zmlyc3QtY2hpbGQ6YmVmb3Jle2NvbnRlbnQ6Jy0nO2JhY2tncm91bmQtY29sb3I6I2QzMzMzM310YWJsZS5kYXRhVGFibGUuZHRyLWlubGluZS5jb2xsYXBzZWQ+dGJvZHk+dHIuY2hpbGQgdGQ6YmVmb3Jle2Rpc3BsYXk6bm9uZX10YWJsZS5kYXRhVGFibGUuZHRyLWlubGluZS5jb2xsYXBzZWQuY29tcGFjdD50Ym9keT50cj50ZDpmaXJzdC1jaGlsZCx0YWJsZS5kYXRhVGFibGUuZHRyLWlubGluZS5jb2xsYXBzZWQuY29tcGFjdD50Ym9keT50cj50aDpmaXJzdC1jaGlsZHtwYWRkaW5nLWxlZnQ6MjdweH10YWJsZS5kYXRhVGFibGUuZHRyLWlubGluZS5jb2xsYXBzZWQuY29tcGFjdD50Ym9keT50cj50ZDpmaXJzdC1jaGlsZDpiZWZvcmUsdGFibGUuZGF0YVRhYmxlLmR0ci1pbmxpbmUuY29sbGFwc2VkLmNvbXBhY3Q+dGJvZHk+dHI+dGg6Zmlyc3QtY2hpbGQ6YmVmb3Jle3RvcDo1cHg7bGVmdDo0cHg7aGVpZ2h0OjE0cHg7d2lkdGg6MTRweDtib3JkZXItcmFkaXVzOjE0cHg7bGluZS1oZWlnaHQ6MTRweDt0ZXh0LWluZGVudDozcHh9dGFibGUuZGF0YVRhYmxlLmR0ci1jb2x1bW4+dGJvZHk+dHI+dGQuY29udHJvbCx0YWJsZS5kYXRhVGFibGUuZHRyLWNvbHVtbj50Ym9keT50cj50aC5jb250cm9se3Bvc2l0aW9uOnJlbGF0aXZlO2N1cnNvcjpwb2ludGVyfXRhYmxlLmRhdGFUYWJsZS5kdHItY29sdW1uPnRib2R5PnRyPnRkLmNvbnRyb2w6YmVmb3JlLHRhYmxlLmRhdGFUYWJsZS5kdHItY29sdW1uPnRib2R5PnRyPnRoLmNvbnRyb2w6YmVmb3Jle3RvcDo1MCU7bGVmdDo1MCU7aGVpZ2h0OjE2cHg7d2lkdGg6MTZweDttYXJnaW4tdG9wOi0xMHB4O21hcmdpbi1sZWZ0Oi0xMHB4O2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7Y29sb3I6d2hpdGU7Ym9yZGVyOjJweCBzb2xpZCB3aGl0ZTtib3JkZXItcmFkaXVzOjE0cHg7Ym94LXNoYWRvdzowIDAgM3B4ICM0NDQ7Ym94LXNpemluZzpjb250ZW50LWJveDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LWZhbWlseTonQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7bGluZS1oZWlnaHQ6MTRweDtjb250ZW50OicrJztiYWNrZ3JvdW5kLWNvbG9yOiMzMzdhYjd9dGFibGUuZGF0YVRhYmxlLmR0ci1jb2x1bW4+dGJvZHk+dHIucGFyZW50IHRkLmNvbnRyb2w6YmVmb3JlLHRhYmxlLmRhdGFUYWJsZS5kdHItY29sdW1uPnRib2R5PnRyLnBhcmVudCB0aC5jb250cm9sOmJlZm9yZXtjb250ZW50OictJztiYWNrZ3JvdW5kLWNvbG9yOiNkMzMzMzN9dGFibGUuZGF0YVRhYmxlPnRib2R5PnRyLmNoaWxke3BhZGRpbmc6MC41ZW0gMWVtfXRhYmxlLmRhdGFUYWJsZT50Ym9keT50ci5jaGlsZDpob3ZlcntiYWNrZ3JvdW5kOnRyYW5zcGFyZW50ICFpbXBvcnRhbnR9dGFibGUuZGF0YVRhYmxlPnRib2R5PnRyLmNoaWxkIHVsLmR0ci1kZXRhaWxze2Rpc3BsYXk6aW5saW5lLWJsb2NrO2xpc3Qtc3R5bGUtdHlwZTpub25lO21hcmdpbjowO3BhZGRpbmc6MH10YWJsZS5kYXRhVGFibGU+dGJvZHk+dHIuY2hpbGQgdWwuZHRyLWRldGFpbHMgbGl7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VmZWZlZjtwYWRkaW5nOjAuNWVtIDB9dGFibGUuZGF0YVRhYmxlPnRib2R5PnRyLmNoaWxkIHVsLmR0ci1kZXRhaWxzIGxpOmZpcnN0LWNoaWxke3BhZGRpbmctdG9wOjB9dGFibGUuZGF0YVRhYmxlPnRib2R5PnRyLmNoaWxkIHVsLmR0ci1kZXRhaWxzIGxpOmxhc3QtY2hpbGR7Ym9yZGVyLWJvdHRvbTpub25lfXRhYmxlLmRhdGFUYWJsZT50Ym9keT50ci5jaGlsZCBzcGFuLmR0ci10aXRsZXtkaXNwbGF5OmlubGluZS1ibG9jazttaW4td2lkdGg6NzVweDtmb250LXdlaWdodDpib2xkfWRpdi5kdHItbW9kYWx7cG9zaXRpb246Zml4ZWQ7Ym94LXNpemluZzpib3JkZXItYm94O3RvcDowO2xlZnQ6MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO3otaW5kZXg6MTAwO3BhZGRpbmc6MTBlbSAxZW19ZGl2LmR0ci1tb2RhbCBkaXYuZHRyLW1vZGFsLWRpc3BsYXl7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO2JvdHRvbTowO3JpZ2h0OjA7d2lkdGg6NTAlO2hlaWdodDo1MCU7b3ZlcmZsb3c6YXV0bzttYXJnaW46YXV0bzt6LWluZGV4OjEwMjtvdmVyZmxvdzphdXRvO2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNztib3JkZXI6MXB4IHNvbGlkIGJsYWNrO2JvcmRlci1yYWRpdXM6MC41ZW07Ym94LXNoYWRvdzowIDEycHggMzBweCByZ2JhKDAsMCwwLDAuNil9ZGl2LmR0ci1tb2RhbCBkaXYuZHRyLW1vZGFsLWNvbnRlbnR7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZzoxZW19ZGl2LmR0ci1tb2RhbCBkaXYuZHRyLW1vZGFsLWNsb3Nle3Bvc2l0aW9uOmFic29sdXRlO3RvcDo2cHg7cmlnaHQ6NnB4O3dpZHRoOjIycHg7aGVpZ2h0OjIycHg7Ym9yZGVyOjFweCBzb2xpZCAjZWFlYWVhO2JhY2tncm91bmQtY29sb3I6I2Y5ZjlmOTt0ZXh0LWFsaWduOmNlbnRlcjtib3JkZXItcmFkaXVzOjNweDtjdXJzb3I6cG9pbnRlcjt6LWluZGV4OjEyfWRpdi5kdHItbW9kYWwgZGl2LmR0ci1tb2RhbC1jbG9zZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNlYWVhZWF9ZGl2LmR0ci1tb2RhbCBkaXYuZHRyLW1vZGFsLWJhY2tncm91bmR7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7ei1pbmRleDoxMDE7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNil9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpe2Rpdi5kdHItbW9kYWwgZGl2LmR0ci1tb2RhbC1kaXNwbGF5e3dpZHRoOjk1JX19ZGl2LmR0ci1icy1tb2RhbCB0YWJsZS50YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZHtib3JkZXItdG9wOm5vbmV9XG5cblxudGFibGUuZGF0YVRhYmxlIHRib2R5PnRyLnNlbGVjdGVkLHRhYmxlLmRhdGFUYWJsZSB0Ym9keT50cj4uc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojMDhDfXRhYmxlLmRhdGFUYWJsZS5zdHJpcGUgdGJvZHk+dHIub2RkLnNlbGVjdGVkLHRhYmxlLmRhdGFUYWJsZS5zdHJpcGUgdGJvZHk+dHIub2RkPi5zZWxlY3RlZCx0YWJsZS5kYXRhVGFibGUuZGlzcGxheSB0Ym9keT50ci5vZGQuc2VsZWN0ZWQsdGFibGUuZGF0YVRhYmxlLmRpc3BsYXkgdGJvZHk+dHIub2RkPi5zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDg1Yzd9dGFibGUuZGF0YVRhYmxlLmhvdmVyIHRib2R5PnRyLnNlbGVjdGVkOmhvdmVyLHRhYmxlLmRhdGFUYWJsZS5ob3ZlciB0Ym9keT50cj4uc2VsZWN0ZWQ6aG92ZXIsdGFibGUuZGF0YVRhYmxlLmRpc3BsYXkgdGJvZHk+dHIuc2VsZWN0ZWQ6aG92ZXIsdGFibGUuZGF0YVRhYmxlLmRpc3BsYXkgdGJvZHk+dHI+LnNlbGVjdGVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzAwODNjNX10YWJsZS5kYXRhVGFibGUub3JkZXItY29sdW1uIHRib2R5PnRyLnNlbGVjdGVkPi5zb3J0aW5nXzEsdGFibGUuZGF0YVRhYmxlLm9yZGVyLWNvbHVtbiB0Ym9keT50ci5zZWxlY3RlZD4uc29ydGluZ18yLHRhYmxlLmRhdGFUYWJsZS5vcmRlci1jb2x1bW4gdGJvZHk+dHIuc2VsZWN0ZWQ+LnNvcnRpbmdfMyx0YWJsZS5kYXRhVGFibGUub3JkZXItY29sdW1uIHRib2R5PnRyPi5zZWxlY3RlZCx0YWJsZS5kYXRhVGFibGUuZGlzcGxheSB0Ym9keT50ci5zZWxlY3RlZD4uc29ydGluZ18xLHRhYmxlLmRhdGFUYWJsZS5kaXNwbGF5IHRib2R5PnRyLnNlbGVjdGVkPi5zb3J0aW5nXzIsdGFibGUuZGF0YVRhYmxlLmRpc3BsYXkgdGJvZHk+dHIuc2VsZWN0ZWQ+LnNvcnRpbmdfMyx0YWJsZS5kYXRhVGFibGUuZGlzcGxheSB0Ym9keT50cj4uc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojMDA4NWM4fXRhYmxlLmRhdGFUYWJsZS5kaXNwbGF5IHRib2R5PnRyLm9kZC5zZWxlY3RlZD4uc29ydGluZ18xLHRhYmxlLmRhdGFUYWJsZS5vcmRlci1jb2x1bW4uc3RyaXBlIHRib2R5PnRyLm9kZC5zZWxlY3RlZD4uc29ydGluZ18xe2JhY2tncm91bmQtY29sb3I6IzAwODFjMX10YWJsZS5kYXRhVGFibGUuZGlzcGxheSB0Ym9keT50ci5vZGQuc2VsZWN0ZWQ+LnNvcnRpbmdfMix0YWJsZS5kYXRhVGFibGUub3JkZXItY29sdW1uLnN0cmlwZSB0Ym9keT50ci5vZGQuc2VsZWN0ZWQ+LnNvcnRpbmdfMntiYWNrZ3JvdW5kLWNvbG9yOiMwMDgyYzJ9dGFibGUuZGF0YVRhYmxlLmRpc3BsYXkgdGJvZHk+dHIub2RkLnNlbGVjdGVkPi5zb3J0aW5nXzMsdGFibGUuZGF0YVRhYmxlLm9yZGVyLWNvbHVtbi5zdHJpcGUgdGJvZHk+dHIub2RkLnNlbGVjdGVkPi5zb3J0aW5nXzN7YmFja2dyb3VuZC1jb2xvcjojMDA4M2M0fXRhYmxlLmRhdGFUYWJsZS5kaXNwbGF5IHRib2R5PnRyLmV2ZW4uc2VsZWN0ZWQ+LnNvcnRpbmdfMSx0YWJsZS5kYXRhVGFibGUub3JkZXItY29sdW1uLnN0cmlwZSB0Ym9keT50ci5ldmVuLnNlbGVjdGVkPi5zb3J0aW5nXzF7YmFja2dyb3VuZC1jb2xvcjojMDA4NWM4fXRhYmxlLmRhdGFUYWJsZS5kaXNwbGF5IHRib2R5PnRyLmV2ZW4uc2VsZWN0ZWQ+LnNvcnRpbmdfMix0YWJsZS5kYXRhVGFibGUub3JkZXItY29sdW1uLnN0cmlwZSB0Ym9keT50ci5ldmVuLnNlbGVjdGVkPi5zb3J0aW5nXzJ7YmFja2dyb3VuZC1jb2xvcjojMDA4NmNhfXRhYmxlLmRhdGFUYWJsZS5kaXNwbGF5IHRib2R5PnRyLmV2ZW4uc2VsZWN0ZWQ+LnNvcnRpbmdfMyx0YWJsZS5kYXRhVGFibGUub3JkZXItY29sdW1uLnN0cmlwZSB0Ym9keT50ci5ldmVuLnNlbGVjdGVkPi5zb3J0aW5nXzN7YmFja2dyb3VuZC1jb2xvcjojMDA4N2NifXRhYmxlLmRhdGFUYWJsZS5kaXNwbGF5IHRib2R5PnRyLm9kZD4uc2VsZWN0ZWQsdGFibGUuZGF0YVRhYmxlLm9yZGVyLWNvbHVtbi5zdHJpcGUgdGJvZHk+dHIub2RkPi5zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDgxYzF9dGFibGUuZGF0YVRhYmxlLmRpc3BsYXkgdGJvZHk+dHIuZXZlbj4uc2VsZWN0ZWQsdGFibGUuZGF0YVRhYmxlLm9yZGVyLWNvbHVtbi5zdHJpcGUgdGJvZHk+dHIuZXZlbj4uc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojMDA4NWM4fXRhYmxlLmRhdGFUYWJsZS5kaXNwbGF5IHRib2R5PnRyLnNlbGVjdGVkOmhvdmVyPi5zb3J0aW5nXzEsdGFibGUuZGF0YVRhYmxlLm9yZGVyLWNvbHVtbi5ob3ZlciB0Ym9keT50ci5zZWxlY3RlZDpob3Zlcj4uc29ydGluZ18xe2JhY2tncm91bmQtY29sb3I6IzAwN2RiYn10YWJsZS5kYXRhVGFibGUuZGlzcGxheSB0Ym9keT50ci5zZWxlY3RlZDpob3Zlcj4uc29ydGluZ18yLHRhYmxlLmRhdGFUYWJsZS5vcmRlci1jb2x1bW4uaG92ZXIgdGJvZHk+dHIuc2VsZWN0ZWQ6aG92ZXI+LnNvcnRpbmdfMntiYWNrZ3JvdW5kLWNvbG9yOiMwMDdlYmR9dGFibGUuZGF0YVRhYmxlLmRpc3BsYXkgdGJvZHk+dHIuc2VsZWN0ZWQ6aG92ZXI+LnNvcnRpbmdfMyx0YWJsZS5kYXRhVGFibGUub3JkZXItY29sdW1uLmhvdmVyIHRib2R5PnRyLnNlbGVjdGVkOmhvdmVyPi5zb3J0aW5nXzN7YmFja2dyb3VuZC1jb2xvcjojMDA3ZmJmfXRhYmxlLmRhdGFUYWJsZS5kaXNwbGF5IHRib2R5PnRyOmhvdmVyPi5zZWxlY3RlZCx0YWJsZS5kYXRhVGFibGUuZGlzcGxheSB0Ym9keT50cj4uc2VsZWN0ZWQ6aG92ZXIsdGFibGUuZGF0YVRhYmxlLm9yZGVyLWNvbHVtbi5ob3ZlciB0Ym9keT50cjpob3Zlcj4uc2VsZWN0ZWQsdGFibGUuZGF0YVRhYmxlLm9yZGVyLWNvbHVtbi5ob3ZlciB0Ym9keT50cj4uc2VsZWN0ZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDA3ZGJifXRhYmxlLmRhdGFUYWJsZSB0ZC5zZWxlY3QtY2hlY2tib3h7cG9zaXRpb246cmVsYXRpdmV9dGFibGUuZGF0YVRhYmxlIHRkLnNlbGVjdC1jaGVja2JveDpiZWZvcmUsdGFibGUuZGF0YVRhYmxlIHRkLnNlbGVjdC1jaGVja2JveDphZnRlcntkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxLjJlbTtsZWZ0OjUwJTt3aWR0aDoxMnB4O2hlaWdodDoxMnB4O2JveC1zaXppbmc6Ym9yZGVyLWJveH10YWJsZS5kYXRhVGFibGUgdGQuc2VsZWN0LWNoZWNrYm94OmJlZm9yZXtjb250ZW50OicgJzttYXJnaW4tdG9wOi02cHg7bWFyZ2luLWxlZnQ6LTZweDtib3JkZXI6MXB4IHNvbGlkIGJsYWNrO2JvcmRlci1yYWRpdXM6M3B4fXRhYmxlLmRhdGFUYWJsZSB0ci5zZWxlY3RlZCB0ZC5zZWxlY3QtY2hlY2tib3g6YWZ0ZXJ7Y29udGVudDonXFwyNzE0JzttYXJnaW4tdG9wOi0xMXB4O21hcmdpbi1sZWZ0Oi00cHg7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC1zaGFkb3c6MXB4IDFweCAjQjBCRUQ5LCAtMXB4IC0xcHggI0IwQkVEOSwgMXB4IC0xcHggI0IwQkVEOSwgLTFweCAxcHggI0IwQkVEOX1kaXYuZGF0YVRhYmxlc193cmFwcGVyIHNwYW4uc2VsZWN0LWluZm8sZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBzcGFuLnNlbGVjdC1pdGVte21hcmdpbi1sZWZ0OjAuNWVtfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KXtkaXYuZGF0YVRhYmxlc193cmFwcGVyIHNwYW4uc2VsZWN0LWluZm8sZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBzcGFuLnNlbGVjdC1pdGVte21hcmdpbi1sZWZ0OjA7ZGlzcGxheTpibG9ja319dGFibGUuZGF0YVRhYmxlIHRib2R5IHRyLnNlbGVjdGVkLHRhYmxlLmRhdGFUYWJsZSB0Ym9keSB0aC5zZWxlY3RlZCx0YWJsZS5kYXRhVGFibGUgdGJvZHkgdGQuc2VsZWN0ZWR7Y29sb3I6d2hpdGV9dGFibGUuZGF0YVRhYmxlIHRib2R5IHRyLnNlbGVjdGVkIGEsdGFibGUuZGF0YVRhYmxlIHRib2R5IHRoLnNlbGVjdGVkIGEsdGFibGUuZGF0YVRhYmxlIHRib2R5IHRkLnNlbGVjdGVkIGF7Y29sb3I6I2EyZDRlZH1cblxuXG4iXX0= */"

/***/ }),

/***/ "./node_modules/sortablejs/Sortable.js":
/*!*********************************************!*\
  !*** ./node_modules/sortablejs/Sortable.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */

(function sortableModule(factory) {
	"use strict";

	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	else {}
})(function sortableFactory() {
	"use strict";

	if (typeof window === "undefined" || !window.document) {
		return function sortableError() {
			throw new Error("Sortable.js requires a window with a document");
		};
	}

	var dragEl,
		parentEl,
		ghostEl,
		cloneEl,
		rootEl,
		nextEl,
		lastDownEl,

		scrollEl,
		scrollParentEl,
		scrollCustomFn,

		oldIndex,
		newIndex,

		activeGroup,
		putSortable,

		autoScrolls = [],
		scrolling = false,

		awaitingDragStarted = false,
		ignoreNextClick = false,
		sortables = [],

		pointerElemChangedInterval,
		lastPointerElemX,
		lastPointerElemY,

		tapEvt,
		touchEvt,

		moved,


		lastTarget,
		lastDirection,
		pastFirstInvertThresh = false,
		isCircumstantialInvert = false,
		lastMode, // 'swap' or 'insert'

		targetMoveDistance,

		// For positioning ghost absolutely
		ghostRelativeParent,
		ghostRelativeParentInitialScroll = [], // (left, top)


		forRepaintDummy,
		realDragElRect, // dragEl rect after current animation

		/** @const */
		R_SPACE = /\s+/g,

		expando = 'Sortable' + (new Date).getTime(),

		win = window,
		document = win.document,
		parseInt = win.parseInt,
		setTimeout = win.setTimeout,

		$ = win.jQuery || win.Zepto,
		Polymer = win.Polymer,

		captureMode = {
			capture: false,
			passive: false
		},

		IE11OrLess = !!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie|iemobile)/i),
		Edge = !!navigator.userAgent.match(/Edge/i),
		FireFox = !!navigator.userAgent.match(/firefox/i),
		Safari = !!(navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && !navigator.userAgent.match(/android/i)),
		IOS = !!(navigator.userAgent.match(/iP(ad|od|hone)/i)),

		PositionGhostAbsolutely = IOS,

		CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',

		// This will not pass for IE9, because IE9 DnD only works on anchors
		supportDraggable = ('draggable' in document.createElement('div')),

		supportCssPointerEvents = (function() {
			// false when <= IE11
			if (IE11OrLess) {
				return false;
			}
			var el = document.createElement('x');
			el.style.cssText = 'pointer-events:auto';
			return el.style.pointerEvents === 'auto';
		})(),

		_silent = false,
		_alignedSilent = false,

		abs = Math.abs,
		min = Math.min,
		max = Math.max,

		savedInputChecked = [],

		_detectDirection = function(el, options) {
			var elCSS = _css(el),
				elWidth = parseInt(elCSS.width)
					- parseInt(elCSS.paddingLeft)
					- parseInt(elCSS.paddingRight)
					- parseInt(elCSS.borderLeftWidth)
					- parseInt(elCSS.borderRightWidth),
				child1 = _getChild(el, 0, options),
				child2 = _getChild(el, 1, options),
				firstChildCSS = child1 && _css(child1),
				secondChildCSS = child2 && _css(child2),
				firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + _getRect(child1).width,
				secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + _getRect(child2).width;

			if (elCSS.display === 'flex') {
				return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse'
				? 'vertical' : 'horizontal';
			}

			if (elCSS.display === 'grid') {
				return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
			}

			if (child1 && firstChildCSS.float !== 'none') {
				var touchingSideChild2 = firstChildCSS.float === 'left' ? 'left' : 'right';

				return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ?
					'vertical' : 'horizontal';
			}

			return (child1 &&
				(
					firstChildCSS.display === 'block' ||
					firstChildCSS.display === 'flex' ||
					firstChildCSS.display === 'table' ||
					firstChildCSS.display === 'grid' ||
					firstChildWidth >= elWidth &&
					elCSS[CSSFloatProperty] === 'none' ||
					child2 &&
					elCSS[CSSFloatProperty] === 'none' &&
					firstChildWidth + secondChildWidth > elWidth
				) ?
				'vertical' : 'horizontal'
			);
		},

		/**
		 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
		 * @param  {Number} x      X position
		 * @param  {Number} y      Y position
		 * @return {HTMLElement}   Element of the first found nearest Sortable
		 */
		_detectNearestEmptySortable = function(x, y) {
			for (var i = 0; i < sortables.length; i++) {
				if (_lastChild(sortables[i])) continue;

				var rect = _getRect(sortables[i]),
					threshold = sortables[i][expando].options.emptyInsertThreshold,
					insideHorizontally = x >= (rect.left - threshold) && x <= (rect.right + threshold),
					insideVertically = y >= (rect.top - threshold) && y <= (rect.bottom + threshold);

				if (insideHorizontally && insideVertically) {
					return sortables[i];
				}
			}
		},

		_isClientInRowColumn = function(x, y, el, axis, options) {
			var targetRect = _getRect(el),
				targetS1Opp = axis === 'vertical' ? targetRect.left : targetRect.top,
				targetS2Opp = axis === 'vertical' ? targetRect.right : targetRect.bottom,
				mouseOnOppAxis = axis === 'vertical' ? x : y;

			return targetS1Opp < mouseOnOppAxis && mouseOnOppAxis < targetS2Opp;
		},

		_isElInRowColumn = function(el1, el2, axis) {
			var el1Rect = el1 === dragEl && realDragElRect || _getRect(el1),
				el2Rect = el2 === dragEl && realDragElRect || _getRect(el2),
				el1S1Opp = axis === 'vertical' ? el1Rect.left : el1Rect.top,
				el1S2Opp = axis === 'vertical' ? el1Rect.right : el1Rect.bottom,
				el1OppLength = axis === 'vertical' ? el1Rect.width : el1Rect.height,
				el2S1Opp = axis === 'vertical' ? el2Rect.left : el2Rect.top,
				el2S2Opp = axis === 'vertical' ? el2Rect.right : el2Rect.bottom,
				el2OppLength = axis === 'vertical' ? el2Rect.width : el2Rect.height;

			return (
				el1S1Opp === el2S1Opp ||
				el1S2Opp === el2S2Opp ||
				(el1S1Opp + el1OppLength / 2) === (el2S1Opp + el2OppLength / 2)
			);
		},

		_getParentAutoScrollElement = function(el, includeSelf) {
			// skip to window
			if (!el || !el.getBoundingClientRect) return _getWindowScrollingElement();

			var elem = el;
			var gotSelf = false;
			do {
				// we don't need to get elem css if it isn't even overflowing in the first place (performance)
				if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
					var elemCSS = _css(elem);
					if (
						elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') ||
						elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')
					) {
						if (!elem || !elem.getBoundingClientRect || elem === document.body) return _getWindowScrollingElement();

						if (gotSelf || includeSelf) return elem;
						gotSelf = true;
					}
				}
			/* jshint boss:true */
			} while (elem = elem.parentNode);

			return _getWindowScrollingElement();
		},

		_getWindowScrollingElement = function() {
			if (IE11OrLess) {
				return document.documentElement;
			} else {
				return document.scrollingElement;
			}
		},

		_scrollBy = function(el, x, y) {
			el.scrollLeft += x;
			el.scrollTop += y;
		},

		_autoScroll = _throttle(function (/**Event*/evt, /**Object*/options, /**HTMLElement*/rootEl, /**Boolean*/isFallback) {
			// Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
			if (options.scroll) {
				var _this = rootEl ? rootEl[expando] : window,
					sens = options.scrollSensitivity,
					speed = options.scrollSpeed,

					x = evt.clientX,
					y = evt.clientY,

					winScroller = _getWindowScrollingElement(),

					scrollThisInstance = false;

				// Detect scrollEl
				if (scrollParentEl !== rootEl) {
					_clearAutoScrolls();

					scrollEl = options.scroll;
					scrollCustomFn = options.scrollFn;

					if (scrollEl === true) {
						scrollEl = _getParentAutoScrollElement(rootEl, true);
						scrollParentEl = scrollEl;
					}
				}


				var layersOut = 0;
				var currentParent = scrollEl;
				do {
					var	el = currentParent,
						rect = _getRect(el),

						top = rect.top,
						bottom = rect.bottom,
						left = rect.left,
						right = rect.right,

						width = rect.width,
						height = rect.height,

						scrollWidth,
						scrollHeight,

						css,

						vx,
						vy,

						canScrollX,
						canScrollY,

						scrollPosX,
						scrollPosY;


					scrollWidth = el.scrollWidth;
					scrollHeight = el.scrollHeight;

					css = _css(el);

					scrollPosX = el.scrollLeft;
					scrollPosY = el.scrollTop;

					if (el === winScroller) {
						canScrollX = width < scrollWidth && (css.overflowX === 'auto' || css.overflowX === 'scroll' || css.overflowX === 'visible');
						canScrollY = height < scrollHeight && (css.overflowY === 'auto' || css.overflowY === 'scroll' || css.overflowY === 'visible');
					} else {
						canScrollX = width < scrollWidth && (css.overflowX === 'auto' || css.overflowX === 'scroll');
						canScrollY = height < scrollHeight && (css.overflowY === 'auto' || css.overflowY === 'scroll');
					}

					vx = canScrollX && (abs(right - x) <= sens && (scrollPosX + width) < scrollWidth) - (abs(left - x) <= sens && !!scrollPosX);

					vy = canScrollY && (abs(bottom - y) <= sens && (scrollPosY + height) < scrollHeight) - (abs(top - y) <= sens && !!scrollPosY);


					if (!autoScrolls[layersOut]) {
						for (var i = 0; i <= layersOut; i++) {
							if (!autoScrolls[i]) {
								autoScrolls[i] = {};
							}
						}
					}

					if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
						autoScrolls[layersOut].el = el;
						autoScrolls[layersOut].vx = vx;
						autoScrolls[layersOut].vy = vy;

						clearInterval(autoScrolls[layersOut].pid);

						if (el && (vx != 0 || vy != 0)) {
							scrollThisInstance = true;
							/* jshint loopfunc:true */
							autoScrolls[layersOut].pid = setInterval((function () {
								// emulate drag over during autoscroll (fallback), emulating native DnD behaviour
								if (isFallback && this.layer === 0) {
									Sortable.active._emulateDragOver(true);
									Sortable.active._onTouchMove(touchEvt, true);
								}
								var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
								var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

								if ('function' === typeof(scrollCustomFn)) {
									if (scrollCustomFn.call(_this, scrollOffsetX, scrollOffsetY, evt, touchEvt, autoScrolls[this.layer].el) !== 'continue') {
										return;
									}
								}

								_scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
							}).bind({layer: layersOut}), 24);
						}
					}
					layersOut++;
				} while (options.bubbleScroll && currentParent !== winScroller && (currentParent = _getParentAutoScrollElement(currentParent, false)));
				scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
			}
		}, 30),

		_clearAutoScrolls = function () {
			autoScrolls.forEach(function(autoScroll) {
				clearInterval(autoScroll.pid);
			});
			autoScrolls = [];
		},

		_prepareGroup = function (options) {
			function toFn(value, pull) {
				return function(to, from, dragEl, evt) {
					var sameGroup = to.options.group.name &&
									from.options.group.name &&
									to.options.group.name === from.options.group.name;

					if (value == null && (pull || sameGroup)) {
						// Default pull value
						// Default pull and put value if same group
						return true;
					} else if (value == null || value === false) {
						return false;
					} else if (pull && value === 'clone') {
						return value;
					} else if (typeof value === 'function') {
						return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
					} else {
						var otherGroup = (pull ? to : from).options.group.name;

						return (value === true ||
						(typeof value === 'string' && value === otherGroup) ||
						(value.join && value.indexOf(otherGroup) > -1));
					}
				};
			}

			var group = {};
			var originalGroup = options.group;

			if (!originalGroup || typeof originalGroup != 'object') {
				originalGroup = {name: originalGroup};
			}

			group.name = originalGroup.name;
			group.checkPull = toFn(originalGroup.pull, true);
			group.checkPut = toFn(originalGroup.put);
			group.revertClone = originalGroup.revertClone;

			options.group = group;
		},

		_checkAlignment = function(evt) {
			if (!dragEl || !dragEl.parentNode) return;
			dragEl.parentNode[expando] && dragEl.parentNode[expando]._computeIsAligned(evt);
		},

		_isTrueParentSortable = function(el, target) {
			var trueParent = target;
			while (!trueParent[expando]) {
				trueParent = trueParent.parentNode;
			}

			return el === trueParent;
		},

		_artificalBubble = function(sortable, originalEvt, method) {
			// Artificial IE bubbling
			var nextParent = sortable.parentNode;
			while (nextParent && !nextParent[expando]) {
				nextParent = nextParent.parentNode;
			}

			if (nextParent) {
				nextParent[expando][method](_extend(originalEvt, {
					artificialBubble: true
				}));
			}
		},

		_hideGhostForTarget = function() {
			if (!supportCssPointerEvents && ghostEl) {
				_css(ghostEl, 'display', 'none');
			}
		},

		_unhideGhostForTarget = function() {
			if (!supportCssPointerEvents && ghostEl) {
				_css(ghostEl, 'display', '');
			}
		};


	// #1184 fix - Prevent click event on fallback if dragged but item not changed position
	document.addEventListener('click', function(evt) {
		if (ignoreNextClick) {
			evt.preventDefault();
			evt.stopPropagation && evt.stopPropagation();
			evt.stopImmediatePropagation && evt.stopImmediatePropagation();
			ignoreNextClick = false;
			return false;
		}
	}, true);

	var nearestEmptyInsertDetectEvent = function(evt) {
		evt = evt.touches ? evt.touches[0] : evt;
		if (dragEl) {
			var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

			if (nearest) {
				nearest[expando]._onDragOver({
					clientX: evt.clientX,
					clientY: evt.clientY,
					target: nearest,
					rootEl: nearest
				});
			}
		}
	};
	// We do not want this to be triggered if completed (bubbling canceled), so only define it here
	_on(document, 'dragover', nearestEmptyInsertDetectEvent);
	_on(document, 'mousemove', nearestEmptyInsertDetectEvent);
	_on(document, 'touchmove', nearestEmptyInsertDetectEvent);

	/**
	 * @class  Sortable
	 * @param  {HTMLElement}  el
	 * @param  {Object}       [options]
	 */
	function Sortable(el, options) {
		if (!(el && el.nodeType && el.nodeType === 1)) {
			throw 'Sortable: `el` must be HTMLElement, not ' + {}.toString.call(el);
		}

		this.el = el; // root element
		this.options = options = _extend({}, options);


		// Export instance
		el[expando] = this;

		// Default options
		var defaults = {
			group: null,
			sort: true,
			disabled: false,
			store: null,
			handle: null,
			scroll: true,
			scrollSensitivity: 30,
			scrollSpeed: 10,
			bubbleScroll: true,
			draggable: /[uo]l/i.test(el.nodeName) ? '>li' : '>*',
			swapThreshold: 1, // percentage; 0 <= x <= 1
			invertSwap: false, // invert always
			invertedSwapThreshold: null, // will be set to same as swapThreshold if default
			removeCloneOnHide: true,
			direction: function() {
				return _detectDirection(el, this.options);
			},
			ghostClass: 'sortable-ghost',
			chosenClass: 'sortable-chosen',
			dragClass: 'sortable-drag',
			ignore: 'a, img',
			filter: null,
			preventOnFilter: true,
			animation: 0,
			easing: null,
			setData: function (dataTransfer, dragEl) {
				dataTransfer.setData('Text', dragEl.textContent);
			},
			dropBubble: false,
			dragoverBubble: false,
			dataIdAttr: 'data-id',
			delay: 0,
			touchStartThreshold: parseInt(window.devicePixelRatio, 10) || 1,
			forceFallback: false,
			fallbackClass: 'sortable-fallback',
			fallbackOnBody: false,
			fallbackTolerance: 0,
			fallbackOffset: {x: 0, y: 0},
			supportPointer: Sortable.supportPointer !== false && (
				('PointerEvent' in window) ||
				window.navigator && ('msPointerEnabled' in window.navigator) // microsoft
			),
			emptyInsertThreshold: 5
		};


		// Set default options
		for (var name in defaults) {
			!(name in options) && (options[name] = defaults[name]);
		}

		_prepareGroup(options);

		// Bind all private methods
		for (var fn in this) {
			if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
				this[fn] = this[fn].bind(this);
			}
		}

		// Setup drag mode
		this.nativeDraggable = options.forceFallback ? false : supportDraggable;

		if (this.nativeDraggable) {
			// Touch start threshold cannot be greater than the native dragstart threshold
			this.options.touchStartThreshold = 1;
		}

		// Bind events
		if (options.supportPointer) {
			_on(el, 'pointerdown', this._onTapStart);
		} else {
			_on(el, 'mousedown', this._onTapStart);
			_on(el, 'touchstart', this._onTapStart);
		}

		if (this.nativeDraggable) {
			_on(el, 'dragover', this);
			_on(el, 'dragenter', this);
		}

		sortables.push(this.el);

		// Restore sorting
		options.store && options.store.get && this.sort(options.store.get(this) || []);
	}

	Sortable.prototype = /** @lends Sortable.prototype */ {
		constructor: Sortable,

		_computeIsAligned: function(evt) {
			var target;

			if (ghostEl && !supportCssPointerEvents) {
				_hideGhostForTarget();
				target = document.elementFromPoint(evt.clientX, evt.clientY);
				_unhideGhostForTarget();
			} else {
				target = evt.target;
			}

			target = _closest(target, this.options.draggable, this.el, false);
			if (_alignedSilent) return;
			if (!dragEl || dragEl.parentNode !== this.el) return;

			var children = this.el.children;
			for (var i = 0; i < children.length; i++) {
				// Don't change for target in case it is changed to aligned before onDragOver is fired
				if (_closest(children[i], this.options.draggable, this.el, false) && children[i] !== target) {
					children[i].sortableMouseAligned = _isClientInRowColumn(evt.clientX, evt.clientY, children[i], this._getDirection(evt, null), this.options);
				}
			}
			// Used for nulling last target when not in element, nothing to do with checking if aligned
			if (!_closest(target, this.options.draggable, this.el, true)) {
				lastTarget = null;
			}

			_alignedSilent = true;
			setTimeout(function() {
				_alignedSilent = false;
			}, 30);

		},

		_getDirection: function(evt, target) {
			return (typeof this.options.direction === 'function') ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
		},

		_onTapStart: function (/** Event|TouchEvent */evt) {
			if (!evt.cancelable) return;
			var _this = this,
				el = this.el,
				options = this.options,
				preventOnFilter = options.preventOnFilter,
				type = evt.type,
				touch = evt.touches && evt.touches[0],
				target = (touch || evt).target,
				originalTarget = evt.target.shadowRoot && ((evt.path && evt.path[0]) || (evt.composedPath && evt.composedPath()[0])) || target,
				filter = options.filter,
				startIndex;

			_saveInputCheckedState(el);


			// IE: Calls events in capture mode if event element is nested. This ensures only correct element's _onTapStart goes through.
			// This process is also done in _onDragOver
			if (IE11OrLess && !evt.artificialBubble && !_isTrueParentSortable(el, target)) {
				return;
			}

			// Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
			if (dragEl) {
				return;
			}

			if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
				return; // only left button and enabled
			}

			// cancel dnd if original target is content editable
			if (originalTarget.isContentEditable) {
				return;
			}

			target = _closest(target, options.draggable, el, false);

			if (!target) {
				if (IE11OrLess) {
					_artificalBubble(el, evt, '_onTapStart');
				}
				return;
			}

			if (lastDownEl === target) {
				// Ignoring duplicate `down`
				return;
			}

			// Get the index of the dragged element within its parent
			startIndex = _index(target, options.draggable);

			// Check filter
			if (typeof filter === 'function') {
				if (filter.call(this, evt, target, this)) {
					_dispatchEvent(_this, originalTarget, 'filter', target, el, el, startIndex);
					preventOnFilter && evt.cancelable && evt.preventDefault();
					return; // cancel dnd
				}
			}
			else if (filter) {
				filter = filter.split(',').some(function (criteria) {
					criteria = _closest(originalTarget, criteria.trim(), el, false);

					if (criteria) {
						_dispatchEvent(_this, criteria, 'filter', target, el, el, startIndex);
						return true;
					}
				});

				if (filter) {
					preventOnFilter && evt.cancelable && evt.preventDefault();
					return; // cancel dnd
				}
			}

			if (options.handle && !_closest(originalTarget, options.handle, el, false)) {
				return;
			}

			// Prepare `dragstart`
			this._prepareDragStart(evt, touch, target, startIndex);
		},


		_handleAutoScroll: function(evt, fallback) {
			if (!dragEl || !this.options.scroll) return;
			var x = evt.clientX,
				y = evt.clientY,

				elem = document.elementFromPoint(x, y),
				_this = this;

			// IE does not seem to have native autoscroll,
			// Edge's autoscroll seems too conditional,
			// MACOS Safari does not have autoscroll,
			// Firefox and Chrome are good
			if (fallback || Edge || IE11OrLess || Safari) {
				_autoScroll(evt, _this.options, elem, fallback);

				// Listener for pointer element change
				var ogElemScroller = _getParentAutoScrollElement(elem, true);
				if (
					scrolling &&
					(
						!pointerElemChangedInterval ||
						x !== lastPointerElemX ||
						y !== lastPointerElemY
					)
				) {

					pointerElemChangedInterval && clearInterval(pointerElemChangedInterval);
					// Detect for pointer elem change, emulating native DnD behaviour
					pointerElemChangedInterval = setInterval(function() {
						if (!dragEl) return;
						// could also check if scroll direction on newElem changes due to parent autoscrolling
						var newElem = _getParentAutoScrollElement(document.elementFromPoint(x, y), true);
						if (newElem !== ogElemScroller) {
							ogElemScroller = newElem;
							_clearAutoScrolls();
							_autoScroll(evt, _this.options, ogElemScroller, fallback);
						}
					}, 10);
					lastPointerElemX = x;
					lastPointerElemY = y;
				}

			} else {
				// if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
				if (!_this.options.bubbleScroll || _getParentAutoScrollElement(elem, true) === _getWindowScrollingElement()) {
					_clearAutoScrolls();
					return;
				}
				_autoScroll(evt, _this.options, _getParentAutoScrollElement(elem, false), false);
			}
		},

		_prepareDragStart: function (/** Event */evt, /** Touch */touch, /** HTMLElement */target, /** Number */startIndex) {
			var _this = this,
				el = _this.el,
				options = _this.options,
				ownerDocument = el.ownerDocument,
				dragStartFn;

			if (target && !dragEl && (target.parentNode === el)) {
				rootEl = el;
				dragEl = target;
				parentEl = dragEl.parentNode;
				nextEl = dragEl.nextSibling;
				lastDownEl = target;
				activeGroup = options.group;
				oldIndex = startIndex;

				tapEvt = {
					target: dragEl,
					clientX: (touch || evt).clientX,
					clientY: (touch || evt).clientY
				};

				this._lastX = (touch || evt).clientX;
				this._lastY = (touch || evt).clientY;

				dragEl.style['will-change'] = 'all';
				// undo animation if needed
				dragEl.style.transition = '';
				dragEl.style.transform = '';

				dragStartFn = function () {
					// Delayed drag has been triggered
					// we can re-enable the events: touchmove/mousemove
					_this._disableDelayedDragEvents();

					if (!FireFox && _this.nativeDraggable) {
						dragEl.draggable = true;
					}

					// Bind the events: dragstart/dragend
					_this._triggerDragStart(evt, touch);

					// Drag start event
					_dispatchEvent(_this, rootEl, 'choose', dragEl, rootEl, rootEl, oldIndex);

					// Chosen item
					_toggleClass(dragEl, options.chosenClass, true);
				};

				// Disable "draggable"
				options.ignore.split(',').forEach(function (criteria) {
					_find(dragEl, criteria.trim(), _disableDraggable);
				});

				if (options.supportPointer) {
					_on(ownerDocument, 'pointerup', _this._onDrop);
				} else {
					_on(ownerDocument, 'mouseup', _this._onDrop);
					_on(ownerDocument, 'touchend', _this._onDrop);
					_on(ownerDocument, 'touchcancel', _this._onDrop);
				}

				// Make dragEl draggable (must be before delay for FireFox)
				if (FireFox && this.nativeDraggable) {
					this.options.touchStartThreshold = 4;
					dragEl.draggable = true;
				}

				// Delay is impossible for native DnD in Edge or IE
				if (options.delay && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
					// If the user moves the pointer or let go the click or touch
					// before the delay has been reached:
					// disable the delayed drag
					_on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchend', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
					_on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
					_on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
					options.supportPointer && _on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);

					_this._dragStartTimer = setTimeout(dragStartFn, options.delay);
				} else {
					dragStartFn();
				}
			}
		},

		_delayedDragTouchMoveHandler: function (/** TouchEvent|PointerEvent **/e) {
			var touch = e.touches ? e.touches[0] : e;
			if (max(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY))
					>= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))
			) {
				this._disableDelayedDrag();
			}
		},

		_disableDelayedDrag: function () {
			dragEl && _disableDraggable(dragEl);
			clearTimeout(this._dragStartTimer);

			this._disableDelayedDragEvents();
		},

		_disableDelayedDragEvents: function () {
			var ownerDocument = this.el.ownerDocument;
			_off(ownerDocument, 'mouseup', this._disableDelayedDrag);
			_off(ownerDocument, 'touchend', this._disableDelayedDrag);
			_off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
			_off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
			_off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
			_off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
		},

		_triggerDragStart: function (/** Event */evt, /** Touch */touch) {
			touch = touch || (evt.pointerType == 'touch' ? evt : null);

			if (!this.nativeDraggable || touch) {
				if (this.options.supportPointer) {
					_on(document, 'pointermove', this._onTouchMove);
				} else if (touch) {
					_on(document, 'touchmove', this._onTouchMove);
				} else {
					_on(document, 'mousemove', this._onTouchMove);
				}
			} else {
				_on(dragEl, 'dragend', this);
				_on(rootEl, 'dragstart', this._onDragStart);
			}

			try {
				if (document.selection) {
					// Timeout neccessary for IE9
					_nextTick(function () {
						document.selection.empty();
					});
				} else {
					window.getSelection().removeAllRanges();
				}
			} catch (err) {
			}
		},

		_dragStarted: function (fallback, evt) {
			awaitingDragStarted = false;
			if (rootEl && dragEl) {
				if (this.nativeDraggable) {
					_on(document, 'dragover', this._handleAutoScroll);
					_on(document, 'dragover', _checkAlignment);
				}
				var options = this.options;

				// Apply effect
				!fallback && _toggleClass(dragEl, options.dragClass, false);
				_toggleClass(dragEl, options.ghostClass, true);

				// In case dragging an animated element
				_css(dragEl, 'transform', '');

				Sortable.active = this;

				fallback && this._appendGhost();

				// Drag start event
				_dispatchEvent(this, rootEl, 'start', dragEl, rootEl, rootEl, oldIndex, undefined, evt);
			} else {
				this._nulling();
			}
		},

		_emulateDragOver: function (forAutoScroll) {
			if (touchEvt) {
				if (this._lastX === touchEvt.clientX && this._lastY === touchEvt.clientY && !forAutoScroll) {
					return;
				}
				this._lastX = touchEvt.clientX;
				this._lastY = touchEvt.clientY;

				_hideGhostForTarget();

				var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
				var parent = target;

				while (target && target.shadowRoot) {
					target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
					parent = target;
				}

				if (parent) {
					do {
						if (parent[expando]) {
							var inserted;

							inserted = parent[expando]._onDragOver({
								clientX: touchEvt.clientX,
								clientY: touchEvt.clientY,
								target: target,
								rootEl: parent
							});

							if (inserted && !this.options.dragoverBubble) {
								break;
							}
						}

						target = parent; // store last element
					}
					/* jshint boss:true */
					while (parent = parent.parentNode);
				}
				dragEl.parentNode[expando]._computeIsAligned(touchEvt);

				_unhideGhostForTarget();
			}
		},


		_onTouchMove: function (/**TouchEvent*/evt, forAutoScroll) {
			if (tapEvt) {
				var	options = this.options,
					fallbackTolerance = options.fallbackTolerance,
					fallbackOffset = options.fallbackOffset,
					touch = evt.touches ? evt.touches[0] : evt,
					matrix = ghostEl && _matrix(ghostEl),
					scaleX = ghostEl && matrix && matrix.a,
					scaleY = ghostEl && matrix && matrix.d,
					relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && _getRelativeScrollOffset(ghostRelativeParent),
					dx = ((touch.clientX - tapEvt.clientX)
							+ fallbackOffset.x) / (scaleX || 1)
							+ (relativeScrollOffset ? (relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0]) : 0) / (scaleX || 1),
					dy = ((touch.clientY - tapEvt.clientY)
							+ fallbackOffset.y) / (scaleY || 1)
							+ (relativeScrollOffset ? (relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1]) : 0) / (scaleY || 1),
					translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)';

				// only set the status to dragging, when we are actually dragging
				if (!Sortable.active && !awaitingDragStarted) {
					if (fallbackTolerance &&
						min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY)) < fallbackTolerance
					) {
						return;
					}
					this._onDragStart(evt, true);
				}

				!forAutoScroll && this._handleAutoScroll(touch, true);

				moved = true;
				touchEvt = touch;

				_css(ghostEl, 'webkitTransform', translate3d);
				_css(ghostEl, 'mozTransform', translate3d);
				_css(ghostEl, 'msTransform', translate3d);
				_css(ghostEl, 'transform', translate3d);

				evt.cancelable && evt.preventDefault();
			}
		},

		_appendGhost: function () {
			// Bug if using scale(): https://stackoverflow.com/questions/2637058
			// Not being adjusted for
			if (!ghostEl) {
				var container = this.options.fallbackOnBody ? document.body : rootEl,
					rect = _getRect(dragEl, true, container, !PositionGhostAbsolutely),
					css = _css(dragEl),
					options = this.options;

				// Position absolutely
				if (PositionGhostAbsolutely) {
					// Get relatively positioned parent
					ghostRelativeParent = container;

					while (
						_css(ghostRelativeParent, 'position') === 'static' &&
						_css(ghostRelativeParent, 'transform') === 'none' &&
						ghostRelativeParent !== document
					) {
						ghostRelativeParent = ghostRelativeParent.parentNode;
					}

					if (ghostRelativeParent !== document) {
						var ghostRelativeParentRect = _getRect(ghostRelativeParent, true);

						rect.top -= ghostRelativeParentRect.top;
						rect.left -= ghostRelativeParentRect.left;
					}

					if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
						if (ghostRelativeParent === document) ghostRelativeParent = _getWindowScrollingElement();

						rect.top += ghostRelativeParent.scrollTop;
						rect.left += ghostRelativeParent.scrollLeft;
					} else {
						ghostRelativeParent = _getWindowScrollingElement();
					}
					ghostRelativeParentInitialScroll = _getRelativeScrollOffset(ghostRelativeParent);
				}


				ghostEl = dragEl.cloneNode(true);

				_toggleClass(ghostEl, options.ghostClass, false);
				_toggleClass(ghostEl, options.fallbackClass, true);
				_toggleClass(ghostEl, options.dragClass, true);

				_css(ghostEl, 'box-sizing', 'border-box');
				_css(ghostEl, 'margin', 0);
				_css(ghostEl, 'top', rect.top);
				_css(ghostEl, 'left', rect.left);
				_css(ghostEl, 'width', rect.width);
				_css(ghostEl, 'height', rect.height);
				_css(ghostEl, 'opacity', '0.8');
				_css(ghostEl, 'position', (PositionGhostAbsolutely ? 'absolute' : 'fixed'));
				_css(ghostEl, 'zIndex', '100000');
				_css(ghostEl, 'pointerEvents', 'none');

				container.appendChild(ghostEl);
			}
		},

		_onDragStart: function (/**Event*/evt, /**boolean*/fallback) {
			var _this = this;
			var dataTransfer = evt.dataTransfer;
			var options = _this.options;

			// Setup clone
			cloneEl = _clone(dragEl);

			cloneEl.draggable = false;
			cloneEl.style['will-change'] = '';

			this._hideClone();

			_toggleClass(cloneEl, _this.options.chosenClass, false);


			// #1143: IFrame support workaround
			_this._cloneId = _nextTick(function () {
				if (!_this.options.removeCloneOnHide) {
					rootEl.insertBefore(cloneEl, dragEl);
				}
				_dispatchEvent(_this, rootEl, 'clone', dragEl);
			});


			!fallback && _toggleClass(dragEl, options.dragClass, true);

			// Set proper drop events
			if (fallback) {
				ignoreNextClick = true;
				_this._loopId = setInterval(_this._emulateDragOver, 50);
			} else {
				// Undo what was set in _prepareDragStart before drag started
				_off(document, 'mouseup', _this._onDrop);
				_off(document, 'touchend', _this._onDrop);
				_off(document, 'touchcancel', _this._onDrop);

				if (dataTransfer) {
					dataTransfer.effectAllowed = 'move';
					options.setData && options.setData.call(_this, dataTransfer, dragEl);
				}

				_on(document, 'drop', _this);

				// #1276 fix:
				_css(dragEl, 'transform', 'translateZ(0)');
			}

			awaitingDragStarted = true;

			_this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
			_on(document, 'selectstart', _this);
			if (Safari) {
				_css(document.body, 'user-select', 'none');
			}
		},


		// Returns true - if no further action is needed (either inserted or another condition)
		_onDragOver: function (/**Event*/evt) {
			var el = this.el,
				target = evt.target,
				dragRect,
				targetRect,
				revert,
				options = this.options,
				group = options.group,
				activeSortable = Sortable.active,
				isOwner = (activeGroup === group),
				canSort = options.sort,
				_this = this;

			if (_silent) return;

			// IE event order fix
			if (IE11OrLess && !evt.rootEl && !evt.artificialBubble && !_isTrueParentSortable(el, target)) {
				return;
			}

			// Return invocation when dragEl is inserted (or completed)
			function completed(insertion) {
				if (insertion) {
					if (isOwner) {
						activeSortable._hideClone();
					} else {
						activeSortable._showClone(_this);
					}

					if (activeSortable) {
						// Set ghost class to new sortable's ghost class
						_toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
						_toggleClass(dragEl, options.ghostClass, true);
					}

					if (putSortable !== _this && _this !== Sortable.active) {
						putSortable = _this;
					} else if (_this === Sortable.active) {
						putSortable = null;
					}

					// Animation
					dragRect && _this._animate(dragRect, dragEl);
					target && targetRect && _this._animate(targetRect, target);
				}


				// Null lastTarget if it is not inside a previously swapped element
				if ((target === dragEl && !dragEl.animated) || (target === el && !target.animated)) {
					lastTarget = null;
				}
				// no bubbling and not fallback
				if (!options.dragoverBubble && !evt.rootEl && target !== document) {
					_this._handleAutoScroll(evt);
					dragEl.parentNode[expando]._computeIsAligned(evt);
				}

				!options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();

				return true;
			}

			// Call when dragEl has been inserted
			function changed() {
				_dispatchEvent(_this, rootEl, 'change', target, el, rootEl, oldIndex, _index(dragEl, options.draggable), evt);
			}


			if (evt.preventDefault !== void 0) {
				evt.cancelable && evt.preventDefault();
			}


			moved = true;

			target = _closest(target, options.draggable, el, true);

			// target is dragEl or target is animated
			if (!!_closest(evt.target, null, dragEl, true) || target.animated) {
				return completed(false);
			}

			if (target !== dragEl) {
				ignoreNextClick = false;
			}

			if (activeSortable && !options.disabled &&
				(isOwner
					? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
					: (
						putSortable === this ||
						(
							(this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) &&
							group.checkPut(this, activeSortable, dragEl, evt)
						)
					)
				)
			) {
				var axis = this._getDirection(evt, target);

				dragRect = _getRect(dragEl);

				if (revert) {
					this._hideClone();
					parentEl = rootEl; // actualization

					if (nextEl) {
						rootEl.insertBefore(dragEl, nextEl);
					} else {
						rootEl.appendChild(dragEl);
					}

					return completed(true);
				}

				var elLastChild = _lastChild(el);

				if (!elLastChild || _ghostIsLast(evt, axis, el) && !elLastChild.animated) {
					// assign target only if condition is true
					if (elLastChild && el === evt.target) {
						target = elLastChild;
					}

					if (target) {
						targetRect = _getRect(target);
					}

					if (isOwner) {
						activeSortable._hideClone();
					} else {
						activeSortable._showClone(this);
					}

					if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
						el.appendChild(dragEl);
						parentEl = el; // actualization
						realDragElRect = null;

						changed();
						return completed(true);
					}
				}
				else if (target && target !== dragEl && target.parentNode === el) {
					var direction = 0,
						targetBeforeFirstSwap,
						aligned = target.sortableMouseAligned,
						differentLevel = dragEl.parentNode !== el,
						side1 = axis === 'vertical' ? 'top' : 'left',
						scrolledPastTop = _isScrolledPast(target, 'top') || _isScrolledPast(dragEl, 'top'),
						scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;


					if (lastTarget !== target) {
						lastMode = null;
						targetBeforeFirstSwap = _getRect(target)[side1];
						pastFirstInvertThresh = false;
					}

					// Reference: https://www.lucidchart.com/documents/view/10fa0e93-e362-4126-aca2-b709ee56bd8b/0
					if (
						_isElInRowColumn(dragEl, target, axis) && aligned ||
						differentLevel ||
						scrolledPastTop ||
						options.invertSwap ||
						lastMode === 'insert' ||
						// Needed, in the case that we are inside target and inserted because not aligned... aligned will stay false while inside
						// and lastMode will change to 'insert', but we must swap
						lastMode === 'swap'
					) {
						// New target that we will be inside
						if (lastMode !== 'swap') {
							isCircumstantialInvert = options.invertSwap || differentLevel;
						}

						direction = _getSwapDirection(evt, target, axis,
							options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold,
							isCircumstantialInvert,
							lastTarget === target);
						lastMode = 'swap';
					} else {
						// Insert at position
						direction = _getInsertDirection(target);
						lastMode = 'insert';
					}
					if (direction === 0) return completed(false);

					realDragElRect = null;
					lastTarget = target;

					lastDirection = direction;

					targetRect = _getRect(target);

					var nextSibling = target.nextElementSibling,
						after = false;

					after = direction === 1;

					var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

					if (moveVector !== false) {
						if (moveVector === 1 || moveVector === -1) {
							after = (moveVector === 1);
						}

						_silent = true;
						setTimeout(_unsilent, 30);

						if (isOwner) {
							activeSortable._hideClone();
						} else {
							activeSortable._showClone(this);
						}

						if (after && !nextSibling) {
							el.appendChild(dragEl);
						} else {
							target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
						}

						// Undo chrome's scroll adjustment
						if (scrolledPastTop) {
							_scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
						}

						parentEl = dragEl.parentNode; // actualization

						// must be done before animation
						if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
							targetMoveDistance = abs(targetBeforeFirstSwap - _getRect(target)[side1]);
						}
						changed();

						return completed(true);
					}
				}

				if (el.contains(dragEl)) {
					return completed(false);
				}
			}

			if (IE11OrLess && !evt.rootEl) {
				_artificalBubble(el, evt, '_onDragOver');
			}

			return false;
		},

		_animate: function (prevRect, target) {
			var ms = this.options.animation;

			if (ms) {
				var currentRect = _getRect(target);

				if (target === dragEl) {
					realDragElRect = currentRect;
				}

				if (prevRect.nodeType === 1) {
					prevRect = _getRect(prevRect);
				}

				// Check if actually moving position
				if ((prevRect.left + prevRect.width / 2) !== (currentRect.left + currentRect.width / 2)
					|| (prevRect.top + prevRect.height / 2) !== (currentRect.top + currentRect.height / 2)
				) {
					var matrix = _matrix(this.el),
						scaleX = matrix && matrix.a,
						scaleY = matrix && matrix.d;

					_css(target, 'transition', 'none');
					_css(target, 'transform', 'translate3d('
						+ (prevRect.left - currentRect.left) / (scaleX ? scaleX : 1) + 'px,'
						+ (prevRect.top - currentRect.top) / (scaleY ? scaleY : 1) + 'px,0)'
					);

					forRepaintDummy = target.offsetWidth; // repaint
					_css(target, 'transition', 'transform ' + ms + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
					_css(target, 'transform', 'translate3d(0,0,0)');
				}

				(typeof target.animated === 'number') && clearTimeout(target.animated);
				target.animated = setTimeout(function () {
					_css(target, 'transition', '');
					_css(target, 'transform', '');
					target.animated = false;
				}, ms);
			}
		},

		_offUpEvents: function () {
			var ownerDocument = this.el.ownerDocument;

			_off(document, 'touchmove', this._onTouchMove);
			_off(document, 'pointermove', this._onTouchMove);
			_off(ownerDocument, 'mouseup', this._onDrop);
			_off(ownerDocument, 'touchend', this._onDrop);
			_off(ownerDocument, 'pointerup', this._onDrop);
			_off(ownerDocument, 'touchcancel', this._onDrop);
			_off(document, 'selectstart', this);
		},

		_onDrop: function (/**Event*/evt) {
			var el = this.el,
				options = this.options;
			awaitingDragStarted = false;
			scrolling = false;
			isCircumstantialInvert = false;
			pastFirstInvertThresh = false;

			clearInterval(this._loopId);

			clearInterval(pointerElemChangedInterval);
			_clearAutoScrolls();
			_cancelThrottle();

			clearTimeout(this._dragStartTimer);

			_cancelNextTick(this._cloneId);
			_cancelNextTick(this._dragStartId);

			// Unbind events
			_off(document, 'mousemove', this._onTouchMove);


			if (this.nativeDraggable) {
				_off(document, 'drop', this);
				_off(el, 'dragstart', this._onDragStart);
				_off(document, 'dragover', this._handleAutoScroll);
				_off(document, 'dragover', _checkAlignment);
			}

			if (Safari) {
				_css(document.body, 'user-select', '');
			}

			this._offUpEvents();

			if (evt) {
				if (moved) {
					evt.cancelable && evt.preventDefault();
					!options.dropBubble && evt.stopPropagation();
				}

				ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

				if (rootEl === parentEl || (putSortable && putSortable.lastPutMode !== 'clone')) {
					// Remove clone
					cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
				}

				if (dragEl) {
					if (this.nativeDraggable) {
						_off(dragEl, 'dragend', this);
					}

					_disableDraggable(dragEl);
					dragEl.style['will-change'] = '';

					// Remove class's
					_toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
					_toggleClass(dragEl, this.options.chosenClass, false);

					// Drag stop event
					_dispatchEvent(this, rootEl, 'unchoose', dragEl, parentEl, rootEl, oldIndex, null, evt);

					if (rootEl !== parentEl) {
						newIndex = _index(dragEl, options.draggable);

						if (newIndex >= 0) {
							// Add event
							_dispatchEvent(null, parentEl, 'add', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);

							// Remove event
							_dispatchEvent(this, rootEl, 'remove', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);

							// drag from one list and drop into another
							_dispatchEvent(null, parentEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
							_dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
						}

						putSortable && putSortable.save();
					}
					else {
						if (dragEl.nextSibling !== nextEl) {
							// Get the index of the dragged element within its parent
							newIndex = _index(dragEl, options.draggable);

							if (newIndex >= 0) {
								// drag & drop within the same list
								_dispatchEvent(this, rootEl, 'update', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
								_dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
							}
						}
					}

					if (Sortable.active) {
						/* jshint eqnull:true */
						if (newIndex == null || newIndex === -1) {
							newIndex = oldIndex;
						}
						_dispatchEvent(this, rootEl, 'end', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);

						// Save sorting
						this.save();
					}
				}

			}
			this._nulling();
		},

		_nulling: function() {
			rootEl =
			dragEl =
			parentEl =
			ghostEl =
			nextEl =
			cloneEl =
			lastDownEl =

			scrollEl =
			scrollParentEl =
			autoScrolls.length =

			pointerElemChangedInterval =
			lastPointerElemX =
			lastPointerElemY =

			tapEvt =
			touchEvt =

			moved =
			newIndex =
			oldIndex =

			lastTarget =
			lastDirection =

			forRepaintDummy =
			realDragElRect =

			putSortable =
			activeGroup =
			Sortable.active = null;

			savedInputChecked.forEach(function (el) {
				el.checked = true;
			});

			savedInputChecked.length = 0;
		},

		handleEvent: function (/**Event*/evt) {
			switch (evt.type) {
				case 'drop':
				case 'dragend':
					this._onDrop(evt);
					break;

				case 'dragenter':
				case 'dragover':
					if (dragEl) {
						this._onDragOver(evt);
						_globalDragOver(evt);
					}
					break;

				case 'selectstart':
					evt.preventDefault();
					break;
			}
		},


		/**
		 * Serializes the item into an array of string.
		 * @returns {String[]}
		 */
		toArray: function () {
			var order = [],
				el,
				children = this.el.children,
				i = 0,
				n = children.length,
				options = this.options;

			for (; i < n; i++) {
				el = children[i];
				if (_closest(el, options.draggable, this.el, false)) {
					order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
				}
			}

			return order;
		},


		/**
		 * Sorts the elements according to the array.
		 * @param  {String[]}  order  order of the items
		 */
		sort: function (order) {
			var items = {}, rootEl = this.el;

			this.toArray().forEach(function (id, i) {
				var el = rootEl.children[i];

				if (_closest(el, this.options.draggable, rootEl, false)) {
					items[id] = el;
				}
			}, this);

			order.forEach(function (id) {
				if (items[id]) {
					rootEl.removeChild(items[id]);
					rootEl.appendChild(items[id]);
				}
			});
		},


		/**
		 * Save the current sorting
		 */
		save: function () {
			var store = this.options.store;
			store && store.set && store.set(this);
		},


		/**
		 * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
		 * @param   {HTMLElement}  el
		 * @param   {String}       [selector]  default: `options.draggable`
		 * @returns {HTMLElement|null}
		 */
		closest: function (el, selector) {
			return _closest(el, selector || this.options.draggable, this.el, false);
		},


		/**
		 * Set/get option
		 * @param   {string} name
		 * @param   {*}      [value]
		 * @returns {*}
		 */
		option: function (name, value) {
			var options = this.options;

			if (value === void 0) {
				return options[name];
			} else {
				options[name] = value;

				if (name === 'group') {
					_prepareGroup(options);
				}
			}
		},


		/**
		 * Destroy
		 */
		destroy: function () {
			var el = this.el;

			el[expando] = null;

			_off(el, 'mousedown', this._onTapStart);
			_off(el, 'touchstart', this._onTapStart);
			_off(el, 'pointerdown', this._onTapStart);

			if (this.nativeDraggable) {
				_off(el, 'dragover', this);
				_off(el, 'dragenter', this);
			}
			// Remove draggable attributes
			Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
				el.removeAttribute('draggable');
			});

			this._onDrop();

			sortables.splice(sortables.indexOf(this.el), 1);

			this.el = el = null;
		},

		_hideClone: function() {
			if (!cloneEl.cloneHidden) {
				_css(cloneEl, 'display', 'none');
				cloneEl.cloneHidden = true;
				if (cloneEl.parentNode && this.options.removeCloneOnHide) {
					cloneEl.parentNode.removeChild(cloneEl);
				}
			}
		},

		_showClone: function(putSortable) {
			if (putSortable.lastPutMode !== 'clone') {
				this._hideClone();
				return;
			}

			if (cloneEl.cloneHidden) {
				// show clone at dragEl or original position
				if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
					rootEl.insertBefore(cloneEl, dragEl);
				} else if (nextEl) {
					rootEl.insertBefore(cloneEl, nextEl);
				} else {
					rootEl.appendChild(cloneEl);
				}

				if (this.options.group.revertClone) {
					this._animate(dragEl, cloneEl);
				}
				_css(cloneEl, 'display', '');
				cloneEl.cloneHidden = false;
			}
		}
	};

	function _closest(/**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx, includeCTX) {
		if (el) {
			ctx = ctx || document;

			do {
				if (
					selector != null &&
					(
						selector[0] === '>' && el.parentNode === ctx && _matches(el, selector.substring(1)) ||
						_matches(el, selector)
					) ||
					includeCTX && el === ctx
				) {
					return el;
				}

				if (el === ctx) break;
				/* jshint boss:true */
			} while (el = _getParentOrHost(el));
		}

		return null;
	}


	function _getParentOrHost(el) {
		return (el.host && el !== document && el.host.nodeType)
			? el.host
			: el.parentNode;
	}


	function _globalDragOver(/**Event*/evt) {
		if (evt.dataTransfer) {
			evt.dataTransfer.dropEffect = 'move';
		}
		evt.cancelable && evt.preventDefault();
	}


	function _on(el, event, fn) {
		el.addEventListener(event, fn, captureMode);
	}


	function _off(el, event, fn) {
		el.removeEventListener(event, fn, captureMode);
	}


	function _toggleClass(el, name, state) {
		if (el && name) {
			if (el.classList) {
				el.classList[state ? 'add' : 'remove'](name);
			}
			else {
				var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
				el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
			}
		}
	}


	function _css(el, prop, val) {
		var style = el && el.style;

		if (style) {
			if (val === void 0) {
				if (document.defaultView && document.defaultView.getComputedStyle) {
					val = document.defaultView.getComputedStyle(el, '');
				}
				else if (el.currentStyle) {
					val = el.currentStyle;
				}

				return prop === void 0 ? val : val[prop];
			}
			else {
				if (!(prop in style) && prop.indexOf('webkit') === -1) {
					prop = '-webkit-' + prop;
				}

				style[prop] = val + (typeof val === 'string' ? '' : 'px');
			}
		}
	}

	function _matrix(el) {
		var appliedTransforms = '';
		do {
			var transform = _css(el, 'transform');

			if (transform && transform !== 'none') {
				appliedTransforms = transform + ' ' + appliedTransforms;
			}
			/* jshint boss:true */
		} while (el = el.parentNode);

		if (window.DOMMatrix) {
			return new DOMMatrix(appliedTransforms);
		} else if (window.WebKitCSSMatrix) {
			return new WebKitCSSMatrix(appliedTransforms);
		} else if (window.CSSMatrix) {
			return new CSSMatrix(appliedTransforms);
		}
	}


	function _find(ctx, tagName, iterator) {
		if (ctx) {
			var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;

			if (iterator) {
				for (; i < n; i++) {
					iterator(list[i], i);
				}
			}

			return list;
		}

		return [];
	}



	function _dispatchEvent(sortable, rootEl, name, targetEl, toEl, fromEl, startIndex, newIndex, originalEvt) {
		sortable = (sortable || rootEl[expando]);
		var evt,
			options = sortable.options,
			onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);
		// Support for new CustomEvent feature
		if (window.CustomEvent && !IE11OrLess && !Edge) {
			evt = new CustomEvent(name, {
				bubbles: true,
				cancelable: true
			});
		} else {
			evt = document.createEvent('Event');
			evt.initEvent(name, true, true);
		}

		evt.to = toEl || rootEl;
		evt.from = fromEl || rootEl;
		evt.item = targetEl || rootEl;
		evt.clone = cloneEl;

		evt.oldIndex = startIndex;
		evt.newIndex = newIndex;

		evt.originalEvent = originalEvt;
		evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

		if (rootEl) {
			rootEl.dispatchEvent(evt);
		}

		if (options[onName]) {
			options[onName].call(sortable, evt);
		}
	}


	function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvt, willInsertAfter) {
		var evt,
			sortable = fromEl[expando],
			onMoveFn = sortable.options.onMove,
			retVal;
		// Support for new CustomEvent feature
		if (window.CustomEvent && !IE11OrLess && !Edge) {
			evt = new CustomEvent('move', {
				bubbles: true,
				cancelable: true
			});
		} else {
			evt = document.createEvent('Event');
			evt.initEvent('move', true, true);
		}

		evt.to = toEl;
		evt.from = fromEl;
		evt.dragged = dragEl;
		evt.draggedRect = dragRect;
		evt.related = targetEl || toEl;
		evt.relatedRect = targetRect || _getRect(toEl);
		evt.willInsertAfter = willInsertAfter;

		evt.originalEvent = originalEvt;

		fromEl.dispatchEvent(evt);

		if (onMoveFn) {
			retVal = onMoveFn.call(sortable, evt, originalEvt);
		}

		return retVal;
	}

	function _disableDraggable(el) {
		el.draggable = false;
	}

	function _unsilent() {
		_silent = false;
	}

	/**
	 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
	 * and non-draggable elements
	 * @param  {HTMLElement} el       The parent element
	 * @param  {Number} childNum      The index of the child
	 * @param  {Object} options       Parent Sortable's options
	 * @return {HTMLElement}          The child at index childNum, or null if not found
	 */
	function _getChild(el, childNum, options) {
		var currentChild = 0,
			i = 0,
			children = el.children;

		while (i < children.length) {
			if (
				children[i].style.display !== 'none' &&
				children[i] !== ghostEl &&
				children[i] !== dragEl &&
				_closest(children[i], options.draggable, el, false)
			) {
				if (currentChild === childNum) {
					return children[i];
				}
				currentChild++;
			}

			i++;
		}
		return null;
	}

	/**
	 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
	 * @param  {HTMLElement} el       Parent element
	 * @return {HTMLElement}          The last child, ignoring ghostEl
	 */
	function _lastChild(el) {
		var last = el.lastElementChild;

		while (last && (last === ghostEl || last.style.display === 'none')) {
			last = last.previousElementSibling;
		}

		return last || null;
	}

	function _ghostIsLast(evt, axis, el) {
		var elRect = _getRect(_lastChild(el)),
			mouseOnAxis = axis === 'vertical' ? evt.clientY : evt.clientX,
			mouseOnOppAxis = axis === 'vertical' ? evt.clientX : evt.clientY,
			targetS2 = axis === 'vertical' ? elRect.bottom : elRect.right,
			targetS1Opp = axis === 'vertical' ? elRect.left : elRect.top,
			targetS2Opp = axis === 'vertical' ? elRect.right : elRect.bottom,
			spacer = 10;

		return (
			axis === 'vertical' ?
				(mouseOnOppAxis > targetS2Opp + spacer || mouseOnOppAxis <= targetS2Opp && mouseOnAxis > targetS2 && mouseOnOppAxis >= targetS1Opp) :
				(mouseOnAxis > targetS2 && mouseOnOppAxis > targetS1Opp || mouseOnAxis <= targetS2 && mouseOnOppAxis > targetS2Opp + spacer)
		);
	}

	function _getSwapDirection(evt, target, axis, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
		var targetRect = _getRect(target),
			mouseOnAxis = axis === 'vertical' ? evt.clientY : evt.clientX,
			targetLength = axis === 'vertical' ? targetRect.height : targetRect.width,
			targetS1 = axis === 'vertical' ? targetRect.top : targetRect.left,
			targetS2 = axis === 'vertical' ? targetRect.bottom : targetRect.right,
			dragRect = _getRect(dragEl),
			invert = false;


		if (!invertSwap) {
			// Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
			if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) { // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
				// check if past first invert threshold on side opposite of lastDirection
				if (!pastFirstInvertThresh &&
					(lastDirection === 1 ?
						(
							mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2
						) :
						(
							mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2
						)
					)
				)
				{
					// past first invert threshold, do not restrict inverted threshold to dragEl shadow
					pastFirstInvertThresh = true;
				}

				if (!pastFirstInvertThresh) {
					var dragS1 = axis === 'vertical' ? dragRect.top : dragRect.left,
						dragS2 = axis === 'vertical' ? dragRect.bottom : dragRect.right;
					// dragEl shadow (target move distance shadow)
					if (
						lastDirection === 1 ?
						(
							mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
						) :
						(
							mouseOnAxis > targetS2 - targetMoveDistance
						)
					)
					{
						return lastDirection * -1;
					}
				} else {
					invert = true;
				}
			} else {
				// Regular
				if (
					mouseOnAxis > targetS1 + (targetLength * (1 - swapThreshold) / 2) &&
					mouseOnAxis < targetS2 - (targetLength * (1 - swapThreshold) / 2)
				) {
					return _getInsertDirection(target);
				}
			}
		}

		invert = invert || invertSwap;

		if (invert) {
			// Invert of regular
			if (
				mouseOnAxis < targetS1 + (targetLength * invertedSwapThreshold / 2) ||
				mouseOnAxis > targetS2 - (targetLength * invertedSwapThreshold / 2)
			)
			{
				return ((mouseOnAxis > targetS1 + targetLength / 2) ? 1 : -1);
			}
		}

		return 0;
	}

	/**
	 * Gets the direction dragEl must be swapped relative to target in order to make it
	 * seem that dragEl has been "inserted" into that element's position
	 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
	 * @return {Number}                   Direction dragEl must be swapped
	 */
	function _getInsertDirection(target) {
		var dragElIndex = _index(dragEl),
			targetIndex = _index(target);

		if (dragElIndex < targetIndex) {
			return 1;
		} else {
			return -1;
		}
	}


	/**
	 * Generate id
	 * @param   {HTMLElement} el
	 * @returns {String}
	 * @private
	 */
	function _generateId(el) {
		var str = el.tagName + el.className + el.src + el.href + el.textContent,
			i = str.length,
			sum = 0;

		while (i--) {
			sum += str.charCodeAt(i);
		}

		return sum.toString(36);
	}

	/**
	 * Returns the index of an element within its parent for a selected set of
	 * elements
	 * @param  {HTMLElement} el
	 * @param  {selector} selector
	 * @return {number}
	 */
	function _index(el, selector) {
		var index = 0;

		if (!el || !el.parentNode) {
			return -1;
		}

		while (el && (el = el.previousElementSibling)) {
			if ((el.nodeName.toUpperCase() !== 'TEMPLATE') && el !== cloneEl) {
				index++;
			}
		}

		return index;
	}

	function _matches(/**HTMLElement*/el, /**String*/selector) {
		if (el) {
			try {
				if (el.matches) {
					return el.matches(selector);
				} else if (el.msMatchesSelector) {
					return el.msMatchesSelector(selector);
				} else if (el.webkitMatchesSelector) {
					return el.webkitMatchesSelector(selector);
				}
			} catch(_) {
				return false;
			}
		}

		return false;
	}

	var _throttleTimeout;
	function _throttle(callback, ms) {
		return function () {
			if (!_throttleTimeout) {
				var args = arguments,
					_this = this;

				_throttleTimeout = setTimeout(function () {
					if (args.length === 1) {
						callback.call(_this, args[0]);
					} else {
						callback.apply(_this, args);
					}

					_throttleTimeout = void 0;
				}, ms);
			}
		};
	}

	function _cancelThrottle() {
		clearTimeout(_throttleTimeout);
		_throttleTimeout = void 0;
	}

	function _extend(dst, src) {
		if (dst && src) {
			for (var key in src) {
				if (src.hasOwnProperty(key)) {
					dst[key] = src[key];
				}
			}
		}

		return dst;
	}

	function _clone(el) {
		if (Polymer && Polymer.dom) {
			return Polymer.dom(el).cloneNode(true);
		}
		else if ($) {
			return $(el).clone(true)[0];
		}
		else {
			return el.cloneNode(true);
		}
	}

	function _saveInputCheckedState(root) {
		savedInputChecked.length = 0;

		var inputs = root.getElementsByTagName('input');
		var idx = inputs.length;

		while (idx--) {
			var el = inputs[idx];
			el.checked && savedInputChecked.push(el);
		}
	}

	function _nextTick(fn) {
		return setTimeout(fn, 0);
	}

	function _cancelNextTick(id) {
		return clearTimeout(id);
	}


	/**
	 * Returns the "bounding client rect" of given element
	 * @param  {HTMLElement} el                The element whose boundingClientRect is wanted
	 * @param  {[HTMLElement]} container       the parent the element will be placed in
	 * @param  {[Boolean]} adjustForTransform  Whether the rect should compensate for parent's transform
	 * @return {Object}                        The boundingClientRect of el
	 */
	function _getRect(el, adjustForTransform, container, adjustForFixed) {
		if (!el.getBoundingClientRect && el !== win) return;

		var elRect,
			top,
			left,
			bottom,
			right,
			height,
			width;

		if (el !== win && el !== _getWindowScrollingElement()) {
			elRect = el.getBoundingClientRect();
			top = elRect.top;
			left = elRect.left;
			bottom = elRect.bottom;
			right = elRect.right;
			height = elRect.height;
			width = elRect.width;
		} else {
			top = 0;
			left = 0;
			bottom = window.innerHeight;
			right = window.innerWidth;
			height = window.innerHeight;
			width = window.innerWidth;
		}

		if (adjustForFixed && el !== win) {
			// Adjust for translate()
			container = container || el.parentNode;

			// solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
			// Not needed on <= IE11
			if (!IE11OrLess) {
				do {
					if (container && container.getBoundingClientRect && _css(container, 'transform') !== 'none') {
						var containerRect = container.getBoundingClientRect();

						// Set relative to edges of padding box of container
						top -= containerRect.top + parseInt(_css(container, 'border-top-width'));
						left -= containerRect.left + parseInt(_css(container, 'border-left-width'));
						bottom = top + elRect.height;
						right = left + elRect.width;

						break;
					}
					/* jshint boss:true */
				} while (container = container.parentNode);
			}
		}

		if (adjustForTransform && el !== win) {
			// Adjust for scale()
			var matrix = _matrix(container || el),
				scaleX = matrix && matrix.a,
				scaleY = matrix && matrix.d;

			if (matrix) {
				top /= scaleY;
				left /= scaleX;

				width /= scaleX;
				height /= scaleY;

				bottom = top + height;
				right = left + width;
			}
		}

		return {
			top: top,
			left: left,
			bottom: bottom,
			right: right,
			width: width,
			height: height
		};
	}


	/**
	 * Checks if a side of an element is scrolled past a side of it's parents
	 * @param  {HTMLElement}  el       The element who's side being scrolled out of view is in question
	 * @param  {String}       side     Side of the element in question ('top', 'left', 'right', 'bottom')
	 * @return {HTMLElement}           The parent scroll element that the el's side is scrolled past, or null if there is no such element
	 */
	function _isScrolledPast(el, side) {
		var parent = _getParentAutoScrollElement(el, true),
			elSide = _getRect(el)[side];

		/* jshint boss:true */
		while (parent) {
			var parentSide = _getRect(parent)[side],
				visible;

			if (side === 'top' || side === 'left') {
				visible = elSide >= parentSide;
			} else {
				visible = elSide <= parentSide;
			}

			if (!visible) return parent;

			if (parent === _getWindowScrollingElement()) break;

			parent = _getParentAutoScrollElement(parent, false);
		}

		return false;
	}

	/**
	 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
	 * The value is returned in real pixels.
	 * @param  {HTMLElement} el
	 * @return {Array}             Offsets in the format of [left, top]
	 */
	function _getRelativeScrollOffset(el) {
		var offsetLeft = 0,
			offsetTop = 0,
			winScroller = _getWindowScrollingElement();

		if (el) {
			do {
				var matrix = _matrix(el),
					scaleX = matrix.a,
					scaleY = matrix.d;

				offsetLeft += el.scrollLeft * scaleX;
				offsetTop += el.scrollTop * scaleY;
			} while (el !== winScroller && (el = el.parentNode));
		}

		return [offsetLeft, offsetTop];
	}

	// Fixed #973:
	_on(document, 'touchmove', function(evt) {
		if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
			evt.preventDefault();
		}
	});


	// Export utils
	Sortable.utils = {
		on: _on,
		off: _off,
		css: _css,
		find: _find,
		is: function (el, selector) {
			return !!_closest(el, selector, el, false);
		},
		extend: _extend,
		throttle: _throttle,
		closest: _closest,
		toggleClass: _toggleClass,
		clone: _clone,
		index: _index,
		nextTick: _nextTick,
		cancelNextTick: _cancelNextTick,
		detectDirection: _detectDirection,
		getChild: _getChild
	};


	/**
	 * Create sortable instance
	 * @param {HTMLElement}  el
	 * @param {Object}      [options]
	 */
	Sortable.create = function (el, options) {
		return new Sortable(el, options);
	};


	// Export
	Sortable.version = '1.8.4';
	return Sortable;
});


/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/index.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/index.ts ***!
  \*******************************************************************************/
/*! exports provided: WishlistsComponent, WishlistListComponent, WishlistListResolve, WishlistComponent, WishlistResolve, WishlistGuard, WishlistDetailsComponent, WishlistDetailsResolve, WishlistDetailsGuard, WishlistFollowModalComponent, WishlistItemModalComponent, WishlistItemCategoryModalComponent, WishlistFollowingComponent, WishlistFollowingResolve, WishlistFollowingGuard, WishlistOptionsModalComponent, routes, WishlistsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wishlists_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlists.component */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlists.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WishlistsComponent", function() { return _wishlists_component__WEBPACK_IMPORTED_MODULE_0__["WishlistsComponent"]; });

/* harmony import */ var _wishlist_list_wishlist_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wishlist-list/wishlist-list.component */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-list/wishlist-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WishlistListComponent", function() { return _wishlist_list_wishlist_list_component__WEBPACK_IMPORTED_MODULE_1__["WishlistListComponent"]; });

/* harmony import */ var _wishlist_list_wishlist_list_resolve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wishlist-list/wishlist-list.resolve */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-list/wishlist-list.resolve.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WishlistListResolve", function() { return _wishlist_list_wishlist_list_resolve__WEBPACK_IMPORTED_MODULE_2__["WishlistListResolve"]; });

/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/wishlist.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_3__["WishlistComponent"]; });

/* harmony import */ var _wishlist_wishlist_resolve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishlist/wishlist.resolve */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/wishlist.resolve.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WishlistResolve", function() { return _wishlist_wishlist_resolve__WEBPACK_IMPORTED_MODULE_4__["WishlistResolve"]; });

/* harmony import */ var _wishlist_wishlist_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wishlist/wishlist.guard */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/wishlist.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WishlistGuard", function() { return _wishlist_wishlist_guard__WEBPACK_IMPORTED_MODULE_5__["WishlistGuard"]; });

/* harmony import */ var _wishlist_details_wishlist_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wishlist-details/wishlist-details.component */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/wishlist-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WishlistDetailsComponent", function() { return _wishlist_details_wishlist_details_component__WEBPACK_IMPORTED_MODULE_6__["WishlistDetailsComponent"]; });

/* harmony import */ var _wishlist_details_wishlist_details_resolve__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wishlist-details/wishlist-details.resolve */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/wishlist-details.resolve.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WishlistDetailsResolve", function() { return _wishlist_details_wishlist_details_resolve__WEBPACK_IMPORTED_MODULE_7__["WishlistDetailsResolve"]; });

/* harmony import */ var _wishlist_details_wishlist_details_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wishlist-details/wishlist-details.guard */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/wishlist-details.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WishlistDetailsGuard", function() { return _wishlist_details_wishlist_details_guard__WEBPACK_IMPORTED_MODULE_8__["WishlistDetailsGuard"]; });

/* harmony import */ var _wishlist_follow_modal_follow_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wishlist/follow-modal/follow-modal.component */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/follow-modal/follow-modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WishlistFollowModalComponent", function() { return _wishlist_follow_modal_follow_modal_component__WEBPACK_IMPORTED_MODULE_9__["WishlistFollowModalComponent"]; });

/* harmony import */ var _wishlist_details_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wishlist-details/item-modal/item-modal.component */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/item-modal/item-modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WishlistItemModalComponent", function() { return _wishlist_details_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_10__["WishlistItemModalComponent"]; });

/* harmony import */ var _wishlist_details_item_modal_item_category_modal_item_category_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wishlist-details/item-modal/item-category-modal/item-category-modal.component */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/item-modal/item-category-modal/item-category-modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WishlistItemCategoryModalComponent", function() { return _wishlist_details_item_modal_item_category_modal_item_category_modal_component__WEBPACK_IMPORTED_MODULE_11__["WishlistItemCategoryModalComponent"]; });

/* harmony import */ var _wishlist_following_wishlist_following_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wishlist-following/wishlist-following.component */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-following/wishlist-following.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WishlistFollowingComponent", function() { return _wishlist_following_wishlist_following_component__WEBPACK_IMPORTED_MODULE_12__["WishlistFollowingComponent"]; });

/* harmony import */ var _wishlist_following_wishlist_following_resolve__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wishlist-following/wishlist-following.resolve */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-following/wishlist-following.resolve.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WishlistFollowingResolve", function() { return _wishlist_following_wishlist_following_resolve__WEBPACK_IMPORTED_MODULE_13__["WishlistFollowingResolve"]; });

/* harmony import */ var _wishlist_following_wishlist_following_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./wishlist-following/wishlist-following.guard */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-following/wishlist-following.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WishlistFollowingGuard", function() { return _wishlist_following_wishlist_following_guard__WEBPACK_IMPORTED_MODULE_14__["WishlistFollowingGuard"]; });

/* harmony import */ var _wishlist_details_options_modal_options_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./wishlist-details/options-modal/options-modal.component */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/options-modal/options-modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WishlistOptionsModalComponent", function() { return _wishlist_details_options_modal_options_modal_component__WEBPACK_IMPORTED_MODULE_15__["WishlistOptionsModalComponent"]; });

/* harmony import */ var _wishlists_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./wishlists-routing.module */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlists-routing.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return _wishlists_routing_module__WEBPACK_IMPORTED_MODULE_16__["routes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WishlistsRoutingModule", function() { return _wishlists_routing_module__WEBPACK_IMPORTED_MODULE_16__["WishlistsRoutingModule"]; });




















/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/item-modal/item-category-modal/item-category-modal.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/item-modal/item-category-modal/item-category-modal.component.html ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <button\n      type=\"button\"\n      class=\"close\"\n      data-dismiss=\"modal\"\n      aria-hidden=\"true\"\n      (click)=\"close.emit(true)\"\n    >\n      &times;\n    </button>\n    <h4 class=\"modal-title\" id=\"myModalLabel\">Wishlist Category</h4>\n  </div>\n  <div class=\"modal-body custom-scroll\">\n    <form\n      id=\"form-add-wishlist-item-category\"\n      class=\"smart-form\"\n      [saUiValidate]=\"validationOptions\"\n      novalidate=\"novalidate\"\n    >\n      <fieldset>\n        <div class=\"row\">\n          <section class=\"col col-12\">\n            <label class=\"input\">\n              <input\n                type=\"text\"\n                id=\"name\"\n                name=\"name\"\n                placeholder=\"Name\"\n                class=\"input-lg\"\n              />\n              <b class=\"tooltip tooltip-bottom-right\">Category Name</b>\n            </label>\n          </section>\n        </div>\n      </fieldset>\n\n      <fieldset>\n        <div class=\"row\">\n          <section class =\"col col-12\">\n            <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"close.emit(true)\">\n              Close\n            </button>\n            &nbsp;\n            <button\n              type=\"submit\"\n              class=\"btn btn-primary btn-lg\"\n              id=\"i-agree\"\n            >\n              <i class=\"fa fa-check\"></i> Save\n            </button>\n          </section>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n  \n  <!-- <div class=\"modal-footer\">\n\n  </div> -->\n  "

/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/item-modal/item-category-modal/item-category-modal.component.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/item-modal/item-category-modal/item-category-modal.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: WishlistItemCategoryModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistItemCategoryModalComponent", function() { return WishlistItemCategoryModalComponent; });
/* harmony import */ var _app_features_marasco_shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/features/marasco/shared/activitylog.subject-service */ "./src/app/features/marasco/shared/activitylog.subject-service.ts");
/* harmony import */ var _core_services_wishlist_item_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../core/services/wishlist-item-category.service */ "./src/app/features/marasco/core/services/wishlist-item-category.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_features_marasco_core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/features/marasco/core/services */ "./src/app/features/marasco/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WishlistItemCategoryModalComponent = /** @class */ (function () {
    function WishlistItemCategoryModalComponent(_activityLogService, _notificationService, _wishlistItemCategoryService) {
        this._activityLogService = _activityLogService;
        this._notificationService = _notificationService;
        this._wishlistItemCategoryService = _wishlistItemCategoryService;
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.wishlistItemCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**============Privately exposed properties ========= */
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    WishlistItemCategoryModalComponent.prototype.addCategory = function ($event) {
        var _this = this;
        var model = {
            name: $event.elements.name.value,
            userId: this['settings'].userId,
            close: this['settings'].close
        };
        // this['settings'].store.dispatch(
        //   new fromWishlistItemCategory.CreateWishlistItemCategoryAction(model)
        // );
        this['settings'].wishlistItemCategoryService
            .insert(model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this['settings'].unsub))
            .subscribe(function (item) {
            if (!!item) {
                _this['settings'].activityService.addUpdate("Category added " + item.name);
                _this['settings'].notificationService.smallBox({
                    title: 'Item Category Created',
                    content: "Item category '" + item.name + "' has been created successfully. ",
                    color: '#739E73',
                    timeout: 2000,
                    icon: 'fa fa-check',
                    number: '4',
                    sound: false
                });
                _this['settings'].close.emit(true);
            }
            else {
                _this['settings'].activityLogService.addError('No item category present: Creation Failed');
                _this['settings'].notificationService.bigBox({
                    title: 'Oops! the database has returned an error',
                    content: 'No category returned which means that cateogry was not created',
                    color: '#C46A69',
                    icon: 'fa fa-warning shake animated',
                    number: '1',
                    timeout: 4000,
                    sound: false
                });
            }
        }, function (err) {
            _this['settings'].activityLogService.addError(err);
            _this['settings'].notificationService.bigBox({
                title: 'Oops!  there is an issue with the call to create category',
                content: err,
                color: '#C46A69',
                icon: 'fa fa-warning shake animated',
                number: '1',
                timeout: 4000,
                sound: false
            });
        }, function () {
            // Clean up
        });
    };
    WishlistItemCategoryModalComponent.prototype.ngOnInit = function () {
        this.validationOptions = {
            // Rules for form validation
            activityService: this._activityLogService,
            close: this.close,
            // Messages for form validation
            messages: {
                name: {
                    required: 'Please select a category name'
                }
            },
            notificationService: this._notificationService,
            rules: {
                name: {
                    required: true
                }
            },
            submitHandler: this.addCategory,
            userId: this.userId,
            unsub: this.unsubscribe$,
            wishlistItemCategoryService: this._wishlistItemCategoryService
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String)
    ], WishlistItemCategoryModalComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], WishlistItemCategoryModalComponent.prototype, "save", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], WishlistItemCategoryModalComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], WishlistItemCategoryModalComponent.prototype, "wishlistItemCategory", void 0);
    WishlistItemCategoryModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'wishlist-item-category-modal',
            template: __webpack_require__(/*! ./item-category-modal.component.html */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/item-modal/item-category-modal/item-category-modal.component.html")
        }),
        __metadata("design:paramtypes", [_app_features_marasco_shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_0__["ActivityLogSubjectService"],
            _app_features_marasco_core_services__WEBPACK_IMPORTED_MODULE_5__["NotificationService"],
            _core_services_wishlist_item_category_service__WEBPACK_IMPORTED_MODULE_1__["WishlistItemCategoryService"]])
    ], WishlistItemCategoryModalComponent);
    return WishlistItemCategoryModalComponent;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/item-modal/item-modal.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/item-modal/item-modal.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <button\n    type=\"button\"\n    class=\"close\"\n    data-dismiss=\"modal\"\n    aria-hidden=\"true\"\n    (click)=\"close.emit(true)\"\n  >\n    &times;\n  </button>\n  <h4 class=\"modal-title\" id=\"myModalLabel\">Wishlist Item</h4>\n</div>\n<div class=\"modal-body custom-scroll\">\n  <dropzone2-upload [dbName]=\"dbName\" [configOptions]=\"configOptions\" (imageUpload)=\"onImageUploaded($event)\" [imageUrl]=\"wishlistItem.image\"></dropzone2-upload>\n  <form\n    id=\"form-add-wishlist-item\"\n    name=\"form-add-wishlist-item\"\n    class=\"smart-form\"\n    [saUiValidate]=\"validationOptions\"\n    novalidate=\"novalidate\"\n  >\n    <fieldset>\n      <div class=\"row\">\n        <section class=\"col col-8\">\n          <label class=\"input\">\n            <input\n              type=\"text\"\n              id=\"name\"\n              name=\"name\"\n              placeholder=\"Name\"\n              class=\"input-lg\"\n              [ngModel]=\"wishlistItem.name\"\n            />\n            <b class=\"tooltip tooltip-bottom-right\">Name of the wishlist</b>\n          </label>\n        </section>\n        <section class=\"col col-4\">\n          <label class=\"input\">\n            <input\n              type=\"number\"\n              id=\"price\"\n              name=\"price\"\n              placeholder=\"Price\"\n              class=\"input-lg\"\n              [ngModel]=\"wishlistItem.price\"\n            />\n            <b class=\"tooltip tooltip-bottom-right\">Price of the item</b>\n          </label>\n        </section>\n      </div>\n    </fieldset>\n\n    <fieldset>\n      <div class=\"row\">\n        <section class=\"col col-8\">\n          <label class=\"input\">\n            <input\n              type=\"text\"\n              name=\"url\"\n              id=\"url\"\n              placeholder=\"Link or Store name\"\n              class=\"input-lg\"\n              [ngModel] = 'wishlistItem.url'\n            />\n          </label>\n        </section>\n        <section class=\"col col-4\">\n          <label class=\"checkbox\">\n            <input\n              type=\"checkbox\"\n              name=\"purchased\"\n              id=\"purchased\"\n              [ngModel]=\"wishlistItem.purchased\"\n              value=\"true\"\n            />\n            <i></i>\n            Purchased?\n          </label>\n        </section>\n      </div>\n    </fieldset>\n\n    <fieldset>\n      <div class=\"row\">\n        <section class=\"col col-8\">\n          <label class=\"select\">\n            <select\n              name=\"categoryId\"\n              id=\"categoryId\"\n              class=\"input-lg\"\n              placeholder=\"Choose a Category\"\n              [ngModel]=\"wishlistItem.categoryId\"\n            >\n             <option value=\"\" disabled selected>Select your Category</option>\n              <option\n                *ngFor=\"let category of dropdownList\"\n                [value]=\"category._id\"\n              >\n                {{ category.name }}\n              </option>\n            </select>\n          </label>\n        </section>\n\n        <section class=\"col col-4\">\n          <button\n            class=\"btn btn-primary btn-lg\"\n            (click)=\"openModal($event, wishlistItemCategoryModal)\"\n          >\n            Add Category\n          </button>\n        </section>\n      </div>\n    </fieldset>\n\n    <fieldset>\n      <section>\n        Notes\n        <label class=\"textarea\">\n          <textarea\n            ngModel\n            rows=\"4\"\n            name=\"notes\"\n            id=\"notes\"\n            class=\"textarea-lg\"\n            [ngModel]=\"wishlistItem.notes\"\n          ></textarea>\n        </label>\n      </section>\n    </fieldset>\n\n    <fieldset>\n      <div class=\"row\">\n        <section class=\"col col-12\" style=\"float: right\">\n\n          <button\n            type=\"button\"\n            class=\"btn btn-default btn-lg\"\n            (click)=\"close.emit(true)\"\n          >\n            Close\n          </button>\n\n          &nbsp;\n          <input type=\"hidden\" id=\"image\" name=\"image\" [ngModel]=\"wishlistItem.image\"> \n          <button\n            type=\"submit\"\n            class=\"btn btn-primary btn-lg\"\n            id=\"i-agree\"\n          >\n            <i class=\"fa fa-check\"></i> Save\n          </button>\n\n        </section>\n      </div>\n    </fieldset>\n  </form>\n</div>\n\n<!-- <div class=\"modal-footer\">\n\n</div> -->\n\n<ng-template #wishlistItemCategoryModal>\n  <wishlist-item-category-modal\n    [userId]=\"wishlist.userId\"\n    (save)=\"addItem()\"\n    (close)=\"onModalClose()\"\n  ></wishlist-item-category-modal>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/item-modal/item-modal.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/item-modal/item-modal.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: WishlistItemModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistItemModalComponent", function() { return WishlistItemModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_features_marasco_core_store_wishlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/features/marasco/core/store/wishlist */ "./src/app/features/marasco/core/store/wishlist/index.ts");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WishlistItemModalComponent = /** @class */ (function () {
    function WishlistItemModalComponent(_store, _modalService) {
        this._store = _store;
        this._modalService = _modalService;
        this.options = {
            mode: 'popup',
            disabled: false,
            inline: true
        };
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.upload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**============Privately exposed properties ========= */
        this.subs$ = new subsink__WEBPACK_IMPORTED_MODULE_5__["SubSink"]();
        this.dbName = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wishlist.firebaseDbName;
        this.dropdownList = [];
        this.dropdownSettings = {};
        this.selectedItems = [];
        var initialState = this._modalService.config.initialState;
        this.wishlistItem = initialState.wishlistItem;
        this.isUpdate = !!this.wishlistItem._id;
    }
    WishlistItemModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentWishlistItemCategoryState = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_app_features_marasco_core_store_wishlist__WEBPACK_IMPORTED_MODULE_4__["getUserWishlistCategories"]));
        this.configOptions = {
            path: this.wishlist._id + "/" + new Date().getTime() + "_",
            meta: {
                wishlistId: this.wishlist._id,
                nativelySaved: false
            }
        };
        this.subs$.add(currentWishlistItemCategoryState.subscribe(function (wishlistItemCategories) {
            if (Array.isArray(wishlistItemCategories)) {
                _this.wishlistItemCategories = wishlistItemCategories;
                _this.dropdownList = _this.wishlistItemCategories;
            }
        }));
        this.selectedItems.push(this.dropdownList[0]);
        this.dropdownSettings = {
            singleSelection: false,
            idField: '_id',
            textField: 'name',
            closeDropDownOnSelection: true,
            noDataAvailablePlaceholderText: 'No Categories Available'
        };
        this.validationOptions = {
            // Rules for form validation
            wishlistId: this.wishlist._id,
            wishlistItemId: this.wishlistItem._id,
            userId: this.userId || this.wishlist.userId,
            store: this._store,
            rules: {
                name: {
                    required: true
                }
            },
            // Messages for form validation
            messages: {
                name: {
                    required: 'Please enter a name for the item'
                }
            },
            submitHandler: this.addItem,
            onSuccessCreate: this.close
        };
    };
    WishlistItemModalComponent.prototype.openModal = function (event, template) {
        event.preventDefault();
        this.bsModalRef = this._modalService.show(template);
    };
    WishlistItemModalComponent.prototype.onModalClose = function () {
        this.bsModalRef.hide();
    };
    WishlistItemModalComponent.prototype.onImageUploaded = function ($event) {
        this.wishlistItem.image = $event;
    };
    WishlistItemModalComponent.prototype.addItem = function ($event) {
        var model = {
            name: $event.elements.name.value,
            price: $event.elements.price.value,
            url: $event.elements.url.value,
            purchased: $event.elements.purchased.checked,
            notes: $event.elements.notes.value,
            image: $event.elements.image.value,
            wishlistId: this['settings'].wishlistId,
            userId: this['settings'].userId,
            _id: this['settings'].wishlistItemId
        };
        if (!!$event.elements.categoryId.value) {
            model.categoryId = $event.elements.categoryId.value;
        }
        // Save
        if (model._id) {
            // Update
            this['settings'].store.dispatch(new _app_features_marasco_core_store_wishlist__WEBPACK_IMPORTED_MODULE_4__["EditWishlistItemAction"](model));
        }
        else {
            // Insert
            if (model.purchased) {
                model.purchasedBy = this['settings'].userId;
            }
            this['settings'].store.dispatch(new _app_features_marasco_core_store_wishlist__WEBPACK_IMPORTED_MODULE_4__["CreateWishlistItemAction"](model));
        }
    };
    WishlistItemModalComponent.prototype.ngOnDestroy = function () {
        this.subs$.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WishlistItemModalComponent.prototype, "wishlist", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WishlistItemModalComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WishlistItemModalComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WishlistItemModalComponent.prototype, "save", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WishlistItemModalComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WishlistItemModalComponent.prototype, "upload", void 0);
    WishlistItemModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wishlist-item-modal',
            template: __webpack_require__(/*! ./item-modal.component.html */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/item-modal/item-modal.component.html")
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], WishlistItemModalComponent);
    return WishlistItemModalComponent;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/options-modal/options-modal.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/options-modal/options-modal.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <button\n    type=\"button\"\n    class=\"close\"\n    data-dismiss=\"modal\"\n    aria-hidden=\"true\"\n    (click)=\"close.emit(true)\"\n  >\n    &times;\n  </button>\n  <h4 class=\"modal-title\" id=\"myModalLabel\">Wishlist Options</h4>\n</div>\n\n<div class=\"modal-body custom-scroll\">\n  <form\n    id=\"form-wishlist-options\"\n    class=\"smart-form\"\n    [saUiValidate]=\"validationOptions\"\n    novalidate=\"novalidate\"\n  >\n    <fieldset>\n      <!-- <div class=\"row\">\n\n        <section class=\"col col-md-6 col-xs-6\">\n          <label class=\"checkbox\">\n            <input\n              type=\"checkbox\"\n              name=\"includePriceWhenSharing\"\n              id=\"includePriceWhenSharing\"\n              [ngModel]=\"wishlist.preferences.includePriceWhenSharing\"\n              value=\"true\"\n            />\n            <i></i>\n            Include Price when Sharing?\n          </label>\n        </section>\n      </div> -->\n      <!-- <div class=\"row\">\n        <section class=\"col col-md-6 col-xs-6\">\n          <label class=\"checkbox\">\n            <input\n              type=\"checkbox\"\n              name=\"markPurchasedItem\"\n              id=\"markPurchasedItem\"\n              [ngModel]=\"wishlist.preferences.markPurchasedItem\"\n              value=\"true\"\n            />\n            <i></i>\n            Mark Purchased Items?\n          </label>\n        </section>\n      </div> -->\n      <div class=\"row\">\n        <section class=\"col col-md-6 col-xs-6\">\n          <label class=\"checkbox\">\n            <input\n              type=\"checkbox\"\n              name=\"notifyOnAddItem\"\n              id=\"notifyOnAddItem\"\n              [ngModel]=\"wishlist.preferences.notifyOnAddItem\"\n              value=\"true\"\n            />\n            <i></i>\n            Notify when I add an item?\n          </label>\n        </section>\n        <section class=\"col col-md-6 col-xs-6\">\n          <label class=\"checkbox\">\n            <input\n              type=\"checkbox\"\n              name=\"notifyOnClose\"\n              id=\"notifyOnClose\"\n              [ngModel]=\"wishlist.preferences.notifyOnClose\"\n              value=\"true\"\n            />\n            <i></i>\n            Notify when I delete wishlist?\n          </label>\n        </section>\n      </div>\n\n      <div class=\"row\">\n        <section class=\"col col-md-6 col-xs-6\">\n          <label class=\"checkbox\">\n            <input\n              type=\"checkbox\"\n              name=\"collaborative\"\n              id=\"collaborative\"\n              [ngModel]=\"wishlist.preferences.collaborative\"\n              value=\"true\"\n            />\n            <i></i>\n            Make Collaboritive?\n          </label>\n        </section>\n        <section class=\"col col-md-6 col-xs-6\">\n          <label class=\"checkbox\">\n            <input\n              type=\"checkbox\"\n              name=\"hideFromMe\"\n              id=\"hideFromMe\"\n              [ngModel]=\"wishlist.preferences.hideFromMe\"\n              value=\"true\"\n            />\n            <i></i>\n            Surpise Me?\n          </label>\n        </section>\n      </div>\n\n      <div class=\"row\">\n        <section class=\"col col-md-6 col-xs-6\">\n          <label class=\"checkbox\">\n            <input\n              type=\"checkbox\"\n              name=\"notifyOnRemoveItem\"\n              id=\"notifyOnRemoveItem\"\n              [ngModel]=\"wishlist.preferences.notifyOnRemoveItem\"\n              value=\"true\"\n            />\n            <i></i>\n            Notify when I remove an item?\n          </label>\n        </section>\n        <section class=\"col col-md-6 col-xs-6\">\n          <label class=\"input\">\n            <input\n              type=\"text\"\n              name=\"currencyUnitSymbol\"\n              id=\"currencyUnitSymbol\"\n              placeholder=\"Currency Unit Symbol\"\n              class=\"input-lg\"\n              [ngModel]=\"wishlist.preferences.currencyUnitSymbol\"\n            />\n          </label>\n        </section>\n      </div>\n    </fieldset>\n\n    <fieldset>\n      <div class=\"row\">\n        <section class=\"col col-12\" style=\"float: right\">\n          <button\n            type=\"button\"\n            class=\"btn btn-default btn-lg\"\n            (click)=\"close.emit(true)\"\n          >\n            Close\n          </button>\n          &nbsp;\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary btn-lg\"\n            id=\"save-preference\"\n          >\n            <i class=\"fa fa-check\"></i> Save\n          </button>\n        </section>\n      </div>\n    </fieldset>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/options-modal/options-modal.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/options-modal/options-modal.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: WishlistOptionsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistOptionsModalComponent", function() { return WishlistOptionsModalComponent; });
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../core/services/notification.service */ "./src/app/features/marasco/core/services/notification.service.ts");
/* harmony import */ var _core_services_wishlists_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../core/services/wishlists.service */ "./src/app/features/marasco/core/services/wishlists.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _app_features_marasco_shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/features/marasco/shared/activitylog.subject-service */ "./src/app/features/marasco/shared/activitylog.subject-service.ts");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WishlistOptionsModalComponent = /** @class */ (function () {
    function WishlistOptionsModalComponent(_notificationService, _activityLogService, _wishlistService, _modalService) {
        this._notificationService = _notificationService;
        this._activityLogService = _activityLogService;
        this._wishlistService = _wishlistService;
        this._modalService = _modalService;
        this.options = {
            mode: 'popup',
            disabled: false,
            inline: true
        };
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**============Privately exposed properties ========= */
        this.subs$ = new subsink__WEBPACK_IMPORTED_MODULE_5__["SubSink"]();
        var initialState = this._modalService.config.initialState;
        this.wishlist = initialState.wishlist;
    }
    WishlistOptionsModalComponent.prototype.ngOnInit = function () {
        this.validationOptions = {
            // Rules for form validation
            wishlist: this.wishlist,
            userId: this.wishlist.userId,
            rules: {
                name: {
                    required: true
                }
            },
            // Messages for form validation
            messages: {
                name: {
                    required: 'Please enter a name for the item'
                }
            },
            wishlistService: this._wishlistService,
            activityService: this._activityLogService,
            notificationService: this._notificationService,
            close: this.close,
            subs: this.subs$,
            submitHandler: this.saveOptions
        };
        // this._wishlistService.onWishlistChanged.subscribe((wishlist) => {
        //   this.wishlist = wishlist;
        // });
    };
    WishlistOptionsModalComponent.prototype.saveOptions = function ($event) {
        var _this = this;
        var wishlist = this['settings'].wishlist;
        var model = {
            name: wishlist.name,
            preferences: {
                //includePriceWhenSharing: $event.elements.includePriceWhenSharing.checked,
                //markPurchasedItem: $event.elements.markPurchasedItem.checked,
                hideFromMe: $event.elements.hideFromMe.checked,
                currencyUnitSymbol: $event.elements.currencyUnitSymbol.value,
                notifyOnAddItem: $event.elements.notifyOnAddItem.checked,
                notifyOnRemoveItem: $event.elements.notifyOnRemoveItem.checked,
                notifyOnClose: $event.elements.notifyOnClose.checked,
                collaborative: $event.elements.collaborative.checked
            }
        };
        Object.assign(wishlist, model);
        this['settings'].subs.add(this['settings'].wishlistService.update(wishlist).subscribe(function (item) {
            if (item) {
                _this['settings'].activityService.addUpdate("Updated wishlist " + item._id);
                _this['settings'].notificationService.smallBox({
                    title: 'Wishlist Updated',
                    content: 'Wishlist has been updated successfully. ',
                    color: '#739E73',
                    timeout: 2000,
                    icon: 'fa fa-check',
                    number: '4',
                    sound: false
                });
                _this['settings'].close.emit(item);
            }
            else {
                _this['settings'].activityLogService.addError('No wishlist present: Update Failed');
                _this['settings'].notificationService.bigBox({
                    title: 'Oops! the database has returned an error',
                    content: 'No wishlist returned which means that wishlist was not updated',
                    color: '#C46A69',
                    icon: 'fa fa-warning shake animated',
                    number: '1',
                    timeout: 4000,
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
                timeout: 4000,
                sound: false
            });
        }, function () {
            // Clean up
        }));
    };
    WishlistOptionsModalComponent.prototype.ngOnDestroy = function () {
        this.subs$.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], WishlistOptionsModalComponent.prototype, "wishlistObject", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], WishlistOptionsModalComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], WishlistOptionsModalComponent.prototype, "save", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], WishlistOptionsModalComponent.prototype, "close", void 0);
    WishlistOptionsModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'wishlist-options-modal',
            template: __webpack_require__(/*! ./options-modal.component.html */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/options-modal/options-modal.component.html")
        }),
        __metadata("design:paramtypes", [_core_services_notification_service__WEBPACK_IMPORTED_MODULE_0__["NotificationService"],
            _app_features_marasco_shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_4__["ActivityLogSubjectService"],
            _core_services_wishlists_service__WEBPACK_IMPORTED_MODULE_1__["WishlistService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], WishlistOptionsModalComponent);
    return WishlistOptionsModalComponent;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/wishlist-details.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/wishlist-details.component.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottom-color-black{\n  border-bottom-color: #3276b1;\n}\n\n.chat-body li.message img {\n  max-width: 55px;\n  min-height: 52px;\n}\n\n.chat-body li.message .message-text {\n  padding: 2px;  \n  /* margin-top: -52px; */\n}\n\n.thumbnail {\n  position: absolute;\n  width: 55px;\n  height: 52px;\n  overflow: hidden;\n  margin-bottom: 0px;\n}\n\n.thumbnail img {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  height: 100%;\n  width: auto;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n}\n\n.thumbnail img.portrait {\n  width: 100%;\n  height: auto;\n}\n\n/* test */\n\n.well-sm {\n  padding: 1px;\n  border-radius: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbWFyYXNjby9mZWF0dXJlcy93aXNobGlzdFByZW1pZXJlL3dpc2hsaXN0cy93aXNobGlzdC1kZXRhaWxzL3dpc2hsaXN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE2QjtDQUM5Qjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjs7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0VBQ1osd0NBQXdDO1VBRWhDLGdDQUFnQztDQUN6Qzs7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0NBQ2Q7O0FBRUQsVUFBVTs7QUFDVjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9tYXJhc2NvL2ZlYXR1cmVzL3dpc2hsaXN0UHJlbWllcmUvd2lzaGxpc3RzL3dpc2hsaXN0LWRldGFpbHMvd2lzaGxpc3QtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdHRvbS1jb2xvci1ibGFja3tcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzMyNzZiMTtcbn1cblxuLmNoYXQtYm9keSBsaS5tZXNzYWdlIGltZyB7XG4gIG1heC13aWR0aDogNTVweDtcbiAgbWluLWhlaWdodDogNTJweDtcbn1cblxuLmNoYXQtYm9keSBsaS5tZXNzYWdlIC5tZXNzYWdlLXRleHQge1xuICBwYWRkaW5nOiAycHg7ICBcbiAgLyogbWFyZ2luLXRvcDogLTUycHg7ICovXG59XG5cbi50aHVtYm5haWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi50aHVtYm5haWwgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xufVxuLnRodW1ibmFpbCBpbWcucG9ydHJhaXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiB0ZXN0ICovXG4ud2VsbC1zbSB7XG4gIHBhZGRpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/wishlist-details.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/wishlist-details.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n\n<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs\n      [items]=\"[wishlist.name || 'Wishlist', 'Details']\"\n      icon=\"gift\"\n      class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"\n    ></sa-big-breadcrumbs>\n    <wp-settings [wishlist]=\"wishlist\"></wp-settings>\n  </div>\n\n  <!-- widget grid -->\n  <sa-widgets-grid>\n    <!-- START ROW -->\n    <div class=\"row\">\n      <!-- NEW COL START -->\n      <article class=\"col-sm-12 col-md-12 col-lg-12\">\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div\n          sa-widget\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [custombutton]=\"false\"\n          [deletebutton]=\"false\"\n          [fullscreenbutton]=\"false\"\n          [togglebutton]=\"false\"\n          [sortable]=\"false\"\n          class=\"well\"\n        >\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-edit\"></i> </span>\n\n            <h2>{{ isUpdate ? 'Edit' : 'Create A New Wishlist' }}</h2>\n          </header>\n\n          <!-- widget div-->\n          <div>\n            <form\n              #wishlistDetailsForm=\"ngForm\"\n              [saUiValidate]=\"validationOptions\"\n              novalidate=\"novalidate\"\n              (ngSubmit)=\"save(wishlistDetailsForm.value)\"\n            >\n              <div>\n                <!-- widget content -->\n                <div class=\"widget-body\">\n                  <fieldset class=\"smart-form\">\n                    <div class=\"row\">\n                      <section class=\"col col-4\">\n                        Name\n                        <label class=\"input\">\n                          <input\n                            type=\"text\"\n                            class=\"input-lg\"\n                            name=\"name\"\n                            placeholder=\"Name\"\n                            [(ngModel)]=\"wishlist.name\"\n                          />\n                        </label>\n                      </section>\n                    </div>\n                  </fieldset>\n\n                  <div class=\"form-actions row\">\n                    <div class=\"col col-md-12\" *ngIf=\"!isMobile\">\n                      <button\n                        type=\"button\"\n                        (click)=\"\n                          openOptionsModal(\n                            $event,\n                            wishlist\n                          )\n                        \"\n                        class=\"btn btn-default btn-lg\"\n                        *ngIf=\"isUpdate\"\n                      >\n                        <i class=\"fa fa-cog fa-lg\"></i>\n                        Options\n                      </button>\n                      &nbsp;\n                      <button\n                        type=\"button\"\n                        (click)=\"openModal($event, wishlistItemModal)\"\n                        class=\"btn btn-primary btn-lg\"\n                        *ngIf=\"isUpdate\"\n                      >\n                        <i class=\"fa fa-plus fa-lg\"></i>\n                        Add Item\n                      </button>\n                      &nbsp;\n                      <button\n                        type=\"button\"\n                        (click)=\"previewWishlist($event, wishlist)\"\n                        class=\"btn btn-warning btn-lg\"\n                        *ngIf=\"isUpdate\"\n                      >\n                        <i class=\"fa fa-eye fa-lg\"></i>\n                        Preview\n                      </button>\n\n                      <div *ngIf=\"hasSharing\">\n                        &nbsp;\n                        <button\n                          type=\"button\"\n                          (click)=\"shareDesktop()\"\n                          class=\"btn btn-info btn-lg\"\n                          *ngIf=\"isUpdate\"\n                        >\n                          <i class=\"fa fa-share-alt fa-lg\"></i>\n                          Share\n                        </button>\n                      </div>\n                      &nbsp;\n                      <button type=\"submit\" class=\"btn btn-success btn-lg\">\n                        <i class=\"fa fa-save fa-lg\"></i>\n                        Save\n                      </button>\n                    </div>\n                    <div class=\"col col-md-12\" *ngIf=\"isMobile\">\n                      <button\n                        type=\"button\"\n                        (click)=\"\n                          openOptionsModal(\n                            $event,\n                            wishlist\n                          )\n                        \"\n                        class=\"btn btn-default\"\n                        *ngIf=\"isUpdate\"\n                      >\n                        <i class=\"fa fa-cog fa-lg\"></i>\n                      </button>\n                      &nbsp;\n                      <button\n                        type=\"button\"\n                        (click)=\"openModal($event, wishlistItemModal)\"\n                        class=\"btn btn-primary\"\n                        *ngIf=\"isUpdate\"\n                      >\n                        <i class=\"fa fa-plus fa-lg\"></i>\n                      </button>\n                      &nbsp;\n                      <button\n                        type=\"button\"\n                        (click)=\"previewWishlist($event, wishlist)\"\n                        class=\"btn btn-warning\"\n                        *ngIf=\"isUpdate\"\n                      >\n                        <i class=\"fa fa-eye fa-lg\"></i>\n                      </button>\n\n                      &nbsp;\n                      <button\n                        type=\"button\"\n                        (click)=\"shareMobile()\"\n                        class=\"btn btn-info\"\n                        *ngIf=\"isUpdate\"\n                      >\n                        <i class=\"fa fa-share-alt fa-lg\"></i>\n                      </button>\n\n                      &nbsp;\n                      <button type=\"submit\" class=\"btn btn-success\">\n                        <i class=\"fa fa-save fa-lg\"></i>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <!-- end widget content -->\n              </div>\n            </form>\n\n            <!-- Widget ID (each widget will need unique ID)-->\n\n            <!-- widget content -->\n            <!-- end Widget content -->\n          </div>\n          <!-- end widget div -->\n        </div>\n        <!-- end widget -->\n      </article>\n      <!-- END COL -->\n    </div>\n    <!-- END ROW -->\n\n    <!-- START ROW -->\n    <div class=\"row\" *ngIf=\"wishlist.items.length !== 0\">\n      <article class=\"col-sm-12 col-md-12 col-lg-12\">\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div\n          sa-widget\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [custombutton]=\"false\"\n          [deletebutton]=\"false\"\n          [fullscreenbutton]=\"false\"\n          [togglebutton]=\"false\"\n          [sortable]=\"false\"\n          class=\"well\"\n        >\n          <div\n            [sortablejs]=\"wishlist.items\"\n            [sortablejsOptions]=\"itemSortOptions\"\n          >\n            <div class=\"row\" *ngFor=\"let item of wishlist.items\">\n              <div class=\"col-sm-12\">\n                <div class=\"row\">\n                  <div class=\"col-sm-1 col-xs-2\">\n                    <div class=\"thumbnail handle\">\n                      <input\n                        type=\"hidden\"\n                        id=\"wishlistItemId\"\n                        name=\"wishlistItemId\"\n                        [(ngModel)]=\"item._id\"\n                      />\n                      <img\n                        alt=\"sunny\"\n                        class=\"online portrait\"\n                        src=\"assets/icons/icon-72x72_grey_out.png\"\n                        [src]=\"\n                          item.image || 'assets/icons/icon-72x72_grey_out.png'\n                        \"\n                      />\n                    </div>\n                  </div>\n                  <div class=\"col-sm-11 col-xs-10\">\n                    <div class=\"well well-sm \">\n                      <div class=\"row\">\n                        <div class=\"col col-md-10 col-xs-9\">\n                          <button\n                            class=\"btn btn-xs btn-link btn-default\"\n                            (click)=\"openModal($event, wishlistItemModal, item)\"\n                          >\n                            {{ item.name }}\n                          </button>\n                        </div>\n                        <div class=\"col col-md-2 col-xs-3\">\n                          <span class=\"pull-right font-md\">\n                            {{ item.price | currency }}\n                          </span>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col col-md-12 col-xs-12\">\n                          <div class=\"pull-right\">\n                            <!-- <button class=\"btn btn-primary btn-xs\">\n                            <i class=\"fa fa-thumbs-up\"></i>\n                          </button>\n                          &nbsp; -->\n                            <span\n                              class=\"label bg-color-red\"\n                              *ngIf=\"item.purchased && !surpriseMe\"\n                            >\n                              Purchased\n                            </span>\n                            &nbsp;\n                            <button\n                              class=\"btn btn-warning btn-xs\"\n                              (click)=\"\n                                openModal($event, wishlistItemModal, item)\n                              \"\n                            >\n                              <i class=\"fa fa-edit\"></i>\n                            </button>\n                            &nbsp;\n                            <button\n                              class=\"btn btn-danger btn-xs\"\n                              (click)=\"deleteItem($event, item)\"\n                            >\n                              <i class=\"fa fa-trash\"></i>\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col col-md-12 col-xs-12\">\n                <span class=\"onoffswitch-title\"\n                  ><i class=\"fa fa-info\"></i> Sortable: Drag by picture\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </article>\n    </div>\n\n    <!-- END ROW -->\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n</div>\n\n<ng-template #wishlistItemModal>\n  <wishlist-item-modal\n    [wishlist]=\"wishlist\"\n    [userId]=\"this.user._id\"\n    (save)=\"closeModal()\"\n    (close)=\"onModalClose()\"\n  ></wishlist-item-modal>\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/wishlist-details.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/wishlist-details.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: WishlistDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistDetailsComponent", function() { return WishlistDetailsComponent; });
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../core/services/user.service */ "./src/app/features/marasco/core/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/notification.service */ "./src/app/features/marasco/core/services/notification.service.ts");
/* harmony import */ var _shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/activitylog.subject-service */ "./src/app/features/marasco/shared/activitylog.subject-service.ts");
/* harmony import */ var _core_services_wishlists_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/wishlists.service */ "./src/app/features/marasco/core/services/wishlists.service.ts");
/* harmony import */ var _core_services_wishlist_factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/wishlist.factory */ "./src/app/features/marasco/core/services/wishlist.factory.ts");
/* harmony import */ var _app_features_marasco_core_store_wishlist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/features/marasco/core/store/wishlist */ "./src/app/features/marasco/core/store/wishlist/index.ts");
/* harmony import */ var _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/features/marasco/core/store/auth */ "./src/app/features/marasco/core/store/auth/index.ts");
/* harmony import */ var _app_features_marasco_core_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/features/marasco/core/services */ "./src/app/features/marasco/core/services/index.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
/* harmony import */ var _options_modal_options_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./options-modal/options-modal.component */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/options-modal/options-modal.component.ts");
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

















var Share = _capacitor_core__WEBPACK_IMPORTED_MODULE_13__["Plugins"].Share;
var Device = _capacitor_core__WEBPACK_IMPORTED_MODULE_13__["Plugins"].Device;
var nav = navigator;
/**
 * https://jonathannicol.com/blog/2014/06/16/centre-crop-thumbnails-with-css/
 * http://sortablejs.github.io/Sortable/
 */
var WishlistDetailsComponent = /** @class */ (function () {
    //////////////////END Publicly exposed variables///////////
    function WishlistDetailsComponent(_wishlistService, _route, _router, _notificationService, _factory, _activityLogService, _store, _modalService, _layoutService, _userService, _swPush) {
        var _this = this;
        this._wishlistService = _wishlistService;
        this._route = _route;
        this._router = _router;
        this._notificationService = _notificationService;
        this._factory = _factory;
        this._activityLogService = _activityLogService;
        this._store = _store;
        this._modalService = _modalService;
        this._layoutService = _layoutService;
        this._userService = _userService;
        this._swPush = _swPush;
        //////////////////Private variables///////////
        this.subs$ = new subsink__WEBPACK_IMPORTED_MODULE_15__["SubSink"]();
        //////////////END Private variables //////////
        //////////////////Publicly exposed variables///////////
        this.defaultWishlist = {
            name: '',
            userId: '',
            preferences: {
                includePriceWhenSharing: true,
                markPurchasedItem: false,
                hideFromMe: false,
                currencyUnitSymbol: '$',
                notifyOnAddItem: true,
                notifyOnRemoveItem: true,
                notifyOnClose: true,
                collaborative: false
            },
            items: []
        };
        this.dropdownSettingsStatus = {};
        this.isMobile = true;
        this.isUpdate = true;
        this.hasSharing = false;
        this.surpriseMe = false;
        this.itemSortOptions = {
            handle: '.handle',
            onUpdate: function (event) {
                var wishlistItemSort = {
                    wishlistId: _this.wishlist._id,
                    wishlistItemId: event.item.children[0].children[0].children[0].children[0].value,
                    oldIndex: event.oldIndex,
                    newIndex: event.newIndex
                };
                _this._store.dispatch(new _app_features_marasco_core_store_wishlist__WEBPACK_IMPORTED_MODULE_9__["SortWishlistItemAction"](wishlistItemSort));
            },
            animation: 150
        };
        this.options = [];
        this.optionsTokenTable = {};
        this.selectedStatus = [];
        this.state = {
            tabs: {
                demo1: 0
            }
        };
        this.validationOptions = {
            // Rules for form validation
            rules: {
                name: {
                    required: true
                },
                userId: {
                    required: true
                },
                statusId: {
                    required: true
                }
            },
            // Messages for form validation
            messages: {
                name: {
                    required: 'Please enter your name'
                },
                wishlistId: {
                    required: 'Please enter a wishlist'
                },
                statusId: {
                    required: 'Please enter a status'
                }
            }
        };
        this.wishlist = this.defaultWishlist;
        // @Input() filter = 'ion ([7-9]|[1][0-2])';
        this.filter = '';
    }
    /////////////////////////////////////
    // Events
    /////////////////////////////////////
    WishlistDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs$.add(this._route.params.subscribe(function (params) {
            var id = params['id'];
            if (id !== '0') {
                _this.wishlist = _this._route.snapshot.data['wishlist'];
                _this.selectedStatus.push(_this.wishlist.statusId);
                _this.isUpdate = true;
            }
            else {
                _this.isUpdate = false;
            }
        }));
        this.activate();
    };
    /////////////////////////////////////
    // Public Methods
    /////////////////////////////////////
    WishlistDetailsComponent.prototype.closeModal = function () {
        console.log('you made it!');
        this.bsModalRef.hide();
    };
    WishlistDetailsComponent.prototype.deleteItem = function ($event, wishlistItem) {
        $event.preventDefault();
        this._store.dispatch(new _app_features_marasco_core_store_wishlist__WEBPACK_IMPORTED_MODULE_9__["DeleteWishlistItemAction"](wishlistItem));
    };
    WishlistDetailsComponent.prototype.openModal = function (event, template, wishlistItem) {
        var initialState = {
            wishlistItem: wishlistItem || {
                name: '',
                purchased: false
            }
        };
        event.preventDefault();
        this.bsModalRef = this._modalService.show(template, { initialState: initialState });
    };
    WishlistDetailsComponent.prototype.openModalSettings = function (event, template, wishlist) {
        var initialState = {
            wishlist: wishlist || {
                name: ''
            }
        };
        event.preventDefault();
        this.bsModalRef = this._modalService.show(template, { initialState: initialState });
    };
    WishlistDetailsComponent.prototype.openOptionsModal = function (event, wishlist) {
        var _this = this;
        var initialState = {
            wishlist: wishlist || {
                name: ''
            }
        };
        event.preventDefault();
        this.bsModalRef = this._modalService.show(_options_modal_options_modal_component__WEBPACK_IMPORTED_MODULE_16__["WishlistOptionsModalComponent"], { initialState: initialState });
        this.bsModalRef.content.close.subscribe(function (wishlist) {
            _this.surpriseMe = wishlist.preferences.hideFromMe;
            _this.bsModalRef.hide();
        });
    };
    WishlistDetailsComponent.prototype.onModalClose = function () {
        this.bsModalRef.hide();
    };
    WishlistDetailsComponent.prototype.previewWishlist = function ($event, wishlist) {
        $event.preventDefault();
        this._router.navigateByUrl("wishlistPremiere/wishlists/" + wishlist._id);
    };
    WishlistDetailsComponent.prototype.save = function (wishlistDetailsForm) {
        if (this.validate()) {
            if (this.isUpdate) {
                this.update();
            }
            else {
                this.insert();
            }
        }
    };
    WishlistDetailsComponent.prototype.shareDesktop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (nav.share) {
                    nav
                        .share({
                        title: 'Check out my new wishlist!',
                        text: 'Click on the link to follow my new wishlist!',
                        url: _env_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].deepLinkUrl + "/wishlistPremiere/wishlists/" + this.wishlist._id
                    })
                        .then(function () { return console.log('Successful share'); })
                        .catch(function (error) { return console.log('Error sharing', error); });
                }
                return [2 /*return*/];
            });
        });
    };
    WishlistDetailsComponent.prototype.shareMobile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var shareRet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Share.share({
                            title: 'Check out my new wishlist!',
                            text: 'Click on the link to follow my new wishlist!',
                            url: _env_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].deepLinkUrl + "/wishlistPremiere/wishlists/" + this.wishlist._id,
                            dialogTitle: 'Share with friends and family'
                        })];
                    case 1:
                        shareRet = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /////////////////////////////////////
    // Private Metods
    /////////////////////////////////////
    /**
     * Activate the component
     */
    WishlistDetailsComponent.prototype.activate = function () {
        //Gets current state of the app
        this.activateState();
        //Set User info
        this.wishlist.userId = this.user._id;
        //Check if browser has navigation share
        this.hasSharing = nav.share ? true : false;
        //Drop down settings
        this.dropdownSettingsStatus = {
            singleSelection: true,
            idField: '_id',
            textField: 'name'
        };
        //Determine if users wants the buttons to be hidden
        this.surpriseMe = this.wishlist.preferences.hideFromMe;
    };
    WishlistDetailsComponent.prototype.activateState = function () {
        var _this = this;
        var currentState = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_10__["getUser"]));
        this.subs$.add(currentState.subscribe(function (data) {
            if (!!data) {
                _this.user = data.user;
            }
        }));
        //Sets mobile
        this.isMobile = this._layoutService.store.isMobile;
        this.subs$.add(this._wishlistService.onWishlistChanged.subscribe(function (wishlist) {
            if (!!wishlist && wishlist._id === _this.wishlist._id) {
                _this.wishlist = wishlist;
            }
        }));
    };
    /**
     * @description Adds device to user
     * @author Antonio Marasco
     * @date 2019-04-26
     * @param {DeviceInfo} deviceInfo
     * @returns
     * @memberof WishlistDetailsComponent
     */
    WishlistDetailsComponent.prototype.addDevice = function (deviceInfo) {
        var _this = this;
        var device = this.user.devices.find(function (result) {
            return result.uuid === deviceInfo.uuid;
        });
        if (!!device) {
            return;
        }
        this.user.devices.push(deviceInfo);
        this.subs$.add(this._userService.addDevice(this.user._id, this.user.devices).subscribe(function (item) {
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
        }));
    };
    WishlistDetailsComponent.prototype.addNotification = function (uuid) {
        var _this = this;
        this._swPush
            .requestSubscription({
            serverPublicKey: _env_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].serviceWorkerOptions.vap.publicKey
        })
            .then(function (pushSubscription) {
            // Save to
            //console.log(pushSubscription.toJSON());
            var notification = Object.assign(pushSubscription.toJSON());
            notification.uuid = uuid;
            notification.userId = _this.user._id;
            _this.user.notifications.push(notification);
            _this.subs$.add(_this._userService
                .addNotification(_this.user._id, _this.user.notifications)
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
            }));
        })
            .catch(function (error) {
            // Do Nothing
        });
    };
    WishlistDetailsComponent.prototype.displayErrors = function (errors) {
        // event.errors.join('<br>').toString()
        var notificationService = new _core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]();
        notificationService.bigBox({
            title: 'Oops!  There are some validation errors',
            content: errors.join('<br>').toString(),
            color: '#C46A69',
            icon: 'fa fa-warning shake animated',
            number: '1',
            timeout: 6000 // 6 seconds
        });
    };
    /**
     * Insert an item in the database
     */
    WishlistDetailsComponent.prototype.insert = function () {
        var _this = this;
        this.wishlist.statusId = this.selectedStatus[0];
        this.subs$.add(this._wishlistService.insert(this.wishlist).subscribe(function (item) {
            if (item) {
                _this._activityLogService.addInserts("Inserted wishlist " + item._id);
                _this._notificationService.smallBox({
                    title: 'wishlist created',
                    content: 'wishlist has been created successfully. ',
                    color: '#739E73',
                    timeout: 2000,
                    icon: 'fa fa-check',
                    number: '4',
                    sound: false
                });
                _this.isUpdate = true;
                _this.wishlist = item;
            }
            else {
                _this._activityLogService.addError('wishlist not returned from database on insert');
                _this._notificationService.bigBox({
                    title: 'Oops! the database has returned an error',
                    content: 'wishlist was not returned indicating that wishlist was not in fact updated',
                    color: '#C46A69',
                    icon: 'fa fa-warning shake animated',
                    number: '1',
                    timeout: 3000,
                    sound: false
                });
            }
        }, function (errInfo) {
            _this._activityLogService.addError(errInfo);
            _this._notificationService.bigBox({
                title: 'Oops!  there is an issue with the call to create',
                content: errInfo.error.message || errInfo.message,
                color: '#C46A69',
                icon: 'fa fa-warning shake animated',
                number: '1',
                timeout: 3000 // 6 seconds
            });
        }, function () {
            // Clean up
        }));
    };
    /**
     * Update item
     */
    WishlistDetailsComponent.prototype.update = function () {
        var _this = this;
        this.wishlist.statusId = this.selectedStatus[0];
        this.subs$.add(this._wishlistService.update(this.wishlist).subscribe(function (item) {
            if (item) {
                _this._activityLogService.addUpdate("Updated wishlist " + item._id);
                _this._notificationService.smallBox({
                    title: 'Wishlist Updated',
                    content: 'Wishlist has been updated successfully. ',
                    color: '#739E73',
                    timeout: 2000,
                    icon: 'fa fa-check',
                    number: '4',
                    sound: false
                });
            }
            else {
                _this._activityLogService.addError('No wishlist present: Update Failed');
                _this._notificationService.bigBox({
                    title: 'Oops! the database has returned an error',
                    content: 'No wishlist returned which means that wishlist was not updated',
                    color: '#C46A69',
                    icon: 'fa fa-warning shake animated',
                    number: '1',
                    timeout: 3000,
                    sound: false
                });
            }
        }, function (err) {
            _this._activityLogService.addError(err);
            _this._notificationService.bigBox({
                title: 'Oops!  there is an issue with the call to update',
                content: err,
                color: '#C46A69',
                icon: 'fa fa-warning shake animated',
                number: '1',
                timeout: 3000 // 6 seconds
            });
        }, function () {
            // Clean up
        }));
    };
    /**
     * Validate the item
     */
    WishlistDetailsComponent.prototype.validate = function () {
        return this._factory.validate(this.wishlist, this.displayErrors);
    };
    WishlistDetailsComponent.prototype.ngOnDestroy = function () {
        this.subs$.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], WishlistDetailsComponent.prototype, "filter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wishlistDetailsForm'),
        __metadata("design:type", Object)
    ], WishlistDetailsComponent.prototype, "wishlistDetailsForm", void 0);
    WishlistDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'marasco-wishlist-details',
            template: __webpack_require__(/*! ./wishlist-details.component.html */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/wishlist-details.component.html"),
            styles: [__webpack_require__(/*! ./wishlist-details.component.css */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/wishlist-details.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_wishlists_service__WEBPACK_IMPORTED_MODULE_7__["WishlistService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"],
            _core_services_wishlist_factory__WEBPACK_IMPORTED_MODULE_8__["WishlistFactory"],
            _shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_6__["ActivityLogSubjectService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _app_features_marasco_core_services__WEBPACK_IMPORTED_MODULE_11__["LayoutService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["SwPush"]])
    ], WishlistDetailsComponent);
    return WishlistDetailsComponent;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/wishlist-details.guard.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/wishlist-details.guard.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: WishlistDetailsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistDetailsGuard", function() { return WishlistDetailsGuard; });
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


var WishlistDetailsGuard = /** @class */ (function () {
    function WishlistDetailsGuard(_router) {
        this._router = _router;
    }
    WishlistDetailsGuard.prototype.canActivate = function (route, state) {
        var id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid wishlist Id');
            this._router.navigate(['/wishlists']);
            return false;
        }
        ;
        return true;
    };
    WishlistDetailsGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WishlistDetailsGuard);
    return WishlistDetailsGuard;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/wishlist-details.resolve.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/wishlist-details.resolve.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: WishlistDetailsResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistDetailsResolve", function() { return WishlistDetailsResolve; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/activitylog.subject-service */ "./src/app/features/marasco/shared/activitylog.subject-service.ts");
/* harmony import */ var _app_features_marasco_core_store_wishlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/features/marasco/core/store/wishlist */ "./src/app/features/marasco/core/store/wishlist/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Local


var WishlistDetailsResolve = /** @class */ (function () {
    function WishlistDetailsResolve(_store, _activityLogService) {
        this._store = _store;
        this._activityLogService = _activityLogService;
    }
    WishlistDetailsResolve.prototype.resolve = function (route) {
        var id = route.paramMap.get('id');
        this._activityLogService.addGet("Getting user id: " + id);
        if (id === "0") {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])("0");
        }
        return this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_app_features_marasco_core_store_wishlist__WEBPACK_IMPORTED_MODULE_5__["getUserWishlists"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_) { return _; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (wishlist) { return wishlist._id === id; }));
        //return this._wishlistService.get(id);
    };
    WishlistDetailsResolve = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_4__["ActivityLogSubjectService"]])
    ], WishlistDetailsResolve);
    return WishlistDetailsResolve;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-following/wishlist-following.component.css":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-following/wishlist-following.component.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL21hcmFzY28vZmVhdHVyZXMvd2lzaGxpc3RQcmVtaWVyZS93aXNobGlzdHMvd2lzaGxpc3QtZm9sbG93aW5nL3dpc2hsaXN0LWZvbGxvd2luZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-following/wishlist-following.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-following/wishlist-following.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs\n      [items]=\"['Following']\"\n      icon=\"gift\"\n      class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"\n    ></sa-big-breadcrumbs>\n  </div>\n\n  <sa-widgets-grid>\n    <div class=\"row\">\n      <article class=\"col-sm-12\">\n        <div\n          sa-widget\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [custombutton]=\"false\"\n          [deletebutton]=\"false\"\n          [fullscreenbutton]=\"false\"\n          [togglebutton]=\"false\"\n          [sortable]=\"false\"\n          class=\"well\"\n        >\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-table\"></i> </span>\n            <h2>Following wishlists</h2>\n          </header>\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-datatable\n                [options]=\"options\"\n                tableClass=\"table table-striped table-bordered table-hover\"\n                paginationLength=\"true\"\n                [tableName]=\"'wishlistFollowingDataTable'\"\n                name=\"wishlistFollowingDataTable\"\n              >\n                <thead>\n                  <tr>\n                    <th [style.width]=\"'30%'\" data-hide=\"mobile-p\">Name</th>\n                    <th data-class=\"expand\">Since</th>\n                  </tr>\n                </thead>\n\n                <tfoot>\n                  <tr>\n                    <th>Name</th>\n                    <th>Since</th>\n                  </tr>\n                </tfoot>\n              </sa-datatable>\n            </div>\n          </div>\n        </div>\n      </article>\n    </div>\n  </sa-widgets-grid>\n</div>\n\n<ng-template #wishlistFollowModal>\n  <wishlist-follow-modal\n    [showUnfollowButton]=\"true\"\n    [showPreviewButton]=\"true\"\n    [user]=\"user\"\n    (save)=\"closeModal()\"\n    (close)=\"onModalClose()\"\n  ></wishlist-follow-modal>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-following/wishlist-following.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-following/wishlist-following.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: WishlistFollowingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistFollowingComponent", function() { return WishlistFollowingComponent; });
/* harmony import */ var _core_services_wishlist_follow_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../core/services/wishlist-follow.service */ "./src/app/features/marasco/core/services/wishlist-follow.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/features/marasco/core/store/auth */ "./src/app/features/marasco/core/store/auth/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_features_marasco_core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/features/marasco/core/services */ "./src/app/features/marasco/core/services/index.ts");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
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









/**
 * https://jonathannicol.com/blog/2014/06/16/centre-crop-thumbnails-with-css/
 */
var WishlistFollowingComponent = /** @class */ (function () {
    //////////////////END Publicly exposed variables///////////
    function WishlistFollowingComponent(_route, _store, _layoutService, _router, _modalService, _wishlistFollowService) {
        this._route = _route;
        this._store = _store;
        this._layoutService = _layoutService;
        this._router = _router;
        this._modalService = _modalService;
        this._wishlistFollowService = _wishlistFollowService;
        //////////////////Private variables///////////
        this.subs$ = new subsink__WEBPACK_IMPORTED_MODULE_7__["SubSink"]();
        //////////////END Private variables //////////
        //////////////////Publicly exposed variables///////////
        this.defaultWishlists = [];
        this.isMobile = true;
        this.wishlistFollowings = this.defaultWishlists;
    }
    /////////////////////////////////////
    // Events
    /////////////////////////////////////
    WishlistFollowingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs$.add((this.pageIdSubscription = this._route.params.subscribe(function (params) {
            var t = _this._route.snapshot.data['wishlists'];
            _this.wishlistFollowings = _this._route.snapshot.data['wishlists'];
        })));
        this.subs$.add(this._wishlistFollowService.onWishlistFollowChanged.subscribe(function (follow) {
            _this.updateWishlistFollow(follow);
        }));
        this.activate();
    };
    /////////////////////////////////////
    // Public Methods
    /////////////////////////////////////
    WishlistFollowingComponent.prototype.closeModal = function () {
        this.bsModalRef.hide();
    };
    WishlistFollowingComponent.prototype.onModalClose = function () {
        this.bsModalRef.hide();
    };
    WishlistFollowingComponent.prototype.openModal = function (wishlistFollow) {
        var initialState = {
            wishlist: {
                _id: wishlistFollow.wishlistId._id,
                name: wishlistFollow.wishlistId.name
            },
            wishlistFollow: wishlistFollow || {
                name: '',
                purchased: false
            }
        };
        this.bsModalRef = this._modalService.show(this.wishlistFollowModal, {
            initialState: initialState
        });
    };
    WishlistFollowingComponent.prototype.previewWishlist = function (row, wishlist) {
        this._router.navigateByUrl("wishlistPremiere/wishlists/" + wishlist.wishlistId._id);
    };
    /////////////////////////////////////
    // Private Metods
    /////////////////////////////////////
    /**
     * Activate the component
     */
    WishlistFollowingComponent.prototype.activate = function () {
        //Gets current state of the app
        this.activateState();
        this.activateDataTable();
    };
    /**
     * @description Activates the Data Table for followings
     * @author Antonio Marasco
     * @date 2019-05-14
     * @private
     * @memberof WishlistFollowingComponent
     */
    WishlistFollowingComponent.prototype.activateDataTable = function () {
        var _this = this;
        var that = this;
        this.options = {
            dom: 'Bfrtip',
            data: this.wishlistFollowings,
            columns: [
                {
                    data: 'wishlistId.name',
                    title: 'Name',
                    defaultContent: '<i>Not Set</i>'
                },
                {
                    data: 'dateCreated',
                    render: function (data, type, row, meta) {
                        return moment__WEBPACK_IMPORTED_MODULE_5__(data).format('LLL');
                    },
                    title: 'Since'
                }
            ],
            rowCallback: function (row, data, index) {
                var self = _this;
                // Unbind first in order to avoid any duplicate handler
                // (see https://github.com/l-lin/angular-datatables/issues/87)
                jQuery('td', row).unbind('click');
                jQuery('td', row).bind('click', function () {
                    self.openModal(data);
                    //self.previewWishlist(row, data);
                });
                return row;
            }
        };
    };
    /**
     * @description Activates the state for the current page
     * @author Antonio Marasco
     * @date 2019-05-14
     * @private
     * @memberof WishlistFollowingComponent
     */
    WishlistFollowingComponent.prototype.activateState = function () {
        var _this = this;
        var currentState = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_4__["getUser"]));
        this.subs$.add(currentState.subscribe(function (data) {
            if (!!data) {
                _this.user = data.user;
            }
        }));
        //Sets mobile
        this.isMobile = this._layoutService.store.isMobile;
    };
    WishlistFollowingComponent.prototype.updateWishlistFollow = function (follow) {
        if (!follow) {
            return;
        }
        var foundWishlistFollowing = this.wishlistFollowings.find(function (wishlistFollow) {
            return wishlistFollow._id === follow._id;
        });
        var foundIndex = this.wishlistFollowings.findIndex(function (x) { return x._id === follow._id; });
        this.wishlistFollowings[foundIndex] = foundWishlistFollowing;
        var dt = jQuery('#wishlistFollowingDataTable').DataTable();
        dt.clear().draw();
        dt.rows.add(this.wishlistFollowings);
        dt.draw();
        //dt.columns.adjust().draw();
    };
    WishlistFollowingComponent.prototype.ngOnDestroy = function () {
        this.subs$.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wishlistFollowModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], WishlistFollowingComponent.prototype, "wishlistFollowModal", void 0);
    WishlistFollowingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'marasco-user-wishlist-follows',
            template: __webpack_require__(/*! ./wishlist-following.component.html */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-following/wishlist-following.component.html"),
            styles: [__webpack_require__(/*! ./wishlist-following.component.css */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-following/wishlist-following.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _app_features_marasco_core_services__WEBPACK_IMPORTED_MODULE_6__["LayoutService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"],
            _core_services_wishlist_follow_service__WEBPACK_IMPORTED_MODULE_0__["WishlistFollowService"]])
    ], WishlistFollowingComponent);
    return WishlistFollowingComponent;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-following/wishlist-following.guard.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-following/wishlist-following.guard.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: WishlistFollowingGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistFollowingGuard", function() { return WishlistFollowingGuard; });
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


var WishlistFollowingGuard = /** @class */ (function () {
    function WishlistFollowingGuard(_router) {
        this._router = _router;
    }
    WishlistFollowingGuard.prototype.canActivate = function (route, state) {
        return true;
    };
    WishlistFollowingGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WishlistFollowingGuard);
    return WishlistFollowingGuard;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-following/wishlist-following.resolve.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-following/wishlist-following.resolve.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: WishlistFollowingResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistFollowingResolve", function() { return WishlistFollowingResolve; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/activitylog.subject-service */ "./src/app/features/marasco/shared/activitylog.subject-service.ts");
/* harmony import */ var _app_features_marasco_core_store_wishlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/features/marasco/core/store/wishlist */ "./src/app/features/marasco/core/store/wishlist/index.ts");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Local



var WishlistFollowingResolve = /** @class */ (function () {
    function WishlistFollowingResolve(_store, _activityLogService) {
        this._store = _store;
        this._activityLogService = _activityLogService;
        this.subs$ = new subsink__WEBPACK_IMPORTED_MODULE_5__["SubSink"]();
    }
    WishlistFollowingResolve.prototype.resolve = function (route) {
        this._activityLogService.addGet("Getting user wishlist follows");
        var wishlists = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_app_features_marasco_core_store_wishlist__WEBPACK_IMPORTED_MODULE_4__["getUserWishlistFollowings"]), 
        //takeUntil(this.unsubscribe$),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_) { return _; }));
        return wishlists;
    };
    WishlistFollowingResolve.prototype.ngOnDestroy = function () {
        this.subs$.unsubscribe();
    };
    WishlistFollowingResolve = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_3__["ActivityLogSubjectService"]])
    ], WishlistFollowingResolve);
    return WishlistFollowingResolve;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-list/wishlist-list.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-list/wishlist-list.component.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL21hcmFzY28vZmVhdHVyZXMvd2lzaGxpc3RQcmVtaWVyZS93aXNobGlzdHMvd2lzaGxpc3QtbGlzdC93aXNobGlzdC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-list/wishlist-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-list/wishlist-list.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <div class=\"row\">\n        <sa-big-breadcrumbs [items]=\"['Wishlist', 'List']\" icon=\"gift\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n\n    </div>\n\n    <sa-widgets-grid>\n\n        <div class=\"row\">\n            <article class=\"col-sm-12\">\n                \n                <div sa-widget [editbutton]=\"false\" [deletebutton]=\"false\" color=\"darken\">\n                    <header>\n                        <span class=\"widget-icon\"> <i class=\"fa fa-table\"></i> </span>\n                        <h2>Wishlists</h2>\n                    </header>\n                    <div>\n                        <div class=\"widget-body no-padding\">\n\n                            <sa-datatable \n                                [options]=\"options\" \n                                tableClass=\"table table-striped table-bordered table-hover\" \n                                paginationLength=true>\n                                <thead>\n                                    <tr>\n                                        <th [style.width]=\"'250px'\" data-hide=\"mobile-p\">ID</th>\n                                        <th [style.width]=\"'8%'\" data-hide=\"mobile-p\">Name</th>\n                                        <th [style.width]=\"'8%'\">User</th>\n                                        <th [style.width]=\"'8%'\">Username</th>\n                                        <th [style.width]=\"'8%'\">Email</th>\n                                        <th data-class=\"expand\">Created</th>\n                                    </tr>\n                                </thead>\n\n                                <tfoot>\n                                    <tr>\n                                        <th>Id</th>\n                                        <th>Name</th>\n                                        <th>User</th>\n                                        <th>Username</th>\n                                        <th>Email</th>\n                                        <th>Created</th>\n                                    </tr>\n                                </tfoot>\n                            </sa-datatable>\n\n                        </div>\n                    </div>\n                </div>\n\n            </article>\n        </div>\n\n    </sa-widgets-grid>\n</div>"

/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-list/wishlist-list.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-list/wishlist-list.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: WishlistListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistListComponent", function() { return WishlistListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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



var WishlistListComponent = /** @class */ (function () {
    function WishlistListComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.wishlists = [];
    }
    WishlistListComponent.prototype.ngOnInit = function () {
        this.wishlists = this._route.snapshot.data['wishlists'];
        this.activate();
    };
    WishlistListComponent.prototype.toDetails = function (info) {
        this._router.navigate(['/wishlistPremiere/wishlists/details/' + info._id]);
    };
    WishlistListComponent.prototype.activate = function () {
        var _this = this;
        var that = this;
        this.options = {
            dom: 'Bfrtip',
            data: this.wishlists,
            columns: [
                { data: '_id', title: 'Id' },
                { data: 'name', title: 'Name', defaultContent: '<i>Not Set</i>' },
                { data: 'userId', title: 'User',
                    render: function (data, type, row, meta) {
                        return data.firstName + " " + data.lastName;
                    }
                },
                { data: 'userId.username' },
                { data: 'userId.email' },
                {
                    data: 'dateCreated',
                    render: function (data, type, row, meta) {
                        return moment__WEBPACK_IMPORTED_MODULE_2__(data).format('LLL');
                    }
                }
            ],
            buttons: [
                'copy',
                'excel',
                'pdf',
                'print',
                {
                    text: 'Create',
                    action: function (e, dt, node, config) {
                        that._router.navigate(['/wishlistPremiere/wishlists/details/', 0]);
                    },
                    className: 'btn btn-primary'
                }
            ],
            rowCallback: function (row, data, index) {
                var self = _this;
                // Unbind first in order to avoid any duplicate handler
                // (see https://github.com/l-lin/angular-datatables/issues/87)
                jQuery('td', row).unbind('click');
                jQuery('td', row).bind('click', function () {
                    self.toDetails(data);
                });
                return row;
            }
        };
    };
    WishlistListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'marasco-wishlistPremiere-wishlist-list',
            template: __webpack_require__(/*! ./wishlist-list.component.html */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-list/wishlist-list.component.html"),
            styles: [__webpack_require__(/*! ./wishlist-list.component.css */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-list/wishlist-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WishlistListComponent);
    return WishlistListComponent;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-list/wishlist-list.resolve.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-list/wishlist-list.resolve.ts ***!
  \*************************************************************************************************************/
/*! exports provided: WishlistListResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistListResolve", function() { return WishlistListResolve; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_wishlists_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/wishlists.service */ "./src/app/features/marasco/core/services/wishlists.service.ts");
/* harmony import */ var _shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/activitylog.subject-service */ "./src/app/features/marasco/shared/activitylog.subject-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WishlistListResolve = /** @class */ (function () {
    function WishlistListResolve(_wishlistService, _activityLogService) {
        this._wishlistService = _wishlistService;
        this._activityLogService = _activityLogService;
    }
    WishlistListResolve.prototype.resolve = function (route) {
        this._activityLogService.addGet('Get all wishlists');
        return this._wishlistService.allDetails();
    };
    WishlistListResolve = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services_wishlists_service__WEBPACK_IMPORTED_MODULE_1__["WishlistService"],
            _shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_2__["ActivityLogSubjectService"]])
    ], WishlistListResolve);
    return WishlistListResolve;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/follow-modal/follow-modal.component.css":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/follow-modal/follow-modal.component.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL21hcmFzY28vZmVhdHVyZXMvd2lzaGxpc3RQcmVtaWVyZS93aXNobGlzdHMvd2lzaGxpc3QvZm9sbG93LW1vZGFsL2ZvbGxvdy1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/follow-modal/follow-modal.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/follow-modal/follow-modal.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <button\n    type=\"button\"\n    class=\"close\"\n    data-dismiss=\"modal\"\n    aria-hidden=\"true\"\n    (click)=\"close.emit(true)\"\n  >\n    &times;\n  </button>\n  <h4 class=\"modal-title\" id=\"myModalLabel\">Follow Wishlist?</h4>\n</div>\n\n<div class=\"modal-body custom-scroll\">\n  <form\n    id=\"form-wishlist-options\"\n    class=\"smart-form\"\n    [saUiValidate]=\"validationOptions\"\n    novalidate=\"novalidate\"\n  >\n    <fieldset>\n      <div class=\"row\">\n        <section class=\"col col-md-6 col-xs-6\">\n          <label class=\"checkbox\">\n            <input\n              type=\"checkbox\"\n              name=\"notifiedOnAddItem\"\n              id=\"notifiedOnAddItem\"\n              [ngModel]=\"wishlistFollow.notifiedOnAddItem\"\n              value=\"true\"\n            />\n            <i></i>\n            Notify me when item added\n          </label>\n        </section>\n        <section class=\"col col-md-6 col-xs-6\">\n          <label class=\"checkbox\">\n            <input\n              type=\"checkbox\"\n              name=\"notifiedOnRemoveItem\"\n              id=\"notifiedOnRemoveItem\"\n              [ngModel]=\"wishlistFollow.notifiedOnRemoveItem\"\n              value=\"true\"\n            />\n            <i></i>\n            Notify me when item removed\n          </label>\n        </section>\n      </div>\n      <div class=\"row\">\n        <section class=\"col col-md-12 col-xs-12\">\n          <label class=\"checkbox\">\n            <input\n              type=\"checkbox\"\n              name=\"notifiedOnCompletion\"\n              id=\"notifiedOnCompletion\"\n              [ngModel]=\"wishlistFollow.notifiedOnCompletion\"\n              value=\"true\"\n            />\n            <i></i>\n            Notify when every item purchased\n          </label>\n        </section>\n      </div>\n    </fieldset>\n\n    <fieldset>\n      <div class=\"row\">\n        <section class=\"col col-12\" style=\"float: right\">\n          <button\n            type=\"button\"\n            class=\"btn btn-success btn-lg\"\n            *ngIf=\"showUnfollowButton\"\n            (click)=\"unfollow()\"\n          >\n            <i class=\"fa fa-minus-square\"></i> Unfollow\n          </button>\n          &nbsp;\n          <button\n            type=\"button\"\n            class=\"btn btn-primary btn-lg\"\n            *ngIf=\"showPreviewButton\"\n            (click)=\"preview()\"\n          >\n            <i class=\"fa fa-eye\"></i> Preview\n          </button>\n          &nbsp;\n          <button\n            type=\"button\"\n            class=\"btn btn-default btn-lg\"\n            (click)=\"close.emit(true)\"\n          >\n            Close\n          </button>\n          &nbsp;\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary btn-lg\"\n            id=\"save-preference\"\n          >\n            <i class=\"fa fa-check\"></i> Save\n          </button>\n        </section>\n      </div>\n    </fieldset>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/follow-modal/follow-modal.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/follow-modal/follow-modal.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: WishlistFollowModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistFollowModalComponent", function() { return WishlistFollowModalComponent; });
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/services/notification.service */ "./src/app/features/marasco/core/services/notification.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _app_features_marasco_shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/features/marasco/shared/activitylog.subject-service */ "./src/app/features/marasco/shared/activitylog.subject-service.ts");
/* harmony import */ var _app_features_marasco_core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/features/marasco/core/services */ "./src/app/features/marasco/core/services/index.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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










var Device = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Device;
var WishlistFollowModalComponent = /** @class */ (function () {
    function WishlistFollowModalComponent(_notificationService, _activityLogService, _wishlistFollowService, _modalService, _swPush, _layoutService, _router) {
        this._notificationService = _notificationService;
        this._activityLogService = _activityLogService;
        this._wishlistFollowService = _wishlistFollowService;
        this._modalService = _modalService;
        this._swPush = _swPush;
        this._layoutService = _layoutService;
        this._router = _router;
        //*=================I/O============================= */
        this.showUnfollowButton = false;
        this.showPreviewButton = false;
        this.options = {
            mode: 'popup',
            disabled: false,
            inline: true
        };
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**============Privately exposed properties ========= */
        this.subs$ = new subsink__WEBPACK_IMPORTED_MODULE_7__["SubSink"]();
        this.isUpdate = false;
        var initialState = this._modalService.config.initialState;
        this.wishlist = initialState.wishlist;
        this.wishlistFollow = initialState.wishlistFollow || {
            wishlistId: this.wishlist._id,
            notifiedOnAddItem: true,
            notifiedOnRemoveItem: true,
            notifiedOnCompletion: true
        };
    }
    WishlistFollowModalComponent.prototype.ngOnInit = function () {
        //Sets mobile
        this.isMobile = this._layoutService.store.isMobile;
        this.isUpdate = !!this.wishlistFollow._id;
        this.validationOptions = {
            // Rules for form validation
            wishlist: this.wishlist,
            wishlistFollow: this.wishlistFollow,
            user: this.user,
            isMobile: this.isMobile,
            rules: {
                name: {
                    required: true
                }
            },
            // Messages for form validation
            messages: {
                name: {
                    required: 'Please enter a name for the item'
                }
            },
            wishlistFollowService: this._wishlistFollowService,
            activityLogService: this._activityLogService,
            notificationService: this._notificationService,
            swPush: this._swPush,
            close: this.close,
            subs: this.subs$,
            submitHandler: this.saveFollow,
            saveMobile: this.saveMobile,
            saveWeb: this.saveWeb
            //submitHandler: this.followWishlist
        };
        this.initDevice();
        this.initMobilePushToken();
    };
    WishlistFollowModalComponent.prototype.initDevice = function () {
        return __awaiter(this, void 0, void 0, function () {
            var localStorageItem, device;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, localStorage.getItem(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].devicekey)];
                    case 1:
                        localStorageItem = _a.sent();
                        device = JSON.parse(localStorageItem);
                        this.device = device;
                        this.validationOptions.device = device;
                        return [2 /*return*/];
                }
            });
        });
    };
    WishlistFollowModalComponent.prototype.initMobilePushToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var localStoragePushToken, pushToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, localStorage.getItem(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pushTokenKey)];
                    case 1:
                        localStoragePushToken = _a.sent();
                        pushToken = JSON.parse(localStoragePushToken);
                        this.pushToken = pushToken;
                        this.validationOptions.pushToken = pushToken;
                        return [2 /*return*/];
                }
            });
        });
    };
    WishlistFollowModalComponent.prototype.saveFollow = function ($event) {
        if (this['settings'].isMobile) {
            this['settings'].saveMobile($event);
        }
        else {
            this['settings'].saveWeb($event);
        }
    };
    WishlistFollowModalComponent.prototype.saveMobile = function ($event) {
        var that = this;
        var wishlist = that.wishlist;
        var follow = {
            wishlistId: wishlist._id,
            userId: that.user._id,
            device: that.device,
            notifiedOnAddItem: $event.elements.notifiedOnAddItem.checked,
            notifiedOnRemoveItem: $event.elements.notifiedOnRemoveItem.checked,
            notifiedOnCompletion: $event.elements.notifiedOnCompletion.checked,
            pushToken: that.pushToken,
            wishlist: that.wishlist,
            schemaType: _env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].notificationSchema.mobile
        };
        if (!!that.wishlistFollow._id) {
            follow._id = that.wishlistFollow._id;
        }
        that.subs.add(that.wishlistFollowService.save(follow).subscribe(function (item) {
            if (item) {
                that.activityLogService.addUpdate("Inserted wishlist follow " + item._id);
                that.notificationService.smallBox({
                    title: 'Wishlist Follow Success!',
                    content: 'You are now following this wishlist ',
                    color: '#739E73',
                    timeout: 2000,
                    icon: 'fa fa-check',
                    number: '4',
                    sound: false
                });
                that.close.emit(true);
            }
            else {
                that.activityLogService.addError('No wishlist present: Operation Failed');
                that.notificationService.bigBox({
                    title: 'Oops! the database has returned an error',
                    content: 'No follow returned which means that the follow was not created',
                    color: '#C46A69',
                    icon: 'fa fa-warning shake animated',
                    number: '1',
                    timeout: 3000,
                    sound: false
                });
            }
        }, function (err) {
            that.activityLogService.addError(err);
            that.notificationService.bigBox({
                title: 'Oops!  there is an issue with the call to insert',
                content: err,
                color: '#C46A69',
                icon: 'fa fa-warning shake animated',
                number: '1',
                timeout: 3000,
                sound: false
            });
        }, function () {
            // Clean up
        }));
    };
    WishlistFollowModalComponent.prototype.saveWeb = function ($event) {
        var that = this;
        var model = {
            wishlistId: that.wishlist._id,
            userId: that.user._id,
            device: that.device,
            notifiedOnAddItem: $event.elements.notifiedOnAddItem.checked,
            notifiedOnRemoveItem: $event.elements.notifiedOnRemoveItem.checked,
            notifiedOnCompletion: $event.elements.notifiedOnCompletion.checked,
            wishlist: that.wishlist,
            schemaType: _env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].notificationSchema.web
        };
        if (!!that.wishlistFollow._id) {
            model._id = that.wishlistFollow._id;
        }
        that.swPush
            .requestSubscription({
            serverPublicKey: _env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serviceWorkerOptions.vap.publicKey
        })
            .then(function (pushSubscription) {
            // Save to
            if (!!pushSubscription) {
                var follow = Object.assign(model, pushSubscription.toJSON());
                that.subs.add(that.wishlistFollowService.save(follow).subscribe(function (item) {
                    if (item) {
                        that.activityLogService.addUpdate("Inserted wishlist follow " + item._id);
                        that.notificationService.smallBox({
                            title: 'Wishlist Follow Success!',
                            content: 'You are now following this wishlist ',
                            color: '#739E73',
                            timeout: 2000,
                            icon: 'fa fa-check',
                            number: '4',
                            sound: false
                        });
                        that.close.emit(true);
                    }
                    else {
                        that.activityLogService.addError('No wishlist present: Insert Failed');
                        that.notificationService.bigBox({
                            title: 'Oops! the database has returned an error',
                            content: 'No follow returned which means that the follow was not created',
                            color: '#C46A69',
                            icon: 'fa fa-warning shake animated',
                            number: '1',
                            timeout: 3000,
                            sound: false
                        });
                    }
                }, function (err) {
                    that.activityLogService.addError(err);
                    that.notificationService.bigBox({
                        title: 'Oops!  there is an issue with the call to insert',
                        content: err,
                        color: '#C46A69',
                        icon: 'fa fa-warning shake animated',
                        number: '1',
                        timeout: 3000,
                        sound: false
                    });
                }, function () {
                    // Clean up
                }));
            }
            else {
                that.activityLogService.addError('No wishlist follow: Insert Failed');
                that.notificationService.bigBox({
                    title: 'Oops! There is no subscription',
                    content: 'No follow returned which means that the follow was not created',
                    color: '#C46A69',
                    icon: 'fa fa-warning shake animated',
                    number: '1',
                    timeout: 3000,
                    sound: false
                });
            }
        }
        // ,(reason) => {
        //   that.notificationService.smallBox({
        //     title: 'Unable to resolve!',
        //     content: `The error received was ${reason}`,
        //     color: '#C46A69',
        //     icon: 'fa fa-warning shake animated',
        //     number: '1',
        //     timeout: 3000, // 3 seconds
        //     sound: false
        //   });
        // }
        )
            .catch(function (error) {
            //An error typically means that the device is not supported
            // so let's change some item properties to manage this
            // model.notifiedOnAddItem = false;
            // model.notifiedOnRemoveItem = false;
            // model.notifiedOnCompletion = false;
            var isCurrentUser = that.user._id === that.wishlist.userId;
            that.subs.add(that.wishlistFollowService.save(model, isCurrentUser).subscribe(function (item) {
                if (item) {
                    that.activityLogService.addUpdate("Saved wishlist follow " + item._id);
                    that.notificationService.smallBox({
                        title: 'Wishlist Follow Success!',
                        content: 'You are now following this wishlist!  Notifications are not supported on this device ',
                        color: '#C79121',
                        timeout: 3000,
                        icon: 'fa fa-shield fadeInLeft animated',
                        number: '4',
                        sound: false
                    });
                    that.close.emit(true);
                }
                else {
                    that.activityLogService.addError('No wishlist present: Insert Failed');
                    that.notificationService.bigBox({
                        title: 'Oops! the database has returned an error',
                        content: 'No follow returned which means that the follow was not created',
                        color: '#C46A69',
                        icon: 'fa fa-warning shake animated',
                        number: '1',
                        timeout: 3000,
                        sound: false
                    });
                }
            }, function (err) {
                that.activityLogService.addError(err);
                that.notificationService.bigBox({
                    title: 'Oops!  there is an issue with the call to insert',
                    content: err,
                    color: '#C46A69',
                    icon: 'fa fa-warning shake animated',
                    number: '1',
                    timeout: 3000,
                    sound: false
                });
            }, function () {
                // Clean up
            }));
        });
    };
    /**
     * @description Preview the wishlist
     * @author Antonio Marasco
     * @date 2019-05-16
     * @memberof WishlistFollowModalComponent
     */
    WishlistFollowModalComponent.prototype.preview = function () {
        this.close.emit(true);
        this._router.navigateByUrl("wishlistPremiere/wishlists/" + this.wishlistFollow.wishlistId._id);
    };
    WishlistFollowModalComponent.prototype.unfollow = function () { };
    WishlistFollowModalComponent.prototype.ngOnDestroy = function () {
        this.subs$.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], WishlistFollowModalComponent.prototype, "showUnfollowButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], WishlistFollowModalComponent.prototype, "showPreviewButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], WishlistFollowModalComponent.prototype, "wishlist", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], WishlistFollowModalComponent.prototype, "wishlistFolow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], WishlistFollowModalComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], WishlistFollowModalComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], WishlistFollowModalComponent.prototype, "save", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], WishlistFollowModalComponent.prototype, "close", void 0);
    WishlistFollowModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wishlist-follow-modal',
            template: __webpack_require__(/*! ./follow-modal.component.html */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/follow-modal/follow-modal.component.html"),
            styles: [__webpack_require__(/*! ./follow-modal.component.css */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/follow-modal/follow-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_notification_service__WEBPACK_IMPORTED_MODULE_0__["NotificationService"],
            _app_features_marasco_shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_3__["ActivityLogSubjectService"],
            _app_features_marasco_core_services__WEBPACK_IMPORTED_MODULE_4__["WishlistFollowService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["SwPush"],
            _app_features_marasco_core_services__WEBPACK_IMPORTED_MODULE_4__["LayoutService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], WishlistFollowModalComponent);
    return WishlistFollowModalComponent;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/wishlist.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/wishlist.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottom-color-black{\n  border-bottom-color: #3276b1;\n}\n\n.thumbnail {\n  position: absolute;\n  width: 75px;\n  height: 72px;\n  overflow: hidden;\n  margin-bottom: 0px;\n}\n\n.thumbnail img {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  height: 100%;\n  width: auto;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n}\n\n.thumbnail img.portrait {\n  width: 100%;\n  height: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbWFyYXNjby9mZWF0dXJlcy93aXNobGlzdFByZW1pZXJlL3dpc2hsaXN0cy93aXNobGlzdC93aXNobGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0NBQzlCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjs7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0VBQ1osd0NBQXdDO1VBRWhDLGdDQUFnQztDQUN6Qzs7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9tYXJhc2NvL2ZlYXR1cmVzL3dpc2hsaXN0UHJlbWllcmUvd2lzaGxpc3RzL3dpc2hsaXN0L3dpc2hsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tLWNvbG9yLWJsYWNre1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMzI3NmIxO1xufVxuXG4udGh1bWJuYWlsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3MnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4udGh1bWJuYWlsIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbn1cbi50aHVtYm5haWwgaW1nLnBvcnRyYWl0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/wishlist.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/wishlist.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n\n<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs\n      [items]=\"[wishlist.name || 'Wishlist']\"\n      icon=\"gift\"\n      class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"\n    ></sa-big-breadcrumbs>\n    <wp-settings [wishlist]=\"wishlist\"></wp-settings>\n  </div>\n\n  <!-- widget grid -->\n  <sa-widgets-grid>\n    <!-- START ROW -->\n    <div class=\"row\">\n      <!-- NEW COL START -->\n      <article class=\"col-sm-12 col-md-12 col-lg-12\">\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div\n          sa-widget\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [custombutton]=\"false\"\n          [deletebutton]=\"false\"\n          [fullscreenbutton]=\"false\"\n          [togglebutton]=\"false\"\n          [sortable]=\"false\"\n          class=\"well\"\n        >\n          <!-- widget div-->\n          <div>\n            <!-- widget content -->\n            <div>\n              <div class=\"row hidden-xs hidden-mobile\">\n                <div class=\"col-md-12\">\n                  <button\n                    type=\"button\"\n                    (click)=\"openModal($event, wishlistFollowModal, wishlist)\"\n                    class=\"btn btn-primary btn-lg\"\n                  >\n                    <i class=\"fa fa-gift fa-lg\"></i>\n                    Follow Wishlist\n                  </button>\n\n                  &nbsp;\n                  <button\n                    *ngIf=\"wishlist.preferences.collaborative\"\n                    type=\"button\"\n                    (click)=\"openModal($event, wishlistItemModal)\"\n                    class=\"btn btn-primary btn-lg\"\n                  >\n                    <i class=\"fa fa-plus fa-lg\"></i>\n                    Add Item\n                  </button>\n\n                  <!-- &nbsp;\n                  <button\n                    *ngIf=\"false\"\n                    type=\"button\"\n                    (click)=\"\n                      openModal($event, wishlistUserFollowModal, wishlist)\n                    \"\n                    class=\"btn btn-primary btn-lg\"\n                  >\n                    <i class=\"fa fa-user fa-lg\"></i>\n                    Follow Me!\n                  </button> -->\n                  <br />&nbsp;\n                </div>\n              </div>\n              <div class=\"row visible-xs visible-mobile\">\n                <div class=\"col-md-12\">\n                  <button\n                    type=\"button\"\n                    (click)=\"openModal($event, wishlistFollowModal, wishlist)\"\n                    class=\"btn btn-primary btn-lg\"\n                  >\n                    <i class=\"fa fa-gift fa-lg\"></i>\n                    Follow Wishlist\n                  </button>\n\n                  &nbsp;\n                  <button\n                    *ngIf=\"wishlist.preferences.collaborative\"\n                    type=\"button\"\n                    (click)=\"openModal($event, wishlistItemModal)\"\n                    class=\"btn btn-primary btn-lg\"\n                  >\n                    <i class=\"fa fa-plus fa-lg\"></i>\n                  </button>\n\n                  <!-- &nbsp;\n                  <button\n                    *ngIf=\"false\"\n                    type=\"button\"\n                    (click)=\"\n                      openModal($event, wishlistUserFollowModal, wishlist)\n                    \"\n                    class=\"btn btn-primary btn-lg\"\n                  >\n                    <i class=\"fa fa-user fa-lg\"></i>\n                  </button> -->\n                  <br />&nbsp;\n                </div>\n              </div>\n            </div>\n            <!-- end widget content -->\n          </div>\n          <!-- end widget div -->\n        </div>\n        <!-- end widget -->\n      </article>\n      <!-- END COL -->\n    </div>\n    <!-- END ROW -->\n\n    <!-- START ROW -->\n    <div class=\"row\" *ngIf=\"wishlist.items.length !== 0\">\n      <article class=\"col-sm-12 col-md-12 col-lg-12\">\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div\n          sa-widget\n          [colorbutton]=\"false\"\n          [editbutton]=\"false\"\n          [custombutton]=\"false\"\n          [deletebutton]=\"false\"\n          [fullscreenbutton]=\"false\"\n          [togglebutton]=\"false\"\n          [sortable]=\"false\"\n          class=\"well\"\n        >\n          <div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <h1 class=\"text-center\">{{ wishlist.name }}</h1>\n              </div>\n            </div>\n            <div class=\"row\" *ngFor=\"let item of wishlist.items; let i = index\">\n              <div class=\"col-sm-12\">\n                <div class=\"row\">\n                  <div class=\"col-lg-1 col-md-1 col-sm-2 col-xs-3\">\n                    <div class=\"thumbnail handle\">\n                      <input\n                        type=\"hidden\"\n                        id=\"wishlistItemId\"\n                        name=\"wishlistItemId\"\n                        [(ngModel)]=\"item._id\"\n                      />\n                      <img\n                        alt=\"sunny\"\n                        class=\"online portrait\"\n                        [src]=\"\n                          item.image || 'assets/icons/icon-72x72_grey_out.png'\n                        \"\n                        (click)=\"open(i)\"\n                      />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-11 col-md-11 col-sm-10 col-xs-9\">\n                    <div class=\"well well-sm \">\n                      <div class=\"row\">\n                        <div class=\"col col-md-10 col-xs-9\">\n                          <b>{{ item.name }}</b\n                          ><br />\n                          {{ item.notes }}\n                        </div>\n                        <div class=\"col col-md-2 col-xs-3\">\n                          <span class=\"pull-right font-md\">\n                            {{ item.price | currency }}\n                          </span>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col col-md-12 col-xs-12\">\n                          <div class=\"pull-right\">\n                            <a\n                              *ngIf=\"item.url\"\n                              href=\"{{ item.url }}\"\n                              class=\"btn btn-primary btn-sm\"\n                            >\n                              <i class=\"fa fa-external-link\"></i>\n                              Link\n                            </a>\n                            &nbsp;\n\n                            <button\n                              *ngIf=\"item.purchased && !surpriseMe\"\n                              [disabled]=\"item.purchasedBy !== user._id\"\n                              class=\"btn btn-default btn-sm\"\n                              (click)=\"markItemPurchase($event, item)\"\n                            >\n                              <i class=\"fa fa-check\"></i>\n                              Purchased!\n                            </button>\n\n                            <button\n                              *ngIf=\"!item.purchased && !surpriseMe\"\n                              class=\"btn btn-success btn-sm\"\n                              (click)=\"markItemPurchase($event, item)\"\n                            >\n                              <i class=\"fa fa-cart-plus\"></i>\n                              I Got it?\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </article>\n    </div>\n\n    <!-- END ROW -->\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n</div>\n\n<ng-template #wishlistFollowModal>\n  <wishlist-follow-modal\n    [wishlist]=\"wishlist\"\n    [user]=\"user\"\n    (save)=\"closeModal()\"\n    (close)=\"onModalClose()\"\n  ></wishlist-follow-modal>\n</ng-template>\n\n<ng-template #wishlistUserFollowModal>\n  <wishlist-item-modal\n    [wishlist]=\"wishlist\"\n    (save)=\"closeModal()\"\n    (close)=\"onModalClose()\"\n  ></wishlist-item-modal>\n</ng-template>\n\n<ng-template #wishlistItemModal>\n  <wishlist-item-modal\n    [wishlist]=\"wishlist\"\n    [userId]=\"this.user._id\"\n    (save)=\"closeModal()\"\n    (close)=\"onModalClose()\"\n  ></wishlist-item-modal>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/wishlist.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/wishlist.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _app_features_marasco_core_store_wishlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/features/marasco/core/store/wishlist */ "./src/app/features/marasco/core/store/wishlist/index.ts");
/* harmony import */ var _app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/features/marasco/core/store/auth */ "./src/app/features/marasco/core/store/auth/index.ts");
/* harmony import */ var _app_features_marasco_core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/features/marasco/core/services */ "./src/app/features/marasco/core/services/index.ts");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * https://jonathannicol.com/blog/2014/06/16/centre-crop-thumbnails-with-css/
 */
var WishlistComponent = /** @class */ (function () {
    //////////////////END Publicly exposed variables///////////
    function WishlistComponent(_route, _router, _store, _modalService, _layoutService, _lightbox, _wishlistItemService) {
        this._route = _route;
        this._router = _router;
        this._store = _store;
        this._modalService = _modalService;
        this._layoutService = _layoutService;
        this._lightbox = _lightbox;
        this._wishlistItemService = _wishlistItemService;
        //////////////////Private variables///////////
        this._albums = [];
        this.subs$ = new subsink__WEBPACK_IMPORTED_MODULE_8__["SubSink"]();
        //////////////END Private variables //////////
        //////////////////Publicly exposed variables///////////
        this.defaultWishlist = {
            name: '',
            userId: '',
            preferences: {
                includePriceWhenSharing: true,
                markPurchasedItem: false,
                hideFromMe: false,
                currencyUnitSymbol: '$',
                notifyOnAddItem: false,
                notifyOnRemoveItem: false,
                notifyOnClose: false,
                collaborative: false
            },
            items: []
        };
        this.isMobile = true;
        this.state = {
            tabs: {
                demo1: 0
            }
        };
        this.surpriseMe = false;
        this.wishlist = this.defaultWishlist;
    }
    /////////////////////////////////////
    // Events
    /////////////////////////////////////
    WishlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs$.add(this._route.params.subscribe(function (params) {
            _this.wishlist = _this._route.snapshot.data['wishlist'];
            if (!_this.wishlist) {
                _this._router.navigateByUrl('/wishlistPremiere/wishlists/following');
            }
        }));
        this.activate();
    };
    /////////////////////////////////////
    // Public Methods
    /////////////////////////////////////
    WishlistComponent.prototype.close = function () {
        // close lightbox programmatically
        this._lightbox.close();
    };
    WishlistComponent.prototype.closeModal = function () {
        this.bsModalRef.hide();
    };
    /**
     * @description
     * @author Antonio Marasco
     * @date 2019-05-18
     * @param {*} $event
     * @param {string} url
     * @memberof WishlistComponent
     */
    WishlistComponent.prototype.goToUrl = function ($event, url) { };
    WishlistComponent.prototype.markItemPurchase = function ($event, item) {
        item.purchased = !item.purchased;
        item.purchasedBy = this.user._id;
        if (!item.purchased) {
            item.purchasedBy = null;
        }
        this._store.dispatch(new _app_features_marasco_core_store_wishlist__WEBPACK_IMPORTED_MODULE_4__["EditWishlistItemAction"](item));
    };
    WishlistComponent.prototype.openModal = function (event, template, wishlist) {
        var initialState = {
            wishlist: wishlist || {
                name: '',
                purchased: false
            },
            wishlistItem: {
                name: '',
                purchased: false
            }
        };
        event.preventDefault();
        this.bsModalRef = this._modalService.show(template, { initialState: initialState });
    };
    WishlistComponent.prototype.onModalClose = function () {
        this.bsModalRef.hide();
    };
    WishlistComponent.prototype.open = function (index) {
        this._lightbox.open(this._albums, index);
    };
    /////////////////////////////////////
    // Private Metods
    /////////////////////////////////////
    /**
     * Activate the component
     */
    WishlistComponent.prototype.activate = function () {
        //Gets current state of the app
        this.activateState();
        if (this.user._id === this.wishlist.userId) {
            this.surpriseMe = this.wishlist.preferences.hideFromMe;
        }
    };
    WishlistComponent.prototype.activateState = function () {
        var _this = this;
        var currentState = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_app_features_marasco_core_store_auth__WEBPACK_IMPORTED_MODULE_5__["getUser"]));
        //Set current user, if applicable
        this.subs$.add(currentState.subscribe(function (data) {
            if (!!data) {
                _this.user = data.user;
            }
        }));
        //Sets mobile
        this.isMobile = this._layoutService.store.isMobile;
        //Set wishlist items
        this.wishlist.items.forEach(function (item, index) {
            var price = !!item.price ? " : $" + item.price : '';
            var album = {
                thumb: item.image || 'assets/icons/icon-72x72_grey_out.png',
                src: item.image || 'assets/icons/icon-384x384.png',
                caption: "" + item.name + price
            };
            _this._albums.push(album);
        });
        //Subscribe to wishlist changes
        this.subs$.add(this._wishlistItemService.onWishlistItemCreated.subscribe(function (wishlistItem) {
            if (!!wishlistItem) {
                var price = !!wishlistItem.price ? " : $" + wishlistItem.price : '';
                var album = {
                    thumb: wishlistItem.image || 'assets/icons/icon-72x72_grey_out.png',
                    src: wishlistItem.image || 'assets/icons/icon-384x384.png',
                    caption: "" + wishlistItem.name + price
                };
                _this._albums.push(album);
                _this.wishlist.items.push(wishlistItem);
            }
        }));
    };
    /**
     * Validate the item
     */
    WishlistComponent.prototype.ngOnDestroy = function () {
        this.subs$.unsubscribe();
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'marasco-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/wishlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _app_features_marasco_core_services__WEBPACK_IMPORTED_MODULE_6__["LayoutService"],
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_7__["Lightbox"],
            _app_features_marasco_core_services__WEBPACK_IMPORTED_MODULE_6__["WishlistItemService"]])
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/wishlist.guard.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/wishlist.guard.ts ***!
  \*************************************************************************************************/
/*! exports provided: WishlistGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistGuard", function() { return WishlistGuard; });
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


var WishlistGuard = /** @class */ (function () {
    function WishlistGuard(_router) {
        this._router = _router;
    }
    WishlistGuard.prototype.canActivate = function (route, state) {
        var id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid wishlist Id');
            this._router.navigate(['/wishlists']);
            return false;
        }
        ;
        return true;
    };
    WishlistGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WishlistGuard);
    return WishlistGuard;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/wishlist.resolve.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/wishlist.resolve.ts ***!
  \***************************************************************************************************/
/*! exports provided: WishlistResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistResolve", function() { return WishlistResolve; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/activitylog.subject-service */ "./src/app/features/marasco/shared/activitylog.subject-service.ts");
/* harmony import */ var _app_features_marasco_core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/features/marasco/core/services */ "./src/app/features/marasco/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Local


var WishlistResolve = /** @class */ (function () {
    function WishlistResolve(_store, _activityLogService, _wishlistService) {
        this._store = _store;
        this._activityLogService = _activityLogService;
        this._wishlistService = _wishlistService;
    }
    WishlistResolve.prototype.resolve = function (route) {
        var id = route.paramMap.get('id');
        this._activityLogService.addGet("Getting user id: " + id);
        if (id === '0') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('0');
        }
        // return this._store.pipe(
        //   select(fromWishlist.getUserWishlists),
        //   take(1),
        //   mergeMap((_) => _),
        //   filter((wishlist: Wishlist) => wishlist._id === id)
        // );
        return this._wishlistService.get(id);
    };
    WishlistResolve = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _shared_activitylog_subject_service__WEBPACK_IMPORTED_MODULE_3__["ActivityLogSubjectService"],
            _app_features_marasco_core_services__WEBPACK_IMPORTED_MODULE_4__["WishlistService"]])
    ], WishlistResolve);
    return WishlistResolve;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlists-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlists-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: routes, WishlistsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistsRoutingModule", function() { return WishlistsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wishlist_details_wishlist_details_resolve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wishlist-details/wishlist-details.resolve */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/wishlist-details.resolve.ts");
/* harmony import */ var _wishlist_details_wishlist_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishlist-details/wishlist-details.component */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-details/wishlist-details.component.ts");
/* harmony import */ var _wishlist_list_wishlist_list_resolve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishlist-list/wishlist-list.resolve */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-list/wishlist-list.resolve.ts");
/* harmony import */ var _wishlist_list_wishlist_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wishlist-list/wishlist-list.component */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-list/wishlist-list.component.ts");
/* harmony import */ var _wishlist_wishlist_resolve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wishlist/wishlist.resolve */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/wishlist.resolve.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist/wishlist.component.ts");
/* harmony import */ var _wishlists_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wishlists.component */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlists.component.ts");
/* harmony import */ var _wishlist_following_wishlist_following_resolve__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wishlist-following/wishlist-following.resolve */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-following/wishlist-following.resolve.ts");
/* harmony import */ var _wishlist_following_wishlist_following_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wishlist-following/wishlist-following.component */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlist-following/wishlist-following.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _wishlists_component__WEBPACK_IMPORTED_MODULE_8__["WishlistsComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'following',
                component: _wishlist_following_wishlist_following_component__WEBPACK_IMPORTED_MODULE_10__["WishlistFollowingComponent"],
                data: {
                    pageTitle: 'Following'
                },
                resolve: { wishlists: _wishlist_following_wishlist_following_resolve__WEBPACK_IMPORTED_MODULE_9__["WishlistFollowingResolve"] }
            },
            {
                path: 'list',
                component: _wishlist_list_wishlist_list_component__WEBPACK_IMPORTED_MODULE_5__["WishlistListComponent"],
                data: {
                    pageTitle: 'List'
                },
                resolve: { wishlists: _wishlist_list_wishlist_list_resolve__WEBPACK_IMPORTED_MODULE_4__["WishlistListResolve"] }
            },
            {
                path: 'details/:id',
                component: _wishlist_details_wishlist_details_component__WEBPACK_IMPORTED_MODULE_3__["WishlistDetailsComponent"],
                data: {
                    pageTitle: 'Details'
                },
                resolve: {
                    wishlist: _wishlist_details_wishlist_details_resolve__WEBPACK_IMPORTED_MODULE_2__["WishlistDetailsResolve"]
                }
            },
            {
                path: ':id',
                pathMatch: 'full',
                component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_7__["WishlistComponent"],
                data: {
                    pageTitle: 'Wishlist'
                },
                resolve: { wishlist: _wishlist_wishlist_resolve__WEBPACK_IMPORTED_MODULE_6__["WishlistResolve"] }
            }
        ]
    }
];
var WishlistsRoutingModule = /** @class */ (function () {
    function WishlistsRoutingModule() {
    }
    WishlistsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], WishlistsRoutingModule);
    return WishlistsRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlists.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlists.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: WishlistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistsComponent", function() { return WishlistsComponent; });
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

var WishlistsComponent = /** @class */ (function () {
    function WishlistsComponent() {
    }
    WishlistsComponent.prototype.ngOnInit = function () {
    };
    WishlistsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: '<router-outlet></router-outlet>'
        }),
        __metadata("design:paramtypes", [])
    ], WishlistsComponent);
    return WishlistsComponent;
}());



/***/ }),

/***/ "./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlists.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/features/marasco/features/wishlistPremiere/wishlists/wishlists.module.ts ***!
  \******************************************************************************************/
/*! exports provided: WishlistsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistsModule", function() { return WishlistsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/fesm5/ngx-moment.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/features/marasco/shared/shared.module.ts");
/* harmony import */ var _shared_ui_datatable_smartadmin_datatable_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/ui/datatable/smartadmin-datatable.module */ "./src/app/features/marasco/shared/ui/datatable/smartadmin-datatable.module.ts");
/* harmony import */ var _shared_forms_validation_smartadmin_validation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/forms/validation/smartadmin-validation.module */ "./src/app/features/marasco/shared/forms/validation/smartadmin-validation.module.ts");
/* harmony import */ var _shared_forms_input_smartadmin_input_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/forms/input/smartadmin-input.module */ "./src/app/features/marasco/shared/forms/input/smartadmin-input.module.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _app_features_marasco_shared_forms_dropzone2_dropzone2_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/features/marasco/shared/forms/dropzone2/dropzone2.module */ "./src/app/features/marasco/shared/forms/dropzone2/dropzone2.module.ts");
/* harmony import */ var _app_features_marasco_shared_ui_nestable_list_nestable_list_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/features/marasco/shared/ui/nestable-list/nestable-list.module */ "./src/app/features/marasco/shared/ui/nestable-list/nestable-list.module.ts");
/* harmony import */ var angular_sortablejs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-sortablejs */ "./node_modules/angular-sortablejs/dist/index.js");
/* harmony import */ var angular_sortablejs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular_sortablejs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shared_settings_settings_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/settings/settings.module */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/shared/settings/settings.module.ts");
/* harmony import */ var _wishlists__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../wishlists */ "./src/app/features/marasco/features/wishlistPremiere/wishlists/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var WishlistsModule = /** @class */ (function () {
    function WishlistsModule() {
    }
    WishlistsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            entryComponents: [
                _wishlists__WEBPACK_IMPORTED_MODULE_12__["WishlistOptionsModalComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _shared_settings_settings_module__WEBPACK_IMPORTED_MODULE_11__["SettingsModule"],
                _shared_ui_datatable_smartadmin_datatable_module__WEBPACK_IMPORTED_MODULE_4__["SmartadminDatatableModule"],
                _shared_forms_validation_smartadmin_validation_module__WEBPACK_IMPORTED_MODULE_5__["SmartadminValidationModule"],
                _shared_forms_input_smartadmin_input_module__WEBPACK_IMPORTED_MODULE_6__["SmartadminInputModule"],
                _wishlists__WEBPACK_IMPORTED_MODULE_12__["WishlistsRoutingModule"],
                _app_features_marasco_shared_forms_dropzone2_dropzone2_module__WEBPACK_IMPORTED_MODULE_8__["Dropzone2Module"],
                _app_features_marasco_shared_ui_nestable_list_nestable_list_module__WEBPACK_IMPORTED_MODULE_9__["NestableListModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"].forRoot(),
                angular_sortablejs__WEBPACK_IMPORTED_MODULE_10__["SortablejsModule"].forRoot({ animation: 150 }),
                ngx_moment__WEBPACK_IMPORTED_MODULE_2__["MomentModule"].forRoot({
                    relativeTimeThresholdOptions: {
                        m: 59
                    }
                })
            ],
            exports: [],
            declarations: [
                _wishlists__WEBPACK_IMPORTED_MODULE_12__["WishlistsComponent"],
                _wishlists__WEBPACK_IMPORTED_MODULE_12__["WishlistListComponent"],
                _wishlists__WEBPACK_IMPORTED_MODULE_12__["WishlistComponent"],
                _wishlists__WEBPACK_IMPORTED_MODULE_12__["WishlistFollowModalComponent"],
                _wishlists__WEBPACK_IMPORTED_MODULE_12__["WishlistDetailsComponent"],
                _wishlists__WEBPACK_IMPORTED_MODULE_12__["WishlistItemModalComponent"],
                _wishlists__WEBPACK_IMPORTED_MODULE_12__["WishlistItemCategoryModalComponent"],
                _wishlists__WEBPACK_IMPORTED_MODULE_12__["WishlistOptionsModalComponent"],
                _wishlists__WEBPACK_IMPORTED_MODULE_12__["WishlistFollowingComponent"]
            ],
            providers: [
                _wishlists__WEBPACK_IMPORTED_MODULE_12__["WishlistListResolve"],
                _wishlists__WEBPACK_IMPORTED_MODULE_12__["WishlistResolve"],
                _wishlists__WEBPACK_IMPORTED_MODULE_12__["WishlistGuard"],
                _wishlists__WEBPACK_IMPORTED_MODULE_12__["WishlistDetailsResolve"],
                _wishlists__WEBPACK_IMPORTED_MODULE_12__["WishlistDetailsGuard"],
                _wishlists__WEBPACK_IMPORTED_MODULE_12__["WishlistFollowingResolve"],
                _wishlists__WEBPACK_IMPORTED_MODULE_12__["WishlistFollowingGuard"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]
            ]
        })
    ], WishlistsModule);
    return WishlistsModule;
}());



/***/ }),

/***/ "./src/app/features/marasco/shared/forms/dropzone2/dropzone2.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/features/marasco/shared/forms/dropzone2/dropzone2.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"dropzone\"\n  dropZone\n  (hovered)=\"toggleHover($event)\"\n  (dropped)=\"startUpload($event)\"\n  [class.hovering]=\"isHovering\"\n>\n  <h3>Drag and Drop</h3>\n\n  <div class=\"file\">\n    <label class=\"file-label\">\n      <input\n        class=\"file-input\"\n        type=\"file\"\n        (change)=\"startUpload($event.target.files)\"\n      />\n\n      <span class=\"file-cta\">\n        <span class=\"file-icon\">\n          <i class=\"fa fa-upload\"></i>\n        </span>\n        <span class=\"file-label\">\n          or choose a file…\n        </span>\n      </span>\n    </label>\n  </div>\n</div>\n\n<div *ngIf=\"(percentage | async) as pct\">\n  <progress class=\"progress is-info\" [value]=\"pct\" max=\"100\"> </progress\n  >{{ pct | number }}%\n</div>\n\n<div *ngIf=\"(snapshot | async) as snap\">\n  {{ snap.bytesTransferred | fileSize }} of {{ snap.totalBytes | fileSize }}\n\n  <div *ngIf=\"(downloadURL | async) as url\">\n    <!-- <h4>Image Uploaded</h4> -->\n    <img class=\"img-thumbnail\" [src]=\"url\" /><br />\n    <!-- <a [href]=\"url\" target=\"_blank\" rel=\"noopener\">Download Me!</a> -->\n  </div>\n\n  <div *ngIf=\"isActive(snap)\">\n    <button\n      (click)=\"task.pause()\"\n      class=\"btn btn-warning\"\n      [disabled]=\"!isActive(snap)\"\n    >\n      Pause\n    </button>\n    &nbsp;\n    <button\n      (click)=\"task.cancel()\"\n      class=\"btn btn-danger\"\n      [disabled]=\"!isActive(snap)\"\n    >\n      Cancel\n    </button>\n    &nbsp;\n    <button\n      (click)=\"task.resume()\"\n      class=\"btn btn-info\"\n      [disabled]=\"!(snap?.state === 'paused')\"\n    >\n      Resume\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/marasco/shared/forms/dropzone2/dropzone2.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/features/marasco/shared/forms/dropzone2/dropzone2.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "progress {\n  width: 100%;\n  margin-bottom: 2px; }\n\nprogress::-webkit-progress-value {\n  transition: width 0.1s ease; }\n\n/*\n * The MIT License\n * Copyright (c) 2012 Matias Meno <m@tias.me>\n */\n\nimg {\n  border: 1px solid #ddd;\n  /* Gray border */\n  border-radius: 4px;\n  /* Rounded border */\n  padding: 5px;\n  /* Some padding */\n  width: 100px;\n  /* Set a small width */ }\n\n@-webkit-keyframes passing-through {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30%, 70% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-40px);\n    transform: translateY(-40px); } }\n\n@keyframes passing-through {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30%, 70% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-40px);\n    transform: translateY(-40px); } }\n\n@-webkit-keyframes slide-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); } }\n\n@keyframes slide-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); } }\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  10% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1); }\n  20% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  10% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1); }\n  20% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n.dropzone, .dropzone * {\n  box-sizing: border-box; }\n\n.dropzone {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  border: 2px dashed #3276b1;\n  border-radius: 5px;\n  background: white;\n  margin: 10px 0;\n  min-height: 150px;\n  padding: 20px 20px; }\n\n.dropzone.dz-clickable {\n  cursor: pointer; }\n\n.dropzone.dz-clickable * {\n  cursor: default; }\n\n.dropzone.dz-clickable .dz-message, .dropzone.dz-clickable .dz-message * {\n  cursor: pointer; }\n\n.dropzone.dz-started .dz-message {\n  display: none; }\n\n.dropzone.dz-drag-hover {\n  border-style: solid; }\n\n.dropzone.dz-drag-hover .dz-message {\n  opacity: 0.5; }\n\n.dropzone .dz-message {\n  text-align: center;\n  margin: 2em 0; }\n\n.dropzone .dz-preview {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  margin: 16px;\n  min-height: 100px; }\n\n.dropzone .dz-preview:hover {\n  z-index: 1000; }\n\n.dropzone .dz-preview:hover .dz-details {\n  opacity: 1; }\n\n.dropzone .dz-preview.dz-file-preview .dz-image {\n  border-radius: 20px;\n  background: #999;\n  background: linear-gradient(to bottom, #eee, #ddd); }\n\n.dropzone .dz-preview.dz-file-preview .dz-details {\n  opacity: 1; }\n\n.dropzone .dz-preview.dz-image-preview {\n  background: white; }\n\n.dropzone .dz-preview.dz-image-preview .dz-details {\n  transition: opacity 0.2s linear; }\n\n.dropzone .dz-preview .dz-remove {\n  font-size: 14px;\n  text-align: center;\n  display: block;\n  cursor: pointer;\n  border: none; }\n\n.dropzone .dz-preview .dz-remove:hover {\n  text-decoration: underline; }\n\n.dropzone .dz-preview:hover .dz-details {\n  opacity: 1; }\n\n.dropzone .dz-preview .dz-details {\n  z-index: 20;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  font-size: 13px;\n  min-width: 100%;\n  max-width: 100%;\n  padding: 2em 1em;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.9);\n  line-height: 150%; }\n\n.dropzone .dz-preview .dz-details .dz-size {\n  margin-bottom: 1em;\n  font-size: 16px; }\n\n.dropzone .dz-preview .dz-details .dz-filename {\n  white-space: nowrap; }\n\n.dropzone .dz-preview .dz-details .dz-filename:hover span {\n  border: 1px solid rgba(200, 200, 200, 0.8);\n  background-color: rgba(255, 255, 255, 0.8); }\n\n.dropzone .dz-preview .dz-details .dz-filename:not(:hover) {\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span {\n  border: 1px solid transparent; }\n\n.dropzone .dz-preview .dz-details .dz-filename span, .dropzone .dz-preview .dz-details .dz-size span {\n  background-color: rgba(255, 255, 255, 0.4);\n  padding: 0 0.4em;\n  border-radius: 3px; }\n\n.dropzone .dz-preview:hover .dz-image img {\n  -webkit-transform: scale(1.05, 1.05);\n  transform: scale(1.05, 1.05);\n  -webkit-filter: blur(8px);\n  filter: blur(8px); }\n\n.dropzone .dz-preview .dz-image {\n  border-radius: 20px;\n  overflow: hidden;\n  width: 120px;\n  height: 120px;\n  position: relative;\n  display: block;\n  z-index: 10; }\n\n.dropzone .dz-preview .dz-image img {\n  display: block; }\n\n.dropzone .dz-preview.dz-success .dz-success-mark {\n  -webkit-animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);\n  animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1); }\n\n.dropzone .dz-preview.dz-error .dz-error-mark {\n  opacity: 1;\n  -webkit-animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);\n  animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1); }\n\n.dropzone .dz-preview .dz-success-mark, .dropzone .dz-preview .dz-error-mark {\n  pointer-events: none;\n  opacity: 0;\n  z-index: 500;\n  position: absolute;\n  display: block;\n  top: 50%;\n  left: 50%;\n  margin-left: -27px;\n  margin-top: -27px; }\n\n.dropzone .dz-preview .dz-success-mark svg, .dropzone .dz-preview .dz-error-mark svg {\n  display: block;\n  width: 54px;\n  height: 54px; }\n\n.dropzone .dz-preview.dz-processing .dz-progress {\n  opacity: 1;\n  transition: all 0.2s linear; }\n\n.dropzone .dz-preview.dz-complete .dz-progress {\n  opacity: 0;\n  transition: opacity 0.4s ease-in; }\n\n.dropzone .dz-preview:not(.dz-processing) .dz-progress {\n  -webkit-animation: pulse 6s ease infinite;\n  animation: pulse 6s ease infinite; }\n\n.dropzone .dz-preview .dz-progress {\n  opacity: 1;\n  z-index: 1000;\n  pointer-events: none;\n  position: absolute;\n  height: 16px;\n  left: 50%;\n  top: 50%;\n  margin-top: -8px;\n  width: 80px;\n  margin-left: -40px;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-transform: scale(1);\n  border-radius: 8px;\n  overflow: hidden; }\n\n.dropzone .dz-preview .dz-progress .dz-upload {\n  background: #333;\n  background: linear-gradient(to bottom, #666, #444);\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  transition: width 300ms ease-in-out; }\n\n.dropzone .dz-preview.dz-error .dz-error-message {\n  display: block; }\n\n.dropzone .dz-preview.dz-error:hover .dz-error-message {\n  opacity: 1;\n  pointer-events: auto; }\n\n.dropzone .dz-preview .dz-error-message {\n  pointer-events: none;\n  z-index: 1000;\n  position: absolute;\n  display: block;\n  display: none;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  border-radius: 8px;\n  font-size: 13px;\n  top: 130px;\n  left: -10px;\n  width: 140px;\n  background: #be2626;\n  background: linear-gradient(to bottom, #be2626, #a92222);\n  padding: 0.5em 1.2em;\n  color: white; }\n\n.dropzone .dz-preview .dz-error-message:after {\n  content: '';\n  position: absolute;\n  top: -6px;\n  left: 64px;\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #be2626; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWFyYXNjby9Eb2N1bWVudHMvR2l0SHViL21hcmFzY28td2lzaGxpc3RQcmVtaWVyZS1wd2Evc3JjL2FwcC9mZWF0dXJlcy9tYXJhc2NvL3NoYXJlZC9mb3Jtcy9kcm9wem9uZTIvZHJvcHpvbmUyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQTtFQUNFLFlBQVU7RUFDVixtQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSw0QkFBMkIsRUFDNUI7O0FBRUQ7OztHQUdHOztBQUVGO0VBQ0MsdUJBQXNCO0VBQUUsaUJBQWlCO0VBQ3pDLG1CQUFrQjtFQUFHLG9CQUFvQjtFQUN6QyxhQUFZO0VBQUUsa0JBQWtCO0VBQ2hDLGFBQVk7RUFBRSx1QkFBdUIsRUFDdEM7O0FBRUE7RUFDQztJQUNFLFdBQVU7SUFDVixvQ0FBbUM7SUFJbkMsNEJBQTJCLEVBQUE7RUFDN0I7SUFDRSxXQUFVO0lBQ1YsbUNBQWtDO0lBSWxDLDJCQUEwQixFQUFBO0VBQzVCO0lBQ0UsV0FBVTtJQUNWLHFDQUFvQztJQUlwQyw2QkFBNEIsRUFBQSxFQUFBOztBQXVCaEM7RUFDRTtJQUNFLFdBQVU7SUFDVixvQ0FBbUM7SUFJbkMsNEJBQTJCLEVBQUE7RUFDN0I7SUFDRSxXQUFVO0lBQ1YsbUNBQWtDO0lBSWxDLDJCQUEwQixFQUFBO0VBQzVCO0lBQ0UsV0FBVTtJQUNWLHFDQUFvQztJQUlwQyw2QkFBNEIsRUFBQSxFQUFBOztBQUNoQztFQUNFO0lBQ0UsV0FBVTtJQUNWLG9DQUFtQztJQUluQyw0QkFBMkIsRUFBQTtFQUM3QjtJQUNFLFdBQVU7SUFDVixtQ0FBa0M7SUFJbEMsMkJBQTBCLEVBQUEsRUFBQTs7QUFnQjlCO0VBQ0U7SUFDRSxXQUFVO0lBQ1Ysb0NBQW1DO0lBSW5DLDRCQUEyQixFQUFBO0VBQzdCO0lBQ0UsV0FBVTtJQUNWLG1DQUFrQztJQUlsQywyQkFBMEIsRUFBQSxFQUFBOztBQUM5QjtFQUNFO0lBQ0UsNEJBQTJCO0lBSTNCLG9CQUFtQixFQUFBO0VBQ3JCO0lBQ0UsOEJBQTZCO0lBSTdCLHNCQUFxQixFQUFBO0VBQ3ZCO0lBQ0UsNEJBQTJCO0lBSTNCLG9CQUFtQixFQUFBLEVBQUE7O0FBb0J2QjtFQUNFO0lBQ0UsNEJBQTJCO0lBSTNCLG9CQUFtQixFQUFBO0VBQ3JCO0lBQ0UsOEJBQTZCO0lBSTdCLHNCQUFxQixFQUFBO0VBQ3ZCO0lBQ0UsNEJBQTJCO0lBSTNCLG9CQUFtQixFQUFBLEVBQUE7O0FBQ3ZCO0VBQ0UsdUJBQXNCLEVBQUc7O0FBRTNCO0VBQ0UsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQix3QkFBdUI7RUFDdkIsdUJBQXNCO0VBRXRCLDJCQUEwQjtFQUMxQixtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxrQkFBaUI7RUFFakIsbUJBQWtCLEVBQUc7O0FBQ3JCO0VBQ0UsZ0JBQWUsRUFBRzs7QUFDbEI7RUFDRSxnQkFBZSxFQUFHOztBQUNwQjtFQUNFLGdCQUFlLEVBQUc7O0FBQ3RCO0VBQ0UsY0FBYSxFQUFHOztBQUNsQjtFQUNFLG9CQUFtQixFQUFHOztBQUN0QjtFQUNFLGFBQVksRUFBRzs7QUFDbkI7RUFDRSxtQkFBa0I7RUFDbEIsY0FBYSxFQUFHOztBQUNsQjtFQUNFLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsb0JBQW1CO0VBQ25CLGFBQVk7RUFDWixrQkFBaUIsRUFBRzs7QUFDcEI7RUFDRSxjQUFhLEVBQUc7O0FBQ2hCO0VBQ0UsV0FBVSxFQUFHOztBQUNqQjtFQUNFLG9CQUFtQjtFQUNuQixpQkFBZ0I7RUFDaEIsbURBQWtELEVBQUc7O0FBQ3ZEO0VBQ0UsV0FBVSxFQUFHOztBQUNmO0VBQ0Usa0JBQWlCLEVBQUc7O0FBQ3BCO0VBS0UsZ0NBQStCLEVBQUc7O0FBQ3RDO0VBQ0UsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsZUFBYztFQUNkLGdCQUFlO0VBQ2YsYUFBWSxFQUFHOztBQUNmO0VBQ0UsMkJBQTBCLEVBQUc7O0FBQ2pDO0VBQ0UsV0FBVSxFQUFHOztBQUNmO0VBQ0UsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sUUFBTztFQUNQLFdBQVU7RUFDVixnQkFBZTtFQUNmLGdCQUFlO0VBQ2YsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLDBCQUF5QjtFQUN6QixrQkFBaUIsRUFBRzs7QUFDcEI7RUFDRSxtQkFBa0I7RUFDbEIsZ0JBQWUsRUFBRzs7QUFDcEI7RUFDRSxvQkFBbUIsRUFBRzs7QUFDdEI7RUFDRSwyQ0FBMEM7RUFDMUMsMkNBQTBDLEVBQUc7O0FBQy9DO0VBQ0UsaUJBQWdCO0VBQ2hCLHdCQUF1QixFQUFHOztBQUMxQjtFQUNFLDhCQUE2QixFQUFHOztBQUN0QztFQUNFLDJDQUEwQztFQUMxQyxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQUc7O0FBQ3pCO0VBQ0UscUNBQW9DO0VBSXBDLDZCQUE0QjtFQUM1QiwwQkFBeUI7RUFDekIsa0JBQWlCLEVBQUc7O0FBQ3RCO0VBQ0Usb0JBQW1CO0VBQ25CLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsWUFBVyxFQUFHOztBQUNkO0VBQ0UsZUFBYyxFQUFHOztBQUNyQjtFQUNFLHNFQUFxRTtFQUlyRSw4REFBNkQsRUFBRzs7QUFDbEU7RUFDRSxXQUFVO0VBQ1YsK0RBQThEO0VBSTlELHVEQUFzRCxFQUFHOztBQUMzRDtFQUNFLHFCQUFvQjtFQUNwQixXQUFVO0VBQ1YsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsU0FBUTtFQUNSLFVBQVM7RUFDVCxtQkFBa0I7RUFDbEIsa0JBQWlCLEVBQUc7O0FBQ3BCO0VBQ0UsZUFBYztFQUNkLFlBQVc7RUFDWCxhQUFZLEVBQUc7O0FBQ25CO0VBQ0UsV0FBVTtFQUtWLDRCQUEyQixFQUFHOztBQUNoQztFQUNFLFdBQVU7RUFLVixpQ0FBZ0MsRUFBRzs7QUFDckM7RUFDRSwwQ0FBeUM7RUFJekMsa0NBQWlDLEVBQUc7O0FBQ3RDO0VBQ0UsV0FBVTtFQUNWLGNBQWE7RUFDYixxQkFBb0I7RUFDcEIsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixVQUFTO0VBQ1QsU0FBUTtFQUNSLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLHFDQUFvQztFQUNwQyw0QkFBMkI7RUFDM0IsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUFHOztBQUNuQjtFQUNFLGlCQUFnQjtFQUNoQixtREFBa0Q7RUFDbEQsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixRQUFPO0VBQ1AsVUFBUztFQUNULFNBQVE7RUFLUixvQ0FBbUMsRUFBRzs7QUFDMUM7RUFDRSxlQUFjLEVBQUc7O0FBQ25CO0VBQ0UsV0FBVTtFQUNWLHFCQUFvQixFQUFHOztBQUN6QjtFQUNFLHFCQUFvQjtFQUNwQixjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxjQUFhO0VBQ2IsV0FBVTtFQUtWLDhCQUE2QjtFQUM3QixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixXQUFVO0VBQ1YsWUFBVztFQUNYLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIseURBQXdEO0VBQ3hELHFCQUFvQjtFQUNwQixhQUFZLEVBQUc7O0FBQ2Y7RUFDRSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxXQUFVO0VBQ1YsU0FBUTtFQUNSLFVBQVM7RUFDVCxtQ0FBa0M7RUFDbEMsb0NBQW1DO0VBQ25DLGlDQUFnQyxFQUFHIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvbWFyYXNjby9zaGFyZWQvZm9ybXMvZHJvcHpvbmUyL2Ryb3B6b25lMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5kcm9wem9uZSB7IFxuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4vLyAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuLy8gICBib3JkZXI6IDJweCBkYXNoZWQgIzMyNzZiMTtcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbi8vICAgbWFyZ2luOiAxMHB4IDA7XG5cbi8vICAgJi5ob3ZlcmluZyB7XG4vLyAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMzI3NmIxO1xuLy8gICAgICAgY29sb3I6ICNkYWRhZGEgIWltcG9ydGFudDtcbi8vICAgfVxuLy8gfVxuXG5wcm9ncmVzcyB7XG4gIHdpZHRoOjEwMCU7XG4gIG1hcmdpbi1ib3R0b206MnB4O1xufVxuXG5wcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMXMgZWFzZTtcbn1cblxuLypcbiAqIFRoZSBNSVQgTGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDEyIE1hdGlhcyBNZW5vIDxtQHRpYXMubWU+XG4gKi9cblxuIGltZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7IC8qIEdyYXkgYm9yZGVyICovXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgIC8qIFJvdW5kZWQgYm9yZGVyICovXG4gIHBhZGRpbmc6IDVweDsgLyogU29tZSBwYWRkaW5nICovXG4gIHdpZHRoOiAxMDBweDsgLyogU2V0IGEgc21hbGwgd2lkdGggKi9cbn1cblxuIEAtd2Via2l0LWtleWZyYW1lcyBwYXNzaW5nLXRocm91Z2gge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7IH1cbiAgMzAlLCA3MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwcHgpOyB9IH1cbkAtbW96LWtleWZyYW1lcyBwYXNzaW5nLXRocm91Z2gge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7IH1cbiAgMzAlLCA3MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwcHgpOyB9IH1cbkBrZXlmcmFtZXMgcGFzc2luZy10aHJvdWdoIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpOyB9XG4gIDMwJSwgNzAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwcHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwcHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MHB4KTsgfSB9XG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7IH1cbiAgMzAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH0gfVxuQC1tb3ota2V5ZnJhbWVzIHNsaWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpOyB9XG4gIDMwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9IH1cbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7IH1cbiAgMzAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH0gfVxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG4gIDEwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxuQC1tb3ota2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG4gIDEwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAxMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cbi5kcm9wem9uZSwgLmRyb3B6b25lICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbi5kcm9wem9uZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgLy9ib3JkZXI6IDJweCBkYXNoZWQgIzMyNzZiMTtcbiAgYm9yZGVyOiAycHggZGFzaGVkICMzMjc2YjE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogMTBweCAwO1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgLy9ib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBhZGRpbmc6IDIwcHggMjBweDsgfVxuICAuZHJvcHpvbmUuZHotY2xpY2thYmxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAuZHJvcHpvbmUuZHotY2xpY2thYmxlICoge1xuICAgICAgY3Vyc29yOiBkZWZhdWx0OyB9XG4gICAgLmRyb3B6b25lLmR6LWNsaWNrYWJsZSAuZHotbWVzc2FnZSwgLmRyb3B6b25lLmR6LWNsaWNrYWJsZSAuZHotbWVzc2FnZSAqIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuZHJvcHpvbmUuZHotc3RhcnRlZCAuZHotbWVzc2FnZSB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAuZHJvcHpvbmUuZHotZHJhZy1ob3ZlciB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgfVxuICAgIC5kcm9wem9uZS5kei1kcmFnLWhvdmVyIC5kei1tZXNzYWdlIHtcbiAgICAgIG9wYWNpdHk6IDAuNTsgfVxuICAuZHJvcHpvbmUgLmR6LW1lc3NhZ2Uge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDJlbSAwOyB9XG4gIC5kcm9wem9uZSAuZHotcHJldmlldyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbjogMTZweDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDsgfVxuICAgIC5kcm9wem9uZSAuZHotcHJldmlldzpob3ZlciB7XG4gICAgICB6LWluZGV4OiAxMDAwOyB9XG4gICAgICAuZHJvcHpvbmUgLmR6LXByZXZpZXc6aG92ZXIgLmR6LWRldGFpbHMge1xuICAgICAgICBvcGFjaXR5OiAxOyB9XG4gICAgLmRyb3B6b25lIC5kei1wcmV2aWV3LmR6LWZpbGUtcHJldmlldyAuZHotaW1hZ2Uge1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGJhY2tncm91bmQ6ICM5OTk7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZWVlLCAjZGRkKTsgfVxuICAgIC5kcm9wem9uZSAuZHotcHJldmlldy5kei1maWxlLXByZXZpZXcgLmR6LWRldGFpbHMge1xuICAgICAgb3BhY2l0eTogMTsgfVxuICAgIC5kcm9wem9uZSAuZHotcHJldmlldy5kei1pbWFnZS1wcmV2aWV3IHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlOyB9XG4gICAgICAuZHJvcHpvbmUgLmR6LXByZXZpZXcuZHotaW1hZ2UtcHJldmlldyAuZHotZGV0YWlscyB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xuICAgICAgICAtbXMtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjsgfVxuICAgIC5kcm9wem9uZSAuZHotcHJldmlldyAuZHotcmVtb3ZlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyOiBub25lOyB9XG4gICAgICAuZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LXJlbW92ZTpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG4gICAgLmRyb3B6b25lIC5kei1wcmV2aWV3OmhvdmVyIC5kei1kZXRhaWxzIHtcbiAgICAgIG9wYWNpdHk6IDE7IH1cbiAgICAuZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LWRldGFpbHMge1xuICAgICAgei1pbmRleDogMjA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDJlbSAxZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7IH1cbiAgICAgIC5kcm9wem9uZSAuZHotcHJldmlldyAuZHotZGV0YWlscyAuZHotc2l6ZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4OyB9XG4gICAgICAuZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LWRldGFpbHMgLmR6LWZpbGVuYW1lIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgICAgICAuZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LWRldGFpbHMgLmR6LWZpbGVuYW1lOmhvdmVyIHNwYW4ge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjAwLCAyMDAsIDIwMCwgMC44KTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7IH1cbiAgICAgICAgLmRyb3B6b25lIC5kei1wcmV2aWV3IC5kei1kZXRhaWxzIC5kei1maWxlbmFtZTpub3QoOmhvdmVyKSB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAgICAgICAgIC5kcm9wem9uZSAuZHotcHJldmlldyAuZHotZGV0YWlscyAuZHotZmlsZW5hbWU6bm90KDpob3Zlcikgc3BhbiB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgfVxuICAgICAgLmRyb3B6b25lIC5kei1wcmV2aWV3IC5kei1kZXRhaWxzIC5kei1maWxlbmFtZSBzcGFuLCAuZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LWRldGFpbHMgLmR6LXNpemUgc3BhbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICAgICAgcGFkZGluZzogMCAwLjRlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4OyB9XG4gICAgLmRyb3B6b25lIC5kei1wcmV2aWV3OmhvdmVyIC5kei1pbWFnZSBpbWcge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDEuMDUpO1xuICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDEuMDUpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMS4wNSk7XG4gICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDEuMDUpO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1LCAxLjA1KTtcbiAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDhweCk7XG4gICAgICBmaWx0ZXI6IGJsdXIoOHB4KTsgfVxuICAgIC5kcm9wem9uZSAuZHotcHJldmlldyAuZHotaW1hZ2Uge1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aWR0aDogMTIwcHg7XG4gICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB6LWluZGV4OiAxMDsgfVxuICAgICAgLmRyb3B6b25lIC5kei1wcmV2aWV3IC5kei1pbWFnZSBpbWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIC5kcm9wem9uZSAuZHotcHJldmlldy5kei1zdWNjZXNzIC5kei1zdWNjZXNzLW1hcmsge1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHBhc3NpbmctdGhyb3VnaCAzcyBjdWJpYy1iZXppZXIoMC43NywgMCwgMC4xNzUsIDEpO1xuICAgICAgLW1vei1hbmltYXRpb246IHBhc3NpbmctdGhyb3VnaCAzcyBjdWJpYy1iZXppZXIoMC43NywgMCwgMC4xNzUsIDEpO1xuICAgICAgLW1zLWFuaW1hdGlvbjogcGFzc2luZy10aHJvdWdoIDNzIGN1YmljLWJlemllcigwLjc3LCAwLCAwLjE3NSwgMSk7XG4gICAgICAtby1hbmltYXRpb246IHBhc3NpbmctdGhyb3VnaCAzcyBjdWJpYy1iZXppZXIoMC43NywgMCwgMC4xNzUsIDEpO1xuICAgICAgYW5pbWF0aW9uOiBwYXNzaW5nLXRocm91Z2ggM3MgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKTsgfVxuICAgIC5kcm9wem9uZSAuZHotcHJldmlldy5kei1lcnJvciAuZHotZXJyb3ItbWFyayB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluIDNzIGN1YmljLWJlemllcigwLjc3LCAwLCAwLjE3NSwgMSk7XG4gICAgICAtbW96LWFuaW1hdGlvbjogc2xpZGUtaW4gM3MgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKTtcbiAgICAgIC1tcy1hbmltYXRpb246IHNsaWRlLWluIDNzIGN1YmljLWJlemllcigwLjc3LCAwLCAwLjE3NSwgMSk7XG4gICAgICAtby1hbmltYXRpb246IHNsaWRlLWluIDNzIGN1YmljLWJlemllcigwLjc3LCAwLCAwLjE3NSwgMSk7XG4gICAgICBhbmltYXRpb246IHNsaWRlLWluIDNzIGN1YmljLWJlemllcigwLjc3LCAwLCAwLjE3NSwgMSk7IH1cbiAgICAuZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LXN1Y2Nlc3MtbWFyaywgLmRyb3B6b25lIC5kei1wcmV2aWV3IC5kei1lcnJvci1tYXJrIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHotaW5kZXg6IDUwMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBtYXJnaW4tbGVmdDogLTI3cHg7XG4gICAgICBtYXJnaW4tdG9wOiAtMjdweDsgfVxuICAgICAgLmRyb3B6b25lIC5kei1wcmV2aWV3IC5kei1zdWNjZXNzLW1hcmsgc3ZnLCAuZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LWVycm9yLW1hcmsgc3ZnIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA1NHB4O1xuICAgICAgICBoZWlnaHQ6IDU0cHg7IH1cbiAgICAuZHJvcHpvbmUgLmR6LXByZXZpZXcuZHotcHJvY2Vzc2luZyAuZHotcHJvZ3Jlc3Mge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyOyB9XG4gICAgLmRyb3B6b25lIC5kei1wcmV2aWV3LmR6LWNvbXBsZXRlIC5kei1wcm9ncmVzcyB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbjtcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UtaW47XG4gICAgICAtbXMtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UtaW47XG4gICAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbjtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluOyB9XG4gICAgLmRyb3B6b25lIC5kei1wcmV2aWV3Om5vdCguZHotcHJvY2Vzc2luZykgLmR6LXByb2dyZXNzIHtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzZSA2cyBlYXNlIGluZmluaXRlO1xuICAgICAgLW1vei1hbmltYXRpb246IHB1bHNlIDZzIGVhc2UgaW5maW5pdGU7XG4gICAgICAtbXMtYW5pbWF0aW9uOiBwdWxzZSA2cyBlYXNlIGluZmluaXRlO1xuICAgICAgLW8tYW5pbWF0aW9uOiBwdWxzZSA2cyBlYXNlIGluZmluaXRlO1xuICAgICAgYW5pbWF0aW9uOiBwdWxzZSA2cyBlYXNlIGluZmluaXRlOyB9XG4gICAgLmRyb3B6b25lIC5kei1wcmV2aWV3IC5kei1wcm9ncmVzcyB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogLTQwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgICAuZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LXByb2dyZXNzIC5kei11cGxvYWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNjY2LCAjNDQ0KTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zIGVhc2UtaW4tb3V0OyB9XG4gICAgLmRyb3B6b25lIC5kei1wcmV2aWV3LmR6LWVycm9yIC5kei1lcnJvci1tZXNzYWdlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLmRyb3B6b25lIC5kei1wcmV2aWV3LmR6LWVycm9yOmhvdmVyIC5kei1lcnJvci1tZXNzYWdlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bzsgfVxuICAgIC5kcm9wem9uZSAuZHotcHJldmlldyAuZHotZXJyb3ItbWVzc2FnZSB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgICAtbXMtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgdG9wOiAxMzBweDtcbiAgICAgIGxlZnQ6IC0xMHB4O1xuICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgYmFja2dyb3VuZDogI2JlMjYyNjtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNiZTI2MjYsICNhOTIyMjIpO1xuICAgICAgcGFkZGluZzogMC41ZW0gMS4yZW07XG4gICAgICBjb2xvcjogd2hpdGU7IH1cbiAgICAgIC5kcm9wem9uZSAuZHotcHJldmlldyAuZHotZXJyb3ItbWVzc2FnZTphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgbGVmdDogNjRweDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjYmUyNjI2OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/features/marasco/shared/forms/dropzone2/dropzone2.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/features/marasco/shared/forms/dropzone2/dropzone2.component.ts ***!
  \********************************************************************************/
/*! exports provided: Dropzone2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropzone2Component", function() { return Dropzone2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Dropzone2Component = /** @class */ (function () {
    function Dropzone2Component(_storage, _db) {
        this._storage = _storage;
        this._db = _db;
        this.imageUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Dropzone2Component.prototype.toggleHover = function (event) {
        this.isHovering = event;
    };
    Dropzone2Component.prototype.startUpload = function (event) {
        var _this = this;
        // The File object
        var file = event.item(0);
        // Client-side validation example
        if (file.type.split('/')[0] !== 'image') {
            console.error('unsupported file type :( ');
            return;
        }
        // The storage path
        var path = "test/" + new Date().getTime() + "_" + file.name;
        // Totally optional metadata
        var customMetadata = {};
        if (!!this.configOptions) {
            path = "" + this.configOptions.path + file.name;
            if (!!this.configOptions.meta) {
                customMetadata = this.configOptions.meta;
            }
        }
        var fileRef = this._storage.ref(path);
        // The main task
        this.task = this._storage.upload(path, file, { customMetadata: customMetadata });
        // Progress monitoring
        this.percentage = this.task.percentageChanges();
        this.snapshot = this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (snap) {
            if (!!_this.dbName) {
                if (snap.bytesTransferred === snap.totalBytes) {
                    // Update firestore on completion
                    _this._db
                        .collection(_this.dbName)
                        .add(Object.assign({ url: path, size: snap.totalBytes }, customMetadata));
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.onImageUploadSuccess(fileRef); }));
    };
    Dropzone2Component.prototype.onImageUploadSuccess = function (fileRef) {
        var _this = this;
        this.imageUrl = null;
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(function (data) {
            _this.imageUpload.emit(data);
        });
    };
    // Determines if the upload task is active
    Dropzone2Component.prototype.isActive = function (snapshot) {
        return (snapshot.state === 'running' &&
            snapshot.bytesTransferred < snapshot.totalBytes);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Dropzone2Component.prototype, "imageUpload", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Dropzone2Component.prototype, "dbName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Dropzone2Component.prototype, "configOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Dropzone2Component.prototype, "imageUrl", void 0);
    Dropzone2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dropzone2-upload',
            template: __webpack_require__(/*! ./dropzone2.component.html */ "./src/app/features/marasco/shared/forms/dropzone2/dropzone2.component.html"),
            styles: [__webpack_require__(/*! ./dropzone2.component.scss */ "./src/app/features/marasco/shared/forms/dropzone2/dropzone2.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], Dropzone2Component);
    return Dropzone2Component;
}());



/***/ }),

/***/ "./src/app/features/marasco/shared/forms/dropzone2/dropzone2.directive.ts":
/*!********************************************************************************!*\
  !*** ./src/app/features/marasco/shared/forms/dropzone2/dropzone2.directive.ts ***!
  \********************************************************************************/
/*! exports provided: DropZone2Directive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropZone2Directive", function() { return DropZone2Directive; });
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

var DropZone2Directive = /** @class */ (function () {
    function DropZone2Directive() {
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hovered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DropZone2Directive.prototype.onDrop = function ($event) {
        $event.preventDefault();
        this.dropped.emit($event.dataTransfer.files);
        this.hovered.emit(false);
    };
    DropZone2Directive.prototype.onDragOver = function ($event) {
        $event.preventDefault();
        this.hovered.emit(true);
    };
    DropZone2Directive.prototype.onDragLeave = function ($event) {
        $event.preventDefault();
        this.hovered.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropZone2Directive.prototype, "dropped", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropZone2Directive.prototype, "hovered", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropZone2Directive.prototype, "onDrop", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropZone2Directive.prototype, "onDragOver", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropZone2Directive.prototype, "onDragLeave", null);
    DropZone2Directive = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[dropZone]'
        }),
        __metadata("design:paramtypes", [])
    ], DropZone2Directive);
    return DropZone2Directive;
}());



/***/ }),

/***/ "./src/app/features/marasco/shared/forms/dropzone2/dropzone2.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/marasco/shared/forms/dropzone2/dropzone2.module.ts ***!
  \*****************************************************************************/
/*! exports provided: Dropzone2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropzone2Module", function() { return Dropzone2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dropzone2_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropzone2.directive */ "./src/app/features/marasco/shared/forms/dropzone2/dropzone2.directive.ts");
/* harmony import */ var _dropzone2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropzone2.component */ "./src/app/features/marasco/shared/forms/dropzone2/dropzone2.component.ts");
/* harmony import */ var _dropzone2_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropzone2.pipe */ "./src/app/features/marasco/shared/forms/dropzone2/dropzone2.pipe.ts");
// https://github.com/angular/angularfire2/blob/master/docs/storage/storage.md
// https://medium.com/codingthesmartway-com-blog/firebase-cloud-storage-with-angular-394566fd529
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Dropzone2Module = /** @class */ (function () {
    function Dropzone2Module() {
    }
    Dropzone2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_dropzone2_directive__WEBPACK_IMPORTED_MODULE_2__["DropZone2Directive"], _dropzone2_component__WEBPACK_IMPORTED_MODULE_3__["Dropzone2Component"], _dropzone2_pipe__WEBPACK_IMPORTED_MODULE_4__["FileSizePipe"]],
            exports: [_dropzone2_component__WEBPACK_IMPORTED_MODULE_3__["Dropzone2Component"]]
        })
    ], Dropzone2Module);
    return Dropzone2Module;
}());



/***/ }),

/***/ "./src/app/features/marasco/shared/forms/dropzone2/dropzone2.pipe.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/marasco/shared/forms/dropzone2/dropzone2.pipe.ts ***!
  \***************************************************************************/
/*! exports provided: FileSizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSizePipe", function() { return FileSizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
var FILE_SIZE_UNITS_LONG = ['Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Pettabytes', 'Exabytes', 'Zettabytes', 'Yottabytes'];
var FileSizePipe = /** @class */ (function () {
    function FileSizePipe() {
    }
    FileSizePipe.prototype.transform = function (sizeInBytes, longForm) {
        var units = longForm
            ? FILE_SIZE_UNITS_LONG
            : FILE_SIZE_UNITS;
        var power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
        power = Math.min(power, units.length - 1);
        var size = sizeInBytes / Math.pow(1024, power); // size in new units
        var formattedSize = Math.round(size * 100) / 100; // keep up to 2 decimals
        var unit = units[power];
        return size ? formattedSize + " " + unit : '0';
    };
    FileSizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'fileSize'
        })
    ], FileSizePipe);
    return FileSizePipe;
}());



/***/ }),

/***/ "./src/app/features/marasco/shared/ui/datatable/datatable.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/marasco/shared/ui/datatable/datatable.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DatatableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableComponent", function() { return DatatableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var script_loader_smartadmin_plugins_datatables_datatables_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! script-loader!smartadmin-plugins/datatables/datatables.min.js */ "./node_modules/script-loader/index.js!./node_modules/smartadmin-plugins/datatables/datatables.min.js");
/* harmony import */ var script_loader_smartadmin_plugins_datatables_datatables_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(script_loader_smartadmin_plugins_datatables_datatables_min_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatatableComponent = /** @class */ (function () {
    function DatatableComponent(el) {
        this.el = el;
        this.width = "100%";
        this.tableName = '';
    }
    DatatableComponent.prototype.ngOnInit = function () {
        this.render();
    };
    DatatableComponent.prototype.render = function () {
        var element = $(this.el.nativeElement.children[0]);
        var options = this.options || {};
        var toolbar = "";
        if (options.buttons)
            toolbar += "B";
        if (this.paginationLength)
            toolbar += "l";
        if (this.columnsHide)
            toolbar += "C";
        if (typeof options.ajax === "string") {
            var url = options.ajax;
            options.ajax = {
                url: url
                // complete: function (xhr) {
                //
                // }
            };
        }
        options = $.extend(options, {
            dom: "<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs text-right'" +
                toolbar +
                ">r>" +
                "t" +
                "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",
            oLanguage: {
                sSearch: "<span class='input-group-addon'><i class='glyphicon glyphicon-search'></i></span> ",
                sLengthMenu: "_MENU_"
            },
            autoWidth: false,
            retrieve: true,
            responsive: true,
            initComplete: function (settings, json) {
                element
                    .parent()
                    .find(".input-sm")
                    .removeClass("input-sm")
                    .addClass("input-md");
            }
        });
        var _dataTable = element.DataTable(options);
        if (this.filter) {
            // Apply the filter
            element.on("keyup change", "thead th input[type=text]", function () {
                _dataTable
                    .column($(this)
                    .parent()
                    .index() + ":visible")
                    .search(this.value)
                    .draw();
            });
        }
        if (!toolbar) {
            element
                .parent()
                .find(".dt-toolbar")
                .append('<div class="text-right"><img src="assets/img/268x67.png" alt="SmartAdmin" style="width: 111px; margin-top: 3px; margin-right: 10px;"></div>');
        }
        if (this.detailsFormat) {
            var format_1 = this.detailsFormat;
            element.on("click", "td.details-control", function () {
                var tr = $(this).closest("tr");
                var row = _dataTable.row(tr);
                if (row.child.isShown()) {
                    row.child.hide();
                    tr.removeClass("shown");
                }
                else {
                    row.child(format_1(row.data())).show();
                    tr.addClass("shown");
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "filter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "detailsFormat", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DatatableComponent.prototype, "paginationLength", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DatatableComponent.prototype, "columnsHide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DatatableComponent.prototype, "tableClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DatatableComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DatatableComponent.prototype, "tableName", void 0);
    DatatableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "sa-datatable",
            template: "\n      <table class=\"dataTable responsive {{tableClass}}\" width=\"{{width}}\" id=\"{{tableName}}\">\n        <ng-content></ng-content>\n      </table>\n",
            styles: [__webpack_require__(/*! smartadmin-plugins/datatables/datatables.min.css */ "./node_modules/smartadmin-plugins/datatables/datatables.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DatatableComponent);
    return DatatableComponent;
}());



/***/ }),

/***/ "./src/app/features/marasco/shared/ui/datatable/smartadmin-datatable.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/marasco/shared/ui/datatable/smartadmin-datatable.module.ts ***!
  \*************************************************************************************/
/*! exports provided: SmartadminDatatableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartadminDatatableModule", function() { return SmartadminDatatableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _datatable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datatable.component */ "./src/app/features/marasco/shared/ui/datatable/datatable.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// require('smartadmin-plugins/bower_components/datatables.net-colreorder-bs/css/colReorder.bootstrap.min.css');
var SmartadminDatatableModule = /** @class */ (function () {
    function SmartadminDatatableModule() {
    }
    SmartadminDatatableModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_datatable_component__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"]],
            exports: [_datatable_component__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"]],
        })
    ], SmartadminDatatableModule);
    return SmartadminDatatableModule;
}());



/***/ }),

/***/ "./src/app/features/marasco/shared/ui/nestable-list/nestable-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/marasco/shared/ui/nestable-list/nestable-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: NestableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestableListComponent", function() { return NestableListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var script_loader_smartadmin_plugins_bower_components_jquery_nestable_jquery_nestable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! script-loader!smartadmin-plugins/bower_components/jquery-nestable/jquery.nestable.js */ "./node_modules/script-loader/index.js!./node_modules/smartadmin-plugins/bower_components/jquery-nestable/jquery.nestable.js");
/* harmony import */ var script_loader_smartadmin_plugins_bower_components_jquery_nestable_jquery_nestable_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(script_loader_smartadmin_plugins_bower_components_jquery_nestable_jquery_nestable_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var counter = 1;
var NestableListComponent = /** @class */ (function () {
    function NestableListComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NestableListComponent.prototype.ngOnInit = function () {
        //this.render();
    };
    NestableListComponent.prototype.ngOnChanges = function () {
        this.render();
    };
    NestableListComponent.prototype.render = function () {
        var _this = this;
        if (!this.items)
            return;
        var root = this.el.nativeElement.getElementsByTagName("div")[0];
        root.appendChild(this.createBranch(this.items));
        var options = this.options || {};
        $(root).nestable(options);
        $(root).on("change", function () {
            _this.change.emit($(root).nestable("serialize"));
        });
    };
    NestableListComponent.prototype.createChild = function (item) {
        var li = document.createElement("li");
        li.className = "dd-item dd3-item";
        li.dataset["id"] = item.id || "NestableListComponent" + counter++;
        if (item.content) {
            var div = document.createElement("div");
            var divContent = document.createElement('div');
            div.className = "dd-handle dd3-handle";
            divContent.className = "dd3-content";
            div.innerHTML = "&nbsp;";
            divContent.innerHTML = item.content;
            li.appendChild(div);
            li.appendChild(divContent);
        }
        if (item.children) {
            var branch = this.createBranch(item.children);
            li.appendChild(branch);
        }
        return li;
    };
    NestableListComponent.prototype.createBranch = function (items) {
        var _this = this;
        var ol = document.createElement("ol");
        ol.className = "dd-list";
        items.forEach(function (item) {
            ol.appendChild(_this.createChild(item));
        });
        return ol;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NestableListComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NestableListComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NestableListComponent.prototype, "change", void 0);
    NestableListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "sa-nestable-list",
            template: '<div class="dd"></div>'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], NestableListComponent);
    return NestableListComponent;
}());



/***/ }),

/***/ "./src/app/features/marasco/shared/ui/nestable-list/nestable-list.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/features/marasco/shared/ui/nestable-list/nestable-list.module.ts ***!
  \**********************************************************************************/
/*! exports provided: NestableListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestableListModule", function() { return NestableListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nestable_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nestable-list.component */ "./src/app/features/marasco/shared/ui/nestable-list/nestable-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NestableListModule = /** @class */ (function () {
    function NestableListModule() {
    }
    NestableListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_nestable_list_component__WEBPACK_IMPORTED_MODULE_2__["NestableListComponent"]],
            exports: [_nestable_list_component__WEBPACK_IMPORTED_MODULE_2__["NestableListComponent"]],
        })
    ], NestableListModule);
    return NestableListModule;
}());



/***/ })

}]);
//# sourceMappingURL=wishlists-wishlists-module.js.map