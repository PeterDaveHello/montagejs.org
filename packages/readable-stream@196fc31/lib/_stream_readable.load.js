montageDefine("196fc31","lib/_stream_readable",{dependencies:["events","stream","util","string_decoder"],factory:function(e,t,n){function a(t){t=t||{};var n=t.highWaterMark;this.highWaterMark=n||0===n?n:16384,this.highWaterMark=~~this.highWaterMark,this.buffer=[],this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=!1,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.calledRead=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.objectMode=!!t.objectMode,this.ranOut=!1,this.awaitDrain=0,this.readingMore=!1,this.decoder=null,t.encoding&&(_||(_=e("string_decoder").StringDecoder),this.decoder=new _(t.encoding))}function s(e){return this instanceof s?(this._readableState=new a(e,this),this.readable=!0,x.call(this),void 0):new s(e)}function i(e,t,n,a){t.reading=!1;var s=c(t,n);return s?e.emit("error",s):null===n||void 0===n?p(e,t):(t.objectMode||n&&n.length>0)&&(t.decoder&&(n=t.decoder.write(n)),t.length+=t.objectMode?1:n.length,a?t.buffer.unshift(n):t.buffer.push(n),t.needReadable&&h(e),d(e,t)),r(t)}function r(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||0===e.length)}function o(e){if(e>=M)e=M;else{e--;for(var t=1;32>t;t<<=1)e|=e>>t;e++}return e}function l(e,t){return 0===t.length&&t.ended?0:t.objectMode?0===e?0:1:isNaN(e)||null===e?t.flowing&&t.buffer.length?t.buffer[0].length:t.length:0>=e?0:(e>t.highWaterMark&&(t.highWaterMark=o(e)),e>t.length?t.ended?t.length:(t.needReadable=!0,0):e)}function c(e,t){var n=null;return Buffer.isBuffer(t)||"string"==typeof t||null===t||void 0===t||e.objectMode||n||(n=new TypeError("Invalid non-string/buffer chunk")),n}function p(e,t){if(t.ended=!0,t.decoder&&t.decoder.end){var n=t.decoder.end();n&&n.length&&(t.buffer.push(n),t.length+=t.objectMode?1:n.length)}t.length>0?h(e):w(e)}function h(e){var t=e._readableState;t.needReadable=!1,t.emittedReadable||(t.emittedReadable=!0,t.sync?process.nextTick(function(){u(e)}):u(e))}function u(e){e._readableState,e.emit("readable")}function d(e,t){t.readingMore||(t.readingMore=!0,process.nextTick(function(){g(e,t)}))}function g(e,t){for(var n=t.length;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark&&(e.read(0),n!==t.length);)n=t.length;t.readingMore=!1}function m(e){return function(){var t=e._readableState;t.awaitDrain--,0===t.awaitDrain&&f(e)}}function f(e){function t(e){var t=e.write(n);!1===t&&a.awaitDrain++}var n,a=e._readableState;for(a.awaitDrain=0;a.pipesCount&&null!==(n=e.read());)if(1===a.pipesCount?t(a.pipes,0,null):a.pipes.forEach(t),e.emit("data",n),a.awaitDrain>0)return;return 0===a.pipesCount?(a.flowing=!1,L.listenerCount(e,"data")>0&&y(e),void 0):(a.ranOut=!0,void 0)}function v(){this._readableState.ranOut&&(this._readableState.ranOut=!1,f(this))}function y(e,t){var n=e._readableState;if(n.flowing)throw Error("Cannot switch to old mode now.");var a=t||!1,s=!1;e.readable=!0,e.pipe=x.prototype.pipe,e.on=e.addListener=x.prototype.on,e.on("readable",function(){s=!0;for(var t;!a&&null!==(t=e.read());)e.emit("data",t);null===t&&(s=!1,e._readableState.needReadable=!0)}),e.pause=function(){a=!0,this.emit("pause")},e.resume=function(){a=!1,s?process.nextTick(function(){e.emit("readable")}):this.read(0),this.emit("resume")},e.emit("readable")}function b(e,t){var n,a=t.buffer,s=t.length,i=!!t.decoder,r=!!t.objectMode;if(0===a.length)return null;if(0===s)n=null;else if(r)n=a.shift();else if(!e||e>=s)n=i?a.join(""):Buffer.concat(a,s),a.length=0;else if(a[0].length>e){var o=a[0];n=o.slice(0,e),a[0]=o.slice(e)}else if(e===a[0].length)n=a.shift();else{n=i?"":new Buffer(e);for(var l=0,c=0,p=a.length;p>c&&e>l;c++){var o=a[0],h=Math.min(e-l,o.length);i?n+=o.slice(0,h):o.copy(n,l,0,h),o.length>h?a[0]=o.slice(h):a.shift(),l+=h}}return n}function w(e){var t=e._readableState;if(t.length>0)throw Error("endReadable called on non-empty stream");!t.endEmitted&&t.calledRead&&(t.ended=!0,t.endEmitted=!0,process.nextTick(function(){e.readable=!1,e.emit("end")}))}n.exports=s,s.ReadableState=a;var L=e("events").EventEmitter;L.listenerCount||(L.listenerCount=function(e,t){return e.listeners(t).length});var _,x=e("stream"),C=e("util");C.inherits(s,x),s.prototype.push=function(e){var t=this._readableState;return"string"!=typeof e||t.objectMode||(e=new Buffer(e,arguments[1])),i(this,t,e,!1)},s.prototype.unshift=function(e){var t=this._readableState;return"string"!=typeof e||t.objectMode||(e=new Buffer(e,arguments[1])),i(this,t,e,!0)},s.prototype.setEncoding=function(t){_||(_=e("string_decoder").StringDecoder),this._readableState.decoder=new _(t)};var M=8388608;s.prototype.read=function(e){var t=this._readableState;t.calledRead=!0;var n=e;if(("number"!=typeof e||e>0)&&(t.emittedReadable=!1),0===e&&t.needReadable&&t.length>=t.highWaterMark)return h(this),null;if(e=l(e,t),0===e&&t.ended)return 0===t.length&&w(this),null;var a=t.needReadable;t.length-e<=t.highWaterMark&&(a=!0),(t.ended||t.reading)&&(a=!1),a&&(t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1),a&&!t.reading&&(e=l(n,t));var s;return s=e>0?b(e,t):null,null===s&&(t.needReadable=!0,e=0),t.length-=e,0!==t.length||t.ended||(t.needReadable=!0),t.ended&&!t.endEmitted&&0===t.length&&w(this),s},s.prototype._read=function(){this.emit("error",Error("not implemented"))},s.prototype.pipe=function(e,t){function n(e){e===c&&s()}function a(){e.end()}function s(){e.removeListener("close",r),e.removeListener("finish",o),e.removeListener("drain",d),e.removeListener("error",i),e.removeListener("unpipe",n),c.removeListener("end",a),c.removeListener("end",s),(!e._writableState||e._writableState.needDrain)&&d()}function i(t){l(),0===L.listenerCount(e,"error")&&e.emit("error",t)}function r(){e.removeListener("finish",o),l()}function o(){e.removeListener("close",r),l()}function l(){c.unpipe(e)}var c=this,p=this._readableState;switch(p.pipesCount){case 0:p.pipes=e;break;case 1:p.pipes=[p.pipes,e];break;default:p.pipes.push(e)}p.pipesCount+=1;var h=(!t||t.end!==!1)&&e!==process.stdout&&e!==process.stderr,u=h?a:s;p.endEmitted?process.nextTick(u):c.once("end",u),e.on("unpipe",n);var d=m(c);return e.on("drain",d),e.once("error",i),e.once("close",r),e.once("finish",o),e.emit("pipe",c),p.flowing||(this.on("readable",v),p.flowing=!0,process.nextTick(function(){f(c)})),e},s.prototype.unpipe=function(e){var t=this._readableState;if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes?this:(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,this.removeListener("readable",v),t.flowing=!1,e&&e.emit("unpipe",this),this);if(!e){var n=t.pipes,a=t.pipesCount;t.pipes=null,t.pipesCount=0,this.removeListener("readable",v),t.flowing=!1;for(var s=0;a>s;s++)n[s].emit("unpipe",this);return this}var s=t.pipes.indexOf(e);return-1===s?this:(t.pipes.splice(s,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this),this)},s.prototype.on=function(e,t){var n=x.prototype.on.call(this,e,t);return"data"!==e||this._readableState.flowing||y(this),"readable"!==e||this._readableState.reading||this.read(0),n},s.prototype.addListener=s.prototype.on,s.prototype.resume=function(){y(this),this.read(0),this.emit("resume")},s.prototype.pause=function(){y(this,!0),this.emit("pause")},s.prototype.wrap=function(e){var t=this._readableState,n=!1,a=this;e.on("end",function(){if(t.ended=!0,t.decoder&&t.decoder.end){var e=t.decoder.end();e&&e.length&&a.push(e)}a.push(null)}),e.on("data",function(s){if(t.decoder&&(s=t.decoder.write(s)),s&&s.length){var i=a.push(s);i||(n=!0,e.pause())}});for(var s in e)"function"==typeof e[s]&&this[s]===void 0&&(this[s]=function(t){return function(){return e[t].apply(e,arguments)}}(s));var i=["error","close","destroy","pause","resume"];i.forEach(function(t){e.on(t,a.emit.bind(a,t))}),a._read=function(){n&&(e.resume(),n=!1)}},s._fromList=b}});