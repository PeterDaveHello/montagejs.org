montageDefine("b8d1a32","core/event/mutable-event",{dependencies:["montage"],factory:function(e,n){var s=e("montage").Montage;if("undefined"!=typeof window){var a={},t=function(e,n){var a="_"+n;s.defineProperty(e,a,{value:void 0}),s.defineProperty(e,n,{get:function(e,n){return function(){return this.hasOwnProperty(n)?this[n]:this._event?this._event[e]:void 0}}(n,a),set:function(e){return function(n){this[e]=n}}(a)})};n.MutableEvent=s.specialize({_initPrototypeWithEvent:{value:function(e){var n;for(n in e)this[n]||t(this,n);return t(this,"replayed"),this}},_initWithEvent:{value:function(e){return this._event=e,this}},preventDefault:{value:function(){this._event.preventDefault()}},stopImmediatePropagation:{value:function(){this._event.stopImmediatePropagation(),this.propagationStopped=!0,this.immediatePropagationStopped=!0}},propagationStopped:{value:!1},immediatePropagationStopped:{value:!1},mutable:{value:!0},target:{value:null},stopPropagation:{value:function(){this._event.stopPropagation(),this.propagationStopped=!0}},stop:{value:function(){this.preventDefault(),this.stopPropagation()}}},{fromEvent:{value:function(e){var s,t=e.type,o=a[t];return o||(o=function(){},o.prototype=(new n.MutableEvent)._initPrototypeWithEvent(e),a[t]=o),s=new o,s._initWithEvent(e),s}},fromType:{value:function(e,n,s,a){var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,n,s,a),this.fromEvent(t)}}})}}});