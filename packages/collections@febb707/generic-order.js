function GenericOrder(){throw Error("Can't construct. GenericOrder is a mixin.")}var Object=require("./shim-object");module.exports=GenericOrder,GenericOrder.prototype.equals=function(e,t){return t=t||this.contentEquals||Object.equals,this===e?!0:e?this.length===e.length&&this.zip(e).every(function(e){return t(e[0],e[1])}):!1},GenericOrder.prototype.compare=function(e,t){if(t=t||this.contentCompare||Object.compare,this===e)return 0;if(!e)return 1;var n=Math.min(this.length,e.length),a=this.zip(e).reduce(function(e,a,s){return 0===e?s>=n?e:t(a[0],a[1]):e},0);return 0===a?this.length-e.length:a};