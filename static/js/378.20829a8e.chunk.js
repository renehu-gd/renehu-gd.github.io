"use strict";(self.webpackChunktfin_ui_project_template=self.webpackChunktfin_ui_project_template||[]).push([[378],{6481:function(e,t,n){n.r(t);var o=n(5861),s=n(1413),r=n(4925),i=n(5671),a=n(3144),l=n(9340),c=n(5716),u=n(7757),h=n.n(u),p=n(1694),d=n.n(p),C=n(2672),f=n(3856),v=n(7180),g=n(5160),w=n(2249),x=n(1386),Z=n(5989),m=(n(2336),n(3703)),y=n(9868),k=n(184),S=["contextCls"],b=["contextCls"],E=["contextCls"],P=["contextCls"],T=["isAgentOnline","isSuccess","errors"];(0,f.YV)({defaultTranslations:{"en-US":function(){return n.e(661).then(n.t.bind(n,6661,19))}},partnerId:"walmart",shouldLoadStrings:!1});var W=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={shouldShowChooseOptionWindow:!1,shouldShowErrorPage:!1,shouldShowHoopWindow:!1},e.renderHoopWindow=function(){var t=e.props,n=t.contextCls,o=(0,r.Z)(t,S),i=e.state.chatConfigs;return(0,k.jsx)(x.Z,(0,s.Z)((0,s.Z)({contextCls:d()(e.baseCls,n),hoop:i.hoop,isLeaveAgentMessageEnabled:i.isLeaveAgentMessageEnabled},o),i))},e.renderChooseOptionWindow=function(){var t=e.props,n=t.contextCls,o=(0,r.Z)(t,b),i=e.state.chatConfigs;return(0,k.jsx)(v.Z,(0,s.Z)((0,s.Z)({contextCls:d()(e.baseCls,n),ewt:i.ewt},o),i))},e.renderErrorPage=function(){var t=e.props,n=t.contextCls,o=(0,r.Z)(t,E);return(0,k.jsx)(w.Z,(0,s.Z)({contextCls:d()(e.baseCls,n),icon:"WarningAlert",windowTitle:"Chat with an agent",headText:"There was a problem connecting to chat support",subText:"Please try again later."},o))},e.baseCls="web-chat-module",e}return(0,a.Z)(n,[{key:"render",value:function(){var e=this.state.isDesignTokenApplied,t=this.props.isI18nReady;return e&&t&&this.renderContent()}},{key:"componentDidMount",value:function(){var e=this.props.accessToken;e&&(y.Z.accessToken=e),this.setContainerElementStyle(),this.fetchConfig(),this.applyDesignToken()}},{key:"componentWillUnmount",value:function(){this.restoreContainerElementStyle()}},{key:"renderContent",value:function(){var e=this.state,t=(e.shouldShowChooseOptionWindow,e.shouldShowErrorPage,e.shouldShowHoopWindow,this.props),n=t.contextCls,o=(0,r.Z)(t,P);return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(g.Z,(0,s.Z)({contextCls:d()(this.baseCls,n)},o))})}},{key:"fetchConfig",value:function(){var e=(0,o.Z)(h().mark((function e(){var t,n,o,s,i;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,Z.Z.getChatConfig();case 4:n=e.sent,o=n.isAgentOnline,s=n.isSuccess,n.errors,i=(0,r.Z)(n,T),t.chatConfigs=i,o?t.shouldShowChooseOptionWindow=!0:t.shouldShowHoopWindow=!0,s||(t.shouldShowErrorPage=!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.shouldShowErrorPage=!0;case 14:return e.prev=14,this.setState(t),e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"applyDesignToken",value:function(){var e=(0,o.Z)(h().mark((function e(){var t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.props.brand,e.next=4,m.Z.import(t);case 4:this.setState({isDesignTokenApplied:!0}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.debug(e.t0.message);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"setContainerElementStyle",value:function(){var e=this.props.containerElement;e&&(this.setState({originContainerElementPosition:e.style.position}),e.style.position="relative")}},{key:"restoreContainerElementStyle",value:function(){var e=this.props.containerElement,t=this.state.originContainerElementPosition;e&&t&&(e.style.position=t)}}]),n}(C.PureComponent);W.defaultProps={onChatWidgetClose:function(){return Promise.resolve()}},t.default=(0,f.Zh)(W)}}]);
//# sourceMappingURL=378.20829a8e.chunk.js.map