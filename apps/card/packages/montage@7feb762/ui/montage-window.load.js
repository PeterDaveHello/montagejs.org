montageDefine("7feb762","ui/montage-window",{dependencies:["montage"],factory:function(e,t,n){var r=e("montage").Montage,i=t.MontageWindow=r.create(r,{_application:{value:null},application:{get:function(){return this._application},set:function(e){this._application===null&&(this._application=e,this.focused&&this._setFocusedWindow(this))}},_window:{value:null},window:{get:function(){return this._window},set:function(e){if(this._window===null){var t=e.document.body;this._window=e,e.addEventListener("beforeunload",this,!0),e.addEventListener("focus",this,!0),e.addEventListener("mousedown",this,!0),t.getAttribute("tabIndex")===null&&(t.setAttribute("tabIndex",-1),t.focus())}}},document:{get:function(){return this._window.document}},_component:{value:null},component:{get:function(){return this._component},set:function(e){this._component===null&&(this._component=e)}},title:{get:function(){return this.document.title},set:function(e){this.document.title=e}},focused:{value:!1},focus:{value:function(){this._window&&this._window.focus()}},_setFocusedWindow:{value:function(e){var t=this.application,n,r,i;if(t._multipleWindow){n=t.windows;for(i in n)r=n[i],r.window===e?r.focused!==!0&&(r.focused=!0,t.windowsSortOrder=="z-order"?(n.splice(i,1),n.unshift(r)):t.windowsSortOrder=="reverse-z-order"&&(n.splice(i,1),n.push(r))):r.focused=!1}else this.focused=!0}},closed:{get:function(){return this._window?this._window.closed:!1}},close:{value:function(){this._window&&this._window.close()}},resizeTo:{value:function(e,t){this._window&&this._window.resizeTo(e,t)}},moveTo:{value:function(e,t){this._window&&this._window.moveTo(e,t)}},captureFocus:{value:function(e){var t=this.application;if(!this.application){this.focused=!0;return}if(t.parentApplication)t.mainApplication.window.captureFocus(e);else{var n=(e.target.ownerDocument?e.target.ownerDocument.defaultView:null)||e.target.defaultView||e.target;this._setFocusedWindow(n)}}},captureMousedown:{value:function(e){this.captureFocus(e)}},captureBeforeunload:{value:function(e){var t=this.application,n=t.windows,r=t.attachedWindows,i;t.attachedWindows=[];for(var i in r)r[i].close();t.parentApplication&&(r=t.parentApplication.attachedWindows,i=r.indexOf(this),i!==-1&&r.splice(i,1),i=n.indexOf(this),i!==-1&&n.splice(i,1),this.window.removeEventListener("beforeunload",this,!0),this.close())}}})}})