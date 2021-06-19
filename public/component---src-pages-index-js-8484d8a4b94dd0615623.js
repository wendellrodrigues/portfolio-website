/*! For license information please see component---src-pages-index-js-8484d8a4b94dd0615623.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9EFL":function(e,t,n){"use strict";e.exports=n("R1wR")},R1wR:function(e,t,n){"use strict";var r=n("YVoz"),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,p=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,u=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,x=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function w(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||b}function v(){}function _(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||b}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=w.prototype;var k=_.prototype=new v;k.constructor=_,r(k,w.prototype),k.isPureReactComponent=!0;var C={current:null},S=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function I(e,t,n){var r,o={},i=null,p=null;if(null!=t)for(r in void 0!==t.ref&&(p=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,r)&&!E.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var c=Array(l),s=0;s<l;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:i,ref:p,props:o,_owner:C.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g,P=[];function $(e,t,n,r){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function z(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function j(e,t,n){return null==e?0:function e(t,n,r,o){var p=typeof t;"undefined"!==p&&"boolean"!==p||(t=null);var l=!1;if(null===t)l=!0;else switch(p){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case a:case i:l=!0}}if(l)return r(o,t,""===n?"."+T(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var s=n+T(p=t[c],c);l+=e(p,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),c=0;!(p=t.next()).done;)l+=e(p=p.value,s=n+T(p,c++),r,o);else if("object"===p)throw r=""+t,Error(g(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,n)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function B(e,t){e.func.call(e.context,t,e.count++)}function O(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?W(e,r,n,(function(e){return e})):null!=e&&(N(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function W(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(R,"$&/")+"/"),j(e,O,t=$(t,a,r,o)),z(t)}var H={current:null};function A(){var e=H.current;if(null===e)throw Error(g(321));return e}var M={ReactCurrentDispatcher:H,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return W(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;j(e,B,t=$(null,null,t,n)),z(t)},count:function(e){return j(e,(function(){return null}),null)},toArray:function(e){var t=[];return W(e,t,null,(function(e){return e})),t},only:function(e){if(!N(e))throw Error(g(143));return e}},t.Component=w,t.Fragment=p,t.Profiler=c,t.PureComponent=_,t.StrictMode=l,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.cloneElement=function(e,t,n){if(null==e)throw Error(g(267,e));var o=r({},e.props),i=e.key,p=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(p=t.ref,l=C.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)S.call(t,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){c=Array(s);for(var u=0;u<s;u++)c[u]=arguments[u+2];o.children=c}return{$$typeof:a,type:e.type,key:i,ref:p,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=I,t.createFactory=function(e){var t=I.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=N,t.lazy=function(e){return{$$typeof:x,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return A().useCallback(e,t)},t.useContext=function(e,t){return A().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return A().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return A().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return A().useLayoutEffect(e,t)},t.useMemo=function(e,t){return A().useMemo(e,t)},t.useReducer=function(e,t,n){return A().useReducer(e,t,n)},t.useRef=function(e){return A().useRef(e)},t.useState=function(e){return A().useState(e)},t.version="16.13.1"},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("8k0H"),i=n("phMG"),p=n("vOnD"),l=n("Wbzz"),c=p.b.h1.withConfig({displayName:"TextStyles__H1",componentId:"sc-18331fh-0"})(["font-weight:bold;font-size:60px;@media (max-width:768px){font-size:34px;}"]),s=(p.b.h2.withConfig({displayName:"TextStyles__H2",componentId:"sc-18331fh-1"})(["font-weight:bold;font-size:40px;@media (max-width:768px){font-size:28px;}"]),p.b.h3.withConfig({displayName:"TextStyles__H3",componentId:"sc-18331fh-2"})(["font-weight:bold;font-size:30px;@media (max-width:768px){font-size:24px;}"]),p.b.p.withConfig({displayName:"TextStyles__BodyIntro",componentId:"sc-18331fh-3"})(["font-weight:500;font-size:24px;line-height:140%;"]),p.b.p.withConfig({displayName:"TextStyles__BodyMain",componentId:"sc-18331fh-4"})(["font-weight:normal;font-size:20px;line-height:140%;"]),p.b.p.withConfig({displayName:"TextStyles__MediumText",componentId:"sc-18331fh-5"})(["font-weight:normal;font-size:17px;line-height:130%;"])),u=(p.b.p.withConfig({displayName:"TextStyles__Caption",componentId:"sc-18331fh-6"})(["font-weight:500;font-size:15px;line-height:18px;"]),p.b.p.withConfig({displayName:"TextStyles__Caption2",componentId:"sc-18331fh-7"})(["font-weight:600;font-size:15px;line-height:18px;text-transform:uppercase;"])),f=p.b.p.withConfig({displayName:"TextStyles__SmallText",componentId:"sc-18331fh-8"})(["font-weight:normal;font-size:13px;line-height:130%;"]);p.b.p.withConfig({displayName:"TextStyles__SmallText2",componentId:"sc-18331fh-9"})(["font-weight:600;font-size:13px;line-height:130%;text-transform:uppercase;"]);function d(e){var t=e.title,n=e.subtitle;return o.a.createElement(l.a,{to:"/page-2"},o.a.createElement(m,null,o.a.createElement(w,null,o.a.createElement(b,{src:"/images/icons/credit.svg",className:"icon"}),o.a.createElement(y,{src:"/images/icons/icon-ring.svg"})),o.a.createElement(x,null,o.a.createElement(h,null,t||"Get Pro Access"),o.a.createElement(g,null,n||"$19 per month"))))}var m=p.b.div.withConfig({displayName:"PurchaseButton__Wrapper",componentId:"sc-1sbm1ws-0"})(["width:280px;height:77px;padding:12px;background:linear-gradient(180deg,#ffffff 0%,#d9dfff 100%);box-shadow:0px 1px 3px rgba(0,0,0,0.1),0px 20px 40px rgba(23,0,102,0.2),inset 0px 0px 0px 0.5px rgba(255,255,255,0.5);border-radius:20px;display:grid;grid-template-columns:53px auto;align-items:center;gap:20px;border-radius:20px;*,&{transition:1s 0.1s cubic-bezier(0.075,0.82,0.165,1);}:hover{box-shadow:0px 1px 3px rgba(0,0,0,0.1),0px 30px 60px rgba(23,0,102,0.5),inset 0px 0px 0px 0.5px rgba(255,255,255,0.5);transform:translateY(-1px) scale(1.1);.icon{transform:scale(1.1);}}"]),x=p.b.div.withConfig({displayName:"PurchaseButton__TextWrapper",componentId:"sc-1sbm1ws-1"})(["display:grid;gap:4px;"]),h=Object(p.b)(u).withConfig({displayName:"PurchaseButton__Title",componentId:"sc-1sbm1ws-2"})(["color:black;"]),g=Object(p.b)(f).withConfig({displayName:"PurchaseButton__Subtitle",componentId:"sc-1sbm1ws-3"})(["color:black;opacity:0.7;"]),b=p.b.img.withConfig({displayName:"PurchaseButton__Icon",componentId:"sc-1sbm1ws-4"})(["width:29px;height:29px;"]),y=p.b.img.withConfig({displayName:"PurchaseButton__Ring",componentId:"sc-1sbm1ws-5"})(["position:absolute;top:-15px;left:-16px;",":hover &{transform:rotate(30deg) scale(1.1) translate(0px,2.5px);"],m),w=p.b.div.withConfig({displayName:"PurchaseButton__IconWrapper",componentId:"sc-1sbm1ws-6"})(["width:45px;height:45px;background:linear-gradient(200.44deg,#4316db 13.57%,#9076e7 98.38%);box-shadow:0px 10px 20px rgba(182,153,255,0.3);border-radius:50%;display:grid;justify-content:center;align-content:center;justify-self:center;position:relative;",":hover &{filter:hue-rotate(10deg) brightness(150%) saturate(120%);}"],m);function v(){return o.a.createElement(_,null,o.a.createElement("div",{className:"mockup1"}),o.a.createElement("div",{className:"mockup2"}),o.a.createElement("div",{className:"mockup3"}),o.a.createElement("div",{className:"mockup4"}),o.a.createElement("div",{className:"mockup5"}))}var _=p.b.div.withConfig({displayName:"MockupAnimation__Wrapper",componentId:"sc-1chkm4d-0"})(['position:relative;perspective:5000;@media (max-width:768px){transform:scale(0.6);transform-origin:top left;}@media (max-width:450px){transform:scale(0.4);}div{transform:rotateY(-20deg) rotateX(20deg);transform-origin:bottom-left;}*{transition:1s cubic-bezier(0.075,0.82,0.165,1);}:hover div{transform:rotateY(0deg) rotateX(0deg);&.mockup1{transition-delay:0.1s;transform:translate(-30px,-30px);}&.mockup2{transition-delay:0.2s;transform:translate(0,-30px);}&.mockup3{transition-delay:0s;}&.mockup4{transition-delay:0.1s;transform:translate(-120px,30px);}&.mockup5{transition-delay:0.2s;transform:translate(-90px,30px);}:hover{filter:brightness(150%) saturate(120%);}}.mockup1{position:absolute;width:183px;height:120px;left:0px;top:0px;background:url("/images/animations/mockup1.svg"),radial-gradient( 218.51% 281.09% at 100% 100%,rgba(253,63,51,0.6) 0%,rgba(76,0,200,0.6) 45.83%,rgba(76,0,200,0.6) 100% );box-shadow:0px 16.3881px 32.7761px rgba(99,30,187,0.5),inset 0px 0px 0px 0.5px rgba(255,255,255,0.2);backdrop-filter:blur(21.8507px);border-radius:16px;}.mockup2{position:absolute;width:183px;height:120px;left:214px;top:0px;background:url("/images/animations/mockup2.svg"),linear-gradient( 198.85deg,#4316db 12.72%,#9076e7 54.49%,#a2eeff 100.01% );box-shadow:0px 8.19119px 16.3824px rgba(0,0,0,0.1),0px 16.3824px 32.7648px rgba(0,0,0,0.15),inset 0px 0px 0px 0.5px rgba(255,255,255,0.2);backdrop-filter:blur(21.8432px);border-radius:16px;}.mockup3{position:absolute;width:701px;height:428px;left:37px;top:60px;background:url("/images/animations/mockup3.svg"),rgba(23,12,61,0.5);box-shadow:inset 0px 0px 0px 0.5px rgba(255,255,255,0.2);backdrop-filter:blur(20px);border-radius:8px;}.mockup4{position:absolute;width:399px;height:274px;left:194px;top:262px;background:url("/images/animations/mockup4.svg"),rgba(39,20,62,0.3);box-shadow:inset 0px 0px 0px 0.5px rgba(255,255,255,0.2);backdrop-filter:blur(20px);border-radius:8px;}.mockup5{position:absolute;width:412px;height:274px;left:616px;top:262px;background:url("/images/animations/mockup5.svg"),rgba(39,20,62,0.2);box-shadow:inset 0px 0px 0px 0.5px rgba(255,255,255,0.2);backdrop-filter:blur(20px);border-radius:8px;}']);n("9EFL");p.b.div.withConfig({displayName:"WaveBackground__Wrapper",componentId:"sc-1bf6bor-0"})(["position:relative;background:linear-gradient(180deg,#4316db 0%,#9076e7 100%);"]);var k=p.b.img.withConfig({displayName:"WaveBackground__Wave",componentId:"sc-1bf6bor-1"})(["position:absolute;z-index:-1;@media (min-width:1440px){width:100%;}"]),C=(Object(p.b)(k).withConfig({displayName:"WaveBackground__BottomWave",componentId:"sc-1bf6bor-2"})(['@media (prefers-color-scheme:dark){content:url("/images/waves/hero-wave3-dark.svg");}']),p.b.div.withConfig({displayName:"WaveBackground__Background",componentId:"sc-1bf6bor-3"})(["background:linear-gradient(180deg,#4316db 0%,#9076e7 100%);position:absolute;width:100%;height:800px;z-index:-1;"]),n("rPfv"));var S=function(){return o.a.createElement(I,null,o.a.createElement(N,null,o.a.createElement(R,null,o.a.createElement(P,null,"Design",o.a.createElement("br",null)," and code ",o.a.createElement("span",null,"React")," apps"),o.a.createElement($,null,"Don’t skip design. Learn design and code, by building real apps with React and Swift. Complete courses about the best tools."),o.a.createElement(d,{title:"Start learning",subtitle:"120+ hours of video"})),o.a.createElement(v,null)))},E=Object(p.c)(["0%{opacity:0;transform:translateY(-10px);}80%{opacity:0.5;}100%{opacity:1;transform:translateY(0px);}"]),I=p.b.div.withConfig({displayName:"HeroSection__Wrapper",componentId:"sc-19x1i20-0"})(["overflow:hidden;"]),N=p.b.div.withConfig({displayName:"HeroSection__ContentWrapper",componentId:"sc-19x1i20-1"})(["max-width:1234px;margin:0 auto;padding:200px 30px;display:grid;grid-template-columns:360px auto;@media (max-width:450px){grid-template-columns:auto;gap:60px;padding:150px 20px 250px;}"]),R=p.b.div.withConfig({displayName:"HeroSection__TextWrapper",componentId:"sc-19x1i20-2"})(["max-width:360px;display:grid;gap:30px;> *{opacity:0;animation:"," 1s 0.2s forwards;:nth-child(1){animation-delay:0s;}:nth-child(2){animation-delay:0.2s;}:nth-child(3){animation-delay:0.4s;}}"],E),P=Object(p.b)(c).withConfig({displayName:"HeroSection__Title",componentId:"sc-19x1i20-3"})(["color:",";background:linear-gradient(180deg,#730040 0%,#301cbe 100%);background-clip:text;-webkit-background-clip:text;color:transparent;span{background:linear-gradient(180deg,#ffd7ff 0%,#ffb6ff 100%);background-clip:text;-webkit-background-clip:text;color:transparent;}@media (max-width:450px){font-size:48px;}"],C.a.dark.text1),$=Object(p.b)(s).withConfig({displayName:"HeroSection__Description",componentId:"sc-19x1i20-4"})([""]);t.default=function(){return o.a.createElement(a.a,null,o.a.createElement(i.a,{title:"Home"}),o.a.createElement(S,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-8484d8a4b94dd0615623.js.map