montageDefine("b8d1a32","composer/key-composer",{dependencies:["montage","composer/composer"],factory:function(n,s){var e=n("montage").Montage,a=n("composer/composer").Composer,t="keyPress",p="longKeyPress",o="keyRelease",l=s.KeyComposer=a.specialize({_isLoaded:{value:!1},_shouldDispatchEvent:{value:!1},shouldDispatchLongPress:{value:!1},_longPressTimeout:{value:null},_keyRegistered:{value:!1},_keys:{value:null},keys:{get:function(){return this._keys},set:function(n){this._keyRegistered?(c.defaultKeyManager.unregisterKey(this),this._keys=n,c.defaultKeyManager.registerKey(this)):this._keys=n}},_identifier:{value:null},identifier:{get:function(){return this._identifier},set:function(n){this._identifier=n}},load:{value:function(){this._isLoaded=!0,this._shouldDispatchEvent&&!this._keyRegistered&&(c.defaultKeyManager.registerKey(this),this._keyRegistered=!0)}},unload:{value:function(){this._isLoaded=!1,c.defaultKeyManager.unregisterKey(this),this._keyRegistered=!1}},addEventListener:{value:function(n,s,e){var l=this.component;a.addEventListener.call(this,n,s,e),(n==t||n==p||n==o)&&(this._shouldDispatchEvent=!0,n==p&&(this._shouldDispatchLongPress=!0),this._isLoaded?this._keyRegistered||(c.defaultKeyManager.registerKey(this),this._keyRegistered=!0):l&&"function"!=typeof l.addComposer&&(this.element||(this.element=window),this.load()))}},constructor:{value:function(){a.constructor.call(this)}},deserializedFromTemplate:{value:function(){var n=this.component;null===this.identifier&&(this.identifier=e.getInfoForObject(this).label),n&&("function"==typeof n.addComposer?n.addComposer(this):this._isLoaded||(this.element||(this.element=window),this.load()))}}},{createKey:{value:function(n,s,e){var a=this;return this===l&&(a=new l),e||(e=n.identifier?n.identifier+s.toLowerCase().replace(/[ +]/g).toCapitalized():s.toLowerCase().replace(/[ +]/g)),a.keys=s,a.identifier=e,n.addComposer(a),a}},createGlobalKey:{value:function(n,s,e){var a=this;return this===l&&(a=new l),a.keys=s,a.identifier=e,n.addComposerForElement(a,window),a}}}),i=null,c=e.specialize({_defaultKeyManager:{value:null},_loadingDefaultKeyManager:{value:!1},_keysToRegister:{value:[]},constructor:{value:function(){}},registerKey:{value:function(s){var e=this;this._defaultKeyManager?this._defaultKeyManager.registerKey(s):(this._keysToRegister.push(s),this._loadingDefaultKeyManager||(this._loadingDefaultKeyManager=!0,n.async("core/event/key-manager").then(function(n){var s=e._defaultKeyManager=n.defaultKeyManager;e._keysToRegister.forEach(function(n){s.registerKey(n)}),e._keysToRegister.length=0}).done()))}},unregisterKey:{value:function(n){this._defaultKeyManager&&this._defaultKeyManager.unregisterKey(n)}}},{defaultKeyManager:{get:function(){return i||(i=new c),this._defaultKeyManager?this._defaultKeyManager:i}}})}});