montageDefine("b8d1a32","core/extras/object",{dependencies:["core/core","collections/weak-map","frb"],factory:function(e){e("core/core"),e("collections/weak-map"),Object.defineProperty(Object,"getPropertyDescriptor",{value:function(e,n){var s,t=e;do s=Object.getOwnPropertyDescriptor(t,n);while(!s&&(t=t.__proto__||Object.getPrototypeOf(t)));return s},writable:!0,configurable:!0}),Object.defineProperty(Object,"getPrototypeAndDescriptorDefiningProperty",{value:function(e,n){var s,t=e;if(n){do s=Object.getOwnPropertyDescriptor(t,n);while(!s&&(t=t.__proto__||Object.getPrototypeOf(t)));return{prototype:t,propertyDescriptor:s}}},writable:!0,configurable:!0}),Object.defineProperty(Object.prototype,"clear",{value:function(){for(var e=Object.keys(this),n=e.length;n;)n--,delete this[e[n]];return this},writable:!0,configurable:!0}),Object.defineProperty(Object,"defineBinding",{value:function(n,s,t){var a=Error.stackTraceLimit;Error.stackTraceLimit=2,console.warn("Object.defineBinding deprecated.  See the comment below this warning for migration instructions.",Error("deprecated").stack),Error.stackTraceLimit=a;var o=e("frb");t.source=t.boundObject,t.oneway?t["<-"]=t.boundObjectPropertyPath:t["<->"]=t.boundObjectPropertyPath,t.boundValueMutator&&(t.convert=t.boundValueMutator),o.defineBinding(n,s,t)}}),Object.defineProperty(Object,"deleteBinding",{value:function(n,s){var t=e("frb");t.cancelBinding(n,s)}})}});