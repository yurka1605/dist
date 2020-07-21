(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_appview_appview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/appview/appview.component */ "./src/app/components/appview/appview.component.ts");




class AppComponent {
    constructor() {
        this.move = 0;
    }
    ngOnInit() { }
    changeImage(isNext) {
        const amoutFiles = this.uploadFiles.length - 1;
        if (this.move === 0 && !isNext) {
            this.move = amoutFiles;
        }
        else if (this.move === amoutFiles && isNext) {
            this.move = 0;
        }
        else {
            this.move += isNext ? 1 : -1;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 2, consts: [[3, "changeImage", "\u0441hangesFiles"], [1, "appview-wrap"], [3, "currentMove", "files"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeImage", function AppComponent_Template_app_sidebar_changeImage_2_listener($event) { return ctx.changeImage($event); })("\u0441hangesFiles", function AppComponent_Template_app_sidebar__hangesFiles_2_listener($event) { return ctx.uploadFiles = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-appview", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentMove", ctx.move)("files", ctx.uploadFiles);
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _components_appview_appview_component__WEBPACK_IMPORTED_MODULE_2__["AppviewComponent"]], styles: ["main[_ngcontent-%COMP%] {\n  display: flex;\n}\n\naside[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100px;\n}\n\n.appview-wrap[_ngcontent-%COMP%] {\n  width: calc(100vw - 100px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL192YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsWUNnQjJCO0FEakIvQjs7QUFJQTtFQUNJLDBCQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdfdmFycy5zY3NzJztcclxuXHJcbm1haW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIFxyXG59XHJcbmFzaWRlIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogJHNpZGViYXItd2lkdGg7XHJcbn1cclxuXHJcbi5hcHB2aWV3LXdyYXAge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAjeyRzaWRlYmFyLXdpZHRofSk7XHJcbn0iLCIvLyBmb250c1xyXG4kZm9udC1zbWFsbDogICAgICAgICAgICAgICAgICAgMTFweDtcclxuJGZvbnQtbWFpbjogICAgICAgICAgICAgICAgICAgIDE0cHg7XHJcbiRmb250LWxhcmdlOiAgICAgICAgICAgICAgICAgICAxOHB4O1xyXG4kaWNvbi1mb250LXNpemU6ICAgICAgICAgICAgICAgJGZvbnQtbGFyZ2U7XHJcblxyXG4vLyBjb2xvcnNcclxuJGNvbG9yLW1haW46ICAgICAgICAgICAgICAgICAjMDAwO1xyXG4kZmlybS1jb2xvcjogICAgICAgICAgICAgICAgICNjY2M7XHJcbiRmaXJtLWNvbG9yLWRhcms6ICAgICAgICAgICAgcmdiKDE4MCwgMTgwLCAxODApO1xyXG4kY29sb3Itd2hpdGU6ICAgICAgICAgICAgICAgICNmZmY7XHJcbiRyb3RhdGUtYmxvY2stY29sb3I6ICAgICAgICAgcmdiKDE1OCwgMTU3LCAyMTkpO1xyXG4kYWN0aXZlLWl0ZW0tY29sb3I6ICAgICAgICAgICNiNGI0YjQ7XHJcblxyXG4vLyBmb250LXdlaWdodFxyXG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICAgMzAwO1xyXG4kZm9udC13ZWlnaHQtbWFpbjogICAgICAgICAgICAgNDAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICAgNjAwO1xyXG4kZm9udC13ZWlnaHQtbWVkaXVtOiAgICAgICAgICAgNTAwO1xyXG5cclxuLy8gcGFkZGluZ3NcclxuJHBhZGRpbmctd2lkdGg6ICAgICAgICAgICAgICAgIDE2cHg7XHJcblxyXG4vLyBzaWRlYmFyXHJcbiRzaWRlYmFyLXdpZHRoOiAgICAgICAgICAgICAgICAxMDBweDtcclxuXHJcbi8vIHNpemVcclxuJGNhbnZhcy13aWR0aDogICAgICAgICAgICAgICAgIDgwMHB4O1xyXG4kY2FudmFzLWhlaWdodDogICAgICAgICAgICAgICAgNjAwcHg7XHJcbiRsaXN0aW5ncy13aWR0aDogICAgICAgICAgICAgICAxMDBweDtcclxuJGljb24tc2l6ZTogICAgICAgICAgICAgICAgICAgIDMwcHg7XHJcbiR0aXRsZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAzMHB4O1xyXG4kYnRuLXNpemU6ICAgICAgICAgICAgICAgICAgICAgNTBweDtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_appview_appview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/appview/appview.component */ "./src/app/components/appview/appview.component.ts");
/* harmony import */ var _pipe_recount_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipe/recount.pipe */ "./src/app/pipe/recount.pipe.ts");
/* harmony import */ var _directives_click_stop_propogation_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/click-stop-propogation.directive */ "./src/app/directives/click-stop-propogation.directive.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
        _components_appview_appview_component__WEBPACK_IMPORTED_MODULE_4__["AppviewComponent"],
        _pipe_recount_pipe__WEBPACK_IMPORTED_MODULE_5__["RecountPipe"],
        _directives_click_stop_propogation_directive__WEBPACK_IMPORTED_MODULE_6__["ClickStopPropogationDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
                    _components_appview_appview_component__WEBPACK_IMPORTED_MODULE_4__["AppviewComponent"],
                    _pipe_recount_pipe__WEBPACK_IMPORTED_MODULE_5__["RecountPipe"],
                    _directives_click_stop_propogation_directive__WEBPACK_IMPORTED_MODULE_6__["ClickStopPropogationDirective"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ],
                providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/appview/appview.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/appview/appview.component.ts ***!
  \*********************************************************/
/*! exports provided: AppviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppviewComponent", function() { return AppviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_draw_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/draw.service */ "./src/app/services/draw.service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_move_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/move.service */ "./src/app/services/move.service.ts");
/* harmony import */ var _services_rotate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/rotate.service */ "./src/app/services/rotate.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_click_stop_propogation_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/click-stop-propogation.directive */ "./src/app/directives/click-stop-propogation.directive.ts");
/* harmony import */ var _pipe_recount_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipe/recount.pipe */ "./src/app/pipe/recount.pipe.ts");










const _c0 = ["canvas"];
const _c1 = ["rotateBlock"];
const _c2 = ["rotateBtn"];
const _c3 = function (a1) { return { "objects__item": true, "active": a1 }; };
function AppviewComponent_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppviewComponent_ul_4_li_1_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const object_r13 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.onObjectClick($event, object_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const object_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c3, ctx_r12.activeObject.id === object_r13.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](object_r13.name);
} }
function AppviewComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppviewComponent_ul_4_li_1_Template, 2, 4, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.files[ctx_r0.currentMove].objects);
} }
function AppviewComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppviewComponent_li_8_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const object_r17 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.onItemClick($event, object_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppviewComponent_li_8_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const object_r17 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.clearRect(object_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.rectsPartName + " " + i_r18, " ");
} }
function AppviewComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "recount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, ctx_r2.activeDrawObject, 1, "x"));
} }
function AppviewComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "recount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, ctx_r3.activeDrawObject, 1, "y"));
} }
function AppviewComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "recount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, ctx_r4.activeDrawObject, 2, "x"));
} }
function AppviewComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "recount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, ctx_r5.activeDrawObject, 2, "y"));
} }
function AppviewComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-width", 100, "%")("max-height", 100, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r6.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r6.files[ctx_r6.currentMove].file.name);
} }
function AppviewComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r23 = ctx.title;
    const className_r24 = ctx.className;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", className_r24, "__title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](title_r23);
} }
const _c4 = function (a0) { return { title: a0, className: "objects" }; };
const _c5 = function (a0) { return { title: a0, className: "rects" }; };
class AppviewComponent {
    constructor(drawService, httpService, moveService, rotateService) {
        this.drawService = drawService;
        this.httpService = httpService;
        this.moveService = moveService;
        this.rotateService = rotateService;
        // переводы
        this.rectsTitle = 'Области';
        this.rectsPartName = 'Область';
        this.objectsTitle = 'Объекты';
        this.reader = new FileReader();
        // Для канваса
        this.savedObjects = [];
        this.drawObject = {
            point1: { x: 0, y: 0 },
            point2: { x: 0, y: 0 },
            num: 0,
        };
        // флаги
        this.drag = false;
        this.isMoving = false;
        this.isRotate = false;
        this.isMouseDown = false;
        this.isDisabled = true;
        this.currentMove = 0;
        this.files = [];
    }
    ngOnInit() {
        this.httpService.isSendData.subscribe(() => {
            if (!this.files) {
                return;
            }
            this.httpService.send(this.files);
            this.files = this.savedObjects = [];
            this.currentMove = 0;
            this.imageUrl = '';
            this.isDisabled = true;
            this.isRotate = this.isMouseDown = false;
            this.activeDrawObject = this.activeObject = undefined;
            this.drawObject = {
                point1: { x: 0, y: 0 },
                point2: { x: 0, y: 0 },
                num: 0,
                rotate: 0,
            };
            this.drawService.clearDraw(this.canvas);
            this.drawService.renewableColors();
        });
    }
    ngOnChanges() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.files) {
                return;
            }
            this.isDisabled = this.isRotate = false;
            this.activeObject = this.files[this.currentMove].objects[0];
            this.savedObjects = this.activeObject.rects ? this.activeObject.rects : [];
            this.drawService.clearDraw(this.canvas);
            this.savedObjects.forEach((el) => {
                this.drawService.drawRect(this.canvas, el);
            });
            yield this.readUrl();
        });
    }
    readUrl() {
        return new Promise((resolve, reject) => {
            this.reader.onload = (e) => {
                this.imageUrl = e.target.result;
                resolve(e);
            };
            this.reader.readAsDataURL(this.files[this.currentMove].file);
        });
    }
    onItemClick(e, object) {
        this.isRotate = this.isDisabled = e.target.classList.contains('active') ? false : true;
        this.activeDrawObject = this.isRotate ? undefined : object;
        this.changeActiveElement(e, 'rects__item');
        if (this.isRotate) {
            this.showRotateTools(object);
            this.activeDrawObject = object;
        }
        else {
            this.activeDrawObject = undefined;
        }
    }
    onObjectClick(e, object) {
        if (this.activeObject.id === object.id) {
            return;
        }
        this.changeActiveElement(e, 'objects__item');
        // записываем текущие прямоугольники в объекты картинки
        this.refreshObjects();
        this.drawService.clearDraw(this.canvas, true);
        this.savedObjects = object.rects ? object.rects : [];
        this.activeDrawObject = undefined;
        this.isDisabled = this.isRotate = this.isMouseDown = false;
        if (this.savedObjects.length) {
            this.savedObjects.forEach(obj => {
                this.drawService.drawRect(this.canvas, obj);
            });
        }
        this.activeObject = object;
    }
    changeActiveElement(e, className) {
        e.target.classList.toggle('active');
        document.querySelectorAll(`.${className}`).forEach(el => {
            if (el !== e.target) {
                el.classList.remove('active');
            }
        });
    }
    showRotateTools(object) {
        this.rotateBtn.nativeElement.children[0].style.fill = object.hisColor;
        // повверх рисуем доп прямоугольник
        this.rotateBlock.nativeElement.style.width = `${object.point2.x - object.point1.x}px`;
        this.rotateBlock.nativeElement.style.height = `${object.point2.y - object.point1.y}px`;
        this.rotateBlock.nativeElement.style.top = `${object.point1.y}px`;
        this.rotateBlock.nativeElement.style.left = `${object.point1.x}px`;
        this.rotateService.rotateCurrentBlock(object.rotate, this.rotateBlock);
    }
    // рисование
    ctxMouseDown(e) {
        if (this.isDisabled) {
            return;
        }
        this.isMouseDown = true;
        this.drawService.startDraw(this.drawObject, e);
    }
    ctxMouseMove(e) {
        if (this.isMouseDown) {
            this.activeDrawObject = this.drawObject = this.drawService.drawInProgres(this.canvas, e, this.drawObject, this.savedObjects);
        }
    }
    ctxMouseUp() {
        if (!this.isMouseDown) {
            return;
        }
        this.isMouseDown = false;
        this.drawObject.hisColor = this.drawService.endDraw();
        this.savedObjects.push({
            point1: this.drawObject.point1,
            point2: this.drawObject.point2,
            num: this.savedObjects.length,
            hisColor: this.drawObject.hisColor,
            rotate: 0,
        });
        this.refreshObjects();
    }
    // изменение прямоугольника
    startChangeObject(e, isMove) {
        if (!this.isMoving && !isMove) {
            this.drag = !this.drag;
            this.rotateService.rotateStart(this.rotateBlock);
        }
        if (!this.drag && isMove) {
            this.moveService.moveStart(e);
            this.isMoving = !this.isMoving;
        }
        this.rotateBlock.nativeElement.style.cursor = 'grabbing';
    }
    continueModifyingBlock(e) {
        if (this.isMoving) {
            this.moveService.continueMove(e, this.canvas, this.activeDrawObject, this.savedObjects, this.rotateBlock);
        }
        else if (this.drag) {
            this.rotateService.rotateProgress(e, this.canvas, this.savedObjects, this.activeDrawObject, this.rotateBlock);
        }
    }
    endBlockModification() {
        if (this.drag || this.isMoving) {
            if (this.isMoving) {
                this.moveService.endMove(this.activeDrawObject);
            }
            this.rotateBlock.nativeElement.style.cursor = 'grab';
            this.drag = this.isMoving = false;
            this.refreshObjects();
        }
    }
    // Удаление прямоугольника
    clearRect(rect) {
        let num;
        this.drawService.clearDraw(this.canvas);
        this.savedObjects.forEach((el, i) => {
            if (el.num === rect.num) {
                num = i;
            }
            else {
                this.drawService.drawRect(this.canvas, el);
            }
        });
        this.savedObjects.splice(num, 1);
        this.isRotate = this.isDisabled = this.isMouseDown = false;
        this.drawService.renewableColor(rect.hisColor);
        this.activeDrawObject = undefined;
    }
    refreshObjects() {
        this.files[this.currentMove].objects.forEach(el => {
            if (el.id === this.activeObject.id) {
                el.rects = this.savedObjects;
            }
        });
    }
}
AppviewComponent.ɵfac = function AppviewComponent_Factory(t) { return new (t || AppviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_draw_service__WEBPACK_IMPORTED_MODULE_2__["DrawService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_move_service__WEBPACK_IMPORTED_MODULE_4__["MoveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_rotate_service__WEBPACK_IMPORTED_MODULE_5__["RotateService"])); };
AppviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppviewComponent, selectors: [["app-appview"]], viewQuery: function AppviewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.rotateBlock = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.rotateBtn = _t.first);
    } }, inputs: { currentMove: "currentMove", files: "files" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 37, vars: 19, consts: [[1, "appview"], [1, "pannels"], [1, "objects"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [1, "rects"], ["class", "rects__item", 3, "click", 4, "ngFor", "ngForOf"], [1, "rects__coordinates"], [1, "min-coordinates"], [1, "max-coordinates"], [1, "canvas-wrap"], ["class", "image__container", 4, "ngIf"], [1, "appview__canvas", 3, "width", "height", "mousedown", "mousemove", "mouseup"], ["canvas", ""], [1, "rotate__wrap"], ["appClickStopPropogation", "", 1, "rotate__block", 3, "mousedown", "mousemove", "mouseup", "mouseleave"], ["rotateBlock", ""], ["appClickStopPropogation", "", "focusable", "false", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "rotate__btn", 3, "mousedown"], ["rotateBtn", ""], ["fill", "green", "d", "M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"], ["title", ""], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"], [1, "rects__item", 3, "click"], [1, "rects__delete", 3, "click"], [1, "image__container"], [3, "src", "alt"], ["image", ""]], template: function AppviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppviewComponent_ul_4_Template, 2, 1, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](6, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppviewComponent_li_8_Template, 4, 1, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "XMin: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AppviewComponent_span_13_Template, 3, 5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "YMin: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AppviewComponent_span_16_Template, 3, 5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "XMax: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AppviewComponent_span_20_Template, 3, 5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "YMax: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AppviewComponent_span_23_Template, 3, 5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AppviewComponent_div_25_Template, 3, 6, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "canvas", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function AppviewComponent_Template_canvas_mousedown_26_listener($event) { return ctx.ctxMouseDown($event); })("mousemove", function AppviewComponent_Template_canvas_mousemove_26_listener($event) { return ctx.ctxMouseMove($event); })("mouseup", function AppviewComponent_Template_canvas_mouseup_26_listener() { return ctx.ctxMouseUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Your browser does not support the HTML5 canvas tag.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function AppviewComponent_Template_div_mousedown_30_listener($event) { return ctx.startChangeObject($event, true); })("mousemove", function AppviewComponent_Template_div_mousemove_30_listener($event) { return ctx.continueModifyingBlock($event); })("mouseup", function AppviewComponent_Template_div_mouseup_30_listener() { return ctx.endBlockModification(); })("mouseleave", function AppviewComponent_Template_div_mouseleave_30_listener() { return ctx.endBlockModification(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "svg", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function AppviewComponent_Template__svg_svg_mousedown_32_listener($event) { return ctx.startChangeObject($event, false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, AppviewComponent_ng_template_35_Template, 3, 4, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r10)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c4, ctx.objectsTitle));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageUrl && ctx.files[ctx.currentMove]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r10)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c5, ctx.rectsTitle));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.savedObjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeDrawObject);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeDrawObject);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeDrawObject);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeDrawObject);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageUrl && ctx.files[ctx.currentMove]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 800)("height", 600);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.isRotate ? "block" : "none");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _directives_click_stop_propogation_directive__WEBPACK_IMPORTED_MODULE_7__["ClickStopPropogationDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], pipes: [_pipe_recount_pipe__WEBPACK_IMPORTED_MODULE_8__["RecountPipe"]], styles: ["[_nghost-%COMP%]   .appview[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  height: 600px;\n  border: 1px solid #000;\n  border-bottom: 0;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100% - 60px);\n  overflow: auto;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects__delete[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 57%;\n  right: 10px;\n  transform: translateY(-50%);\n  border: 0;\n  background-color: transparent;\n  font-size: 18px;\n  line-height: 1;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects__coordinates[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: #b4b4b4;\n  color: #fff;\n  line-height: 1;\n  padding: 5px 8px;\n  width: 100%;\n  height: 30px;\n  font-size: 11px;\n  border-top: 1px solid #000;\n  z-index: 3;\n  border-bottom: 1px solid #000;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects__coordinates[_ngcontent-%COMP%]   .max-coordinates[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects__coordinates[_ngcontent-%COMP%]   .min-coordinates[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50%;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .objects[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100px;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .objects[_ngcontent-%COMP%] {\n  border-right: 1px solid #000;\n  margin-left: -1px;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects__title[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .objects__title[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  border-bottom: 1px solid #000;\n  background-color: #fff;\n  height: 30px;\n  font-size: 11px;\n  line-height: 30px;\n  width: 100%;\n  z-index: 1;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects__item[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .objects__item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 5px 10px;\n  border-bottom: 1px solid #000;\n  cursor: pointer;\n  font-size: 11px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  line-height: 18px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects__item[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects__item.active[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .objects__item[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .objects__item.active[_ngcontent-%COMP%] {\n  background-color: #b4b4b4;\n  color: #fff;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects__item[_ngcontent-%COMP%]:hover   .rects__delete[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects__item.active[_ngcontent-%COMP%]   .rects__delete[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .objects__item[_ngcontent-%COMP%]:hover   .rects__delete[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .objects__item.active[_ngcontent-%COMP%]   .rects__delete[_ngcontent-%COMP%] {\n  color: #fff;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 800px;\n  height: 600px;\n  border: 1px solid #000;\n  border-left: 0;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%]   .rotate__btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  z-index: 999;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%]   .rotate__block[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #9e9ddb;\n  opacity: 0.9;\n  transform: rotate(0deg);\n  cursor: grab;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .canvas-wrap__canvas[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%]   .image__container[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%]   .rotate__wrap[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%]   .image__container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin-top: 1px;\n  width: 800px;\n  height: 600px;\n  border: 0;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%]   .rotate__wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%]   .image__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHB2aWV3L2FwcHZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvX3ZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQUlRO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQ2FtQjtFRFpuQixzQkFBQTtFQUNBLGdCQUFBO0FBRlo7QUFLZ0I7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUhwQjtBQU1nQjtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGVDOUJXO0VEK0JYLGNBQUE7RUFDQSxlQUFBO0FBSnBCO0FBT2dCO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0NqQ1M7RURrQ1QsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlDaEJXO0VEaUJYLGVDL0NXO0VEZ0RYLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FBTHBCO0FBTW9COztFQUVJLHFCQUFBO0VBQ0EsVUFBQTtBQUp4QjtBQVFZOztFQUVJLFlBQUE7RUFDQSxZQ2pDZTtBRDJCL0I7QUFRWTtFQUNJLDRCQUFBO0VBQ0EsaUJBQUE7QUFOaEI7QUFRWTs7RUFFSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkMvRGE7RURnRWIsWUMzQ2U7RUQ0Q2YsZUMxRWU7RUQyRWYsaUJDN0NlO0VEOENmLFdBQUE7RUFDQSxVQUFBO0FBTmhCO0FBUVk7O0VBRUksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGVDckZlO0VEc0ZmLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGlCQ3JGZTtFRHNGZixXQUFBO0FBTmhCO0FBUWdCOzs7RUFFSSx5QkFBQTtFQUNBLFdDcEZTO0FEK0U3QjtBQU1vQjs7O0VBQ0ksV0N0Rks7QURvRjdCO0FBUVE7RUFDSSxrQkFBQTtFQUNBLFlDN0VtQjtFRDhFbkIsYUM3RW1CO0VEOEVuQixzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQU5aO0FBU2dCO0VBQ0ksV0NsRlc7RURtRlgsWUNuRlc7RURvRlgsWUFBQTtBQVBwQjtBQVNnQjtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQ2hIUztFRGlIVCxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBUHBCO0FBV1k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFUaEI7QUFXWTtFQUNJLFdBQUE7QUFUaEI7QUFXWTs7RUFFSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUNySGU7RURzSGYsYUNySGU7RURzSGYsU0FBQTtFQUNBLGdCQUFBO0FBVGhCO0FBVWdCOztFQUNJLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQVBwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwdmlldy9hcHB2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnX3ZhcnMuc2Nzcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgICAuYXBwdmlldyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgLnBhbm5lbHMge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGhlaWdodDogJGNhbnZhcy1oZWlnaHQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1tYWluO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnJlY3RzIHtcclxuICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyAkdGl0bGUtaGVpZ2h0ICogMiB9KTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgJl9fZGVsZXRlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1NyU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICRpY29uLWZvbnQtc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICZfX2Nvb3JkaW5hdGVzIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I0YjRiNDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkdGl0bGUtaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc21hbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRjb2xvci1tYWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1tYWluO1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXgtY29vcmRpbmF0ZXMgPiBzcGFuLFxyXG4gICAgICAgICAgICAgICAgICAgIC5taW4tY29vcmRpbmF0ZXMgPiBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmVjdHMsXHJcbiAgICAgICAgICAgIC5vYmplY3RzIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAkbGlzdGluZ3Mtd2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9iamVjdHMge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGNvbG9yLW1haW47XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmVjdHNfX3RpdGxlLFxyXG4gICAgICAgICAgICAub2JqZWN0c19fdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1tYWluO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAkdGl0bGUtaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zbWFsbDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkdGl0bGUtaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yZWN0c19faXRlbSxcclxuICAgICAgICAgICAgLm9iamVjdHNfX2l0ZW0ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLW1haW47XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNtYWxsO1xyXG4gICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogJGljb24tZm9udC1zaXplO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRiNGI0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgLnJlY3RzX19kZWxldGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhbnZhcy13cmFwIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB3aWR0aDogJGNhbnZhcy13aWR0aDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAkY2FudmFzLWhlaWdodDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLW1haW47XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgLnJvdGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAmX19idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkaWNvbi1zaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJGljb24tc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX19ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcm90YXRlLWJsb2NrLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC45O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZ3JhYjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJl9fY2FudmFzIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmltYWdlX19jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJvdGF0ZV9fd3JhcCxcclxuICAgICAgICAgICAgLmltYWdlX19jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAkY2FudmFzLXdpZHRoO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAkY2FudmFzLWhlaWdodDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gZm9udHNcclxuJGZvbnQtc21hbGw6ICAgICAgICAgICAgICAgICAgIDExcHg7XHJcbiRmb250LW1haW46ICAgICAgICAgICAgICAgICAgICAxNHB4O1xyXG4kZm9udC1sYXJnZTogICAgICAgICAgICAgICAgICAgMThweDtcclxuJGljb24tZm9udC1zaXplOiAgICAgICAgICAgICAgICRmb250LWxhcmdlO1xyXG5cclxuLy8gY29sb3JzXHJcbiRjb2xvci1tYWluOiAgICAgICAgICAgICAgICAgIzAwMDtcclxuJGZpcm0tY29sb3I6ICAgICAgICAgICAgICAgICAjY2NjO1xyXG4kZmlybS1jb2xvci1kYXJrOiAgICAgICAgICAgIHJnYigxODAsIDE4MCwgMTgwKTtcclxuJGNvbG9yLXdoaXRlOiAgICAgICAgICAgICAgICAjZmZmO1xyXG4kcm90YXRlLWJsb2NrLWNvbG9yOiAgICAgICAgIHJnYigxNTgsIDE1NywgMjE5KTtcclxuJGFjdGl2ZS1pdGVtLWNvbG9yOiAgICAgICAgICAjYjRiNGI0O1xyXG5cclxuLy8gZm9udC13ZWlnaHRcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAgICAgICAgICAgIDMwMDtcclxuJGZvbnQtd2VpZ2h0LW1haW46ICAgICAgICAgICAgIDQwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6ICAgICAgICAgICAgIDYwMDtcclxuJGZvbnQtd2VpZ2h0LW1lZGl1bTogICAgICAgICAgIDUwMDtcclxuXHJcbi8vIHBhZGRpbmdzXHJcbiRwYWRkaW5nLXdpZHRoOiAgICAgICAgICAgICAgICAxNnB4O1xyXG5cclxuLy8gc2lkZWJhclxyXG4kc2lkZWJhci13aWR0aDogICAgICAgICAgICAgICAgMTAwcHg7XHJcblxyXG4vLyBzaXplXHJcbiRjYW52YXMtd2lkdGg6ICAgICAgICAgICAgICAgICA4MDBweDtcclxuJGNhbnZhcy1oZWlnaHQ6ICAgICAgICAgICAgICAgIDYwMHB4O1xyXG4kbGlzdGluZ3Mtd2lkdGg6ICAgICAgICAgICAgICAgMTAwcHg7XHJcbiRpY29uLXNpemU6ICAgICAgICAgICAgICAgICAgICAzMHB4O1xyXG4kdGl0bGUtaGVpZ2h0OiAgICAgICAgICAgICAgICAgMzBweDtcclxuJGJ0bi1zaXplOiAgICAgICAgICAgICAgICAgICAgIDUwcHg7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-appview',
                templateUrl: './appview.component.html',
                styleUrls: ['./appview.component.scss'],
            }]
    }], function () { return [{ type: _services_draw_service__WEBPACK_IMPORTED_MODULE_2__["DrawService"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: _services_move_service__WEBPACK_IMPORTED_MODULE_4__["MoveService"] }, { type: _services_rotate_service__WEBPACK_IMPORTED_MODULE_5__["RotateService"] }]; }, { currentMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], files: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['canvas', { static: false }]
        }], rotateBlock: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['rotateBlock', { static: false }]
        }], rotateBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['rotateBtn', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");



const _c0 = ["input"];
class SidebarComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.files = [];
        this.searchObjects = [
            { id: 1, name: 'Продавец' },
            { id: 2, name: 'Витрина выпечка' },
            { id: 3, name: 'Витрина хлеб' },
        ];
        this.сhangesFiles = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    handleKeyboardEvent(event) {
        if (event.key === 'ArrowRight') {
            this.nextImg(true);
        }
        if (event.key === 'ArrowLeft') {
            this.nextImg(false);
        }
    }
    ngOnInit() { }
    send() {
        this.httpService.sendData();
    }
    changesImages(event) {
        const files = Array.from(event.srcElement.files);
        this.files = files.map((file, i) => {
            return { id: i, name: `${i}`, file, objects: this.searchObjects.map(el => Object.assign({}, el)) };
        });
        this.сhangesFiles.emit(this.files);
    }
    getImagesObject() {
        // тут http запрос к апи(пока хз куда)
        // this.сhangesFiles.emit(this.files);
    }
    nextImg(isNext) {
        if (this.files && this.files.length > 1) {
            this.changeImage.emit(isNext);
        }
    }
    clean() {
        this.input.nativeElement.value = '';
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    } }, hostBindings: function SidebarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function SidebarComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, outputs: { сhangesFiles: "\u0441hangesFiles", changeImage: "changeImage" }, decls: 17, vars: 0, consts: [[1, "nav"], [1, "nav__list"], [1, "nav__item"], [1, "nav__btn"], ["value", "Open", "type", "file", "accept", "image/*", "title", "", "multiple", "", 3, "focus", "change"], ["input", ""], [1, "nav__btn", 3, "click"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Open Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function SidebarComponent_Template_input_focus_6_listener() { return ctx.clean(); })("change", function SidebarComponent_Template_input_change_6_listener($event) { return ctx.changesImages($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_9_listener() { return ctx.nextImg(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Next Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_12_listener() { return ctx.nextImg(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Prev Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_15_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]   .nav[_ngcontent-%COMP%] {\n  box-shadow: 3px -1px 5px 0px #ccc;\n  border-right: 1px solid #ccc;\n  height: 100%;\n}\n[_nghost-%COMP%]   .nav__btn[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: transparent;\n  width: 100%;\n  height: 50px;\n  border: 0;\n  border-bottom: 1px solid #ccc;\n  transition: all 0.3s linear;\n  font-weight: 500;\n}\n[_nghost-%COMP%]   .nav__btn[_ngcontent-%COMP%]:hover {\n  background-color: #b4b4b4;\n  color: #fff;\n}\n[_nghost-%COMP%]   .nav__btn[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  opacity: 0;\n  color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvX3ZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FBRlI7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUNvQnVCO0VEbkJ2QixTQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBRlI7QUFJUTtFQUNJLHlCQ1ZpQjtFRFdqQixXQ1ZpQjtBRFE3QjtBQUtRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUhaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdfdmFycy5zY3NzJztcclxuXHJcbjpob3N0IHtcclxuICAgIC5uYXYge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAtMXB4IDVweCAwcHggJGZpcm0tY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGZpcm0tY29sb3I7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLm5hdl9fYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAkYnRuLXNpemU7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZmlybS1jb2xvcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGxpbmVhcjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpcm0tY29sb3ItZGFyaztcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIGZvbnRzXHJcbiRmb250LXNtYWxsOiAgICAgICAgICAgICAgICAgICAxMXB4O1xyXG4kZm9udC1tYWluOiAgICAgICAgICAgICAgICAgICAgMTRweDtcclxuJGZvbnQtbGFyZ2U6ICAgICAgICAgICAgICAgICAgIDE4cHg7XHJcbiRpY29uLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAkZm9udC1sYXJnZTtcclxuXHJcbi8vIGNvbG9yc1xyXG4kY29sb3ItbWFpbjogICAgICAgICAgICAgICAgICMwMDA7XHJcbiRmaXJtLWNvbG9yOiAgICAgICAgICAgICAgICAgI2NjYztcclxuJGZpcm0tY29sb3ItZGFyazogICAgICAgICAgICByZ2IoMTgwLCAxODAsIDE4MCk7XHJcbiRjb2xvci13aGl0ZTogICAgICAgICAgICAgICAgI2ZmZjtcclxuJHJvdGF0ZS1ibG9jay1jb2xvcjogICAgICAgICByZ2IoMTU4LCAxNTcsIDIxOSk7XHJcbiRhY3RpdmUtaXRlbS1jb2xvcjogICAgICAgICAgI2I0YjRiNDtcclxuXHJcbi8vIGZvbnQtd2VpZ2h0XHJcbiRmb250LXdlaWdodC1saWdodDogICAgICAgICAgICAzMDA7XHJcbiRmb250LXdlaWdodC1tYWluOiAgICAgICAgICAgICA0MDA7XHJcbiRmb250LXdlaWdodC1ib2xkOiAgICAgICAgICAgICA2MDA7XHJcbiRmb250LXdlaWdodC1tZWRpdW06ICAgICAgICAgICA1MDA7XHJcblxyXG4vLyBwYWRkaW5nc1xyXG4kcGFkZGluZy13aWR0aDogICAgICAgICAgICAgICAgMTZweDtcclxuXHJcbi8vIHNpZGViYXJcclxuJHNpZGViYXItd2lkdGg6ICAgICAgICAgICAgICAgIDEwMHB4O1xyXG5cclxuLy8gc2l6ZVxyXG4kY2FudmFzLXdpZHRoOiAgICAgICAgICAgICAgICAgODAwcHg7XHJcbiRjYW52YXMtaGVpZ2h0OiAgICAgICAgICAgICAgICA2MDBweDtcclxuJGxpc3RpbmdzLXdpZHRoOiAgICAgICAgICAgICAgIDEwMHB4O1xyXG4kaWNvbi1zaXplOiAgICAgICAgICAgICAgICAgICAgMzBweDtcclxuJHRpdGxlLWhlaWdodDogICAgICAgICAgICAgICAgIDMwcHg7XHJcbiRidG4tc2l6ZTogICAgICAgICAgICAgICAgICAgICA1MHB4O1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, { сhangesFiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], changeImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input', { static: false }]
        }], handleKeyboardEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/directives/click-stop-propogation.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/directives/click-stop-propogation.directive.ts ***!
  \****************************************************************/
/*! exports provided: ClickStopPropogationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickStopPropogationDirective", function() { return ClickStopPropogationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ClickStopPropogationDirective {
    constructor() { }
    onClick(event) {
        event.stopPropagation();
    }
    onmousedown(event) {
        event.stopPropagation();
    }
}
ClickStopPropogationDirective.ɵfac = function ClickStopPropogationDirective_Factory(t) { return new (t || ClickStopPropogationDirective)(); };
ClickStopPropogationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ClickStopPropogationDirective, selectors: [["", "appClickStopPropogation", ""]], hostBindings: function ClickStopPropogationDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickStopPropogationDirective_click_HostBindingHandler($event) { return ctx.onClick($event); })("mousedown", function ClickStopPropogationDirective_mousedown_HostBindingHandler($event) { return ctx.onmousedown($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickStopPropogationDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appClickStopPropogation]'
            }]
    }], function () { return []; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }], onmousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/pipe/recount.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipe/recount.pipe.ts ***!
  \**************************************/
/*! exports provided: RecountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecountPipe", function() { return RecountPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RecountPipe {
    transform(object, pointNum, axis) {
        let PointNew;
        if (object.rotate) {
            const deg = object.rotate * Math.PI / 180;
            const width = object.point2.x - object.point1.x;
            const height = object.point2.y - object.point1.y;
            const XCenter = object.point1.x + width / 2;
            const YCenter = object.point1.y + height / 2;
            const x = (object[`point${pointNum}`].x - XCenter) * Math.cos(deg) -
                (object[`point${pointNum}`].y - YCenter) * Math.sin(deg) + XCenter;
            const y = (object[`point${pointNum}`].x - XCenter) * Math.sin(deg) +
                (object[`point${pointNum}`].y - YCenter) * Math.cos(deg) + YCenter;
            PointNew = { x, y };
        }
        else {
            PointNew = object[`point${pointNum}`];
        }
        PointNew = {
            x: parseFloat(PointNew.x.toFixed(2)),
            y: parseFloat(PointNew.y.toFixed(2))
        };
        return axis === undefined ? PointNew : PointNew[axis];
    }
}
RecountPipe.ɵfac = function RecountPipe_Factory(t) { return new (t || RecountPipe)(); };
RecountPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "recount", type: RecountPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecountPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'recount',
                pure: false
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/draw.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/draw.service.ts ***!
  \******************************************/
/*! exports provided: DrawService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawService", function() { return DrawService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DrawService {
    constructor() {
        this.drawColors = [
            { isUsed: false, color: '#008000' },
            { isUsed: false, color: '#006400' },
            { isUsed: false, color: '#9ACD32' },
            { isUsed: false, color: '#008080' },
            { isUsed: false, color: '#0000FF' },
            { isUsed: false, color: '#191970' },
            { isUsed: false, color: '#800000' },
            { isUsed: false, color: '#A0522D' },
            { isUsed: false, color: '#A52A2A' },
            { isUsed: false, color: '#D2691E' },
            { isUsed: false, color: '#B8860B' },
            { isUsed: false, color: '#DAA520' },
            { isUsed: false, color: '#F4A460' },
            { isUsed: false, color: '#D2B48C' },
            { isUsed: false, color: '#FF00FF' },
            { isUsed: false, color: '#FFD700' },
            { isUsed: false, color: '#FFFF00' },
            { isUsed: false, color: '#CD5C5C' },
            { isUsed: false, color: '#DC143C' },
            { isUsed: false, color: '#FFA07A' },
        ];
        this.defaultColor = '#000000';
        this.lineWidth = 3;
    }
    getCoordinates(event) {
        const x = event.offsetX;
        const y = event.offsetY;
        return { x, y };
    }
    drawRect(canvas, drawObject) {
        const ctx = canvas.nativeElement.getContext('2d');
        this.rotateObject(ctx, drawObject);
        ctx.beginPath();
        ctx.rect(drawObject.point1.x, drawObject.point1.y, Math.abs(drawObject.point2.x - drawObject.point1.x), Math.abs(drawObject.point2.y - drawObject.point1.y));
        ctx.closePath();
        ctx.imageSmoothingEnabled = true;
        ctx.strokeStyle = drawObject.hisColor;
        ctx.lineWidth = this.lineWidth;
        ctx.lineCap = 'square';
        ctx.stroke();
        ctx.restore();
    }
    rotateObject(ctx, drawObject) {
        if (drawObject.rotate !== 0) {
            ctx.save();
            const centerX = drawObject.point2.x - Math.abs(drawObject.point2.x - drawObject.point1.x) / 2;
            const centerY = drawObject.point2.y - Math.abs(drawObject.point2.y - drawObject.point1.y) / 2;
            ctx.translate(centerX, centerY);
            ctx.rotate(-drawObject.rotate * Math.PI / 180);
            ctx.translate(-centerX, -centerY);
        }
    }
    startDraw(object, e) {
        this.currentColor = this.drawColors.find(el => !el.isUsed);
        object.point1 = object.point2 = this.getCoordinates(e);
        object.hisColor = this.currentColor ? this.currentColor.color : this.defaultColor;
        return object;
    }
    drawInProgres(canvas, e, drawObject, objects) {
        drawObject.point2 = this.getCoordinates(e);
        this.clearDraw(canvas);
        // так как с холста все удалили рисуем заново существующие
        objects.forEach((el) => {
            this.drawRect(canvas, el);
        });
        this.drawRect(canvas, drawObject);
        return drawObject;
    }
    endDraw() {
        if (this.currentColor) {
            this.drawColors.find((el) => {
                if (this.currentColor.color === el.color) {
                    el.isUsed = !el.isUsed;
                }
            });
        }
        return this.currentColor ? this.currentColor.color : this.defaultColor;
    }
    clearDraw(canvas, isRenewableColors = false) {
        const ctx = canvas.nativeElement.getContext('2d');
        ctx.clearRect(0, 0, canvas.nativeElement.width, canvas.nativeElement.height);
        if (isRenewableColors) {
            this.renewableColors();
        }
    }
    renewableColors() {
        this.drawColors.forEach(el => el.isUsed = false);
    }
    renewableColor(color) {
        this.drawColors.forEach(el => el.isUsed = el.color === color ? false : el.isUsed);
    }
    refreshCanvas(canvas, objects) {
        this.clearDraw(canvas);
        objects.forEach(obj => {
            this.drawRect(canvas, obj);
        });
    }
}
DrawService.ɵfac = function DrawService_Factory(t) { return new (t || DrawService)(); };
DrawService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DrawService, factory: DrawService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class HttpService {
    constructor(http) {
        this.http = http;
        this.isSendData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    sendData() {
        this.isSendData.next();
    }
    send(files) {
        // const myHeaders = new HttpHeaders().set('token', this.token);
        files.forEach(file => {
            file.objects.forEach(object => {
                var _a;
                (_a = object.rects) === null || _a === void 0 ? void 0 : _a.forEach(rect => {
                    rect = { point1: rect.point1, point2: rect.point2, rotate: rect.rotate };
                });
            });
        });
        console.log(files);
        // this.http.post('https://localhost:3000', files, { headers: myHeaders });
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/move.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/move.service.ts ***!
  \******************************************/
/*! exports provided: MoveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveService", function() { return MoveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _draw_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw.service */ "./src/app/services/draw.service.ts");



class MoveService {
    constructor(drawService) {
        this.drawService = drawService;
    }
    moveStart(e) {
        this.moveStartX = e.pageX;
        this.moveStartY = e.pageY;
    }
    continueMove(e, canvas, activeDrawObject, savedObjects, block) {
        this.moveEndX = activeDrawObject.point1.x + e.pageX - this.moveStartX;
        this.moveEndY = activeDrawObject.point1.y + e.pageY - this.moveStartY;
        block.nativeElement.style.left = `${this.moveEndX}px`;
        block.nativeElement.style.top = `${this.moveEndY}px`;
        this.drawService.clearDraw(canvas);
        savedObjects.forEach((el) => {
            if (activeDrawObject.num === el.num) {
                const point2 = {
                    x: this.moveEndX + el.point2.x - el.point1.x,
                    y: this.moveEndY + el.point2.y - el.point1.y
                };
                this.drawService.drawRect(canvas, {
                    num: el.num,
                    point1: { x: this.moveEndX, y: this.moveEndY },
                    point2: { x: point2.x, y: point2.y },
                    hisColor: el.hisColor,
                    rotate: el.rotate
                });
            }
            else {
                this.drawService.drawRect(canvas, el);
            }
        });
    }
    endMove(movableObject) {
        const width = Math.abs(movableObject.point2.x - movableObject.point1.x);
        const height = Math.abs(movableObject.point2.y - movableObject.point1.y);
        movableObject.point1.x = this.moveEndX;
        movableObject.point1.y = this.moveEndY;
        movableObject.point2.x = this.moveEndX + width;
        movableObject.point2.y = this.moveEndY + height;
    }
}
MoveService.ɵfac = function MoveService_Factory(t) { return new (t || MoveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_draw_service__WEBPACK_IMPORTED_MODULE_1__["DrawService"])); };
MoveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MoveService, factory: MoveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _draw_service__WEBPACK_IMPORTED_MODULE_1__["DrawService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/rotate.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/rotate.service.ts ***!
  \********************************************/
/*! exports provided: RotateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotateService", function() { return RotateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _draw_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw.service */ "./src/app/services/draw.service.ts");



class RotateService {
    constructor(drawService) {
        this.drawService = drawService;
        this.deg = 0;
    }
    rotateStart(block) {
        const rect = block.nativeElement.getBoundingClientRect();
        this.centerX = rect.left + (rect.width / 2);
        this.centerY = rect.top + (rect.height / 2);
    }
    rotateProgress(e, canvas, objects, activeObject, block) {
        const rotateX = e.pageX - this.centerX;
        const rotateY = e.pageY - this.centerY;
        this.deg = parseInt(`${Math.abs(360 - ((180 / Math.PI) * Math.atan2(rotateY, rotateX)))}`, 10);
        this.rotateCurrentBlock(this.deg, block);
        this.drawService.clearDraw(canvas);
        objects[activeObject.num].rotate = this.deg;
        this.drawService.refreshCanvas(canvas, objects);
    }
    rotateCurrentBlock(deg, block) {
        block.nativeElement.style.transform = `rotate(${-deg}deg)`;
    }
}
RotateService.ɵfac = function RotateService_Factory(t) { return new (t || RotateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_draw_service__WEBPACK_IMPORTED_MODULE_1__["DrawService"])); };
RotateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RotateService, factory: RotateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RotateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _draw_service__WEBPACK_IMPORTED_MODULE_1__["DrawService"] }]; }, null); })();


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
    production: false
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lua\Documents\litvinov\image_labeling\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map