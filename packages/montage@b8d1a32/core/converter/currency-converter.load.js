montageDefine("b8d1a32","core/converter/currency-converter",{dependencies:["montage","core/converter/converter","core/converter/number-converter"],factory:function(e,n){e("montage").Montage,e("core/converter/converter");var t=e("core/converter/number-converter").numericValueToString,s=e("core/converter/number-converter").NumberConverter,a=function(e,n,s,a){var o=t(e,s);return n=n||"$",0>e&&a&&(o="("+o.substring(1,o.length)+")"),o=o+" "+n};n.CurrencyConverter=s.specialize({currency:{value:"$"},decimals:{value:2},useParensForNegative:{value:!1},convert:{value:function(e){return a(e,this.currency,this.decimals,this.useParensForNegative)}}})}});