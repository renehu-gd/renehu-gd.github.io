"use strict";(self.webpackChunktfin_ui_project_template=self.webpackChunktfin_ui_project_template||[]).push([[481],{481:function(e,t,n){n.r(t);var i=n(524),r=n(940),s=n(184);t.default=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{windowTitle:"Chat with an agent",icon:"WarningAlert",headText:"There was a problem connecting to chat support",subText:"Please try again later."}),(0,s.jsx)("br",{}),(0,s.jsx)(i.Z,{icon:"Success",headText:"Message sent",subText:"We will get back to you as soon as we can."}),(0,s.jsx)("br",{}),(0,s.jsx)(i.Z,{shouldShowMinimizeBtn:!0,renderIcon:function(){return(0,s.jsx)(r.Z,{})},headText:"Connecting you with a support agent.  Please wait."})]})}},524:function(e,t,n){var i=n(671),r=n(144),s=n(340),o=n(716),l=n(672),a=n(694),c=n.n(a),h=n(968),d=n(644),u=n(337),k=n(508),C=(n(791),n(184)),p=function(e){(0,s.Z)(n,e);var t=(0,o.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).renderSvg=function(){var t=e.props,n=t.icon,i=t.renderIcon;return i?i():"WarningAlert"===n?(0,C.jsx)(u.Z,{}):(0,C.jsx)(k.Z,{})},e.handleCloseBtnClick=function(){console.log("close btn click")},e.handleMinimizeBtnClick=function(){console.log("min btn click")},e.baseCls="web-chat-generic-message",e}return(0,r.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.contextCls,n=e.windowTitle,i=e.shouldShowMinimizeBtn,r=e.headText,s=e.subText;return(0,C.jsx)(d.Z,{contextCls:c()(this.baseCls,t),title:n,shouldShowMinimizeBtn:i,onMinimizeBtnClick:this.handleMinimizeBtnClick,shouldShowCloseBtn:!0,onCloseBtnClick:this.handleCloseBtnClick,children:(0,C.jsxs)("div",{className:"".concat(this.baseCls,"__message-content"),children:[this.renderSvg(),(0,C.jsx)(h.Z,{contextCls:"".concat(this.baseCls,"__headText"),headingLvl:2,children:r}),(0,C.jsx)("p",{className:"".concat(this.baseCls,"__subText"),children:s})]})})}}]),n}(l.PureComponent);t.Z=p},508:function(e,t,n){var i=n(671),r=n(144),s=n(340),o=n(716),l=n(672),a=n(694),c=n.n(a),h=n(184),d=function(e){(0,s.Z)(n,e);var t=(0,o.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).baseCls="web-chat__svg--success",e}return(0,r.Z)(n,[{key:"render",value:function(){var e=this.props.contextCls;return(0,h.jsx)("span",{className:c()(this.baseCls,e),children:(0,h.jsxs)("svg",{width:"65",height:"65",viewBox:"0 0 65 65",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsxs)("g",{clipPath:"url(#clip0_2570_232727)",children:[(0,h.jsx)("path",{d:"M32.4999 63.618C49.6859 63.618 63.618 49.6859 63.618 32.4999C63.618 15.3139 49.6859 1.38184 32.4999 1.38184C15.3139 1.38184 1.38184 15.3139 1.38184 32.4999C1.38184 49.6859 15.3139 63.618 32.4999 63.618Z",fill:"#86C5F9",stroke:"black",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,h.jsx)("path",{d:"M45.6393 22.6402C44.8248 21.9209 43.5448 21.9209 42.7303 22.8799L28.1854 40.1428L22.1347 34.2687C21.3202 33.4295 20.0402 33.5494 19.2257 34.3885C18.4112 35.2277 18.5276 36.5464 19.3421 37.3856L26.6727 44.4586C26.7891 44.5785 26.7891 44.6983 26.9054 44.6983C27.2545 45.058 27.72 45.1779 28.1854 45.1779C28.7672 45.1779 29.2326 44.9381 29.6981 44.5785C29.8144 44.4586 29.8144 44.3387 29.9308 44.2188L45.872 25.6372C46.5702 24.6781 46.4538 23.3594 45.6393 22.6402Z",fill:"white",stroke:"black",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,h.jsx)("defs",{children:(0,h.jsx)("clipPath",{id:"clip0_2570_232727",children:(0,h.jsx)("rect",{width:"64",height:"64",fill:"white",transform:"translate(0.5 0.5)"})})})]})})}}]),n}(l.PureComponent);t.Z=d},337:function(e,t,n){var i=n(671),r=n(144),s=n(340),o=n(716),l=n(672),a=n(694),c=n.n(a),h=n(184),d=function(e){(0,s.Z)(n,e);var t=(0,o.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).baseCls="web-chat__svg--warningAlert",e}return(0,r.Z)(n,[{key:"render",value:function(){var e=this.props.contextCls;return(0,h.jsx)("span",{className:c()(this.baseCls,e),children:(0,h.jsxs)("svg",{width:"69",height:"65",viewBox:"0 0 69 65",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsxs)("g",{clipPath:"url(#clip0_2431_240914)",children:[(0,h.jsx)("path",{d:"M67.5073 4.70357V44.3449C67.5073 46.2171 65.9607 47.7637 64.0886 47.7637H43.6574L34.4593 63.7179L25.3426 47.7637H4.91144C3.03926 47.7637 1.49268 46.2171 1.49268 44.3449V4.70357C1.49268 2.83139 3.03926 1.28481 4.91144 1.28481H64.0886C65.9607 1.20341 67.5073 2.74999 67.5073 4.70357Z",fill:"white"}),(0,h.jsx)("path",{d:"M25.3426 47.7655H4.91144C3.03926 47.7655 1.49268 46.2189 1.49268 44.3467V4.70538C1.49268 2.8332 3.03926 1.28662 4.91144 1.28662H64.0886C65.9607 1.28662 67.5073 2.8332 67.5073 4.70538V44.3467C67.5073 46.2189 65.9607 47.7655 64.0886 47.7655H43.6574",stroke:"black",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,h.jsx)("path",{d:"M43.6577 47.7637L34.541 63.7179",stroke:"black",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,h.jsx)("path",{d:"M34.5404 63.7184L25.3423 47.7642",stroke:"black",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,h.jsx)("path",{d:"M36.0055 7.79658L53.7505 39.5422C54.4017 40.6818 53.5877 42.0656 52.2853 42.0656H16.7139C15.4115 42.0656 14.5975 40.6818 15.2487 39.5422L32.9937 7.79658C33.6449 6.657 35.3543 6.657 36.0055 7.79658Z",fill:"#FFAD9F"}),(0,h.jsx)("path",{d:"M34.4589 17.2393C35.1101 17.2393 35.6799 17.8091 35.6799 18.4602V30.4259C35.6799 31.0771 35.1101 31.6469 34.4589 31.6469C33.8077 31.6469 33.2379 31.0771 33.2379 30.4259V18.4602C33.2379 17.8091 33.8077 17.2393 34.4589 17.2393Z",stroke:"black",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,h.jsx)("path",{d:"M34.4589 34.6582C35.1101 34.6582 35.6799 35.228 35.6799 35.8792C35.6799 36.5304 35.1101 37.1002 34.4589 37.1002C33.8077 37.1002 33.2379 36.5304 33.2379 35.8792C33.2379 35.228 33.8077 34.6582 34.4589 34.6582Z",stroke:"black",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,h.jsx)("path",{d:"M36.0055 7.79658L53.7505 39.5422C54.4017 40.6818 53.5877 42.0656 52.2853 42.0656H16.7139C15.4115 42.0656 14.5975 40.6818 15.2487 39.5422L32.9937 7.79658C33.6449 6.657 35.3543 6.657 36.0055 7.79658Z",stroke:"black",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,h.jsx)("defs",{children:(0,h.jsx)("clipPath",{id:"clip0_2431_240914",children:(0,h.jsx)("rect",{width:"68",height:"64",fill:"white",transform:"translate(0.5 0.5)"})})})]})})}}]),n}(l.PureComponent);t.Z=d},940:function(e,t,n){var i=n(671),r=n(144),s=n(340),o=n(716),l=n(672),a=n(694),c=n.n(a),h=n(184),d=function(e){(0,s.Z)(n,e);var t=(0,o.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).baseCls="web-chat__svg--writeAMessage",e}return(0,r.Z)(n,[{key:"render",value:function(){var e=this.props.contextCls;return(0,h.jsx)("span",{className:c()(this.baseCls,e),children:(0,h.jsxs)("svg",{width:"65",height:"64",viewBox:"0 0 65 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsxs)("g",{clipPath:"url(#clip0_2619_245666)",children:[(0,h.jsx)("path",{d:"M48.1507 18.3929V49.4647C48.1507 50.8326 47.0759 51.9074 45.708 51.9074H31.2469L18.2515 63.1441V51.9074H3.7904C2.42247 51.9074 1.34766 50.8326 1.34766 49.4647V18.3929C1.34766 17.025 2.42247 15.9502 3.7904 15.9502H45.8057C47.0759 15.9502 48.1507 17.025 48.1507 18.3929Z",fill:"white"}),(0,h.jsx)("path",{d:"M18.2515 51.9074H3.69275C2.32481 51.9074 1.25 50.8326 1.25 49.4647V18.3929C1.25 17.025 2.32481 15.9502 3.69275 15.9502H45.708C47.076 15.9502 48.1508 17.025 48.1508 18.3929V49.4647C48.1508 50.8326 47.076 51.9074 45.708 51.9074H31.2469",stroke:"black",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,h.jsx)("path",{d:"M31.2469 51.9072L18.2515 63.2416",stroke:"black",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,h.jsx)("path",{d:"M18.2515 63.2416V51.9072",stroke:"black",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,h.jsx)("path",{d:"M54.8081 4.45504L57.4234 1.83972C58.8764 0.386761 61.2011 0.386761 62.6541 1.83972C64.107 3.29267 64.107 5.6174 62.6541 7.07036L60.0387 9.68567L54.8081 4.45504Z",fill:"#FFAD9F",stroke:"black",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,h.jsx)("path",{d:"M54.7996 4.43768L28.2246 31.0127L33.43 36.2181L60.005 9.6431L54.7996 4.43768Z",fill:"#86C5F9"}),(0,h.jsx)("path",{d:"M24.7803 39.7136L33.4011 36.2265L28.2674 31.0928L24.7803 39.7136Z",fill:"#FFAD9F",stroke:"black",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,h.jsx)("path",{d:"M33.4011 36.2273L24.7803 39.7144L28.2674 31.0936L54.808 4.45605L60.0387 9.68669L33.4011 36.2273Z",stroke:"black",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,h.jsx)("path",{d:"M54.8081 4.45504L57.4234 1.83972C58.8764 0.386761 61.2011 0.386761 62.6541 1.83972C64.107 3.29267 64.107 5.6174 62.6541 7.07036L60.0387 9.68567L54.8081 4.45504Z",stroke:"black",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,h.jsx)("path",{d:"M28.2676 31.0928L33.4014 36.2265",stroke:"black",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,h.jsx)("defs",{children:(0,h.jsx)("clipPath",{id:"clip0_2619_245666",children:(0,h.jsx)("rect",{width:"64",height:"64",fill:"white",transform:"translate(0.5)"})})})]})})}}]),n}(l.PureComponent);t.Z=d},644:function(e,t,n){var i=n(671),r=n(144),s=n(340),o=n(716),l=n(672),a=n(694),c=n.n(a),h=n(596),d=n(737),u=n(540),k=n(811),C=(n(747),n(184)),p=function(e){(0,s.Z)(n,e);var t=(0,o.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).renderHeading=function(){var t=e.props,n=t.title,i=t.shouldShowMinimizeBtn,r=t.shouldShowCloseBtn;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("div",{className:"".concat(e.baseCls,"__title"),children:n}),i&&e.renderMinimizeBtn(),r&&e.renderCloseBtn()]})},e.renderCloseBtn=function(){var t=e.props.onCloseBtnClick;return(0,C.jsx)("div",{className:c()(e.baseTitleBtnContainerCls,"".concat(e.baseTitleBtnContainerCls,"--close-btn-container")),children:(0,C.jsx)(k.Z,{contextCls:c()("".concat(e.baseCls,"__close-btn")),renderIcon:e.renderCloseBtnIcon,onClick:t,"aria-label":"Close Button"})})},e.renderMinimizeBtn=function(){var t=e.props.onMinimizeBtnClick;return(0,C.jsx)("div",{className:c()(e.baseTitleBtnContainerCls,"".concat(e.baseTitleBtnContainerCls,"--minimize-btn-container")),children:(0,C.jsx)(k.Z,{contextCls:c()("".concat(e.baseCls,"__minimize-btn")),renderIcon:e.renderMinimizeBtnIcon,onClick:t,"aria-label":"Minimize Button"})})},e.renderMinimizeBtnIcon=function(){return(0,C.jsx)(d.Z,{})},e.renderCloseBtnIcon=function(){return(0,C.jsx)(u.Z,{})},e.baseCls="web-chat-window-container",e.baseTitleBtnContainerCls="".concat(e.baseCls,"__title-btn-container"),e}return(0,r.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.contextCls,n=e.children;return(0,C.jsx)(h.Z,{renderHeading:this.renderHeading,contextCls:c()(this.baseCls,t),children:n})}}]),n}(l.PureComponent);p.defaultProps={shouldShowMinimizeBtn:!1,shouldShowCloseBtn:!1,onCloseBtnClick:function(){return Promise.resolve()},onMinimizeBtnClick:function(){return Promise.resolve()}},t.Z=p},791:function(){},747:function(){}}]);
//# sourceMappingURL=481.18acb249.chunk.js.map