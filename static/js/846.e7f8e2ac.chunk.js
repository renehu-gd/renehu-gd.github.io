"use strict";(self.webpackChunktfin_ui_project_template=self.webpackChunktfin_ui_project_template||[]).push([[846],{6481:function(e,t,n){n.r(t);var o=n(5861),s=n(1413),r=n(4925),i=n(5671),a=n(3144),c=n(9340),l=n(5716),h=n(7757),u=n.n(h),p=n(1694),C=n.n(p),d=n(2672),f=n(7180),v=n(2249),w=n(1386),g=n(5160),x=n(5989),k=(n(2336),n(3703)),y=n(9868),Z=n(184),m=["contextCls"],S=["contextCls"],b=["contextCls"],E=["isAgentOnline","isSuccess","errors"],T=function(e){(0,c.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={shouldShowChooseOptionWindow:!1,shouldShowErrorPage:!1,shouldShowHoopWindow:!1,shouldShowChat:!0},e.renderHoopWindow=function(){var t=e.props,n=t.contextCls,o=(0,r.Z)(t,m),i=e.state.chatConfigs;return(0,Z.jsx)(w.Z,(0,s.Z)((0,s.Z)({contextCls:C()(e.baseCls,n),hoop:i.hoop,isLeaveAgentMessageEnabled:i.isLeaveAgentMessageEnabled},o),i))},e.renderChooseOptionWindow=function(){var t=e.props,n=t.contextCls,o=(0,r.Z)(t,S),i=e.state.chatConfigs;return(0,Z.jsx)(f.Z,(0,s.Z)((0,s.Z)({contextCls:C()(e.baseCls,n),ewt:i.ewt},o),i))},e.renderErrorPage=function(){var t=e.props,n=t.contextCls,o=(0,r.Z)(t,b);return(0,Z.jsx)(v.Z,(0,s.Z)({contextCls:C()(e.baseCls,n),icon:"WarningAlert",windowTitle:"Chat with an agent",headText:"There was a problem connecting to chat support",subText:"Please try again later."},o))},e.baseCls="web-chat-module",e}return(0,a.Z)(n,[{key:"render",value:function(){return this.state.isDesignTokenApplied&&this.renderContent()}},{key:"componentDidMount",value:function(){var e=this.props.accessToken;e&&(y.Z.accessToken=e),this.setContainerElementStyle(),this.fetchConfig(),this.applyDesignToken()}},{key:"componentWillUnmount",value:function(){this.restoreContainerElementStyle()}},{key:"renderContent",value:function(){var e=this.props.contextCls,t=this.state;t.shouldShowChooseOptionWindow,t.shouldShowErrorPage,t.shouldShowHoopWindow;return(0,Z.jsxs)(Z.Fragment,{children:["return (",(0,Z.jsx)(g.Z,{contextCls:C()(this.baseCls,e)}),")"]})}},{key:"fetchConfig",value:function(){var e=(0,o.Z)(u().mark((function e(){var t,n,o,s,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,x.Z.getChatConfig();case 4:n=e.sent,o=n.isAgentOnline,s=n.isSuccess,n.errors,i=(0,r.Z)(n,E),t.chatConfigs=i,o?t.shouldShowChooseOptionWindow=!0:t.shouldShowHoopWindow=!0,s||(t.shouldShowErrorPage=!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.shouldShowErrorPage=!0;case 14:return e.prev=14,this.setState(t),e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"applyDesignToken",value:function(){var e=(0,o.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.props.brand,e.next=4,k.Z.import(t);case 4:this.setState({isDesignTokenApplied:!0}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.debug(e.t0.message);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"setContainerElementStyle",value:function(){var e=this.props.containerElement;e&&(this.setState({originContainerElementPosition:e.style.position}),e.style.position="relative")}},{key:"restoreContainerElementStyle",value:function(){var e=this.props.containerElement,t=this.state.originContainerElementPosition;e&&t&&(e.style.position=t)}}]),n}(d.PureComponent);t.default=T}}]);
//# sourceMappingURL=846.e7f8e2ac.chunk.js.map