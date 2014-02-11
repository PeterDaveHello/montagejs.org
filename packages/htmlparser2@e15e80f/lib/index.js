function defineProp(e,t){return delete module.exports[e],module.exports[e]=t,t}module.exports={get Parser(){return defineProp("Parser",require("./Parser.js"))},get DomHandler(){return defineProp("DomHandler",require("domhandler"))},get FeedHandler(){return defineProp("FeedHandler",require("./FeedHandler.js"))},get Tokenizer(){return defineProp("Tokenizer",require("./Tokenizer.js"))},get ElementType(){return defineProp("ElementType",require("domelementtype"))},get Stream(){return defineProp("Stream",require("./Stream.js"))},get WritableStream(){return defineProp("WritableStream",require("./WritableStream.js"))},get ProxyHandler(){return defineProp("ProxyHandler",require("./ProxyHandler.js"))},get DomUtils(){return defineProp("DomUtils",require("domutils"))},get CollectingHandler(){return defineProp("CollectingHandler",require("./CollectingHandler.js"))},get DefaultHandler(){return defineProp("DefaultHandler",this.DomHandler)},get RssHandler(){return defineProp("RssHandler",this.FeedHandler)},createDomStream:function(e,t,n){var i=new module.exports.DomHandler(e,t,n);return new module.exports.Parser(i,t)},EVENTS:{attribute:2,cdatastart:0,cdataend:0,text:1,processinginstruction:2,comment:1,commentend:0,closetag:1,opentag:2,opentagname:1,error:1,end:0}};