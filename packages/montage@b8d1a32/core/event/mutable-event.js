var Montage=require("montage").Montage;if("undefined"!=typeof window)var _eventConstructorsByType={},nullDescriptor={value:null},wrapProperty=function(e,n){var s="_"+n;Montage.defineProperty(e,s,{value:void 0}),Montage.defineProperty(e,n,{get:function(e,n){return function(){return this.hasOwnProperty(n)?this[n]:this._event?this._event[e]:void 0}}(n,s),set:function(e){return function(n){this[e]=n}}(s)})},MutableEvent=exports.MutableEvent=Montage.specialize({_initPrototypeWithEvent:{value:function(e){var n;for(n in e)this[n]||wrapProperty(this,n);return wrapProperty(this,"replayed"),this}},_initWithEvent:{value:function(e){return this._event=e,this}},preventDefault:{value:function(){this._event.preventDefault()}},stopImmediatePropagation:{value:function(){this._event.stopImmediatePropagation(),this.propagationStopped=!0,this.immediatePropagationStopped=!0}},propagationStopped:{value:!1},immediatePropagationStopped:{value:!1},mutable:{value:!0},target:{value:null},stopPropagation:{value:function(){this._event.stopPropagation(),this.propagationStopped=!0}},stop:{value:function(){this.preventDefault(),this.stopPropagation()}}},{fromEvent:{value:function(e){var n,s=e.type,a=_eventConstructorsByType[s];return a||(a=function(){},a.prototype=(new exports.MutableEvent)._initPrototypeWithEvent(e),_eventConstructorsByType[s]=a),n=new a,n._initWithEvent(e),n}},fromType:{value:function(e,n,s,a){var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,n,s,a),this.fromEvent(t)}}});