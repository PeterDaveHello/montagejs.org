function Heap(e,t,n){return this instanceof Heap?(this.contentEquals=t||Object.equals,this.contentCompare=n||Object.compare,this.content=[],this.length=0,this.addEach(e),void 0):new Heap(e,t,n)}var ArrayChanges=require("./listen/array-changes"),Shim=require("./shim"),GenericCollection=require("./generic-collection"),MapChanges=require("./listen/map-changes"),RangeChanges=require("./listen/range-changes"),PropertyChanges=require("./listen/property-changes");module.exports=Heap,Object.addEach(Heap.prototype,GenericCollection.prototype),Object.addEach(Heap.prototype,PropertyChanges.prototype),Object.addEach(Heap.prototype,RangeChanges.prototype),Object.addEach(Heap.prototype,MapChanges.prototype),Heap.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentCompare)},Heap.prototype.push=function(e){this.content.push(e),this.float(this.content.length-1),this.length++},Heap.prototype.pop=function(){var e=this.content[0],t=this.content.pop();return this.content.length>0&&(this.content.set(0,t),this.sink(0)),this.length--,e},Heap.prototype.add=function(e){this.push(e)},Heap.prototype.indexOf=function(e){for(var t=0;this.length>t;t++)if(this.contentEquals(this.content[t],e))return t;return-1},Heap.prototype.delete=function(e){var t=this.indexOf(e);if(-1===t)return!1;var n=this.content.pop();if(t===this.content.length)return!0;this.content.set(t,n);var a=this.contentCompare(n,e);return a>0?this.float(t):0>a&&this.sink(t),this.length--,!0},Heap.prototype.peek=function(){return this.length?this.content[0]:void 0},Heap.prototype.max=function(){return this.peek()},Heap.prototype.one=function(){return this.peek()},Heap.prototype.float=function(e){for(var t=this.content[e];e>0;){var n=Math.floor((e+1)/2)-1,a=this.content[n];if(!(0>this.contentCompare(a,t)))break;this.content.set(n,t),this.content.set(e,a),e=n}},Heap.prototype.sink=function(e){for(var t,n,a,s,i,r,o=this.content.length,l=this.content[e];;){if(s=2*(e+1),a=s-1,r=!1,o>a){var t=this.content[a],c=this.contentCompare(t,l);c>0&&(i=a,r=!0)}if(o>s){var n=this.content[s],c=this.contentCompare(n,r?t:l);c>0&&(i=s,r=!0)}if(!r)break;this.content.set(e,this.content[i]),this.content.set(i,l),e=i}},Heap.prototype.clear=function(){this.content.clear(),this.length=0},Heap.prototype.reduce=function(e,t){var n=arguments[2];return this.content.reduce(function(t,a,s){return e.call(n,t,a,s,this)},t,this)},Heap.prototype.reduceRight=function(){var e=arguments[2];return this.content.reduceRight(function(t,n,a){return callback.call(e,t,n,a,this)},basis,this)},Heap.prototype.makeObservable=function(){this.content.addRangeChangeListener(this,"content"),this.content.addBeforeRangeChangeListener(this,"content"),this.content.addMapChangeListener(this,"content"),this.content.addBeforeMapChangeListener(this,"content")},Heap.prototype.handleContentRangeChange=function(e,t,n){this.dispatchRangeChange(e,t,n)},Heap.prototype.handleContentRangeWillChange=function(e,t,n){this.dispatchBeforeRangeChange(e,t,n)},Heap.prototype.handleContentMapChange=function(e,t){this.dispatchMapChange(t,e)},Heap.prototype.handleContentMapWillChange=function(e,t){this.dispatchBeforeMapChange(t,e)};