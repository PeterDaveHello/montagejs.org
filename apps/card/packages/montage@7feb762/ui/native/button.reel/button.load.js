montageDefine("7feb762","ui/native/button.reel/button",{dependencies:["montage","ui/component","ui/native-control","ui/composer/press-composer"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/native-control").NativeControl,o=e("ui/composer/press-composer").PressComposer,u=t.Button=r.create(s,{_preventFocus:{enumerable:!1,value:!1},preventFocus:{get:function(){return this._preventFocus},set:function(e){e===!0?this._preventFocus=!0:this._preventFocus=!1}},enabled:{dependencies:["disabled"],get:function(){return!this._disabled},set:function(e){this.disabled=!e}},converter:{value:null},_labelNode:{value:undefined,enumerable:!1},_label:{value:undefined,enumerable:!1},label:{get:function(){return this._label},set:function(e){if(e&&e.length>0&&this.converter)try{e=this.converter.convert(e),this.error&&(this.error=null)}catch(t){this.error=t}this._label=e,this._isInputElement&&(this._value=e),this.needsDraw=!0}},setLabelInitialValue:{value:function(e){this._label===undefined&&(this._label=e)}},holdThreshold:{get:function(){return this._pressComposer.longPressThreshold},set:function(e){this._pressComposer.longPressThreshold=e}},_pressComposer:{enumberable:!1,value:null},_active:{enumerable:!1,value:!1},active:{get:function(){return this._active},set:function(e){this._active=e,this.needsDraw=!0}},blur:{value:function(){this._element.blur()}},focus:{value:function(){this._element.focus()}},didCreate:{value:function(){this._pressComposer=o.create(),this.addComposer(this._pressComposer)}},prepareForActivationEvents:{value:function(){this._pressComposer.addEventListener("pressStart",this,!1),this._pressComposer.addEventListener("press",this,!1),this._pressComposer.addEventListener("pressCancel",this,!1)}},addEventListener:{value:function(e,t,n){s.addEventListener.call(this,e,t,n),e==="hold"&&this._pressComposer.addEventListener("longPress",this,!1)}},handlePressStart:{value:function(e){this.active=!0,e.touch&&document.addEventListener("touchmove",this,!1),this._preventFocus||this._element.focus()}},handlePress:{value:function(e){this.active=!1,this._dispatchActionEvent(),document.removeEventListener("touchmove",this,!1)}},handleKeyup:{value:function(e){e.keyCode===32&&(this.active=!1,this._dispatchActionEvent())}},handleLongPress:{value:function(e){this._pressComposer.cancelPress();var t=document.createEvent("CustomEvent");t.initCustomEvent("hold",!0,!0,null),this.dispatchEvent(t)}},handlePressCancel:{value:function(e){this.active=!1,document.removeEventListener("touchmove",this,!1)}},handleTouchmove:{value:function(e){e.preventDefault()}},_isInputElement:{value:!1,enumerable:!1},willPrepareForDraw:{value:function(){s.willPrepareForDraw.call(this),this._element.setAttribute("role","button"),this._isInputElement=this._element.tagName==="INPUT",this._isInputElement?(Object.defineProperty(this,"value",{get:function(){return this._label},set:function(e){this.label=e}}),this._label===undefined&&(this._label=this._element.value)):(this._element.firstChild||this._element.appendChild(document.createTextNode("")),this._labelNode=this._element.firstChild,this.setLabelInitialValue(this._labelNode.data),this._label===undefined&&(this._label=this._labelNode.data)),this.needsDraw=!0}},prepareForDraw:{value:function(){this._element.addEventListener("keyup",this,!1)}},_drawLabel:{enumerable:!1,value:function(e){this._isInputElement?this._element.setAttribute("value",e):this._labelNode.data=e}},draw:{value:function(){Object.getPrototypeOf(u).draw.call(this),this._disabled?this._element.classList.add("disabled"):this._element.classList.remove("disabled"),this._active?this._element.classList.add("active"):this._element.classList.remove("active"),this._drawLabel(this.label)}},_detail:{value:null},detail:{get:function(){return this._detail===null&&(this._detail=a.create()),this._detail}},createActionEvent:{value:function(){var e=document.createEvent("CustomEvent"),t,n;if(t=this._detail)n=t._data;return e.initCustomEvent("action",!0,!0,n),e}}});u.addAttributes({autofocus:{value:!1,dataType:"boolean"},disabled:{value:!1,dataType:"boolean"},form:null,formaction:null,formenctype:null,formmethod:null,formnovalidate:{dataType:"boolean"},formtarget:null,type:{value:"button"},name:null,value:null});var a=r.create(r,{didCreate:{value:function(){this._data=Object.create(null)}},initWithReservedAndOptions:{value:function(e,t){Map.call(this,e,t)}},get:{value:function(e){return this.undefinedGet(e)}},set:{value:function(e,t){this.undefinedSet(e,t)}},_data:{value:null},_defineProperty:{value:function(e,t){t=typeof t!="undefined"?t:null,r.defineProperty(this,e,{get:function(){return this._data[e]},set:function(t){this._data[e]=t}}),this._data[e]=t}},undefinedGet:{value:function(e){return typeof this._data[e]=="undefined"&&this._defineProperty(e),this._data[e]}},undefinedSet:{value:function(e,t){typeof this._data[e]=="undefined"?this._defineProperty(e,t):this._data[e]=t}}})}})