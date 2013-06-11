montageDefine("b8d1a32","core/serialization/deserializer/montage-interpreter",{dependencies:["core/core","mousse/deserialization/interpreter","mousse/deserialization/context","./montage-reviver","core/promise"],factory:function(e,n){var s=e("core/core").Montage,a=e("mousse/deserialization/interpreter").Interpreter,t=e("mousse/deserialization/context").Context,o=e("./montage-reviver").MontageReviver,i=e("core/promise").Promise,r=s.specialize.call(a,{_require:{value:null},_reviver:{value:null},init:{value:function(e,n){if("function"!=typeof e)throw Error("Function 'require' missing.");return this._reviver=(new o).init(e,n),this}},instantiate:{value:function(e,n,s){var a;return a=(new p).init(e,this._reviver,n,s),a.getObjects()}},preloadModules:{value:function(e){var n,s,a,t,r=this._reviver,p=r.moduleLoader,l=[];for(var c in e)n=e[c],s=n.prototype||n.object,s&&(a=o.parseObjectLocationId(s),t=p.getModule(a.moduleId,c),i.isPromise(t)&&l.push(t));return l.length>0?i.all(l):void 0}}}),p=s.specialize.call(t,{_ELEMENT_ID_ATTRIBUTE:{value:"data-montage-id"},_unitsToDeserialize:{value:null},_element:{value:null},constructor:{value:function(){this._unitsToDeserialize=[]}},init:{value:function(e,n,s,a){return t.call(this,e,n,s),this._element=a,this}},getElement:{value:function(){return this._element}},getElementById:{value:function(e){var n="*["+this._ELEMENT_ID_ATTRIBUTE+'="'+e+'"]';return this._element.querySelector(n)}},setUnitsToDeserialize:{value:function(e,n,s){this._unitsToDeserialize.push({object:e,objectDesc:n,unitNames:s})}},getUnitsToDeserialize:{value:function(){return this._unitsToDeserialize}}});n.MontageInterpreter=r,n.MontageContext=p}});