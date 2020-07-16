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
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _components_appview_appview_component__WEBPACK_IMPORTED_MODULE_2__["AppviewComponent"]], styles: ["main[_ngcontent-%COMP%] {\n  display: flex;\n}\n\naside[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100px;\n}\n\n.appview-wrap[_ngcontent-%COMP%] {\n  width: calc(100vw - 100px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL192YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsWUNhMkI7QURkL0I7O0FBSUE7RUFDSSwwQkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnX3ZhcnMuc2Nzcyc7XHJcblxyXG5tYWluIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBcclxufVxyXG5hc2lkZSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6ICRzaWRlYmFyLXdpZHRoO1xyXG59XHJcblxyXG4uYXBwdmlldy13cmFwIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gI3skc2lkZWJhci13aWR0aH0pO1xyXG59IiwiLy8gZm9udHNcclxuJGZvbnQtc21hbGw6ICAgICAgICAgICAgICAgICAgICAxMnB4O1xyXG4kZm9udC1tYWluOiAgICAgICAgICAgICAgICAgICAgIDE0cHg7XHJcbiRmb250LWxhcmdlOiAgICAgICAgICAgICAgICAgICAgMThweDtcclxuXHJcbi8vIGNvbG9yc1xyXG4kY29sb3ItbWFpbjogICAgICAgICAgICAgICAgICAjMDAwO1xyXG4kZmlybS1jb2xvcjogICAgICAgICAgICAgICAgICAjY2NjO1xyXG4kZmlybS1jb2xvci1kYXJrOiAgICAgICAgICAgICByZ2IoMTgwLCAxODAsIDE4MCk7XHJcbiRjb2xvci13aGl0ZTogICAgICAgICAgICAgICAgICNmZmY7XHJcblxyXG4vLyBmb250LXdlaWdodFxyXG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICAgICAzMDA7XHJcbiRmb250LXdlaWdodC1tYWluOiAgICAgICAgICAgICAgIDQwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6ICAgICAgICAgICAgICAgNjAwO1xyXG4kZm9udC13ZWlnaHQtbWVkaXVtOiAgICAgICAgICAgICA1MDA7XHJcblxyXG4vLyBwYWRkaW5nc1xyXG4kcGFkZGluZy13aWR0aDogICAgICAgICAgICAgICAgIDE2cHg7XHJcblxyXG4vLyBzaWRlYmFyXHJcbiRzaWRlYmFyLXdpZHRoOiAgICAgICAgICAgICAgICAxMDBweDtcclxuIl19 */"] });
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






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
        _components_appview_appview_component__WEBPACK_IMPORTED_MODULE_4__["AppviewComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
                    _components_appview_appview_component__WEBPACK_IMPORTED_MODULE_4__["AppviewComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["canvas"];
const _c1 = ["rotateBlock"];
const _c2 = ["rotateBtn"];
function AppviewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-width", 100, "%")("max-height", 100, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r0.files[ctx_r0.currentMove].file.name);
} }
function AppviewComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppviewComponent_li_7_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const object_r11 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.onItemClick($event, object_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rect ", i_r12, "");
} }
function AppviewComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("XMin: ", ctx_r2.recountCoordinates(ctx_r2.activeDrawObject, ctx_r2.activeDrawObject.point1, true).x, "");
} }
function AppviewComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("YMin: ", ctx_r3.recountCoordinates(ctx_r3.activeDrawObject, ctx_r3.activeDrawObject.point1, true).y, "");
} }
function AppviewComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("XMax: ", ctx_r4.recountCoordinates(ctx_r4.activeDrawObject, ctx_r4.activeDrawObject.point2, true).x, "");
} }
function AppviewComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("YMax: ", ctx_r5.recountCoordinates(ctx_r5.activeDrawObject, ctx_r5.activeDrawObject.point2, true).y, "");
} }
const _c3 = function (a1) { return { "objects__item": true, "active": a1 }; };
function AppviewComponent_ul_21_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppviewComponent_ul_21_li_1_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const object_r16 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.onObjectClick($event, object_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const object_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c3, i_r17 === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](object_r16.name);
} }
function AppviewComponent_ul_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppviewComponent_ul_21_li_1_Template, 2, 4, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.files[ctx_r6.currentMove].objects);
} }
class AppviewComponent {
    constructor(drawService) {
        this.drawService = drawService;
        this.reader = new FileReader();
        // Для канваса
        this.savedObjects = [];
        this.isRotate = false;
        this.drawObject = {
            point1: { x: 0, y: 0 },
            point2: { x: 0, y: 0 },
            num: 0,
            status: 0 /* Free */
        };
        this.isMouseDown = false;
        this.isDisabled = true;
        // для разворота Элемента
        this.drag = false;
        this.deg = 0;
        this.currentMove = 0;
        this.files = [];
        this.changeOdjects = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.files) {
                return;
            }
            this.isDisabled = this.isRotate = false;
            this.savedObjects = [];
            this.activeObject = this.files[this.currentMove].objects[0];
            this.drawService.clearDraw(this.ctx, this.canvas.nativeElement);
            yield this.readUrl();
        });
    }
    ngAfterViewInit() {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.Rect = this.canvas.nativeElement.getBoundingClientRect();
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
        this.files[this.currentMove].objects.forEach(el => {
            if (el.id === this.activeObject.id) {
                el.rects = this.savedObjects;
            }
        });
        this.drawService.clearDraw(this.ctx, this.canvas.nativeElement, true);
        this.savedObjects = object.rects ? object.rects : [];
        this.activeDrawObject = undefined;
        this.isDisabled = this.isRotate = this.isMouseDown = false;
        if (this.savedObjects.length) {
            this.savedObjects.forEach(obj => {
                this.drawService.drawRect(this.ctx, obj, obj.hisColor, -obj.rotate);
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
        // цвет иконки
        this.rotateBtn.nativeElement.children[0].style.fill = object.hisColor;
        // повверх рисуем доп прямоугольник
        this.rotateBlock.nativeElement.style.width = `${object.point2.x - object.point1.x}px`;
        this.rotateBlock.nativeElement.style.height = `${object.point2.y - object.point1.y}px`;
        this.rotateBlock.nativeElement.style.marginTop = `${object.point1.y}px`;
        this.rotateBlock.nativeElement.style.marginLeft = `${object.point1.x}px`;
        if (object.rotate !== undefined) {
            this.rotateCurrentBlock(object.rotate);
        }
        else {
            this.rotateCurrentBlock(0);
        }
    }
    // рисование
    ctxMouseDown(e) {
        if (this.isDisabled) {
            return;
        }
        this.isMouseDown = true;
        this.drawService.startDraw(this.drawObject, e, this.Rect);
    }
    ctxMouseMove(e) {
        if (this.isMouseDown) {
            this.drawObject = this.drawService.drawInProgres(this.canvas.nativeElement, this.ctx, e, this.drawObject, this.savedObjects);
        }
    }
    ctxMouseUp() {
        if (!this.isMouseDown) {
            return;
        }
        this.isMouseDown = false;
        this.drawObject.status = 0 /* Free */;
        this.drawObject.hisColor = this.drawService.endDraw();
        this.savedObjects.push({
            point1: this.drawObject.point1,
            point2: this.drawObject.point2,
            num: this.savedObjects.length,
            hisColor: this.drawObject.hisColor,
            status: this.drawObject.status
        });
        // this.changeOdjects.emit(this.savedObjects);
    }
    // rotate
    rotateStart() {
        this.drag = !this.drag;
        const block = this.rotateBlock.nativeElement;
        const rect = block.getBoundingClientRect();
        this.rotateBlock.nativeElement.style.cursor = 'grabbing';
        this.centerX = rect.left + (rect.width / 2);
        this.centerY = rect.top + (rect.height / 2);
    }
    rotateProgress(e) {
        if (this.drag) {
            const rotateX = e.pageX - this.centerX;
            const rotateY = e.pageY - this.centerY;
            this.deg = parseInt(`${Math.abs(360 - ((180 / Math.PI) * Math.atan2(rotateY, rotateX)))}`, 10);
            this.rotateCurrentBlock(this.deg);
        }
    }
    rotateEnd() {
        if (!this.drag) {
            return;
        }
        this.drag = false;
        this.rotateBlock.nativeElement.style.cursor = 'grab';
        // чистим канвас
        this.drawService.clearDraw(this.ctx, this.canvas.nativeElement);
        this.savedObjects.forEach(obj => {
            if (this.activeDrawObject.num === obj.num) {
                obj.rotate = this.deg;
            }
            else {
                this.drawService.drawRect(this.ctx, obj, obj.hisColor, -obj.rotate);
            }
        });
        this.drawService.drawRect(this.ctx, this.activeDrawObject, this.activeDrawObject.hisColor, -this.deg);
    }
    rotateCurrentBlock(deg) {
        this.rotateBlock.nativeElement.style.transform = `rotate(${-deg}deg)`;
    }
    recountCoordinates(object, point, isParseInt) {
        if (object.rotate) {
            const deg = object.rotate * Math.PI / 180;
            const width = object.point2.x - object.point1.x;
            const height = object.point2.y - object.point1.y;
            const XCenter = object.point1.x + width / 2;
            const YCenter = object.point1.y + height / 2;
            const x = (point.x - XCenter) * Math.cos(deg) + (YCenter - point.y) * Math.sin(deg) + point.x;
            const y = (XCenter - point.x) * Math.sin(deg) + (YCenter - point.y) * Math.cos(deg) + point.y;
            return {
                x: isParseInt ? parseFloat(x.toFixed(2)) : x,
                y: isParseInt ? parseFloat(y.toFixed(2)) : y
            };
        }
        return point;
    }
}
AppviewComponent.ɵfac = function AppviewComponent_Factory(t) { return new (t || AppviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_draw_service__WEBPACK_IMPORTED_MODULE_2__["DrawService"])); };
AppviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppviewComponent, selectors: [["app-appview"]], viewQuery: function AppviewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.rotateBlock = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.rotateBtn = _t.first);
    } }, inputs: { currentMove: "currentMove", files: "files" }, outputs: { changeOdjects: "changeOdjects" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 31, vars: 11, consts: [[1, "appview"], ["class", "image__container", 4, "ngIf"], [1, "rects"], [1, "rects__title"], ["class", "rects__item", 3, "click", 4, "ngFor", "ngForOf"], [1, "rects__coordinates"], [1, "min-coordinates"], [4, "ngIf"], [1, "max-coordinates"], [1, "objects"], [1, "objects__title"], [1, "appview__canvas", 3, "width", "height", "mousedown", "mousemove", "mouseup"], ["canvas", ""], [1, "rotate__wrap"], [1, "rotate__block", 3, "mousedown", "mousemove", "mouseup", "mouseleave"], ["rotateBlock", ""], ["focusable", "false", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "rotate__btn"], ["rotateBtn", ""], ["fill", "green", "d", "M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"], [1, "image__container"], [3, "src", "alt"], ["image", ""], [1, "rects__item", 3, "click"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"]], template: function AppviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppviewComponent_div_1_Template, 3, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Rects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppviewComponent_li_7_Template, 2, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AppviewComponent_span_10_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AppviewComponent_span_12_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AppviewComponent_span_14_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AppviewComponent_span_16_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "header", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Objects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AppviewComponent_ul_21_Template, 2, 1, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "canvas", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function AppviewComponent_Template_canvas_mousedown_22_listener($event) { return ctx.ctxMouseDown($event); })("mousemove", function AppviewComponent_Template_canvas_mousemove_22_listener($event) { return ctx.ctxMouseMove($event); })("mouseup", function AppviewComponent_Template_canvas_mouseup_22_listener() { return ctx.ctxMouseUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Your browser does not support the HTML5 canvas tag.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function AppviewComponent_Template_div_mousedown_26_listener() { return ctx.rotateStart(); })("mousemove", function AppviewComponent_Template_div_mousemove_26_listener($event) { return ctx.rotateProgress($event); })("mouseup", function AppviewComponent_Template_div_mouseup_26_listener() { return ctx.rotateEnd(); })("mouseleave", function AppviewComponent_Template_div_mouseleave_26_listener() { return ctx.rotateEnd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "svg", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageUrl && ctx.files[ctx.currentMove]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.savedObjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeDrawObject);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeDrawObject);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeDrawObject);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeDrawObject);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageUrl && ctx.files[ctx.currentMove]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 800)("height", 600);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.isRotate ? "block" : "none");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["[_nghost-%COMP%]   .appview[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .image__container[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview__canvas[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n  border: 1px solid #000;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .rotate__wrap[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .image__container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 800px;\n  height: 600px;\n  border: 0;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .rotate__wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .image__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .rects[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100% - 65px);\n  overflow: auto;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .rects[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .objects[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(calc(-100% - 401px), -50%);\n  height: 603px;\n  width: 100px;\n  border: 1px solid #000;\n  border-right: 0;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .objects[_ngcontent-%COMP%] {\n  transform: translate(calc(-100% - 501px), -50%);\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .rects__coordinates[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #b4b4b4;\n  color: #fff;\n  line-height: 1;\n  padding: 5px 8px;\n  width: 201%;\n  margin-left: -101%;\n  height: 35px;\n  font-size: 12px;\n  border-top: 1px solid #000;\n  z-index: 3;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .rects__title[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .objects__title[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  border-bottom: 1px solid #000;\n  background-color: #ffffff;\n  height: 30px;\n  width: 100%;\n  z-index: 1;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .rects__item[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .objects__item[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-bottom: 1px solid #000;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .rects__item[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .rects__item.active[_ngcontent-%COMP%], [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .objects__item[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .objects__item.active[_ngcontent-%COMP%] {\n  background-color: #b4b4b4;\n  color: #fff;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .rotate__btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  z-index: 999;\n}\n[_nghost-%COMP%]   .appview[_ngcontent-%COMP%]   .rotate__block[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #9e9ddb;\n  opacity: 0.9;\n  transform: rotate(0deg);\n  cursor: grab;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHB2aWV3L2FwcHZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQVI7QUFFUTtFQUVJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFEWjtBQUdROztFQUVJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBRFo7QUFFWTs7RUFDSSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFDaEI7QUFHWTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBRGhCO0FBSVE7O0VBRUksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLCtDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFGWjtBQUlRO0VBQ0ksK0NBQUE7QUFGWjtBQUlRO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtBQUZaO0FBSVE7O0VBRUksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFGWjtBQUlROztFQUVJLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0FBRlo7QUFJWTs7O0VBRUkseUJBQUE7RUFDQSxXQUFBO0FBRGhCO0FBSVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFGWjtBQUlRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBRloiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FwcHZpZXcvYXBwdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC5hcHB2aWV3IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAuaW1hZ2VfX2NvbnRhaW5lcixcclxuICAgICAgICAmX19jYW52YXMge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucm90YXRlX193cmFwLFxyXG4gICAgICAgIC5pbWFnZV9fY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmVjdHMge1xyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY1cHgpO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlY3RzLFxyXG4gICAgICAgIC5vYmplY3RzIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKC0xMDAlIC0gNDAxcHgpLCAtNTAlKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MDNweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vYmplY3RzIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoY2FsYygtMTAwJSAtIDUwMXB4KSwgLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZWN0c19fY29vcmRpbmF0ZXMge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiNGI0YjQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDhweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTAxJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVjdHNfX3RpdGxlLFxyXG4gICAgICAgIC5vYmplY3RzX190aXRsZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlY3RzX19pdGVtLFxyXG4gICAgICAgIC5vYmplY3RzX19pdGVtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I0YjRiNDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yb3RhdGVfX2J0biB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJvdGF0ZV9fYmxvY2sge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDE1NywgMjE5KTtcclxuICAgICAgICAgICAgb3BhY2l0eTogLjk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICBjdXJzb3I6IGdyYWI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-appview',
                templateUrl: './appview.component.html',
                styleUrls: ['./appview.component.scss'],
            }]
    }], function () { return [{ type: _services_draw_service__WEBPACK_IMPORTED_MODULE_2__["DrawService"] }]; }, { currentMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], files: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], changeOdjects: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
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


const _c0 = ["input1"];
const _c1 = ["input2"];
class SidebarComponent {
    constructor() {
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
    }
    changesImages(event) {
        const files = Array.from(event.srcElement.files);
        this.files = files.map((file, i) => {
            return { id: i, name: `${i}`, file, objects: this.searchObjects };
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
        this.input1.nativeElement.value = '';
        this.input2.nativeElement.value = '';
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input2 = _t.first);
    } }, hostBindings: function SidebarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function SidebarComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, outputs: { сhangesFiles: "\u0441hangesFiles", changeImage: "changeImage" }, decls: 23, vars: 0, consts: [[1, "nav"], [1, "nav__list"], [1, "nav__item"], [1, "nav__btn"], ["value", "Open", "type", "file", "accept", "image/*", "title", "", 3, "focus", "change"], ["input1", ""], ["value", "Open", "type", "file", "accept", "image/*", "title", "", "multiple", "", 3, "focus", "change"], ["input2", ""], [1, "nav__btn", 3, "click"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Open File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function SidebarComponent_Template_input_focus_6_listener() { return ctx.clean(); })("change", function SidebarComponent_Template_input_change_6_listener($event) { return ctx.changesImages($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Open Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function SidebarComponent_Template_input_focus_12_listener() { return ctx.clean(); })("change", function SidebarComponent_Template_input_change_12_listener($event) { return ctx.changesImages($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_15_listener() { return ctx.nextImg(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_18_listener() { return ctx.nextImg(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Prev Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_21_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]   .nav[_ngcontent-%COMP%] {\n  box-shadow: 3px -1px 5px 0px #ccc;\n  border-right: 1px solid #ccc;\n  height: 100%;\n}\n[_nghost-%COMP%]   .nav__btn[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: transparent;\n  width: 100%;\n  height: 80px;\n  border: 0;\n  border-bottom: 1px solid #ccc;\n  transition: all 0.3s linear;\n  font-weight: 500;\n}\n[_nghost-%COMP%]   .nav__btn[_ngcontent-%COMP%]:hover {\n  background-color: #b4b4b4;\n  color: #fff;\n}\n[_nghost-%COMP%]   .nav__btn[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  opacity: 0;\n  color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvX3ZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FBRlI7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQUlRO0VBQ0kseUJDWGtCO0VEWWxCLFdDWGtCO0FEUzlCO0FBS1E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBSFoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ192YXJzLnNjc3MnO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgLm5hdiB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IC0xcHggNXB4IDBweCAkZmlybS1jb2xvcjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkZmlybS1jb2xvcjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubmF2X19idG4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZmlybS1jb2xvcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGxpbmVhcjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpcm0tY29sb3ItZGFyaztcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn0iLCIvLyBmb250c1xyXG4kZm9udC1zbWFsbDogICAgICAgICAgICAgICAgICAgIDEycHg7XHJcbiRmb250LW1haW46ICAgICAgICAgICAgICAgICAgICAgMTRweDtcclxuJGZvbnQtbGFyZ2U6ICAgICAgICAgICAgICAgICAgICAxOHB4O1xyXG5cclxuLy8gY29sb3JzXHJcbiRjb2xvci1tYWluOiAgICAgICAgICAgICAgICAgICMwMDA7XHJcbiRmaXJtLWNvbG9yOiAgICAgICAgICAgICAgICAgICNjY2M7XHJcbiRmaXJtLWNvbG9yLWRhcms6ICAgICAgICAgICAgIHJnYigxODAsIDE4MCwgMTgwKTtcclxuJGNvbG9yLXdoaXRlOiAgICAgICAgICAgICAgICAgI2ZmZjtcclxuXHJcbi8vIGZvbnQtd2VpZ2h0XHJcbiRmb250LXdlaWdodC1saWdodDogICAgICAgICAgICAgIDMwMDtcclxuJGZvbnQtd2VpZ2h0LW1haW46ICAgICAgICAgICAgICAgNDAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICAgICA2MDA7XHJcbiRmb250LXdlaWdodC1tZWRpdW06ICAgICAgICAgICAgIDUwMDtcclxuXHJcbi8vIHBhZGRpbmdzXHJcbiRwYWRkaW5nLXdpZHRoOiAgICAgICAgICAgICAgICAgMTZweDtcclxuXHJcbi8vIHNpZGViYXJcclxuJHNpZGViYXItd2lkdGg6ICAgICAgICAgICAgICAgIDEwMHB4O1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return []; }, { сhangesFiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], changeImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], input1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input1', { static: false }]
        }], input2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input2', { static: false }]
        }], handleKeyboardEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keydown', ['$event']]
        }] }); })();


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
    drawRect(ctx, drawObject, currentcolor, deg = 0) {
        if (deg !== 0) {
            ctx.save();
            const objWidth = Math.abs(drawObject.point2.x - drawObject.point1.x) / 2;
            const objHeight = Math.abs(drawObject.point2.y - drawObject.point1.y) / 2;
            const centerX = drawObject.point2.x - objWidth;
            const centerY = drawObject.point2.y - objHeight;
            ctx.translate(centerX, centerY);
            ctx.rotate(deg * Math.PI / 180);
            ctx.translate(-centerX, -centerY);
        }
        ctx.beginPath();
        ctx.rect(drawObject.point1.x, drawObject.point1.y, drawObject.point2.x - drawObject.point1.x, drawObject.point2.y - drawObject.point1.y);
        ctx.closePath();
        ctx.imageSmoothingEnabled = true;
        ctx.strokeStyle = currentcolor;
        ctx.lineWidth = this.lineWidth;
        ctx.lineCap = 'square';
        ctx.stroke();
        ctx.restore();
    }
    startDraw(object, e, Rect) {
        this.currentColor = this.drawColors.find(el => !el.isUsed);
        object.point1 = object.point2 = this.getCoordinates(e);
        object.hisColor = this.currentColor ? this.currentColor.color : this.defaultColor;
        object.status = 1 /* InProgress */;
        return object;
    }
    drawInProgres(canvas, ctx, e, drawObject, objects) {
        drawObject.point2 = this.getCoordinates(e);
        this.clearDraw(ctx, canvas);
        // так как с холста все удалили рисуем заново существующие
        objects.forEach((el) => {
            this.drawRect(ctx, el, el.hisColor, -el.rotate);
        });
        this.drawRect(ctx, drawObject, drawObject.hisColor);
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
    clearDraw(ctx, canvas, isRenewableColors = false) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (isRenewableColors) {
            this.renewableColors();
        }
    }
    renewableColors() {
        this.drawColors.forEach(el => el.isUsed = false);
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

module.exports = __webpack_require__(/*! C:\Users\lua\Documents\litvinov\sendCoordinates\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map