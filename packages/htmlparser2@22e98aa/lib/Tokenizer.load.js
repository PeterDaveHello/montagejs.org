montageDefine("22e98aa","lib/Tokenizer",{dependencies:[],factory:function(e,t,n){function a(e){return" "===e||"	"===e||"\r"===e||"\n"===e}function s(e,t){this._state=i,this._buffer="",this._sectionStart=0,this._index=0,this._options=e,this._special=0,this._cbs=t,this._running=!0}n.exports=s;var r=0,i=r++,o=r++,l=r++,c=r++,p=r++,h=r++,u=r++,d=r++,g=r++,m=r++,f=r++,v=r++,y=r++,b=r++,w=r++,L=r++,C=r++,x=r++,M=r++,_=r++,z=r++,S=r++,k=r++,E=r++,j=r++,T=r++,B=r++,O=r++,P=r++,A=r++,D=r++,I=r++,N=r++,R=r++,q=r++,F=r++,U=r++,W=r++,H=r++,G=r++,Y=r++,V=r++,K=r++,X=r++,Z=r++,J=r++,$=r++,Q=r++,et=r++;s.prototype.write=function(e){for(this._buffer+=e;this._index<this._buffer.length&&this._running;){var t=this._buffer.charAt(this._index);this._state===i?"<"===t&&(this._emitIfToken("text"),this._state=o,this._sectionStart=this._index):this._state===o?"/"===t?this._state=c:">"===t||this._special>0?this._state=i:a(t)||("!"===t?(this._state=b,this._sectionStart=this._index+1):"?"===t?(this._state=L,this._sectionStart=this._index+1):this._options&&this._options.xmlMode||"s"!==t&&"S"!==t?(this._state=l,this._sectionStart=this._index):(this._state=A,this._sectionStart=this._index)):this._state===l?"/"===t?(this._emitToken("opentagname"),this._cbs.onselfclosingtag(),this._state=h):">"===t?(this._emitToken("opentagname"),this._cbs.onopentagend(),this._state=i,this._sectionStart=this._index+1):a(t)&&(this._emitToken("opentagname"),this._state=u):this._state===c?a(t)||(">"===t?this._state=i:this._special>0?("s"===t||"S"===t)&&(this._state=D):(this._state=p,this._sectionStart=this._index)):this._state===p?">"===t?(this._emitToken("closetag"),this._state=i,this._sectionStart=this._index+1,this._special=0):a(t)&&(this._emitToken("closetag"),this._state=h,this._special=0):this._state===h?">"===t&&(this._state=i,this._sectionStart=this._index+1):this._state===u?">"===t?(this._state=i,this._cbs.onopentagend(),this._sectionStart=this._index+1):"/"===t?(this._cbs.onselfclosingtag(),this._state=h):a(t)||(this._state=d,this._sectionStart=this._index):this._state===d?"="===t?(this._emitIfToken("attribname"),this._state=m):a(t)?(this._emitIfToken("attribname"),this._state=g):("/"===t||">"===t)&&(this._emitIfToken("attribname"),this._state=u,this._index--):this._state===g?"="===t?this._state=m:"/"===t||">"===t?(this._state=u,this._index--):a(t)||(this._state=d,this._sectionStart=this._index):this._state===m?'"'===t?(this._state=f,this._sectionStart=this._index+1):"'"===t?(this._state=v,this._sectionStart=this._index+1):a(t)||(this._state=y,this._sectionStart=this._index):this._state===f?'"'===t&&(this._emitToken("attribvalue"),this._state=u):this._state===v?"'"===t&&(this._emitToken("attribvalue"),this._state=u):this._state===y?">"===t?(this._emitToken("attribvalue"),this._state=i,this._cbs.onopentagend(),this._sectionStart=this._index+1):a(t)&&(this._emitToken("attribvalue"),this._state=u):this._state===b?this._state="["===t?z:"-"===t?C:w:this._state===w?">"===t&&(this._emitToken("declaration"),this._state=i,this._sectionStart=this._index+1):this._state===L?">"===t&&(this._emitToken("processinginstruction"),this._state=i,this._sectionStart=this._index+1):this._state===C?"-"===t?(this._state=x,this._sectionStart=this._index+1):this._state=w:this._state===x?"-"===t&&(this._state=M):this._state===M?this._state="-"===t?_:x:this._state===_?">"===t?(this._cbs.oncomment(this._buffer.substring(this._sectionStart,this._index-2)),this._state=i,this._sectionStart=this._index+1):this._state=x:this._state===z?this._state="C"===t?S:w:this._state===S?this._state="D"===t?k:w:this._state===k?this._state="A"===t?E:w:this._state===E?this._state="T"===t?j:w:this._state===j?this._state="A"===t?T:w:this._state===T?"["===t?(this._state=B,this._sectionStart=this._index+1):this._state=w:this._state===B?"]"===t&&(this._state=O):this._state===O?this._state="]"===t?P:B:this._state===P?">"===t?(this._cbs.oncdata(this._buffer.substring(this._sectionStart,this._index-2)),this._state=i,this._sectionStart=this._index+1):this._state=B:this._state===A?"c"===t||"C"===t?this._state=I:"t"===t||"T"===t?this._state=V:(this._state=l,this._index--):this._state===D?this._state=1!==this._special||"c"!==t&&"C"!==t?2!==this._special||"t"!==t&&"T"!==t?i:J:U:this._state===I?"r"===t||"R"===t?this._state=N:(this._state=l,this._index--):this._state===N?"i"===t||"I"===t?this._state=R:(this._state=l,this._index--):this._state===R?"p"===t||"P"===t?this._state=q:(this._state=l,this._index--):this._state===q?"t"===t||"T"===t?this._state=F:(this._state=l,this._index--):this._state===F?(("/"===t||">"===t||a(t))&&(this._special=1),this._state=l,this._index--):this._state===U?this._state="r"===t||"R"===t?W:i:this._state===W?this._state="i"===t||"I"===t?H:i:this._state===H?this._state="p"===t||"P"===t?G:i:this._state===G?this._state="t"===t||"T"===t?Y:i:this._state===Y?">"===t||a(t)?(this._state=p,this._sectionStart=this._index-6,this._index--):this._state=i:this._state===V?"y"===t||"Y"===t?this._state=K:(this._state=l,this._index--):this._state===K?"l"===t||"L"===t?this._state=X:(this._state=l,this._index--):this._state===X?"e"===t||"E"===t?this._state=Z:(this._state=l,this._index--):this._state===Z?(("/"===t||">"===t||a(t))&&(this._special=2),this._state=l,this._index--):this._state===J?this._state="y"===t||"Y"===t?$:i:this._state===$?this._state="l"===t||"L"===t?Q:i:this._state===Q?this._state="e"===t||"E"===t?et:i:this._state===et?">"===t||a(t)?(this._state=p,this._sectionStart=this._index-5,this._index--):this._state=i:this._cbs.onerror(Error("unknown state"),this._state),this._index++}-1===this._sectionStart?(this._buffer="",this._index=0):(this._state===i?(this._emitIfToken("text"),this._buffer="",this._index=0):this._sectionStart===this._index?(this._buffer="",this._index=0):this._sectionStart>0&&(this._buffer=this._buffer.substr(this._sectionStart),this._index-=this._sectionStart),this._sectionStart=0)},s.prototype.pause=function(){this._running=!1},s.prototype.resume=function(){this._running=!0},s.prototype.end=function(e){e&&this.write(e),""===this._buffer||-1===this._sectionStart||this._sectionStart===this._index||(this._state===B||this._state===O||this._state===P?this._emitIfToken("cdata"):this._state===x||this._state===M||this._state===_?this._emitIfToken("comment"):this._state===l?this._emitIfToken("opentagname"):this._state===p?this._emitIfToken("closetag"):this._emitIfToken("text")),this._cbs.onend()},s.prototype.reset=function(){s.call(this,this._options,this._cbs)},s.prototype._emitToken=function(e){this._cbs["on"+e](this._buffer.substring(this._sectionStart,this._index)),this._sectionStart=-1},s.prototype._emitIfToken=function(e){this._index>this._sectionStart&&this._cbs["on"+e](this._buffer.substring(this._sectionStart,this._index)),this._sectionStart=-1}}});