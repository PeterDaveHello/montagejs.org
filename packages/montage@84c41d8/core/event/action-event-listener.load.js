montageDefine("84c41d8","core/event/action-event-listener",{dependencies:["montage"],factory:function(e,n){var s=e("montage").Montage;n.ActionEventListener=s.specialize({handler:{value:null},action:{value:null},initWithHandler_action_:{value:function(e,n){return this.handler=e,this.action=n,this}},handleEvent:{value:function(e){if("function"==typeof this.action){var n=this.handler?this.handler:this;this.action.call(n,e)}else this.handler&&this.action&&this.handler[this.action](e)}},serializeProperties:{value:function(e){e.set("handler",this.handler,"reference"),e.set("action",this.action)}}},{blueprintModuleId:e("montage")._blueprintModuleIdDescriptor,blueprint:e("montage")._blueprintDescriptor})}});