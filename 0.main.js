webpackJsonp([0],[,function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(){c(),u(),l(),d()}function o(){h()}function s(e){T("send","event","Script","error",e.stack||e.toString(),{nonInteraction:!0})}function c(){var e=!0,t=!1,n=void 0;try{for(var i,r=m[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){var a=i.value;window.ga("create",a.trackingId,"auto",a.name,{siteSpeedSampleRate:10})}}catch(e){t=!0,n=e}finally{try{!e&&r.return&&r.return()}finally{if(t)throw n}}T("set","transport","beacon")}function u(){var e=window.onerror.q||[];window.onerror=function(e,t,n,i,r){T("send","event",{eventCategory:"Script",eventAction:"uncaught error",eventLabel:r?r.stack:e+"\n"+t+":"+n+":"+i,nonInteraction:!0})};var t=!0,n=!1,i=void 0;try{for(var a,o=e[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s,c=a.value;(s=window).onerror.apply(s,r(c))}}catch(e){n=!0,i=e}finally{try{!t&&o.return&&o.return()}finally{if(n)throw i}}}function l(){Object.keys(w).forEach(function(e){T("set",w[e],b)}),E(function(e){var t;e.set((t={},i(t,w.TRACKING_VERSION,p),i(t,w.CLIENT_ID,e.get("clientId")),i(t,w.WINDOW_ID,S()),t))}),E(function(e){var t=e.get("buildHitTask");e.set("buildHitTask",function(e){var n=e.get("page")||location.pathname;e.set(w.PAGE_PATH,n),e.set(w.HIT_TYPE,e.get("hitType"),!0),e.set(w.HIT_TIME,String(+new Date),!0),e.set(w.HIT_ID,S(),!0),e.set(w.VISIBILITY_STATE,document.visibilityState,!0),t(e)})})}function d(){T("require","cleanUrlTracker",{stripQuery:!0,queryDimensionIndex:v(w.URL_QUERY_PARAMS),indexFilename:"index.html",trailingSlash:"add"}),T("require","eventTracker"),E("require","maxScrollTracker",{sessionTimeout:30,timeZone:"America/Los_Angeles",maxScrollMetricIndex:v(k.MAX_SCROLL_PERCENTAGE)}),T("require","mediaQueryTracker",{definitions:[{name:"Breakpoint",dimensionIndex:1,items:[{name:"xs",media:"all"},{name:"sm",media:"(min-width: 384px)"},{name:"md",media:"(min-width: 576px)"},{name:"lg",media:"(min-width: 768px)"}]},{name:"Resolution",dimensionIndex:2,items:[{name:"1x",media:"all"},{name:"1.5x",media:"(-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144dpi)"},{name:"2x",media:"(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"}]},{name:"Orientation",dimensionIndex:3,items:[{name:"landscape",media:"(orientation: landscape)"},{name:"portrait",media:"(orientation: portrait)"}]}]}),T("require","outboundLinkTracker"),E("require","pageVisibilityTracker",{visibleMetricIndex:v(k.PAGE_VISIBLE),sessionTimeout:30,timeZone:"America/Los_Angeles",fieldsObj:i({},w.HIT_SOURCE,"pageVisibilityTracker")}),T("require","socialWidgetTracker")}function h(){T("send","pageview",i({},w.HIT_SOURCE,"pageload"))}function f(e){return function(t){for(var n=arguments.length,i=Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];var a=!0,o=!1,s=void 0;try{for(var c,u=function(){var e=c.value.name;if("function"==typeof t)window.ga(function(){t(window.ga.getByName(e))});else{var n;(n=window).ga.apply(n,[e+"."+t].concat(i))}},l=e[Symbol.iterator]();!(a=(c=l.next()).done);a=!0)u()}catch(e){o=!0,s=e}finally{try{!a&&l.return&&l.return()}finally{if(o)throw s}}}}function v(e){return+/\d+$/.exec(e)[0]}function g(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),i=e[t];e[t]=e[n],e[n]=i}return e}Object.defineProperty(t,"__esModule",{value:!0});n(15),n(16),n(17),n(18),n(19),n(20),n(21);t.init=a,t.trackPageload=o,t.trackError=s;var p=(function(){function e(e,t){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){r=!0,a=e}finally{try{!i&&s.return&&s.return()}finally{if(r)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),"2"),m=g([{name:"t0",trackingId:"UA-40829935-1"},{name:"testing",trackingId:"UA-40829935-4"}]),y=m.filter(function(e){var t=e.name;return/test/.test(t)}),b="(not set)",k={PAGE_VISIBLE:"metric1",MAX_SCROLL_PERCENTAGE:"metric2"},w={BREAKPOINT:"dimension1",RESOLUTION:"dimension2",ORIENTATION:"dimension3",HIT_SOURCE:"dimension4",URL_QUERY_PARAMS:"dimension5",METRIC_VALUE:"dimension6",CLIENT_ID:"dimension7",HIT_TYPE:"dimension8",HIT_TIME:"dimension9",HIT_ID:"dimension10",WINDOW_ID:"dimension11",VISIBILITY_STATE:"dimension12",TRACKING_VERSION:"dimension13",PAGE_PATH:"dimension14"},T=f(m),E=f(y),S=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}},,function(e,t,n){"use strict";function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;if("function"!=typeof i)return v({},e,t);var a=function(){var a=n.get("buildHitTask");return{v:{buildHitTask:function(n){n.set(e,null,!0),n.set(t,null,!0),i(n,r),a(n)}}}}();return"object"===("undefined"==typeof a?"undefined":f(a))?a.v:void 0}function r(e,t){var i=n.i(h.a)(e),r={};return Object.keys(i).forEach(function(e){if(0===e.indexOf(t)&&e!=t+"on"){var n=i[e];"true"==n&&(n=!0),"false"==n&&(n=!1);var a=s(e.slice(t.length));r[a]=n}}),r}function a(e,t){var n=void 0;return function(){for(var i=arguments.length,r=Array(i),a=0;a<i;a++)r[a]=arguments[a];clearTimeout(n),n=setTimeout(function(){return e.apply(void 0,r)},t)}}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,n=!1,i=function(){n||(n=!0,e())};return setTimeout(i,t),i}function s(e){return e.replace(/[\-\_]+(\w?)/g,function(e,t){return t.toUpperCase()})}function c(e){return e.charAt(0).toUpperCase()+e.slice(1)}function u(e){return"object"==("undefined"==typeof e?"undefined":f(e))&&null!==e}function l(e){return Array.isArray(e)?e:[e]}function d(){return+new Date}var h=n(7);t.b=i,t.h=r,t.j=a,t.g=o,n.d(t,"a",function(){return v}),t.c=c,t.f=u,t.i=l,t.e=d,n.d(t,"d",function(){return g});var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v=Object.assign||function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];for(var r,a=0;r=n[a];a++)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},g=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}},function(e,t,n){"use strict";function i(e,t){var i=window.GoogleAnalyticsObject||"ga";window[i]=window[i]||function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];(window[i].q=window[i].q||[]).push(t)},window.gaDevIds=window.gaDevIds||[],window.gaDevIds.indexOf(r.a)<0&&window.gaDevIds.push(r.a),window[i]("provide",e,t),window.gaplugins=window.gaplugins||{},window.gaplugins[n.i(a.c)(e)]=t}var r=n(6),a=n(3);t.a=i},function(e,t,n){"use strict";function i(e,t){u(e),c(e,t)}function r(e){return parseInt(e||"0",16).toString(2)}function a(e){return parseInt(e||"0",2).toString(16)}function o(e,t){if(e.length<t)for(var n=t-e.length;n;)e="0"+e,n--;return e}function s(e,t){return e.substr(0,t)+1+e.substr(t+1)}function c(e,t){var n=e.get("&"+l.b),i=o(r(n),h);i=s(i,h-t),e.set("&"+l.b,a(i))}function u(e){e.set("&"+l.c,l.d)}var l=n(6);n.d(t,"b",function(){return d}),t.a=i;var d={CLEAN_URL_TRACKER:1,EVENT_TRACKER:2,IMPRESSION_TRACKER:3,MEDIA_QUERY_TRACKER:4,OUTBOUND_FORM_TRACKER:5,OUTBOUND_LINK_TRACKER:6,PAGE_VISIBILITY_TRACKER:7,SOCIAL_WIDGET_TRACKER:8,URL_CHANGE_TRACKER:9,MAX_SCROLL_TRACKER:10},h=Object.keys(d).length},function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"a",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return o}),n.d(t,"e",function(){return s});var i="2.0.0-rc.2",r="i5iSjo",a="_av",o="_au",s="(not set)"},function(e,t,n){"use strict";var i=(n(12),n(22)),r=(n(23),n(24)),a=(n(10),n(13),n(25));n.d(t,"b",function(){return i.a}),n.d(t,"a",function(){return r.a}),n.d(t,"c",function(){return a.a})},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){var n=o.filter(function(n){return n.context==e&&n.methodName==t})[0];return n||(n=new s(e,t),o.push(n)),n}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=[],s=function(){function e(t,n){var r=this;i(this,e),this.context=t,this.methodName=n,this.isTask=/Task$/.test(n),this.originalMethodReference=this.isTask?t.get(n):t[n],this.methodChain=[],this.boundMethodChain=[],this.wrappedMethod=function(){var e=r.boundMethodChain[r.boundMethodChain.length-1];return e.apply(void 0,arguments)},this.isTask?t.set(n,this.wrappedMethod):t[n]=this.wrappedMethod}return a(e,null,[{key:"add",value:function(e,t,n){r(e,t).add(n)}},{key:"remove",value:function(e,t,n){r(e,t).remove(n)}}]),a(e,[{key:"add",value:function(e){this.methodChain.push(e),this.rebindMethodChain()}},{key:"remove",value:function(e){var t=this.methodChain.indexOf(e);t>-1&&(this.methodChain.splice(t,1),this.methodChain.length>0?this.rebindMethodChain():this.destroy())}},{key:"rebindMethodChain",value:function(){this.boundMethodChain=[];for(var e,t=0;e=this.methodChain[t];t++){var n=this.boundMethodChain[t-1]||this.originalMethodReference.bind(this.context);this.boundMethodChain.push(e(n))}}},{key:"destroy",value:function(){var e=o.indexOf(this);e>-1&&(o.splice(e,1),this.isTask?this.context.set(this.methodName,this.originalMethodReference):this.context[this.methodName]=this.originalMethodReference)}}]),e}();t.a=s},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(){window.addEventListener("storage",c),g=!0}function s(){window.removeEventListener("storage",c),g=!1}function c(e){var t=v[e.key];if(t){var n=u(e.oldValue,t.defaults),i=u(e.newValue,t.defaults);t.emit("externalSet",i,n)}}function u(e,t){var i=void 0;try{i=JSON.parse(e)}catch(e){i={}}return n.i(d.a)({},t,i)}var l=n(14),d=n(3),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),f="autotrack",v={},g=!1,p=function(e){function t(e,n){i(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.key=e,a.defaults=n||{},a}return a(t,e),h(t,null,[{key:"getOrCreate",value:function(e,n,i){var r=[f,e,n].join(":");return v[r]||(v[r]=new t(r,i),v[r].key=r,g||o()),v[r]}}]),h(t,[{key:"get",value:function(){var e=String(window.localStorage&&window.localStorage.getItem(this.key));return"string"!=typeof e?{}:u(e,this.defaults)}},{key:"set",value:function(e){var t=this.get(),i=n.i(d.a)(t,e);window.localStorage&&window.localStorage.setItem(this.key,JSON.stringify(i))}},{key:"clear",value:function(){window.localStorage&&window.localStorage.removeItem(this.key)}},{key:"destroy",value:function(){delete v[this.key],Object.keys(v).length||s()}}]),t}(l.a);t.a=p},function(e,t,n){"use strict";function i(e,t){if(e&&1==e.nodeType&&t){if("string"==typeof t||1==t.nodeType)return e==t||r(e,t);if("length"in t)for(var n,i=0;n=t[i];i++)if(e==n||r(e,n))return!0}return!1}function r(e,t){if("string"!=typeof t)return!1;if(o)return o.call(e,t);for(var n,i=e.parentNode.querySelectorAll(t),r=0;n=i[r];r++)if(n==e)return!0;return!1}t.a=i;var a=window.Element.prototype,o=a.matches||a.matchesSelector||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=n(8),a=n(9),o=n(3),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=1e3,u=60*c,l={},d=function(){function e(t,n,o){i(this,e),this.tracker=t,this.timeout=n||e.DEFAULT_TIMEOUT,this.timeZone=o,this.sendHitTaskOverride=this.sendHitTaskOverride.bind(this),r.a.add(t,"sendHitTask",this.sendHitTaskOverride);try{this.dateTimeFormatter=new Intl.DateTimeFormat("en-US",{timeZone:this.timeZone})}catch(e){}var s={hitTime:0,isExpired:!1};this.store=a.a.getOrCreate(t.get("trackingId"),"session",s)}return s(e,null,[{key:"getOrCreate",value:function(t,n,i){var r=t.get("trackingId");return l[r]?l[r]:l[r]=new e(t,n,i)}}]),s(e,[{key:"isExpired",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.store.get();if(e.isExpired)return!0;var t=new Date,n=e.hitTime,i=n&&new Date(n);if(n){if(t-i>this.timeout*u)return!0;if(this.datesAreDifferentInTimezone(t,i))return!0}return!1}},{key:"datesAreDifferentInTimezone",value:function(e,t){return!!this.dateTimeFormatter&&this.dateTimeFormatter.format(e)!=this.dateTimeFormatter.format(t)}},{key:"sendHitTaskOverride",value:function(e){var t=this;return function(i){e(i);var r=t.store.get(),a=t.isExpired(r),s=i.get("sessionControl"),c="start"==s||a,u="end"==s;r.hitTime=n.i(o.e)(),c&&(r.isExpired=!1),u&&(r.isExpired=!0),t.store.set(r)}}},{key:"destroy",value:function(){r.a.remove(this.tracker,"sendHitTask",this.sendHitTaskOverride),this.store.destroy(),delete l[this.tracker.get("trackingId")]}}]),e}();t.a=d,d.DEFAULT_TIMEOUT=30},function(e,t,n){"use strict";function i(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e&&1==e.nodeType&&t)for(var o,s=(i?[e]:[]).concat(n.i(a.a)(e)),c=0;o=s[c];c++)if(n.i(r.a)(o,t))return o}var r=n(10),a=n(13);t.a=i},function(e,t,n){"use strict";function i(e){for(var t=[];e&&e.parentNode&&1==e.parentNode.nodeType;)e=e.parentNode,t.push(e);return t}t.a=i},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=function(){function e(){i(this,e),this.registry_={}}return r(e,[{key:"on",value:function(e,t){this.getRegistry_(e).push(t)}},{key:"off",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(e&&t){var n=this.getRegistry_(e),i=n.indexOf(t);i>-1&&n.splice(i,1)}else this.registry_={}}},{key:"emit",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.getRegistry_(e).forEach(function(e){return e.apply(void 0,n)})}},{key:"getEventCount",value:function(){var e=this,t=0;return Object.keys(this.registry_).forEach(function(n){t+=e.getRegistry_(n).length}),t}},{key:"getRegistry_",value:function(e){return this.registry_[e]=this.registry_[e]||[]}}]),e}();t.a=a},function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=n(7),o=n(6),s=n(8),c=n(4),u=n(5),l=n(3),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),h=function(){function e(t,i){r(this,e),n.i(u.a)(t,u.b.CLEAN_URL_TRACKER);var a={};this.opts=n.i(l.a)(a,i),this.tracker=t,this.queryDimension=this.opts.stripQuery&&this.opts.queryDimensionIndex?"dimension"+this.opts.queryDimensionIndex:null,this.trackerGetOverride=this.trackerGetOverride.bind(this),this.buildHitTaskOverride=this.buildHitTaskOverride.bind(this),s.a.add(t,"get",this.trackerGetOverride),s.a.add(t,"buildHitTask",this.buildHitTaskOverride)}return d(e,[{key:"trackerGetOverride",value:function(e){var t=this;return function(n){if("page"==n||n==t.queryDimension){var i={location:e("location"),page:e("page")},r=t.cleanUrlFields(i);return r[n]}return e(n)}}},{key:"buildHitTaskOverride",value:function(e){var t=this;return function(n){var i=t.cleanUrlFields({location:n.get("location"),page:n.get("page")});n.set(i,null,!0),e(n)}}},{key:"cleanUrlFields",value:function(e){var t=n.i(a.c)(e.page||e.location),r=t.pathname;if(this.opts.indexFilename){var s=r.split("/");this.opts.indexFilename==s[s.length-1]&&(s[s.length-1]="",r=s.join("/"))}if("remove"==this.opts.trailingSlash)r=r.replace(/\/+$/,"");else if("add"==this.opts.trailingSlash){var c=/\.\w+$/.test(r);c||"/"==r.substr(-1)||(r+="/")}var u={page:r+(this.opts.stripQuery?"":t.search)};if(e.location&&(u.location=e.location),this.queryDimension&&(u[this.queryDimension]=t.search.slice(1)||o.e),"function"==typeof this.opts.urlFieldsFilter){var l=this.opts.urlFieldsFilter(u,a.c);return i({page:l.page,location:l.location},this.queryDimension,l[this.queryDimension])}return u}},{key:"remove",value:function(){s.a.remove(this.tracker,"get",this.trackerGetOverride),s.a.remove(this.tracker,"buildHitTask",this.buildHitTaskOverride)}}]),e}();n.i(c.a)("cleanUrlTracker",h)},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=n(7),a=n(4),o=n(5),s=n(3),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=function(){function e(t,a){var c=this;if(i(this,e),n.i(o.a)(t,o.b.EVENT_TRACKER),window.addEventListener){var u={events:["click"],fieldsObj:{},attributePrefix:"ga-"};this.opts=n.i(s.a)(u,a),this.tracker=t,this.handleEvents=this.handleEvents.bind(this);var l="["+this.opts.attributePrefix+"on]";this.delegates={},this.opts.events.forEach(function(e){c.delegates[e]=n.i(r.b)(document,e,l,c.handleEvents,{composed:!0,useCapture:!0})})}}return c(e,[{key:"handleEvents",value:function(e,t){var i=this.opts.attributePrefix;if(e.type==t.getAttribute(i+"on")){var r={transport:"beacon"},a=n.i(s.h)(t,i),o=n.i(s.a)({},this.opts.fieldsObj,a),c=a.hitType||"event";this.tracker.send(c,n.i(s.b)(r,o,this.tracker,this.opts.hitFilter,t))}}},{key:"remove",value:function(){var e=this;Object.keys(this.delegates).forEach(function(t){e.delegates[t].destroy()})}}]),e}();n.i(a.a)("eventTracker",u)},function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(){var e=document.documentElement,t=document.body;return Math.max(e.offsetHeight,e.scrollHeight,t.offsetHeight,t.scrollHeight)}var o=n(7),s=n(8),c=n(4),u=n(11),l=n(9),d=n(5),h=n(3),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),v=function(){function e(t,i){if(r(this,e),n.i(d.a)(t,d.b.MAX_SCROLL_TRACKER),window.addEventListener){var a={increaseThreshold:20,sessionTimeout:u.a.DEFAULT_TIMEOUT,fieldsObj:{}};this.opts=n.i(h.a)(a,i),this.tracker=t,this.pagePath=this.getPagePath(),this.handleScroll=n.i(h.j)(this.handleScroll.bind(this),500),this.trackerSetOverride=this.trackerSetOverride.bind(this),this.store=l.a.getOrCreate(t.get("trackingId"),"plugins/max-scroll-tracker"),this.session=new u.a(t,this.opts.sessionTimeout,this.opts.timeZone),s.a.add(t,"set",this.trackerSetOverride),this.listenForMaxScrollChanges()}}return f(e,[{key:"listenForMaxScrollChanges",value:function(){var e=this.getMaxScrollPercentageForCurrentPage();e<100&&window.addEventListener("scroll",this.handleScroll)}},{key:"stopListeningForMaxScrollChanges",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var e=a(),t=window.pageYOffset,n=window.innerHeight,i=Math.min(100,Math.max(0,Math.round(100*(t/(e-n)))));if(this.session.isExpired())this.store.clear();else{var r=this.getMaxScrollPercentageForCurrentPage();if(i>r){100!=i&&100!=r||this.stopListeningForMaxScrollChanges();var o=i-r;(100==i||o>=this.opts.increaseThreshold)&&(this.setMaxScrollPercentageForCurrentPage(i),this.sendMaxScrollEvent(o,i))}}}},{key:"trackerSetOverride",value:function(e){var t=this;return function(){e.apply(void 0,arguments);var r=n.i(h.f)(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:i({},arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1]);if(r.page){var a=t.pagePath;t.pagePath=t.getPagePath(),t.pagePath!=a&&t.listenForMaxScrollChanges()}}}},{key:"sendMaxScrollEvent",value:function(e,t){var i={transport:"beacon",eventCategory:"Max Scroll",eventAction:"increase",eventValue:e,eventLabel:String(t),nonInteraction:!0};this.opts.maxScrollMetricIndex&&(i["metric"+this.opts.maxScrollMetricIndex]=e),this.tracker.send("event",n.i(h.b)(i,this.opts.fieldsObj,this.tracker,this.opts.hitFilter))}},{key:"setMaxScrollPercentageForCurrentPage",value:function(e){this.store.set(i({},this.pagePath,e))}},{key:"getMaxScrollPercentageForCurrentPage",value:function(){return this.store.get()[this.pagePath]||0}},{key:"getPagePath",value:function(){var e=n.i(o.c)(this.tracker.get("page")||this.tracker.get("location"));return e.pathname+e.search}},{key:"remove",value:function(){this.session.destroy(),this.stopListeningForMaxScrollChanges(),s.a.remove(this.tracker,"set",this.trackerSetOverride)}}]),e}();n.i(c.a)("maxScrollTracker",v)},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e){return l[e]||(l[e]=window.matchMedia(e))}var a=n(6),o=n(4),s=n(5),c=n(3),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l={},d=function(){function e(t,r){if(i(this,e),n.i(s.a)(t,s.b.MEDIA_QUERY_TRACKER),window.matchMedia){var a={changeTemplate:this.changeTemplate,changeTimeout:1e3,fieldsObj:{}};this.opts=n.i(c.a)(a,r),n.i(c.f)(this.opts.definitions)&&(this.opts.definitions=n.i(c.i)(this.opts.definitions),this.tracker=t,this.changeListeners=[],this.processMediaQueries())}}return u(e,[{key:"processMediaQueries",value:function(){var e=this;this.opts.definitions.forEach(function(t){if(t.name&&t.dimensionIndex){var n=e.getMatchName(t);e.tracker.set("dimension"+t.dimensionIndex,n),e.addChangeListeners(t)}})}},{key:"getMatchName",value:function(e){var t=void 0;return e.items.forEach(function(e){r(e.media).matches&&(t=e)}),t?t.name:a.e}},{key:"addChangeListeners",value:function(e){var t=this;e.items.forEach(function(i){var a=r(i.media),o=n.i(c.j)(function(){t.handleChanges(e)},t.opts.changeTimeout);a.addListener(o),t.changeListeners.push({mql:a,fn:o})})}},{key:"handleChanges",value:function(e){var t=this.getMatchName(e),i=this.tracker.get("dimension"+e.dimensionIndex);if(t!==i){this.tracker.set("dimension"+e.dimensionIndex,t);var r={transport:"beacon",eventCategory:e.name,eventAction:"change",eventLabel:this.opts.changeTemplate(i,t),nonInteraction:!0};this.tracker.send("event",n.i(c.b)(r,this.opts.fieldsObj,this.tracker,this.opts.hitFilter))}}},{key:"remove",value:function(){for(var e,t=0;e=this.changeListeners[t];t++)e.mql.removeListener(e.fn)}},{key:"changeTemplate",value:function(e,t){return e+" => "+t}}]),e}();n.i(o.a)("mediaQueryTracker",d)},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){return!("click"!=e.type||"_blank"==t.target||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.which>1)}var a=n(7),o=n(4),s=n(5),c=n(3),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=function(){function e(t,r){var o=this;if(i(this,e),n.i(s.a)(t,s.b.OUTBOUND_LINK_TRACKER),window.addEventListener){var u={events:["click"],linkSelector:"a, area",shouldTrackOutboundLink:this.shouldTrackOutboundLink,fieldsObj:{},attributePrefix:"ga-"};this.opts=n.i(c.a)(u,r),this.tracker=t,this.handleLinkInteractions=this.handleLinkInteractions.bind(this),this.delegates={},this.opts.events.forEach(function(e){o.delegates[e]=n.i(a.b)(document,e,o.opts.linkSelector,o.handleLinkInteractions,{composed:!0,useCapture:!0})})}}return u(e,[{key:"handleLinkInteractions",value:function(e,t){var i=this;this.opts.shouldTrackOutboundLink(t,a.c)&&!function(){var o=t.getAttribute("href")||t.getAttribute("xlink:href"),s=n.i(a.c)(o),u={transport:"beacon",eventCategory:"Outbound Link",eventAction:e.type,eventLabel:s.href};!navigator.sendBeacon&&r(e,t)&&window.addEventListener("click",function(e){e.defaultPrevented||(e.preventDefault(),u.hitCallback=n.i(c.g)(function(){location.href=o}))});var l=n.i(c.a)({},i.opts.fieldsObj,n.i(c.h)(t,i.opts.attributePrefix));i.tracker.send("event",n.i(c.b)(u,l,i.tracker,i.opts.hitFilter,t))}()}},{key:"shouldTrackOutboundLink",value:function(e,t){var n=e.getAttribute("href")||e.getAttribute("xlink:href"),i=t(n);return i.hostname!=location.hostname&&"http"==i.protocol.slice(0,4)}},{key:"remove",value:function(){var e=this;Object.keys(this.delegates).forEach(function(t){e.delegates[t].destroy()})}}]),e}();n.i(o.a)("outboundLinkTracker",l)},function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=n(6),o=n(8),s=n(4),c=n(11),u=n(9),l=n(5),d=n(3),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),f="hidden",v="visible",g=n.i(d.d)(),p=1e3,m=function(){function e(t,i){if(r(this,e),n.i(l.a)(t,l.b.PAGE_VISIBILITY_TRACKER),window.addEventListener){var a={sessionTimeout:c.a.DEFAULT_TIMEOUT,fieldsObj:{}};this.opts=n.i(d.a)(a,i),this.tracker=t,this.lastPageState=null,this.trackerSetOverride=this.trackerSetOverride.bind(this),this.handleChange=this.handleChange.bind(this),this.handleWindowUnload=this.handleWindowUnload.bind(this),this.handleExternalStoreSet=this.handleExternalStoreSet.bind(this),this.store=u.a.getOrCreate(t.get("trackingId"),"plugins/page-visibility-tracker"),this.store.on("externalSet",this.handleExternalStoreSet),this.session=new c.a(t,this.opts.sessionTimeout,this.opts.timeZone),o.a.add(t,"set",this.trackerSetOverride),document.addEventListener("visibilitychange",this.handleChange),window.addEventListener("unload",this.handleWindowUnload),document.visibilityState==v&&this.handleChange()}}return h(e,[{key:"handleChange",value:function(){var e=this.validateChangeData(this.store.get()),t={time:n.i(d.e)(),state:document.visibilityState,pageId:g};if(this.session.isExpired())if(document.visibilityState==f)this.store.clear();else{var i={transport:"beacon"};this.tracker.send("pageview",n.i(d.b)(i,this.opts.fieldsObj,this.tracker,this.opts.hitFilter)),this.store.set(t)}else e.pageId==g&&e.state==v&&this.sendPageVisibilityEvent(e),this.store.set(t);this.lastPageState=document.visibilityState}},{key:"validateChangeData",value:function(e){return this.lastPageState==v&&e.state==f&&e.pageId!=g&&(e.state=v,e.pageId=g,this.store.set(e)),e}},{key:"sendPageVisibilityEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,i={transport:"beacon",nonInteraction:!0,eventCategory:"Page Visibility",eventAction:"track",eventLabel:a.e};t&&(i.queueTime=n.i(d.e)()-t);var r=this.getTimeSinceLastStoredChange(e,t);r&&(i.eventValue=r,this.opts.visibleMetricIndex&&(i["metric"+this.opts.visibleMetricIndex]=r)),this.tracker.send("event",n.i(d.b)(i,this.opts.fieldsObj,this.tracker,this.opts.hitFilter))}},{key:"trackerSetOverride",value:function(e){var t=this;return function(){var r=n.i(d.f)(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:i({},arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1]);r.page&&r.page!==t.tracker.get("page")&&t.lastPageState==v&&t.handleChange(),e.apply(void 0,arguments)}}},{key:"getTimeSinceLastStoredChange",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.i(d.e)(),i=!this.session.isExpired(),r=e.time&&Math.round((t-e.time)/p);return i&&r>0?r:0}},{key:"handleExternalStoreSet",value:function(e,t){e.time!=t.time&&t.pageId==g&&t.state==v&&this.sendPageVisibilityEvent(t,e.time)}},{key:"handleWindowUnload",value:function(){this.lastPageState!=f&&this.handleChange()}},{key:"remove",value:function(){this.session.destroy(),o.a.remove(this.tracker,"set",this.trackerSetOverride),window.removeEventListener("unload",this.handleWindowUnload),document.removeEventListener("visibilitychange",this.handleChange)}}]),e}();n.i(s.a)("pageVisibilityTracker",m)},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=n(4),a=n(5),o=n(3),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=function(){function e(t,r){if(i(this,e),n.i(a.a)(t,a.b.SOCIAL_WIDGET_TRACKER),window.addEventListener){var s={fieldsObj:{},hitFilter:null};this.opts=n.i(o.a)(s,r),this.tracker=t,this.addWidgetListeners=this.addWidgetListeners.bind(this),this.addTwitterEventHandlers=this.addTwitterEventHandlers.bind(this),this.handleTweetEvents=this.handleTweetEvents.bind(this),this.handleFollowEvents=this.handleFollowEvents.bind(this),this.handleLikeEvents=this.handleLikeEvents.bind(this),this.handleUnlikeEvents=this.handleUnlikeEvents.bind(this),"complete"!=document.readyState?window.addEventListener("load",this.addWidgetListeners):this.addWidgetListeners()}}return s(e,[{key:"addWidgetListeners",value:function(){window.FB&&this.addFacebookEventHandlers(),window.twttr&&this.addTwitterEventHandlers()}},{key:"addTwitterEventHandlers",value:function(){var e=this;try{window.twttr.ready(function(){window.twttr.events.bind("tweet",e.handleTweetEvents),window.twttr.events.bind("follow",e.handleFollowEvents)})}catch(e){}}},{key:"removeTwitterEventHandlers",value:function(){var e=this;try{window.twttr.ready(function(){window.twttr.events.unbind("tweet",e.handleTweetEvents),window.twttr.events.unbind("follow",e.handleFollowEvents)})}catch(e){}
}},{key:"addFacebookEventHandlers",value:function(){try{window.FB.Event.subscribe("edge.create",this.handleLikeEvents),window.FB.Event.subscribe("edge.remove",this.handleUnlikeEvents)}catch(e){}}},{key:"removeFacebookEventHandlers",value:function(){try{window.FB.Event.unsubscribe("edge.create",this.handleLikeEvents),window.FB.Event.unsubscribe("edge.remove",this.handleUnlikeEvents)}catch(e){}}},{key:"handleTweetEvents",value:function(e){if("tweet"==e.region){var t=e.data.url||e.target.getAttribute("data-url")||location.href,i={transport:"beacon",socialNetwork:"Twitter",socialAction:"tweet",socialTarget:t};this.tracker.send("social",n.i(o.b)(i,this.opts.fieldsObj,this.tracker,this.opts.hitFilter))}}},{key:"handleFollowEvents",value:function(e){if("follow"==e.region){var t=e.data.screen_name||e.target.getAttribute("data-screen-name"),i={transport:"beacon",socialNetwork:"Twitter",socialAction:"follow",socialTarget:t};this.tracker.send("social",n.i(o.b)(i,this.opts.fieldsObj,this.tracker,this.opts.hitFilter))}}},{key:"handleLikeEvents",value:function(e){var t={transport:"beacon",socialNetwork:"Facebook",socialAction:"like",socialTarget:e};this.tracker.send("social",n.i(o.b)(t,this.opts.fieldsObj,this.tracker,this.opts.hitFilter))}},{key:"handleUnlikeEvents",value:function(e){var t={transport:"beacon",socialNetwork:"Facebook",socialAction:"unlike",socialTarget:e};this.tracker.send("social",n.i(o.b)(t,this.opts.fieldsObj,this.tracker,this.opts.hitFilter))}},{key:"remove",value:function(){window.removeEventListener("load",this.addWidgetListeners),this.removeFacebookEventHandlers(),this.removeTwitterEventHandlers()}}]),e}();n.i(r.a)("socialWidgetTracker",c)},function(e,t,n){"use strict";function i(e,t,i,o){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=function(e){var t=void 0;if(s.composed&&"function"==typeof e.composedPath)for(var c,u=e.composedPath(),l=0;c=u[l];l++)1==c.nodeType&&n.i(a.a)(c,i)&&(t=c);else t=n.i(r.a)(e.target,i,!0);t&&o.call(t,e,t)};return e.addEventListener(t,c,s.useCapture),{destroy:function(){e.removeEventListener(t,c,s.useCapture)}}}var r=n(12),a=n(10);t.a=i},function(e,t,n){"use strict";"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}},function(e,t,n){"use strict";function i(e){var t={};if(!e||1!=e.nodeType)return t;var n=e.attributes;if(0===n.length)return{};for(var i,r=0;i=n[r];r++)t[i.name]=i.value;return t}t.a=i},function(e,t,n){"use strict";function i(e){if(e=e&&"."!=e?e:location.href,c[e])return c[e];if(s.href=e,"."==e.charAt(0)||"/"==e.charAt(0))return i(s.href);var t=s.port==r||s.port==a?"":s.port;t="0"==t?"":t;var n=s.host.replace(o,""),u=s.origin?s.origin:s.protocol+"//"+n,l="/"==s.pathname.charAt(0)?s.pathname:"/"+s.pathname;return c[e]={hash:s.hash,host:n,hostname:s.hostname,href:s.href,origin:u,pathname:l,port:t,protocol:s.protocol,search:s.search}}t.a=i;var r="80",a="443",o=RegExp(":("+r+"|"+a+")$"),s=document.createElement("a"),c={}}]);
//# sourceMappingURL=0.main.js.map