/*! For license information please see mortgage.js.LICENSE.txt */
(()=>{"use strict";var t=function(r,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},t(r,n)};function r(r,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=r}t(r,n),r.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}function n(t,r){var n,e,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,e&&(o=2&i[0]?e.return:i[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,i[1])).done)return o;switch(e=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,e=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=r.call(t,u)}catch(t){i=[6,t],e=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function e(t){var r="function"==typeof Symbol&&Symbol.iterator,n=r&&t[r],e=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&e>=t.length&&(t=void 0),{value:t&&t[e++],done:!t}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(t,r){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var e,o,i=n.call(t),u=[];try{for(;(void 0===r||r-- >0)&&!(e=i.next()).done;)u.push(e.value)}catch(t){o={error:t}}finally{try{e&&!e.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}function i(t,r,n){if(n||2===arguments.length)for(var e,o=0,i=r.length;o<i;o++)!e&&o in r||(e||(e=Array.prototype.slice.call(r,0,o)),e[o]=r[o]);return t.concat(e||Array.prototype.slice.call(r))}function u(t){return this instanceof u?(this.v=t,this):new u(t)}function c(t,r,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,o=n.apply(t,r||[]),i=[];return e={},c("next"),c("throw"),c("return"),e[Symbol.asyncIterator]=function(){return this},e;function c(t){o[t]&&(e[t]=function(r){return new Promise((function(n,e){i.push([t,r,n,e])>1||s(t,r)}))})}function s(t,r){try{(n=o[t](r)).value instanceof u?Promise.resolve(n.value.v).then(l,a):f(i[0][2],n)}catch(t){f(i[0][3],t)}var n}function l(t){s("next",t)}function a(t){s("throw",t)}function f(t,r){t(r),i.shift(),i.length&&s(i[0][0],i[0][1])}}Object.create,Object.create;var s=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function l(t){return"function"==typeof t}function a(t){return l(null==t?void 0:t.then)}function f(t){var r=t((function(t){Error.call(t),t.stack=(new Error).stack}));return r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r}var h=f((function(t){return function(r){t(this),this.message=r?r.length+" errors occurred during unsubscription:\n"+r.map((function(t,r){return r+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=r}}));function p(t,r){if(t){var n=t.indexOf(r);0<=n&&t.splice(n,1)}}var v=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var t,r,n,u,c;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var a=e(s),f=a.next();!f.done;f=a.next())f.value.remove(this)}catch(r){t={error:r}}finally{try{f&&!f.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}else s.remove(this);var p=this.initialTeardown;if(l(p))try{p()}catch(t){c=t instanceof h?t.errors:[t]}var v=this._finalizers;if(v){this._finalizers=null;try{for(var d=e(v),y=d.next();!y.done;y=d.next()){var w=y.value;try{b(w)}catch(t){c=null!=c?c:[],t instanceof h?c=i(i([],o(c)),o(t.errors)):c.push(t)}}}catch(t){n={error:t}}finally{try{y&&!y.done&&(u=d.return)&&u.call(d)}finally{if(n)throw n.error}}}if(c)throw new h(c)}},t.prototype.add=function(r){var n;if(r&&r!==this)if(this.closed)b(r);else{if(r instanceof t){if(r.closed||r._hasParent(this))return;r._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(r)}},t.prototype._hasParent=function(t){var r=this._parentage;return r===t||Array.isArray(r)&&r.includes(t)},t.prototype._addParent=function(t){var r=this._parentage;this._parentage=Array.isArray(r)?(r.push(t),r):r?[r,t]:t},t.prototype._removeParent=function(t){var r=this._parentage;r===t?this._parentage=null:Array.isArray(r)&&p(r,t)},t.prototype.remove=function(r){var n=this._finalizers;n&&p(n,r),r instanceof t&&r._removeParent(this)},t.EMPTY=((r=new t).closed=!0,r),t;var r}(),d=v.EMPTY;function y(t){return t instanceof v||t&&"closed"in t&&l(t.remove)&&l(t.add)&&l(t.unsubscribe)}function b(t){l(t)?t():t.unsubscribe()}var w=null,m=null,g=void 0,x=!1,_=!1,S={setTimeout:function(t,r){for(var n=[],e=2;e<arguments.length;e++)n[e-2]=arguments[e];var u=S.delegate;return(null==u?void 0:u.setTimeout)?u.setTimeout.apply(u,i([t,r],o(n))):setTimeout.apply(void 0,i([t,r],o(n)))},clearTimeout:function(t){var r=S.delegate;return((null==r?void 0:r.clearTimeout)||clearTimeout)(t)},delegate:void 0};function I(t){S.setTimeout((function(){if(!w)throw t;w(t)}))}function O(){}var E=A("C",void 0,void 0);function A(t,r,n){return{kind:t,value:r,error:n}}var T=null;function P(t){if(x){var r=!T;if(r&&(T={errorThrown:!1,error:null}),t(),r){var n=T,e=n.errorThrown,o=n.error;if(T=null,e)throw o}}else t()}var k=function(t){function n(r){var n=t.call(this)||this;return n.isStopped=!1,r?(n.destination=r,y(r)&&r.add(n)):n.destination=U,n}return r(n,t),n.create=function(t,r,n){return new L(t,r,n)},n.prototype.next=function(t){this.isStopped?q(function(t){return A("N",t,void 0)}(t),this):this._next(t)},n.prototype.error=function(t){this.isStopped?q(A("E",void 0,t),this):(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped?q(E,this):(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(v),j=Function.prototype.bind;function C(t,r){return j.call(t,r)}var z=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var r=this.partialObserver;if(r.next)try{r.next(t)}catch(t){F(t)}},t.prototype.error=function(t){var r=this.partialObserver;if(r.error)try{r.error(t)}catch(t){F(t)}else F(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(t){F(t)}},t}(),L=function(t){function n(r,n,e){var o,i,u=t.call(this)||this;return l(r)||!r?o={next:null!=r?r:void 0,error:null!=n?n:void 0,complete:null!=e?e:void 0}:u&&_?((i=Object.create(r)).unsubscribe=function(){return u.unsubscribe()},o={next:r.next&&C(r.next,i),error:r.error&&C(r.error,i),complete:r.complete&&C(r.complete,i)}):o=r,u.destination=new z(o),u}return r(n,t),n}(k);function F(t){var r;x?(r=t,x&&T&&(T.errorThrown=!0,T.error=r)):I(t)}function q(t,r){var n=m;n&&S.setTimeout((function(){return n(t,r)}))}var U={closed:!0,next:O,error:function(t){throw t},complete:O},N="function"==typeof Symbol&&Symbol.observable||"@@observable";function M(t){return t}function R(t){return 0===t.length?M:1===t.length?t[0]:function(r){return t.reduce((function(t,r){return r(t)}),r)}}var Y=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(r){var n=new t;return n.source=this,n.operator=r,n},t.prototype.subscribe=function(t,r,n){var e,o=this,i=(e=t)&&e instanceof k||function(t){return t&&l(t.next)&&l(t.error)&&l(t.complete)}(e)&&y(e)?t:new L(t,r,n);return P((function(){var t=o,r=t.operator,n=t.source;i.add(r?r.call(i,n):n?o._subscribe(i):o._trySubscribe(i))})),i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){t.error(r)}},t.prototype.forEach=function(t,r){var n=this;return new(r=D(r))((function(r,e){var o=new L({next:function(r){try{t(r)}catch(t){e(t),o.unsubscribe()}},error:e,complete:r});n.subscribe(o)}))},t.prototype._subscribe=function(t){var r;return null===(r=this.source)||void 0===r?void 0:r.subscribe(t)},t.prototype[N]=function(){return this},t.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return R(t)(this)},t.prototype.toPromise=function(t){var r=this;return new(t=D(t))((function(t,n){var e;r.subscribe((function(t){return e=t}),(function(t){return n(t)}),(function(){return t(e)}))}))},t.create=function(r){return new t(r)},t}();function D(t){var r;return null!==(r=null!=t?t:g)&&void 0!==r?r:Promise}function G(t){return l(t[N])}function H(t){return Symbol.asyncIterator&&l(null==t?void 0:t[Symbol.asyncIterator])}function Z(t){return new TypeError("You provided "+(null!==t&&"object"==typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}var B="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function J(t){return l(null==t?void 0:t[B])}function K(t){return c(this,arguments,(function(){var r,e,o;return n(this,(function(n){switch(n.label){case 0:r=t.getReader(),n.label=1;case 1:n.trys.push([1,,9,10]),n.label=2;case 2:return[4,u(r.read())];case 3:return e=n.sent(),o=e.value,e.done?[4,u(void 0)]:[3,5];case 4:return[2,n.sent()];case 5:return[4,u(o)];case 6:return[4,n.sent()];case 7:return n.sent(),[3,2];case 8:return[3,10];case 9:return r.releaseLock(),[7];case 10:return[2]}}))}))}function Q(t){return l(null==t?void 0:t.getReader)}function V(t){if(t instanceof Y)return t;if(null!=t){if(G(t))return i=t,new Y((function(t){var r=i[N]();if(l(r.subscribe))return r.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(s(t))return o=t,new Y((function(t){for(var r=0;r<o.length&&!t.closed;r++)t.next(o[r]);t.complete()}));if(a(t))return n=t,new Y((function(t){n.then((function(r){t.closed||(t.next(r),t.complete())}),(function(r){return t.error(r)})).then(null,I)}));if(H(t))return W(t);if(J(t))return r=t,new Y((function(t){var n,o;try{for(var i=e(r),u=i.next();!u.done;u=i.next()){var c=u.value;if(t.next(c),t.closed)return}}catch(t){n={error:t}}finally{try{u&&!u.done&&(o=i.return)&&o.call(i)}finally{if(n)throw n.error}}t.complete()}));if(Q(t))return W(K(t))}var r,n,o,i;throw Z(t)}function W(t){return new Y((function(r){(function(t,r){var o,i,u,c;return function(t,r,n,e){return new(n||(n=Promise))((function(o,i){function u(t){try{s(e.next(t))}catch(t){i(t)}}function c(t){try{s(e.throw(t))}catch(t){i(t)}}function s(t){var r;t.done?o(t.value):(r=t.value,r instanceof n?r:new n((function(t){t(r)}))).then(u,c)}s((e=e.apply(t,r||[])).next())}))}(this,void 0,void 0,(function(){var s,l;return n(this,(function(n){switch(n.label){case 0:n.trys.push([0,5,6,11]),o=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,n=t[Symbol.asyncIterator];return n?n.call(t):(t=e(t),r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r);function o(n){r[n]=t[n]&&function(r){return new Promise((function(e,o){!function(t,r,n,e){Promise.resolve(e).then((function(r){t({value:r,done:n})}),r)}(e,o,(r=t[n](r)).done,r.value)}))}}}(t),n.label=1;case 1:return[4,o.next()];case 2:if((i=n.sent()).done)return[3,4];if(s=i.value,r.next(s),r.closed)return[2];n.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return l=n.sent(),u={error:l},[3,11];case 6:return n.trys.push([6,,9,10]),i&&!i.done&&(c=o.return)?[4,c.call(o)]:[3,8];case 7:n.sent(),n.label=8;case 8:return[3,10];case 9:if(u)throw u.error;return[7];case 10:return[7];case 11:return r.complete(),[2]}}))}))})(t,r).catch((function(t){return r.error(t)}))}))}function X(t){return function(r){if(function(t){return l(null==t?void 0:t.lift)}(r))return r.lift((function(r){try{return t(r,this)}catch(t){this.error(t)}}));throw new TypeError("Unable to lift unknown Observable type")}}function $(t,r,n,e,o){return new tt(t,r,n,e,o)}var tt=function(t){function n(r,n,e,o,i,u){var c=t.call(this,r)||this;return c.onFinalize=i,c.shouldUnsubscribe=u,c._next=n?function(t){try{n(t)}catch(t){r.error(t)}}:t.prototype._next,c._error=o?function(t){try{o(t)}catch(t){r.error(t)}finally{this.unsubscribe()}}:t.prototype._error,c._complete=e?function(){try{e()}catch(t){r.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,c}return r(n,t),n.prototype.unsubscribe=function(){var r;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;t.prototype.unsubscribe.call(this),!n&&(null===(r=this.onFinalize)||void 0===r||r.call(this))}},n}(k);function rt(t,r){return X((function(n,e){var o=0;n.subscribe($(e,(function(n){e.next(t.call(r,n,o++))})))}))}function nt(t,r,n,e,o){void 0===e&&(e=0),void 0===o&&(o=!1);var i=r.schedule((function(){n(),o?t.add(this.schedule(null,e)):this.unsubscribe()}),e);if(t.add(i),!o)return i}function et(t,r,n){return void 0===n&&(n=1/0),l(r)?et((function(n,e){return rt((function(t,o){return r(n,t,e,o)}))(V(t(n,e)))}),n):("number"==typeof r&&(n=r),X((function(r,e){return function(t,r,n,e,o,i,u,c){var s=[],l=0,a=0,f=!1,h=function(){!f||s.length||l||r.complete()},p=function(t){return l<e?v(t):s.push(t)},v=function(t){l++;var o=!1;V(n(t,a++)).subscribe($(r,(function(t){r.next(t)}),(function(){o=!0}),void 0,(function(){if(o)try{l--;for(;s.length&&l<e;)t=void 0,t=s.shift(),v(t);h()}catch(t){r.error(t)}var t})))};return t.subscribe($(r,p,(function(){f=!0,h()}))),function(){}}(r,e,t,n)})))}var ot=Array.isArray;function it(t){return rt((function(r){return function(t,r){return ot(r)?t.apply(void 0,i([],o(r))):t(r)}(t,r)}))}var ut=["addListener","removeListener"],ct=["addEventListener","removeEventListener"],st=["on","off"];function lt(t,r,n,e){if(l(n)&&(e=n,n=void 0),e)return lt(t,r,n).pipe(it(e));var i=o(function(t){return l(t.addEventListener)&&l(t.removeEventListener)}(t)?ct.map((function(e){return function(o){return t[e](r,o,n)}})):function(t){return l(t.addListener)&&l(t.removeListener)}(t)?ut.map(at(t,r)):function(t){return l(t.on)&&l(t.off)}(t)?st.map(at(t,r)):[],2),u=i[0],c=i[1];if(!u&&s(t))return et((function(t){return lt(t,r,n)}))(V(t));if(!u)throw new TypeError("Invalid event target");return new Y((function(t){var r=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return t.next(1<r.length?r:r[0])};return u(r),function(){return c(r)}}))}function at(t,r){return function(n){return function(e){return t[n](r,e)}}}function ft(t){return t&&l(t.schedule)}function ht(t){return t[t.length-1]}function pt(t){return l(ht(t))?t.pop():void 0}function vt(t){return ft(ht(t))?t.pop():void 0}function dt(t,r){return void 0===r&&(r=0),X((function(n,e){n.subscribe($(e,(function(n){return nt(e,t,(function(){return e.next(n)}),r)}),(function(){return nt(e,t,(function(){return e.complete()}),r)}),(function(n){return nt(e,t,(function(){return e.error(n)}),r)})))}))}function yt(t,r){return void 0===r&&(r=0),X((function(n,e){e.add(t.schedule((function(){return n.subscribe(e)}),r))}))}function bt(t,r){if(!t)throw new Error("Iterable cannot be null");return new Y((function(n){nt(n,r,(function(){var e=t[Symbol.asyncIterator]();nt(n,r,(function(){e.next().then((function(t){t.done?n.complete():n.next(t.value)}))}),0,!0)}))}))}function wt(t,r){return r?function(t,r){if(null!=t){if(G(t))return function(t,r){return V(t).pipe(yt(r),dt(r))}(t,r);if(s(t))return function(t,r){return new Y((function(n){var e=0;return r.schedule((function(){e===t.length?n.complete():(n.next(t[e++]),n.closed||this.schedule())}))}))}(t,r);if(a(t))return function(t,r){return V(t).pipe(yt(r),dt(r))}(t,r);if(H(t))return bt(t,r);if(J(t))return function(t,r){return new Y((function(n){var e;return nt(n,r,(function(){e=t[B](),nt(n,r,(function(){var t,r,o;try{r=(t=e.next()).value,o=t.done}catch(t){return void n.error(t)}o?n.complete():n.next(r)}),0,!0)})),function(){return l(null==e?void 0:e.return)&&e.return()}}))}(t,r);if(Q(t))return function(t,r){return bt(K(t),r)}(t,r)}throw Z(t)}(t,r):V(t)}var mt=Array.isArray,gt=Object.getPrototypeOf,xt=Object.prototype,_t=Object.keys;function St(t){if(1===t.length){var r=t[0];if(mt(r))return{args:r,keys:null};if((e=r)&&"object"==typeof e&&gt(e)===xt){var n=_t(r);return{args:n.map((function(t){return r[t]})),keys:n}}}var e;return{args:t,keys:null}}function It(t,r){return t.reduce((function(t,n,e){return t[n]=r[e],t}),{})}function Ot(t,r,n){return void 0===n&&(n=M),function(e){Et(r,(function(){for(var o=t.length,i=new Array(o),u=o,c=o,s=function(o){Et(r,(function(){var s=wt(t[o],r),l=!1;s.subscribe($(e,(function(t){i[o]=t,l||(l=!0,c--),c||e.next(n(i.slice()))}),(function(){--u||e.complete()})))}),e)},l=0;l<o;l++)s(l)}),e)}}function Et(t,r,n){t?nt(n,t,r):r()}function At(t,r,n){var e=l(t)||r||n?{next:t,error:r,complete:n}:t;return e?X((function(t,r){var n;null===(n=e.subscribe)||void 0===n||n.call(e);var o=!0;t.subscribe($(r,(function(t){var n;null===(n=e.next)||void 0===n||n.call(e,t),r.next(t)}),(function(){var t;o=!1,null===(t=e.complete)||void 0===t||t.call(e),r.complete()}),(function(t){var n;o=!1,null===(n=e.error)||void 0===n||n.call(e,t),r.error(t)}),(function(){var t,r;o&&(null===(t=e.unsubscribe)||void 0===t||t.call(e)),null===(r=e.finalize)||void 0===r||r.call(e)})))})):M}var Tt=function(t){function n(r,n){return t.call(this)||this}return r(n,t),n.prototype.schedule=function(t,r){return void 0===r&&(r=0),this},n}(v),Pt={setInterval:function(t,r){for(var n=[],e=2;e<arguments.length;e++)n[e-2]=arguments[e];var u=Pt.delegate;return(null==u?void 0:u.setInterval)?u.setInterval.apply(u,i([t,r],o(n))):setInterval.apply(void 0,i([t,r],o(n)))},clearInterval:function(t){var r=Pt.delegate;return((null==r?void 0:r.clearInterval)||clearInterval)(t)},delegate:void 0},kt=function(t){function n(r,n){var e=t.call(this,r,n)||this;return e.scheduler=r,e.work=n,e.pending=!1,e}return r(n,t),n.prototype.schedule=function(t,r){if(void 0===r&&(r=0),this.closed)return this;this.state=t;var n=this.id,e=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(e,n,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(e,this.id,r),this},n.prototype.requestAsyncId=function(t,r,n){return void 0===n&&(n=0),Pt.setInterval(t.flush.bind(t,this),n)},n.prototype.recycleAsyncId=function(t,r,n){if(void 0===n&&(n=0),null!=n&&this.delay===n&&!1===this.pending)return r;Pt.clearInterval(r)},n.prototype.execute=function(t,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(t,r);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(t,r){var n,e=!1;try{this.work(t)}catch(t){e=!0,n=t||new Error("Scheduled action threw falsy error")}if(e)return this.unsubscribe(),n},n.prototype.unsubscribe=function(){if(!this.closed){var r=this.id,n=this.scheduler,e=n.actions;this.work=this.state=this.scheduler=null,this.pending=!1,p(e,this),null!=r&&(this.id=this.recycleAsyncId(n,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},n}(Tt),jt={now:function(){return(jt.delegate||Date).now()},delegate:void 0},Ct=function(){function t(r,n){void 0===n&&(n=t.now),this.schedulerActionCtor=r,this.now=n}return t.prototype.schedule=function(t,r,n){return void 0===r&&(r=0),new this.schedulerActionCtor(this,t).schedule(n,r)},t.now=jt.now,t}(),zt=new(function(t){function n(r,n){void 0===n&&(n=Ct.now);var e=t.call(this,r,n)||this;return e.actions=[],e._active=!1,e._scheduled=void 0,e}return r(n,t),n.prototype.flush=function(t){var r=this.actions;if(this._active)r.push(t);else{var n;this._active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=r.shift());if(this._active=!1,n){for(;t=r.shift();)t.unsubscribe();throw n}}},n}(Ct))(kt),Lt=zt;function Ft(){return void 0===(t=1)&&(t=1/0),et(M,t);var t}var qt=new Y((function(t){return t.complete()}));function Ut(t){return t<=0?function(){return qt}:X((function(r,n){var e=0;r.subscribe($(n,(function(r){++e<=t&&(n.next(r),t<=e&&n.complete())})))}))}function Nt(t,r){return r?function(n){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return Ft()(wt(t,vt(t)))}(r.pipe(Ut(1),X((function(t,r){t.subscribe($(r,O))}))),n.pipe(Nt(t)))}:et((function(r,n){return t(r,n).pipe(Ut(1),function(t){return rt((function(){return t}))}(r))}))}var Mt=f((function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),Rt=function(t){function n(){var r=t.call(this)||this;return r.closed=!1,r.currentObservers=null,r.observers=[],r.isStopped=!1,r.hasError=!1,r.thrownError=null,r}return r(n,t),n.prototype.lift=function(t){var r=new Yt(this,this);return r.operator=t,r},n.prototype._throwIfClosed=function(){if(this.closed)throw new Mt},n.prototype.next=function(t){var r=this;P((function(){var n,o;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var i=e(r.currentObservers),u=i.next();!u.done;u=i.next())u.value.next(t)}catch(t){n={error:t}}finally{try{u&&!u.done&&(o=i.return)&&o.call(i)}finally{if(n)throw n.error}}}}))},n.prototype.error=function(t){var r=this;P((function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=t;for(var n=r.observers;n.length;)n.shift().error(t)}}))},n.prototype.complete=function(){var t=this;P((function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var r=t.observers;r.length;)r.shift().complete()}}))},n.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(n.prototype,"observed",{get:function(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0},enumerable:!1,configurable:!0}),n.prototype._trySubscribe=function(r){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,r)},n.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},n.prototype._innerSubscribe=function(t){var r=this,n=this,e=n.hasError,o=n.isStopped,i=n.observers;return e||o?d:(this.currentObservers=null,i.push(t),new v((function(){r.currentObservers=null,p(i,t)})))},n.prototype._checkFinalizedStatuses=function(t){var r=this,n=r.hasError,e=r.thrownError,o=r.isStopped;n?t.error(e):o&&t.complete()},n.prototype.asObservable=function(){var t=new Y;return t.source=this,t},n.create=function(t,r){return new Yt(t,r)},n}(Y),Yt=function(t){function n(r,n){var e=t.call(this)||this;return e.destination=r,e.source=n,e}return r(n,t),n.prototype.next=function(t){var r,n;null===(n=null===(r=this.destination)||void 0===r?void 0:r.next)||void 0===n||n.call(r,t)},n.prototype.error=function(t){var r,n;null===(n=null===(r=this.destination)||void 0===r?void 0:r.error)||void 0===n||n.call(r,t)},n.prototype.complete=function(){var t,r;null===(r=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===r||r.call(t)},n.prototype._subscribe=function(t){var r,n;return null!==(n=null===(r=this.source)||void 0===r?void 0:r.subscribe(t))&&void 0!==n?n:d},n}(Rt);function Dt(t,r){for(var n=[],e=2;e<arguments.length;e++)n[e-2]=arguments[e];return!0===r?(t(),null):!1===r?null:r.apply(void 0,i([],o(n))).pipe(Ut(1)).subscribe((function(){return t()}))}const Gt=document.querySelector("#amount"),Ht=document.querySelector("#rate"),Zt=document.querySelectorAll(".length"),Bt=document.querySelector("#result"),Jt=t=>lt(t,"input").pipe(rt((t=>parseFloat(t.target.value))),At(console.log)),Kt=Jt(Gt),Qt=Jt(Ht),Vt=Jt(Zt),Wt=t=>function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=vt(t);return wt(t,n)}(t).pipe(function(t,r){void 0===r&&(r=zt);var n=function(t,r,n){void 0===t&&(t=0),void 0===n&&(n=Lt);var e=-1;return null!=r&&(ft(r)?n=r:e=r),new Y((function(r){var o,i=(o=t)instanceof Date&&!isNaN(o)?+t-n.now():t;i<0&&(i=0);var u=0;return n.schedule((function(){r.closed||(r.next(u++),0<=e?this.schedule(void 0,e):r.complete())}),i)}))}(1e3,r);return Nt((function(){return n}))}()),Xt=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=vt(t),e=pt(t),o=St(t),i=o.args,u=o.keys;if(0===i.length)return wt([],n);var c=new Y(Ot(i,n,u?function(t){return It(u,t)}:M));return e?c.pipe(it(e)):c}(Kt,Qt,Vt).pipe(rt((([t,r,n])=>function(t,r,n){const e=t/1200;return(r*e/(1-Math.pow(1/(1+e),n))).toFixed(2)}(r,t,n))),At(console.log),($t=t=>!isNaN(t),X((function(t,r){var n=0;t.subscribe($(r,(function(t){return $t.call(undefined,t,n++)&&r.next(t)})))}))),function(t){void 0===t&&(t={});var r=t.connector,n=void 0===r?function(){return new Rt}:r,e=t.resetOnError,o=void 0===e||e,i=t.resetOnComplete,u=void 0===i||i,c=t.resetOnRefCountZero,s=void 0===c||c;return function(t){var r=null,e=null,i=null,c=0,l=!1,a=!1,f=function(){null==e||e.unsubscribe(),e=null},h=function(){f(),r=i=null,l=a=!1},p=function(){var t=r;h(),null==t||t.unsubscribe()};return X((function(t,v){c++,a||l||f();var d=i=null!=i?i:n();v.add((function(){0!=--c||a||l||(e=Dt(p,s))})),d.subscribe(v),r||(r=new L({next:function(t){return d.next(t)},error:function(t){a=!0,f(),e=Dt(h,o,t),d.error(t)},complete:function(){l=!0,f(),e=Dt(h,u),d.complete()}}),wt(t).subscribe(r))}))(t)}}());var $t;Xt.subscribe((t=>Bt.innerHTML=t)),Xt.pipe(et((t=>Wt(t)))).subscribe()})();