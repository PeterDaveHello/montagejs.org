montageDefine("dc1ff29","core/document-part",{dependencies:["montage","core/logger","core/promise","core/event/event-manager"],factory:function(e,t){var n=e("montage").Montage,r=(e("core/logger").logger("document-part"),e("core/promise").Promise),i=e("core/event/event-manager").defaultEventManager,a=n.specialize({template:{value:null},fragment:{value:null},objects:{value:null},childComponents:{value:null},parameters:{value:null},constructor:{value:function a(){this.super()}},initWithTemplateAndFragment:{value:function(e,t){this.template=e,this.fragment=t,this.objects=null,this.childComponents=[],this.parameters=null}},startActingAsTopComponent:{value:function(){this.fragment&&i.registerEventHandlerForElement(this,this.fragment)}},stopActingAsTopComponent:{value:function(){this.fragment&&i.unregisterEventHandlerForElement(this.fragment)}},addChildComponent:{value:function(e){-1==this.childComponents.indexOf(e)&&this.childComponents.push(e)}},removeChildComponent:{value:function(e){var t=this.childComponents,n=t.indexOf(e);n>-1&&(t.splice(n,1),e._parentComponent=null,e._alternateParentComponent=null)}},_addToDrawList:{value:function(){}},_componentTreeLoadedDeferred:{value:null},loadComponentTree:{value:function(){var e,t=this._componentTreeLoadedDeferred;return t||(t=r.defer(),this._componentTreeLoadedDeferred=t,e=[],this.childComponents.forEach(function(t){e.push(t.loadComponentTree())}),r.all(e).then(function(){t.resolve()},t.reject).done()),t.promise}}});t.DocumentPart=a}});