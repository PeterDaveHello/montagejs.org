montageDefine("febb707","shim-array",{dependencies:["./shim-function","./generic-collection","./generic-order","./weak-map"],factory:function(e,t,n){"use strict";function a(e,t){Object.defineProperty(Array.prototype,e,{value:t,writable:!0,configurable:!0,enumerable:!1})}function s(e,t,n){this.array=e,this.start=null==t?0:t,this.end=n}e("./shim-function");var i=e("./generic-collection"),r=e("./generic-order"),o=e("./weak-map");n.exports=Array,Array.empty=[],Object.freeze&&Object.freeze(Array.empty),Array.from=function(e){var t=[];return t.addEach(e),t},Array.unzip=function(e){for(var t=[],n=1/0,a=0;e.length>a;a++){var s=e[a];e[a]=s.toArray(),n>s.length&&(n=s.length)}for(var a=0;e.length>a;a++)for(var s=e[a],i=0;s.length>i;i++)n>i&&i in s&&(t[i]=t[i]||[],t[i][a]=s[i]);return t},a("addEach",i.prototype.addEach),a("deleteEach",i.prototype.deleteEach),a("toArray",i.prototype.toArray),a("toObject",i.prototype.toObject),a("all",i.prototype.all),a("any",i.prototype.any),a("min",i.prototype.min),a("max",i.prototype.max),a("sum",i.prototype.sum),a("average",i.prototype.average),a("only",i.prototype.only),a("flatten",i.prototype.flatten),a("zip",i.prototype.zip),a("enumerate",i.prototype.enumerate),a("group",i.prototype.group),a("sorted",i.prototype.sorted),a("reversed",i.prototype.reversed),a("constructClone",function(e){var t=new this.constructor;return t.addEach(e),t}),a("has",function(e,t){return-1!==this.find(e,t)}),a("get",function(e,t){if(+e!==e)throw Error("Indicies must be numbers");return!e in this?t:this[e]}),a("set",function(e,t){return this.splice(e,1,t),!0}),a("add",function(e){return this.push(e),!0}),a("delete",function(e,t){var n=this.find(e,t);return-1!==n?(this.splice(n,1),!0):!1}),a("find",function(e,t){t=t||this.contentEquals||Object.equals;for(var n=0;this.length>n;n++)if(n in this&&t(this[n],e))return n;return-1}),a("findLast",function(e,t){t=t||this.contentEquals||Object.equals;var n=this.length;do if(n--,n in this&&t(this[n],e))return n;while(n>0);return-1}),a("swap",function(e,t,n){var a=Array.prototype.slice.call(arguments,0,2);return n&&a.push.apply(a,n),this.splice.apply(this,a)}),a("one",function(){for(var e in this)if(Object.owns(this,e))return this[e]}),a("clear",function(){return this.length=0,this}),a("compare",function(e,t){t=t||Object.compare;var n,a,s,i,o;if(this===e)return 0;if(!e||!Array.isArray(e))return r.prototype.compare.call(this,e,t);for(a=Math.min(this.length,e.length),n=0;a>n;n++)if(n in this){if(!(n in e))return-1;if(s=this[n],i=e[n],o=t(s,i))return o}else if(n in e)return 1;return this.length-e.length}),a("equals",function(e,t){t=t||Object.equals;var n,a,s=0,i=this.length;if(this===e)return!0;if(!e||!Array.isArray(e))return r.prototype.equals.call(this,e);if(i!==e.length)return!1;for(;i>s;++s)if(s in this){if(n=this[s],a=e[s],n!==a&&n&&a&&!t(n,a))return!1}else if(s in e)return!1;return!0}),a("clone",function(e,t){if(void 0===e)e=1/0;else if(0===e)return this;t=t||new o;var n=[];for(var a in this)Object.owns(this,a)&&(n[a]=Object.clone(this[a],e-1,t));return n}),a("iterate",function(e,t){return new s(this,e,t)}),a("Iterator",s),s.prototype.next=function(){if(this.start===(null==this.end?this.array.length:this.end))throw StopIteration;return this.array[this.start++]}}});