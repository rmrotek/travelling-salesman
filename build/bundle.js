/*! bundle.js 2018-11-07 10:10:49 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["bundle"]=e():t["bundle"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={"i":r,"l":!1,"exports":{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{"configurable":!1,"enumerable":!0,"get":r})},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=45)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(30)("wks"),o=n(31),i=n(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports={"version":"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(0),o=n(2),i=n(8),u=n(5),c=n(12),a=function(t,e,n){var s,f,l,h=t&a.F,d=t&a.G,p=t&a.S,v=t&a.P,y=t&a.B,g=t&a.W,m=d?o:o[e]||(o[e]={}),_=m["prototype"],x=d?r:p?r[e]:(r[e]||{})["prototype"];d&&(n=e);for(s in n)(f=!h&&x&&x[s]!==undefined)&&c(m,s)||(l=f?x[s]:n[s],m[s]=d&&"function"!=typeof x[s]?n[s]:y&&f?i(l,r):g&&x[s]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e["prototype"]=t["prototype"],e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((m.virtual||(m.virtual={}))[s]=l,t&a.R&&_&&!_[s]&&u(_,s,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){var r=n(9);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(6),o=n(18);t.exports=n(7)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(4),o=n(54),i=n(55),u=Object.defineProperty;e.f=n(7)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports=!n(29)(function(){return 7!=Object.defineProperty({},"a",{"get":function(){return 7}}).a})},function(t,e,n){var r=n(11);t.exports=function(t,e,n){if(r(t),e===undefined)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports={}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(t==undefined)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=!0},function(t,e,n){var r=n(9),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports=function(t,e){return{"enumerable":!(1&t),"configurable":!(2&t),"writable":!(4&t),"value":e}}},function(t,e,n){var r=n(62),o=n(15);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(14),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(30)("keys"),o=n(31);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(6).f,o=n(12),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{"configurable":!0,"value":e})}},function(t,e,n){"use strict";function r(t){var e,n;this.promise=new t(function(t,r){if(e!==undefined||n!==undefined)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=o(e),this.reject=o(n)}var o=n(11);t.exports.f=function(t){return new r(t)}},function(t,e,n){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(88),o=function(t){return t&&t.__esModule?t:{"default":t}}(r);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o["default"])(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){t.exports={"default":n(51),"__esModule":!0}},function(t,e,n){"use strict";var r=n(53)(!0);n(28)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{"value":undefined,"done":!0}:(t=r(e,n),this._i+=t.length,{"value":t,"done":!1})})},function(t,e,n){"use strict";var r=n(16),o=n(3),i=n(56),u=n(5),c=n(10),a=n(57),s=n(22),f=n(65),l=n(1)("iterator"),h=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,p,v,y,g){a(n,e,p);var m,_,x,w=function(t){if(!h&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},b=e+" Iterator",M="values"==v,k=!1,O=t.prototype,j=O[l]||O["@@iterator"]||v&&O[v],P=j||w(v),S=v?M?w("entries"):P:undefined,L="Array"==e?O.entries||j:j;if(L&&(x=f(L.call(new t)))!==Object.prototype&&x.next&&(s(x,b,!0),r||"function"==typeof x[l]||u(x,l,d)),M&&j&&"values"!==j.name&&(k=!0,P=function(){return j.call(this)}),r&&!g||!h&&!k&&O[l]||u(O,l,P),c[e]=P,c[b]=d,v)if(m={"values":M?P:w("values"),"keys":y?P:w("keys"),"entries":S},g)for(_ in m)_ in O||i(O,_,m[_]);else o(o.P+o.F*(h||k),e,m);return m}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){var r=n(2),o=n(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=e!==undefined?e:{})})("versions",[]).push({"version":r.version,"mode":n(16)?"pure":"global","copyright":"\xa9 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(t===undefined?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(15);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(13),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,c;return t===undefined?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){var r=n(4);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(u){var i=t["return"];throw i!==undefined&&r(i.call(t)),u}}},function(t,e,n){var r=n(10),o=n(1)("iterator"),i=Array.prototype;t.exports=function(t){return t!==undefined&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(35),o=n(1)("iterator"),i=n(10);t.exports=n(2).getIteratorMethod=function(t){if(t!=undefined)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(4),o=n(11),i=n(1)("species");t.exports=function(t,e){var n,u=r(t).constructor;return u===undefined||(n=r(u)[i])==undefined?e:o(n)}},function(t,e,n){var r,o,i,u=n(8),c=n(73),a=n(33),s=n(17),f=n(0),l=f.process,h=f.setImmediate,d=f.clearImmediate,p=f.MessageChannel,v=f.Dispatch,y=0,g={},m=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},_=function(t){m.call(t.data)};h&&d||(h=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return g[++y]=function(){c("function"==typeof t?t:Function(t),e)},r(y),y},d=function(t){delete g[t]},"process"==n(13)(l)?r=function(t){l.nextTick(u(m,t,1))}:v&&v.now?r=function(t){v.now(u(m,t,1))}:p?(o=new p,i=o.port2,o.port1.onmessage=_,r=u(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",_,!1)):r="onreadystatechange"in s("script")?function(t){a.appendChild(s("script"))["onreadystatechange"]=function(){a.removeChild(this),m.call(t)}}:function(t){setTimeout(u(m,t,1),0)}),t.exports={"set":h,"clear":d}},function(t,e){t.exports=function(t){try{return{"e":!1,"v":t()}}catch(e){return{"e":!0,"v":e}}}},function(t,e,n){var r=n(4),o=n(9),i=n(23);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=[7][r]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(u){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{"done":n=!0}},i[r]=function(){return u},t(i)}catch(u){}return n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0}),e["default"]=function(t){for(var e=t.length;e;){var n=Math.floor(Math.random()*e--),r=[t[e],t[n]];t[n]=r[0],t[e]=r[1]}return t}},function(t,e,n){"use strict";var r=n(46),o=function(t){return t&&t.__esModule?t:{"default":t}}(r),i=10;$("#number-of-nodes").keyup(function(){i=parseInt($(this).val())}).keyup();var u=new o["default"]($("#c"),800,600,function(){$("#btn-start").attr("disabled",!0),$("#btn-stop").attr("disabled",!1)},function(){$("#btn-start").attr("disabled",!1),$("#btn-stop").attr("disabled",!0)});$(document).ready(function(){i!==undefined?u.makeRandomNodes(i):u.makeRandomNodes(10),u.render(),$("#btn-stop").attr("disabled",!0),$(window).resize(function(){$("#c").css({"width":Math.min(800,screen.width)+"px"})})}),$("#btn-random").click(function(){u.stop(),i!==undefined?u.makeRandomNodes(i):u.makeRandomNodes(10),u.render()}),$("#btn-start").click(function(){u.start()}),$("#btn-stop").click(function(){u.stop()})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{"value":!0});var o=n(47),i=r(o),u=n(50),c=r(u),a=n(80),s=r(a),f=n(83),l=r(f),h=n(24),d=r(h),p=n(25),v=r(p),y=n(44),g=r(y),m=n(91),_=r(m),x=n(93),w=r(x),b=function(){function t(e,n,r,o,i){(0,d["default"])(this,t),this.el=e,this.width=n,this.height=r,this.nodes=[],this.orders=[],this.radius=8,this.lw=2,this.mutation_rate=.05,this.deviceRatio=window.devicePixelRatio||1,this.el.attr("width",n*this.deviceRatio).attr("height",r*this.deviceRatio).css({"width":Math.min(n,screen.width)+"px"}),this.ctx=this.el[0].getContext("2d"),this.is_running=!1,this._onstart=o,this._onstop=i}return(0,v["default"])(t,[{"key":"makeRandomNodes","value":function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:32,e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:100;this.is_running=!1,this.n=t,this.life_count=e,this.nodes=[],this.orders=[];for(var n=0;n<t;n++)this.nodes.push({"x":Math.floor(Math.random()*(this.width-40))+20,"y":Math.floor(Math.random()*(this.height-40))+20}),this.orders.push(n);(0,g["default"])(this.orders),this.orders.push(this.orders[0]),console.log("nodes",this.nodes),console.log("orders",this.orders),this.ga=new _["default"]({"life_count":this.life_count,"mutation_rate":this.mutation_rate,"gene_length":this.n,"rate":this.rate.bind(this),"xFunc":this.xFunc.bind(this),"mFunc":this.mFunc.bind(this)})}},{"key":"rate","value":function(t){return 1/this.getDistance(t)}},{"key":"xFunc","value":function(t,e){var n=Math.floor(Math.random()*(this.n-2))+1,r=Math.floor(Math.random()*(this.n-n))+n,o=e.gene.slice(n,r),i=t.gene.slice(0,n);return o.concat(e.gene).map(function(t){i.includes(t)||i.push(t)}),i}},{"key":"mFunc","value":function(t){for(var e=0,n=0,r=t.length;e===n;)e=Math.floor(Math.random()*r),n=Math.floor(Math.random()*r);if(e>n){var o=[n,e];e=o[0],n=o[1]}var i=[function(t,e,n){var r=t[e];t[e]=t[n],t[n]=r},function(t,e,n){var r=t.slice(e,n).reverse();t.splice.apply(t,[e,n-e].concat((0,l["default"])(r)))},function(t,e,n){var r=t.splice(e,n-e);t.splice.apply(t,[Math.floor(Math.random()*t.length),0].concat((0,l["default"])(r)))}];return i[Math.floor(Math.random()*i.length)](t,e,n),t}},{"key":"getDistance","value":function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null,e=0,n=this.nodes;return t.concat(t[0]).reduce(function(t,r){var o=(0,s["default"])(n[t].x-n[r].x,n[t].y-n[r].y);return e+=o,r}),console.log(e),e}},{"key":"getEachDistance","value":function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null,e=[],n=this.nodes;return t.concat(t[0]).reduce(function(t,r){var o=(0,s["default"])(n[t].x-n[r].x,n[t].y-n[r].y).toFixed(2);return e.push(o),r}),console.log(e),e}},{"key":"render","value":function(){var t=this.ctx,e=this.nodes,n=this.deviceRatio;t.clearRect(0,0,this.width*n,this.height*n),t.lineWidth=this.lw*n,t.strokeStyle="rgba(64, 64, 64, 0.2)",this.orders.concat(this.orders[0]).reduce(function(r,o){var i=e[r],u=e[o];t.beginPath(),t.moveTo(i.x*n,i.y*n),t.lineTo(u.x*n,u.y*n),t.stroke();(0,s["default"])(i.x-u.x,i.y-u.y);return o}),$("#path").html(this.orders.reduce(function(t,e){return t.concat(e).concat(" => ")},[]).slice(0,-1)),$("#distance").html(this.getEachDistance(this.orders).reduce(function(t,e){return t.concat(e).concat(" => ")},[]).slice(0,-1)),$("#total-distance").html(this.getDistance(this.orders).toFixed(2)),t.lineWidth=1*n,t.strokeStyle="#900",t.fillStyle="#000",t.font=" bolder 15px arial ";for(var r=0;r<e.length;r++)t.fillText(r,e[r].x,e[r].y);$("#gen").html(this.ga.generation),$("#mutation").html(this.ga.mutation_count)}},{"key":"run","value":function(){function t(){return e.apply(this,arguments)}var e=(0,c["default"])(i["default"].mark(function n(){var t,e,r,o,u;return i["default"].wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t=-1,e=0;case 2:if(!this.is_running){n.next=18;break}if(this.orders=this.ga.next(),r=this.ga,o=r.best,u=r.generation,t===o.score){n.next=10;break}t=o.score,e=u,n.next=13;break;case 10:if(!(u-e>=5e3)){n.next=13;break}return this.stop(),n.abrupt("break",18);case 13:return this.ga.generation%10==0&&this.render(),n.next=16,(0,w["default"])(1);case 16:n.next=2;break;case 18:case"end":return n.stop()}},n,this)}));return t}()},{"key":"start","value":function(){this.is_running=!0,this.run(),"function"==typeof this._onstart&&this._onstart()}},{"key":"stop","value":function(){this.is_running=!1,"function"==typeof this._onstop&&this._onstop()}}]),t}();e["default"]=b},function(t,e,n){t.exports=n(48)},function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=undefined,t.exports=n(49),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(u){r.regeneratorRuntime=undefined}},function(t,e){!function(e){"use strict";function n(t,e,n,r){var i=e&&e.prototype instanceof o?e:o,u=Object.create(i.prototype),c=new d(r||[]);return u._invoke=s(t,n,c),u}function r(t,e,n){try{return{"type":"normal","arg":t.call(e,n)}}catch(r){return{"type":"throw","arg":r}}}function o(){}function i(){}function u(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function a(t){function e(n,o,i,u){var c=r(t[n],t,o);if("throw"!==c.type){var a=c.arg,s=a.value;return s&&"object"==typeof s&&m.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,u)},function(t){e("throw",t,i,u)}):Promise.resolve(s).then(function(t){a.value=t,i(a)},u)}u(c.arg)}function n(t,n){function r(){return new Promise(function(r,o){e(t,n,r,o)})}return o=o?o.then(r,r):r()}var o;this._invoke=n}function s(t,e,n){var o=O;return function(i,u){if(o===P)throw new Error("Generator is already running");if(o===S){if("throw"===i)throw u;return v()}for(n.method=i,n.arg=u;;){var c=n.delegate;if(c){var a=f(c,n);if(a){if(a===L)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===O)throw o=S,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=P;var s=r(t,e,n);if("normal"===s.type){if(o=n.done?S:j,s.arg===L)continue;return{"value":s.arg,"done":n.done}}"throw"===s.type&&(o=S,n.method="throw",n.arg=s.arg)}}}function f(t,e){var n=t.iterator[e.method];if(n===y){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=y,f(t,e),"throw"===e.method))return L;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return L}var o=r(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,L;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=y),e.delegate=null,L):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,L)}function l(t){var e={"tryLoc":t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function h(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{"tryLoc":"root"}],t.forEach(l,this),this.reset(!0)}function p(t){if(t){var e=t[x];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function o(){for(;++n<t.length;)if(m.call(t,n))return o.value=t[n],o.done=!1,o;return o.value=y,o.done=!0,o};return r.next=r}}return{"next":v}}function v(){return{"value":y,"done":!0}}var y,g=Object.prototype,m=g.hasOwnProperty,_="function"==typeof Symbol?Symbol:{},x=_.iterator||"@@iterator",w=_.asyncIterator||"@@asyncIterator",b=_.toStringTag||"@@toStringTag",M="object"==typeof t,k=e.regeneratorRuntime;if(k)return void(M&&(t.exports=k));k=e.regeneratorRuntime=M?t.exports:{},k.wrap=n;var O="suspendedStart",j="suspendedYield",P="executing",S="completed",L={},E={};E[x]=function(){return this};var T=Object.getPrototypeOf,F=T&&T(T(p([])));F&&F!==g&&m.call(F,x)&&(E=F);var R=u.prototype=o.prototype=Object.create(E);i.prototype=R.constructor=u,u.constructor=i,u[b]=i.displayName="GeneratorFunction",k.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},k.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,b in t||(t[b]="GeneratorFunction")),t.prototype=Object.create(R),t},k.awrap=function(t){return{"__await":t}},c(a.prototype),a.prototype[w]=function(){return this},k.AsyncIterator=a,k.async=function(t,e,r,o){var i=new a(n(t,e,r,o));return k.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(R),R[b]="Generator",R[x]=function(){return this},R.toString=function(){return"[object Generator]"},k.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},k.values=p,d.prototype={"constructor":d,"reset":function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(h),!t)for(var e in this)"t"===e.charAt(0)&&m.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},"stop":function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},"dispatchException":function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=y),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var u=m.call(o,"catchLoc"),c=m.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},"abrupt":function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&m.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,L):this.complete(i)},"complete":function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),L},"finish":function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),h(n),L}},"catch":function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;h(n)}return o}}throw new Error("illegal catch attempt")},"delegateYield":function(t,e,n){return this.delegate={"iterator":p(t),"resultName":e,"nextLoc":n},"next"===this.method&&(this.arg=y),L}}}(function(){return this}()||Function("return this")())},function(t,e,n){"use strict";e.__esModule=!0;var r=n(26),o=function(t){return t&&t.__esModule?t:{"default":t}}(r);e["default"]=function(t){return function(){var e=t.apply(this,arguments);return new o["default"](function(t,n){function r(i,u){try{var c=e[i](u),a=c.value}catch(s){return void n(s)}if(!c.done)return o["default"].resolve(a).then(function(t){r("next",t)},function(t){r("throw",t)});t(a)}return r("next")})}}},function(t,e,n){n(52),n(27),n(66),n(70),n(78),n(79),t.exports=n(2).Promise},function(t,e){},function(t,e,n){var r=n(14),o=n(15);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),a=r(n),s=c.length;return a<0||a>=s?t?"":undefined:(i=c.charCodeAt(a),i<55296||i>56319||a+1===s||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536)}}},function(t,e,n){t.exports=!n(7)&&!n(29)(function(){return 7!=Object.defineProperty(n(17)("div"),"a",{"get":function(){return 7}}).a})},function(t,e,n){var r=n(9);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){t.exports=n(5)},function(t,e,n){"use strict";var r=n(58),o=n(18),i=n(22),u={};n(5)(u,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{"next":o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(4),o=n(59),i=n(32),u=n(21)("IE_PROTO"),c=function(){},a=function(){var t,e=n(17)("iframe"),r=i.length;for(e.style.display="none",n(33).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a["prototype"][i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(c["prototype"]=r(t),n=new c,c["prototype"]=null,n[u]=t):n=a(),e===undefined?n:o(n,e)}},function(t,e,n){var r=n(6),o=n(4),i=n(60);t.exports=n(7)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,a=0;c>a;)r.f(t,n=u[a++],e[n]);return t}},function(t,e,n){var r=n(61),o=n(32);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(12),o=n(19),i=n(63)(!1),u=n(21)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),a=0,s=[];for(n in c)n!=u&&r(c,n)&&s.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(13);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(19),o=n(20),i=n(64);t.exports=function(t){return function(e,n,u){var c,a=r(e),s=o(a.length),f=i(u,s);if(t&&n!=n){for(;s>f;)if((c=a[f++])!=c)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(14),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(12),o=n(34),i=n(21)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){n(67);for(var r=n(0),o=n(5),i=n(10),u=n(1)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<c.length;a++){var s=c[a],f=r[s],l=f&&f.prototype;l&&!l[u]&&o(l,u,s),i[s]=i.Array}},function(t,e,n){"use strict";var r=n(68),o=n(69),i=n(10),u=n(19);t.exports=n(28)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=undefined,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{"value":e,"done":!!t}}},function(t,e,n){"use strict";var r,o,i,u,c=n(16),a=n(0),s=n(8),f=n(35),l=n(3),h=n(9),d=n(11),p=n(71),v=n(72),y=n(39),g=n(40).set,m=n(74)(),_=n(23),x=n(41),w=n(75),b=n(42),M=a.TypeError,k=a.process,O=k&&k.versions,j=O&&O.v8||"",P=a["Promise"],S="process"==f(k),L=function(){},E=o=_.f,T=!!function(){try{var t=P.resolve(1),e=(t.constructor={})[n(1)("species")]=function(t){t(L,L)};return(S||"function"==typeof PromiseRejectionEvent)&&t.then(L)instanceof e&&0!==j.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(r){}}(),F=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},R=function(t,e){if(!t._n){t._n=!0;var n=t._c;m(function(){for(var r=t._v,o=1==t._s,i=0;n.length>i;)!function(e){var n,i,u,c=o?e.ok:e.fail,a=e.resolve,s=e.reject,f=e.domain;try{c?(o||(2==t._h&&C(t),t._h=1),!0===c?n=r:(f&&f.enter(),n=c(r),f&&(f.exit(),u=!0)),n===e.promise?s(M("Promise-chain cycle")):(i=F(n))?i.call(n,a,s):a(n)):s(r)}catch(l){f&&!u&&f.exit(),s(l)}}(n[i++]);t._c=[],t._n=!1,e&&!t._h&&A(t)})}},A=function(t){g.call(a,function(){var e,n,r,o=t._v,i=N(t);if(i&&(e=x(function(){S?k.emit("unhandledRejection",o,t):(n=a.onunhandledrejection)?n({"promise":t,"reason":o}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=S||N(t)?2:1),t._a=undefined,i&&e.e)throw e.v})},N=function(t){return 1!==t._h&&0===(t._a||t._c).length},C=function(t){g.call(a,function(){var e;S?k.emit("rejectionHandled",t):(e=a.onrejectionhandled)&&e({"promise":t,"reason":t._v})})},G=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),R(e,!0))},$=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw M("Promise can't be resolved itself");(e=F(t))?m(function(){var r={"_w":n,"_d":!1};try{e.call(t,s($,r,1),s(G,r,1))}catch(o){G.call(r,o)}}):(n._v=t,n._s=1,R(n,!1))}catch(r){G.call({"_w":n,"_d":!1},r)}}};T||(P=function(t){p(this,P,"Promise","_h"),d(t),r.call(this);try{t(s($,this,1),s(G,this,1))}catch(e){G.call(this,e)}},r=function(t){this._c=[],this._a=undefined,this._s=0,this._d=!1,this._v=undefined,this._h=0,this._n=!1},r.prototype=n(76)(P.prototype,{"then":function(t,e){var n=E(y(this,P));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=S?k.domain:undefined,this._c.push(n),this._a&&this._a.push(n),this._s&&R(this,!1),n.promise},"catch":function(t){return this.then(undefined,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s($,t,1),this.reject=s(G,t,1)},_.f=E=function(t){return t===P||t===u?new i(t):o(t)}),l(l.G+l.W+l.F*!T,{"Promise":P}),n(22)(P,"Promise"),n(77)("Promise"),u=n(2)["Promise"],l(l.S+l.F*!T,"Promise",{"reject":function(t){var e=E(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(c||!T),"Promise",{"resolve":function(t){return b(c&&this===u?P:this,t)}}),l(l.S+l.F*!(T&&n(43)(function(t){P.all(t)["catch"](L)})),"Promise",{"all":function(t){var e=this,n=E(e),r=n.resolve,o=n.reject,i=x(function(){var n=[],i=0,u=1;v(t,!1,function(t){var c=i++,a=!1;n.push(undefined),u++,e.resolve(t).then(function(t){a||(a=!0,n[c]=t,--u||r(n))},o)}),--u||r(n)});return i.e&&o(i.v),n.promise},"race":function(t){var e=this,n=E(e),r=n.reject,o=x(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||r!==undefined&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(8),o=n(36),i=n(37),u=n(4),c=n(20),a=n(38),s={},f={},e=t.exports=function(t,e,n,l,h){var d,p,v,y,g=h?function(){return t}:a(t),m=r(n,l,e?2:1),_=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(i(g)){for(d=c(t.length);d>_;_++)if((y=e?m(u(p=t[_])[0],p[1]):m(t[_]))===s||y===f)return y}else for(v=g.call(t);!(p=v.next()).done;)if((y=o(v,m,p.value,e))===s||y===f)return y};e.BREAK=s,e.RETURN=f},function(t,e){t.exports=function(t,e,n){var r=n===undefined;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(0),o=n(40).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,c=r.Promise,a="process"==n(13)(u);t.exports=function(){var t,e,n,s=function(){var r,o;for(a&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(i){throw t?n():e=undefined,i}}e=undefined,r&&r.enter()};if(a)n=function(){u.nextTick(s)};else if(!i||r.navigator&&r.navigator.standalone)if(c&&c.resolve){var f=c.resolve(undefined);n=function(){f.then(s)}}else n=function(){o.call(r,s)};else{var l=!0,h=document.createTextNode("");new i(s).observe(h,{"characterData":!0}),n=function(){h.data=l=!l}}return function(r){var o={"fn":r,"next":undefined};e&&(e.next=o),t||(t=o,n()),e=o}}},function(t,e,n){var r=n(0),o=r.navigator;t.exports=o&&o.userAgent||""},function(t,e,n){var r=n(5);t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},function(t,e,n){"use strict";var r=n(0),o=n(2),i=n(6),u=n(7),c=n(1)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];u&&e&&!e[c]&&i.f(e,c,{"configurable":!0,"get":function(){return this}})}},function(t,e,n){"use strict";var r=n(3),o=n(2),i=n(0),u=n(39),c=n(42);r(r.P+r.R,"Promise",{"finally":function(t){var e=u(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return c(e,t()).then(function(){return n})}:t,n?function(n){return c(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";var r=n(3),o=n(23),i=n(41);r(r.S,"Promise",{"try":function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){t.exports={"default":n(81),"__esModule":!0}},function(t,e,n){n(82),t.exports=n(2).Math.hypot},function(t,e,n){var r=n(3),o=Math.abs;r(r.S,"Math",{"hypot":function(t,e){for(var n,r,i=0,u=0,c=arguments.length,a=0;u<c;)n=o(arguments[u++]),a<n?(r=a/n,i=i*r*r+1,a=n):n>0?(r=n/a,i+=r*r):i+=n;return a===Infinity?Infinity:a*Math.sqrt(i)}})},function(t,e,n){"use strict";e.__esModule=!0;var r=n(84),o=function(t){return t&&t.__esModule?t:{"default":t}}(r);e["default"]=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,o["default"])(t)}},function(t,e,n){t.exports={"default":n(85),"__esModule":!0}},function(t,e,n){n(27),n(86),t.exports=n(2).Array.from},function(t,e,n){"use strict";var r=n(8),o=n(3),i=n(34),u=n(36),c=n(37),a=n(20),s=n(87),f=n(38);o(o.S+o.F*!n(43)(function(t){Array.from(t)}),"Array",{"from":function(t){var e,n,o,l,h=i(t),d="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:undefined,y=v!==undefined,g=0,m=f(h);if(y&&(v=r(v,p>2?arguments[2]:undefined,2)),m==undefined||d==Array&&c(m))for(e=a(h.length),n=new d(e);e>g;g++)s(n,g,y?v(h[g],g):h[g]);else for(l=m.call(h),n=new d;!(o=l.next()).done;g++)s(n,g,y?u(l,v,[o.value,g],!0):o.value);return n.length=g,n}})},function(t,e,n){"use strict";var r=n(6),o=n(18);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},function(t,e,n){t.exports={"default":n(89),"__esModule":!0}},function(t,e,n){n(90);var r=n(2).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(3);r(r.S+r.F*!n(7),"Object",{"defineProperty":n(6).f})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{"value":!0});var o=n(24),i=r(o),u=n(25),c=r(u),a=n(92),s=r(a),f=function(){function t(e){(0,i["default"])(this,t),this.x_rate=e.x_rate||.7,this.mutation_rate=e.mutation_rate||.005,this.life_count=e.life_count||50,this.gene_length=e.gene_length||100,this.mutation_count=0,this.generation=0,this.lives=[],this.scores=0,this.best=null,this.rate=e.rate,this.xFunc=e.xFunc,this.mFunc=e.mFunc;for(var n=0;n<this.life_count;n++)this.lives.push(new s["default"](this.gene_length))}return(0,c["default"])(t,[{"key":"doRate","value":function(){var t=this;this.scores=0;var e=-1;this.lives.map(function(n){n.setScore(t.rate(n.gene)),n.score>e&&(e=n.score,t.best=n),t.scores+=n.score})}},{"key":"bear","value":function(t,e){var n=void 0;return n=Math.random()<this.x_rate?this.xFunc(t,e):t.gene.slice(0),Math.random()<this.mutation_rate&&(n=this.mFunc(n),this.mutation_count++),new s["default"](n)}},{"key":"getOne","value":function(){for(var t=this.scores,e=this.lives,n=Math.random()*t,r=0,o=e.length;r<o;r++){var i=e[r];if((n-=i.score)<=0)return i}}},{"key":"newChild","value":function(){return this.bear(this.getOne(),this.getOne())}},{"key":"next","value":function(){this.generation++,this.doRate();var t=[];for(t.push(this.best),t.push(new s["default"](this.gene_length));t.length<this.life_count;)t.push(this.newChild());this.lives=t;this.best.gene;return this.best.gene.slice(0)}}]),t}();e["default"]=f},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{"value":!0});var o=n(24),i=r(o),u=n(25),c=r(u),a=n(44),s=r(a),f=function(){function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:100;(0,i["default"])(this,t),this.gene=Array.isArray(e)?e.slice(0):this.rndGene(e),this.score=0}return(0,c["default"])(t,[{"key":"rndGene","value":function(t){return(0,s["default"])(new Array(t).fill(0).map(function(t,e){return e}))}},{"key":"setScore","value":function(t){this.score=t}},{"key":"toString","value":function(){return this.gene.join("-")}}]),t}();e["default"]=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var r=n(26),o=function(t){return t&&t.__esModule?t:{"default":t}}(r);e["default"]=function(t){return new o["default"](function(e){return setTimeout(e,t)})}}])});
//# sourceMappingURL=bundle.js.map