montageDefine("22e98aa","tests/99-benchmark",{dependencies:["./test-helper.js","../lib/Parser.js","ben"],factory:function(e){var t=function(e){return Array(5001).join(e)},n={self_closing:t("<br/>"),tag:t("<tag foo=bar foobar> Text </tag>"),comment:t("<!-- this is <<a> comment -->"),directive:t("<?foo bar?>"),special:t("<script> THIS IS <SPECIAL> </script>"),xml:t("<!directive><tag attr='value'> text <!--Comment<>--></tag>")},a=function(){},s={};e("./test-helper.js").EVENTS.forEach(function(e){s["on"+e]=a});var r=new(e("../lib/Parser.js"))(s),i=e("ben");Object.keys(n).forEach(function(e){console.log("Test",e,"took",i(150,function(){r.parseComplete(n[e])}))})}});