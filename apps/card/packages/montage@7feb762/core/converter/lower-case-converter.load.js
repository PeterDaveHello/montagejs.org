montageDefine("7feb762","core/converter/lower-case-converter",{dependencies:["montage","core/converter/converter"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/converter/converter").Converter;t.LowerCaseConverter=r.create(i,{_convert:{value:function(e){return e&&typeof e=="string"?e.toLowerCase?e.toLowerCase():e:e}},convert:{value:function(e){return this._convert(e)}},revert:{value:function(e){return this._convert(e)}}})}})