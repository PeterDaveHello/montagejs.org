montageDefine("4fab505","core/meta/remote-reference",{dependencies:["montage","core/promise","core/logger"],factory:function(e,t,n){"use strict";var r=e("montage").Montage,i=e("core/promise").Promise,s=e("core/logger").logger("blueprint");t.RemoteReference=r.create(r,{didCreate:{value:function(){return this._value=null,this._reference=null,this._promise=null,this}},initWithValue:{value:function(e){return this._value=e,this._reference=null,this._promise=null,this}},serializeSelf:{value:function(e){this._reference||(this._reference=this.referenceFromValue(this._value)),e.setProperty("valueReference",this._reference)}},deserializeSelf:{value:function(e){this._value=null,this._reference=e.getProperty("valueReference"),this._promise=null}},_value:{value:null},_reference:{value:null},_promise:{value:null},promise:{value:function(e){return this._promise||(this._value?this._promise=i.resolve(this._value):this._promise=this.valueFromReference(this._reference,e)),this._promise}},valueFromReference:{value:function(e,t){return i.resolve(null)}},referenceFromValue:{value:function(e){return{}}}})}})