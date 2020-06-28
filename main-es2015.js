(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/prayertime/prayertime.module": [
		"./src/app/components/prayertime/prayertime.module.ts",
		"components-prayertime-prayertime-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-shell></app-shell>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shell/shell.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shell/shell.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: './components/prayertime/prayertime.module#PrayerTimeModule',
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'prayertimes';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _irshadali_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @irshadali/controls */ "./node_modules/@irshadali/controls/__ivy_ngcc__/fesm2015/irshadali-controls.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shell_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shell/shell.component */ "./src/app/shell/shell.component.ts");
/* harmony import */ var _services_app_service_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/app-service.module */ "./src/app/services/app-service.module.ts");









let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _shell_shell_component__WEBPACK_IMPORTED_MODULE_7__["ShellComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _irshadali_controls__WEBPACK_IMPORTED_MODULE_4__["SharedModule"].forRoot(),
            _services_app_service_module__WEBPACK_IMPORTED_MODULE_8__["AppServicesModule"].forRoot(),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/services/app-service.module.ts":
/*!************************************************!*\
  !*** ./src/app/services/app-service.module.ts ***!
  \************************************************/
/*! exports provided: AppServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServicesModule", function() { return AppServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.services */ "./src/app/services/app.services.ts");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/services/error.interceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _geo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./geo.service */ "./src/app/services/geo.service.ts");
var AppServicesModule_1;








let AppServicesModule = AppServicesModule_1 = class AppServicesModule {
    static forRoot() {
        return {
            ngModule: AppServicesModule_1,
            providers: [
                _app_services__WEBPACK_IMPORTED_MODULE_3__["AppServices"],
                _store_service__WEBPACK_IMPORTED_MODULE_4__["IrsStoreService"],
                _geo_service__WEBPACK_IMPORTED_MODULE_7__["GeoService"],
                // {
                //   provide: HTTP_INTERCEPTORS,
                //   useClass: TokenInterceptor,
                //   multi: true
                // },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptor"],
                    multi: true
                },
            ]
        };
    }
};
AppServicesModule = AppServicesModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: []
    })
], AppServicesModule);



/***/ }),

/***/ "./src/app/services/app.services.ts":
/*!******************************************!*\
  !*** ./src/app/services/app.services.ts ***!
  \******************************************/
/*! exports provided: AppServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServices", function() { return AppServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _irshadali_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @irshadali/controls */ "./node_modules/@irshadali/controls/__ivy_ngcc__/fesm2015/irshadali-controls.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _geo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geo.service */ "./src/app/services/geo.service.ts");







let AppServices = class AppServices {
    constructor(router, location, http, notification, alert, dialog, meta, store, geo) {
        this.router = router;
        this.location = location;
        this.http = http;
        this.notification = notification;
        this.alert = alert;
        this.dialog = dialog;
        this.meta = meta;
        this.store = store;
        this.geo = geo;
        this.init();
    }
    init() {
        this.data = {};
        this.data.calc_methods = {
            MWL: {
                id: 3,
                name: 'Muslim World League', params: { Fajr: 18, Isha: 17 }
            },
            ISNA: {
                id: 2, name: 'Islamic Society of North America (ISNA)', params: { Fajr: 15, Isha: 15 }
            },
            EGYPT: {
                id: 5, name: 'Egyptian General Authority of Survey', params: { Fajr: 19.5, Isha: 17.5 }
            },
            MAKKAH: {
                id: 4, name: 'Umm Al-Qura University, Makkah', params: { Fajr: 18.5, Isha: '90 min' }
            },
            KARACHI: {
                id: 1, name: 'University of Islamic Sciences, Karachi', params: { Fajr: 18, Isha: 18 }
            },
            TEHRAN: {
                id: 7, name: 'Institute of Geophysics, University of Tehran', params: { Fajr: 17.7, Isha: 14, Maghrib: 4.5, Midnight: 'JAFARI' }
            },
            JAFARI: {
                id: 0, name: 'Shia Ithna-Ashari, Leva Institute, Qum', params: { Fajr: 16, Isha: 14, Maghrib: 4, Midnight: 'JAFARI' }
            },
            GULF: {
                id: 8, name: 'Gulf Region', params: { Fajr: 19.5, Isha: '90 min' }
            },
            KUWAIT: {
                id: 9, name: 'Kuwait', params: { Fajr: 18, Isha: 17.5 }
            },
            QATAR: {
                id: 10, name: 'Qatar', params: { Fajr: 18, Isha: '90 min' }
            },
            SINGAPORE: {
                id: 11, name: 'Majlis Ugama Islam Singapura, Singapore', params: { Fajr: 20, Isha: 18 }
            },
            FRANCE: {
                id: 12, name: 'Union Organization Islamic de France', params: { Fajr: 12, Isha: 12 }
            },
            TURKEY: {
                id: 13, name: 'Diyanet \u0130\u015fleri Ba\u015fkanl\u0131\u011f\u0131, Turkey', params: { Fajr: 18, Isha: 17 }
            },
            RUSSIA: {
                id: 14, name: 'Spiritual Administration of Muslims of Russia', params: { Fajr: 16, Isha: 15 }
            },
            CUSTOM: {
                id: 99
            }
        };
        this.data.school = ['Shafi', 'Hanafi'];
        this.data.midnight_mode = ['Standard (Mid Sunset to Sunrise)', 'Jafari (Mid Sunset to Fajr)'];
    }
    getCalcMethods() {
        const arr = [];
        Object.keys(this.data.calc_methods).forEach(x => {
            const obj = this.data.calc_methods[x];
            arr.push({ id: obj.id, name: obj.name });
        });
        return arr;
    }
    getSchools() {
        return this.data.school;
    }
};
AppServices.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: _irshadali_controls__WEBPACK_IMPORTED_MODULE_4__["IrsHttpService"] },
    { type: _irshadali_controls__WEBPACK_IMPORTED_MODULE_4__["IrsNotificationService"] },
    { type: _irshadali_controls__WEBPACK_IMPORTED_MODULE_4__["IrsAlertService"] },
    { type: _irshadali_controls__WEBPACK_IMPORTED_MODULE_4__["IrsDialogService"] },
    { type: _irshadali_controls__WEBPACK_IMPORTED_MODULE_4__["IrsDtoMetadataService"] },
    { type: _store_service__WEBPACK_IMPORTED_MODULE_5__["IrsStoreService"] },
    { type: _geo_service__WEBPACK_IMPORTED_MODULE_6__["GeoService"] }
];
AppServices = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AppServices);



/***/ }),

/***/ "./src/app/services/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/services/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _irshadali_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @irshadali/controls */ "./node_modules/@irshadali/controls/__ivy_ngcc__/fesm2015/irshadali-controls.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");







// Error Interceptor not in Used. Not tapping all HttpErrorResponse
let ErrorInterceptor = class ErrorInterceptor {
    constructor(notificationService, router, http) {
        this.notificationService = notificationService;
        this.router = router;
        this.http = http;
        this.apiUrl = _env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
    }
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(event => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                console.log(event);
                const error = event;
                if (error.status === 400) {
                    // bad request
                    const errorMessage = this.getMessageToDisplay(error.error, '');
                    this.notificationService.notifyBadRequest(errorMessage, error.statusText);
                }
                else if (error.status === 404) {
                    // not found
                    this.notificationService.notifyBadRoute(null, error.statusText);
                }
                else if (error.status === 401) {
                    // Unauthorized
                    if (error.headers.has('Refresh-Token-Required')) {
                        this.http.get(
                        // tslint:disable-next-line: max-line-length
                        `${this.apiUrl}Account/Refresh?token=${localStorage.getItem('token')}&refreshToken=${localStorage.getItem('refresh_token')}`).subscribe(x => {
                            if (x) {
                                console.log('token refreshed');
                                console.log(x);
                            }
                        });
                    }
                    else {
                        this.notificationService.notifyBadRequest('User is not Authorized to acces this resource.', error.statusText);
                        this.router.navigateByUrl('');
                    }
                    // return of<T>(null);
                }
                else if (error.status === 0) {
                    // Bad Gateway or Server Error. 500+ error
                    this.notificationService.notifyBadRoute('Please try again later!', error.statusText);
                }
                else {
                    console.warn('handle this error in Http Service');
                    console.warn(error);
                }
            }
        }));
    }
    getMessageToDisplay(error, extactedMessage) {
        if (!error) {
            return '';
        }
        if (typeof error === 'string') {
            return error;
        }
        else if (Array.isArray(error)) {
            error.forEach(x => (extactedMessage += this.getMessageToDisplay(x, extactedMessage)));
            return extactedMessage;
        }
        else {
            Object.keys(error).forEach(x => extactedMessage += this.getMessageToDisplay(error[x], extactedMessage));
            return extactedMessage;
        }
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _irshadali_controls__WEBPACK_IMPORTED_MODULE_4__["IrsNotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/services/geo.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/geo.service.ts ***!
  \*****************************************/
/*! exports provided: GeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoService", function() { return GeoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let GeoService = class GeoService {
    constructor() {
        this.isLatLngAccessChecked = false;
        this.isLatLngFound = false;
    }
    getSetLatLng() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getCoordinates().then((position) => {
                this.isLatLngAccessChecked = true;
                if (position && position.coords) {
                    this.isLatLngFound = true;
                    this.lat = position.coords.latitude;
                    this.lng = position.coords.longitude;
                }
            }, (error) => {
                this.isLatLngAccessChecked = true;
                this.isLatLngFound = false;
                console.log(error);
            });
        });
    }
    getCoordinates() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }
};
GeoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], GeoService);



/***/ }),

/***/ "./src/app/services/store.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/store.service.ts ***!
  \*******************************************/
/*! exports provided: IrsStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IrsStoreService", function() { return IrsStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let IrsStoreService = class IrsStoreService {
    constructor() {
        this.store = localStorage;
    }
    setToken(token) {
        this.store.setItem('token', token);
    }
    getToken() {
        return this.store.getItem('token');
    }
    setRefreshToken(token) {
        this.store.setItem('refresh_token', token);
    }
    getRefreshToken() {
        return this.store.getItem('refresh_token');
    }
    setSelectedCalcMethod(value) {
        this.store.setItem('selected_calc_method', value);
    }
    getSelectedCalcMethod() {
        return this.store.getItem('selected_calc_method');
    }
    setSelectedSchool(value) {
        this.store.setItem('selected_school_of_thought', value);
    }
    getSelectedSchool() {
        return this.store.getItem('selected_school_of_thought');
    }
    setMidnightMode(value) {
        this.store.setItem('selected_midnight_mode', value);
    }
    getMidnightMode() {
        return this.store.getItem('selected_midnight_mode');
    }
    setLatitudeAdjustmentMethod(value) {
        this.store.setItem('selected_latitude_adjustment_method', value);
    }
    getLatitudeAdjustmentMethod() {
        return this.store.getItem('selected_latitude_adjustment_method');
    }
};
IrsStoreService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], IrsStoreService);



/***/ }),

/***/ "./src/app/shell/shell.component.scss":
/*!********************************************!*\
  !*** ./src/app/shell/shell.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3NoZWxsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shell/shell.component.ts":
/*!******************************************!*\
  !*** ./src/app/shell/shell.component.ts ***!
  \******************************************/
/*! exports provided: ShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellComponent", function() { return ShellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ShellComponent = class ShellComponent {
    constructor() {
        this.model = {
            blah: 'text'
        };
    }
    ngOnInit() {
    }
};
ShellComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shell',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./shell.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shell/shell.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./shell.component.scss */ "./src/app/shell/shell.component.scss")).default]
    })
], ShellComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: ''
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Workspace\Projects\prayertimes\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map