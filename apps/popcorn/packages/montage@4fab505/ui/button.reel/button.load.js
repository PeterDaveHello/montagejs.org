montageDefine("4fab505","ui/button.reel/button",{dependencies:["montage","ui/component","ui/native/button.reel"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/native/button.reel").Button;t.Button=r.create(s,{hasTemplate:{value:!0},willPrepareForDraw:{value:function(){s.willPrepareForDraw.call(this),this.element.classList.add("montage-Button")}}})}})