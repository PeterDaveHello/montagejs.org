montageDefine("7feb762","ui/slot.reel/slot",{dependencies:["montage","ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component;t.Slot=r.create(i,{hasTemplate:{enumerable:!1,value:!1},didCreate:{value:function(){this.content=null}},delegate:{value:null},_content:{value:null},prepareForDraw:{value:function(){this.element.classList.add("montage-Slot")}},content:{get:function(){return this._content},set:function(e){var t;e&&typeof e.needsDraw!="undefined"?(e.element?t=e.element:(t=document.createElement("div"),t.id="appendDiv",this.delegate&&typeof this.delegate.slotElementForComponent=="function"&&(t=this.delegate.slotElementForComponent(this,e,t))),Object.getPropertyDescriptor(i,"domContent").set.call(this,t),e.setElementWithParentComponent(t,this),e.needsDraw=!0):Object.getPropertyDescriptor(i,"domContent").set.call(this,e),this._content=e,this.needsDraw=!0}},contentDidChange:{value:function(e,t){this.delegate&&typeof this.delegate.slotDidSwitchContent=="function"&&this.delegate.slotDidSwitchContent(this,e,e?e.controller:null,t,t?t.controller:null)}}})}})