(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-prayertime-prayertime-module"],{

/***/ "./node_modules/ngx-print/__ivy_ngcc__/fesm2015/ngx-print.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-print/__ivy_ngcc__/fesm2015/ngx-print.js ***!
  \*******************************************************************/
/*! exports provided: NgxPrintDirective, NgxPrintModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPrintDirective", function() { return NgxPrintDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPrintModule", function() { return NgxPrintModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

class NgxPrintDirective {
    constructor() {
        this._printStyle = [];
        /**
         *
         *
         * \@memberof NgxPrintDirective
         */
        this.useExistingCss = false;
        /**
         * A delay in milliseconds to force the print dialog to wait before opened. Default: 0
         *
         * \@memberof NgxPrintDirective
         */
        this.printDelay = 0;
        /**
         *
         *
         * @return html for the given tag
         *
         * \@memberof NgxPrintDirective
         */
        this._styleSheetFile = '';
    }
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @param {?} values
     * @return {?}
     */
    set printStyle(values) {
        for (let key in values) {
            if (values.hasOwnProperty(key)) {
                this._printStyle.push((key + JSON.stringify(values[key])).replace(/['"]+/g, ''));
            }
        }
        this.returnStyleValues();
    }
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?} the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     */
    returnStyleValues() {
        return `<style> ${this._printStyle.join(' ').replace(/,/g, ';')} </style>`;
    }
    /**
     * \@memberof NgxPrintDirective
     * @param {?} cssList
     * @return {?}
     */
    set styleSheetFile(cssList) {
        /** @type {?} */
        let linkTagFn = (/**
         * @param {?} cssFileName
         * @return {?}
         */
        function (cssFileName) {
            return `<link rel="stylesheet" type="text/css" href="${cssFileName}">`;
        });
        if (cssList.indexOf(',') !== -1) {
            /** @type {?} */
            const valueArr = cssList.split(',');
            for (let val of valueArr) {
                this._styleSheetFile = this._styleSheetFile + linkTagFn(val);
            }
        }
        else {
            this._styleSheetFile = linkTagFn(cssList);
        }
    }
    /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    returnStyleSheetLinkTags() {
        return this._styleSheetFile;
    }
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    getElementTag(tag) {
        /** @type {?} */
        const html = [];
        /** @type {?} */
        const elements = document.getElementsByTagName(tag);
        for (let index = 0; index < elements.length; index++) {
            html.push(elements[index].outerHTML);
        }
        return html.join('\r\n');
    }
    /**
     * @private
     * @return {?} html section to be printed along with some associated inputs
     *
     */
    getHtmlContents() {
        /** @type {?} */
        let printContents = document.getElementById(this.printSectionId);
        /** @type {?} */
        let innards = printContents.getElementsByTagName('input');
        for (var i = 0; i < innards.length; i++) {
            innards[i].defaultValue = innards[i].value;
        }
        return printContents.innerHTML;
    }
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    print() {
        /** @type {?} */
        let printContents;
        /** @type {?} */
        let popupWin;
        /** @type {?} */
        let styles = '';
        /** @type {?} */
        let links = '';
        if (this.useExistingCss) {
            styles = this.getElementTag('style');
            links = this.getElementTag('link');
        }
        printContents = this.getHtmlContents();
        popupWin = window.open("", "_blank", "top=0,left=0,height=auto,width=auto");
        popupWin.document.open();
        popupWin.document.write(`
      <html>
        <head>
          <title>${this.printTitle ? this.printTitle : ""}</title>
          ${this.returnStyleValues()}
          ${this.returnStyleSheetLinkTags()}
          ${styles}
          ${links}
        </head>
        <body>
          ${printContents}
          <script defer>
            function triggerPrint(event) {
              window.removeEventListener('load', triggerPrint, false);
              setTimeout(function() {
                window.print();
                setTimeout(function() { window.close(); }, 0);
              }, ${this.printDelay});
            }
            window.addEventListener('load', triggerPrint, false);
          </script>
        </body>
      </html>`);
        popupWin.document.close();
    }
}
NgxPrintDirective.ɵfac = function NgxPrintDirective_Factory(t) { return new (t || NgxPrintDirective)(); };
NgxPrintDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgxPrintDirective, selectors: [["button", "ngxPrint", ""]], hostBindings: function NgxPrintDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxPrintDirective_click_HostBindingHandler() { return ctx.print(); });
    } }, inputs: { useExistingCss: "useExistingCss", printDelay: "printDelay", printStyle: "printStyle", styleSheetFile: "styleSheetFile", printSectionId: "printSectionId", printTitle: "printTitle" } });
NgxPrintDirective.propDecorators = {
    printSectionId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    printTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    useExistingCss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    printDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    printStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    styleSheetFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    print: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPrintDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "button[ngxPrint]"
            }]
    }], function () { return []; }, { useExistingCss: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], printDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], printStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], styleSheetFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], print: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }], printSectionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], printTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxPrintModule {
}
NgxPrintModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxPrintModule });
NgxPrintModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgxPrintModule_Factory(t) { return new (t || NgxPrintModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxPrintModule, { declarations: [NgxPrintDirective], exports: [NgxPrintDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPrintModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [NgxPrintDirective],
                imports: [],
                exports: [NgxPrintDirective]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-print.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/prayertime/prayertime/prayer-date-range/prayer-date-range.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/prayertime/prayertime/prayer-date-range/prayer-date-range.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-drawer-container autosize [hasBackdrop]=\"false\">\n  <!-- Settings -->\n  <div>\n    <button type=\"button\" class=\"floating-btn\" mat-mini-fab (click)=\"columnOptionDrawer.toggle()\">\n      <mat-icon>settings</mat-icon>\n    </button>\n    <mat-drawer #columnOptionDrawer position=\"end\" mode=\"push\" class=\"columnOptionDrawer\">\n      <mat-card-title>Settings</mat-card-title>\n      <mat-form-field>\n        <mat-label>Start Date</mat-label>\n        <input matInput [(ngModel)]=\"startDate\" (change)=\"refresh()\" [matDatepicker]=\"picker\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-label>Number of days</mat-label>\n        <input type=\"number\" matInput [(ngModel)]=\"numberOfDays\" (change)=\"refresh()\" max=\"365\">\n      </mat-form-field>\n      <div *ngFor=\"let column of columns\">\n        <mat-checkbox [(ngModel)]=\"column.isDisplay\" (change)=\"checkboxChange()\">{{column.name}}</mat-checkbox>\n      </div>\n    </mat-drawer>\n\n    <!-- <button printSectionId=\"print-section\" [useExistingCss]=\"true\" ngxPrint mat-button type=\"button\">\n      Print\n    </button> -->\n  </div>\n  <!-- Prayer table -->\n  <table id=\"print-section\" *ngIf=\"columnsToDisplay\" #prayerTable mat-table [dataSource]=\"dayPrayers\"\n    class=\"mat-elevation-z8\">\n    <ng-container matColumnDef=\"Fajr\">\n      <th mat-header-cell *matHeaderCellDef> Fajr </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.Fajr}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"Dhuhr\">\n      <th mat-header-cell *matHeaderCellDef> Dhuhr </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.Dhuhr}} </td>\n    </ng-container>\n    <mat-text-column name=\"Asr\"></mat-text-column>\n    <mat-text-column name=\"Maghrib\"></mat-text-column>\n    <mat-text-column name=\"Isha\"></mat-text-column>\n    <mat-text-column name=\"Sunrise\"></mat-text-column>\n    <mat-text-column name=\"Sunset\"></mat-text-column>\n    <mat-text-column name=\"Imsak\"></mat-text-column>\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay\"></tr>\n  </table>\n</mat-drawer-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/prayertime/prayertime/prayer-today/prayer-today.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/prayertime/prayertime/prayer-today/prayer-today.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid row\">\n  <div class=\"col-sm-6\">\n    <mat-list *ngIf=\"todayPrayerTimes\">\n      <mat-list-item *ngFor=\"let item of todayPrayerTimes\" class=\"today-timing-list\">\n        <div class=\"today-timing-list-item-name\">{{item.name}}</div>\n        <div class=\"today-timing-list-item-value\">{{item.value}}</div>\n      </mat-list-item>\n    </mat-list>\n  </div>\n  <!--other times-->\n  <div class=\"col-sm-6\">\n    <mat-list *ngIf=\"todayOtherTimes\">\n      <mat-list-item *ngFor=\"let item of todayOtherTimes\" class=\"today-timing-list\">\n        <div class=\"today-timing-list-item-name\">{{item.name}}</div>\n        <div class=\"today-timing-list-item-value\">{{item.value}}</div>\n      </mat-list-item>\n    </mat-list>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/prayertime/prayertime/prayertime.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/prayertime/prayertime/prayertime.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-title>Namaz Times</mat-card-title>\n  <mat-tab-group [selectedIndex]=\"tabSelectedIndex\">\n    <mat-tab label=\"Today\">\n      <ng-template matTabContent>\n        <!--prayer times-->\n        <app-prayer-today [selectedSchool]=\"selectedSchool\" [selectedCalcMethod]=\"selectedCalcMethod\"\n          [midnightMode]=\"midnightMode\" [latitudeAdjustmentMethod]=\"latitudeAdjustmentMethod\">\n        </app-prayer-today>\n      </ng-template>\n    </mat-tab>\n    <mat-tab label=\"Date Range\">\n      <ng-template matTabContent>\n        <app-prayer-date-range [selectedSchool]=\"selectedSchool\" [selectedCalcMethod]=\"selectedCalcMethod\"\n          [midnightMode]=\"midnightMode\" [latitudeAdjustmentMethod]=\"latitudeAdjustmentMethod\">\n        </app-prayer-date-range>\n      </ng-template>\n    </mat-tab>\n  </mat-tab-group>\n</mat-card>\n\n\n<!--Meta data-->\n<mat-card>\n  <mat-card-title>Meta data (Defaults are selected, You might want to change as per your preference.)</mat-card-title>\n  <mat-form-field>\n    <mat-label>Schools of thought about how to compute the timings</mat-label>\n    <mat-select [(ngModel)]=\"selectedCalcMethod\" (selectionChange)=\"calMethodSelectionChange($event)\">\n      <mat-option *ngFor=\"let method of calcMethods\" [value]=\"method.id\">\n        {{method.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>School</mat-label>\n    <mat-select [(ngModel)]=\"selectedSchool\" (selectionChange)=\"schoolSelectionChange($event)\">\n      <mat-option *ngFor=\"let school of schools; let index = index\" [value]=\"index\">\n        {{school}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n</mat-card>\n");

/***/ }),

/***/ "./src/app/components/prayertime/prayertime.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/prayertime/prayertime.module.ts ***!
  \************************************************************/
/*! exports provided: PrayerTimeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerTimeModule", function() { return PrayerTimeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/__ivy_ngcc__/fesm2015/ngx-print.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _prayertime_prayertime_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prayertime/prayertime.component */ "./src/app/components/prayertime/prayertime/prayertime.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _prayertime_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prayertime.service */ "./src/app/components/prayertime/prayertime.service.ts");
/* harmony import */ var _irshadali_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @irshadali/controls */ "./node_modules/@irshadali/controls/__ivy_ngcc__/fesm2015/irshadali-controls.js");
/* harmony import */ var _prayertime_prayer_today_prayer_today_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./prayertime/prayer-today/prayer-today.component */ "./src/app/components/prayertime/prayertime/prayer-today/prayer-today.component.ts");
/* harmony import */ var _prayertime_prayer_date_range_prayer_date_range_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./prayertime/prayer-date-range/prayer-date-range.component */ "./src/app/components/prayertime/prayertime/prayer-date-range/prayer-date-range.component.ts");










const routes = [
    {
        path: '', component: _prayertime_prayertime_component__WEBPACK_IMPORTED_MODULE_4__["PrayerTimeComponent"],
    },
];
let PrayerTimeModule = class PrayerTimeModule {
};
PrayerTimeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_prayertime_prayertime_component__WEBPACK_IMPORTED_MODULE_4__["PrayerTimeComponent"], _prayertime_prayer_today_prayer_today_component__WEBPACK_IMPORTED_MODULE_8__["PrayerTodayComponent"], _prayertime_prayer_date_range_prayer_date_range_component__WEBPACK_IMPORTED_MODULE_9__["PrayerDateRangeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            _irshadali_controls__WEBPACK_IMPORTED_MODULE_7__["SharedModule"].forRoot(),
            ngx_print__WEBPACK_IMPORTED_MODULE_2__["NgxPrintModule"]
        ],
        providers: [
            _prayertime_service__WEBPACK_IMPORTED_MODULE_6__["PrayerTimeService"]
        ]
    })
], PrayerTimeModule);



/***/ }),

/***/ "./src/app/components/prayertime/prayertime.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/prayertime/prayertime.service.ts ***!
  \*************************************************************/
/*! exports provided: PrayerTimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerTimeService", function() { return PrayerTimeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _irshadali_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @irshadali/controls */ "./node_modules/@irshadali/controls/__ivy_ngcc__/fesm2015/irshadali-controls.js");



let PrayerTimeService = class PrayerTimeService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '//api.aladhan.com/v1/';
        this.http.setApiUrl(this.baseUrl);
    }
    getTodayPrayerTimes(latitude, longitude, method, school = 3, midnightMode = 0, latitudeAdjustmentMethod = 0) {
        const timestamp = new Date().getTime() / 1000;
        return this.http.get(`timings/${timestamp}?latitude=${latitude}&longitude=${longitude}&method=${method}`);
    }
    // Get prayers times of particular day
    getPrayerTimes(timestamp, latitude, longitude, method, school = 3, midnightMode = 0, latitudeAdjustmentMethod = 0) {
        return this.http.get(`timings/${timestamp}?latitude=${latitude}&longitude=${longitude}&method=${method}`);
    }
    getThisMonthPrayerTimes(lat, lng) {
        const timestamp = new Date().getTime() / 1000;
        return this.http.get(`${timestamp}?latitude=${lat}&longitude=${lng}`);
    }
    getMethodsOfCalc() {
        const timestamp = new Date().getTime() / 1000;
        return this.http.get(`${timestamp}`);
    }
};
PrayerTimeService.ctorParameters = () => [
    { type: _irshadali_controls__WEBPACK_IMPORTED_MODULE_2__["IrsHttpService"] }
];
PrayerTimeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PrayerTimeService);



/***/ }),

/***/ "./src/app/components/prayertime/prayertime/prayer-date-range/prayer-date-range.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/prayertime/prayertime/prayer-date-range/prayer-date-range.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".columnOptionDrawer {\n  padding-left: 10px;\n  padding-top: 5px;\n}\n.columnOptionDrawer mat-checkbox {\n  display: block;\n  padding-top: 5px;\n}\n.floating-btn {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmF5ZXJ0aW1lL3ByYXllcnRpbWUvcHJheWVyLWRhdGUtcmFuZ2UvRDpcXFdvcmtzcGFjZVxcUHJvamVjdHNcXHByYXllcnRpbWVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcmF5ZXJ0aW1lXFxwcmF5ZXJ0aW1lXFxwcmF5ZXItZGF0ZS1yYW5nZVxccHJheWVyLWRhdGUtcmFuZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJheWVydGltZS9wcmF5ZXJ0aW1lL3ByYXllci1kYXRlLXJhbmdlL3ByYXllci1kYXRlLXJhbmdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBREVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ByYXllcnRpbWUvcHJheWVydGltZS9wcmF5ZXItZGF0ZS1yYW5nZS9wcmF5ZXItZGF0ZS1yYW5nZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2x1bW5PcHRpb25EcmF3ZXIge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIG1hdC1jaGVja2JveCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZmxvYXRpbmctYnRue1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbn1cclxuIiwiLmNvbHVtbk9wdGlvbkRyYXdlciB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5jb2x1bW5PcHRpb25EcmF3ZXIgbWF0LWNoZWNrYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5mbG9hdGluZy1idG4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/prayertime/prayertime/prayer-date-range/prayer-date-range.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/prayertime/prayertime/prayer-date-range/prayer-date-range.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PrayerDateRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerDateRangeComponent", function() { return PrayerDateRangeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app.services */ "./src/app/services/app.services.ts");
/* harmony import */ var _prayertime_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../prayertime.service */ "./src/app/components/prayertime/prayertime.service.ts");




let PrayerDateRangeComponent = class PrayerDateRangeComponent {
    constructor(appServices, prayerTimeService) {
        this.appServices = appServices;
        this.prayerTimeService = prayerTimeService;
    }
    ngOnInit() {
        this.onInit();
    }
    onInit() {
        this.dayPrayers = [];
        this.populatePrayerColumns();
        this.updateDisplayColumns();
        this.startDate = new Date();
        this.numberOfDays = 7;
    }
    updateDisplayColumns() {
        this.columnsToDisplay = this.columns.filter(y => y.isDisplay === true).map(y => y.name);
    }
    refresh() {
        this.getData();
    }
    checkboxChange() {
        // console.log(event.checked);
        // this.columns.filter(y => y.name === timing)[0].isDisplay = event.checked;
        this.updateDisplayColumns();
    }
    populatePrayerColumns() {
        const cols = [
            { name: 'Fajr', isDisplay: true },
            { name: 'Dhuhr', isDisplay: true },
            { name: 'Asr', isDisplay: true },
            { name: 'Maghrib', isDisplay: true },
            { name: 'Isha', isDisplay: true },
            { name: 'Sunrise', isDisplay: false },
            { name: 'Sunset', isDisplay: false },
            { name: 'Imsak', isDisplay: false }
        ];
        this.columns = cols;
    }
    ngOnChanges(changes) {
        if (this.selectedSchool !== undefined && this.selectedCalcMethod !== undefined &&
            this.midnightMode !== undefined && this.latitudeAdjustmentMethod !== undefined) {
            this.onInit();
            this.getData();
        }
    }
    getData() {
        this.dayPrayers = [];
        for (let i = 0; i < 7; i++) {
            const date = this.startDate;
            date.setDate(date.getDate() + i);
            const timestamp = date.getTime() / 1000;
            this.prayerTimeService.getPrayerTimes(timestamp, this.appServices.geo.lat, this.appServices.geo.lng, this.selectedCalcMethod, this.selectedSchool, this.midnightMode, this.latitudeAdjustmentMethod)
                .subscribe((x) => {
                if (x.code === 200) {
                    this.tempData = x.data;
                    const timings = x.data.timings;
                    this.dayPrayers.push(timings);
                    // this.todayPrayerTimes.push({ name: 'Fajr', value: timings['Fajr'] });
                    // this.todayPrayerTimes.push({ name: 'Dhuhr', value: timings['Dhuhr'] });
                    // this.todayPrayerTimes.push({ name: 'Asr', value: timings['Asr'] });
                    // this.todayPrayerTimes.push({ name: 'Maghrib', value: timings['Maghrib'] });
                    // this.todayPrayerTimes.push({ name: 'Isha', value: timings['Isha'] });
                    // this.todayOtherTimes.push({ name: 'Sunrise', value: timings['Sunrise'] });
                    // this.todayOtherTimes.push({ name: 'Sunset', value: timings['Sunset'] });
                    // this.todayOtherTimes.push({ name: 'Imsak', value: timings['Imsak'] });
                    if (this.prayerTable) {
                        this.prayerTable.renderRows();
                    }
                }
                else {
                    console.log(x);
                }
            });
        }
    }
};
PrayerDateRangeComponent.ctorParameters = () => [
    { type: src_app_services_app_services__WEBPACK_IMPORTED_MODULE_2__["AppServices"] },
    { type: _prayertime_service__WEBPACK_IMPORTED_MODULE_3__["PrayerTimeService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PrayerDateRangeComponent.prototype, "selectedSchool", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PrayerDateRangeComponent.prototype, "selectedCalcMethod", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PrayerDateRangeComponent.prototype, "midnightMode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PrayerDateRangeComponent.prototype, "latitudeAdjustmentMethod", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('prayerTable')
], PrayerDateRangeComponent.prototype, "prayerTable", void 0);
PrayerDateRangeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prayer-date-range',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./prayer-date-range.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/prayertime/prayertime/prayer-date-range/prayer-date-range.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./prayer-date-range.component.scss */ "./src/app/components/prayertime/prayertime/prayer-date-range/prayer-date-range.component.scss")).default]
    })
], PrayerDateRangeComponent);



/***/ }),

/***/ "./src/app/components/prayertime/prayertime/prayer-today/prayer-today.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/prayertime/prayertime/prayer-today/prayer-today.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".today-timing-list .today-timing-list-item-name {\n  min-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmF5ZXJ0aW1lL3ByYXllcnRpbWUvcHJheWVyLXRvZGF5L0Q6XFxXb3Jrc3BhY2VcXFByb2plY3RzXFxwcmF5ZXJ0aW1lcy9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJheWVydGltZVxccHJheWVydGltZVxccHJheWVyLXRvZGF5XFxwcmF5ZXItdG9kYXkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJheWVydGltZS9wcmF5ZXJ0aW1lL3ByYXllci10b2RheS9wcmF5ZXItdG9kYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcmF5ZXJ0aW1lL3ByYXllcnRpbWUvcHJheWVyLXRvZGF5L3ByYXllci10b2RheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2RheS10aW1pbmctbGlzdHtcclxuICAudG9kYXktdGltaW5nLWxpc3QtaXRlbS1uYW1le1xyXG4gICAgbWluLXdpZHRoOjEwMHB4O1xyXG4gIH1cclxufVxyXG4iLCIudG9kYXktdGltaW5nLWxpc3QgLnRvZGF5LXRpbWluZy1saXN0LWl0ZW0tbmFtZSB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/prayertime/prayertime/prayer-today/prayer-today.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/prayertime/prayertime/prayer-today/prayer-today.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PrayerTodayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerTodayComponent", function() { return PrayerTodayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app.services */ "./src/app/services/app.services.ts");
/* harmony import */ var _prayertime_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../prayertime.service */ "./src/app/components/prayertime/prayertime.service.ts");




let PrayerTodayComponent = class PrayerTodayComponent {
    constructor(appServices, prayerTimeService) {
        this.appServices = appServices;
        this.prayerTimeService = prayerTimeService;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (this.selectedSchool !== undefined && this.selectedCalcMethod !== undefined &&
            this.midnightMode !== undefined && this.latitudeAdjustmentMethod !== undefined) {
            this.getTodaysData();
        }
    }
    getTodaysData() {
        this.prayerTimeService.getTodayPrayerTimes(this.appServices.geo.lat, this.appServices.geo.lng, this.selectedCalcMethod, this.selectedSchool, this.midnightMode, this.latitudeAdjustmentMethod)
            .subscribe((x) => {
            if (x.code === 200) {
                this.tempData = x.data;
                const timings = x.data.timings;
                this.todayPrayerTimes = [];
                this.todayPrayerTimes.push({ name: 'Fajr', value: timings['Fajr'] });
                this.todayPrayerTimes.push({ name: 'Dhuhr', value: timings['Dhuhr'] });
                this.todayPrayerTimes.push({ name: 'Asr', value: timings['Asr'] });
                this.todayPrayerTimes.push({ name: 'Maghrib', value: timings['Maghrib'] });
                this.todayPrayerTimes.push({ name: 'Isha', value: timings['Isha'] });
                this.todayOtherTimes = [];
                this.todayOtherTimes.push({ name: 'Sunrise', value: timings['Sunrise'] });
                this.todayOtherTimes.push({ name: 'Sunset', value: timings['Sunset'] });
                this.todayOtherTimes.push({ name: 'Imsak', value: timings['Imsak'] });
            }
            else {
                console.log(x);
            }
        });
    }
};
PrayerTodayComponent.ctorParameters = () => [
    { type: src_app_services_app_services__WEBPACK_IMPORTED_MODULE_2__["AppServices"] },
    { type: _prayertime_service__WEBPACK_IMPORTED_MODULE_3__["PrayerTimeService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PrayerTodayComponent.prototype, "selectedSchool", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PrayerTodayComponent.prototype, "selectedCalcMethod", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PrayerTodayComponent.prototype, "midnightMode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PrayerTodayComponent.prototype, "latitudeAdjustmentMethod", void 0);
PrayerTodayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prayer-today',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./prayer-today.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/prayertime/prayertime/prayer-today/prayer-today.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./prayer-today.component.scss */ "./src/app/components/prayertime/prayertime/prayer-today/prayer-today.component.scss")).default]
    })
], PrayerTodayComponent);



/***/ }),

/***/ "./src/app/components/prayertime/prayertime/prayertime.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/prayertime/prayertime/prayertime.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJheWVydGltZS9wcmF5ZXJ0aW1lL3ByYXllcnRpbWUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/prayertime/prayertime/prayertime.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/prayertime/prayertime/prayertime.component.ts ***!
  \**************************************************************************/
/*! exports provided: PrayerTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerTimeComponent", function() { return PrayerTimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app.services */ "./src/app/services/app.services.ts");
/* harmony import */ var _prayertime_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../prayertime.service */ "./src/app/components/prayertime/prayertime.service.ts");




let PrayerTimeComponent = class PrayerTimeComponent {
    constructor(appServices, prayerTimeService) {
        this.appServices = appServices;
        this.prayerTimeService = prayerTimeService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.tabSelectedIndex = 2;
            this.calcMethods = this.appServices.getCalcMethods();
            this.schools = this.appServices.getSchools();
            // lat/lng is required to load upfront before selected{Properties}
            if (!this.appServices.geo.isLatLngFound) {
                yield this.appServices.geo.getSetLatLng();
            }
            // if selectedCalcMethod is already stored with us use that, otherwise default
            const selectedCalcMethod = this.appServices.store.getSelectedCalcMethod();
            this.selectedCalcMethod = selectedCalcMethod === null ? 2 : Number(selectedCalcMethod);
            ;
            const selectedSchool = this.appServices.store.getSelectedSchool();
            this.selectedSchool = selectedSchool === null ? 1 : Number(selectedSchool);
            const midnightMode = this.appServices.store.getMidnightMode();
            this.midnightMode = midnightMode === null ? 1 : Number(midnightMode);
            const latitudeAdjustmentMethod = this.appServices.store.getLatitudeAdjustmentMethod();
            this.latitudeAdjustmentMethod = latitudeAdjustmentMethod === null ? 0 : Number(latitudeAdjustmentMethod);
            ;
        });
    }
    calMethodSelectionChange($event) {
        // console.log($event);
        // store to show preselected next time
        this.appServices.store.setSelectedCalcMethod(String($event.value));
    }
    schoolSelectionChange($event) {
        // store to show preselected next time
        this.appServices.store.setSelectedSchool(String($event.value));
    }
    refresh() {
        // find selected tab
        this.selectedCalcMethod = 10;
        // update the data of selected tab
    }
};
PrayerTimeComponent.ctorParameters = () => [
    { type: src_app_services_app_services__WEBPACK_IMPORTED_MODULE_2__["AppServices"] },
    { type: _prayertime_service__WEBPACK_IMPORTED_MODULE_3__["PrayerTimeService"] }
];
PrayerTimeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prayertime',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./prayertime.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/prayertime/prayertime/prayertime.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./prayertime.component.scss */ "./src/app/components/prayertime/prayertime/prayertime.component.scss")).default]
    })
], PrayerTimeComponent);



/***/ })

}]);
//# sourceMappingURL=components-prayertime-prayertime-module-es2015.js.map