(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form-group\">\n    <app-forms></app-forms>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <app-user-list></app-user-list>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./safe-html.pipe */ "./src/app/safe-html.pipe.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"],
                _forms_forms_component__WEBPACK_IMPORTED_MODULE_7__["FormsComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"],
                _safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__["SafeHtml"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/forms/forms.component.html":
/*!********************************************!*\
  !*** ./src/app/forms/forms.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input [(ngModel)]=\"name\" placeholder=\"name\" class=\"form-control\">\n<input [(ngModel)]=\"dob\" placeholder=\"dob\" class=\"form-control\">\n<input [(ngModel)]=\"postal\" placeholder=\"postal\" class=\"form-control\">\n<input class=\"form-control-file\" name=\"imgUrl\" type=\"file\" accept=\"image/*\" (change)=\"handleInputChange($event)\" />\n<button class=\"btn btn-primary\" (click)=\"addUser(name, dob, postal)\">Add</button>"

/***/ }),

/***/ "./src/app/forms/forms.component.sass":
/*!********************************************!*\
  !*** ./src/app/forms/forms.component.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "jw-modal {\n  display: none; }\n  jw-modal .jw-modal {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    overflow: auto; }\n  jw-modal .jw-modal .jw-modal-body {\n      padding: 20px;\n      background: #fff;\n      margin: 40px; }\n  .jw-modal-background {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #000;\n  opacity: 0.75;\n  z-index: 900; }\n  body.jw-modal-open {\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRzdmVyaGV5ZW4vRGVza3RvcC9TY2hvb2wvU3RhZ2UvVXNlci1saXN0L3NyYy9hcHAvZm9ybXMvZm9ybXMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFhLEVBQUE7RUFEakI7SUFJUSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUVQLGFBQWE7SUFFYixjQUFjLEVBQUE7RUFadEI7TUFlWSxhQUFhO01BQ2IsZ0JBQWdCO01BQ2hCLFlBQVksRUFBQTtFQUV4QjtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZLEVBQUE7RUFFZDtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9ybXMvZm9ybXMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmp3LW1vZGFsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgLmp3LW1vZGFsIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgei1pbmRleDogMTAwMDtcblxuICAgICAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICAgICAuanctbW9kYWwtYm9keSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIG1hcmdpbjogNDBweDsgfSB9IH1cblxuLmp3LW1vZGFsLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC43NTtcbiAgei1pbmRleDogOTAwOyB9XG5cbmJvZHkuanctbW9kYWwtb3BlbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/forms/forms.component.ts":
/*!******************************************!*\
  !*** ./src/app/forms/forms.component.ts ***!
  \******************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



var FormsComponent = /** @class */ (function () {
    function FormsComponent(_user) {
        this._user = _user;
        this.imageSrc = '';
    }
    FormsComponent.prototype.ngOnInit = function () {
    };
    FormsComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    FormsComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.imageSrc = reader.result;
        console.log(this.imageSrc);
    };
    FormsComponent.prototype.addUser = function (name, dob, postal) {
        var _this = this;
        name = name.trim();
        var imgPath = this.imageSrc;
        this._user.insertUser({ name: name, dob: dob, postal: postal, imgPath: imgPath })
            .subscribe(function (user) {
            console.log(user);
            _this.users.push(user);
        });
    };
    FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! ./forms.component.html */ "./src/app/forms/forms.component.html"),
            styles: [__webpack_require__(/*! ./forms.component.sass */ "./src/app/forms/forms.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/modal.service.ts":
/*!**********************************!*\
  !*** ./src/app/modal.service.ts ***!
  \**********************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal.service */ "./src/app/modal.service.ts");



var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', function (e) {
            if (e.target.className === 'jw-modal') {
                modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    };
    // close modal
    ModalComponent.prototype.close = function () {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'jw-modal',
            template: "<div class=\"jw-modal\">\n            <div class=\"jw-modal-body\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div class=\"jw-modal-background\"></div>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/safe-html.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/safe-html.pipe.ts ***!
  \***********************************/
/*! exports provided: SafeHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtml", function() { return SafeHtml; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafeHtml = /** @class */ (function () {
    function SafeHtml(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SafeHtml.prototype.transform = function (html) {
        return this._sanitizer.bypassSecurityTrustResourceUrl(html);
    };
    SafeHtml = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safeHtml'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafeHtml);
    return SafeHtml;
}());



/***/ }),

/***/ "./src/app/user-list/user-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-list/user-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let user of users\" class=\"col-md-3 cust_blogteaser custom-list\">\n  <a href=\"#\">\n    <img class=\"custom-list-img center-block img-fluid\" [src]=\"user.imgPath | safeHtml\"></a>\n  <h3 class=\"custom-h3\">\n    {{user.name | uppercase }}<br></h3>\n  <p class=\"text-secondary custom-text\">\n    GeboorteDatum: {{user.dob}}</p>\n  <p class=\"text-secondary custom-text\">\n    Postcode: {{user.postal}}</p>\n    <a class=\"h4\" href=\"#\">\n      <i (click)=\"openModal('custom-modal-1', user.id)\" class=\"fa fa-edit\" style=\"margin-left:23px;\"></i>\n      <i (click)=\"deleteUser(user.id)\" class=\"fa fa-trash\" style=\"margin-left:23px;\"></i>\n    </a>\n</div>\n\n\n<jw-modal id=\"custom-modal-1\">\n  <h1>Edit User</h1>\n  <input type=\"text\" [(ngModel)]=\"name\" placeholder=\"Name\">\n  <input type=\"text\" [(ngModel)]=\"dob\" placeholder=\"Dob\">\n  <input type=\"text\" [(ngModel)]=\"postal\" placeholder=\"Postal\">\n  <input type=\"text\" >\n  <button class=\"btn btn-primary\" (click)=\"editUser(id, name, dob, postal)\">Edit</button>\n  <button class=\"btn btn-danger\" (click)=\"closeModal('custom-modal-1')\">Close</button>\n</jw-modal>"

/***/ }),

/***/ "./src/app/user-list/user-list.component.sass":
/*!****************************************************!*\
  !*** ./src/app/user-list/user-list.component.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap; }\n  ul li {\n    background: #eeeeee;\n    padding: 1em;\n    margin-right: 10px;\n    width: 20%;\n    height: 200px;\n    margin-bottom: 1em;\n    display: flex;\n    flex-direction: column; }\n  ul li p {\n      margin: 0; }\n  ul li p.name {\n      font-weight: bold;\n      font-size: 1.2rem; }\n  ul li p.country {\n      text-transform: uppercase;\n      font-size: .9rem;\n      flex-grow: 1%; }\n  jw-modal {\n  display: none; }\n  .jw-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  overflow: auto; }\n  .jw-modal-body {\n  padding: 20px;\n  background: #fff;\n  margin: 40px; }\n  .jw-modal-background {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #000;\n  opacity: 0.75;\n  z-index: 900; }\n  body.jw-modal-open {\n  overflow: hidden; }\n  .custom-list {\n  box-shadow: 2px 2px grey;\n  margin: 10px;\n  padding-bottom: 20px;\n  margin-bottom: 32px;\n  background-color: #4E4E50; }\n  .custom-list-img {\n  height: 10em;\n  width: 16em;\n  margin-top: 10px; }\n  .custom-h3 {\n  margin-top: 20px;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 18px;\n  margin-right: 0;\n  margin-left: 24px;\n  line-height: 34px;\n  letter-spacing: 0px;\n  font-style: normal;\n  font-weight: bold; }\n  .custom-text {\n  text-align: left;\n  font-size: 14px;\n  font-family: 'Open Sans', sans-serif;\n  line-height: 22px;\n  color: #09090a;\n  margin-left: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRzdmVyaGV5ZW4vRGVza3RvcC9TY2hvb2wvU3RhZ2UvVXNlci1saXN0L3NyYy9hcHAvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixlQUFlLEVBQUE7RUFMakI7SUFRSSxtQkFBOEI7SUFDOUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7RUFmMUI7TUFrQk0sU0FBUyxFQUFBO0VBbEJmO01BcUJNLGlCQUFpQjtNQUNqQixpQkFBaUIsRUFBQTtFQXRCdkI7TUF5Qk0seUJBQXlCO01BQ3pCLGdCQUFnQjtNQUNoQixhQUFhLEVBQUE7RUFFbkI7RUFDRSxhQUFhLEVBQUE7RUFFZjtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLGNBQWMsRUFBQTtFQUVoQjtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBO0VBRWQ7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWSxFQUFBO0VBRWQ7RUFDRSxnQkFBZ0IsRUFBQTtFQUVsQjtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix5QkFBeUIsRUFBQTtFQUUzQjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7RUFFbEI7RUFFRSxnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBO0VBRW5CO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLGNBQWtCO0VBQ2xCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBsaSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDIzOCwgMjM4LCAyMzgpO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMDsgfVxuXG4gICAgcC5uYW1lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07IH1cblxuICAgIHAuY291bnRyeSB7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgIGZsZXgtZ3JvdzogMSU7IH0gfSB9XG5cbmp3LW1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4uanctbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLmp3LW1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW46IDQwcHg7IH1cblxuLmp3LW1vZGFsLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC43NTtcbiAgei1pbmRleDogOTAwOyB9XG5cbmJvZHkuanctbW9kYWwtb3BlbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLmN1c3RvbS1saXN0IHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCBncmV5O1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEU0RTUwOyB9XG5cbi5jdXN0b20tbGlzdC1pbWcge1xuICBoZWlnaHQ6IDEwZW07XG4gIHdpZHRoOiAxNmVtO1xuICBtYXJnaW4tdG9wOiAxMHB4OyB9XG5cbi5jdXN0b20taDMge1xuICB0ZXh0LWFsaWduOmwgZWZ0IHt9XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4uY3VzdG9tLXRleHQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiByZ2IoOSw5LDEwKTtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal.service */ "./src/app/modal.service.ts");




var UserListComponent = /** @class */ (function () {
    function UserListComponent(_user, modalService) {
        this._user = _user;
        this.modalService = modalService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._user.getAllUsers().subscribe(function (data) {
            var res = data["users"];
            console.log(res);
            _this.users = res["users"];
            console.log(_this.users);
        });
    };
    UserListComponent.prototype.deleteUser = function (id) {
        this._user.deleteUser(id).subscribe(function (user) {
            console.log(user);
        });
    };
    UserListComponent.prototype.editUser = function (id, name, dob, postal) {
        this._user.updateUser(id, { name: name, dob: dob, postal: postal })
            .subscribe(function (user) {
            console.log(user);
        });
        this.closeModal('custom-modal-1');
    };
    UserListComponent.prototype.openModal = function (id, _id) {
        this.id = _id;
        this.modalService.open(id);
    };
    UserListComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.sass */ "./src/app/user-list/user-list.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.imageSrc = '';
    }
    UserService.prototype.getAllUsers2 = function () {
        return this.http.get('http://localhost:3000/api/users');
    };
    UserService.prototype.getAllUsers = function () {
        return this.http.get('http://localhost:3000/api/users');
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get('http://localhost:3000/api/users/' + id);
    };
    UserService.prototype.insertUser = function (user) {
        return this.http.post('http://localhost:3000/api/users', user);
    };
    UserService.prototype.updateUser = function (id, user) {
        return this.http.put('http://localhost:3000/api/users/' + id, user);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete('http://localhost:3000/api/users/' + id);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/matsverheyen/Desktop/School/Stage/User-list/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map