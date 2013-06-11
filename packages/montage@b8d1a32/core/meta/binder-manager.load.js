montageDefine("b8d1a32","core/meta/binder-manager",{dependencies:["montage","core/promise","core/meta/object-property","core/meta/binder","core/logger"],factory:function(e,n){"use strict";var t=e("montage").Montage;e("core/promise").Promise;var s=e("core/meta/object-property").ObjectProperty,a=e("core/meta/binder");e("core/logger").logger("blueprint"),n.BinderManager=t.specialize({constructor:{value:function(){this._binders=[],this._binderTable={}}},_binders:{value:null},_binderTable:{value:null},binders:{get:function(){return this._binders}},addBinder:{value:function(e){if(null!==e){this._binderTable[e.name]&&this.removeBinder(this._binderTable[e.name]);var n=this._binders.indexOf(e);n>=0&&this._binders.splice(n,1),this._binders.push(e),this._binderTable[e.name]=e}}},removeBinder:{value:function(e){if(null!==e){var n=this._binders.indexOf(e);n>=0&&this._binders.splice(n,1),this._binderTable[e.name]&&delete this._binderTable[e.name]}}},binderForName:{value:function(e){return this._binderTable[e]}},blueprintForPrototype:{value:function(e,n){var t,s,a;for(a=0;(t=this.binders[a])!==void 0;a++)if(s=t.blueprintForPrototype(e,n),null!==s)return s;return null}},_defaultBlueprintObjectProperty:{serializable:!0,value:null},defaultBlueprintObjectProperty:{get:function(){return this._defaultBlueprintObjectProperty||(this._defaultBlueprintObjectProperty=(new s).init()),this._defaultBlueprintObjectProperty}},_defaultBinder:{serializable:!0,value:null},defaultBinder:{get:function(){return this._defaultBinder||(this._defaultBinder=(new a.Binder).initWithNameAndRequire("default",global.require),this._defaultBinder.isDefault=!0,this.addBinder(this._defaultBinder)),this._defaultBinder}}})}});