(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,a,t){"use strict";a.__esModule=!0,a.isInAmpMode=o,a.useAmp=function(){return o(i.default.useContext(r.AmpStateContext))};var n,i=(n=t("q1tI"))&&n.__esModule?n:{default:n},r=t("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.ampFirst,t=void 0!==a&&a,n=e.hybrid,i=void 0!==n&&n,r=e.hasQuery,o=void 0!==r&&r;return t||i&&o}},"7MBF":function(e,a,t){e.exports={sidebar:"sidebar_sidebar__1Gp1J"}},"7NAC":function(e,a,t){e.exports={series:"series_series__1D_Ql",series__item:"series_series__item__3mbPX","series__item--active":"series_series__item--active__9kGNS"}},"8Kt/":function(e,a,t){"use strict";t("lSNA");a.__esModule=!0,a.defaultHead=p,a.default=void 0;var n,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=c();if(a&&a.has(e))return a.get(e);var t={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var r=n?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(t,i,r):t[i]=e[i]}t.default=e,a&&a.set(e,t);return t}(t("q1tI")),r=(n=t("Xuae"))&&n.__esModule?n:{default:n},o=t("lwAK"),s=t("FYa8"),l=t("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=[i.default.createElement("meta",{charSet:"utf-8"})];return e||a.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),a}function d(e,a){return"string"===typeof a||"number"===typeof a?e:a.type===i.default.Fragment?e.concat(i.default.Children.toArray(a.props.children).reduce((function(e,a){return"string"===typeof a||"number"===typeof a?e:e.concat(a)}),[])):e.concat(a)}var u=["name","httpEquiv","charSet","itemProp"];function m(e,a){return e.reduce((function(e,a){var t=i.default.Children.toArray(a.props.children);return e.concat(t)}),[]).reduce(d,[]).reverse().concat(p(a.inAmpMode)).filter(function(){var e=new Set,a=new Set,t=new Set,n={};return function(i){var r=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var o=i.key.slice(i.key.indexOf("$")+1);e.has(o)?r=!1:e.add(o)}switch(i.type){case"title":case"base":a.has(i.type)?r=!1:a.add(i.type);break;case"meta":for(var s=0,l=u.length;s<l;s++){var c=u[s];if(i.props.hasOwnProperty(c))if("charSet"===c)t.has(c)?r=!1:t.add(c);else{var p=i.props[c],d=n[c]||new Set;d.has(p)?r=!1:(d.add(p),n[c]=d)}}}return r}}()).reverse().map((function(e,a){var t=e.key||a;return i.default.cloneElement(e,{key:t})}))}function _(e){var a=e.children,t=(0,i.useContext)(o.AmpStateContext),n=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(r.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,l.isInAmpMode)(t)},a)}_.rewind=function(){};var f=_;a.default=f},Bnag:function(e,a){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,a){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,a,t){"use strict";var n;a.__esModule=!0,a.HeadManagerContext=void 0;var i=((n=t("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});a.HeadManagerContext=i},G3gP:function(e,a,t){e.exports={"two-lined-text":"two-lined-text_two-lined-text__3veDc","two-lined-text__anchor":"two-lined-text_two-lined-text__anchor__2yYKB","two-lined-text__chain":"two-lined-text_two-lined-text__chain__22NV5"}},GH1R:function(e,a,t){"use strict";var n=t("kiQV"),i={name:"Baythium Portfolio",version:n.version,companyName:"Baythium Ecosystem",prefix:"/bth-portfolio_gh-pages"};a.a=i},Ijbi:function(e,a,t){var n=t("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},RIqP:function(e,a,t){var n=t("Ijbi"),i=t("EbDI"),r=t("ZhPi"),o=t("Bnag");e.exports=function(e){return n(e)||i(e)||r(e)||o()}},TzwA:function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),r=t("8Kt/"),o=t.n(r),s=t("GH1R"),l=t("eb8q"),c=t.n(l),p=t("jnFt"),d=t.n(p),u=i.a.createElement,m=function(){return u("header",{className:c.a["app-header"]},u("div",{className:"container"},u("div",{className:c.a["app-header__system"]},u("div",{className:"row"},u("div",{className:"column--6"},u("a",{href:"#"},"Ecosystem"),u("a",{href:"https://support.baythium.com"},"Support Center")),u("div",{className:"column--6",style:{textAlign:"right"}},u("a",{href:"https://auth.baythium.com/sign-up"},"Sign Up"),u("a",{href:"#"},"Sign In")))),u("div",{className:c.a["app-header__default"]},u("div",null,u("div",{className:c.a["app-header__brand"]},u("a",{href:s.a.prefix+"/"},u("img",{src:s.a.prefix+"/images/baythium-ecosystem-1.svg",alt:s.a.companyName}),s.a.name))),u("div",null,u("div",{className:c.a["app-header__parallelogram"]},"English"))),u("nav",{className:d.a.navigation},u("div",{className:d.a.navigation__wrapper},u("ul",{className:d.a.navigation__list},u("li",{className:d.a.navigation__item,"data-navigation-id":"1"},u("a",{className:d.a.navigation__link,href:s.a.prefix+"/"},"Home")),u("li",{className:d.a.navigation__item,"data-navigation-id":"2"},u("a",{className:d.a.navigation__link,href:s.a.prefix+"/about"},"About")))))))},_=t("fDe3"),f=t.n(_),h=i.a.createElement,v=function(){return h("footer",{className:f.a["app-footer"]},h("div",{className:"container"},h("div",{className:f.a["app-footer__brand"]},h("img",{src:s.a.prefix+"/images/baythium-ecosystem-2.svg",alt:s.a["company-name"]})),h("div",{className:f.a["app-footer__copyright"]},h("p",null,"\xa9 ",(new Date).getFullYear()," ",s.a.companyName),h("p",null,"All product names, trademarks and registered trademarks are property of their respective owners."),h("p",null,"Use of these names, trademarks and brands does not imply endorsement.")),h("div",{className:[f.a["app-footer__synthesis"],"text-sm-1--right"].join(" ")},h("ul",null,h("li",null,"Product Name: ",h("span",null,s.a.name)),h("li",null,"Client Version: ",h("span",null,s.a.version))))))},g=t("YFqc"),y=t.n(g),b=t("7MBF"),N=t.n(b),w=t("cefe"),k=t.n(w),x=t("G3gP"),M=t.n(x),A=t("7NAC"),E=t.n(A),S=i.a.createElement,C={name:"Web Application Software Engineer",levels:[{name:"Junior",isActive:!1},{name:"Middle",isActive:!1},{name:"Senior",isActive:!0},{name:"Lead",isActive:!1},{name:"Architect",isActive:!1},{name:"Principal",isActive:!1}]},P=[{address:"damien.bayes.db@gmail.com",isPrimary:!0},{address:"baythium@gmail.com",isPrimary:!1},{address:"damien.bayes@baythium.com",isPrimary:!1}],I=[{name:"Russian",level:"Native"},{name:"English",level:"Upper-Intermediate"},{name:"German",level:"Beginner"}],j=[{name:"Github",url:"https://github.com/damien-bayes",iconUrl:"/images/github.svg"},{name:"LinkedIn",url:"https://www.linkedin.com/in/damien-bayes",iconUrl:"/images/linkedin.svg"},{name:"Twitter",url:"https://twitter.com/damien_bayes",iconUrl:"/images/twitter.svg"},{name:"Facebook",url:"https://www.facebook.com/damien.bayes.db1",iconUrl:"/images/facebook.svg"}],O=[{fullName:"Sunday",shortName:"Sun",isActive:!1},{fullName:"Monday",shortName:"Mon",isActive:!0},{fullName:"Tuesday",shortName:"Tue",isActive:!0},{fullName:"Wednesday",shortName:"Wed",isActive:!0},{fullName:"Thursday",shortName:"Thu",isActive:!0},{fullName:"Friday",shortName:"Fri",isActive:!0},{fullName:"Saturday",shortName:"Sat",isActive:!1}],T=function(){return S("aside",{className:N.a.sidebar},S("div",{className:"container"},S("div",{className:"card"},S("div",{className:"card__body"},S(y.a,{className:"card__link",href:"javascript:"},S("div",null,S("div",{className:"headline headline--labeled"},S("h2",{className:"headline__title"},"Social Networks",S("span",{className:"badge badge--primary"},j.length))),S("ul",{className:k.a["social-networks"]},j.map((function(e,a){return S("li",{className:k.a["social-networks__item"],key:a},S("a",{href:e.url,rel:"noreferrer",target:"_blank",className:k.a["social-networks__link"]},S("div",{className:k.a["social-networks__img-wrapper"]},S("img",{src:s.a.prefix+e.iconUrl,alt:e.name})),e.name))}))))))),S("div",{className:"card"},S("div",{className:"card__body"},S(y.a,{className:"card__link",href:"javascript:"},S("div",null,S("div",{className:"headline headline--labeled"},S("h2",{className:"headline__title"},"Language Skills",S("span",{className:"badge badge--primary"},I.length))),S("ul",null,I.map((function(e,a){return S("li",{key:a},S("div",{className:M.a["two-lined-text"]},S("p",{className:M.a["two-lined-text__chain"]},e.level),S("h6",{className:M.a["two-lined-text__anchor"]},e.name)))}))))))),S("div",{className:"card"},S("div",{className:"card__body"},S(y.a,{className:"card__link",href:"javascript:"},S("div",null,S("div",{className:"headline headline--labeled"},S("h2",{className:"headline__title"},"Email",S("span",{className:"badge badge--primary"},P.length)),S("p",{className:"headline__description"},"Don't feel hesitate to contact me")),S("ul",null,P.map((function(e,a){return S("li",{key:a},S("div",{className:M.a["two-lined-text"]},S("p",{className:M.a["two-lined-text__chain"]},e.isPrimary?"Primary":"Secondary"),S("h6",{className:M.a["two-lined-text__anchor"]},e.address)))}))))))),S("div",{className:"card"},S("div",{className:"card__body"},S(y.a,{className:"card__link",href:"javascript:"},S("div",null,S("div",{className:"headline headline--labeled"},S("h2",{className:"headline__title"},"Job Position"),S("p",{className:"headline__description"},C.name)),S("ul",{className:E.a.series},C.levels.map((function(e,a){return S("li",{key:a,className:[e.isActive?E.a["series__item--active"]:null,E.a.series__item].join(" ")},e.name)}))))))),S("div",{className:"card"},S("div",{className:"card__body"},S(y.a,{className:"card__link",href:"javascript:"},S("div",null,S("div",{className:"headline headline--labeled"},S("h2",{className:"headline__title"},"Employment"),S("p",{className:"headline__description"},"Full-time and 5 days a week")),S("ul",{className:E.a.series},O.map((function(e,a){return S("li",{key:a,className:[e.isActive?E.a["series__item--active"]:null,E.a.series__item].join(" ")},e.shortName)})))))))))},F=i.a.createElement;a.a=function(e){return F(n.Fragment,null,F(o.a,null,F("meta",{charSet:"utf-8"}),F("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),F("meta",{name:"viewport",content:"width=device-width,initial-scale=1.0"}),F("meta",{httpEquiv:"Content-Type",content:"text/html; charset=UTF-8"}),F("meta",{name:"robots",content:"index, follow"}),F("meta",{name:"googlebot",content:"all"}),F("meta",{name:"google",content:"notranslate"}),F("meta",{name:"rating",content:"general"}),F("meta",{name:"coverage",content:"worldwide"}),F("meta",{name:"target",content:"all"}),F("meta",{name:"revisit-after",content:"3 days"}),F("meta",{name:"keywords",content:"baythium, baythium ecosystem, baythium family, portfolio, cv, curriculum vitae"}),F("meta",{name:"description",content:""}),F("meta",{name:"theme-color",content:"#ffffff"}),F("meta",{name:"msapplication-navbutton-color",content:"#ffffff"}),F("meta",{name:"msapplication-TileColor",content:"#ffffff"}),F("meta",{name:"apple-mobile-web-app-status-bar-style",content:"default"}),F("meta",{property:"og:title",content:e.title,key:"title"}),F("title",null,e.title," - ",s.a.name)),F(m,null),F("div",{className:"container container--horizontal-aligned"},F("main",{className:"mr__md--5"},e.children),F(T,null)),F(v,null))}},Xuae:function(e,a,t){"use strict";var n=t("RIqP"),i=t("lwsE"),r=t("W8MJ"),o=(t("PJYZ"),t("7W2i")),s=t("a1gu"),l=t("Nsbk");function c(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=l(e);if(a){var i=l(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return s(this,t)}}a.__esModule=!0,a.default=void 0;var p=t("q1tI"),d=function(e){o(t,e);var a=c(t);function t(e){var r;return i(this,t),(r=a.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(n(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(t,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),t}(p.Component);a.default=d},YFqc:function(e,a,t){e.exports=t("cTJO")},cTJO:function(e,a,t){"use strict";var n=t("J4zp"),i=t("284h");a.__esModule=!0,a.default=void 0;var r,o=i(t("q1tI")),s=t("elyg"),l=t("nOHt"),c=new Map,p=window.IntersectionObserver,d={};var u=function(e,a){var t=r||(p?r=new p((function(e){e.forEach((function(e){if(c.has(e.target)){var a=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),c.delete(e.target),a())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),c.set(e,a),function(){try{t.unobserve(e)}catch(a){console.error(a)}c.delete(e)}):function(){}};function m(e,a,t,n){(0,s.isLocalURL)(a)&&(e.prefetch(a,t,n).catch((function(e){0})),d[a+"%"+t]=!0)}var _=function(e){var a=!1!==e.prefetch,t=o.default.useState(),i=n(t,2),r=i[0],c=i[1],_=(0,l.useRouter)(),f=_&&_.pathname||"/",h=o.default.useMemo((function(){var a=(0,s.resolveHref)(f,e.href,!0),t=n(a,2),i=t[0],r=t[1];return{href:i,as:e.as?(0,s.resolveHref)(f,e.as):r||i}}),[f,e.href,e.as]),v=h.href,g=h.as;o.default.useEffect((function(){if(a&&p&&r&&r.tagName&&(0,s.isLocalURL)(v)&&!d[v+"%"+g])return u(r,(function(){m(_,v,g)}))}),[a,r,v,g,_]);var y=e.children,b=e.replace,N=e.shallow,w=e.scroll;"string"===typeof y&&(y=o.default.createElement("a",null,y));var k=o.Children.only(y),x={ref:function(e){e&&c(e),k&&"object"===typeof k&&k.ref&&("function"===typeof k.ref?k.ref(e):"object"===typeof k.ref&&(k.ref.current=e))},onClick:function(e){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,a,t,n,i,r,o){("A"!==e.currentTarget.nodeName||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(t))&&(e.preventDefault(),null==o&&(o=n.indexOf("#")<0),a[i?"replace":"push"](t,n,{shallow:r}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,_,v,g,b,N,w)}};return a&&(x.onMouseEnter=function(e){(0,s.isLocalURL)(v)&&(k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),m(_,v,g,{priority:!0}))}),(e.passHref||"a"===k.type&&!("href"in k.props))&&(x.href=(0,s.addBasePath)((0,s.addLocale)(g,_&&_.locale,_&&_.defaultLocale))),o.default.cloneElement(k,x)};a.default=_},cefe:function(e,a,t){e.exports={"social-networks":"social-network_social-networks__1lTyh","social-networks__img-wrapper":"social-network_social-networks__img-wrapper__1Qj-R","social-networks__link":"social-network_social-networks__link__cMIfk"}},eb8q:function(e,a,t){e.exports={"app-header":"app-header_app-header___OM5t","app-header__system":"app-header_app-header__system__1L1vf","app-header__default":"app-header_app-header__default__2WSj0","app-header__brand":"app-header_app-header__brand__1tAsY","app-header__parallelogram":"app-header_app-header__parallelogram__2pPxB"}},fDe3:function(e,a,t){e.exports={"app-footer":"app-footer_app-footer__M39nd","app-footer__navigation-item":"app-footer_app-footer__navigation-item__2yo7o","app-footer__navigation-list":"app-footer_app-footer__navigation-list__2OOV6","app-footer__navigation-link":"app-footer_app-footer__navigation-link__1KsJN","app-footer__navigation-link--active":"app-footer_app-footer__navigation-link--active__27ZJV","app-footer__navigation":"app-footer_app-footer__navigation__3YtU9","app-footer__copyright":"app-footer_app-footer__copyright__ZEk2R","app-footer__synthesis":"app-footer_app-footer__synthesis__1rr3M","app-footer__brand":"app-footer_app-footer__brand__3AFmp"}},jnFt:function(e,a,t){e.exports={navigation:"navigation_navigation__qh2WB",navigation__list:"navigation_navigation__list__30rQv",navigation__button:"navigation_navigation__button__3sJTK",navigation__wrapper:"navigation_navigation__wrapper__bUZel",navigation__link:"navigation_navigation__link__3kDMo","navigation__link--active":"navigation_navigation__link--active__1dEDU",navigation__item:"navigation_navigation__item__hjieP"}},kiQV:function(e){e.exports=JSON.parse('{"name":"bth-portfolio_gh-pages","version":"1.0.1","description":"Baythium portfolio based on Github pages","main":"next.config.js","dependencies":{"@damien-bayes/bth-aspectus_pkg":"^1.0.22","next":"9.5.5","react":"16.14.0","react-dom":"16.14.0"},"devDependencies":{"create-next-app":"^9.5.5","sass":"^1.27.0"},"scripts":{"dev":"next dev","build":"next build","start":"next start","export":"next export","test":"echo \\"Error: no test specified\\" && exit 1","next:init":"create-next-app","git":"git add . && git commit -m","postgit":"git push --all"},"repository":{"type":"git","url":"git+https://github.com/damien-bayes/bth-portfolio_gh-pages.git"},"keywords":["Baythium","Baythium Ecosystem","Baythium Family","Portfolio","CV","Curriculum Vitae"],"author":"Baythium Ecosystem","license":"MIT","bugs":{"url":"https://github.com/damien-bayes/bth-portfolio_gh-pages/issues"},"homepage":"https://github.com/damien-bayes/bth-portfolio_gh-pages#readme"}')},lSNA:function(e,a){e.exports=function(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}},lwAK:function(e,a,t){"use strict";var n;a.__esModule=!0,a.AmpStateContext=void 0;var i=((n=t("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});a.AmpStateContext=i}}]);