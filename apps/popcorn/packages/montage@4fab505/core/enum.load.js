montageDefine("4fab505","core/enum",{dependencies:["montage","core/logger"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/logger").logger("enum");t.Enum=r.create(r,{_value:{value:0},init:{value:function(){return Object.isSealed(this)&&i.error(this,"Object is sealed"),this}},initWithMembers:{value:function(){if(Object.isSealed(this))return i.error(this,"Object is sealed"),this;var e,t;for(t=0;typeof (e=arguments[t])!="undefined";t++)e!==null?this.addMember(e):i.error(this,"Member at index "+t+" is null");return Object.seal(this)}},addMember:{value:function(e){typeof this[e]=="undefined"&&(Object.defineProperty(this,e,{writable:!1,configurable:!1,enumerable:!0,value:this._value}),this._value++)}},seal:{value:function(){if(!Object.isSealed(this))return Object.seal(this)}}})}})