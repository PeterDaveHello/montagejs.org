montageDefine("7feb762","ui/popup/confirm.reel/confirm",{dependencies:["montage","ui/component","ui/popup/popup.reel"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/popup/popup.reel").Popup,o=t.Confirm=r.create(i,{hasTemplate:{value:!0},title:{value:"Confirm"},msg:{value:"Are you sure?"},okLabel:{value:"OK"},cancelLabel:{value:"Cancel"},_popup:{value:null},popup:{set:function(e){this._popup=e},get:function(){return this._popup}},okCallback:{value:null},cancelCallback:{value:null},prepareForDraw:{value:function(){this.element.addEventListener("keyup",this,!1)}},draw:{value:function(){}},handleKeyup:{value:function(e){e.keyCode==13?this.handleOkAction(e):e.keyCode==27&&this.handleCancelAction(e)}},handleOkAction:{value:function(e){this.okCallback&&this.okCallback.call(this,e);var t=document.createEvent("CustomEvent");t.initCustomEvent("montage_confirm_ok",!0,!0,null),this.dispatchEvent(t),this.popup.hide()}},handleCancelAction:{value:function(e){this.cancelCallback&&this.cancelCallback.call(this,e);var t=document.createEvent("CustomEvent");t.initCustomEvent("montage_confirm_cancel",!0,!0,null),this.dispatchEvent(t),this.popup.hide()}},show:{value:function(e,t,n){var r=this.application._confirmPopup,i;r||(r=s.create(),this.popup=r,r.type="confirm",r.title="Confirmation",r.modal=!0,this.application._confirmPopup=r,i=o.create(),r.content=i),i=r.content,typeof e=="string"?(i.msg=e,i.okLabel="OK",i.cancelLabel="Cancel"):(i.msg=e.message,i.okLabel=e.okLabel||"OK",i.cancelLabel=e.cancelLabel||"Cancel"),i.okCallback=t||null,i.cancelCallback=n||null,r.show()}}})}})