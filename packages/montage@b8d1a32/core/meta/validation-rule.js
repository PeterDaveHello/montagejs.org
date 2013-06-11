"use strict";var Montage=require("montage").Montage,Selector=require("core/selector").Selector,PropertyValidationSemantics=require("core/meta/validation-semantics").PropertyValidationSemantics,logger=require("core/logger").logger("blueprint"),PropertyValidationRule=exports.PropertyValidationRule=Montage.specialize({constructor:{value:function(){this.super()}},initWithNameAndBlueprint:{value:function(e,n){return this._name=e,this._owner=n,this}},serializeSelf:{value:function(e){e.setProperty("name",this.name),e.setProperty("blueprint",this.owner,"reference"),e.setProperty("messageKey",this.messageKey),e.setAllProperties()}},deserializeSelf:{value:function(e){this._name=e.getProperty("name"),this._owner=e.getProperty("blueprint"),this._messageKey=e.getProperty("messageKey");for(var n=Montage.getSerializablePropertyNames(this),t=0,s=n.length;s>t;t++){var a=n[t];this[a]=e.getProperty(a)}}},_owner:{value:null},owner:{get:function(){return this._owner}},identifier:{get:function(){return[this.blueprint.identifier,"rule",this.name].join("_")}},_name:{value:""},name:{get:function(){return this._name}},_validationSelector:{value:null},validationSelector:{serializable:!1,get:function(){return this._validationSelector||(this._validationSelector=Selector["false"]),this._validationSelector},set:function(e){this._validationSelector=e}},_messageKey:{value:""},messageKey:{serializable:!1,get:function(){return this._messageKey&&0!==this._messageKey.length?this._messageKey:this._name},set:function(e){this._messageKey=e}},_propertyValidationEvaluator:{value:null},evaluateRule:{value:function(e){if(null===this._propertyValidationEvaluator){var n=(new PropertyValidationSemantics).initWithBlueprint(this.blueprint);this._propertyValidationEvaluator=n.compile(this.selector.syntax)}return this._propertyValidationEvaluator(e)}},blueprintModuleId:require("montage")._blueprintModuleIdDescriptor,blueprint:require("montage")._blueprintDescriptor});