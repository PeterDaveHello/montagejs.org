montageDefine("22e98aa","tests/test-helper",{dependencies:[".."],factory:function(e,t){var n=e(".."),a=n.Parser,s=n.CollectingHandler,r=5;t.writeToParser=function(e,t,n){for(var s=new a(e,t),i=0;n.length>i;i+=r)s.write(n.substr(i,r));s.end(),s.parseComplete(n)},t.getEventCollector=function(e){var t=new s({onerror:e,onend:function(){e(null,t.events.reduce(function(e,t){return"onerror"===t[0]||"onend"===t[0]||("ontext"===t[0]&&e.length&&"text"===e[e.length-1].event?e[e.length-1].data[0]+=t[1]:e.push({event:t[0].slice(2),data:t.slice(1)})),e},[]))}});return t}}});