(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~landing-landing-module~register-register-module~wishlists-wishlists-module"],{

/***/ "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js ***!
  \**************************************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, ActionSheetOptionStyle, PhotosAlbumType, StatusBarStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return CameraSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return CameraDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return CameraResultType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function() { return FilesystemDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function() { return FilesystemEncoding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function() { return HapticsImpactStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function() { return ActionSheetOptionStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function() { return PhotosAlbumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function() { return StatusBarStyle; });
var CameraSource;
(function (CameraSource) {
    CameraSource["Prompt"] = "PROMPT";
    CameraSource["Camera"] = "CAMERA";
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
})(CameraResultType || (CameraResultType = {}));
var FilesystemDirectory;
(function (FilesystemDirectory) {
    /**
     * The Application directory
     */
    FilesystemDirectory["Application"] = "APPLICATION";
    /**
     * The Documents directory
     */
    FilesystemDirectory["Documents"] = "DOCUMENTS";
    /**
     * The Data directory
     */
    FilesystemDirectory["Data"] = "DATA";
    /**
     * The Cache directory
     */
    FilesystemDirectory["Cache"] = "CACHE";
    /**
     * The external directory (Android only)
     */
    FilesystemDirectory["External"] = "EXTERNAL";
    /**
     * The external storage directory (Android only)
     */
    FilesystemDirectory["ExternalStorage"] = "EXTERNAL_STORAGE";
})(FilesystemDirectory || (FilesystemDirectory = {}));
var FilesystemEncoding;
(function (FilesystemEncoding) {
    FilesystemEncoding["UTF8"] = "utf8";
    FilesystemEncoding["ASCII"] = "ascii";
    FilesystemEncoding["UTF16"] = "utf16";
})(FilesystemEncoding || (FilesystemEncoding = {}));
var HapticsImpactStyle;
(function (HapticsImpactStyle) {
    HapticsImpactStyle["Heavy"] = "HEAVY";
    HapticsImpactStyle["Medium"] = "MEDIUM";
    HapticsImpactStyle["Light"] = "LIGHT";
})(HapticsImpactStyle || (HapticsImpactStyle = {}));
var ActionSheetOptionStyle;
(function (ActionSheetOptionStyle) {
    ActionSheetOptionStyle["Default"] = "DEFAULT";
    ActionSheetOptionStyle["Destructive"] = "DESTRUCTIVE";
    ActionSheetOptionStyle["Cancel"] = "CANCEL";
})(ActionSheetOptionStyle || (ActionSheetOptionStyle = {}));
var PhotosAlbumType;
(function (PhotosAlbumType) {
    /**
     * Album is a "smart" album (such as Favorites or Recently Added)
     */
    PhotosAlbumType["Smart"] = "smart";
    /**
     * Album is a cloud-shared album
     */
    PhotosAlbumType["Shared"] = "shared";
    /**
     * Album is a user-created album
     */
    PhotosAlbumType["User"] = "user";
})(PhotosAlbumType || (PhotosAlbumType = {}));
var StatusBarStyle;
(function (StatusBarStyle) {
    StatusBarStyle["Dark"] = "DARK";
    StatusBarStyle["Light"] = "LIGHT";
})(StatusBarStyle || (StatusBarStyle = {}));
//# sourceMappingURL=core-plugin-definitions.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/global.js":
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/global.js ***!
  \*********************************************************/
/*! exports provided: Capacitor, Plugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Capacitor", function() { return Capacitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugins", function() { return Plugins; });
/* harmony import */ var _web_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-runtime */ "./node_modules/@capacitor/core/dist/esm/web-runtime.js");

// Create our default Capacitor instance, which will be
// overridden on native platforms
var Capacitor = new _web_runtime__WEBPACK_IMPORTED_MODULE_0__["CapacitorWeb"]();
Capacitor = window.Capacitor || Capacitor;
// Export window.Capacitor if not available already (ex: web)
if (!window.Capacitor) {
    window.Capacitor = Capacitor;
}
var Plugins = Capacitor.Plugins;

//# sourceMappingURL=global.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/index.js ***!
  \********************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, ActionSheetOptionStyle, PhotosAlbumType, StatusBarStyle, Capacitor, Plugins, registerWebPlugin, WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, StoragePluginWeb, Storage, ToastPluginWeb, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-plugin-definitions */ "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraResultType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemDirectory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemEncoding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsImpactStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["ActionSheetOptionStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["PhotosAlbumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["StatusBarStyle"]; });

/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./node_modules/@capacitor/core/dist/esm/global.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Capacitor", function() { return _global__WEBPACK_IMPORTED_MODULE_1__["Capacitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Plugins", function() { return _global__WEBPACK_IMPORTED_MODULE_1__["Plugins"]; });

/* harmony import */ var _web_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-plugins */ "./node_modules/@capacitor/core/dist/esm/web-plugins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["registerWebPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["BrowserPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Browser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["CameraPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Camera"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ClipboardPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Clipboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["GeolocationPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["DevicePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Device"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SharePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Share"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ModalsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Modals"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["MotionPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Motion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["StoragePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Storage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ToastPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Toast"]; });

/* harmony import */ var _web_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web/index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPluginRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPlugins", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPlugin", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugin"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/util.js":
/*!*******************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/util.js ***!
  \*******************************************************/
/*! exports provided: extend, uuid4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid4", function() { return uuid4; });
var extend = function (target) {
    var objs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objs[_i - 1] = arguments[_i];
    }
    objs.forEach(function (o) {
        if (o && typeof (o) === 'object') {
            for (var k in o) {
                if (o.hasOwnProperty(k)) {
                    target[k] = o[k];
                }
            }
        }
    });
    return target;
};
var uuid4 = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web-plugins.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web-plugins.js ***!
  \**************************************************************/
/*! exports provided: registerWebPlugin, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, StoragePluginWeb, Storage, ToastPluginWeb, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function() { return registerWebPlugin; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./node_modules/@capacitor/core/dist/esm/global.js");
/* harmony import */ var _web_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web/index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _web_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web/browser */ "./node_modules/@capacitor/core/dist/esm/web/browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function() { return _web_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return _web_browser__WEBPACK_IMPORTED_MODULE_2__["Browser"]; });

/* harmony import */ var _web_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web/camera */ "./node_modules/@capacitor/core/dist/esm/web/camera.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function() { return _web_camera__WEBPACK_IMPORTED_MODULE_3__["CameraPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _web_camera__WEBPACK_IMPORTED_MODULE_3__["Camera"]; });

/* harmony import */ var _web_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web/clipboard */ "./node_modules/@capacitor/core/dist/esm/web/clipboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function() { return _web_clipboard__WEBPACK_IMPORTED_MODULE_4__["ClipboardPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return _web_clipboard__WEBPACK_IMPORTED_MODULE_4__["Clipboard"]; });

/* harmony import */ var _web_geolocation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web/geolocation */ "./node_modules/@capacitor/core/dist/esm/web/geolocation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function() { return _web_geolocation__WEBPACK_IMPORTED_MODULE_5__["GeolocationPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return _web_geolocation__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]; });

/* harmony import */ var _web_device__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./web/device */ "./node_modules/@capacitor/core/dist/esm/web/device.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function() { return _web_device__WEBPACK_IMPORTED_MODULE_6__["DevicePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return _web_device__WEBPACK_IMPORTED_MODULE_6__["Device"]; });

/* harmony import */ var _web_share__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./web/share */ "./node_modules/@capacitor/core/dist/esm/web/share.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function() { return _web_share__WEBPACK_IMPORTED_MODULE_7__["SharePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return _web_share__WEBPACK_IMPORTED_MODULE_7__["Share"]; });

/* harmony import */ var _web_modals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./web/modals */ "./node_modules/@capacitor/core/dist/esm/web/modals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function() { return _web_modals__WEBPACK_IMPORTED_MODULE_8__["ModalsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return _web_modals__WEBPACK_IMPORTED_MODULE_8__["Modals"]; });

/* harmony import */ var _web_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web/motion */ "./node_modules/@capacitor/core/dist/esm/web/motion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function() { return _web_motion__WEBPACK_IMPORTED_MODULE_9__["MotionPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return _web_motion__WEBPACK_IMPORTED_MODULE_9__["Motion"]; });

/* harmony import */ var _web_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./web/storage */ "./node_modules/@capacitor/core/dist/esm/web/storage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function() { return _web_storage__WEBPACK_IMPORTED_MODULE_10__["StoragePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return _web_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"]; });

/* harmony import */ var _web_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./web/toast */ "./node_modules/@capacitor/core/dist/esm/web/toast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function() { return _web_toast__WEBPACK_IMPORTED_MODULE_11__["ToastPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return _web_toast__WEBPACK_IMPORTED_MODULE_11__["Toast"]; });













Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugins"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"]);
var registerWebPlugin = function (plugin) {
    Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugin"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"], plugin);
};
//# sourceMappingURL=web-plugins.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web-runtime.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web-runtime.js ***!
  \**************************************************************/
/*! exports provided: CapacitorWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacitorWeb", function() { return CapacitorWeb; });
var CapacitorWeb = /** @class */ (function () {
    function CapacitorWeb() {
        var _this = this;
        this.Plugins = {};
        this.platform = 'web';
        this.isNative = false;
        // Build a proxy for the Plugins object that returns the "Noop Plugin"
        // if a plugin isn't available
        this.Plugins = new Proxy(this.Plugins, {
            get: function (target, prop) {
                if (typeof target[prop] === 'undefined') {
                    var thisRef_1 = _this;
                    return new Proxy({}, {
                        get: function (_target, _prop) {
                            if (typeof _target[_prop] === 'undefined') {
                                return thisRef_1.pluginMethodNoop.bind(thisRef_1, _target, _prop, prop);
                            }
                            else {
                                return _target[_prop];
                            }
                        }
                    });
                }
                else {
                    return target[prop];
                }
            }
        });
    }
    CapacitorWeb.prototype.pluginMethodNoop = function (_target, _prop, pluginName) {
        return Promise.reject(pluginName + " does not have web implementation.");
    };
    CapacitorWeb.prototype.getPlatform = function () {
        return this.platform;
    };
    CapacitorWeb.prototype.isPluginAvailable = function (name) {
        return this.Plugins.hasOwnProperty(name);
    };
    CapacitorWeb.prototype.handleError = function (e) {
        console.error(e);
    };
    return CapacitorWeb;
}());

//# sourceMappingURL=web-runtime.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/browser.js ***!
  \**************************************************************/
/*! exports provided: BrowserPluginWeb, Browser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function() { return BrowserPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return Browser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var BrowserPluginWeb = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BrowserPluginWeb, _super);
    function BrowserPluginWeb() {
        return _super.call(this, {
            name: 'Browser',
            platforms: ['web']
        }) || this;
    }
    BrowserPluginWeb.prototype.open = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this._lastWindow = window.open(options.url, options.windowName || "_blank");
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    BrowserPluginWeb.prototype.prefetch = function (_options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // Does nothing
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    BrowserPluginWeb.prototype.close = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this._lastWindow && this._lastWindow.close();
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    return BrowserPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Browser = new BrowserPluginWeb();

//# sourceMappingURL=browser.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/camera.js":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/camera.js ***!
  \*************************************************************/
/*! exports provided: CameraPluginWeb, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function() { return CameraPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


//import '@ionic/pwa-elements';
var CameraPluginWeb = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CameraPluginWeb, _super);
    function CameraPluginWeb() {
        return _super.call(this, {
            name: 'Camera',
            platforms: ['web']
        }) || this;
    }
    CameraPluginWeb.prototype.getPhoto = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                options;
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cameraModal;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    cameraModal = document.createElement('ion-pwa-camera-modal');
                                    document.body.appendChild(cameraModal);
                                    return [4 /*yield*/, cameraModal.componentOnReady()];
                                case 1:
                                    _a.sent();
                                    cameraModal.addEventListener('onPhoto', function (e) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var photo, _a;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    photo = e.detail;
                                                    if (!(photo === null)) return [3 /*break*/, 1];
                                                    reject();
                                                    return [3 /*break*/, 3];
                                                case 1:
                                                    _a = resolve;
                                                    return [4 /*yield*/, this._getCameraPhoto(photo)];
                                                case 2:
                                                    _a.apply(void 0, [_b.sent()]);
                                                    _b.label = 3;
                                                case 3:
                                                    cameraModal.dismiss();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    cameraModal.present();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    CameraPluginWeb.prototype._getCameraPhoto = function (photo) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(photo);
            reader.onloadend = function () {
                var r = reader.result;
                resolve({
                    base64Data: r,
                    webPath: r,
                    format: 'jpeg'
                });
            };
            reader.onerror = function (e) {
                reject(e);
            };
        });
    };
    return CameraPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Camera = new CameraPluginWeb();

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/clipboard.js":
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/clipboard.js ***!
  \****************************************************************/
/*! exports provided: ClipboardPluginWeb, Clipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function() { return ClipboardPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return Clipboard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var ClipboardPluginWeb = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClipboardPluginWeb, _super);
    function ClipboardPluginWeb() {
        return _super.call(this, {
            name: 'Clipboard',
            platforms: ['web']
        }) || this;
    }
    ClipboardPluginWeb.prototype.write = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!navigator.clipboard) {
                            return [2 /*return*/, Promise.reject('Clipboard API not available in this browser')];
                        }
                        if (!(options.string || options.url)) return [3 /*break*/, 2];
                        return [4 /*yield*/, navigator.clipboard.writeText(options.string || options.label)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        if (options.image) {
                            return [2 /*return*/, Promise.reject("Setting images not supported on the web")];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    ClipboardPluginWeb.prototype.read = function (_options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, _i, _a, item;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!navigator.clipboard) {
                            return [2 /*return*/, Promise.reject('Clipboard API not available in this browser')];
                        }
                        return [4 /*yield*/, navigator.clipboard.read()];
                    case 1:
                        data = _b.sent();
                        for (_i = 0, _a = data.items; _i < _a.length; _i++) {
                            item = _a[_i];
                            if (item.type === 'text/plain') {
                                return [2 /*return*/, Promise.resolve(item.getAs('text/plain'))];
                            }
                        }
                        return [2 /*return*/, Promise.reject('Unable to get data from clipboard')];
                }
            });
        });
    };
    return ClipboardPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Clipboard = new ClipboardPluginWeb();

//# sourceMappingURL=clipboard.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/device.js":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/device.js ***!
  \*************************************************************/
/*! exports provided: DevicePluginWeb, Device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function() { return DevicePluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return Device; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./node_modules/@capacitor/core/dist/esm/util.js");



var DevicePluginWeb = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DevicePluginWeb, _super);
    function DevicePluginWeb() {
        return _super.call(this, {
            name: 'Device',
            platforms: ['web']
        }) || this;
    }
    DevicePluginWeb.prototype.getInfo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ua, uaFields, battery, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ua = navigator.userAgent;
                        uaFields = this.parseUa(ua);
                        battery = {};
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.getBattery()];
                    case 2:
                        battery = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, Promise.resolve({
                            model: uaFields.model,
                            platform: "web",
                            appVersion: '',
                            osVersion: uaFields.osVersion,
                            manufacturer: navigator.vendor,
                            isVirtual: false,
                            batteryLevel: battery.level,
                            isCharging: battery.charging,
                            uuid: this.getUid()
                        })];
                }
            });
        });
    };
    DevicePluginWeb.prototype.getLanguageCode = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, {
                        value: navigator.language
                    }];
            });
        });
    };
    DevicePluginWeb.prototype.parseUa = function (_ua) {
        var uaFields = {};
        var start = _ua.indexOf('(') + 1;
        var end = _ua.indexOf(') AppleWebKit');
        if (_ua.indexOf(') Gecko') !== -1) {
            end = _ua.indexOf(') Gecko');
        }
        var fields = _ua.substring(start, end);
        if (_ua.indexOf('Android') !== -1) {
            uaFields.model = fields.replace("; wv", "").split("; ").pop().split(' Build')[0];
            uaFields.osVersion = fields.split('; ')[1];
        }
        else {
            uaFields.model = fields.split('; ')[0];
            if (navigator.oscpu) {
                uaFields.osVersion = navigator.oscpu;
            }
            else {
                if (_ua.indexOf('Windows') !== -1) {
                    uaFields.osVersion = fields;
                }
                else {
                    var lastParts = fields.split('; ').pop().replace(" like Mac OS X", "").split(" ");
                    uaFields.osVersion = lastParts[lastParts.length - 1].replace(/_/g, ".");
                }
            }
        }
        return uaFields;
    };
    DevicePluginWeb.prototype.getUid = function () {
        var uid = window.localStorage.getItem('_capuid');
        if (uid) {
            return uid;
        }
        uid = Object(_util__WEBPACK_IMPORTED_MODULE_2__["uuid4"])();
        window.localStorage.setItem('_capuid', uid);
        return uid;
    };
    return DevicePluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Device = new DevicePluginWeb();

//# sourceMappingURL=device.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/geolocation.js":
/*!******************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/geolocation.js ***!
  \******************************************************************/
/*! exports provided: GeolocationPluginWeb, Geolocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function() { return GeolocationPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return Geolocation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./node_modules/@capacitor/core/dist/esm/util.js");



var GeolocationPluginWeb = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GeolocationPluginWeb, _super);
    function GeolocationPluginWeb() {
        return _super.call(this, {
            name: 'Geolocation',
            platforms: ['web']
        }) || this;
    }
    GeolocationPluginWeb.prototype.getCurrentPosition = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.requestPermissions().then(function (_result) {
                window.navigator.geolocation.getCurrentPosition(function (pos) {
                    resolve(pos);
                }, function (err) {
                    reject(err);
                }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0
                }, options));
            });
        });
    };
    GeolocationPluginWeb.prototype.watchPosition = function (options, callback) {
        var id = window.navigator.geolocation.watchPosition(function (pos) {
            callback(pos);
        }, function (err) {
            callback(null, err);
        }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }, options));
        return "" + id;
    };
    GeolocationPluginWeb.prototype.clearWatch = function (options) {
        window.navigator.geolocation.clearWatch(parseInt(options.id, 10));
        return Promise.resolve();
    };
    return GeolocationPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Geolocation = new GeolocationPluginWeb();

//# sourceMappingURL=geolocation.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/index.js ***!
  \************************************************************/
/*! exports provided: WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function() { return WebPluginRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPlugins", function() { return WebPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPlugin", function() { return WebPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function() { return mergeWebPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function() { return mergeWebPlugin; });
var WebPluginRegistry = /** @class */ (function () {
    function WebPluginRegistry() {
        this.plugins = {};
        this.loadedPlugins = {};
    }
    WebPluginRegistry.prototype.addPlugin = function (plugin) {
        this.plugins[plugin.config.name] = plugin;
    };
    WebPluginRegistry.prototype.getPlugin = function (name) {
        return this.plugins[name];
    };
    WebPluginRegistry.prototype.loadPlugin = function (name) {
        var plugin = this.getPlugin(name);
        if (!plugin) {
            console.error("Unable to load web plugin " + name + ", no such plugin found.");
            return;
        }
        plugin.load();
    };
    WebPluginRegistry.prototype.getPlugins = function () {
        var p = [];
        for (var name_1 in this.plugins) {
            p.push(this.plugins[name_1]);
        }
        return p;
    };
    return WebPluginRegistry;
}());

var WebPlugins = new WebPluginRegistry();

var WebPlugin = /** @class */ (function () {
    function WebPlugin(config, pluginRegistry) {
        this.config = config;
        this.loaded = false;
        this.listeners = {};
        this.windowListeners = {};
        if (!pluginRegistry) {
            WebPlugins.addPlugin(this);
        }
        else {
            pluginRegistry.addPlugin(this);
        }
    }
    WebPlugin.prototype.addWindowListener = function (handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
    };
    WebPlugin.prototype.removeWindowListener = function (handle) {
        if (!handle) {
            return;
        }
        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
    };
    WebPlugin.prototype.addListener = function (eventName, listenerFunc) {
        var _this = this;
        var listeners = this.listeners[eventName];
        if (!listeners) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(listenerFunc);
        // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it
        var windowListener = this.windowListeners[eventName];
        if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
        }
        return {
            remove: function () {
                _this.removeListener(eventName, listenerFunc);
            }
        };
    };
    WebPlugin.prototype.removeListener = function (eventName, listenerFunc) {
        var listeners = this.listeners[eventName];
        if (!listeners) {
            return;
        }
        var index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1);
        // If there are no more listeners for this type of event,
        // remove the window listener
        if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
        }
    };
    WebPlugin.prototype.notifyListeners = function (eventName, data) {
        var listeners = this.listeners[eventName];
        if (listeners) {
            listeners.forEach(function (listener) { return listener(data); });
        }
    };
    WebPlugin.prototype.hasListeners = function (eventName) {
        return !!this.listeners[eventName].length;
    };
    WebPlugin.prototype.registerWindowListener = function (windowEventName, pluginEventName) {
        var _this = this;
        this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName: windowEventName,
            pluginEventName: pluginEventName,
            handler: function (event) {
                _this.notifyListeners(pluginEventName, event);
            }
        };
    };
    WebPlugin.prototype.requestPermissions = function () {
        if (Capacitor.isNative) {
            return Capacitor.nativePromise(this.config.name, 'requestPermissions', {});
        }
        else {
            return Promise.resolve({ results: [] });
        }
    };
    WebPlugin.prototype.load = function () {
        this.loaded = true;
    };
    return WebPlugin;
}());

var shouldMergeWebPlugin = function (plugin) {
    return plugin.config.platforms && plugin.config.platforms.indexOf(Capacitor.platform) >= 0;
};
/**
 * For all our known web plugins, merge them into the global plugins
 * registry if they aren't already existing. If they don't exist, that
 * means there's no existing native implementation for it.
 * @param knownPlugins the Capacitor.Plugins global registry.
 */
var mergeWebPlugins = function (knownPlugins) {
    var plugins = WebPlugins.getPlugins();
    for (var _i = 0, plugins_1 = plugins; _i < plugins_1.length; _i++) {
        var plugin = plugins_1[_i];
        mergeWebPlugin(knownPlugins, plugin);
    }
};
var mergeWebPlugin = function (knownPlugins, plugin) {
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    if (knownPlugins.hasOwnProperty(plugin.config.name) && !shouldMergeWebPlugin(plugin)) {
        return;
    }
    knownPlugins[plugin.config.name] = plugin;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/modals.js":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/modals.js ***!
  \*************************************************************/
/*! exports provided: ModalsPluginWeb, Modals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function() { return ModalsPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return Modals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var ModalsPluginWeb = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ModalsPluginWeb, _super);
    function ModalsPluginWeb() {
        return _super.call(this, {
            name: 'Modals',
            platforms: ['web']
        }) || this;
    }
    ModalsPluginWeb.prototype.alert = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                window.alert(options.message);
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    ModalsPluginWeb.prototype.prompt = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var val;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                val = window.prompt(options.message, options.inputPlaceholder || '');
                return [2 /*return*/, Promise.resolve({
                        value: val,
                        cancelled: val === null
                    })];
            });
        });
    };
    ModalsPluginWeb.prototype.confirm = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var val;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                val = window.confirm(options.message);
                return [2 /*return*/, Promise.resolve({
                        value: val
                    })];
            });
        });
    };
    ModalsPluginWeb.prototype.showActions = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, _reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var controller, items, actionSheetElement;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    controller = document.querySelector('ion-action-sheet-controller');
                                    if (!controller) {
                                        controller = document.createElement('ion-action-sheet-controller');
                                        document.body.appendChild(controller);
                                    }
                                    return [4 /*yield*/, controller.componentOnReady()];
                                case 1:
                                    _a.sent();
                                    items = options.options.map(function (o, i) {
                                        return {
                                            text: o.title,
                                            role: o.style && o.style.toLowerCase() || '',
                                            icon: o.icon || '',
                                            handler: function () {
                                                resolve({
                                                    index: i
                                                });
                                            }
                                        };
                                    });
                                    return [4 /*yield*/, controller.create({
                                            title: options.title,
                                            buttons: items
                                        })];
                                case 2:
                                    actionSheetElement = _a.sent();
                                    return [4 /*yield*/, actionSheetElement.present()];
                                case 3:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    return ModalsPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Modals = new ModalsPluginWeb();

//# sourceMappingURL=modals.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/motion.js":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/motion.js ***!
  \*************************************************************/
/*! exports provided: MotionPluginWeb, Motion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function() { return MotionPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return Motion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var MotionPluginWeb = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MotionPluginWeb, _super);
    function MotionPluginWeb() {
        var _this = _super.call(this, {
            name: 'Motion'
        }) || this;
        _this.registerWindowListener('devicemotion', 'accel');
        _this.registerWindowListener('deviceorientation', 'orientation');
        return _this;
    }
    return MotionPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Motion = new MotionPluginWeb();

//# sourceMappingURL=motion.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/share.js":
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/share.js ***!
  \************************************************************/
/*! exports provided: SharePluginWeb, Share */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function() { return SharePluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return Share; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var SharePluginWeb = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SharePluginWeb, _super);
    function SharePluginWeb() {
        return _super.call(this, {
            name: 'Share',
            platforms: ['web']
        }) || this;
    }
    SharePluginWeb.prototype.share = function (options) {
        if (!navigator.share) {
            return Promise.reject("Web Share API not available");
        }
        return navigator.share({
            title: options.title,
            text: options.text,
            url: options.url
        });
    };
    return SharePluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Share = new SharePluginWeb();

//# sourceMappingURL=share.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/storage.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/storage.js ***!
  \**************************************************************/
/*! exports provided: StoragePluginWeb, Storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function() { return StoragePluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var StoragePluginWeb = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StoragePluginWeb, _super);
    function StoragePluginWeb() {
        var _this = _super.call(this, {
            name: 'Storage',
            platforms: ['web']
        }) || this;
        _this.KEY_PREFIX = "_cap_";
        return _this;
    }
    StoragePluginWeb.prototype.get = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            resolve({
                value: window.localStorage.getItem(_this.makeKey(options.key))
            });
        });
    };
    StoragePluginWeb.prototype.set = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            window.localStorage.setItem(_this.makeKey(options.key), options.value);
            resolve();
        });
    };
    StoragePluginWeb.prototype.remove = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            window.localStorage.removeItem(_this.makeKey(options.key));
            resolve();
        });
    };
    StoragePluginWeb.prototype.keys = function () {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            resolve({
                keys: Object.keys(localStorage).filter(function (k) { return _this.isKey(k); }).map(function (k) { return _this.getKey(k); })
            });
        });
    };
    StoragePluginWeb.prototype.clear = function () {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            Object.keys(localStorage)
                .filter(function (k) { return _this.isKey(k); })
                .forEach(function (k) { return window.localStorage.removeItem(k); });
            resolve();
        });
    };
    StoragePluginWeb.prototype.makeKey = function (key) {
        return this.KEY_PREFIX + key;
    };
    StoragePluginWeb.prototype.isKey = function (key) {
        return key.indexOf(this.KEY_PREFIX) === 0;
    };
    StoragePluginWeb.prototype.getKey = function (key) {
        return key.substr(this.KEY_PREFIX.length);
    };
    return StoragePluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Storage = new StoragePluginWeb();

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/toast.js":
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/toast.js ***!
  \************************************************************/
/*! exports provided: ToastPluginWeb, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function() { return ToastPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var ToastPluginWeb = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ToastPluginWeb, _super);
    function ToastPluginWeb() {
        return _super.call(this, {
            name: 'Toast',
            platforms: ['web']
        }) || this;
    }
    ToastPluginWeb.prototype.show = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var controller, duration, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        controller = document.querySelector('ion-toast-controller');
                        if (!controller) {
                            controller = document.createElement('ion-toast-controller');
                            document.body.appendChild(controller);
                        }
                        return [4 /*yield*/, controller.componentOnReady()];
                    case 1:
                        _a.sent();
                        duration = 3000;
                        if (options.duration) {
                            duration = options.duration === 'long' ? 5000 : 3000;
                        }
                        return [4 /*yield*/, controller.create({
                                position: 'bottom',
                                message: options.text,
                                duration: duration,
                            })];
                    case 2:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ToastPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Toast = new ToastPluginWeb();

//# sourceMappingURL=toast.js.map

/***/ })

}]);
//# sourceMappingURL=default~landing-landing-module~register-register-module~wishlists-wishlists-module.js.map