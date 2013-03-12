montageDefine("945c43f","core/event/key-manager",{dependencies:["montage","core/event/event-manager","core/event/mutable-event","core/event/key-manager"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/event/event-manager").defaultEventManager,s=e("core/event/mutable-event").MutableEvent,o={backspace:8,tab:9,enter:13,shift:16,control:17,alt:18,capslock:20,escape:27,space:32,pageup:33,pagedown:34,end:35,home:36,left:37,up:38,right:39,down:40,"delete":46,semicolon:186,colon:186,equal:187,plus:187,comma:188,less:188,minus:189,underscore:189,period:190,greater:190,slash:191,questionmark:191,backtick:192,tilde:192,openingsquarebracket:219,openingcurlybracket:219,backslash:220,pipe:220,closingsquarebracket:221,closingcurlybracket:221,singlequote:222,doublequote:222,clear:12,meta:91,contextmenu:93,numpad0:96,numpad1:97,numpad2:98,numpad3:99,numpad4:100,numpad5:101,numpad6:102,numpad7:103,numpad8:104,numpad9:105,multiply:106,add:107,subtract:109,decimal:110,divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,f13:124,f14:125,f15:126,f16:127,f17:128,f18:129,f19:130,f20:131,f21:132,f22:133,f23:134,f24:135},u=null,a={meta:17,control:57392,f17:63252,f18:63253,f19:63254,f20:63255,f21:63256,f22:63257,f23:63258,f24:63259},f={f13:44,f14:145,f15:19,f16:63251,f17:63252,f18:63253,f19:63254,f20:63255,f21:63256,f22:63257,f23:63258,f24:63259,meta:224},l={cmd:"command",ctl:"control",ctrl:"control",win:"meta",windows:"meta",opt:"alt",option:"alt"},c={meta:{name:"meta",value:1},alt:{name:"alt",value:2},control:{name:"control",value:4},shift:{name:"shift",value:8}},h={semicolon:";",colon:":",equal:"=",plus:"+",comma:",",less:"<",minus:"-",underscore:"_",period:".",greater:">",slash:"/",questionmark:"?",backtick:"`",tilde:"~",openingsquarebracket:"[",openingcurlybracket:"{",backslash:"\\",pipe:"|",closingsquarebracket:"]",closingcurlybracket:"}",singlequote:"'",doublequote:'"',multiply:"*",add:"+",subtract:"-",decimal:".",divide:"/"},p=null,d="keyPress",v="longKeyPress",m="keyRelease",g=t.KeyManager=r.create(r,{_keyEventsListenerInstalled:{value:!1},_composerKeyMap:{value:{}},_triggeredKeys:{value:{}},_longPressKeys:{value:{}},_cleanupTimeout:{value:null},_cleanupThreshold:{value:2e3},_longPressThreshold:{value:1e3},longPressThreshold:{get:function(){return this._longPressThreshold},set:function(e){e>0&&e!==this._longPressThreshold&&(this._longPressThreshold=e,this._longPressThreshold>this._cleanupThreshold-100?this._cleanupThreshold=this._longPressThreshold+100:this._cleanupThreshold=2e3)}},registerKey:{value:function(e){var t=this._normalizeKeySequence(e.keys),n,r=this._composerKeyMap,i,s,o=!1,u,a;if(t){n=this._convertKeysToModifiersAndKeyCode(t),i=r[n.modifiers],i||(i=r[n.modifiers]={}),s=i[n.keyCode];if(s){for(a in s){u=s[a];if(u.object===e){u.refCount++,o=!0;break}}o||s.push({object:e,refCount:1})}else i[n.keyCode]=[{object:e,refCount:1}];e._modifiers=n.modifiers,e._keyCode=n.keyCode,this._registerListeners()}}},unregisterKey:{value:function(e){var t=this._composerKeyMap,n,r,i,s;n=t[e._modifiers];if(n){r=n[e._keyCode];for(s in r)i=r[s],i.object===e&&(i.refCount--,i.refCount<=0&&(r.splice(s,1),r.length===0&&(delete n[e._keyCode],Object.keys(n).length===0&&(delete t[e._modifiers],Object.keys(t).length===0&&this._unregisterListeners()))))}}},didCreate:{value:function(){var e=navigator.userAgent,t;y&&console.warn("Rather than creating a new KeyManager object, you might want to use the default key manager"),e.match(/ firefox\//i)?this._firefox=!0:e.match(/ appleWebkit\//i)?(this._webkit=!0,e.match(/ chrome\//i)&&(this._chrome=!0)):e.match(/^opera\//i)&&(this._opera=!0),e.match(/macintosh/i)&&(this._mac=!0,this._opera&&(this._operaMac=!0)),this._mac?c.command=c.meta:c.command=c.control;if(this._operaMac)for(t in a)o[t]=a[t];if(this._firefox)for(t in f)o[t]=f[t];u={};for(var n in o){var t=o[n];u[t]===undefined&&(u[t]=n)}p={};for(var n in h){var t=h[n];p[t]===undefined&&(p[t]=n)}this._shiftKey=!1,this._altKey=!1,this._metaKey=!1,this._ctrlKey=!1}},captureKeydown:{value:function(e){var t,n,r,i=!1;this._preprocessKeyEvent(e),r=this._submap,r&&(t=this._keyCode,t&&r[t]&&(i=this._dispatchComposerKeyMatches(r[t],e)),!i&&e.keyIdentifier&&(n=o[e.keyIdentifier.toLowerCase()]||this._decodeKeyIdentifier(e.keyIdentifier),n&&n!==t&&r[n]&&this._dispatchComposerKeyMatches(r[n],e))),this._setupCleanupTimer()}},captureKeypress:{value:function(e){var t=e.charCode,n,r,i,s=!1;this._preprocessKeyEvent(e),i=this._submap,i&&(n=this._keyCode,n&&i[n]&&(s=this._dispatchComposerKeyMatches(i[n],e)),!s&&t&&t!==n&&i[t]&&(s=this._dispatchComposerKeyMatches(i[t],e)),!s&&e.keyIdentifier&&(r=o[e.keyIdentifier.toLowerCase()]||this._decodeKeyIdentifier(e.keyIdentifier),r&&r!==n&&i[r]&&this._dispatchComposerKeyMatches(i[r],e))),this._setupCleanupTimer()}},captureKeyup:{value:function(e){var t=e.keyCode,n,r,i=0,s,u,a=!1;this._preprocessKeyEvent(e),r=this._submap,r&&(t=this._keyCode,t&&r[t]&&(a=this._dispatchComposerKeyMatches(r[t],e),i=t),!a&&e.keyIdentifier&&(n=o[e.keyIdentifier.toLowerCase()]||this._decodeKeyIdentifier(e.keyIdentifier),n&&n!==i&&r[n]&&(a=this._dispatchComposerKeyMatches(r[n],e))));if(!a)for(u in this._triggeredKeys)s=this._triggeredKeys[u],(s._keyCode==t||s._keyCode==n)&&this._dispatchComposerKeyMatches([s],e);this._cleanup()}},_normalizeKeySequence:{value:function(e){var t=[c.meta.name,c.alt.name,c.control.name,c.shift.name],n=e.toLowerCase().replace(/ /g,"").replace(/\+\+/g,"+add").split("+"),r=n.length,i,s=[],u;for(u=0;u<r-1;u++){i=n[u],i=l[i]||i,i=c[i];if(!i)return console.warn("Invalid key sequence (modifier):",e),null;s.push(i.name)}return s.sort(function(e,n){return t.indexOf(e)-t.indexOf(n)}),i=n[r-1],i.length>1&&!o[i]?(console.warn("Invalid key sequence (key):",e,i),null):s.length?s.join("+")+"+"+i:i}},_preprocessKeyEvent:{value:function(e){var t=this,n=e.type,r=e.keyCode,i,s;this._operaMac&&this._operaModifierTimeout&&(clearTimeout(this._operaModifierTimeout),this._operaModifierTimeout=null);if(n=="keydown"||n=="keyup")this._operaMac?(s=n=="keydown",r==o.shift?this._shiftKey=s:r==o.alt?this._altKey=s:r==o.meta?this._mac&&(this._metaKey=s):r==o.control&&(this._ctrlKey=s),n=="keyup"&&(this._operaModifierTimeout=setTimeout(function(){t._shiftKey=!1,t._altKey=!1,t._metaKey=!1,t._ctrlKey=!1,t._operaModifierTimeout=null},this._cleanupThreshold+1e3))):(this._shiftKey=e.shiftKey,this._altKey=e.altKey,this._metaKey=e.metaKey,this._ctrlKey=e.ctrlKey);this._mac&&this._webkit&&r==o.contextmenu&&(this._metaKey=!1),this._chrome&&!this._shiftKey&&r==o.plus&&e.keyIdentifier=="U+002B"&&(e.keyCode=o.add),this._modifiers=i=(this._shiftKey?c.shift.value:0)+(this._altKey?c.alt.value:0)+(this._metaKey?c.meta.value:0)+(this._ctrlKey?c.control.value:0),this._submap=this._composerKeyMap[i],this._keyCode=e.keyCode,this._keyIdentifier=e.keyIdentifier}},_registerListeners:{value:function(){this._keyEventsListenerInstalled||(window.addEventListener("keydown",this,!0),window.addEventListener("keypress",this,!0),window.addEventListener("keyup",this,!0),this._keyEventsListenerInstalled=!0)}},_unregisterListeners:{value:function(){this._keyEventsListenerInstalled&&(window.removeEventListener("keydown",this,!0),window.removeEventListener("keypress",this,!0),window.removeEventListener("keyup",this,!0),this._keyEventsListenerInstalled=!1)}},_dispatchComposerKeyMatches:{value:function(e,t){var n=this,r=!1,i=t.type=="keyup",o=t.type=="keydown",u=i?m:d,a=e.length,f,l,c,h;for(h=0;h<a&&!r;h++){f=e[h].object||e[h];var p=t.target,g=f.element,y=f.element===window;while(!y){y=p===g;if(p==document)break;p=p.parentElement,p||(p=document)}if(!y)continue;if(i){c=Object.keys(this._triggeredKeys);if(c.indexOf(f.uuid)==-1)continue;f._longPressTimeout&&(clearTimeout(f._longPressTimeout),f._longPressTimeout=null,delete this._longPressKeys[f.uuid])}else{if(o)delete this._triggeredKeys[f.uuid];else if(this._triggeredKeys[f.uuid])continue;f._shouldDispatchLongPress&&!f._longPressTimeout&&(f._longPressTimeout=setTimeout(function(){var e;f._longPressTimeout=null,e=document.createEvent("CustomEvent"),e.initCustomEvent(v,!0,!0,null),e.activeElement=t.target,e=s.fromEvent(e),f.dispatchEvent(e),delete n._longPressKeys[f.uuid]},this._longPressThreshold),this._longPressKeys[f.uuid]=f)}l=document.createEvent("CustomEvent"),l.initCustomEvent(u,!0,!0,null),l.activeElement=t.target,l=s.fromEvent(l),this._opera&&(l.type=u),f.dispatchEvent(l),l.defaultPrevented&&t.preventDefault(),l.propagationStopped&&(t.stopPropagation(),r=!0),i?delete this._triggeredKeys[f.uuid]:this._triggeredKeys[f.uuid]=f}if(r)for(h=i?h:0;h<a;h++)f=e[h].object||e[h],delete this._triggeredKeys[f.uuid],f._longPressTimeout&&(clearTimeout(f._longPressTimeout),f._longPressTimeout=null,delete this._longPressKeys[f.uuid]);return r}},_cleanup:{value:function(){var e,t;this._cleanupTimeout&&clearTimeout(this._cleanupTimeout);for(t in this._triggeredKeys)this._triggeredKeys.hasOwnProperty(t)&&delete this._triggeredKeys[t];for(t in this._longPressKeys)this._longPressKeys.hasOwnProperty(t)&&(e=this._longPressKeys[t],clearTimeout(e._longPressTimeout),e._longPressTimeout=null,delete this._longPressKeys[t]);this._cleanupTimeout=null}},_setupCleanupTimer:{value:function(){var e=this;this._cleanupTimeout&&clearTimeout(this._cleanupTimeout),this._cleanupTimeout=setTimeout(function(){e._cleanup()},this._cleanupThreshold)}},_convertKeysToModifiersAndKeyCode:{value:function(e){var t,n,r,i=0,s=0;e=e.toLowerCase().replace(/ /g,"").replace(/\+\+/g,"+add").split("+"),t=e.length;for(r=0;r<t-1;r++){n=e[r],n=l[n]||n,n=c[n];if(!n)return console.warn("Invalid Key sequence:",e),null;s|=n.value}return n=e[t-1],n=p[n]||n,n=h[n]||n,n.length>1?(i=o[n],n=c[l[n]||n],n&&(s|=n.value)):i=n.toUpperCase().charCodeAt(0),{modifiers:s,keyCode:i}}},_decodeKeyIdentifier:{value:function(e){if(e.match(/U\+/))return parseInt(e.substring(2),16)}}}),y=null;r.defineProperty(t,"defaultKeyManager",{get:function(){return y||(y=g.create()),y}})}})