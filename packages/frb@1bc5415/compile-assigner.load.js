montageDefine("1bc5415","compile-assigner",{dependencies:["./compile-evaluator","./algebra","./scope"],factory:function(e,t,n){function a(e){return a.semantics.compile(e)}var s=e("./compile-evaluator"),i=e("./algebra"),r=e("./scope");n.exports=a,a.semantics={compile:function(e){var t=this.compilers;if("equals"===e.type){var n=this.compile(e.args[0]),a=this.compileEvaluator(e.args[1]);return t.equals(n,a)}if("if"===e.type){var s=this.compileEvaluator(e.args[0]),r=this.compile(e.args[1]),o=this.compile(e.args[2]);return t["if"](s,r,o)}if("everyBlock"===e.type){var l=this.compileEvaluator(e.args[0]),c=i(e.args[1],{type:"literal",value:!0}),p=this.compile(c[0]),h=this.compileEvaluator(c[1]);return t.everyBlock(l,p,h)}if(t.hasOwnProperty(e.type)){var d=e.args.map(this.compileEvaluator,this.compileEvaluator.semantics);return t[e.type].apply(null,d)}throw Error("Can't compile assigner for "+JSON.stringify(e.type))},compileEvaluator:s,compilers:{property:function(e,t){return function(n,a){var s=e(a);if(s){var i=t(a);null!=i&&(Array.isArray(s)?s.set(i,n):s[i]=n)}}},get:function(e,t){return function(n,a){var s=e(a);if(s){var i=t(a);null!=i&&s.set(i,n)}}},has:function(e,t){return function(n,a){var s=e(a);if(s){var i=t(a);null!=n&&(n?(s.has||s.contains).call(s,i)||s.add(i):(s.has||s.contains).call(s,i)&&(s.remove||s["delete"]).call(s,i))}}},equals:function(e,t){return function(n,a){return n?e(t(a),a):void 0}},"if":function(e,t,n){return function(a,s){var i=e(s);if(null!=i)return i?t(a,s):n(a,s)}},rangeContent:function(e){return function(t,n){var a=e(n);a&&(t?a.swap(0,a.length,t):a.clear())}},mapContent:function(e){return function(t,n){var a=e(n);a&&(a.clear(),n.value&&a.addEach(t))}},reversed:function(e){return function(t,n){var a=e(n);a&&a.swap(0,a.length,t.reversed())}},everyBlock:function(e,t,n){return function(a,s){if(a){var i=e(s),o=n(s);i.forEach(function(e){t(o,r.nest(s,e))})}}}}}}});