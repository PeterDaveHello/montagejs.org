montageDefine("7feb762","ui/bluemoon/button-group.reel/button-group",{dependencies:["montage","ui/component-group.reel"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component-group.reel").ComponentGroup,s=t.ButtonGroup=r.create(i,{hasTemplate:{value:!0},_iconic:{value:!1},iconic:{get:function(){return this._iconic},set:function(e){this._iconic!==e&&(this._iconic=e,this.needsDraw=!0)}},prepareForDraw:{value:function(){this.element.classList.add("montage-ButtonGroup")}},draw:{value:function(){this._iconic?this.element.classList.add("iconic"):this.element.classList.remove("iconic")}}})}})