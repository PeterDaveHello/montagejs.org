var Montage=require("montage/core/core").Montage,Component=require("montage/ui/component").Component;exports.Map=Montage.create(Component,{enterDocument:{value:function(e){e&&this._element.addEventListener("click",function(){this.classList.toggle("digit-Map-link--show")},!0)}}});