montageDefine("b8d1a32","core/converter/upper-case-converter",{dependencies:["montage","core/converter/converter"],factory:function(e,n){e("montage").Montage;var t=e("core/converter/converter").Converter;n.UpperCaseConverter=t.specialize({_convert:{value:function(e){return e&&"string"==typeof e?e.toUpperCase?e.toUpperCase():e:e}},convert:{value:function(e){return this._convert(e)}},revert:{value:function(e){return this._convert(e)}}})}});