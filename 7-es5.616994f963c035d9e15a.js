function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Q1Ak:function(t,n,e){"use strict";e.r(n),e.d(n,"HttpLoaderFactory",(function(){return _})),e.d(n,"BenchmarkModule",(function(){return O}));var o=e("ofXK"),c=e("3Pt+"),i=e("2Vo4"),a=["animal","archaeology","attire","beauty","birds","building","architecture","business","office","climate","weather","communication","computer","education","emotions","feelings","farming","festival","celebration","holiday","food","drink","habit","health","hobby","horticulture","house","home","industry","landscape","law","love","romance","media","music","nature","art","nation","landmark","profession","religion","science","technology","shop","service","sport","textures","pattern","color","time","season","touring","vacationing","transport","travel"],r=e("fXoL"),l=e("kmnG"),u=e("d3UM"),s=e("bTqV"),m=e("FKr1"),h=e("CXmx"),f=e("6NWb"),d=e("sYmb");function b(t,n){if(1&t&&(r.Ub(0,"mat-option",10),r.Ac(1),r.Tb()),2&t){var e=n.$implicit;r.jc("value",e),r.Bb(1),r.Cc(" ",e," ")}}function g(t,n){if(1&t&&r.Pb(0,"img",11),2&t){var e=n.index;r.lc("src","https://picsum.photos/300/200?random=",e,"",r.uc),r.lc("alt","Benchmark pic ",e,"")}}function p(t,n){if(1&t){var e=r.Vb();r.Ub(0,"button",12),r.cc("click",(function(){return r.sc(e),r.ec().scrollTop()})),r.Ac(1),r.fc(2,"uppercase"),r.fc(3,"translate"),r.Pb(4,"fa-icon",13),r.Tb()}2&t&&(r.Bb(1),r.Cc(" ",r.gc(2,1,r.gc(3,3,"imagely.benchmark.scrollTop"))," "))}var y,k=((y=function(){function t(n){_classCallCheck(this,t),this.document=n,this.options=["100","500","1000"],this.keywords=a,this.min=400,this.max=200,this.imageNum$=new i.a([]),this.imageNumFormCtrl=new c.a(this.options[0])}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"generateArray",value:function(t){this.imageNum$.next(Array(t).fill(4))}},{key:"onSelectionChange",value:function(t){this.generateArray(+t.value)}},{key:"scrollTop",value:function(){this.document.defaultView.scrollTo(0,0)}},{key:"randomSize",get:function(){return Math.round(Math.random()*(this.max-this.min)+this.min)}},{key:"keyword",get:function(){return this.keywords[Math.floor(Math.random()*this.keywords.length)]}}]),t}()).\u0275fac=function(t){return new(t||y)(r.Ob(o.d))},y.\u0275cmp=r.Ib({type:y,selectors:[["app-benchmark"]],decls:16,vars:10,consts:[[1,"container-fluid"],[1,"d-flex","justify-content-center","mt-3"],[1,"num-img-select"],[3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"photos"],["imagely","","width","400","height","400",3,"src","alt",4,"ngFor","ngForOf"],[1,"scrolltop","d-flex","justify-content-center","mt-3"],["mat-icon-button","",1,"link","d-none","d-sm-inline"],["mat-button","","color","primary",3,"click",4,"ngIf"],[3,"value"],["imagely","","width","400","height","400",3,"src","alt"],["mat-button","","color","primary",3,"click"],["icon","arrow-up",1,"ml-1"]],template:function(t,n){1&t&&(r.Ub(0,"div",0),r.Ub(1,"div",1),r.Ub(2,"mat-form-field",2),r.Ub(3,"mat-label"),r.Ac(4),r.fc(5,"translate"),r.Tb(),r.Ub(6,"mat-select",3),r.cc("selectionChange",(function(t){return n.onSelectionChange(t)})),r.zc(7,b,2,2,"mat-option",4),r.Tb(),r.Tb(),r.Tb(),r.Ub(8,"div"),r.Ub(9,"section",5),r.zc(10,g,1,2,"img",6),r.fc(11,"async"),r.Tb(),r.Tb(),r.Tb(),r.Ub(12,"div",7),r.Ub(13,"a",8),r.zc(14,p,5,5,"button",9),r.fc(15,"async"),r.Tb(),r.Tb()),2&t&&(r.Bb(4),r.Bc(r.gc(5,4,"imagely.benchmark.selectImgTotal")),r.Bb(3),r.jc("ngForOf",n.options),r.Bb(3),r.jc("ngForOf",r.gc(11,6,n.imageNum$)),r.Bb(4),r.jc("ngIf",r.gc(15,8,n.imageNum$).length))},directives:[l.a,l.d,u.a,o.k,s.a,o.l,m.i,h.a,s.b,f.a],pipes:[d.c,o.b,o.r],styles:[".photos[_ngcontent-%COMP%]{line-height:0;-webkit-column-count:5;-webkit-column-gap:0;-moz-column-count:5;-moz-column-gap:0;column-count:5;column-gap:0}.photos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding:1rem;width:100%!important;height:auto!important}@media (max-width:1200px){.photos[_ngcontent-%COMP%]{-moz-column-count:4;column-count:4}}@media (max-width:1000px){.photos[_ngcontent-%COMP%]{-moz-column-count:3;column-count:3}}@media (max-width:800px){.photos[_ngcontent-%COMP%]{-moz-column-count:2;column-count:2}}@media (max-width:400px){.photos[_ngcontent-%COMP%]{-moz-column-count:1;column-count:1}}.num-img-select[_ngcontent-%COMP%]{width:250px}"],changeDetection:0}),y),w=e("tyNb"),v=e("PCNd"),C=e("tk/3"),x=e("mqiu"),T=e("AytR"),P=[{path:"",component:k,data:{title:"imagely.menu.benchmark"}}];function _(t){return new x.a(t,"".concat(T.a.i18nPrefix,"/assets/i18n/benchmark/"),".json")}var M,O=((M=function t(){_classCallCheck(this,t)}).\u0275mod=r.Mb({type:M}),M.\u0275inj=r.Lb({factory:function(t){return new(t||M)},imports:[[o.c,v.a,f.c,d.b.forChild({defaultLanguage:"en",useDefaultLang:!0,loader:{provide:d.a,useFactory:_,deps:[C.a]},isolate:!0}),w.d.forChild(P)]]}),M)}}]);