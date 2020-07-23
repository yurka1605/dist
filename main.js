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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_appview_appview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/appview/appview.component */ "./src/app/components/appview/appview.component.ts");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/auth/auth.component */ "./src/app/components/auth/auth.component.ts");
/* harmony import */ var _components_markup_markup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/markup/markup.component */ "./src/app/components/markup/markup.component.ts");
/* harmony import */ var _pipe_recount_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipe/recount.pipe */ "./src/app/pipe/recount.pipe.ts");
/* harmony import */ var _directives_click_stop_propogation_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/click-stop-propogation.directive */ "./src/app/directives/click-stop-propogation.directive.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");















// определение маршрутов
const appRoutes = [
    { path: '', component: _components_markup_markup_component__WEBPACK_IMPORTED_MODULE_9__["MarkupComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'auth', component: _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"] },
    { path: '**', redirectTo: '/' },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _pipe_recount_pipe__WEBPACK_IMPORTED_MODULE_10__["RecountPipe"], _auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
        _components_appview_appview_component__WEBPACK_IMPORTED_MODULE_7__["AppviewComponent"],
        _pipe_recount_pipe__WEBPACK_IMPORTED_MODULE_10__["RecountPipe"],
        _directives_click_stop_propogation_directive__WEBPACK_IMPORTED_MODULE_11__["ClickStopPropogationDirective"],
        _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"],
        _components_markup_markup_component__WEBPACK_IMPORTED_MODULE_9__["MarkupComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                    _components_appview_appview_component__WEBPACK_IMPORTED_MODULE_7__["AppviewComponent"],
                    _pipe_recount_pipe__WEBPACK_IMPORTED_MODULE_10__["RecountPipe"],
                    _directives_click_stop_propogation_directive__WEBPACK_IMPORTED_MODULE_11__["ClickStopPropogationDirective"],
                    _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"],
                    _components_markup_markup_component__WEBPACK_IMPORTED_MODULE_9__["MarkupComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                ],
                providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _pipe_recount_pipe__WEBPACK_IMPORTED_MODULE_10__["RecountPipe"], _auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/cookies.service */ "./src/app/services/cookies.service.ts");




class AuthGuard {
    constructor(router, cookiesService) {
        this.router = router;
        this.cookiesService = cookiesService;
    }
    canActivate(route, state) {
        if (!this.cookiesService.getItem('token')) {
            this.router.navigate(['auth']);
            return false;
        }
        else {
            return true;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_cookies_service__WEBPACK_IMPORTED_MODULE_2__["CookiesService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_2__["CookiesService"] }]; }, null); })();


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
/* harmony import */ var _interface_drow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interface/drow */ "./src/app/interface/drow.ts");
/* harmony import */ var src_app_pipe_recount_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pipe/recount.pipe */ "./src/app/pipe/recount.pipe.ts");
/* harmony import */ var _services_draw_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/draw.service */ "./src/app/services/draw.service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_move_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/move.service */ "./src/app/services/move.service.ts");
/* harmony import */ var _services_rotate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/rotate.service */ "./src/app/services/rotate.service.ts");
/* harmony import */ var src_app_services_resize_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/resize.service */ "./src/app/services/resize.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_click_stop_propogation_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../directives/click-stop-propogation.directive */ "./src/app/directives/click-stop-propogation.directive.ts");













const _c0 = ["canvas"];
const _c1 = ["rotateBlock"];
const _c2 = ["rotateBtn"];
const _c3 = function (a1) { return { "objects__item": true, "active": a1 }; };
function AppviewComponent_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 23);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppviewComponent_ul_4_li_1_Template, 2, 4, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.files[ctx_r0.currentMove].objects);
} }
function AppviewComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppviewComponent_li_8_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const object_r17 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.onItemClick($event, object_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 25);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, ctx_r2.activeDrawObject, 1, ctx_r2.Axis.X));
} }
function AppviewComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "recount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, ctx_r3.activeDrawObject, 1, ctx_r3.Axis.Y));
} }
function AppviewComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "recount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, ctx_r4.activeDrawObject, 2, ctx_r4.Axis.X));
} }
function AppviewComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "recount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, ctx_r5.activeDrawObject, 2, ctx_r5.Axis.Y));
} }
function AppviewComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-width", 100, "%")("max-height", 100, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r6.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r6.files[ctx_r6.currentMove].file.name);
} }
function AppviewComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
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
    constructor(drawService, httpService, moveService, rotateService, resizeService) {
        this.drawService = drawService;
        this.httpService = httpService;
        this.moveService = moveService;
        this.rotateService = rotateService;
        this.resizeService = resizeService;
        this.Status = _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"];
        this.Axis = src_app_pipe_recount_pipe__WEBPACK_IMPORTED_MODULE_3__["Axis"];
        // переводы
        this.rectsTitle = 'Области';
        this.rectsPartName = 'Область';
        this.objectsTitle = 'Объекты';
        this.reader = new FileReader();
        this.status = _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Disabled;
        // Для канваса
        this.savedObjects = [];
        this.drawObject = {
            point1: { x: 0, y: 0 },
            point2: { x: 0, y: 0 },
            num: 0,
        };
        // флаги
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
            this.httpService.sendImage(this.files);
            this.files = this.savedObjects = [];
            this.currentMove = 0;
            this.imageUrl = '';
            this.status = _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Disabled;
            this.isMouseDown = false;
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
            this.status = _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Free;
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
        if (e.target.classList.contains('active')) {
            this.status = _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Free;
            this.activeDrawObject = undefined;
        }
        else {
            this.status = _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Grab;
            this.activeDrawObject = object;
            this.showRotateTools(object);
        }
        this.changeActiveElement(e, 'rects__item');
    }
    onObjectClick(e, object) {
        if (this.activeObject.id === object.id) {
            return;
        }
        this.changeActiveElement(e, 'objects__item');
        this.refreshObjects();
        this.drawService.clearDraw(this.canvas, true);
        this.savedObjects = object.rects ? object.rects : [];
        this.activeDrawObject = undefined;
        this.status = _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Free;
        this.isMouseDown = false;
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
        if (this.activeDrawObject.rotate === 0) {
            this.rotateBlock.nativeElement.children[1].style.display = 'block';
            this.rotateBlock.nativeElement.children[1].style.backgroundColor = object.hisColor;
        }
        else {
            this.rotateBlock.nativeElement.children[1].style.display = 'none';
        }
        // повверх рисуем доп прямоугольник
        this.rotateBlock.nativeElement.style.width = `${object.point2.x - object.point1.x}px`;
        this.rotateBlock.nativeElement.style.height = `${object.point2.y - object.point1.y}px`;
        this.rotateBlock.nativeElement.style.top = `${object.point1.y}px`;
        this.rotateBlock.nativeElement.style.left = `${object.point1.x}px`;
        this.rotateService.rotateCurrentBlock(object.rotate, this.rotateBlock);
    }
    // рисование
    ctxMouseDown(e) {
        if (this.status === _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Free) {
            this.status = _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Draw;
            this.drawService.startDraw(this.drawObject, e);
        }
    }
    ctxMouseMove(e) {
        if (this.status === _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Draw) {
            this.drawObject = this.drawService.drawInProgres(this.canvas, e, this.drawObject, this.savedObjects);
        }
    }
    ctxMouseUp() {
        switch (this.status) {
            case _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Draw:
                this.drawObject.hisColor = this.drawService.endDraw();
                this.savedObjects.push({
                    point1: this.drawObject.point1,
                    point2: this.drawObject.point2,
                    num: this.savedObjects.length,
                    hisColor: this.drawObject.hisColor,
                    rotate: 0,
                });
                this.refreshObjects();
                this.status = _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Free;
                break;
            case _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Resize:
                this.resizeEnd();
                this.drawService.refreshCanvas(this.canvas, this.savedObjects);
                break;
        }
    }
    // изменение прямоугольника
    startChangeObject(e, status) {
        this.rotateBlock.nativeElement.style.cursor = 'grabbing';
        this.status = status;
        switch (status) {
            case _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Moving:
                this.moveService.moveStart(e);
                break;
            case _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Rotate:
                this.rotateBlock.nativeElement.children[1].style.display = 'none';
                this.rotateService.rotateStart(this.rotateBlock);
                break;
            case _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Resize:
                this.canvas.nativeElement.style.cursor = 'grab';
                this.resizeService.startResize(e);
                break;
        }
    }
    resizeMove(e) {
        if (this.status === _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Resize) {
            this.resizeService.resizeMove(e, this.activeDrawObject, this.canvas, this.rotateBlock, this.savedObjects);
        }
    }
    resizeEnd() {
        if (this.status === _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Resize) {
            this.activeDrawObject.point2 = this.resizeService.resizeEnd();
            this.canvas.nativeElement.style.cursor = 'auto';
            this.rotateBlock.nativeElement.style.cursor = 'grab';
            this.drawService.refreshCanvas(this.canvas, this.savedObjects);
            this.status = _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Grab;
        }
    }
    continueModifyingBlock(e) {
        switch (this.status) {
            case _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Moving:
                this.moveService.continueMove(e, this.canvas, this.activeDrawObject, this.savedObjects, this.rotateBlock);
                break;
            case _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Rotate:
                this.rotateService.rotateProgress(e, this.canvas, this.savedObjects, this.activeDrawObject, this.rotateBlock);
                break;
        }
    }
    endBlockModification() {
        if (this.status === _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Moving) {
            this.moveService.endMove(this.activeDrawObject);
        }
        if (this.status !== _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Resize) {
            this.rotateBlock.nativeElement.style.cursor = 'grab';
            if (this.activeDrawObject.rotate === 0) {
                this.rotateBlock.nativeElement.children[1].style.display = 'block';
            }
            this.status = _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Grab;
            this.refreshObjects();
        }
    }
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
        this.status = _interface_drow__WEBPACK_IMPORTED_MODULE_2__["Status"].Free;
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
AppviewComponent.ɵfac = function AppviewComponent_Factory(t) { return new (t || AppviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_draw_service__WEBPACK_IMPORTED_MODULE_4__["DrawService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_move_service__WEBPACK_IMPORTED_MODULE_6__["MoveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_rotate_service__WEBPACK_IMPORTED_MODULE_7__["RotateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_resize_service__WEBPACK_IMPORTED_MODULE_8__["ResizeService"])); };
AppviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppviewComponent, selectors: [["app-appview"]], viewQuery: function AppviewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.rotateBlock = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.rotateBtn = _t.first);
    } }, inputs: { currentMove: "currentMove", files: "files" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 38, vars: 19, consts: [[1, "appview"], [1, "pannels"], [1, "objects"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [1, "rects"], ["class", "rects__item", 3, "click", 4, "ngFor", "ngForOf"], [1, "rects__coordinates"], [1, "min-coordinates"], [1, "max-coordinates"], [1, "canvas-wrap"], ["class", "image__container", 4, "ngIf"], [1, "appview__canvas", 3, "width", "height", "mousedown", "mousemove", "mouseup", "mouseleave"], ["canvas", ""], [1, "rotate__wrap", 3, "mousemove", "mouseup", "mouseleave"], ["appClickStopPropogation", "", 1, "rotate__block", 3, "mousedown", "mousemove", "mouseup", "mouseleave"], ["rotateBlock", ""], ["appClickStopPropogation", "", "focusable", "false", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "rotate__btn", 3, "mousedown"], ["rotateBtn", ""], ["fill", "green", "d", "M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"], ["appClickStopPropogation", "", 1, "resize-btn", 3, "mousedown"], ["title", ""], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"], [1, "rects__item", 3, "click"], [1, "rects__delete", 3, "click"], [1, "image__container"], [3, "src", "alt"], ["image", ""]], template: function AppviewComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function AppviewComponent_Template_canvas_mousedown_26_listener($event) { return ctx.ctxMouseDown($event); })("mousemove", function AppviewComponent_Template_canvas_mousemove_26_listener($event) { return ctx.ctxMouseMove($event); })("mouseup", function AppviewComponent_Template_canvas_mouseup_26_listener() { return ctx.ctxMouseUp(); })("mouseleave", function AppviewComponent_Template_canvas_mouseleave_26_listener() { return ctx.ctxMouseUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Your browser does not support the HTML5 canvas tag.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousemove", function AppviewComponent_Template_div_mousemove_29_listener($event) { return ctx.resizeMove($event); })("mouseup", function AppviewComponent_Template_div_mouseup_29_listener() { return ctx.resizeEnd(); })("mouseleave", function AppviewComponent_Template_div_mouseleave_29_listener() { return ctx.resizeEnd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function AppviewComponent_Template_div_mousedown_30_listener($event) { return ctx.startChangeObject($event, ctx.Status.Moving); })("mousemove", function AppviewComponent_Template_div_mousemove_30_listener($event) { return ctx.continueModifyingBlock($event); })("mouseup", function AppviewComponent_Template_div_mouseup_30_listener() { return ctx.endBlockModification(); })("mouseleave", function AppviewComponent_Template_div_mouseleave_30_listener() { return ctx.endBlockModification(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "svg", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function AppviewComponent_Template__svg_svg_mousedown_32_listener($event) { return ctx.startChangeObject($event, ctx.Status.Rotate); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function AppviewComponent_Template_div_mousedown_35_listener($event) { return ctx.startChangeObject($event, ctx.Status.Resize); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, AppviewComponent_ng_template_36_Template, 3, 4, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.status !== ctx.Status.Free && ctx.status !== ctx.Status.Draw && ctx.status !== ctx.Status.Disabled ? "block" : "none");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _directives_click_stop_propogation_directive__WEBPACK_IMPORTED_MODULE_10__["ClickStopPropogationDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]], pipes: [src_app_pipe_recount_pipe__WEBPACK_IMPORTED_MODULE_3__["RecountPipe"]], styles: ["[_nghost-%COMP%]   .appview[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  height: 600px;\n  border: 1px solid #ced4da;\n  border-bottom: 0;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100% - 60px);\n  overflow: auto;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects__delete[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 57%;\n  right: 10px;\n  transform: translateY(-50%);\n  border: 0;\n  background-color: transparent;\n  font-size: 18px;\n  line-height: 1;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects__coordinates[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: #b4b4b4;\n  color: #fff;\n  line-height: 1;\n  padding: 5px 8px;\n  width: 100%;\n  height: 30px;\n  font-size: 11px;\n  border-top: 1px solid #ced4da;\n  z-index: 3;\n  border-bottom: 1px solid #ced4da;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects__coordinates[_ngcontent-%COMP%]   .max-coordinates[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects__coordinates[_ngcontent-%COMP%]   .min-coordinates[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50%;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .objects[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100px;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .objects[_ngcontent-%COMP%] {\n  border-right: 1px solid #ced4da;\n  margin-left: -1px;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects__title[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .objects__title[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  border-bottom: 1px solid #ced4da;\n  background-color: #fff;\n  height: 30px;\n  line-height: 30px;\n  width: 100%;\n  z-index: 1;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects__title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .objects__title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects__item[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .objects__item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 5px 10px;\n  border-bottom: 1px solid #ced4da;\n  cursor: pointer;\n  font-size: 11px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  line-height: 18px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects__item[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects__item.active[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .objects__item[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .objects__item.active[_ngcontent-%COMP%] {\n  background-color: #b4b4b4;\n  color: #fff;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects__item[_ngcontent-%COMP%]:hover   .rects__delete[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .rects__item.active[_ngcontent-%COMP%]   .rects__delete[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .objects__item[_ngcontent-%COMP%]:hover   .rects__delete[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .pannels[_ngcontent-%COMP%]   .objects__item.active[_ngcontent-%COMP%]   .rects__delete[_ngcontent-%COMP%] {\n  color: #fff;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 800px;\n  height: 600px;\n  border: 1px solid #ced4da;\n  border-left: 0;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%]   .rotate__btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  z-index: 999;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%]   .rotate__block[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #9e9ddb;\n  opacity: 0.9;\n  transform: rotate(0deg);\n  cursor: grab;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%]   .rotate__block[_ngcontent-%COMP%]   .resize-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  transform: translate(50%, 50%);\n  transition: all 0.2s linear;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%]   .rotate__block[_ngcontent-%COMP%]   .resize-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.5) translate(50%, 50%);\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .canvas-wrap__canvas[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%]   .image__container[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%]   .rotate__wrap[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%]   .image__container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin-top: 1px;\n  width: 800px;\n  height: 600px;\n  border: 0;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%]   .rotate__wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%]   .image__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHB2aWV3L2FwcHZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvX3ZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQUlRO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQ2NtQjtFRGJuQix5QkFBQTtFQUNBLGdCQUFBO0FBRlo7QUFLZ0I7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUhwQjtBQU1nQjtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGVDN0JXO0VEOEJYLGNBQUE7RUFDQSxlQUFBO0FBSnBCO0FBT2dCO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQzdCUztFRDhCVCxXQ2hDUztFRGlDVCxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUNmVztFRGdCWCxlQy9DVztFRGdEWCw2QkFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQUxwQjtBQU1vQjs7RUFFSSxxQkFBQTtFQUNBLFVBQUE7QUFKeEI7QUFRWTs7RUFFSSxZQUFBO0VBQ0EsWUNoQ2U7QUQwQi9CO0FBUVk7RUFDSSwrQkFBQTtFQUNBLGlCQUFBO0FBTmhCO0FBUVk7O0VBRUksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JDOURhO0VEK0RiLFlDMUNlO0VEMkNmLGlCQzNDZTtFRDRDZixXQUFBO0VBQ0EsVUFBQTtBQU5oQjtBQU9nQjs7RUFDSSxlQzdFVztBRHlFL0I7QUFPWTs7RUFFSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZUN2RmU7RUR3RmYseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsaUJDdEZlO0VEdUZmLFdBQUE7QUFMaEI7QUFPZ0I7OztFQUVJLHlCQ2xGUztFRG1GVCxXQ3JGUztBRGlGN0I7QUFLb0I7OztFQUNJLFdDdkZLO0FEc0Y3QjtBQU9RO0VBQ0ksa0JBQUE7RUFDQSxZQzlFbUI7RUQrRW5CLGFDOUVtQjtFRCtFbkIseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFMWjtBQVFnQjtFQUNJLFdDbkZXO0VEb0ZYLFlDcEZXO0VEcUZYLFlBQUE7QUFOcEI7QUFRZ0I7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkNqSFM7RURrSFQsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQU5wQjtBQVFvQjtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtBQU54QjtBQVFvQjtFQUNJLHlDQUFBO0FBTnhCO0FBV1k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFUaEI7QUFXWTtFQUNJLFdBQUE7QUFUaEI7QUFXWTs7RUFFSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUNwSWU7RURxSWYsYUNwSWU7RURxSWYsU0FBQTtFQUNBLGdCQUFBO0FBVGhCO0FBVWdCOztFQUNJLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQVBwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwdmlldy9hcHB2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnX3ZhcnMuc2Nzcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgICAuYXBwdmlldyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgLnBhbm5lbHMge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGhlaWdodDogJGNhbnZhcy1oZWlnaHQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRmaXJtLWNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnJlY3RzIHtcclxuICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyAkdGl0bGUtaGVpZ2h0ICogMiB9KTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgJl9fZGVsZXRlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1NyU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICRpY29uLWZvbnQtc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICZfX2Nvb3JkaW5hdGVzIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjdGl2ZS1pdGVtLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDhweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR0aXRsZS1oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zbWFsbDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGZpcm0tY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGZpcm0tY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgLm1heC1jb29yZGluYXRlcyA+IHNwYW4sXHJcbiAgICAgICAgICAgICAgICAgICAgLm1pbi1jb29yZGluYXRlcyA+IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yZWN0cyxcclxuICAgICAgICAgICAgLm9iamVjdHMge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICRsaXN0aW5ncy13aWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub2JqZWN0cyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkZmlybS1jb2xvcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yZWN0c19fdGl0bGUsXHJcbiAgICAgICAgICAgIC5vYmplY3RzX190aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGZpcm0tY29sb3I7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICR0aXRsZS1oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogJHRpdGxlLWhlaWdodDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250LW1haW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJlY3RzX19pdGVtLFxyXG4gICAgICAgICAgICAub2JqZWN0c19faXRlbSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZmlybS1jb2xvcjtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc21hbGw7XHJcbiAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkaWNvbi1mb250LXNpemU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY3RpdmUtaXRlbS1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIC5yZWN0c19fZGVsZXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYW52YXMtd3JhcCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgd2lkdGg6ICRjYW52YXMtd2lkdGg7XHJcbiAgICAgICAgICAgIGhlaWdodDogJGNhbnZhcy1oZWlnaHQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRmaXJtLWNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgIC5yb3RhdGUge1xyXG4gICAgICAgICAgICAgICAgJl9fYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJGljb24tc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICRpY29uLXNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9fYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJvdGF0ZS1ibG9jay1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuOTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGdyYWI7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlc2l6ZS1idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJlc2l6ZS1idG46aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSkgdHJhbnNsYXRlKDUwJSwgNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICZfX2NhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbWFnZV9fY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yb3RhdGVfX3dyYXAsXHJcbiAgICAgICAgICAgIC5pbWFnZV9fY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJGNhbnZhcy13aWR0aDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJGNhbnZhcy1oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIGZvbnRzXHJcbiRmb250LXNtYWxsOiAgICAgICAgICAgICAgICAgICAxMXB4O1xyXG4kZm9udC1tYWluOiAgICAgICAgICAgICAgICAgICAgMTRweDtcclxuJGZvbnQtbWlkZGxlOiAgICAgICAgICAgICAgICAgIDE2cHg7XHJcbiRmb250LWxhcmdlOiAgICAgICAgICAgICAgICAgICAxOHB4O1xyXG4kaWNvbi1mb250LXNpemU6ICAgICAgICAgICAgICAgJGZvbnQtbGFyZ2U7XHJcblxyXG4vLyBjb2xvcnNcclxuJGNvbG9yLW1haW46ICAgICAgICAgICAgICAgICAjMDAwO1xyXG4kZmlybS1jb2xvcjogICAgICAgICAgICAgICAgICNjZWQ0ZGE7XHJcbiRmaXJtLWNvbG9yLWRhcms6ICAgICAgICAgICAgcmdiKDE4MCwgMTgwLCAxODApO1xyXG4kY29sb3Itd2hpdGU6ICAgICAgICAgICAgICAgICNmZmY7XHJcbiRyb3RhdGUtYmxvY2stY29sb3I6ICAgICAgICAgcmdiKDE1OCwgMTU3LCAyMTkpO1xyXG4kYWN0aXZlLWl0ZW0tY29sb3I6ICAgICAgICAgICNiNGI0YjQ7XHJcblxyXG4vLyBmb250LXdlaWdodFxyXG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICAgMzAwO1xyXG4kZm9udC13ZWlnaHQtbWFpbjogICAgICAgICAgICAgNDAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICAgNjAwO1xyXG4kZm9udC13ZWlnaHQtbWVkaXVtOiAgICAgICAgICAgNTAwO1xyXG5cclxuLy8gcGFkZGluZ3NcclxuJHBhZGRpbmctd2lkdGg6ICAgICAgICAgICAgICAgIDE2cHg7XHJcblxyXG4vLyBzaWRlYmFyXHJcbiRzaWRlYmFyLXdpZHRoOiAgICAgICAgICAgICAgICAxMDBweDtcclxuXHJcbi8vIHNpemVcclxuJGNhbnZhcy13aWR0aDogICAgICAgICAgICAgICAgIDgwMHB4O1xyXG4kY2FudmFzLWhlaWdodDogICAgICAgICAgICAgICAgNjAwcHg7XHJcbiRsaXN0aW5ncy13aWR0aDogICAgICAgICAgICAgICAxMDBweDtcclxuJGljb24tc2l6ZTogICAgICAgICAgICAgICAgICAgIDMwcHg7XHJcbiR0aXRsZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAzMHB4O1xyXG4kYnRuLXNpemU6ICAgICAgICAgICAgICAgICAgICAgNDBweDtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-appview',
                templateUrl: './appview.component.html',
                styleUrls: ['./appview.component.scss'],
            }]
    }], function () { return [{ type: _services_draw_service__WEBPACK_IMPORTED_MODULE_4__["DrawService"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }, { type: _services_move_service__WEBPACK_IMPORTED_MODULE_6__["MoveService"] }, { type: _services_rotate_service__WEBPACK_IMPORTED_MODULE_7__["RotateService"] }, { type: src_app_services_resize_service__WEBPACK_IMPORTED_MODULE_8__["ResizeService"] }]; }, { currentMove: [{
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

/***/ "./src/app/components/auth/auth.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/auth/auth.component.ts ***!
  \***************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_cookies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cookies.service */ "./src/app/services/cookies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function AuthComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.authError);
} }
class AuthComponent {
    constructor(fb, httpService, cookiesService, router) {
        this.fb = fb;
        this.httpService = httpService;
        this.cookiesService = cookiesService;
        this.router = router;
        this.token = 'asdasd2131dgnc123vc21v32193v1c2asdasd2131dgnc123vc21v32193v1c2';
        this.cookieOptions = {
        // secure: true,
        // 'max-age': 3600 * 14,
        };
    }
    _createForm() {
        this.authForm = this.fb.group({
            login: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    ngOnInit() {
        this._createForm();
        this.authForm.valueChanges.subscribe(val => {
            this.authError = '';
        });
    }
    isControlInvalid(controlName) {
        const control = this.authForm.controls[controlName];
        const result = control.invalid && control.touched;
        return result;
    }
    onSubmit(e) {
        e.preventDefault();
        const controls = this.authForm.controls;
        if (this.authForm.invalid) {
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
            return;
        }
        this.sendForm();
    }
    sendForm() {
        // заглушка
        if (this.authForm.value.login === 'yurka' && this.authForm.value.password === '12345') {
            this.cookiesService.setCookie('token', this.token, this.cookieOptions);
            this.cookiesService.setCookie('userId', '1', this.cookieOptions);
            this.router.navigate(['/']);
            return;
        }
        else if (this.authForm.value.login === 'yurka1' && this.authForm.value.password === '12345') {
            this.authError = 'Пользователь не найден';
            this.ngOnInit();
            return;
        }
        this.httpService.userAuthorization(this.authForm.value).subscribe(res => {
            console.log(res);
            if (res.error) {
                this.authError = res.error;
                return;
            }
            else {
                // res.value =
                this.cookiesService.setCookie('token', this.token);
                this.router.navigate(['/']);
            }
        }, (error) => {
            console.log(error);
            this.authError = error.statusText;
        });
        this.ngOnInit();
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cookies_service__WEBPACK_IMPORTED_MODULE_3__["CookiesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 15, vars: 6, consts: [[1, "auth"], ["autocomplete", "off", 1, "auth__form", 3, "formGroup", "ngSubmit"], [1, "form-title"], [1, "form-control"], ["formControlName", "login", "type", "text", "autocomplete", "off", "readonly", "", "placeholder", "\u041B\u043E\u0433\u0438\u043D", 3, "focus"], [1, "error"], ["formControlName", "password", "type", "password", "autocomplete", "off", "readonly", "", "placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C", 3, "focus"], [1, "form-btn"], ["class", "data__invalid", 4, "ngIf"], [1, "data__invalid"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthComponent_Template_form_ngSubmit_1_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function AuthComponent_Template_input_focus_5_listener($event) { return $event.srcElement.removeAttribute("readonly"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function AuthComponent_Template_input_focus_9_listener($event) { return $event.srcElement.removeAttribute("readonly"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0412\u0445\u043E\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AuthComponent_div_14_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.isControlInvalid("login"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.isControlInvalid("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authError);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".auth[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n}\n.auth__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid #ced4da;\n  background-color: #fff;\n  padding: 32px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 16px;\n}\n.auth__form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.auth__form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  height: 40px;\n  width: 300px;\n  background-color: #fff;\n  padding: 8px;\n  border-radius: 4px;\n}\n.auth__form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n}\n.auth__form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: red;\n}\n.auth__form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input.ng-touched.ng-valid[_ngcontent-%COMP%] {\n  border-color: green;\n}\n.auth__form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  color: red;\n  opacity: 0;\n  transition: all 0.2s linear;\n  font-size: 11px;\n}\n.auth__form[_ngcontent-%COMP%]   .error.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.auth__form[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n}\n.auth__form[_ngcontent-%COMP%]   .form-btn[_ngcontent-%COMP%] {\n  border: 0;\n  border: 1px solid transparent;\n  background-color: #007bff;\n  color: #fff;\n  border-radius: 4px;\n  height: 40px;\n  width: 300px;\n  transition: all 0.3s linear;\n  font-size: 16px;\n}\n.auth__form[_ngcontent-%COMP%]   .form-btn[_ngcontent-%COMP%]:hover {\n  background-color: #0069d9;\n}\n.auth__form[_ngcontent-%COMP%]   .data__invalid[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvX3ZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFESjtBQUVJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQ0ZxQjtFREdyQixhQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsbUJDTXVCO0FETi9CO0FBQ1E7RUFDSSxrQkFBQTtBQUNaO0FBQVk7RUFDSSx5QkFBQTtFQUNBLFlDWWU7RURYZixZQUFBO0VBQ0Esc0JDWmE7RURhYixZQUFBO0VBQ0Esa0JBQUE7QUFFaEI7QUFEZ0I7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUFHcEI7QUFBZ0I7RUFDSSxpQkFBQTtBQUVwQjtBQUFnQjtFQUNJLG1CQUFBO0FBRXBCO0FBRVE7RUFDSSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUM1Q21CO0FENEMvQjtBQUNZO0VBQ0ksVUFBQTtBQUNoQjtBQUVRO0VBQ0ksb0JDN0JtQjtBRDZCL0I7QUFFUTtFQUNJLFNBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0M5Q2lCO0VEK0NqQixrQkFBQTtFQUNBLFlDMUJtQjtFRDJCbkIsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUMzRG1CO0FEMkQvQjtBQUVZO0VBQ0kseUJBQUE7QUFBaEI7QUFHUTtFQUNJLFVBQUE7RUFDQSxlQ3JFbUI7QURvRS9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdfdmFycy5zY3NzJztcclxuXHJcbi5hdXRoIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgJl9fZm9ybSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogJHBhZGRpbmctd2lkdGgqMjtcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHBhZGRpbmctd2lkdGg7XHJcbiAgICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICRwYWRkaW5nLXdpZHRoIC8gNDtcclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJGJ0bi1zaXplO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICRzaWRlYmFyLXdpZHRoICogMztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICRwYWRkaW5nLXdpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRwYWRkaW5nLXdpZHRoIC8gNDtcclxuICAgICAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjODBiZGZmO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwxMjMsMjU1LC4yNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLm5nLXRvdWNoZWQubmctaW52YWxpZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLm5nLXRvdWNoZWQubmctdmFsaWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmVycm9yIHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNtYWxsO1xyXG4gICAgICAgICAgICAmLnNob3cge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybS10aXRsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZy13aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0tYnRuIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHBhZGRpbmctd2lkdGggLyA0O1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICRidG4tc2l6ZTtcclxuICAgICAgICAgICAgd2lkdGg6ICRzaWRlYmFyLXdpZHRoICogMztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LW1pZGRsZTtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjlkOTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGF0YV9faW52YWxpZCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc21hbGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gZm9udHNcclxuJGZvbnQtc21hbGw6ICAgICAgICAgICAgICAgICAgIDExcHg7XHJcbiRmb250LW1haW46ICAgICAgICAgICAgICAgICAgICAxNHB4O1xyXG4kZm9udC1taWRkbGU6ICAgICAgICAgICAgICAgICAgMTZweDtcclxuJGZvbnQtbGFyZ2U6ICAgICAgICAgICAgICAgICAgIDE4cHg7XHJcbiRpY29uLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAkZm9udC1sYXJnZTtcclxuXHJcbi8vIGNvbG9yc1xyXG4kY29sb3ItbWFpbjogICAgICAgICAgICAgICAgICMwMDA7XHJcbiRmaXJtLWNvbG9yOiAgICAgICAgICAgICAgICAgI2NlZDRkYTtcclxuJGZpcm0tY29sb3ItZGFyazogICAgICAgICAgICByZ2IoMTgwLCAxODAsIDE4MCk7XHJcbiRjb2xvci13aGl0ZTogICAgICAgICAgICAgICAgI2ZmZjtcclxuJHJvdGF0ZS1ibG9jay1jb2xvcjogICAgICAgICByZ2IoMTU4LCAxNTcsIDIxOSk7XHJcbiRhY3RpdmUtaXRlbS1jb2xvcjogICAgICAgICAgI2I0YjRiNDtcclxuXHJcbi8vIGZvbnQtd2VpZ2h0XHJcbiRmb250LXdlaWdodC1saWdodDogICAgICAgICAgICAzMDA7XHJcbiRmb250LXdlaWdodC1tYWluOiAgICAgICAgICAgICA0MDA7XHJcbiRmb250LXdlaWdodC1ib2xkOiAgICAgICAgICAgICA2MDA7XHJcbiRmb250LXdlaWdodC1tZWRpdW06ICAgICAgICAgICA1MDA7XHJcblxyXG4vLyBwYWRkaW5nc1xyXG4kcGFkZGluZy13aWR0aDogICAgICAgICAgICAgICAgMTZweDtcclxuXHJcbi8vIHNpZGViYXJcclxuJHNpZGViYXItd2lkdGg6ICAgICAgICAgICAgICAgIDEwMHB4O1xyXG5cclxuLy8gc2l6ZVxyXG4kY2FudmFzLXdpZHRoOiAgICAgICAgICAgICAgICAgODAwcHg7XHJcbiRjYW52YXMtaGVpZ2h0OiAgICAgICAgICAgICAgICA2MDBweDtcclxuJGxpc3RpbmdzLXdpZHRoOiAgICAgICAgICAgICAgIDEwMHB4O1xyXG4kaWNvbi1zaXplOiAgICAgICAgICAgICAgICAgICAgMzBweDtcclxuJHRpdGxlLWhlaWdodDogICAgICAgICAgICAgICAgIDMwcHg7XHJcbiRidG4tc2l6ZTogICAgICAgICAgICAgICAgICAgICA0MHB4O1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: src_app_services_cookies_service__WEBPACK_IMPORTED_MODULE_3__["CookiesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/markup/markup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/markup/markup.component.ts ***!
  \*******************************************************/
/*! exports provided: MarkupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkupComponent", function() { return MarkupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _appview_appview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appview/appview.component */ "./src/app/components/appview/appview.component.ts");




class MarkupComponent {
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
MarkupComponent.ɵfac = function MarkupComponent_Factory(t) { return new (t || MarkupComponent)(); };
MarkupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarkupComponent, selectors: [["app-root"]], decls: 5, vars: 2, consts: [[1, "main"], [3, "changeImage", "\u0441hangesFiles"], [1, "appview-wrap"], [3, "currentMove", "files"]], template: function MarkupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-sidebar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeImage", function MarkupComponent_Template_app_sidebar_changeImage_2_listener($event) { return ctx.changeImage($event); })("\u0441hangesFiles", function MarkupComponent_Template_app_sidebar__hangesFiles_2_listener($event) { return ctx.uploadFiles = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-appview", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentMove", ctx.move)("files", ctx.uploadFiles);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _appview_appview_component__WEBPACK_IMPORTED_MODULE_2__["AppviewComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  display: flex;\n}\n\naside[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100px;\n}\n\n.appview-wrap[_ngcontent-%COMP%] {\n  width: calc(100vw - 100px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXJrdXAvbWFya3VwLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL192YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0FBREo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsWUNrQjJCO0FEbEIvQjs7QUFHQTtFQUNJLDBCQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hcmt1cC9tYXJrdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdfdmFycy5zY3NzJztcclxuXHJcbi5tYWluIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuYXNpZGUge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAkc2lkZWJhci13aWR0aDtcclxufVxyXG5cclxuLmFwcHZpZXctd3JhcCB7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtICN7JHNpZGViYXItd2lkdGh9KTtcclxufSIsIi8vIGZvbnRzXHJcbiRmb250LXNtYWxsOiAgICAgICAgICAgICAgICAgICAxMXB4O1xyXG4kZm9udC1tYWluOiAgICAgICAgICAgICAgICAgICAgMTRweDtcclxuJGZvbnQtbWlkZGxlOiAgICAgICAgICAgICAgICAgIDE2cHg7XHJcbiRmb250LWxhcmdlOiAgICAgICAgICAgICAgICAgICAxOHB4O1xyXG4kaWNvbi1mb250LXNpemU6ICAgICAgICAgICAgICAgJGZvbnQtbGFyZ2U7XHJcblxyXG4vLyBjb2xvcnNcclxuJGNvbG9yLW1haW46ICAgICAgICAgICAgICAgICAjMDAwO1xyXG4kZmlybS1jb2xvcjogICAgICAgICAgICAgICAgICNjZWQ0ZGE7XHJcbiRmaXJtLWNvbG9yLWRhcms6ICAgICAgICAgICAgcmdiKDE4MCwgMTgwLCAxODApO1xyXG4kY29sb3Itd2hpdGU6ICAgICAgICAgICAgICAgICNmZmY7XHJcbiRyb3RhdGUtYmxvY2stY29sb3I6ICAgICAgICAgcmdiKDE1OCwgMTU3LCAyMTkpO1xyXG4kYWN0aXZlLWl0ZW0tY29sb3I6ICAgICAgICAgICNiNGI0YjQ7XHJcblxyXG4vLyBmb250LXdlaWdodFxyXG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICAgMzAwO1xyXG4kZm9udC13ZWlnaHQtbWFpbjogICAgICAgICAgICAgNDAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICAgNjAwO1xyXG4kZm9udC13ZWlnaHQtbWVkaXVtOiAgICAgICAgICAgNTAwO1xyXG5cclxuLy8gcGFkZGluZ3NcclxuJHBhZGRpbmctd2lkdGg6ICAgICAgICAgICAgICAgIDE2cHg7XHJcblxyXG4vLyBzaWRlYmFyXHJcbiRzaWRlYmFyLXdpZHRoOiAgICAgICAgICAgICAgICAxMDBweDtcclxuXHJcbi8vIHNpemVcclxuJGNhbnZhcy13aWR0aDogICAgICAgICAgICAgICAgIDgwMHB4O1xyXG4kY2FudmFzLWhlaWdodDogICAgICAgICAgICAgICAgNjAwcHg7XHJcbiRsaXN0aW5ncy13aWR0aDogICAgICAgICAgICAgICAxMDBweDtcclxuJGljb24tc2l6ZTogICAgICAgICAgICAgICAgICAgIDMwcHg7XHJcbiR0aXRsZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAzMHB4O1xyXG4kYnRuLXNpemU6ICAgICAgICAgICAgICAgICAgICAgNDBweDtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './markup.component.html',
                styleUrls: ['./markup.component.scss']
            }]
    }], function () { return []; }, null); })();


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
        this.httpService.send();
    }
    changesImages(event) {
        const files = Array.from(event.srcElement.files);
        this.files = files.map((file, i) => {
            return { id: i, name: `${i}`, file, objects: this.searchObjects.map(el => Object.assign({}, el)) };
        });
        this.сhangesFiles.emit(this.files);
    }
    getImage() {
        this.httpService.getImage().subscribe((image) => {
            this.files.push(image);
        });
        this.сhangesFiles.emit(this.files);
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
    } }, styles: ["[_nghost-%COMP%]   .nav[_ngcontent-%COMP%] {\n  box-shadow: 3px -1px 5px 0px #ced4da;\n  border-right: 1px solid #ced4da;\n  height: 100%;\n}\n[_nghost-%COMP%]   .nav__btn[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: transparent;\n  width: 100%;\n  height: 40px;\n  border: 0;\n  border-bottom: 1px solid #ced4da;\n  transition: all 0.3s linear;\n  font-weight: 500;\n}\n[_nghost-%COMP%]   .nav__btn[_ngcontent-%COMP%]:hover {\n  background-color: #b4b4b4;\n  color: #fff;\n}\n[_nghost-%COMP%]   .nav__btn[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  opacity: 0;\n  color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvX3ZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLG9DQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0FBRlI7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUNxQnVCO0VEcEJ2QixTQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBRlI7QUFJUTtFQUNJLHlCQ1RpQjtFRFVqQixXQ1RpQjtBRE83QjtBQUtRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUhaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdfdmFycy5zY3NzJztcclxuXHJcbjpob3N0IHtcclxuICAgIC5uYXYge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAtMXB4IDVweCAwcHggJGZpcm0tY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGZpcm0tY29sb3I7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLm5hdl9fYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAkYnRuLXNpemU7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZmlybS1jb2xvcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGxpbmVhcjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpcm0tY29sb3ItZGFyaztcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIGZvbnRzXHJcbiRmb250LXNtYWxsOiAgICAgICAgICAgICAgICAgICAxMXB4O1xyXG4kZm9udC1tYWluOiAgICAgICAgICAgICAgICAgICAgMTRweDtcclxuJGZvbnQtbWlkZGxlOiAgICAgICAgICAgICAgICAgIDE2cHg7XHJcbiRmb250LWxhcmdlOiAgICAgICAgICAgICAgICAgICAxOHB4O1xyXG4kaWNvbi1mb250LXNpemU6ICAgICAgICAgICAgICAgJGZvbnQtbGFyZ2U7XHJcblxyXG4vLyBjb2xvcnNcclxuJGNvbG9yLW1haW46ICAgICAgICAgICAgICAgICAjMDAwO1xyXG4kZmlybS1jb2xvcjogICAgICAgICAgICAgICAgICNjZWQ0ZGE7XHJcbiRmaXJtLWNvbG9yLWRhcms6ICAgICAgICAgICAgcmdiKDE4MCwgMTgwLCAxODApO1xyXG4kY29sb3Itd2hpdGU6ICAgICAgICAgICAgICAgICNmZmY7XHJcbiRyb3RhdGUtYmxvY2stY29sb3I6ICAgICAgICAgcmdiKDE1OCwgMTU3LCAyMTkpO1xyXG4kYWN0aXZlLWl0ZW0tY29sb3I6ICAgICAgICAgICNiNGI0YjQ7XHJcblxyXG4vLyBmb250LXdlaWdodFxyXG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICAgMzAwO1xyXG4kZm9udC13ZWlnaHQtbWFpbjogICAgICAgICAgICAgNDAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICAgNjAwO1xyXG4kZm9udC13ZWlnaHQtbWVkaXVtOiAgICAgICAgICAgNTAwO1xyXG5cclxuLy8gcGFkZGluZ3NcclxuJHBhZGRpbmctd2lkdGg6ICAgICAgICAgICAgICAgIDE2cHg7XHJcblxyXG4vLyBzaWRlYmFyXHJcbiRzaWRlYmFyLXdpZHRoOiAgICAgICAgICAgICAgICAxMDBweDtcclxuXHJcbi8vIHNpemVcclxuJGNhbnZhcy13aWR0aDogICAgICAgICAgICAgICAgIDgwMHB4O1xyXG4kY2FudmFzLWhlaWdodDogICAgICAgICAgICAgICAgNjAwcHg7XHJcbiRsaXN0aW5ncy13aWR0aDogICAgICAgICAgICAgICAxMDBweDtcclxuJGljb24tc2l6ZTogICAgICAgICAgICAgICAgICAgIDMwcHg7XHJcbiR0aXRsZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAzMHB4O1xyXG4kYnRuLXNpemU6ICAgICAgICAgICAgICAgICAgICAgNDBweDtcclxuIl19 */"] });
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

/***/ "./src/app/interface/drow.ts":
/*!***********************************!*\
  !*** ./src/app/interface/drow.ts ***!
  \***********************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
var Status;
(function (Status) {
    Status[Status["Resize"] = 0] = "Resize";
    Status[Status["Rotate"] = 1] = "Rotate";
    Status[Status["Moving"] = 2] = "Moving";
    Status[Status["Disabled"] = 3] = "Disabled";
    Status[Status["Draw"] = 4] = "Draw";
    Status[Status["Free"] = 5] = "Free";
    Status[Status["Grab"] = 6] = "Grab";
})(Status || (Status = {}));


/***/ }),

/***/ "./src/app/pipe/recount.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipe/recount.pipe.ts ***!
  \**************************************/
/*! exports provided: Axis, RecountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Axis", function() { return Axis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecountPipe", function() { return RecountPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var Axis;
(function (Axis) {
    Axis[Axis["X"] = 0] = "X";
    Axis[Axis["Y"] = 1] = "Y";
})(Axis || (Axis = {}));
class RecountPipe {
    transform(object, pointNum, axis) {
        let PointNew;
        if (object.rotate) {
            const x = this.countCoordinate(object, pointNum, Axis.X);
            const y = this.countCoordinate(object, pointNum, Axis.Y);
            PointNew = { x, y };
        }
        else {
            PointNew = object[`point${pointNum}`];
        }
        PointNew = {
            x: parseInt(`${PointNew.x}`, 10),
            y: parseInt(`${PointNew.y}`, 10),
        };
        return axis === undefined ? PointNew : PointNew[axis === Axis.X ? 'x' : 'y'];
    }
    countCoordinate(object, pointNum, axis) {
        const deg = object.rotate * Math.PI / 180;
        const point = object[`point${pointNum}`];
        const centerX = (object.point2.x + object.point1.x) / 2;
        const centerY = (object.point2.y + object.point1.y) / 2;
        switch (axis) {
            case Axis.X:
                return centerX + (point.x - centerX) * Math.cos(-deg) - (point.y - centerY) * Math.sin(-deg);
            case Axis.Y:
                return centerY + (point.x - centerX) * Math.sin(-deg) + (point.y - centerY) * Math.cos(-deg);
        }
    }
}
RecountPipe.ɵfac = function RecountPipe_Factory(t) { return new (t || RecountPipe)(); };
RecountPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "recount", type: RecountPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecountPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'recount',
                pure: false,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/cookies.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/cookies.service.ts ***!
  \*********************************************/
/*! exports provided: CookiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookiesService", function() { return CookiesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CookiesService {
    constructor() { }
    getItem(key) {
        const matches = document.cookie.match(new RegExp('(?:^|; )' + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    setCookie(key, value, options = {}) {
        options = Object.assign({ path: '/' }, options);
        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }
        let updatedCookie = encodeURIComponent(key) + '=' + encodeURIComponent(value);
        for (const optionKey of Object.keys(options)) {
            updatedCookie += '; ' + optionKey;
            const optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += '=' + optionValue;
            }
        }
        document.cookie = updatedCookie;
    }
    deleteCookie(key) {
        this.setCookie(key, '', { 'max-age': -1 });
    }
}
CookiesService.ɵfac = function CookiesService_Factory(t) { return new (t || CookiesService)(); };
CookiesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CookiesService, factory: CookiesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookiesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _cookies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cookies.service */ "./src/app/services/cookies.service.ts");







class HttpService {
    constructor(http, cookiesService) {
        this.http = http;
        this.cookiesService = cookiesService;
        this.apiAuthUrl = 'authorization';
        this.apiGetImageUrl = 'getimages';
        this.isSendData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getImage() {
        const userId = this.cookiesService.getItem('userId');
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('userId', userId.toString());
        return this.http.get(this.apiGetImageUrl, { params });
    }
    send() {
        this.isSendData.next();
    }
    sendImage(files) {
        files.forEach(file => {
            file.objects.forEach(object => {
                var _a;
                (_a = object.rects) === null || _a === void 0 ? void 0 : _a.forEach(rect => {
                    rect = { point1: rect.point1, point2: rect.point2, rotate: rect.rotate };
                });
            });
        });
        console.log(files);
        // this.http.post('https://localhost:3000', files);
    }
    userAuthorization(data) {
        const authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'my-auth-token');
        return this.http.post(this.apiAuthUrl, data, { headers: authHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            return res;
        }));
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cookies_service__WEBPACK_IMPORTED_MODULE_4__["CookiesService"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _cookies_service__WEBPACK_IMPORTED_MODULE_4__["CookiesService"] }]; }, null); })();


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

/***/ "./src/app/services/resize.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/resize.service.ts ***!
  \********************************************/
/*! exports provided: ResizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeService", function() { return ResizeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pipe_recount_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipe/recount.pipe */ "./src/app/pipe/recount.pipe.ts");
/* harmony import */ var _draw_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draw.service */ "./src/app/services/draw.service.ts");




class ResizeService {
    constructor(recountPipe, drawService) {
        this.recountPipe = recountPipe;
        this.drawService = drawService;
        this.resizeStartPoint = { x: 0, y: 0 };
        this.resizeEndPoint = { x: 0, y: 0 };
    }
    startResize(e) {
        this.resizeStartPoint.x = e.pageX;
        this.resizeStartPoint.y = e.pageY;
    }
    resizeMove(e, object, canvas, block, allObjects) {
        const oldObject = Object.assign(object);
        const point1 = this.rotatePoint(oldObject.point1, oldObject);
        const moveX = e.pageX - this.resizeStartPoint.x;
        const moveY = e.pageY - this.resizeStartPoint.y;
        const point2 = {
            x: this.rotatePoint(oldObject.point2, oldObject).x + moveX,
            y: this.rotatePoint(oldObject.point2, oldObject).y + moveY
        };
        this.resizeEndPoint = this.recountPipe.transform({ point1, point2, rotate: -oldObject.rotate }, 2);
        block.nativeElement.style.width = `${Math.abs(this.resizeEndPoint.x - object.point1.x)}px`;
        block.nativeElement.style.height = `${Math.abs(this.resizeEndPoint.y - object.point1.y)}px`;
        this.refreshRects(canvas, allObjects, object);
    }
    resizeEnd() {
        return this.resizeEndPoint;
    }
    refreshRects(canvas, allObjects, object) {
        this.drawService.clearDraw(canvas);
        allObjects.forEach((el) => {
            if (object.num === el.num) {
                this.drawService.drawRect(canvas, {
                    num: el.num,
                    point1: object.point1,
                    point2: this.resizeEndPoint,
                    hisColor: el.hisColor,
                    rotate: el.rotate
                });
            }
            else {
                this.drawService.drawRect(canvas, el);
            }
        });
    }
    rotatePoint(point, oldObject) {
        const angle = -oldObject.rotate * Math.PI / 180;
        const centerPoint = {
            x: (oldObject.point1.x + oldObject.point2.x) / 2,
            y: (oldObject.point1.y + oldObject.point2.y) / 2
        };
        return {
            x: centerPoint.x + (point.x - centerPoint.x) * Math.cos(angle) - (point.y - centerPoint.y) * Math.sin(angle),
            y: centerPoint.y + (point.x - centerPoint.x) * Math.sin(angle) + (point.y - centerPoint.y) * Math.cos(angle)
        };
    }
}
ResizeService.ɵfac = function ResizeService_Factory(t) { return new (t || ResizeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_pipe_recount_pipe__WEBPACK_IMPORTED_MODULE_1__["RecountPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_draw_service__WEBPACK_IMPORTED_MODULE_2__["DrawService"])); };
ResizeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ResizeService, factory: ResizeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _pipe_recount_pipe__WEBPACK_IMPORTED_MODULE_1__["RecountPipe"] }, { type: _draw_service__WEBPACK_IMPORTED_MODULE_2__["DrawService"] }]; }, null); })();


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