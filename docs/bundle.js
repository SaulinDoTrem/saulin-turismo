!function n(o,i,a){function c(e,t){if(!i[e]){if(!o[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(u)return u(e,!0);throw(t=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",t}r=i[e]={exports:{}},o[e][0].call(r.exports,function(t){return c(o[e][1][t]||t)},r,r.exports,n,o,i,a)}return i[e].exports}for(var u="function"==typeof require&&require,t=0;t<a.length;t++)c(a[t]);return c}({1:[function(t,e,r){"use strict";var n=t("./components/returnTopButton"),o=t("./components/header.js"),i=t("./components/coinChart");$(window).ready(function(){(0,n.ReturnTopButton)(),(0,o.Header)(),(0,i.CoinChart)()})},{"./components/coinChart":2,"./components/header.js":3,"./components/returnTopButton":4}],2:[function(t,e,r){"use strict";function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(){j=function(){return a};var a={},t=Object.prototype,u=t.hasOwnProperty,s=Object.defineProperty||function(t,e,r){t[e]=r.value},e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o,i,a,c,e=e&&e.prototype instanceof h?e:h,e=Object.create(e.prototype),n=new x(n||[]);return s(e,"_invoke",{value:(o=t,i=r,a=n,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return L()}for(a.method=t,a.arg=e;;){var r=a.delegate;if(r){r=function t(e,r){var n=r.method,o=e.iterator[n];if(void 0===o)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;n=l(o,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,f;o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}(r,a);if(r){if(r===f)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===c)throw c="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c="executing";r=l(o,i,a);if("normal"===r.type){if(c=a.done?"completed":"suspendedYield",r.arg===f)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(c="completed",a.method="throw",a.arg=r.arg)}})}),e}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var f={};function h(){}function p(){}function d(){}var e={},y=(i(e,n,function(){return this}),Object.getPrototypeOf),y=y&&y(y(_([]))),m=(y&&y!==t&&u.call(y,n)&&(e=y),d.prototype=h.prototype=Object.create(e));function v(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function w(a,c){var e;s(this,"_invoke",{value:function(r,n){function t(){return new c(function(t,e){!function e(t,r,n,o){var i,t=l(a[t],a,r);if("throw"!==t.type)return(r=(i=t.arg).value)&&"object"==E(r)&&u.call(r,"__await")?c.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):c.resolve(r).then(function(t){i.value=t,n(i)},function(t){return e("throw",t,n,o)});o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}})}function g(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(g,this),this.reset(!0)}function _(e){if(e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(u.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t}).next=t}return{next:L}}function L(){return{value:void 0,done:!0}}return s(m,"constructor",{value:p.prototype=d,configurable:!0}),s(d,"constructor",{value:p,configurable:!0}),p.displayName=i(d,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,i(t,o,"GeneratorFunction")),t.prototype=Object.create(m),t},a.awrap=function(t){return{__await:t}},v(w.prototype),i(w.prototype,r,function(){return this}),a.AsyncIterator=w,a.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var i=new w(c(t,e,r,n),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},v(m),i(m,o,"Generator"),i(m,n,function(){return this}),i(m,"toString",function(){return"[object Generator]"}),a.keys=function(t){var e,r=Object(t),n=[];for(e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=_,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&u.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&u.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,b(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},a}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(t,e)||function(t,e){var r;if(t)return"string"==typeof t?n(t,e):"Map"===(r="Object"===(r=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function h(c){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=c.apply(t,a);function o(t){u(n,e,r,o,i,"next",t)}function i(t){u(n,e,r,o,i,"throw",t)}o(void 0)})}}function o(){return(o=h(j().mark(function t(){var e,r,n,o,i,a,c,u,s,l;return j().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=function(){return(l=h(j().mark(function t(){var e;return j().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://economia.awesomeapi.com.br/daily/BRL-MXN/15",{method:"GET",headers:{"content-type":"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:return e=t.sent,t.abrupt("return",e);case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)},s=function(){return l.apply(this,arguments)},u=function(t,e){t={type:"line",data:{labels:t,datasets:[{label:"Variação do Peso Mexicano",data:e}]}},e=$("#myChart")[0].getContext("2d");return new Chart(e,t)},c=function(t){var t=new Date(1e3*t).toString().split(" "),e=t[4].split(":");return"".concat(t[2]," ").concat(t[1],". ").concat(e[0],":").concat(e[1])},a=function(t){var r=[],n=[];return t.forEach(function(t){var e=t.bid,t=c(t.timestamp);r.push(t),n.push(e)}),r.reverse(),n.reverse(),[r,n]},i=function(t){t.data.labels.pop(),t.data.datasets.forEach(function(t){t.data.pop()}),t.update()},o=function(t,e,r){t.data.labels.push(e),t.data.datasets.forEach(function(t){t.data.push(r)}),t.update()},t.next=9,s();case 9:s=t.sent,r=a(s),r=f(r,2),e=r[0],r=r[1],n=u(e,r),$(".chart-form").submit(function(t){t.preventDefault();t=t.target["chart-form__input"].value;$.ajax({url:"https://economia.awesomeapi.com.br/daily/BRL-MXN/".concat(t),success:function(t){i(n);var t=f(a(t),2),e=t[0],t=t[1];o(n,e,t)}})});case 13:case"end":return t.stop()}},t)}))).apply(this,arguments)}Object.defineProperty(r,"__esModule",{value:!0}),r.CoinChart=function(){return o.apply(this,arguments)}},{}],3:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Header=function(){var t=document.baseURI.split("/"),t=t[t.length-1];switch(console.log(t,"file"),t){case"index.html":e(0);break;case"cultura.html":e(1);break;case"economia.html":e(2);break;case"gastronomia.html":e(3);break;case"pontos_turisticos.html":e(4);break;default:e(0)}function e(t){$("#link".concat(t)).addClass("underline")}!function(){function t(){$(".menu-mobile").removeClass("show")}$(".header-wrapper__menu-mobile").click(function(){$(".menu-mobile").addClass("show")}),$(".menu-mobile__exit-button").click(t),$(".menu-mobile__overlay").click(t)}()}},{}],4:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ReturnTopButton=function(){$(document).scroll(function(){0<window.scrollY&&!$(".return-top-button").hasClass("show")&&$(".return-top-button").addClass("show"),0===window.scrollY&&$(".return-top-button").hasClass("show")&&$(".return-top-button").removeClass("show")}),$(".return-top-button").click(function(){window.scrollTo(0,0)})}},{}]},{},[1]);