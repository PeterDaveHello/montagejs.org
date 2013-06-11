var Montage=require("core/core").Montage,Reviver=require("mousse/deserialization/reviver").Reviver,PropertiesDeserializer=require("./properties-deserializer").PropertiesDeserializer,SelfDeserializer=require("./self-deserializer").SelfDeserializer,UnitDeserializer=require("./unit-deserializer").UnitDeserializer,Promise=require("core/promise").Promise,ModuleLoader=Montage.specialize({_require:{value:null},_objectRequires:{value:null},init:{value:function(e,n){if("function"!=typeof e)throw Error("Function 'require' missing.");if("string"!=typeof e.location)throw Error("Function 'require' location is missing");if("object"!=typeof n&&n!==void 0)throw Error("Parameter 'objectRequires' should be an object.");return this._require=e,this._objectRequires=n,this}},getExports:{value:function(e,n){var s;for(n=e.resolve(n),s=e.getModuleDescriptor(n);void 0!==s.redirect;)s=e.getModuleDescriptor(s.redirect);return void 0!==s.mappingRedirect?this.getExports(s.mappingRequire,s.mappingRedirect):s.exports}},getModule:{value:function(e,n){var s,a,t=this._objectRequires;return s=t&&n in t?t[n]:this._require,a=this.getExports(s,e),a||(a=s.async(e)),a}}}),MontageReviver=exports.MontageReviver=Montage.specialize.call(Reviver,{moduleLoader:{value:null},init:{value:function(e,n){return this.moduleLoader=(new ModuleLoader).init(e,n),this}},getTypeOf:{value:function(e){return null!==e&&"object"==typeof e&&1===Object.keys(e).length&&"#"in e?"Element":Reviver.prototype.getTypeOf.call(this,e)}},reviveElement:{value:function(e,n,s){var a=e["#"],t=n.getElementById(a);return t?(s&&n.setObjectLabel(t,s),t):Promise.reject(Error("Element with id '"+a+"' was not found."))}},reviveCustomObject:{value:function(e,n,s){return this.reviveMontageObject(e,n,s)}},reviveMontageObject:{value:function(e,n,s){var a,t,o,i=this,r=e.prototype||e.object;return r&&(t=MontageReviver.parseObjectLocationId(r),a=this.moduleLoader.getModule(t.moduleId,s),o=t.objectName),Promise.isPromise(a)?a.then(function(a){return i.instantiateMontageObject(e,a,o,n,s)},function(n){throw n.stack&&console.error(n.stack),Error('Error deserializing "'+s+'" when loading module "'+t.moduleId+"' from '"+e.prototype+"'")}):this.instantiateMontageObject(e,a,o,n,s)}},instantiateMontageObject:{value:function(e,n,s,a,t){var o,i,r=this;return o=this.getMontageObject(e,n,s,a,t),a.setObjectLabel(o,t),o.isDeserializing=!0,i=this.reviveObjectLiteral(e,a),Promise.isPromise(i)?i.then(function(e){return r.deserializeMontageObject(e,o,a,t)}):this.deserializeMontageObject(i,o,a,t)}},deserializeMontageObject:{value:function(e,n,s,a){var t;return"function"==typeof n.deserializeSelf?this.deserializeCustomMontageObject(n,e,s,a):(s.setUnitsToDeserialize(n,e,MontageReviver._unitNames),t=this.deserializeMontageObjectProperties(n,e.properties,s),Promise.isPromise(t)?t.then(function(){return n}):n)}},deserializeMontageObjectProperties:{value:function(e,n,s){var a;if("function"==typeof e.deserializeProperties){var t=(new PropertiesDeserializer).initWithReviverAndObjects(this,s);a=e.deserializeProperties(t)}else for(var o in n)e[o]=n[o];return a}},deserializeCustomMontageObject:{value:function(e,n,s,a){var t,o=(new SelfDeserializer).initWithObjectAndObjectDescriptorAndContextAndUnitNames(e,n,s,MontageReviver._unitNames);return t=e.deserializeSelf(o),Promise.isPromise(t)?t.then(function(e){return s.setObjectLabel(e,a),e}):t!==void 0?(s.setObjectLabel(t,a),t):e}},getMontageObject:{value:function(e,n,s,a,t){var o;if(a.hasUserObject(t))return a.getUserObject(t);if("prototype"in e){if(!(s in n))throw Error('Error deserializing "'+t+'": object named "'+s+'"'+' was not found in "'+e.prototype+'".'+" Available objects are: "+Object.keys(n)+".");return o=Object.create(n[s].prototype),o.isDeserializing=!0,"function"==typeof o.didCreate?o.didCreate():"function"==typeof o.constructor&&o.constructor(),o}if("object"in e){if(!(s in n))throw Error('Error deserializing "'+t+'": object named "'+o+"' was not found given '"+e.object+"'");return n[s]}throw Error("Error deserializing "+JSON.stringify(e)+', might need "prototype" or "object" on label '+JSON.stringify(t))}},didReviveObjects:{value:function(e,n){var s,a=this;return s=this._deserializeUnits(n),Promise.isPromise(s)?s.then(function(){a._invokeDeserializedFromSerialization(e,n)}):(this._invokeDeserializedFromSerialization(e,n),void 0)}},_invokeDeserializedFromSerialization:{value:function(e,n){var s;for(var a in e)s=e[a],null!=s&&delete s.isDeserializing,n.hasUserObject(a)||s&&"function"==typeof s.deserializedFromSerialization&&s.deserializedFromSerialization(a)}},_deserializeUnits:{value:function(e){for(var n,n,s=e.getUnitsToDeserialize(),a=MontageReviver._unitRevivers,t=0;n=s[t];t++)for(var o,i=n.unitNames,r=0;o=i[r];r++){var p=(new UnitDeserializer).initWithContext(e);o in n.objectDesc&&a[o](p,n.object,n.objectDesc[o])}}}},{_unitRevivers:{value:Object.create(null)},_unitNames:{value:[]},_findObjectNameRegExp:{value:/([^\/]+?)(\.reel)?$/},_toCamelCaseRegExp:{value:/(?:^|-)([^-])/g},_replaceToCamelCase:{value:function(e,n){return n.toUpperCase()}},_locationDescCache:{value:Object.create(null)},parseObjectLocationId:{value:function(e){var n,s,a,t,o=this._locationDescCache;return e in o?n=o[e]:(s=e.indexOf("["),s>0?(a=e.substr(0,s),t=e.slice(s+1,-1)):(a=e,this._findObjectNameRegExp.test(e),t=RegExp.$1.replace(this._toCamelCaseRegExp,this._replaceToCamelCase)),n={moduleId:a,objectName:t},o[e]=n),n}},defineUnitReviver:{value:function(e,n){this._unitRevivers[e]=n,this._unitNames.push(e)}},getTypeOf:{value:function(e){return this.prototype.getTypeOf.call(this,e)}}});"undefined"!=typeof exports&&(exports.MontageReviver=MontageReviver);