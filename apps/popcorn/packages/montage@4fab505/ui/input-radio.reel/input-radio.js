var Montage=require("montage").Montage,Component=require("ui/component").Component,NativeInputRadio=require("ui/native/input-radio.reel").InputRadio;exports.InputRadio=Montage.create(NativeInputRadio,{hasTemplate:{value:!0},willPrepareForDraw:{value:function(){NativeInputRadio.willPrepareForDraw.call(this),this.element.classList.add("montage-InputRadio")}}})