montageDefine("7feb762","core/bitfield",{dependencies:["montage"],factory:function(e,t,n){var r=e("montage").Montage,i=t.BitField=r.create(r,{initWithDescriptor:{enumerable:!1,value:function(e){var t;this.reset();for(t in e)this.addField(t,e[t].value);return this}},addField:{enumerable:!1,value:function(e,t){if(e in this)return;if(this._fieldCount>=32)throw"BitField 32 fields limit reached.";this._trueValue+=this._fields[e]=this._constantsToReuse.length?this._constantsToReuse.shift():1<<this._fieldCount,r.defineProperty(this,e,{enumerable:!0,get:function(){return this._value===this._trueValue},set:function(t){t?this._value|=this._fields[e]:this._value&=~this._fields[e],this.value&&this.callDelegateMethod()}}),this._fieldCount++,!t||(this[e]=!0)}},_constantsToReuse:{enumerable:!1,value:[]},removeField:{enumerable:!1,value:function(e){delete this[e],this._constantsToReuse.push(this._fields[e]),this._trueValue-=this._fields[e],delete this._fields[e]}},delegate:{enumerable:!1,value:null},callDelegateMethod:{value:function(){var e;this.delegate&&typeof (e=this.delegate.bitFieldDidBecomeTrue)=="function"&&e.call(this.delegate,this)},enumerable:!1},value:{enumerable:!1,get:function(){return this._value===this._trueValue}},_fieldCount:{enumerable:!1,value:0},_value:{enumerable:!1,value:0},_trueValue:{enumerable:!1,value:0},reset:{enumerable:!1,value:function(){this._value=0}},_fields:{enumerable:!1,value:{}},toString:{value:function(){var e=this._fields,t,n,r="";for(t=0;n=e[t];t++)r+=n+"["+(this._value&e[n])+"], ";return r}}})}})