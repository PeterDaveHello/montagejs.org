montageDefine("4fab505","core/exception",{dependencies:["montage","core/logger"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/logger").logger("exception"),s=t.Exception=r.create(r,{message:{value:null},target:{value:null},method:{value:null},initWithMessage:{enumerable:!0,value:function(e){return this.initWithMessageTargetAndMethod(e,null,null)}},initWithMessageAndTarget:{enumerable:!0,value:function(e,t){return this.initWithMessageTargetAndMethod(e,t,null)}},initWithMessageTargetAndMethod:{enumerable:!0,value:function(e,t,n){return this.message=typeof e!="undefined"?e:null,Object.defineProperty(this,"message",{writable:!1}),this.target=typeof t!="undefined"?t:null,Object.defineProperty(this,"target",{writable:!1}),this.method=typeof n!="undefined"?n:null,Object.defineProperty(this,"method",{writable:!1}),this}},toString:{enumerable:!1,value:function(){return"Exception: "+(this.message!==null?this.message+" ":null)+(this.target!==null?this.target+" ":null)+(this.method!==null?this.method+" ":null)}}})}})