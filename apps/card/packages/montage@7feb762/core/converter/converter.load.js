montageDefine("7feb762","core/converter/converter",{dependencies:["montage"],factory:function(e,t,n){var r=e("montage").Montage,i="[object Function]",s="[object Boolean]",o="[object Number]",u="[object String]",a="[object Array]",f="[object Date]",l=Object.prototype.toString,c=function(e){return l.call(e)===o};t.isNumber=c;var h=function(e){return e&&typeof e!="undefined"};t.isDef=h;var p=t.Validator=r.create(r,{validate:{value:null}}),d=t.Converter=r.create(r,{allowPartialConversion:{value:!0},convert:{enumerable:!1,value:null},revert:{enumerable:!1,value:null}})}})