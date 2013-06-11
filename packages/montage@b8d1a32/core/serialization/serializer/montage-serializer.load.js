montageDefine("b8d1a32","core/serialization/serializer/montage-serializer",{dependencies:["core/core","mousse/serialization/malker","mousse/serialization/serializer","./montage-builder","./montage-labeler","./montage-visitor","core/logger"],factory:function(e,n){var s=e("core/core").Montage,a=e("mousse/serialization/malker").Malker,t=e("mousse/serialization/serializer").Serializer,o=e("./montage-builder").MontageBuilder,i=e("./montage-labeler").MontageLabeler,r=e("./montage-visitor").MontageVisitor;e("core/logger").logger("montage-serializer");var p=s.specialize.call(t,{_require:{value:null},_visitor:{value:null},_units:{value:Object.create(null)},_findObjectNameRegExp:{value:/([^\/]+?)(\.reel)?$/},_toCamelCaseRegExp:{value:/(?:^|-)([^-])/g},_replaceToCamelCase:{value:function(e,n){return n.toUpperCase()}},constructor:{value:function p(){}},initWithRequire:{value:function(e){return this._require=e,this._builder=new o,this._labeler=new i,this._visitor=(new r).initWithBuilderAndLabelerAndRequireAndUnits(this._builder,this._labeler,this._require,this._units),this._malker=new a(this._visitor),this}},getExternalObjects:{value:function(){return this._visitor.getExternalObjects()}},getExternalElements:{value:function(){return this._visitor.getExternalElements()}},defineSerializationUnit:{value:function(e,n){this.constructor.defineSerializationUnit.call(this,e,n)}}},{defineSerializationUnit:{value:function(e,n){this._units[e]=n}},getDefaultObjectNameForModuleId:{value:function(e){return this._findObjectNameRegExp.test(e),RegExp.$1.replace(this._toCamelCaseRegExp,this._replaceToCamelCase)}}});n.MontageSerializer=p,n.serialize=function(e,n){return(new p).initWithRequire(n).serializeObject(e)}}});