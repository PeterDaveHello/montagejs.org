montageDefine("7517819","sorted-set",{dependencies:["./shim","./generic-collection","./generic-set","./listen/property-changes","./listen/range-changes","./tree-log"],factory:function(e,t,n){"use strict";function f(e,t,n,r){if(!(this instanceof f))return new f(e,t,n,r);this.contentEquals=t||Object.equals,this.contentCompare=n||Object.compare,this.getDefault=r||Function.noop,this.root=null,this.length=0,this.addEach(e)}function l(e){this.value=e,this.left=null,this.right=null,this.length=1}function c(e,t,n){this.set=e,this.prev=null,this.end=n;if(t){var r=this.set.findLeastGreaterThanOrEqual(t);r&&(this.set.splay(r.value),this.prev=r.getPrevious())}}n.exports=f;var r=e("./shim"),i=e("./generic-collection"),s=e("./generic-set"),o=e("./listen/property-changes"),u=e("./listen/range-changes"),a=e("./tree-log");Object.addEach(f.prototype,i.prototype),Object.addEach(f.prototype,s.prototype),Object.addEach(f.prototype,o.prototype),Object.addEach(f.prototype,u.prototype),f.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentCompare,this.getDefault)},f.prototype.has=function(e){return this.root?(this.splay(e),this.contentEquals(e,this.root.value)):!1},f.prototype.get=function(e){if(this.root){this.splay(e);if(this.contentEquals(e,this.root.value))return this.root.value}return this.getDefault(e)},f.prototype.add=function(e){var t=new this.Node(e);if(!this.root)return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([e],[],0),this.root=t,this.length++,this.dispatchesRangeChanges&&this.dispatchRangeChange([e],[],0),!0;this.splay(e);if(!this.contentEquals(e,this.root.value)){var n=this.contentCompare(e,this.root.value);if(n===0)throw new Error("SortedSet cannot contain incomparable but inequal values: "+e+" and "+this.root.value);return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([e],[],this.root.index),n<0?(t.right=this.root,t.left=this.root.left,this.root.left=null,this.root.touch()):(t.left=this.root,t.right=this.root.right,this.root.right=null,this.root.touch()),t.touch(),this.root=t,this.length++,this.dispatchesRangeChanges&&this.dispatchRangeChange([e],[],this.root.index),!0}return!1},f.prototype["delete"]=function(e){if(this.root){this.splay(e);if(this.contentEquals(e,this.root.value)){var t=this.root.index;this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([],[e],t);if(!this.root.left)this.root=this.root.right;else{var n=this.root.right;this.root=this.root.left,this.splay(e),this.root.right=n}return this.length--,this.root&&this.root.touch(),this.dispatchesRangeChanges&&this.dispatchRangeChange([],[e],t),!0}}return!1},f.prototype.indexOf=function(e){if(this.root){this.splay(e);if(this.contentEquals(e,this.root.value))return this.root.index}return-1},f.prototype.find=function(e){if(this.root){this.splay(e);if(this.contentEquals(e,this.root.value))return this.root}},f.prototype.findGreatest=function(e){if(this.root){e=e||this.root;while(e.right)e=e.right;return e}},f.prototype.findLeast=function(e){if(this.root){e=e||this.root;while(e.left)e=e.left;return e}},f.prototype.findGreatestLessThanOrEqual=function(e){if(this.root)return this.splay(e),this.root},f.prototype.findGreatestLessThan=function(e){if(this.root)return this.splay(e),this.root.getPrevious()},f.prototype.findLeastGreaterThanOrEqual=function(e){if(this.root){this.splay(e);var t=this.contentCompare(e,this.root.value);return t===0?this.root:this.root.getNext()}},f.prototype.findLeastGreaterThan=function(e){if(this.root){this.splay(e);var t=this.contentCompare(e,this.root.value);return this.root.getNext()}},f.prototype.pop=function(){if(this.root){var e=this.findGreatest();return this["delete"](e.value),e.value}},f.prototype.shift=function(){if(this.root){var e=this.findLeast();return this["delete"](e.value),e.value}},f.prototype.push=function(){this.addEach(arguments)},f.prototype.unshift=function(){this.addEach(arguments)},f.prototype.slice=function(e,t){var n;e=e||0,t=t||this.length,e<0&&(e+=this.length),t<0&&(t+=this.length);var r=[];if(this.root){this.splayIndex(e);while(this.root.index<t){r.push(this.root.value);if(!this.root.right)break;this.splay(this.root.getNext().value)}}return r},f.prototype.splice=function(e,t){return this.swap(e,t,Array.prototype.slice.call(arguments,2))},f.prototype.swap=function(e,t,n){if(e===undefined&&t===undefined)return[];e=e||0,e<0&&(e+=this.length),t===undefined&&(t=Infinity);var r=[];if(this.root){this.splayIndex(e);for(var i=0;i<t;i++){r.push(this.root.value);var s=this.root.getNext();this["delete"](this.root.value);if(!s)break;this.splay(s.value)}}return this.addEach(n),r},f.prototype.splay=function(e){var t,n,r,i,s,o;if(!this.root)return;t=n=r=new this.Node,o=new this.Node,s=this.root;for(;;){var u=this.contentCompare(e,s.value);if(u<0){if(!s.left)break;if(this.contentCompare(e,s.left.value)<0){i=s.left,s.left=i.right,s.touch(),i.right=s,i.touch(),s=i;if(!s.left)break}i=new l,i.right=s,i.left=o.left,o.left=i,r.left=s,r.touch(),r=s,s=s.left}else{if(!(u>0))break;if(!s.right)break;if(this.contentCompare(e,s.right.value)>0){i=s.right,s.right=i.left,s.touch(),i.left=s,i.touch(),s=i;if(!s.right)break}i=new l,i.left=s,i.right=o.right,o.right=i,n.right=s,n.touch(),n=s,s=s.right}}n.right=s.left,n.touch(),r.left=s.right,r.touch(),s.left=t.right,s.right=t.left;while(o.left)o.left.right.touch(),o.left=o.left.left;while(o.right)o.right.left.touch(),o.right=o.right.right;s.touch(),this.root=s},f.prototype.splayIndex=function(e){if(this.root){var t=this.root,n=this.root.index;while(n!==e)if(n>e&&t.left)t=t.left,n-=1+(t.right?t.right.length:0);else{if(!(n<e&&t.right))break;t=t.right,n+=1+(t.left?t.left.length:0)}return this.splay(t.value),this.root.index===e}return!1},f.prototype.reduce=function(e,t,n){return this.root&&(t=this.root.reduce(e,t,0,n,this)),t},f.prototype.reduceRight=function(e,t,n){return this.root&&(t=this.root.reduceRight(e,t,this.length-1,n,this)),t},f.prototype.min=function(e){var t=this.findLeast(e);if(t)return t.value},f.prototype.max=function(e){var t=this.findGreatest(e);if(t)return t.value},f.prototype.one=function(){if(this.root)return this.root.value},f.prototype.clear=function(){var e;this.dispatchesRangeChanges&&(e=this.toArray(),this.dispatchBeforeRangeChange([],e,0)),this.root=null,this.length=0,this.dispatchesRangeChanges&&this.dispatchRangeChange([],e,0)},f.prototype.iterate=function(e,t){return new this.Iterator(this,e,t)},f.prototype.Iterator=c,f.prototype.summary=function(){return this.root?this.root.summary():"()"},f.prototype.log=function(e,t,n,r){e=e||a.unicodeRound,t=t||this.logNode,n||(n=console.log,r=console),n=n.bind(r),this.root&&this.root.log(e,t,n,n)},f.prototype.logNode=function(e,t,n){t(" "+e.value)},f.logCharsets=a,f.prototype.Node=l,l.prototype.reduce=function(e,t,n,r,i,s){s=s||0;if(this.left){var o=this.left.length;t=this.left.reduce(e,t,n,r,i,s+1),n+=o}return t=e.call(r,t,this.value,n,i,this,s),n+=1,this.right&&(t=this.right.reduce(e,t,n,r,i,s+1)),t},l.prototype.reduceRight=function(e,t,n,r,i,s){return s=s||0,this.right&&(t=this.right.reduce(e,t,n,r,i,s+1),n-=this.right.length),t=e.call(r,t,this.value,this.value,i,this,s),n-=1,this.left&&(t=this.left.reduce(e,t,n,r,i,s+1)),t},l.prototype.touch=function(){this.length=1+(this.left?this.left.length:0)+(this.right?this.right.length:0),this.index=this.left?this.left.length:0},l.prototype.checkIntegrity=function(){var e=1;e+=this.left?this.left.checkIntegrity():0,e+=this.right?this.right.checkIntegrity():0;if(this.length!==e)throw new Error("Integrity check failed: "+this.summary());return e},l.prototype.getNext=function(){var e=this;if(e.right){e=e.right;while(e.left)e=e.left;return e}},l.prototype.getPrevious=function(){var e=this;if(e.left){e=e.left;while(e.right)e=e.right;return e}},l.prototype.summary=function(){var e=this.value||"-";return e+=" <"+this.length,!this.left&&!this.right?"("+e+")":"("+e+" "+(this.left?this.left.summary():"()")+", "+(this.right?this.right.summary():"()")+")"},l.prototype.log=function(e,t,n,r){var i=this,s;this.left&&this.right?s=e.intersection:this.left?s=e.branchUp:this.right?s=e.branchDown:s=e.through;var o;this.left&&this.left.log(e,t,function(n){o?r(e.strafe+" "+n):(o=!0,r(e.fromBelow+e.through+n))},function(t){r("  "+t)});var u;t(this,function(r){u?n((i.right?e.strafe:" ")+r):(u=!0,n(s+r))},function(n){r((i.left?e.strafe:" ")+n)});var a;this.right&&this.right.log(e,t,function(r){a?n("  "+r):(a=!0,n(e.fromAbove+e.through+r))},function(r){n(e.strafe+" "+r)})},c.prototype.next=function(){var e;this.prev?e=this.set.findLeastGreaterThan(this.prev.value):e=this.set.findLeast();if(!e)throw StopIteration;if(this.end!==undefined&&this.set.contentCompare(e.value,this.end)>=0)throw StopIteration;return this.prev=e,e.value}}})