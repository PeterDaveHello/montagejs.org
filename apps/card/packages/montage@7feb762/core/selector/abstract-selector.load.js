montageDefine("7feb762","core/selector/abstract-selector",{dependencies:["./parser"],factory:function(e,t,n){function i(e){var t=e.tokens,n=e.tokenNames,r=e.semantics,i,u=function(){return s(u.newWithLanguage(e),i).apply(null,arguments)};Object.defineProperties(u,o),u.language=e,i=e.selectorExtras||{};var a=Object.keys(i);return["tokens","evaluate","compile","parser","syntax"].forEach(function(e){i[e]={get:function(){return this.selector[e]}}}),n.forEach(function(e){i[e]={get:function(){return this.emit(t[e]),this}}}),n.concat(a).forEach(function(t){Object.defineProperty(u,t,{get:function(){var n=this.newWithLanguage(e),r=s(n,i)[t];return Object.defineProperties(r,i),r.selector=n,r}})}),u.__start=function(t){return s(u.newWithLanguage(e),i)},u}function s(e,t){var n=function(){var t=arguments.length-1;return Array.prototype.forEach.call(arguments,function(n,r){n!=null&&n.tokens?(e.emit(e.language.tokens.begin),n.tokens.forEach(function(t){e.emit(t)}),e.emit(e.language.tokens.end)):e.emit({type:"literal",value:n}),r!==t&&e.emit(e.language.tokens.comma)}),n};return Object.defineProperties(n,t),n.emit=function(e){return n.selector.emit(e),n},n.selector=e,n.language=e.language,n}var r=e("./parser").Parser;t.makeSelector=i,t._makeTokenEmitter=s;var o={newWithLanguage:{value:function(e){var t=Object.create(this);return t.language=e,t.parser=r.newWithLanguage(e,function(e){t._syntax=e}),t}},fromSyntax:{value:function(e){var t=Object.create(this);return t._syntax=e,t}},tokens:{get:function(){return this.parser?this.parser.tokens:[]}},emit:{value:function(e){return this.parser?(this.parser.emit(e),this):this.__start().emit(e)}},syntax:{get:function(){return this.parser?(this.emit(this.language.tokens.eof),this._syntax):this.language.tokens.value}},compile:{value:function(e){return this.parser?this.language.semantics.compile(this.syntax,e):function(e){return e}}},evaluate:{value:function(e,t,n){return this.parser?this.language.semantics.evaluate(this.syntax,e,t,n):e}}}}})