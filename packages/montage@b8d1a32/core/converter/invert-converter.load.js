montageDefine("b8d1a32","core/converter/invert-converter",{dependencies:["montage","core/converter/converter"],factory:function(e,n){e("montage").Montage;var t=e("core/converter/converter").Converter;n.InvertConverter=t.specialize({convert:{value:function(e){return!e}},revert:{value:function(e){return!e}}})}});