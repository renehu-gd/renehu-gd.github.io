var ChatModule;!function(){"use strict";var e={2400:function(e,t,n){var r={"./ChatModule":function(){return Promise.all([n.e(576),n.e(296),n.e(378)]).then((function(){return function(){return n(6481)}}))}},o=function(e,t){return n.R=t,t=n.o(r,e)?r[e]():Promise.resolve().then((function(){throw new Error('Module "'+e+'" does not exist in container.')})),n.R=void 0,t},u=function(e,t){if(n.S){var r="default",o=n.S[r];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return n.S[r]=e,n.I(r,t)}};n.d(t,{get:function(){return o},init:function(){return u}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r](u,u.exports,n),u.exports}n.m=e,n.c=t,n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var u=Object.create(null);n.r(u);var i={};e=e||[null,t({}),t([]),t(t)];for(var f=2&o&&r;"object"==typeof f&&!~e.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((function(e){i[e]=function(){return r[e]}}));return i.default=function(){return r},n.d(u,i),u}}(),n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))},n.u=function(e){return"static/js/"+e+"."+{164:"2034fb17",296:"70266cce",378:"b000e733",576:"5b50ef38",661:"534115b0",756:"e991d86a",791:"fb4f0ad6"}[e]+".chunk.js"},n.miniCssF=function(e){return"static/css/"+e+".25e0a036.chunk.css"},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={},t="tfin-ui-project-template:";n.l=function(r,o,u,i){if(e[r])e[r].push(o);else{var f,c;if(void 0!==u)for(var a=document.getElementsByTagName("script"),l=0;l<a.length;l++){var s=a[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+u){f=s;break}}f||(c=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,n.nc&&f.setAttribute("nonce",n.nc),f.setAttribute("data-webpack",t+u),f.src=r),e[r]=[o];var d=function(t,n){f.onerror=f.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=d.bind(null,f.onerror),f.onload=d.bind(null,f.onload),c&&document.head.appendChild(f)}}}(),n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){n.S={};var e={},t={};n.I=function(r,o){o||(o=[]);var u=t[r];if(u||(u=t[r]={}),!(o.indexOf(u)>=0)){if(o.push(u),e[r])return e[r];n.o(n.S,r)||(n.S[r]={});var i=n.S[r],f="tfin-ui-project-template",c=function(e,t,n,r){var o=i[e]=i[e]||{},u=o[t];(!u||!u.loaded&&(!r!=!u.eager?r:f>u.from))&&(o[t]={get:n,from:f,eager:!!r})},a=[];if("default"===r)c("react-dom","18.0.0",(function(){return Promise.all([n.e(164),n.e(756)]).then((function(){return function(){return n(4164)}}))})),c("react","18.0.0",(function(){return n.e(791).then((function(){return function(){return n(2791)}}))}));return a.length?e[r]=Promise.all(a).then((function(){return e[r]=1})):e[r]=1}}}(),function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),function(){var e=function(e){var t=function(e){return e.split(".").map((function(e){return+e==e?+e:e}))},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),r=n[1]?t(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,t(n[2]))),n[3]&&(r.push([]),r.push.apply(r,t(n[3]))),r},t=function(t,n){t=e(t),n=e(n);for(var r=0;;){if(r>=t.length)return r<n.length&&"u"!=(typeof n[r])[0];var o=t[r],u=(typeof o)[0];if(r>=n.length)return"u"==u;var i=n[r],f=(typeof i)[0];if(u!=f)return"o"==u&&"n"==f||"s"==f||"u"==u;if("o"!=u&&"u"!=u&&o!=i)return o<i;r++}},r=function(e){var t=e[0],n="";if(1===e.length)return"*";if(t+.5){n+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var o=1,u=1;u<e.length;u++)o--,n+="u"==(typeof(f=e[u]))[0]?"-":(o>0?".":"")+(o=2,f);return n}var i=[];for(u=1;u<e.length;u++){var f=e[u];i.push(0===f?"not("+c()+")":1===f?"("+c()+" || "+c()+")":2===f?i.pop()+" "+i.pop():r(f))}return c();function c(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=function(t,n){if(0 in t){n=e(n);var r=t[0],u=r<0;u&&(r=-r-1);for(var i=0,f=1,c=!0;;f++,i++){var a,l,s=f<t.length?(typeof t[f])[0]:"";if(i>=n.length||"o"==(l=(typeof(a=n[i]))[0]))return!c||("u"==s?f>r&&!u:""==s!=u);if("u"==l){if(!c||"u"!=s)return!1}else if(c)if(s==l)if(f<=r){if(a!=t[f])return!1}else{if(u?a>t[f]:a<t[f])return!1;a!=t[f]&&(c=!1)}else if("s"!=s&&"n"!=s){if(u||f<=r)return!1;c=!1,f--}else{if(f<=r||l<s!=u)return!1;c=!1}else"s"!=s&&"n"!=s&&(c=!1,f--)}}var d=[],p=d.pop.bind(d);for(i=1;i<t.length;i++){var h=t[i];d.push(1==h?p()|p():2==h?p()&p():h?o(h,n):!p())}return!!p()},u=function(e,n){var r=e[n];return Object.keys(r).reduce((function(e,n){return!e||!r[e].loaded&&t(e,n)?n:e}),0)},i=function(e,t,n,o){return"Unsatisfied version "+n+" from "+(n&&e[t][n].from)+" of shared singleton module "+t+" (required "+r(o)+")"},f=function(e,t,n,r){var o=u(e,n);return a(e[n][o])},c=function(e,t,n,r){var f=u(e,n);return o(r,f)||"undefined"!==typeof console&&console.warn&&console.warn(i(e,n,f,r)),a(e[n][f])},a=function(e){return e.loaded=1,e.get()},l=function(e){return function(t,r,o,u){var i=n.I(t);return i&&i.then?i.then(e.bind(e,t,n.S[t],r,o,u)):e(t,n.S[t],r,o,u)}},s=l((function(e,t,r,o){return t&&n.o(t,r)?f(t,0,r):o()})),d=l((function(e,t,r,o,u){return t&&n.o(t,r)?c(t,0,r,o):u()})),p={},h={756:function(){return d("default","react",[1,18,0,0],(function(){return n.e(791).then((function(){return function(){return n(2791)}}))}))},1672:function(){return d("default","react",[1,18],(function(){return n.e(791).then((function(){return function(){return n(2791)}}))}))},2672:function(){return d("default","react",[4,18,0,0],(function(){return n.e(791).then((function(){return function(){return n(2791)}}))}))},5183:function(){return d("default","react-dom",[1,18],(function(){return Promise.all([n.e(164),n.e(756)]).then((function(){return function(){return n(4164)}}))}))},7082:function(){return s("default","react",(function(){return n.e(791).then((function(){return function(){return n(2791)}}))}))}},v={296:[1672,2672,5183,7082],756:[756]};n.f.consumes=function(e,t){n.o(v,e)&&v[e].forEach((function(e){if(n.o(p,e))return t.push(p[e]);var r=function(t){p[e]=0,n.m[e]=function(r){delete n.c[e],r.exports=t()}},o=function(t){delete p[e],n.m[e]=function(r){throw delete n.c[e],t}};try{var u=h[e]();u.then?t.push(p[e]=u.then(r).catch(o)):r(u)}catch(i){o(i)}}))}}(),function(){var e=function(e){return new Promise((function(t,r){var o=n.miniCssF(e),u=n.p+o;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(i=n[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){var i;if((o=(i=u[r]).getAttribute("data-href"))===e||o===t)return i}}(o,u))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(u){if(o.onerror=o.onload=null,"load"===u.type)n();else{var i=u&&("load"===u.type?"missing":u.type),f=u&&u.target&&u.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+f+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=f,o.parentNode.removeChild(o),r(c)}},o.href=t;var u=document.querySelector("body");u.parentNode.insertBefore(o,u.nextSibling)}(e,u,t,r)}))},t={703:0};n.f.miniCss=function(n,r){t[n]?r.push(t[n]):0!==t[n]&&{378:1}[n]&&r.push(t[n]=e(n).then((function(){t[n]=0}),(function(e){throw delete t[n],e})))}}(),function(){var e={703:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(756!=t){var u=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=u);var i=n.p+n.u(t),f=new Error;n.l(i,(function(r){if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+u+": "+i+")",f.name="ChunkLoadError",f.type=u,f.request=i,o[1](f)}}),"chunk-"+t,t)}else e[t]=0};var t=function(t,r){var o,u,i=r[0],f=r[1],c=r[2],a=0;if(i.some((function(t){return 0!==e[t]}))){for(o in f)n.o(f,o)&&(n.m[o]=f[o]);if(c)c(n)}for(t&&t(r);a<i.length;a++)u=i[a],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0},r=self.webpackChunktfin_ui_project_template=self.webpackChunktfin_ui_project_template||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n(2400);ChatModule=r}();
//# sourceMappingURL=ChatModuleEntry.js.map