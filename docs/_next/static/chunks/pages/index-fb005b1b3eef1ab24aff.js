(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,n,t){"use strict";var r=t(3038),o=t(862);n.default=void 0;var a=o(t(7294)),u=t(9414),c=t(4651),i=t(7426),l={};function f(e,n,t,r){if(e&&(0,u.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n,t=!1!==e.prefetch,o=(0,c.useRouter)(),s=a.default.useMemo((function(){var n=(0,u.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],c=t[1];return{href:a,as:e.as?(0,u.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,m=e.shallow,y=e.scroll,g=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var b=(n=a.Children.only(v))&&"object"===typeof n&&n.ref,E=(0,i.useIntersection)({rootMargin:"200px"}),_=r(E,2),L=_[0],k=_[1],w=a.default.useCallback((function(e){L(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,L]);(0,a.useEffect)((function(){var e=k&&t&&(0,u.isLocalURL)(d),n="undefined"!==typeof g?g:o&&o.locale,r=l[d+"%"+p+(n?"%"+n:"")];e&&!r&&f(o,d,p,{locale:n})}),[p,d,k,g,t,o]);var M={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,c,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:c}))}(e,o,d,p,h,m,y,g)},onMouseEnter:function(e){(0,u.isLocalURL)(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),f(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof g?g:o&&o.locale,x=o&&o.isLocaleDomain&&(0,u.getDomainLocale)(p,C,o&&o.locales,o&&o.domainLocales);M.href=x||(0,u.addBasePath)((0,u.addLocale)(p,C,o&&o.defaultLocale))}return a.default.cloneElement(n,M)};n.default=s},7426:function(e,n,t){"use strict";var r=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!u,i=(0,o.useRef)(),l=(0,o.useState)(!1),f=r(l,2),s=f[0],d=f[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||s||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,u=r.elements;return u.set(e,n),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return(0,o.useEffect)((function(){if(!u&&!s){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[s]),[p,s]};var o=t(7294),a=t(3447),u="undefined"!==typeof IntersectionObserver;var c=new Map},2562:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var r=t(5893),o=t(1664);function a(){return(0,r.jsxs)(r.Fragment,{children:["See ",(0,r.jsx)(o.default,{href:"/kiara.html",children:"Kiara/Tiara"}),", ",(0,r.jsx)(o.default,{href:"/ina.html",children:"Ina/Yuul"}),", ",(0,r.jsx)(o.default,{href:"/ame.html",children:"Ame/Watoto"}),", or ",(0,r.jsx)(o.default,{href:"/gura.html",children:"Gura/Scout"}),"."]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2562)}])},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);