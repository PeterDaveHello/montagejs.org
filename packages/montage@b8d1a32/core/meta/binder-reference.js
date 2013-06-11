"use strict";var Montage=require("montage").Montage,Promise=require("core/promise").Promise,RemoteReference=require("core/meta/remote-reference").RemoteReference,BinderModule=require("core/meta/binder"),logger=require("core/logger").logger("blueprint");exports.BinderReference=RemoteReference.create(RemoteReference,{constructor:{value:function(){this.super()}},identifier:{get:function(){return this._reference||(this._reference=this.referenceFromValue(this._value)),["binder",this._reference.binderName.toLowerCase(),"reference"].join("_")}},valueFromReference:{value:function(e,n){var t=e.binderName,s=e.binderModuleId,a=Promise.defer(),o=BinderModule.Binder.manager.binderForName(t);if(o)a.resolve(o);else try{var i=n,r=s.indexOf("/");if(r>0){var l=s.substring(0,r),p=n.mappings;l in p&&(s=s.substring(r+1),i=i.getPackage(p[l].location))}a=BinderModule.Binder.getBinderWithModuleId(s,i)}catch(c){a.reject(Error("Error cannot find Blueprint Binder "+s))}return a.promise}},referenceFromValue:{value:function(e){var n={};return n.binderName=e.name,n.binderModuleId=e.binderModuleId,n}}});