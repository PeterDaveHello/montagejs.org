montageDefine("febb707","fast-map",{dependencies:["./shim","./fast-set","./generic-collection","./generic-map","./listen/property-changes"],factory:function(e,t,n){"use strict";function a(e,t,n,i){return this instanceof a?(t=t||Object.equals,n=n||Object.hash,i=i||Function.noop,this.contentEquals=t,this.contentHash=n,this.getDefault=i,this.store=new s(void 0,function(e,n){return t(e.key,n.key)},function(e){return n(e.key)}),this.length=0,this.addEach(e),void 0):new a(e,t,n,i)}e("./shim");var s=e("./fast-set"),i=e("./generic-collection"),r=e("./generic-map"),o=e("./listen/property-changes");n.exports=a,Object.addEach(a.prototype,i.prototype),Object.addEach(a.prototype,r.prototype),Object.addEach(a.prototype,o.prototype),a.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentHash,this.getDefault)},a.prototype.log=function(e,t){t=t||this.stringify,this.store.log(e,t)},a.prototype.stringify=function(e,t){return t+JSON.stringify(e.key)+": "+JSON.stringify(e.value)}}});