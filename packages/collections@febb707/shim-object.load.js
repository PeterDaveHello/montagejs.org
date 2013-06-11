montageDefine("febb707","shim-object",{dependencies:["./weak-map"],factory:function(e,t,n){"use strict";var a=e("./weak-map");n.exports=Object,Object.empty=Object.freeze(Object.create(null)),Object.isObject=function(e){return Object(e)===e},Object.getValueOf=function(e){return Object.can(e,"valueOf")&&(e=e.valueOf()),e};var s=new a;Object.hash=function(e){return Object.can(e,"hash")?""+e.hash():Object(e)===e?(s.has(e)||s.set(e,Math.random().toString(36).slice(2)),s.get(e)):""+e};var i=Object.prototype.hasOwnProperty;Object.owns=function(e,t){return i.call(e,t)},Object.can=function(e,t){return null!=e&&"function"==typeof e[t]&&!i.call(e,t)},Object.has=function(e,t){if("object"!=typeof e)throw Error("Object.has can't accept non-object: "+typeof e);if(Object.can(e,"has"))return e.has(t);if("string"==typeof t)return t in e&&e[t]!==Object.prototype[t];throw Error("Key must be a string for Object.has on plain objects")},Object.get=function(e,t,n){if("object"!=typeof e)throw Error("Object.get can't accept non-object: "+typeof e);return Object.can(e,"get")?e.get(t,n):Object.has(e,t)?e[t]:n},Object.set=function(e,t,n){Object.can(e,"set")?e.set(t,n):e[t]=n},Object.addEach=function(e,t){return Object.can(t,"forEach")?"function"==typeof t.keys?t.forEach(function(t,n){e[n]=t}):t.forEach(function(t){e[t[0]]=t[1]}):Object.keys(t).forEach(function(n){e[n]=t[n]}),e},Object.forEach=function(e,t,n){Object.keys(e).forEach(function(a){t.call(n,e[a],a,e)})},Object.map=function(e,t,n){return Object.keys(e).map(function(a){return t.call(n,e[a],a,e)})},Object.values=function(e){return Object.map(e,Function.identity)},Object.concat=function(){for(var e={},t=0;arguments.length>t;t++)Object.addEach(e,arguments[t]);return e},Object.from=Object.concat,Object.is=function(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t},Object.equals=function(e,t,n){if(n=n||Object.equals,e=Object.getValueOf(e),t=Object.getValueOf(t),e===t)return 0!==e||1/e===1/t;if(null===e||null===t)return e===t;if(Object.can(e,"equals"))return e.equals(t,n);if(Object.can(t,"equals"))return t.equals(e,n);if("object"==typeof e&&"object"==typeof t){var a=Object.getPrototypeOf(e),s=Object.getPrototypeOf(t);if(a===s&&(a===Object.prototype||null===a)){for(var i in e)if(!n(e[i],t[i]))return!1;for(var i in t)if(!n(e[i],t[i]))return!1;return!0}}return e!==e&&t!==t},Object.compare=function(e,t){e=Object.getValueOf(e),t=Object.getValueOf(t);var n=typeof e,a=typeof t;return e===t?0:n!==a?0:"number"===n?e-t:"string"===n?t>e?-1:1:Object.can(e,"compare")?e.compare(t):Object.can(t,"compare")?-t.compare(e):0},Object.clone=function(e,t,n){if(e=Object.getValueOf(e),n=n||new a,void 0===t)t=1/0;else if(0===t)return e;if(Object.isObject(e)){if(!n.has(e))if(Object.can(e,"clone"))n.set(e,e.clone(t,n));else{var s=Object.getPrototypeOf(e);if(null!==s&&s!==Object.prototype)throw Error("Can't clone "+e);var i=Object.create(s);n.set(e,i);for(var r in e)i[r]=Object.clone(e[r],t-1,n)}return n.get(e)}return e},Object.clear=function(e){if(Object.can(e,"clear"))e.clear();else for(var t=Object.keys(e),n=t.length;n;)n--,delete e[t[n]];return e}}});