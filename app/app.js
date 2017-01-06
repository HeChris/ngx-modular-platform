var ng2App=ng2App||{};ng2App.app=function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=32)}([function(t,e){t.exports=ng.core},function(t,e){t.exports=ng.router},function(t,e){t.exports=ng2App.common},,,function(t,e,n){"use strict";var o=n(19);e.AppComponent=o.AppComponent;var r=n(20);e.HomeComponent=r.HomeComponent;var a=n(18);e.NotFoundComponent=a.NotFoundComponent,e.ALL_PAGES=[o.AppComponent,r.HomeComponent,a.NotFoundComponent]},function(t,e,n){"use strict";var o=n(22);e.AuthGuard=o.AuthGuard,e.ALL_SERVICES=[o.AuthGuard]},,function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}n(24),n(17);var r=n(2);window.defineModule=r.ModuleLoaderService.defineModule,o(n(11))},,function(t,e){t.exports=ng.platformBrowserDynamic},function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,c=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(a<3?r(c):a>3?r(e,n,c):r(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),c=n(30),i=n(2),u=n(12),p=n(16),s=n(21),f=n(6),l=n(5),d=function(){function t(t){this.moduleLoader=t}return t}();d=o([a.NgModule({imports:[c.BrowserModule,i.AppCommonModule,u.routing],declarations:p.ALL_COMPONENTS.concat(l.ALL_PAGES,s.ALL_PIPES),providers:i.COMMON_SERVICES.concat(f.ALL_SERVICES),bootstrap:[l.AppComponent]}),r("design:paramtypes",[i.ModuleLoaderService])],d),e.AppModule=d},function(t,e,n){"use strict";var o=n(1),r=n(2),a=n(6),c=n(5),i=function(t){return function(){return r.ModuleLoaderService.load(t)}},u=[{path:"demo1",module:"demo1"}],p=[];u.forEach(function(t){p.push({path:t.path,loadChildren:i(t.module),canActivate:[a.AuthGuard],canActivateChild:[a.AuthGuard]})});var s=[{path:"system",redirectTo:"/"}].concat(p,[{path:"",component:c.HomeComponent,canActivate:[a.AuthGuard],canActivateChild:[a.AuthGuard],children:[]},{path:"**",component:c.NotFoundComponent}]);e.routing=o.RouterModule.forRoot(s,{useHash:!0})},,,,function(t,e,n){"use strict";e.ALL_COMPONENTS=[]},function(t,e){var n={modulePath:"modules/"};window.AppConf=n},function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,c=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(a<3?r(c):a>3?r(e,n,c):r(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),c=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();c=o([a.Component({template:"<h1>404 Not Found.</h1>"}),r("design:paramtypes",[])],c),e.NotFoundComponent=c},function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,c=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(a<3?r(c):a>3?r(e,n,c):r(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),c=function(){function t(){}return t.prototype.ngOnInit=function(){},t.prototype.ngOnDestroy=function(){},t}();c=o([a.Component({selector:"ng2-app",template:n(25)}),r("design:paramtypes",[])],c),e.AppComponent=c},function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,c=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(a<3?r(c):a>3?r(e,n,c):r(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),c=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();c=o([a.Component({template:n(26)}),r("design:paramtypes",[])],c),e.HomeComponent=c},function(t,e,n){"use strict";e.ALL_PIPES=[]},function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,c=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(a<3?r(c):a>3?r(e,n,c):r(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),c=n(1),i=n(2),u=function(){function t(t,e){this.router=t,this.moduleLoader=e}return t.prototype.canActivate=function(t,e,n){void 0===n&&(n=!1);var o=e.url.split("/")[1];return n||this.moduleLoader.useModuleStyles(o),Promise.resolve(!0)},t.prototype.canActivateChild=function(t,e){return this.canActivate(t,e,!0)},t}();u=o([a.Injectable(),r("design:paramtypes",[c.Router,i.ModuleLoaderService])],u),e.AuthGuard=u},,function(t,e){},function(t,e){t.exports='<header>\r\n  <nav role="navigation" class="navbar navbar-inverse navbar-fixed-top">\r\n    <div class="container-fluid">\r\n      <div class="navbar-header"><button type="button" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" class="navbar-toggle collapsed"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button>        <a href="" class="navbar-brand">NG2-MODULAR_PLATFORM</a></div>\r\n      <div id="navbar" class="navbar-collapse collapse">\r\n        <ul class="nav navbar-nav navbar-left">\r\n          <li class="nav-item"><a href="javascript:void(0);" routerLink="/" class="nav-link">Home</a></li>\r\n          <li class="nav-item"><a href="javascript:void(0);" routerLink="/demo1" class="nav-link">Demo1</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n<div class="page-view-container" style="margin-top: 50px;">\r\n  <div class="container">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>'},function(t,e){t.exports="<h1>Home Component</h1>"},,,,function(t,e){t.exports=ng.platformBrowser},,function(t,e,n){"use strict";var o=n(10),r=n(8);o.platformBrowserDynamic().bootstrapModule(r.AppModule)}]);