montageDefine("4fab505","core/meta/object-property",{dependencies:["montage","core/exception","core/meta/blueprint","core/logger"],factory:function(e,t,n){"use strict";var r=e("montage").Montage,i=e("core/exception").Exception,s=e("core/meta/blueprint").Blueprint,o=e("core/meta/blueprint").Binder,u=e("core/logger").logger("object-property"),a=t.ObjectProperty=r.create(r,{init:{serializable:!1,enumerable:!1,value:function(){return this}},apply:{value:function(e,t){if(!e.hasOwnProperty("blueprint")){var n;n=r.getInfoForObject(e);if(n!=null&&n.isInstance===!1){if(typeof t=="undefined")t=o.manager.blueprintForPrototype(n.objectName,n.moduleId);else if(t.prototypeName!==n.objectName||t.moduleId!==n.moduleId)t=null;this.applyWithBlueprint(e,t)}}}},applyWithBlueprint:{value:function(e,t){t!=null&&(this.addProperties(e,t),t.parent!==null&&this.apply(Object.getPrototypeOf(e),t))}},addProperties:{value:function(e,t){var n=0,i;while(i=t.propertyBlueprints[n++])i.isDerived?this.addDerivedProperty(e,i):i.isAssociation?this.addAssociation(e,i):this.addProperty(e,i);r.defineProperty(e,"_blueprint",{serializable:!1,enumerable:!1,value:t}),r.defineProperty(e,"blueprint",{enumerable:!1,serializable:!1,get:function(){return this._blueprint}}),r.defineProperty(e,"blueprintGet",{serializable:!1,enumerable:!1,value:this.blueprintGet}),r.defineProperty(e,"blueprintSet",{serializable:!1,enumerable:!1,value:this.blueprintSet})}},addProperty:{value:function(e,t){this.addPropertyStorage(e,t),this.addPropertyDefinition(e,t),this.addPropertyStoredValue(e,t)}},addPropertyStorage:{value:function(e,t){var n="_"+t.name,i=null;e.hasOwnProperty(n)?u.isError&&u.error("We have an issue here. The developer should not override the storage value for "+n+"."):(t.isToMany?i={value:[],enumerable:!1,serializable:!0,distinct:!0}:i={value:null,enumerable:!1,serializable:!0},r.defineProperty(e,n,i))}},addPropertyDefinition:{value:function(e,t){var n=t.name,i=null;e.hasOwnProperty(n)?u.isDebug&&u.debug("The developer has already created the property "+n+" method do nothing."):(i={get:function(){return this.blueprintGet(n)},enumerable:!0,serializable:!1},t.readOnly||(i.set=function(e){return this.blueprintSet(n,e)}),r.defineProperty(e,n,i))}},blueprintGet:{value:function(e){var t=this.blueprint.propertyBlueprintForName(e),n="_"+t.name;return this[n]},enumerable:!1,serializable:!1},blueprintSet:{value:function(e,t){var n=this.blueprint.propertyBlueprintForName(e),r="_"+n.name;if(t==null&&n.denyDelete)throw i.create().initWithMessageTargetAndMethod("Deny Delete",this,n.name);this[r]=t},enumerable:!1,serializable:!1},addPropertyStoredValue:{value:function(e,t){var n=t.name+"$Storage",i=null;e.hasOwnProperty(n)?u.isError&&u.error("We have an issue here. The developer should not override the stored value for "+n+"."):(t.isToMany?i={value:[],enumerable:!1,serializable:!1,distinct:!0}:i={value:null,enumerable:!1,serializable:!1},r.defineProperty(e,n,i))}},addAssociation:{value:function(e,t){this.addPropertyStorage(e,t),this.addAssociationDefinition(e,t),this.addPropertyStoredValue(e,t)}},addAssociationDefinition:{value:function(e,t){t.isToMany?this.addToManyAssociationDefinition(e,t):this.addToOneAssociationDefinition(e,t)}},addToOneAssociationDefinition:{value:function(e,t){var n=t.name.toCapitalized(),i="addTo"+n;e.hasOwnProperty(i)?u.isError&&u.error("We have an issue here. The developer should not override the method "+i+"."):r.defineProperty(e,i,{serializable:!1,enumerable:!1,value:function(){return null}}),i="removeFrom"+n,e.hasOwnProperty(i)?u.isError&&u.error("We have an issue here. The developer should not override the method "+i+"."):r.defineProperty(e,i,{serializable:!1,enumerable:!1,value:function(){return null}}),i="clear"+n,e.hasOwnProperty(i)?u.isError&&u.error("We have an issue here. The developer should not override the method "+i+"."):r.defineProperty(e,i,{serializable:!1,enumerable:!1,value:function(){return null}})}},addToManyAssociationDefinition:{value:function(e,t){var n=t.name.toCapitalized(),i="addTo"+n;e.hasOwnProperty(i)?u.isError&&u.error("We have an issue here. The developer should not override the method "+i+"."):r.defineProperty(e,i,{serializable:!1,enumerable:!1,value:function(){return null}}),i="removeFrom"+n,e.hasOwnProperty(i)?u.isError&&u.error("We have an issue here. The developer should not override the method "+i+"."):r.defineProperty(e,i,{serializable:!1,enumerable:!1,value:function(){return null}}),i="clear"+n,e.hasOwnProperty(i)?u.isError&&u.error("We have an issue here. The developer should not override the method "+i+"."):r.defineProperty(e,i,{serializable:!1,enumerable:!1,value:function(){return null}})}},addDerivedProperty:{value:function(e,t){}}})}})