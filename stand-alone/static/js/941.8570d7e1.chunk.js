"use strict";(self.webpackChunktfin_ui_project_template=self.webpackChunktfin_ui_project_template||[]).push([[941],{4824:function(e,n,t){t.r(n);var r=t(2672),a=t.n(r),s=t(7082),o=t(1250),i=t(5861),c=t(1413),u=t(4925),l=t(5671),d=t(3144),p=t(136),h=t(4104),f=t(7757),g=t.n(f),x=(t(1694),t(3457)),v=t(2478),C=t(5154),b=t(4906),D=t(4586),m=t(6511),Z=t(2889),k=t(4156),j=t(4605),S=t(8810),w=t(9306),R=t(2496),E=t(9551),L=t(9468),y=t(7212),_=(t(2238),t(184)),I=["contextCls"],P=["contextCls"],T=["contextCls"],A=function(e){(0,p.Z)(r,e);var n=(0,h.Z)(r);function r(){var e;(0,l.Z)(this,r);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=n.call.apply(n,[this].concat(s))).state={isLoading:!0,isI18nReady:!1,hasError:!1},e.renderLandingPage=function(){var n=e.props,t=(n.contextCls,(0,u.Z)(n,I)),r=e.state.isDDFeatureEnabled;return(0,_.jsx)(D.Z,(0,c.Z)((0,c.Z)({},t),{},{contextCls:"".concat(e.baseCls,"__landing"),isDDFeatureEnabled:r}))},e.renderLoading=function(){var n=Object.assign({},e.props),t=(0,x.i0)("ddSwitchModule.loading.title");return(0,_.jsx)(Z.Z,(0,c.Z)((0,c.Z)({},n),{},{contextCls:"".concat(e.baseCls,"__loading"),title:t}))},e.renderErrorPage=function(){var n=e.props;n.contextCls,(0,u.Z)(n,P);return(0,_.jsx)("h3",{children:"Error page"})},e.fetchConfig=(0,i.Z)(g().mark((function n(){var t,r,a;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.initI18nConfig();case 2:return t={isLoading:!1},n.prev=3,n.next=6,(0,j.Bs)();case 6:r=n.sent,a=r.isDDFeatureEnabled,t.isDDFeatureEnabled=a,a&&(t.shouldShowLandingPage=!0),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(3),t.hasError=!0;case 15:return n.prev=15,e.setState(t),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[3,12,15,18]])}))),e.initialSetup=function(){var n=e.props,t=n.accessToken,r=n.applicationId,a=n.platform,s=n.env,o=n.brand;t&&(0,v.QW)(t),r&&(0,w.u0)(r),o&&(E.Z.Brand=o),a&&(0,R.VY)(a.toUpperCase()),s&&((0,w.Nb)(s.toUpperCase()),E.Z.Environment=s.toUpperCase(),(0,w.S9)())},e.initI18nConfig=(0,i.Z)(g().mark((function n(){var r;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={defaultTranslations:{"en-US":function(){return t.e(661).then(t.t.bind(t,6661,19))}},shouldLoadStrings:!1},n.next=3,(0,x.YV)(r);case 3:if("bound bound value"!==n.sent.name){n.next=8;break}return n.next=7,(0,x.YV)(r);case 7:n.sent;case 8:e.setState({isI18nReady:!0});case 9:case"end":return n.stop()}}),n)}))),e.applyDesignToken=(0,i.Z)(g().mark((function n(){var t;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.props.brand,n.next=3,(0,S.p)(t);case 3:e.setState({isDesignTokenApplied:!0});case 4:case"end":return n.stop()}}),n)}))),e.baseCls="dd-switch-module",e}return(0,d.Z)(r,[{key:"render",value:function(){var e=this.state,n=(e.isDesignTokenApplied,e.isI18nReady),t=e.isLoading,r=e.hasError,a=(e.isDDFeatureEnabled,this.props);a.contextCls,(0,u.Z)(a,T);return n&&(0,_.jsx)(C.Z,{contextCls:"".concat(this.baseCls,"__loading"),isLoading:t,hasError:r,renderLoadingState:this.renderLoading,renderErrorState:this.renderErrorPage,children:(0,_.jsxs)(s.Routes,{children:[(0,_.jsx)(s.Route,{path:"/*",element:(0,_.jsx)(D.Z,{})}),(0,_.jsx)(s.Route,{path:y.l.LANDING,element:this.renderLandingPage()}),(0,_.jsx)(s.Route,{path:y.l.BUMP,element:(0,_.jsx)(m.Z,{})}),(0,_.jsx)(s.Route,{path:y.l.DD_FORM,element:(0,_.jsx)(k.Z,{})})]})})}},{key:"componentDidMount",value:function(){this.initialSetup(),this.fetchConfig(),this.applyDesignToken()}},{key:"componentWillUnmount",value:function(){(0,w.cG)()}}]),r}(r.PureComponent);A.defaultProps={onDDSwitchClose:function(){return Promise.resolve()},platform:L.iw.BAAS,brand:L.cg.GO2BANK,env:L.Gv.PROD};var F=(0,b.withRouter)(A),B=function(e){e&&e instanceof Function&&t.e(787).then(t.bind(t,787)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,s=n.getLCP,o=n.getTTFB;t(e),r(e),a(e),s(e),o(e)}))};var U=document.getElementById("root");o.createRoot(U).render((0,_.jsx)(a().StrictMode,{children:(0,_.jsxs)(s.BrowserRouter,{children:[(0,_.jsx)("p",{children:"This is a test page."}),(0,_.jsx)(F,{accessToken:"accessToken",brand:"go2bank",accountIdentifier:"accountIdentifier",onDDSwitchClose:function(){console.debug("DD Switch has been closed")},applicationId:"10001",env:"QA",platform:"BAAS"})]})})),B()},1250:function(e,n,t){var r=t(6223);n.createRoot=r.createRoot,n.hydrateRoot=r.hydrateRoot}}]);
//# sourceMappingURL=941.8570d7e1.chunk.js.map