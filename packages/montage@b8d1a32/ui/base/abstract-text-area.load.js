montageDefine("b8d1a32","ui/base/abstract-text-area",{dependencies:["montage","ui/component","collections/dict"],factory:function(e,n){var t=(e("montage").Montage,e("ui/component").Component);e("collections/dict");var a=n.AbstractTextArea=t.specialize({constructor:{value:function a(){if(this.constructor===a)throw Error("AbstractTextArea cannot be instantiated.");t.constructor.call(this),this.defineBindings({"classList.has('montage--disabled')":{"<-":"!enabled"}})}},hasTemplate:{value:!1},enabled:{value:!0},_placeholderValue:{value:null},placeholderValue:{set:function(e){this._placeholderValue=e,this.needsDraw=!0},get:function(){return this._placeholderValue}},_value:{value:null},value:{set:function(e){this._value=e,this.needsDraw=!0},get:function(){return this._value}},enterDocument:{value:function(e){e&&(this.element.addEventListener("input",this,!1),this.element.addEventListener("change",this,!1))}},draw:{value:function(){this.element.value=this.value,this.element.setAttribute("placeholder",this._placeholderValue)}},handleChange:{value:function(){this._updateValueFromDom()}},handleInput:{value:function(){this._updateValueFromDom()}},_updateValueFromDom:{value:function(){this._value!==this.element.value&&(this._value=this.element.value,this.dispatchOwnPropertyChange("value",this._value))}}})}});