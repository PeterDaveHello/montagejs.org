var Montage=require("montage").Montage,Converter=require("core/converter/converter").Converter,Validator=require("core/converter/converter").Validator,isNumber=require("core/converter/converter").isNumber,isDef=require("core/converter/converter").isDef,SCALED_NUMERIC_RE_=/^([\-]?\d+\.?\d*)([K,M,G,T,P,k,m,u,n]?)[B]?$/,NUMERIC_SCALE_PREFIXES_=["P","T","B","M","K","","m","u","n"],NUMERIC_SCALES_SI_=exports.NUMERIC_SCALES_SI_={"":1,n:1e-9,u:1e-6,m:.001,k:1e3,K:1e3,M:1e6,B:1e9,T:1e12,P:1e15},NUMERIC_SCALES_BINARY_=exports.NUMERIC_SCALES_BINARY_={"":1,n:Math.pow(1024,-3),u:Math.pow(1024,-2),m:1/1024,k:1024,K:1024,M:Math.pow(1024,2),G:Math.pow(1024,3),T:Math.pow(1024,4),P:Math.pow(1024,5)},_numericValueToString=exports._numericValueToString=function(e,n,t,s,a){a=a||NUMERIC_SCALE_PREFIXES_;var o=e,i="",r=1;0>e&&(e=-e);for(var l=0;a.length>l;l++){var p=a[l];if(r=n[p],e>=r||1>=r&&e>.1*r){i=p;break}}i?s&&(i+=s):r=1;var c=Math.pow(10,isDef(t)?t:2);return Math.round(o/r*c)/c+i},_stringToNumericValue=function(e,n){var t=e.match(SCALED_NUMERIC_RE_);return t?t[1]*n[t[2]]:0/0},isConvertableScaledNumber=function(e){return SCALED_NUMERIC_RE_.test(e)},stringToNumericValue=exports.stringToNumericValue=function(e){return e.endsWith("B")?_stringToNumericValue(e,NUMERIC_SCALES_BINARY_):_stringToNumericValue(e,NUMERIC_SCALES_SI_)},numericValueToString=exports.numericValueToString=function(e,n){return _numericValueToString(e,NUMERIC_SCALES_SI_,n)},NumberValidator=exports.NumberValidator=Validator.specialize({allowFloat:{value:!0},allowNegative:{value:!0},validate:{value:function(e){var n;return e=e||"",e=e.replace(/,/g,""),n=isNumber(e)?e:this.allowFloat===!0?parseFloat(e,10):parseInt(e,10),isNaN(n)?{message:"Invalid Number"}:n}}}),NumberConverter=exports.NumberConverter=Converter.specialize({allowPartialConversion:{value:!1},validator:{value:new NumberValidator},shorten:{value:null},decimals:{value:2},round:{value:null},_reg:{value:/(\d+)(\d{3})/},allowFloat:{value:!0},allowNegative:{value:!0},_makeReadable:{value:function(e,n,t){n=n||",",t=t||".";for(var s=(""+e).split("."),a=s[0],o=s.length>1?t+s[1]:"";this._reg.test(a);)a=a.replace(this._reg,"$1"+n+"$2");return a+o}},convert:{value:function(e){if(this.shorten)return numericValueToString(e,this.decimals);var n;if(this.round)n=""+Number(Math.round(e));else{var t=Math.pow(10,this.decimals||2),s=1;n=Number(Math.round(e/s*t)/t)}return this._makeReadable(n)}},revert:{value:function(e){this.validator.allowFloat=this.allowFloat,this.validator.allowNegative=this.allowNegative;var n=this.validator.validate(e);if(isNumber(n))return n;throw Error(n.message)}}});