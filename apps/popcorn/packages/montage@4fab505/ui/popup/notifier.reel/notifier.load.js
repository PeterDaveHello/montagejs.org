montageDefine("4fab505","ui/popup/notifier.reel/notifier",{dependencies:["montage","ui/component","ui/popup/popup.reel"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/popup/popup.reel").Popup,o=t.Notifier=r.create(i,{_msgEl:{value:null},_msg:{value:null},msg:{get:function(){return this._msg},set:function(e){this._msg!==e&&(this._msg=e,this.needsDraw=!0)}},details:{value:null},draw:{value:function(){this._msgEl.textContent=this.msg}},show:{value:function(e,t,n){var r=this.application._notifyPopup,i;r||(r=s.create(),this.popup=r,r.type="notify",this.application._notifyPopup=r,i=o.create(),r.content=i),i=r.content,i.msg=e;if(!n){var u=window.innerWidth;n={top:1,right:10}}r.position=n,t&&(t=parseInt(t,10)||3e3,r.autoHide=t),r.show()}},hide:{value:function(){var e=this.application._notifyPopup;e&&e.hide()}}})}})