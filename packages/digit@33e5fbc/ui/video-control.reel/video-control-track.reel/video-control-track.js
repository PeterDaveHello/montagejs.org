var Montage=require("montage").Montage,AbstractSlider=require("montage/ui/base/abstract-slider").AbstractSlider,Promise=require("montage/core/promise").Promise;exports.VideoControlTrack=Montage.create(AbstractSlider,{didCreate:{value:function(){AbstractSlider.didCreate.call(this),this.addOwnPropertyChangeListener("time",this),this.defineBinding("max",{"<-":"controller.duration",source:this}),this.defineBinding("time",{"<-":"controller.position",source:this})}},handleThumbTranslateStart:{value:function(){AbstractSlider.handleThumbTranslateStart.apply(this,arguments),this.controller.status===this.controller.PLAYING?(this._wasPlaying=!0,this.controller.pause()):this._wasPlaying=!1}},handleThumbTranslate:{value:function(){AbstractSlider.handleThumbTranslate.apply(this,arguments)}},handleThumbTranslateEnd:{value:function(){AbstractSlider.handleThumbTranslateEnd.apply(this,arguments),this._wasPlaying&&this.controller.play()}},_sliderThumbTrackElement:{value:null},_sliderThumbElement:{value:null},time:{value:0},formattedTime:{value:0},controller:{value:null},handleTimeChange:{value:function(){this.formattedTime=this._prettyTime(this.time)}},_wasPlaying:{value:!1},_prettyTime:{value:function(e){var t,n,a;return e=parseInt(e,10),isNaN(e)||0>e?"":(t=e%60,n=Math.floor(e/60)%60,a=Math.floor(e/3600),(a>0?a+":":"")+(10>n?n:n)+":"+(10>t?"0"+t:t))}}});