(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Q1Ak:function(t,n,e){"use strict";e.r(n),e.d(n,"HttpLoaderFactory",function(){return x}),e.d(n,"BenchmarkModule",function(){return C});var c=e("ofXK"),o=e("3Pt+"),i=e("2Vo4"),a=e("fXoL"),r=e("kmnG"),s=e("d3UM"),l=e("bTqV"),b=e("FKr1"),m=e("CXmx"),u=e("6NWb"),f=e("sYmb");function g(t,n){if(1&t&&(a.Rb(0,"mat-option",10),a.yc(1),a.Qb()),2&t){const t=n.$implicit;a.fc("value",t),a.zb(1),a.Ac(" ",t," ")}}function p(t,n){if(1&t&&(a.Rb(0,"div",11),a.Mb(1,"img",12),a.Rb(2,"h3"),a.yc(3),a.Qb(),a.Qb()),2&t){const t=n.index;a.zb(1),a.hc("src","https://picsum.photos/1000/1000?random=",t,"",a.qc),a.hc("alt","Benchmark pic ",t,""),a.zb(2),a.Ac("Image ",t+1,"")}}function d(t,n){if(1&t){const t=a.Sb();a.Rb(0,"button",13),a.Yb("click",function(){return a.oc(t),a.ac().scrollTop()}),a.yc(1),a.bc(2,"uppercase"),a.bc(3,"translate"),a.Mb(4,"fa-icon",14),a.Qb()}2&t&&(a.zb(1),a.Ac(" ",a.cc(2,1,a.cc(3,3,"imagely.benchmark.scrollTop"))," "))}let h=(()=>{class t{constructor(t){this.document=t,this.options=["100","500","1000"],this.imageNum$=new i.a([]),this.imageNumFormCtrl=new o.a(this.options[0])}ngOnInit(){}generateArray(t){this.imageNum$.next([]),setTimeout(()=>this.imageNum$.next(Array(t).fill(4)),1e3)}onSelectionChange(t){this.generateArray(+t.value)}scrollTop(){this.document.defaultView.scrollTo(0,0)}}return t.\u0275fac=function(n){return new(n||t)(a.Lb(c.d))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-benchmark"]],decls:16,vars:10,consts:[[1,"container-fluid"],[1,"d-flex","justify-content-center","mt-3"],[1,"num-img-select"],[3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"photos"],["class","title",4,"ngFor","ngForOf"],[1,"scrolltop","d-flex","justify-content-center","mt-3"],["mat-icon-button","",1,"link","d-none","d-sm-inline"],["mat-button","","color","primary",3,"click",4,"ngIf"],[3,"value"],[1,"title"],["imagely","","width","800","height","800",3,"src","alt"],["mat-button","","color","primary",3,"click"],["icon","arrow-up",1,"ml-1"]],template:function(t,n){1&t&&(a.Rb(0,"div",0),a.Rb(1,"div",1),a.Rb(2,"mat-form-field",2),a.Rb(3,"mat-label"),a.yc(4),a.bc(5,"translate"),a.Qb(),a.Rb(6,"mat-select",3),a.Yb("selectionChange",function(t){return n.onSelectionChange(t)}),a.xc(7,g,2,2,"mat-option",4),a.Qb(),a.Qb(),a.Qb(),a.Rb(8,"div"),a.Rb(9,"section",5),a.xc(10,p,4,3,"div",6),a.bc(11,"async"),a.Qb(),a.Qb(),a.Qb(),a.Rb(12,"div",7),a.Rb(13,"a",8),a.xc(14,d,5,5,"button",9),a.bc(15,"async"),a.Qb(),a.Qb()),2&t&&(a.zb(4),a.zc(a.cc(5,4,"imagely.benchmark.selectImgTotal")),a.zb(3),a.fc("ngForOf",n.options),a.zb(3),a.fc("ngForOf",a.cc(11,6,n.imageNum$)),a.zb(4),a.fc("ngIf",a.cc(15,8,n.imageNum$).length))},directives:[r.b,r.e,s.a,c.k,l.a,c.l,b.h,m.a,l.b,u.a],pipes:[f.c,c.b,c.r],styles:["img[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto}h3[_ngcontent-%COMP%]{text-align:center}div[_ngcontent-%COMP%]{margin-bottom:50px}"],changeDetection:0}),t})();var y=e("tyNb"),k=e("PCNd"),v=e("tk/3"),w=e("mqiu"),Q=e("AytR");const R=[{path:"",component:h,data:{title:"imagely.menu.benchmark"}}];function x(t){return new w.a(t,Q.a.i18nPrefix+"/assets/i18n/benchmark/",".json")}let C=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(n){return new(n||t)},imports:[[c.c,k.a,u.c,f.b.forChild({defaultLanguage:"en",useDefaultLang:!0,loader:{provide:f.a,useFactory:x,deps:[v.a]},isolate:!0}),y.d.forChild(R)]]}),t})()}}]);