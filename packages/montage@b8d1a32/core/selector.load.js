montageDefine("b8d1a32","core/selector",{dependencies:["montage","frb/parse","frb/stringify","frb/evaluate","frb/language"],factory:function(e,n){var s=e("montage").Montage,a=e("frb/parse"),t=e("frb/stringify"),o=e("frb/evaluate"),p=e("frb/language").precedence,i=n.Selector=s.specialize({syntax:{value:null},initWithSyntax:{value:function(e){return this.syntax=e,this}},initWithPath:{value:function(e){return this.syntax=a(e),this}},stringify:{value:function(){return t(this.syntax)}},serializeSelf:{value:function(e){e.setProperty("path",t(this.syntax))}},deserializeSelf:{value:function(e){this.syntax=a(e.getProperty("path"))}},evaluate:{value:function(e,n){return o(this.syntax,e,n)}}});p.keys().forEach(function(e){s.defineProperty(i.prototype,e,{value:function(){var n=Array.prototype.map.call(arguments,function(e){return"string"==typeof e?a(e):e.syntax?e.syntax:"object"==typeof e?e:void 0});return(new this.constructor).initWithSyntax({type:e,args:[this.syntax].concat(n)})}}),s.defineProperty(i,e,{value:function(){var n=Array.prototype.map.call(arguments,function(e){return"string"==typeof e?a(e):e.syntax?e.syntax:"object"==typeof e?e:void 0});return(new this).initWithSyntax({type:e,args:n})}})})}});