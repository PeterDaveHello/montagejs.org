montageDefine("d2712f2","core/converter/converter",{dependencies:["montage"],factory:function(e,t){var n=e("montage").Montage,i="[object Number]",a=Object.prototype.toString,s=function(e){return a.call(e)===i};t.isNumber=s;var o=function(e){return e&&e!==void 0};t.isDef=o,t.Validator=n.specialize({validate:{value:null}}),t.Converter=n.specialize({allowPartialConversion:{value:!0},convert:{enumerable:!1,value:null},revert:{enumerable:!1,value:null},blueprintModuleId:e("montage")._blueprintModuleIdDescriptor,blueprint:e("montage")._blueprintDescriptor})}});