montageDefine("7feb762","ui/bluemoon/slider.reel/slider",{dependencies:["montage","ui/component","ui/dom","core/geometry/point"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/dom"),o=e("core/geometry/point").Point;t.Slider=r.create(i,{_bghl:{value:null},_handlerbg:{value:null},_bg:{value:null},_handler:{value:null},_line:{value:null},_scale:{value:null},_line2:{value:null},_handler2:{value:null},_handler3:{value:null},_handler4:{value:null},_handlerDragArea:{value:null},_isDragging:{value:null},_cursorPosition:{value:null},_width:{value:0},_minValue:{value:0},_hasTapBarToScroll:{value:!1},hasTapBarToScroll:{get:function(){return this._hasTapBarToScroll},set:function(e){this._hasTapBarToScroll=!!e}},_hasClickBarToScroll:{value:!0},hasClickBarToScroll:{get:function(){return this._hasClickBarToScroll},set:function(e){this._hasClickBarToScroll=!!e}},minValue:{get:function(){return this._minValue},set:function(e){e!==this._minValue&&(String.isString(e)&&(e=parseFloat(e)),this._minValue=e,this._valueRange=null,this.needsDraw=!0)}},_maxValue:{value:100},maxValue:{get:function(){return this._maxValue},set:function(e){e!==this._maxValue&&(String.isString(e)&&(e=parseFloat(e)),this._maxValue=e,this._valueRange=null,this.needsDraw=!0)}},_valueRange:{value:null},valueRange:{get:function(){return this._valueRange||(this._valueRange=this._maxValue-this._minValue),this._valueRange}},_value:{value:0},_observedPointer:{value:null},value:{get:function(){return this._value<this._minValue?this._minValue:this._value>this._maxValue?this._maxValue:this._value},set:function(e){isNaN(e)||(String.isString(e)&&(e=parseFloat(e)),e!==this._value&&(this._value=parseFloat(e),this.needsDraw=!0))}},step:{value:null},_pressed:{value:!1},_scrollTo:{value:null},handleTouchstart:{value:function(e){this._pressedEnd=!1,this._pressedStart=!0;if(e.target===this._handlerDragArea.firstChild)this._observePointer(e.targetTouches[0].identifier),this._value<this._minValue?this._value=this._minValue:this._value>this._maxValue&&(this._value=this._maxValue),document.addEventListener("touchmove",this,!1),document.addEventListener("touchend",this,!1),this._cursorPosition=e.targetTouches[0].clientX,e.preventDefault(),e.stopPropagation(),this.needsDraw=!0;else{var t=new WebKitPoint(0,0),n,r;this._observePointer(e.targetTouches[0].identifier),n=(s.convertPointFromNodeToPage(this._scale,t).x-s.convertPointFromNodeToPage(this._scale.parentNode,t).x)/1e4,r=s.convertPointFromNodeToPage(this.element,t);var i=e.targetTouches[0].pageX-Math.ceil(r.x/n),o=e.targetTouches[0].pageY-Math.ceil(r.y/n);o>=12&&o<45&&i>=19&&i<this._width+39&&(this._scrollTo=(i-28)*this.valueRange,document.addEventListener("touchmove",this,!1),document.addEventListener("touchend",this,!1),this._cursorPosition=e.targetTouches[0].clientX,e.preventDefault(),e.stopPropagation(),this.needsDraw=!0)}}},handleTouchmove:{value:function(e){var t=0,n=e.changedTouches,r=n.length;while(t<r&&n[t].identifier!==this._observedPointer)t++;t<r&&(this.value=this._value+(n[t].clientX-this._cursorPosition)*this.valueRange/this._width,this._cursorPosition=n[t].clientX,e.preventDefault(),this.needsDraw=!0),this._pressedStart=!1}},handleTouchend:{value:function(){var e=0,t=event.changedTouches.length;while(e<t&&event.changedTouches[e].identifier!==this._observedPointer)e++;e<t&&(document.removeEventListener("touchmove",this,!1),document.removeEventListener("touchend",this,!1),this._releaseInterest(),this.needsDraw=!0,this._pressedStart=!1,this._pressedEnd=!0)}},handleMousedown:{value:function(e){if(e.target===this._handlerDragArea.firstChild)this._value<this._minValue?this._value=this._minValue:this._value>this._maxValue&&(this._value=this._maxValue),this._observePointer("mouse"),document.addEventListener("mousemove",this,!1),document.addEventListener("mouseup",this,!1),this._cursorPosition=e.clientX,e.preventDefault(),e.stopPropagation(),this._pressedEnd=!1,this._pressedStart=!0,this.needsDraw=!0;else{var t=o.create().init(0,0),n=(s.convertPointFromNodeToPage(this._scale,t).x-s.convertPointFromNodeToPage(this._scale.parentNode,t).x)/1e4,r=s.convertPointFromNodeToPage(this.element,t),i=e.pageX-Math.ceil(r.x/n),u=e.pageY-Math.ceil(r.y/n);u>=12&&u<45&&i>=19&&i<this._width+39&&(this._scrollTo=(i-28)*this.valueRange,this._observePointer("mouse"),document.addEventListener("mousemove",this,!1),document.addEventListener("mouseup",this,!1),this._cursorPosition=e.clientX,e.preventDefault(),e.stopPropagation(),this._pressedEnd=!1,this._pressedStart=!0,this.needsDraw=!0)}}},handleMousemove:{value:function(e){this.value=this._value+(e.clientX-this._cursorPosition)*this.valueRange/this._width,this._cursorPosition=e.clientX,e.preventDefault(),e.stopPropagation(),this._pressedStart=!1,this.needsDraw=!0}},handleMouseup:{value:function(){document.removeEventListener("mousemove",this,!1),document.removeEventListener("mouseup",this,!1),this._releaseInterest(),this.needsDraw=!0,this._pressedStart=!1,this._pressedEnd=!0}},surrenderPointer:{value:function(e,t){return!1}},_observePointer:{value:function(e){this.eventManager.claimPointer(e,this),this._observedPointer=e;var t=document.createEvent("CustomEvent");t.initCustomEvent("montageinteractionstart",!0,!0,null),this.dispatchEvent(t)}},_releaseInterest:{value:function(){this.eventManager.forfeitPointer(this._observedPointer,this),this._observedPointer=null;var e=document.createEvent("CustomEvent");e.initCustomEvent("montageinteractionend",!0,!0,null),this.dispatchEvent(e)}},prepareForActivationEvents:{value:function(){window.Touch&&(this._handlerDragArea.addEventListener("touchstart",this,!1),this._hasTapBarToScroll&&this.element.addEventListener("touchstart",this,!1)),this._handlerDragArea.addEventListener("mousedown",this,!1),this._hasClickBarToScroll&&this.element.addEventListener("mousedown",this,!1)}},_transform:{value:null},_transition:{value:null},prepareForDraw:{value:function(){"webkitTransform"in this.element.style?this._transform="webkitTransform":"MozTransform"in this.element.style?this._transform="MozTransform":"oTransform"in this.element.style?this._transform="oTransform":this._transform="transform","webkitTransition"in this.element.style?this._transition="webkitTransition":"MozTransition"in this.element.style?this._transition="MozTransition":"oTransition"in this.element.style?this._transition="oTransition":this._transition="transition"}},willDraw:{value:function(){this._width=this.element.offsetWidth-55,this._scrollTo!==null&&(this.value=this._minValue+this._scrollTo/this._width,this._scrollTo=null)}},draw:{value:function(){var e=this._transform,t=this._transition;this._handlerbg.style[e]=this._handler.style[e]=this._handler2.style[e]=this._handler3.style[e]=this._handler4.style[e]=this._line.style[e]=this._line2.style[e]=this._handlerDragArea.style[e]="translate3d("+~~((this.value-this._minValue)*this._width/this.valueRange)*100/this._width+"%, 0, 0)",this._pressedStart?(this.element.classList.add("pressed"),this._handlerbg.firstChild.style[t]=this._handler.firstChild.style[t]=this._handler2.firstChild.style[t]=this._handler3.firstChild.style[t]=this._handler4.firstChild.style[t]="150ms all"):this._pressedEnd&&this.element.classList.remove("pressed")}}})}})