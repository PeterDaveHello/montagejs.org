var Montage=require("montage").Montage,logger=require("core/logger").logger("exception"),Exception=exports.Exception=Montage.specialize({message:{value:null},target:{value:null},method:{value:null},initWithMessage:{enumerable:!0,value:function(e){return this.initWithMessageTargetAndMethod(e,null,null)}},initWithMessageAndTarget:{enumerable:!0,value:function(e,n){return this.initWithMessageTargetAndMethod(e,n,null)}},initWithMessageTargetAndMethod:{enumerable:!0,value:function(e,n,s){return this.message=e!==void 0?e:null,Object.defineProperty(this,"message",{writable:!1}),this.target=n!==void 0?n:null,Object.defineProperty(this,"target",{writable:!1}),this.method=s!==void 0?s:null,Object.defineProperty(this,"method",{writable:!1}),this}},toString:{enumerable:!1,value:function(){return"Exception: "+(null!==this.message?this.message+" ":null)+(null!==this.target?this.target+" ":null)+(null!==this.method?this.method+" ":null)}}});