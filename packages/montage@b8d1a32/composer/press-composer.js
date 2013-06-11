var Montage=require("montage").Montage,Composer=require("composer/composer").Composer,MutableEvent=require("core/event/mutable-event").MutableEvent,PressComposer=exports.PressComposer=Composer.specialize({load:{value:function(){window.Touch?this._element.addEventListener("touchstart",this,!0):this._element.addEventListener("mousedown",this,!0)}},unload:{value:function(){window.Touch?this._element.removeEventListener("touchstart",this):this._element.removeEventListener("mousedown",this)}},delegate:{value:null},cancelPress:{value:function(){return this._state===PressComposer.PRESSED?(this._dispatchPressCancel(),this._endInteraction(),!0):!1}},addEventListener:{value:function(s,n,e){Composer.addEventListener.call(this,s,n,e),"longPress"===s&&(this._shouldDispatchLongPress=!0)}},UNPRESSED:{value:0},PRESSED:{value:1},CANCELLED:{value:2},_state:{enumerable:!1,value:0},state:{get:function(){return this._state}},_shouldDispatchLongPress:{enumerable:!1,value:!1},_longPressThreshold:{enumerable:!1,value:1e3},longPressThreshold:{get:function(){return this._longPressThreshold},set:function(s){this._longPressThreshold!==s&&(this._longPressThreshold=s)}},_longPressTimeout:{enumberable:!1,value:null},_observedPointer:{enumerable:!1,value:null},_startInteraction:{enumerable:!1,value:function(s){if("enabled"in this.component&&!this.component.enabled||null!==this._observedPointer)return!1;var n,e=0;if("touchstart"===s.type){for(n=s.changedTouches.length;n>e;e++)if(!this.component.eventManager.componentClaimingPointer(s.changedTouches[e].identifier)){this._observedPointer=s.changedTouches[e].identifier;break}if(null===this._observedPointer)return!1;document.addEventListener("touchend",this,!1),document.addEventListener("touchcancel",this,!1)}else"mousedown"===s.type&&(this._observedPointer="mouse",document.addEventListener("mouseup",this,!1),document.addEventListener("click",this,!1));this._element.addEventListener("dragstart",this,!1),this.component.eventManager.claimPointer(this._observedPointer,this),this._dispatchPressStart(s)}},_interpretInteraction:{value:function(s){var n,e,a;if(null===this._observedPointer)return this._endInteraction(s),void 0;for(n=!this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this),e=s.target;e!==this._element&&e&&e.parentNode;)e=e.parentNode;if(a=e===this._element,n&&"click"===s.type)return s.preventDefault(),this._endInteraction(s),void 0;if("mouseup"===s.type){if(!n&&a)return this._dispatchPress(s),this._endInteraction(s),void 0;if(!n&&!a)return this._dispatchPressCancel(s),this._endInteraction(s),void 0;n&&!a&&this._endInteraction(s)}}},_endInteraction:{value:function(s){s&&"touchend"!==s.type&&"touchcancel"!==s.type?s&&"click"!==s.type&&"mouseup"!==s.type||(document.removeEventListener("click",this),document.removeEventListener("mouseup",this)):(document.removeEventListener("touchend",this),document.removeEventListener("touchcancel",this)),this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this)&&this.component.eventManager.forfeitPointer(this._observedPointer,this),this._observedPointer=null,this._state=PressComposer.UNPRESSED}},_changedTouchisObserved:{value:function(){if(null===this._observedPointer)return!1;for(var s=0,n=event.changedTouches.length;n>s;s++)if(event.changedTouches[s].identifier===this._observedPointer)return s;return!1}},surrenderPointer:{value:function(s,n){var e=this.callDelegateMethod("surrenderPointer",s,n);return e!==void 0&&e===!1?!1:(this._dispatchPressCancel(),!0)}},captureTouchstart:{value:function(s){this._startInteraction(s)}},handleTouchend:{value:function(s){return null===this._observedPointer?(this._endInteraction(s),void 0):(this._changedTouchisObserved(s.changedTouches)!==!1&&(this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this)?this._dispatchPress(s):s.preventDefault(),this._endInteraction(s)),void 0)}},handleTouchcancel:{value:function(s){(null===this._observedPointer||this._changedTouchisObserved(s.changedTouches)!==!1)&&(this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this)&&this._dispatchPressCancel(s),this._endInteraction(s))}},captureMousedown:{value:function(s){this._startInteraction(s)}},handleClick:{value:function(s){this._interpretInteraction(s)}},handleMouseup:{value:function(s){this._interpretInteraction(s)}},handleDragstart:{value:function(s){this._dispatchPressCancel(s),this._endInteraction()}},_createPressEvent:{enumerable:!1,value:function(s,n){var e,a;return n||(n=document.createEvent("CustomEvent"),n.initCustomEvent(s,!0,!0,null)),e=new PressEvent,e.event=n,e.type=s,e.pointer=this._observedPointer,e.targetElement=n.target,n.changedTouches&&(a=this._changedTouchisObserved(n.changedTouches))!==!1&&(e.touch=n.changedTouches[a]),e}},_dispatchPressStart:{enumerable:!1,value:function(s){if(this._state=PressComposer.PRESSED,this.dispatchEvent(this._createPressEvent("pressStart",s)),this._shouldDispatchLongPress){var n=this;this._longPressTimeout=setTimeout(function(){n._dispatchLongPress()},this._longPressThreshold)}}},_dispatchPress:{enumerable:!1,value:function(s){this._shouldDispatchLongPress&&(clearTimeout(this._longPressTimeout),this._longPressTimeout=null),this.dispatchEvent(this._createPressEvent("press",s)),this._state=PressComposer.UNPRESSED}},_dispatchLongPress:{enumerable:!1,value:function(s){this._shouldDispatchLongPress&&(this.dispatchEvent(this._createPressEvent("longPress",s)),this._longPressTimeout=null)}},_dispatchPressCancel:{enumerable:!1,value:function(s){this._shouldDispatchLongPress&&(clearTimeout(this._longPressTimeout),this._longPressTimeout=null),this._state=PressComposer.CANCELLED,this.dispatchEvent(this._createPressEvent("pressCancel",s))}}}),PressEvent=function(){var s,n,e,a,t,p;for(s=MutableEvent.specialize({type:{value:"press"},_event:{enumerable:!1,value:null},event:{get:function(){return this._event},set:function(s){this._event=s}},_touch:{enumerable:!1,value:null},touch:{get:function(){return this._touch},set:function(s){this._touch=s}}}),n=["altKey","ctrlKey","metaKey","shiftKey","cancelBubble","currentTarget","defaultPrevented","eventPhase","timeStamp","preventDefault","stopImmediatePropagation","stopPropagation"],e=["clientX","clientY","pageX","pageY","screenX","screenY","target"],a=function(s){return{get:function(){return this._event[s]}}},t=function(s){return{get:function(){return this._touch?this._touch[s]:this._event[s]}}},p=n.length-1;p>=0;p--)Montage.defineProperty(s,n[p],a(n[p]));for(p=e.length-1;p>=0;p--)Montage.defineProperty(s,e[p],t(e[p]));return s}();