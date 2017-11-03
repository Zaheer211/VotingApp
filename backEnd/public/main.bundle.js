webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <app-home></app-home> -->\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_poll_data_service__ = __webpack_require__("../../../../../src/app/services/poll-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_sharebuttons__ = __webpack_require__("../../../../ngx-sharebuttons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_polls_polls_component__ = __webpack_require__("../../../../../src/app/components/polls/polls.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_create_poll_create_poll_component__ = __webpack_require__("../../../../../src/app/components/create-poll/create-poll.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_render_polls_render_polls_component__ = __webpack_require__("../../../../../src/app/components/render-polls/render-polls.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { Router } from '@angular/router';








var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'showAllPolls',
        component: __WEBPACK_IMPORTED_MODULE_17__components_render_polls_render_polls_component__["a" /* RenderPollsComponent */]
    },
    {
        path: 'polls/:id',
        component: __WEBPACK_IMPORTED_MODULE_12__components_polls_polls_component__["a" /* PollsComponent */]
    },
    {
        path: 'sign-in',
        component: __WEBPACK_IMPORTED_MODULE_13__components_sign_in_sign_in_component__["a" /* SignInComponent */]
    },
    {
        path: 'sign-up',
        component: __WEBPACK_IMPORTED_MODULE_14__components_sign_up_sign_up_component__["a" /* SignUpComponent */]
    },
    {
        path: 'dashboard/:id',
        component: __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'create-poll/:userId',
        component: __WEBPACK_IMPORTED_MODULE_16__components_create_poll_create_poll_component__["a" /* CreatePollComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_polls_polls_component__["a" /* PollsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_sign_in_sign_in_component__["a" /* SignInComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_sign_up_sign_up_component__["a" /* SignUpComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_create_poll_create_poll_component__["a" /* CreatePollComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_render_polls_render_polls_component__["a" /* RenderPollsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            // Router,
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_9_ngx_sharebuttons__["a" /* ShareButtonsModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_poll_data_service__["a" /* PollDataService */], __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-poll/create-poll.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.navbar{\n  margin-bottom: 0;\n  padding-bottom: 0;\n  border-radius: 0;\n  background-color: #101e2d;\n}\n\n.jumbotron{\n  background-color: #b2c1c1;\n  /*font-family: 'Playball', cursive;*/\n  border-radius: 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-poll/create-poll.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a style=\"font-family: 'Playball', cursive;\" class=\"navbar-brand\" routerLink=''>Voting</a>\n    </div>\n\n    <div>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a routerLink=''>Home</a></li>\n        <li><a routerLink='/dashboard/{{this.userId}}'>Dashboard</a></li>\n        <li><a (click)=\"logout()\" style=\"cursor: pointer\">Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"jumbotron\">\n  <form class=\"form\" #createPollForm=\"ngForm\" (ngSubmit)=\"createPoll(createPollForm)\">\n    <label for=\"title\">Title: </label>\n    <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"Title for your poll\" ngModel>\n    <label for=\"type\">Type: </label>\n    <input type=\"text\" name=\"type\" class=\"form-control\" placeholder=\"Type of Graph, must be one of these [bar, pie, doughnut]\" ngModel>\n    <label for=\"label\">Label: </label>\n    <input type=\"text\" name=\"label\" class=\"form-control\" placeholder=\"Type a label for your values like votes or something else\" ngModel>\n    <label for=\"labels\">Labels: </label>\n    <input type=\"text\" name=\"labels\" class=\"form-control\" placeholder=\"Provide comma separated list of labels\" ngModel><br><br>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Create Poll\">\n    <input routerLink='/dashboard/{{this.userId}}' type=\"submit\" class=\"btn btn-danger\" value=\"Cancel\">\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/create-poll/create-poll.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_poll_data_service__ = __webpack_require__("../../../../../src/app/services/poll-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePollComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreatePollComponent = (function () {
    function CreatePollComponent(pollDataService, userService, router, activatedRoute) {
        var _this = this;
        this.pollDataService = pollDataService;
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.poll = {
            title: "",
            type: "",
            label: "",
            labels: ""
        };
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            // console.log(params['userId']);
        });
    }
    CreatePollComponent.prototype.createPoll = function (form) {
        // console.log(form.value);
        var validTypes = ['bar', 'pie', 'doughnut'];
        var isGraphTypeValid = false;
        if (validTypes.indexOf(form.value.type.toLowerCase()) >= 0) {
            isGraphTypeValid = true;
        }
        if (isGraphTypeValid && form.value.title && form.value.type && form.value.label && form.value.labels) {
            this.poll.title = form.value.title;
            this.poll.label = form.value.label;
            this.poll.type = form.value.type;
            this.poll.labels = form.value.labels;
            var self_1 = this;
            this.pollDataService.setPollData(this.poll, this.userId, function (poll) {
                if (poll) {
                    // console.log(poll);
                    self_1.pollDataService.createAPoll(poll, function (response) {
                        // console.log(response);
                        if (response.data.success) {
                            // console.log("Poll Created Successfully!!");
                            self_1.router.navigate(['/dashboard/' + self_1.userId]);
                        }
                    });
                }
            });
        }
        else {
            alert("Fill in all Fields and Use Valid Graph Type from Provided list");
        }
    };
    CreatePollComponent.prototype.logout = function () {
        this.userService.logOut();
        this.router.navigate(['/sign-in']);
    };
    CreatePollComponent.prototype.ngOnInit = function () {
    };
    return CreatePollComponent;
}());
CreatePollComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-poll',
        template: __webpack_require__("../../../../../src/app/components/create-poll/create-poll.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-poll/create-poll.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_poll_data_service__["a" /* PollDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_poll_data_service__["a" /* PollDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], CreatePollComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=create-poll.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nli{\n  cursor: pointer;\n}\n\n.navbar{\n  margin-bottom: 0;\n  padding-bottom: 0;\n  border-radius: 0;\n  background-color: #101e2d;\n}\n\n.jumbotron{\n  background-color: #b2c1c1;\n  font-family: 'Playball', cursive;\n  border-radius: 0px;\n}\n\n.jumbotron .btn {\n  font-family: sans-serif;\n}\n\n.jumbotron .list-group-item{\n  font-family: sans-serif;\n  background-color: #96aaaa;\n  border-color: #96aaaa;\n}\n@media only screen and (max-width: 500px){\n  .list-group .btn{\n    font-size: 3px;\n    margin-top: 6px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a style=\"font-family: 'Playball', cursive;\" class=\"navbar-brand\" routerLink=''>Voting</a>\n    </div>\n\n    <div >\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a routerLink=''>Home</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"jumbotron\">\n  <h2 class=\"text-center\">Below are polls you own!!</h2>\n  <div *ngIf=\"pollsByUser.length === 0\">\n    <h4>You don't have any polls yet!</h4>\n    <button class=\"btn btn-primary\" routerLink = '/create-poll/{{this.userId}}'>Lets create a poll</button>\n  </div>\n  <ul class=\"list-group\" *ngFor=\"let poll of pollsByUser\">\n    <li class=\"list-group-item\">\n      {{poll.title}}\n      <button class=\"pull-right btn btn-xs btn-danger\" (click)=deleteAPoll(poll) >\n        Delete\n      </button>\n      <button routerLink='/polls/{{poll._id}}' class=\"pull-right btn btn-xs btn-success\" style=\"margin-right: 10px;\" >\n        See Details\n      </button>\n    </li>\n  </ul>\n  <div *ngIf=\"pollsByUser.length > 0\">\n    <button class=\"btn btn-success\" routerLink = '/create-poll/{{this.userId}}'>Create Another Poll</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_poll_data_service__ = __webpack_require__("../../../../../src/app/services/poll-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(userService, pollDataService, activatedRoute, router) {
        this.userService = userService;
        this.pollDataService = pollDataService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userId = "";
        this.pollsByUser = [];
        this.userId = this.userService.getUserData().id;
        this.getAllPollsByAUser = function () {
            var _this = this;
            this.pollDataService.getAllPollsByAUser(this.userId, function (response) {
                // console.log(response.data.polls);
                _this.pollsByUser = response.data.polls;
            });
        };
        this.getAllPollsByAUser();
    }
    DashboardComponent.prototype.deleteAPoll = function (poll) {
        var pollId = poll._id;
        var pollOwnerId = poll.userId;
        var self = this;
        var confirmation = confirm("Do You really want to delete thic poll!");
        if (confirmation && pollOwnerId === this.userId) {
            this.pollDataService.deleteAPoll(pollId, function (response) {
                // console.log(response);
                // self.router.navigate(['/dashboard/' + self.userId]);
                self.getAllPollsByAUser();
            });
        }
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_poll_data_service__["a" /* PollDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_poll_data_service__["a" /* PollDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.list-group-item{\n  cursor: pointer; cursor: hand;\n}\n\n.navbar{\n  margin-bottom: 0;\n  padding-bottom: 0;\n  border-radius: 0;\n  background-color: #101e2d;\n}\n\n.home-brand{\n  font-family: 'Playball', cursive;\n  color: white;\n  text-align: center;\n  background-color: #4c606d;\n  margin-top: 0;\n  height: 350px;\n  width: auto;\n}\n\n.home-brand-details{\n  padding-top: 6%;\n}\n\n.home-description{\n  height: 300px;\n  width: auto;\n  background-color: #748d99;\n}\n\n@media only screen and (max-width: 668px) {\n  .home-description{\n    height: 200px;\n    width: auto;\n    background-color: #748d99;\n    font-size: 5px;\n  }\n\n  .home-description h2{\n    font-size: 20px;\n  }\n}\n\n.home-polls{\n  height: 450px;\n  width: auto;\n  background-color: #b2c1c1;\n\n}\n\n@media only screen and (max-width: 668px) {\n  .home-polls{\n    height: 800px;\n    width: auto;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  .home-polls{\n    height: 525px;\n    width: auto;\n  }\n}\n\n.row{\n  text-align: center;\n  padding-top: 30px;\n  padding-left: 15%;\n  padding-right: 15%;\n}\n\n.home-polls a{\n  cursor: pointer;\n  color: black;\n}\n\n.footer{\n  text-align: center;\n  height: 80px;\n  width: 100%;\n  color: white;\n  background-color: #101e2d;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <div class=\"container\"> -->\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\" style=\"font-family: 'Playball', cursive;\">\n        <a class=\"navbar-brand\" routerLink=''>Voting</a>\n      </div>\n\n      <div id=\"navbar\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <!-- <li><a routerLink=''>Home</a></li> -->\n          <li *ngIf=\"!this.userService.loggedIn()\"> <a routerLink='/sign-in'>SignIn</a></li>\n          <li *ngIf=\"this.userService.loggedIn()\"> <a routerLink='/dashboard/{{this.userId}}'>Dashboard</a></li>\n          <li *ngIf=\"this.userService.loggedIn()\"> <a (click)=\"logout()\">Logout</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <div class=\"home-brand\">\n    <div class=\"home-brand-details\">\n      <h1 style=\"font-size: 70px;\">Voting</h1>\n      <h2>Build your custom live poll!</h2>\n      <button (click)=\"createPoll()\" style=\"font-family: sans-serif;\" class=\"btn btn-success btn-lg\">Create Poll</button>\n    </div>\n  </div>\n  <div class=\"home-description\">\n    <div class=\"row\">\n      <div class=\"col-xs-4\">\n        <i style=\"font-size: 65px;\" class=\"fa fa-globe\" aria-hidden=\"true\"></i>\n        <h2>Access</h2>\n        <p>You can access your poll from all around the world!</p>\n      </div>\n      <div class=\"col-xs-4\">\n        <i style=\"font-size: 65px;\" class=\"fa fa-share-alt\" aria-hidden=\"true\"></i>\n        <h2>Share</h2>\n        <p>Share your poll to a social Network and get opinion from your community!</p>\n      </div>\n      <div class=\"col-xs-4\">\n        <i style=\"font-size: 65px;\" class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i>\n        <h2>Customize</h2>\n        <p>Select from various types of graph i.e Pie, Bar, Doughnut etc!</p>\n      </div>\n    </div>\n  </div>\n  <div  class=\"text-center home-polls\">\n    <div style=\"padding-top: 10px;\" class=\"\">\n      <h1 style=\"font-family: 'Playball', cursive;\">Most Recent Polls</h1>\n    </div>\n    <div  class=\"row text-center\">\n      <div class=\"col-sm-4 col-xs-6\">\n        <div class=\"poll1\" id=\"poll-1\">\n          <canvas id=\"myChart1\" width=\"15\" height=\"15\"></canvas>\n          <h5 *ngIf=\"this.threePolls\"><strong><a routerLink='/polls/{{this.threePolls[0]._id}}'>{{this.threePolls[0].title}}</a></strong></h5>\n        </div>\n      </div>\n      <div class=\"col-sm-4 col-xs-6\">\n        <div class=\"poll2\" id=\"poll-2\">\n          <canvas id=\"myChart2\" width=\"15\" height=\"15\"></canvas>\n          <h5 *ngIf=\"this.threePolls\"><strong><a routerLink='/polls/{{this.threePolls[1]._id}}'>{{this.threePolls[1].title}}</a></strong></h5>\n        </div>\n      </div>\n      <div class=\"col-sm-4 col-xs-6\">\n        <div class=\"poll3\" id=\"poll-3\">\n          <canvas id=\"myChart3\" width=\"15\" height=\"15\"></canvas>\n          <h5 *ngIf=\"this.threePolls\"><strong><a routerLink='/polls/{{this.threePolls[2]._id}}'>{{this.threePolls[2].title}}</a></strong></h5>\n        </div>\n      </div>\n    </div>\n      <h3 style=\"font-family: 'Playball', cursive;\"><a routerLink='/showAllPolls'><strong>Check out all polls by Voting.</strong></a></h3>\n  </div>\n  <footer class=\"footer\">\n    <div style=\"padding-top: 2.5%;\" class=\"container\">\n      <span class=\"text-muted\"> Voting <i class=\"fa fa-copyright\" aria-hidden=\"true\"></i>\n        All Rights reserved</span>\n    </div>\n  </footer>\n<!-- </div> -->\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_poll_data_service__ = __webpack_require__("../../../../../src/app/services/poll-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(pollDataService, userService, router) {
        var _this = this;
        this.pollDataService = pollDataService;
        this.userService = userService;
        this.router = router;
        this.polls = [];
        this.userId = this.userService.getUserData().id;
        pollDataService.getAllPolls(function (response) {
            _this.polls = response.data.polls;
            // console.log(response);
            var mostRecentThreePolls = [];
            var pollsArrLen = response.data.polls.length;
            for (var i = pollsArrLen - 1; i >= pollsArrLen - 3; i--) {
                mostRecentThreePolls.push(response.data.polls[i]);
            }
            _this.threePolls = mostRecentThreePolls;
            _this.drawFromRecentPolls(mostRecentThreePolls);
        });
    }
    HomeComponent.prototype.drawFromRecentPolls = function (recentPolls) {
        if (this.myChart1) {
            this.myChart1.destroy();
        }
        var ctx1 = document.getElementById("myChart1");
        var labelsAndData1 = recentPolls[0].labels;
        var labels1 = [];
        var data1 = [];
        for (var i = 0; i < labelsAndData1.length; i++) {
            labels1.push(labelsAndData1[i].label);
            data1.push(labelsAndData1[i].votes);
        }
        this.myChart1 = new __WEBPACK_IMPORTED_MODULE_4_chart_js___default.a(ctx1, {
            type: recentPolls[0].type,
            data: {
                labels: labels1,
                datasets: [{
                        label: recentPolls[0].label,
                        data: data1,
                        //backgroundColor:'green',
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ],
                        borderWidth: 0,
                        borderColor: '#777',
                        hoverBorderWidth: 0,
                        hoverBorderColor: '#000'
                    }]
            },
            options: {
                title: {
                    display: false,
                    text: 'Elections 2018',
                    fontSize: 25
                },
                legend: {
                    display: false,
                    position: 'bottom',
                    labels: {
                        fontColor: '#000'
                    }
                },
                layout: {
                    padding: {
                        left: 50,
                        right: 0,
                        bottom: 0,
                        top: 0
                    }
                },
                tooltips: {
                    enabled: true
                },
                scales: {
                    xAxes: [{
                            display: false
                        }],
                    yAxes: [{
                            ticks: {
                                stepValue: 1,
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        if (this.myChart2) {
            this.myChart2.destroy();
        }
        var ctx2 = document.getElementById('myChart2');
        var labelsAndData2 = recentPolls[1].labels;
        var labels2 = [];
        var data2 = [];
        for (var i = 0; i < labelsAndData2.length; i++) {
            labels2.push(labelsAndData2[i].label);
            data2.push(labelsAndData2[i].votes);
        }
        this.myChart2 = new __WEBPACK_IMPORTED_MODULE_4_chart_js___default.a(ctx2, {
            type: recentPolls[1].type,
            data: {
                labels: labels2,
                datasets: [{
                        label: recentPolls[1].label,
                        data: data2,
                        //backgroundColor:'green',
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ],
                        borderWidth: 0,
                        borderColor: '#777',
                        hoverBorderWidth: 0,
                        hoverBorderColor: '#000'
                    }]
            },
            options: {
                title: {
                    display: false,
                    text: 'Elections 2018',
                    fontSize: 25
                },
                legend: {
                    display: false,
                    position: 'bottom',
                    labels: {
                        fontColor: '#000'
                    }
                },
                layout: {
                    padding: {
                        left: 50,
                        right: 0,
                        bottom: 0,
                        top: 0
                    }
                },
                tooltips: {
                    enabled: true
                },
                scales: {
                    xAxes: [{
                            display: false
                        }],
                    yAxes: [{
                            ticks: {
                                stepValue: 1,
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        if (this.myChart3) {
            this.myChart3.destroy();
        }
        var labelsAndData3 = recentPolls[2].labels;
        var labels3 = [];
        var data3 = [];
        for (var i = 0; i < labelsAndData3.length; i++) {
            labels3.push(labelsAndData3[i].label);
            data3.push(labelsAndData3[i].votes);
        }
        var ctx3 = document.getElementById('myChart3');
        this.myChart3 = new __WEBPACK_IMPORTED_MODULE_4_chart_js___default.a(ctx3, {
            type: recentPolls[2].type,
            data: {
                labels: labels3,
                datasets: [{
                        label: recentPolls[2].label,
                        data: data3,
                        //backgroundColor:'green',
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ],
                        borderWidth: 0,
                        borderColor: '#777',
                        hoverBorderWidth: 0,
                        hoverBorderColor: '#000'
                    }]
            },
            options: {
                title: {
                    display: false,
                    text: 'Elections 2018',
                    fontSize: 25
                },
                legend: {
                    display: false,
                    position: 'bottom',
                    labels: {
                        fontColor: '#000'
                    }
                },
                layout: {
                    padding: {
                        left: 50,
                        right: 0,
                        bottom: 0,
                        top: 0
                    }
                },
                tooltips: {
                    enabled: true
                },
                scales: {
                    xAxes: [{
                            display: false
                        }],
                    yAxes: [{
                            ticks: {
                                stepValue: 1,
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    HomeComponent.prototype.logout = function () {
        this.userService.logOut();
        this.router.navigate(['/sign-in']);
    };
    HomeComponent.prototype.createPoll = function () {
        if (this.userService.loggedIn()) {
            this.router.navigate(['create-poll/' + this.userId]);
        }
        else {
            this.router.navigate(['/sign-in']);
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_poll_data_service__["a" /* PollDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_poll_data_service__["a" /* PollDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/polls/polls.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nselect{\n  width: 250px;\n}\n\n.btn{\n  margin-top: 10px;\n  width: 250px;\n}\n\n.submitBtn{\n  margin-bottom: 50px;\n}\n\n.navbar{\n  margin-bottom: 0;\n  padding-bottom: 0;\n  border-radius: 0;\n  background-color: #101e2d;\n}\n\n.well{\n  background-color: #b2c1c1;\n  /*font-family: 'Playball', cursive;*/\n  border-radius: 0px;\n  border-color: #b2c1c1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/polls/polls.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\"> -->\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a style=\"font-family: 'Playball', cursive;\" class=\"navbar-brand\" routerLink=''>Voting</a>\n      </div>\n\n      <div>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a routerLink=''>Home</a></li>\n          <li *ngIf=\"this.userService.loggedIn()\"> <a routerLink='/dashboard/{{this.userId}}'>Dashboard</a></li>\n          <li *ngIf=\"!this.userService.loggedIn()\"><a routerLink='/sign-in'>SignIn</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <div class=\"well\">\n    <div style=\"margin-top: 50px;\" class=\"row\">\n      <div *ngIf=\"this.poll\" class=\"col-sm-4\">\n        <h2 style=\"font-family: 'Playball', cursive;\">{{this.poll.poll.title}} </h2>\n        <h5>I would like to vote for...</h5>\n        <select class=\"form-control\" #selectedOption>\n          <option *ngFor=\"let label of this.poll.poll.labels\">{{label.label}}</option>\n        </select>\n        <button type=\"button\" (click)=\"submitVote(selectedOption.value)\" class=\"submitBtn btn btn-primary\">Submit</button>\n      </div>\n      <div class=\"col-sm-7 col-sm-offset-1\">\n        <canvas id=\"myChart\" width=\"50\" height=\"50\"></canvas>\n      </div>\n    </div>\n    <button class=\"share btn btn-success\" shareButton=\"facebook\"><i class=\"fa fa-facebook\"></i> Share this poll</button><br>\n    <button class=\"share btn btn-success\" shareButton=\"twitter\"><i class=\"fa fa-twitter\"></i>  Share this poll</button>\n  </div>\n<!-- </div> -->\n"

/***/ }),

/***/ "../../../../../src/app/components/polls/polls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_poll_data_service__ = __webpack_require__("../../../../../src/app/services/poll-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PollsComponent = (function () {
    function PollsComponent(pollDataService, userService, activatedRoute) {
        var _this = this;
        this.pollDataService = pollDataService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.pollId = '';
        var self = this;
        var myChart = null;
        this.userId = this.userService.getUserData().id;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pollId = params['id'];
            _this.getAPoll = function getAPoll() {
                pollDataService.getAPoll(self.pollId).subscribe(function (response) {
                    // console.log(response);
                    self.poll = response;
                    // console.log(self.poll);
                    if (myChart) {
                        myChart.destroy();
                    }
                    var ctx = document.getElementById("myChart");
                    var labels = response.poll.labels;
                    var labelsArray = [];
                    var dataArray = [];
                    for (var i = 0; i < labels.length; i++) {
                        labelsArray.push(labels[i].label);
                        dataArray.push(labels[i].votes);
                    }
                    myChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js___default.a(ctx, {
                        type: response.poll.type,
                        data: {
                            labels: labelsArray,
                            datasets: [{
                                    label: response.poll.label,
                                    data: dataArray,
                                    //backgroundColor:'green',
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.6)',
                                        'rgba(54, 162, 235, 0.6)',
                                        'rgba(255, 206, 86, 0.6)',
                                        'rgba(75, 192, 192, 0.6)',
                                        'rgba(153, 102, 255, 0.6)',
                                        'rgba(255, 159, 64, 0.6)',
                                        'rgba(255, 99, 132, 0.6)'
                                    ],
                                    borderWidth: 0,
                                    borderColor: '#777',
                                    hoverBorderWidth: 0,
                                    hoverBorderColor: '#000'
                                }]
                        },
                        options: {
                            title: {
                                display: false,
                                text: 'Elections 2018',
                                fontSize: 25
                            },
                            legend: {
                                display: true,
                                position: 'bottom',
                                labels: {
                                    fontColor: '#000'
                                }
                            },
                            layout: {
                                padding: {
                                    left: 50,
                                    right: 0,
                                    bottom: 0,
                                    top: 0
                                }
                            },
                            tooltips: {
                                enabled: true
                            },
                            scales: {
                                yAxes: [{
                                        ticks: {
                                            stepValue: 1,
                                            beginAtZero: true
                                        }
                                    }]
                            }
                        }
                    });
                });
            };
            _this.getAPoll();
        });
    }
    PollsComponent.prototype.submitVote = function (votedFor) {
        // console.log(this.poll);
        var previousVotes;
        var pollId = this.poll.poll._id;
        var labelsArr = this.poll.poll.labels;
        var self = this;
        for (var i = 0; i < labelsArr.length; i++) {
            if (labelsArr[i].label === votedFor) {
                previousVotes = labelsArr[i].votes;
            }
        }
        this.pollDataService.updateVotesForAPoll(pollId, votedFor, previousVotes, function (response) {
            if (response.data.success && !(response.data.res === "Voter Ip Address already exists!")) {
                self.getAPoll();
            }
            else {
                alert("You have already voted for this poll!");
            }
        });
    };
    PollsComponent.prototype.ngOnInit = function () {
    };
    return PollsComponent;
}());
PollsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-polls',
        template: __webpack_require__("../../../../../src/app/components/polls/polls.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/polls/polls.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_poll_data_service__["a" /* PollDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_poll_data_service__["a" /* PollDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], PollsComponent);

var _a, _b, _c;
//# sourceMappingURL=polls.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/render-polls/render-polls.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nli{\n  cursor: pointer;\n}\n\n.navbar{\n  margin-bottom: 0;\n  padding-bottom: 0;\n  border-radius: 0;\n  background-color: #101e2d;\n}\n\n.jumbotron{\n  background-color: #b2c1c1;\n  font-family: 'Playball', cursive;\n  border-radius: 0px;\n}\n\n.jumbotron .btn {\n  font-family: sans-serif;\n}\n\n.jumbotron .list-group-item{\n  font-family: sans-serif;\n  background-color: #96aaaa;\n  border-color: #96aaaa;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/render-polls/render-polls.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a style=\"font-family: 'Playball', cursive;\" class=\"navbar-brand\" routerLink=''>Voting</a>\n    </div>\n\n    <div>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a routerLink=''>Home</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"jumbotron\">\n  <h1 class=\"text-center\">Below are polls by Voting</h1>\n  <h2 class=\"text-center\">Click to See Details</h2>\n  <ul class=\"list-group\" *ngFor=\"let poll of this.polls\">\n    <li routerLink='/polls/{{poll._id}}' class=\"list-group-item\">{{poll.title}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/render-polls/render-polls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_poll_data_service__ = __webpack_require__("../../../../../src/app/services/poll-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderPollsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RenderPollsComponent = (function () {
    function RenderPollsComponent(pollDataService) {
        var _this = this;
        this.pollDataService = pollDataService;
        pollDataService.getAllPolls(function (response) {
            _this.polls = response.data.polls;
        });
    }
    RenderPollsComponent.prototype.ngOnInit = function () {
    };
    return RenderPollsComponent;
}());
RenderPollsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-render-polls',
        template: __webpack_require__("../../../../../src/app/components/render-polls/render-polls.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/render-polls/render-polls.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_poll_data_service__["a" /* PollDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_poll_data_service__["a" /* PollDataService */]) === "function" && _a || Object])
], RenderPollsComponent);

var _a;
//# sourceMappingURL=render-polls.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sign-in/sign-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn{\n  margin-top: 10px;\n}\n\n.navbar{\n  margin-bottom: 0;\n  padding-bottom: 0;\n  border-radius: 0;\n  background-color: #101e2d;\n}\n\n\n.jumbotron{\n  background-color: #b2c1c1;\n  /*font-family: 'Playball', cursive;*/\n  border-radius: 0px;\n}\n\n.well{\n  background-color: #b2c1c1;\n  /*font-family: 'Playball', cursive;*/\n  border-radius: 0px;\n  border-color: #b2c1c1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a style=\"font-family: 'Playball', cursive;\" class=\"navbar-brand\" routerLink=''>Voting</a>\n      </div>\n\n      <div>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a routerLink=''>Home</a></li>\n          <li><a routerLink='/sign-up'>CreateAccount</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <div class=\"jumbotron\">\n    <flash-messages></flash-messages>\n    <div class=\"row well\">\n      <div class=\"col-md-offset-3 col-md-6\">\n        <form class=\"form\" #signInForm=\"ngForm\" (ngSubmit)=\"authenticateUser(signInForm)\">\n          <label for=\"username\">Username: </label>\n          <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"username\" ngModel>\n          <label for=\"password\">Password: </label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"******\" ngModel>\n          <input type=\"submit\" class=\"btn btn-primary\" value=\"SignIn\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignInComponent = (function () {
    function SignInComponent(userService, flashService, router) {
        this.userService = userService;
        this.flashService = flashService;
        this.router = router;
        this.uS = userService;
        this.rtr = router;
        this.fS = flashService;
    }
    SignInComponent.prototype.authenticateUser = function (form) {
        var _this = this;
        if (form.value.username == "" || form.value.password == "") {
            this.fS.show("Provide both username and password!", { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            this.user = form.value;
            this.uS.authenticateUser(this.user, function (response) {
                if (!response.data.success) {
                    _this.fS.show(response.data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
                else {
                    // console.log(response);
                    _this.uS.storeUserData(response.data.token, response.data.user);
                    _this.rtr.navigate(['/dashboard/' + response.data.user.id]);
                }
            });
        }
    };
    SignInComponent.prototype.ngOnInit = function () {
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sign-in',
        template: __webpack_require__("../../../../../src/app/components/sign-in/sign-in.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sign-in/sign-in.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SignInComponent);

var _a, _b, _c;
//# sourceMappingURL=sign-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sign-up/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn{\n  margin-top: 10px;\n}\n\n.navbar{\n  margin-bottom: 0;\n  padding-bottom: 0;\n  border-radius: 0;\n  background-color: #101e2d;\n}\n\n.jumbotron{\n  background-color: #b2c1c1;\n  /*font-family: 'Playball', cursive;*/\n  border-radius: 0px;\n}\n\n.well{\n  background-color: #b2c1c1;\n  /*font-family: 'Playball', cursive;*/\n  border-radius: 0px;\n  border-color: #b2c1c1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\"> -->\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a style=\"font-family: 'Playball', cursive;\" class=\"navbar-brand\" routerLink=''>Voting</a>\n      </div>\n\n      <div>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a routerLink=''>Home</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <div class=\"jumbotron\">\n    <flash-messages></flash-messages>\n    <div class=\"row well\">\n      <div class=\"col-md-offset-3 col-md-6\">\n        <form class=\"form\" #signupForm=\"ngForm\" (ngSubmit)=\"createUser(signupForm)\">\n          <label for=\"name\">Name: </label>\n          <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"name\" ngModel>\n          <label for=\"username\">Username: </label>\n          <input type=\"text\" name=\"username\" class=\"form-control\" placeholder=\"username\" ngModel>\n          <label for=\"email\">Email: </label>\n          <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"usr@example.com\" ngModel>\n          <label for=\"password\">Password: </label>\n          <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"******\" ngModel>\n          <input type=\"submit\" class=\"btn btn-primary\" value=\"SignUp\">\n        </form>\n      </div>\n    </div>\n  </div>\n<!-- </div> -->\n"

/***/ }),

/***/ "../../../../../src/app/components/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpComponent = (function () {
    function SignUpComponent(userService, flashService, router) {
        this.userService = userService;
        this.flashService = flashService;
        this.router = router;
        this.user = {};
        this.uS = userService;
        this.fS = flashService;
        this.rtr = __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */];
    }
    SignUpComponent.prototype.createUser = function (form) {
        var _this = this;
        if (this.uS.validateUser(form.value)) {
            if (this.uS.validateEmail(form.value.email)) {
                this.uS.createUser(form.value, function (response) {
                    // console.log(response);
                    _this.router.navigate(['/sign-in']);
                    _this.fS.show("Your are registered successfully!!", { cssClass: 'alert-success', timeout: 3000 });
                });
            }
            else {
                this.fS.show("Please provide correct Email", { cssClass: 'alert-danger', timeout: 3000 });
            }
        }
        else {
            this.fS.show("Please fill in all fields", { cssClass: 'alert-danger', timeout: 3000 });
        }
    };
    SignUpComponent.prototype.ngOnInit = function () {
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sign-up',
        template: __webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SignUpComponent);

var _a, _b, _c;
//# sourceMappingURL=sign-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.userService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/sign-in']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/poll-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("../../../../axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PollDataService = (function () {
    function PollDataService(userService, http) {
        this.userService = userService;
        this.http = http;
        this.usrSrvc = userService;
    }
    PollDataService.prototype.getAllPolls = function (callback) {
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('poll/home')
            .then(function (response) {
            // console.log(response);
            callback(response);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    PollDataService.prototype.updateVotesForAPoll = function (pollId, label, prevVotes, callback) {
        var updatedData = {
            pollId: pollId,
            label: label,
            previousVotes: prevVotes
        };
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('poll/updateVotes', updatedData)
            .then(function (response) {
            callback(response);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    PollDataService.prototype.getAllPollsByAUser = function (userId, callback) {
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('poll/getAllPollsByAUser/' + userId)
            .then(function (response) {
            callback(response);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    PollDataService.prototype.getAPoll = function (id) {
        // axios.get('http://localhost:3001/getAPoll/'+ id)
        //   .then(function(response){
        //     callback(response);
        //   })
        //   .catch(function(error){
        //     console.log(error);
        //   })
        return this.http.get('poll/getAPoll/' + id)
            .map(function (res) { return res.json(); });
    };
    PollDataService.prototype.setPollData = function (pollData, userId, callback) {
        var poll = {
            title: "",
            userId: "",
            type: "",
            label: "",
            labels: [],
        };
        function getPollLabelsArray() {
            var pollLabels = pollData.labels.split(",");
            var finalPollLabels = [];
            for (var i = 0; i < pollLabels.length; i++) {
                var label = pollLabels[i].trim();
                label = label[0].toUpperCase() + label.slice(1);
                var data = {
                    label: "",
                    votes: 0
                };
                data.label = label;
                finalPollLabels.push(data);
                if (i === pollLabels.length - 1) {
                    return finalPollLabels;
                }
            }
        }
        poll.title = pollData.title[0].toUpperCase() + pollData.title.slice(1);
        poll.userId = userId;
        poll.type = pollData.type.toLowerCase();
        poll.label = pollData.label[0].toUpperCase() + pollData.label.slice(1);
        poll.labels = getPollLabelsArray();
        callback(poll);
    };
    PollDataService.prototype.createAPoll = function (poll, callback) {
        var config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('id_token')
            }
        };
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('poll/addPoll', poll, config)
            .then(function (response) {
            callback(response);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    PollDataService.prototype.deleteAPoll = function (pollId, callback) {
        var config = {
            headers: {
                'Authorization': localStorage.getItem('id_token')
            }
        };
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('poll/removePoll/' + pollId, config)
            .then(function (response) {
            callback(response);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    return PollDataService;
}());
PollDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _b || Object])
], PollDataService);

var _a, _b;
//# sourceMappingURL=poll-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("../../../../axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.validateUser = function (user) {
        if (user.name && user.username && user.email && user.password) {
            return true;
        }
        else
            return false;
    };
    UserService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    UserService.prototype.createUser = function (user, callback) {
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('poll/create', user)
            .then(function (response) {
            callback(response);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    UserService.prototype.authenticateUser = function (user, callback) {
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('poll/authenticate', user)
            .then(function (response) {
            callback(response);
            // console.log(response);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    UserService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    UserService.prototype.getUserData = function () {
        if (this.loggedIn()) {
            var userData = JSON.parse(localStorage.getItem('user'));
            return userData;
        }
        else {
            return {
                success: false,
                id: null
            };
        }
    };
    UserService.prototype.logOut = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    UserService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])("id_token");
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map