montageDefine("b8d1a32","core/gate",{dependencies:["montage","core/logger"],factory:function(e,n){var s=e("montage").Montage,t=e("core/logger").logger("gate");n.Gate=s.specialize({init:{enumerable:!1,value:function(){return this.reset(),this}},initWithDelegate:{enumerable:!1,value:function(e){return this.reset(),this.delegate=e,this}},initWithDescriptor:{enumerable:!1,value:function(e){var n;this.reset();for(n in e)this.setField(n,e[n].value);return this}},count:{value:0},table:{value:null},getField:{enumerable:!1,value:function(e){var n=this.table;return!n||n[e]}},setField:{enumerable:!1,value:function(e,n){var s,a=this.table,o=this.count;a=a?a:this.table={},s=a[e],void 0!==s||n?s!==void 0&&s!==n?n?this.count--:this.count++:n&&t.error(this,e+" was not set before."):this.count++,a[e]=!!n,0===this.count&&o>0?this.callDelegateMethod(!0):0===o&&this.count>0&&this.callDelegateMethod(!1)}},removeField:{enumerable:!1,value:function(e){var n=this.table,s=n[e];void 0===s||s||this.count--,delete n[e]}},delegate:{enumerable:!1,value:null},callDelegateMethod:{value:function(e){var n;this.delegate&&"function"==typeof(n=this.delegate["gateDidBecome"+(e?"True":"False")])&&n.call(this.delegate,this)},enumerable:!1},value:{enumerable:!1,get:function(){return 0===this.count}},reset:{enumerable:!1,value:function(){this.table={},this.count=0}},toString:{value:function(){var e,n,s=this._fields,t="";for(e=0;n=s[e];e++)t+=n+"["+(this._value&s[n])+"], ";return t}}})}});