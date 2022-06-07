var ChatModule;!function(){"use strict";var n={2400:function(n,e,t){var r={"./ChatModule":function(){return Promise.all([t.e(470),t.e(18)]).then((function(){return function(){return t(6481)}}))}},u=function(n,e){return t.R=e,e=t.o(r,n)?r[n]():Promise.resolve().then((function(){throw new Error('Module "'+n+'" does not exist in container.')})),t.R=void 0,e},o=function(n,e){if(t.S){var r="default",u=t.S[r];if(u&&u!==n)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[r]=n,t.I(r,e)}};t.d(e,{get:function(){return u},init:function(){return o}})}},e={};function t(r){var u=e[r];if(void 0!==u)return u.exports;var o=e[r]={exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.c=e,t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,{a:e}),e},t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))},t.u=function(n){return"static/js/"+n+"."+{18:"c5841d05",164:"2034fb17",470:"9425ce4f",756:"e991d86a",791:"fb4f0ad6"}[n]+".chunk.js"},t.miniCssF=function(n){return"static/css/"+n+".aba00173.chunk.css"},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},function(){var n={},e="tfin-ui-project-template:";t.l=function(r,u,o,i){if(n[r])n[r].push(u);else{var f,a;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var s=c[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==e+o){f=s;break}}f||(a=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,t.nc&&f.setAttribute("nonce",t.nc),f.setAttribute("data-webpack",e+o),f.src=r),n[r]=[u];var d=function(e,t){f.onerror=f.onload=null,clearTimeout(h);var u=n[r];if(delete n[r],f.parentNode&&f.parentNode.removeChild(f),u&&u.forEach((function(n){return n(t)})),e)return e(t)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=d.bind(null,f.onerror),f.onload=d.bind(null,f.onload),a&&document.head.appendChild(f)}}}(),t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},function(){t.S={};var n={},e={};t.I=function(r,u){u||(u=[]);var o=e[r];if(o||(o=e[r]={}),!(u.indexOf(o)>=0)){if(u.push(o),n[r])return n[r];t.o(t.S,r)||(t.S[r]={});var i=t.S[r],f="tfin-ui-project-template",a=function(n,e,t,r){var u=i[n]=i[n]||{},o=u[e];(!o||!o.loaded&&(!r!=!o.eager?r:f>o.from))&&(u[e]={get:t,from:f,eager:!!r})},c=[];if("default"===r)a("react-dom","18.0.0",(function(){return Promise.all([t.e(164),t.e(756)]).then((function(){return function(){return t(4164)}}))})),a("react","18.0.0",(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}));return c.length?n[r]=Promise.all(c).then((function(){return n[r]=1})):n[r]=1}}}(),t.p="/",function(){var n=function(n){var e=function(n){return n.split(".").map((function(n){return+n==n?+n:n}))},t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(n),r=t[1]?e(t[1]):[];return t[2]&&(r.length++,r.push.apply(r,e(t[2]))),t[3]&&(r.push([]),r.push.apply(r,e(t[3]))),r},e=function(e,t){e=n(e),t=n(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var u=e[r],o=(typeof u)[0];if(r>=t.length)return"u"==o;var i=t[r],f=(typeof i)[0];if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;if("o"!=o&&"u"!=o&&u!=i)return u<i;r++}},r=function(n){var e=n[0],t="";if(1===n.length)return"*";if(e+.5){t+=0==e?">=":-1==e?"<":1==e?"^":2==e?"~":e>0?"=":"!=";for(var u=1,o=1;o<n.length;o++)u--,t+="u"==(typeof(f=n[o]))[0]?"-":(u>0?".":"")+(u=2,f);return t}var i=[];for(o=1;o<n.length;o++){var f=n[o];i.push(0===f?"not("+a()+")":1===f?"("+a()+" || "+a()+")":2===f?i.pop()+" "+i.pop():r(f))}return a();function a(){return i.pop().replace(/^\((.+)\)$/,"$1")}},u=function(e,t){if(0 in e){t=n(t);var r=e[0],o=r<0;o&&(r=-r-1);for(var i=0,f=1,a=!0;;f++,i++){var c,l,s=f<e.length?(typeof e[f])[0]:"";if(i>=t.length||"o"==(l=(typeof(c=t[i]))[0]))return!a||("u"==s?f>r&&!o:""==s!=o);if("u"==l){if(!a||"u"!=s)return!1}else if(a)if(s==l)if(f<=r){if(c!=e[f])return!1}else{if(o?c>e[f]:c<e[f])return!1;c!=e[f]&&(a=!1)}else if("s"!=s&&"n"!=s){if(o||f<=r)return!1;a=!1,f--}else{if(f<=r||l<s!=o)return!1;a=!1}else"s"!=s&&"n"!=s&&(a=!1,f--)}}var d=[],h=d.pop.bind(d);for(i=1;i<e.length;i++){var p=e[i];d.push(1==p?h()|h():2==p?h()&h():p?u(p,t):!h())}return!!h()},o=function(n,t){var r=n[t];return Object.keys(r).reduce((function(n,t){return!n||!r[n].loaded&&e(n,t)?t:n}),0)},i=function(n,e,t,u){return"Unsatisfied version "+t+" from "+(t&&n[e][t].from)+" of shared singleton module "+e+" (required "+r(u)+")"},f=function(n,e,t,r){var u=o(n,t);return c(n[t][u])},a=function(n,e,t,r){var f=o(n,t);return u(r,f)||"undefined"!==typeof console&&console.warn&&console.warn(i(n,t,f,r)),c(n[t][f])},c=function(n){return n.loaded=1,n.get()},l=function(n){return function(e,r,u,o){var i=t.I(e);return i&&i.then?i.then(n.bind(n,e,t.S[e],r,u,o)):n(e,t.S[e],r,u,o)}},s=l((function(n,e,r,u){return e&&t.o(e,r)?f(e,0,r):u()})),d=l((function(n,e,r,u,o){return e&&t.o(e,r)?a(e,0,r,u):o()})),h={},p={756:function(){return d("default","react",[1,18,0,0],(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}))},1672:function(){return d("default","react",[1,18],(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}))},2672:function(){return d("default","react",[4,18,0,0],(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}))},7082:function(){return s("default","react",(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}))}},v={18:[1672,2672,7082],756:[756]};t.f.consumes=function(n,e){t.o(v,n)&&v[n].forEach((function(n){if(t.o(h,n))return e.push(h[n]);var r=function(e){h[n]=0,t.m[n]=function(r){delete t.c[n],r.exports=e()}},u=function(e){delete h[n],t.m[n]=function(r){throw delete t.c[n],e}};try{var o=p[n]();o.then?e.push(h[n]=o.then(r).catch(u)):r(o)}catch(i){u(i)}}))}}(),function(){var n=function(n){return new Promise((function(e,r){var u=t.miniCssF(n),o=t.p+u;if(function(n,e){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var u=(i=t[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===n||u===e))return i}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var i;if((u=(i=o[r]).getAttribute("data-href"))===n||u===e)return i}}(u,o))return e();!function(n,e,t,r){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onerror=u.onload=function(o){if(u.onerror=u.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),f=o&&o.target&&o.target.href||e,a=new Error("Loading CSS chunk "+n+" failed.\n("+f+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=i,a.request=f,u.parentNode.removeChild(u),r(a)}},u.href=e,document.head.appendChild(u)}(n,o,e,r)}))},e={703:0};t.f.miniCss=function(t,r){e[t]?r.push(e[t]):0!==e[t]&&{18:1}[t]&&r.push(e[t]=n(t).then((function(){e[t]=0}),(function(n){throw delete e[t],n})))}}(),function(){var n={703:0};t.f.j=function(e,r){var u=t.o(n,e)?n[e]:void 0;if(0!==u)if(u)r.push(u[2]);else if(756!=e){var o=new Promise((function(t,r){u=n[e]=[t,r]}));r.push(u[2]=o);var i=t.p+t.u(e),f=new Error;t.l(i,(function(r){if(t.o(n,e)&&(0!==(u=n[e])&&(n[e]=void 0),u)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",f.name="ChunkLoadError",f.type=o,f.request=i,u[1](f)}}),"chunk-"+e,e)}else n[e]=0};var e=function(e,r){var u,o,i=r[0],f=r[1],a=r[2],c=0;if(i.some((function(e){return 0!==n[e]}))){for(u in f)t.o(f,u)&&(t.m[u]=f[u]);if(a)a(t)}for(e&&e(r);c<i.length;c++)o=i[c],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0},r=self.webpackChunktfin_ui_project_template=self.webpackChunktfin_ui_project_template||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t(2400);ChatModule=r}();
//# sourceMappingURL=ChatModuleEntry.js.map