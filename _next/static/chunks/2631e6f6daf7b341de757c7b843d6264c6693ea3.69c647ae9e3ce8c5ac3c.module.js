(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"2qu3":function(e,t,r){"use strict";var n=r("oI91");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.default=void 0;var i,l=(i=r("q1tI"))&&i.__esModule?i:{default:i},s=r("8L3h"),c=r("jwwS");var d=[],u=[],p=!1;function m(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}function f(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach(n=>{var o=m(e[n]);o.loading?t.loading=!0:(t.loaded[n]=o.loaded,t.error=o.error),r.push(o.promise),o.promise.then(e=>{t.loaded[n]=e}).catch(e=>{t.error=e})})}catch(n){t.error=n}return t.promise=Promise.all(r).then(e=>(t.loading=!1,e)).catch(e=>{throw t.loading=!1,e}),t}function b(e,t){return l.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function g(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:b,webpack:null,modules:null},t),n=null;function o(){if(!n){var t=new h(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!p&&"function"===typeof r.webpack){var a=r.webpack();u.push(e=>{for(var t of a)if(-1!==e.indexOf(t))return o()})}var i=(e,t)=>{o();var a=l.default.useContext(c.LoadableContext),i=(0,s.useSubscription)(n);return l.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach(e=>{a(e)}),l.default.useMemo(()=>i.loading||i.error?l.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?r.render(i.loaded,e):null,[e,i])};return i.preload=()=>o(),i.displayName="LoadableComponent",l.default.forwardRef(i)}class h{constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var{_res:e,_opts:t}=this;e.loading&&("number"===typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"===typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=a(a({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}}function v(e){return g(m,e)}function x(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return x(e,t)})}v.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return g(f,e)},v.preloadAll=()=>new Promise((e,t)=>{x(d).then(e,t)}),v.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{var r=()=>(p=!0,t());x(u,e).then(r,r)})},window.__NEXT_PRELOADREADY=v.preloadReady;var y=v;t.default=y},"7ljp":function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r("q1tI"),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"===typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return r?o.a.createElement(f,l(l({ref:t},c),{},{components:r})):o.a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"===typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},"8Dvh":function(e){e.exports=JSON.parse('{"routes":[{"title":"Getting Started","heading":true,"routes":[{"title":"Overview","path":"/overview","editUrl":"/overview.md"},{"title":"Installation","path":"/installation","editUrl":"/installation.md"},{"title":"Quick Start","path":"/quick-start","editUrl":"/quick-start.md"}]},{"title":"Guides","heading":true,"routes":[{"title":"Probes","path":"/guides/probes","editUrl":"/guides/probes.md"},{"title":"Notifications","path":"/guides/notifications","editUrl":"/guides/notifications.md"},{"title":"Alerts","path":"/guides/alerts","editUrl":"/guides/alerts.md"}]},{"title":"Examples","heading":true,"routes":[{"title":"Minimal Configuration","path":"/guides/examples#minimal-configuration","editUrl":"/guides/examples.md"},{"title":"Enabling Notification","path":"/guides/examples#enabling-notification","editUrl":"/guides/examples.md"},{"title":"HTML Form Submission","path":"/guides/examples#html-form-submission-example","editUrl":"/guides/examples.md"},{"title":"Multiple Request","path":"/guides/examples#multiple-request","editUrl":"/guides/examples.md"},{"title":"Requests Chaining","path":"/guides/examples#requests-chaining","editUrl":"/guides/examples.md"}]}]}')},AXac:function(e,t,r){e.exports={contents__link:"Toc_contents__link__vFusB","contents__link--active":"Toc_contents__link--active__tbQOT"}},Ff2n:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,"a",(function(){return n}))},QhJM:function(e,t,r){e.exports={markdown:"markdown_markdown__3gxWv","code-block":"markdown_code-block__1jcT2"}},a6RD:function(e,t,r){"use strict";var n=r("oI91");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=s,t.default=function(e,t){var r=i.default,n={loading:e=>{var{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=a(a({},n),e));if(n=a(a({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=(t,r)=>e.render(r,t)),e.modules)){r=i.default.Map;var o={},l=e.modules();Object.keys(l).forEach(e=>{var t=l[e];"function"!==typeof t.then?o[e]=t:o[e]=()=>t.then(e=>e.default||e)}),n.loader=o}n.loadableGenerated&&delete(n=a(a({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,s(r,n);delete n.ssr}return r(n)};l(r("q1tI"));var i=l(r("2qu3"));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}},er9C:function(e,t,r){"use strict";r.d(t,"a",(function(){return Re}));var n=r("MX0m"),o=r.n(n),a=r("q1tI"),i=r.n(a),l=r("7ljp"),s=r("85Sb"),c=r("TSYQ"),d=r.n(c),u=r("II4a"),p=i.a.createElement,m=e=>{var{active:t,children:r,fixed:n}=e,{0:i,1:l}=Object(a.useState)(!1);return p("aside",{className:"jsx-3651371114 "+(d()("sidebar bg-white top-24 flex-shrink-0 pr-2",{active:t,"pb-0 flex flex-col z-1 sticky":n,fixed:n,searching:i})||"")},p("div",{className:"jsx-3651371114 sidebar-search my-2 lg:hidden"},p(u.a,null)),p("div",{className:"jsx-3651371114 sidebar-content overflow-y-auto pb-4"},r),p(o.a,{id:"3651371114"},[".sidebar.jsx-3651371114{-webkit-overflow-scrolling:touch;}",".sidebar.fixed.jsx-3651371114{width:300px;padding-right:2.5rem;height:calc(100vh - 1.5rem - 64px - 42px);}",".sidebar.fixed.searching.jsx-3651371114>.sidebar-content.jsx-3651371114{display:none;}",".sidebar-search.jsx-3651371114{position:relative;z-index:1;}","@media screen and (max-width:1024px){.sidebar.jsx-3651371114,.sidebar.fixed.jsx-3651371114{display:none;}.sidebar.active.jsx-3651371114{display:block;}}"]))},f={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=a.createContext&&a.createContext(f),g=function(){return(g=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},h=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r};function v(e){return function(t){return a.createElement(x,g({attr:g({},e.attr)},t),function e(t){return t&&t.map((function(t,r){return a.createElement(t.tag,g({key:r},t.attr),e(t.child))}))}(e.child))}}function x(e){var t=function(t){var r,n=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var o=e.attr,i=e.title,l=h(e,["attr","title"]);return a.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:r,style:g({color:e.color||t.color},t.style,e.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),i&&a.createElement("title",null,i),e.children)};return void 0!==b?a.createElement(b.Consumer,null,(function(e){return t(e)})):t(f)}function y(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(e)}function w(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"}}]})(e)}function j(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"}}]})(e)}function O(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"}}]})(e)}var k=i.a.createElement;function N(e){var{isMobile:t,level:r=1,title:n,selected:i,opened:l,children:s}=e,c=Object(a.useRef)(null),{0:{toggle:u,shouldScroll:p=!1},1:m}=Object(a.useState)({toggle:i||l}),f="level-".concat(r);return Object(a.useEffect)(()=>{i&&m({toggle:!0})},[i]),Object(a.useEffect)(()=>{if(u&&p&&null!=c.current){var e=document.querySelector(t?".docs-dropdown":".sidebar-content");if(e){var r=c.current.offsetTop-(t?10:e.offsetTop);e.scrollTop=r,m({toggle:u})}}},[u,p,t]),k("div",{ref:c,className:"jsx-4221507945 "+(d()("category",f,{open:u,selected:i})||"")},k("a",{onClick:()=>{m({toggle:!u,shouldScroll:!0})},className:"jsx-4221507945 label"},n,k(y,{className:"text-gray-600"})),k("div",{className:"jsx-4221507945 posts"},s),k(o.a,{id:"4221507945"},[".category.jsx-4221507945{margin:12px 0;}",".category.jsx-4221507945:first-child{margin-top:0;}",".category.jsx-4221507945:last-child{margin-bottom:0;}",".label.jsx-4221507945{font-size:1rem;line-height:1.5rem;font-weight:400;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#4b5563;}",".label.jsx-4221507945>svg{margin-right:16px;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-transition:-webkit-transform 0.15s ease;-webkit-transition:transform 0.15s ease;transition:transform 0.15s ease;}",".selected.jsx-4221507945>.label.jsx-4221507945{font-weight:600;color:#161e2e;}",".open.jsx-4221507945>.label.jsx-4221507945{color:#161e2e;}",".open.jsx-4221507945>.label.jsx-4221507945>svg{margin-left:1px;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}",".level-2.jsx-4221507945 .label.jsx-4221507945{text-transform:none;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;}",".label.jsx-4221507945:hover{color:#1a202c;}",".separated.jsx-4221507945{margin-bottom:32px;}",".posts.jsx-4221507945{border-left:1px solid #e5e7eb;margin-top:0;height:0;overflow:hidden;padding-left:19px;margin-left:3px;}",".open.jsx-4221507945>.posts.jsx-4221507945{margin-top:12px;height:auto;}","@media screen and (max-width:950px){.category.jsx-4221507945{margin:24px 0;}}"]))}var _=a.createElement,E=e=>{var{title:t,children:r}=e;return _("div",{className:"jsx-3875994729 heading"},_("h4",{className:"jsx-3875994729"},t),_("div",{className:"jsx-3875994729"},r),_(o.a,{id:"3875994729"},["h4.jsx-3875994729{margin:1.25rem 0;font-size:1.2rem;font-weight:600;}"]))};E.displayName="SidebarHeading";var P=!1;if("undefined"!==typeof window){var S={get passive(){P=!0}};window.addEventListener("testPassive",null,S),window.removeEventListener("testPassive",null,S)}var C="undefined"!==typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),T=[],D=!1,L=-1,M=void 0,R=void 0,I=function(e){return T.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},z=function(e){var t=e||window.event;return!!I(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},q=function(){void 0!==R&&(document.body.style.paddingRight=R,R=void 0),void 0!==M&&(document.body.style.overflow=M,M=void 0)},B=function(e,t){if(e){if(!T.some((function(t){return t.targetElement===e}))){var r={targetElement:e,options:t||{}};T=[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(T),[r]),C?(e.ontouchstart=function(e){1===e.targetTouches.length&&(L=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var r=e.targetTouches[0].clientY-L;!I(e.target)&&(t&&0===t.scrollTop&&r>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&r<0?z(e):e.stopPropagation())}(t,e)},D||(document.addEventListener("touchmove",z,P?{passive:!1}:void 0),D=!0)):function(e){if(void 0===R){var t=!!e&&!0===e.reserveScrollBarGap,r=window.innerWidth-document.documentElement.clientWidth;t&&r>0&&(R=document.body.style.paddingRight,document.body.style.paddingRight=r+"px")}void 0===M&&(M=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},A=r("wx14"),H=a.createElement,U=e=>H("div",Object(A.a)({className:d()("container mx-auto")},e));U.displayName="Container";var F=r("nOHt"),W=a.createElement;function G(e){var{children:t}=e,[r,n]=a.useState(!1),i=a.useRef(null),l=(a.useRef(null),Object(F.useRouter)()),s=()=>{var e;null!=i.current&&((e=i.current)?(T=T.filter((function(t){return t.targetElement!==e})),C?(e.ontouchstart=null,e.ontouchmove=null,D&&0===T.length&&(document.removeEventListener("touchmove",z,P?{passive:!1}:void 0),D=!1)):T.length||q()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."),n(!1))};return a.useEffect(()=>(s(),()=>{C?(T.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),D&&(document.removeEventListener("touchmove",z,P?{passive:!1}:void 0),D=!1),L=-1):q(),T=[]}),[l.asPath]),W("div",{className:"lg:hidden"},W(U,null,W("div",{className:"jsx-1647504227 sidebar-search py-2 z-10"},W(u.a,null)),W("label",{htmlFor:"dropdown-input",className:"jsx-1647504227 "+(d()("w-full",{opened:r})||"")},W("input",{id:"dropdown-input",type:"checkbox",checked:r,onChange:()=>{r?s():null!=i.current&&(B(i.current),n(!0))},className:"jsx-1647504227 hidden"}),W("div",{className:"jsx-1647504227 docs-select flex w-full items-center"},W(w,{className:"text-gray-600 -ml-1"}),"Menu")),W("div",{ref:i,className:"jsx-1647504227 docs-dropdown shadow-xl"},W(U,null,W("nav",{className:"jsx-1647504227"},t))),W(o.a,{id:"1647504227"},[".docs-select.jsx-1647504227{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:2.5rem;width:100%;line-height:3rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:left;cursor:pointer;}",".docs-dropdown.jsx-1647504227{position:absolute;left:0;right:0;top:100%;bottom:100%;background:white;overflow-y:auto;-webkit-overflow-scrolling:touch;}",".docs-dropdown.jsx-1647504227 nav.jsx-1647504227{padding:10px 0;}",".opened.jsx-1647504227~.docs-dropdown.jsx-1647504227{min-height:80px;bottom:calc(153px - 90vh);border-top:1px solid #eaeaea;}",".docs-select.jsx-1647504227 svg{margin-left:1px;margin-right:14px;-webkit-transition:-webkit-transform 0.15s ease;-webkit-transition:transform 0.15s ease;transition:transform 0.15s ease;}",".opened.jsx-1647504227>.docs-select.jsx-1647504227 svg{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}","@media screen and (max-width:640px){.opened.jsx-1647504227~.docs-dropdown.jsx-1647504227{bottom:calc(203px - 90vh);}}"])))}var V=r("Ff2n"),J=r("YFqc"),Y=r.n(J),Q=a.createElement;function X(e){var{route:{href:t,pathname:r,title:n,selected:a},onClick:i}=e,l=Object(F.useRouter)(),s=r===l.pathname;return Q("div",{className:"jsx-1970627818 "+(d()("nav-link",{selected:a})||"")},s?Q("a",{href:"".concat(l.basePath).concat(r),className:"jsx-1970627818 "+((a?"selected":"")||"")},n):Q(Y.a,{href:t,as:r},Q("a",{className:"jsx-1970627818"},n)),Q(o.a,{id:"1970627818"},["div.selected.jsx-1970627818{box-sizing:border-box;}",".nav-link.jsx-1970627818{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}",".nav-link.jsx-1970627818 a{-webkit-text-decoration:none;text-decoration:none;font-size:1rem;line-height:1.5rem;color:#4b5563;width:100%;box-sizing:border-box;}",".selected.jsx-1970627818 a{font-weight:600;color:#161e2e;}",".nav-link.jsx-1970627818:hover a{color:#161e2e;}","span.jsx-1970627818{color:#a0aec0;}","@media screen and (max-width:950px){div.jsx-1970627818{padding-top:0;padding-left:0;padding-bottom:0;}div.selected.jsx-1970627818{border-left:none;padding-left:0;}.nav-link.jsx-1970627818 a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}"]))}X.displayName="SidebarNavLink";var K=a.createElement,Z=e=>{var{isMobile:t,route:r,level:n=1,onClick:i}=e,l=Object(V.a)(e,["isMobile","route","level","onClick"]),s=a.useRef(null),c=r.selected?s:null;return a.useEffect(()=>{if(c&&c.current&&!t){var e=document.querySelector(".sidebar-content"),r=c.current.offsetTop-32;e&&(e.scrollTop=r-e.offsetHeight/2)}},[c,t]),K("div",{ref:c,className:"jsx-540246980 "+(d()("link","level-".concat(n))||"")},K(X,{route:r,scrollSelectedIntoView:l.scrollSelectedIntoView,categorySelected:l.categorySelected,level:n,onClick:i}),K(o.a,{id:"540246980"},[".link.jsx-540246980{margin:12px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".link.jsx-540246980:first-child{margin-top:0;}",".link.jsx-540246980:last-child{margin-bottom:0;}","@media screen and (max-width:950px){.link.jsx-540246980{margin:24px 0;}}"]))},$=r("mAZM"),ee=()=>(e=>{var{0:t,1:r}=Object(a.useState)(!1),n=Object(a.useCallback)(e=>{e.matches?r(!0):r(!1)},[]);return Object(a.useEffect)(()=>{var t=window.matchMedia("(max-width: ".concat(e,"px)"));return t.addListener(n),t.matches&&r(!0),()=>t.removeListener(n)},[]),t})(1024);function te(e,t){var r=e.lastIndexOf(t);return-1===r?e:e.substring(0,r)}var re=r("rePB");function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){Object(re.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ae=r("AXac"),ie=r.n(ae),le=a.createElement;function se(){return[...document.getElementsByTagName("H1"),...[...document.getElementsByClassName("anchor")].filter(e=>"H2"===e.parentNode.nodeName||"H3"===e.parentNode.nodeName)].filter(Boolean)}function ce(e){var t,r;return{url:e.getAttribute("href"),text:null===(t=e.parentElement)||void 0===t?void 0:t.innerText,depth:Number(null===(r=e.parentElement)||void 0===r?void 0:r.nodeName.replace("H",""))}}var de=e=>{var{title:t}=e,r=function(e,t,r,n,o,a){var[l,s]=i.a.useState(void 0),[c,d]=i.a.useState([]);return i.a.useEffect(()=>{d(n().map(o))},[d]),i.a.useEffect(()=>{var o=[],i=[];function c(){var c=function(){var e=0,t=null;for(o=n();e<o.length&&!t;){var a=o[e],{top:i}=a.getBoundingClientRect();i>=0&&i<=r&&(t=a),e+=1}return t}();if(c){var d=0,u=!1;for(i=document.getElementsByClassName(e);d<i.length&&!u;){var p=i[d],{href:m}=p,f=decodeURIComponent(m.substring(m.indexOf("#")+1));a(c)===f&&(l&&l.classList.remove(t),p.classList.add(t),s(p),u=!0),d+=1}}}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),c}(ie.a.contents__link,ie.a["contents__link--active"],100,se,ce,e=>{var t;return null===e||void 0===e||null===(t=e.parentElement)||void 0===t?void 0:t.id});return le("ul",{className:"space-y-3"},le("li",{className:"text-sm"},le("a",{className:ie.a.contents__link,href:"#_top"},t)),r&&r.length>0&&r.map((e,t)=>e.url?le("li",{key:"heading-".concat(e.url,"-").concat(t),className:d()("text-sm ",{"pl-2":3===(null===e||void 0===e?void 0:e.depth),hidden:e.depth&&e.depth>3})},le("a",{className:ie.a.contents__link,href:e.url},e.text)):null))},ue=r("QhJM"),pe=r.n(ue),me=r("JwsL"),fe=r("mrum");var be=a.createElement;function ge(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function he(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(r),!0).forEach((function(t){Object(re.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ge(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ve,xe={primary:"blue",success:"green",danger:"red",warning:"yellow"},ye=(ve=(e,t)=>{var r,n,o,{as:i="button",children:l,color:s,intent:c="none",size:u="md",className:p,icon:m,minimal:f,onClick:b,iconRight:g}=e,h=Object(V.a)(e,["as","children","color","intent","size","className","icon","minimal","onClick","iconRight"]),v=null!==(r=xe[c])&&void 0!==r?r:s,x=!((!m||g||l)&&(!g||m||l));"xs"===u&&(n="text-xs rounded-md leading-4",n+=x?" p-1.5":" py-1.5 px-2.5",o="h-3 w-3"),"sm"===u&&(n="text-sm rounded-md leading-4",n+=x?" p-2":" py-2 px-3",o="h-3 w-3"),"md"===u&&(n="text-sm rounded-md leading-5",n+=x?" p-2":" py-2 px-4",o="h-5 w-5"),"lg"===u&&(n="text-base rounded-md leading-6",n+=x?" p-2":" py-2 px-4",o="h-6 w-6"),"xl"===u&&(n="text-base rounded-md leading-6",n+=x?" p-3":" py-3 px-6",o="h-6 w-6");var y=m?a.cloneElement(m,he(he({},m.props),{},{height:"1em",width:"1em",className:d()("block",{"text-white":!!v&&!f,["text-".concat(v,"-700")]:!!v&&!!f,"text-gray-600":!v,"-ml-1 mr-2":!x},o,null===m||void 0===m?void 0:m.props.className)})):null,w=g?a.cloneElement(g,he(he({},g.props),{},{height:"1em",width:"1em",className:d()("block ",{"text-white":!!v&&!f,["text-".concat(v,"-700")]:!!v&&!!f,"text-gray-600":!v,"-mr-1 ml-2":!x},o,null===g||void 0===g?void 0:g.props.className)})):null,j=he(he({},h),{},{className:d()("font-medium inline-flex items-center justify-center focus:outline-none transition duration-150 ease-in-out",{["shadow-xs  border border-transparent text-white bg-".concat(v,"-600 hover:bg-").concat(v,"-500 focus:border-").concat(v,"-700 focus:shadow-outline-").concat(v," active:border-").concat(v,"-700")]:!!v&&!f,"shadow-xs border border-gray-300 text-gray-700 bg-white hover:text-gray-500  focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50":!v&&!f,["hover:bg-".concat(v,"-100 active:bg-").concat(v,"-200 text-").concat(v,"-700 focus:shadow-outline-").concat(v," border-transparent")]:f&&v,"hover:bg-gray-200 active:bg-gray-300 text-gray-900 focus:shadow-outline-blue border-transparent":f&&!v},n,p),children:be(a.Fragment,null,y,l,w)});return a.createElement(i,he(he({},j),{},{ref:t,onClick:b,className:j.className}))},a.forwardRef(ve));ye.displayName="TWButton";var we=a.createElement;function je(e,t){var r,n;return(null===(r=e.route)||void 0===r?void 0:r.path)===(null===(n=t.route)||void 0===n?void 0:n.path)}var Oe=a.memo(e=>{var{route:t,prevRoute:r,nextRoute:n}=e,o=null!==t&&void 0!==t&&t.editUrl||null!==t&&void 0!==t&&t.path?"".concat(fe.a.editUrl).concat((null===t||void 0===t?void 0:t.editUrl)||(null===t||void 0===t?void 0:t.path)):null;return we(a.Fragment,null,we("div",{className:"py-8"},we("div",{className:"flex space-between items-center"},r&&r.path?we(Y.a,{href:te(r.path,".")},we("a",{className:"flex-grow  block"},we("span",{className:"text-sm block text-gray-500 mb-1 font-semibold"},"\u2190 Prev"),we("span",{className:"text-xl block text-blue-600 font-semibold"},r.title))):we("div",null),n&&n.path&&we(Y.a,{href:te(n.path,".")},we("a",{className:"flex-grow text-right block"},we("span",{className:"text-sm block text-gray-500 mb-1 font-semibold"},"Next \u2192"),we("span",{className:"text-xl block text-blue-600 font-semibold"},n.title))))),o?we("div",{className:"mb-8"},we("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"text-gray-600 underline"},"Edit this page on GitHub")):null,we("div",{className:"py-8 md:flex md:items-center md:py-8 border-t border-b"},we("div",{className:"font-semibold text-xl mr-4 text-center mb-4 md:mb-0  md:text-left"},"Was this page helpful?"),we("div",{className:"grid grid-cols-2 gap-3 w-auto max-w-xs mx-auto md:mx-2"},we(ye,{icon:we(O,null)},"Yes"),we(ye,{icon:we(j,null)},"No"))))},je);Oe.displayName="DocsPageFooter";var ke=r("9CUm"),Ne=r("a6RD"),_e=r.n(Ne),Ee=a.createElement,Pe={pre:e=>Ee("pre",e),code:_e()(()=>r.e(23).then(r.bind(null,"WdOL")),{loadableGenerated:{webpack:()=>["WdOL"],modules:["./Highlight2"]}})},Se=r("8Kt/"),Ce=r.n(Se),Te=r("8Dvh"),De={},Le=(Object.keys(De),a.createElement),Me=e=>{var t=e.split("/");return"1.5.8"===t[2]||"2.1.4"===t[2]?{tag:t[2],slug:"/docs/".concat(t.slice(2).join("/"))}:{slug:e}},Re=e=>{var t=Object(F.useRouter)(),{slug:r,tag:n}=Me(t.asPath),{routes:i}=(e=>e?De[e]:Te)(n),c=function e(t,r){for(var n of r){if(n.path&&te(n.path,".")===t)return n;var o=n.routes&&e(t,n.routes);if(o)return o}}(te(r,"#"),i),d=ee(),{route:u,prevRoute:p,nextRoute:f}=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t)return n;for(var{path:o}=t,{parent:a}=n,i=0;i<r.length;i+=1){var l,s=r[i];if(s.routes&&(n.parent=s,(n=e(t,s.routes,n)).nextRoute))return n;if(s&&s.path){if(n.route)return n.nextRoute=a&&0===i?oe(oe({},s),{},{title:"".concat(a.title,": ").concat(s.title)}):s,n;s&&s.path===o?n.route=oe(oe({},t),{},{title:a&&!a.heading?"".concat(a.title,": ").concat(t.title):t.title}):n.prevRoute=!a||a.heading||null!==(l=r[i+1])&&void 0!==l&&l.path?s:oe(oe({},s),{},{title:"".concat(a.title,": ").concat(s.title)})}}return n}(c,i),b=u&&"".concat(u.title);return Le(a.Fragment,null,n&&Le(Ce.a,null,Le("meta",{name:"robots",content:"noindex",className:"jsx-99718258"})),Le("div",{className:"jsx-99718258"},d?Le(a.Fragment,null,Le(s.a,null),Le($.a,{shadow:!0},Le(G,null,Le(Ie,{isMobile:!0,routes:i})))):Le($.a,null,Le(s.a,null)),Le(ke.a,{title:e.meta.title||b,description:e.meta.description}),Le("div",{className:"jsx-99718258 block"},Le(a.Fragment,null,Le("div",{className:"jsx-99718258 container mx-auto pb-12 pt-6 content"},Le("div",{className:"jsx-99718258 flex relative"},!d&&Le(m,{fixed:!0},Le(Ie,{routes:i})),Le("div",{className:"jsx-99718258 "+(pe.a.markdown+" w-full docs"||!1)},Le("h1",{id:"_top",className:"jsx-99718258"},e.meta.title),Le(l.a,{components:Pe},e.children),Le(Oe,{href:(null===u||void 0===u?void 0:u.path)||"",route:u,prevRoute:p,nextRoute:f})),!1===e.meta.toc?null:Le("div",{style:{width:200},className:"jsx-99718258 hidden xl:block ml-10 flex-shrink-0"},Le("div",{className:"jsx-99718258 sticky top-24 overflow-y-auto"},Le("h4",{className:"jsx-99718258 font-semibold uppercase text-sm mb-2 mt-2 text-gray-500"},"On this page"),Le(de,{title:e.meta.title})))))))),Le(me.a,null),Le(o.a,{id:"99718258"},[".docs.jsx-99718258{min-width:calc(100% - 300px - 1rem - 200px);}"]))};function Ie(e){var{isMobile:t,routes:r,level:n=1}=e,{asPath:o}=Object(F.useRouter)(),{slug:a,tag:i}=Me(o);return r.map(e=>{var{path:r,title:o,routes:l,heading:s,open:c}=e;if(l){var d=function(e){var t=e.find(e=>e.path);return t&&te(t.path,"/")}(l),u=a.startsWith(d),p=!u&&!t&&c;return s?Le(E,{key:"parent"+d,title:o},Le(Ie,{isMobile:t,routes:l,level:n+1})):Le(N,{key:d,isMobile:t,level:n,title:o,selected:u,opened:p},Le(Ie,{isMobile:t,routes:l,level:n+1}))}var m=te(r,"."),f=((e,t)=>t?"/docs/".concat(t,"/").concat(e.replace("/docs/","")):e)(m,i);return Le(Z,{key:o,isMobile:t,level:n,route:{href:m,path:r,title:o,pathname:f,selected:a===m}})})}Re.displayName="LayoutDocs"},jwwS:function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o}}]);