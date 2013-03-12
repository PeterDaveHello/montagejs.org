montageDefine("e9e065d","demo/iterator-demo",{dependencies:["../iterator","../list"],factory:function(e,t,n){var r=e("../iterator"),i=e("../list");r.range(10).forEach(function(e){console.log(e)}),r.iterate([1,2,3]).forEach(function(e){console.log(e)}),console.log("cycle");var s=r.cycle([0,1]);console.log(s.next()),console.log(s.next()),console.log(s.next()),console.log("cycle string"),r.cycle("ab",1).forEach(function(e){console.log(e)}),console.log("repeat 1 ten times"),r.repeat(1,10).forEach(console.log),console.log("reduce");var o=r.range(10).reduce(function(e,t,n){return console.log(e,t,n),e+t},0);console.log(o),console.log("every");var u=r.range(10);console.log(u.every(function(e){return e<5})),console.log(u.toArray()),console.log("generic on array"),r.prototype.forEach.call([1,2,3],console.log),console.log("concat"),r.concat([r.range(3),r.range(3)]).forEach(console.log),r.range(3).concat(r.range(3)).forEach(console.log),console.log("chain"),r.chain(r.range(3),r.range(3)).forEach(console.log),console.log("drop while"),r.range(20).dropWhile(function(e){return e<10}).forEach(console.log),console.log("take while"),r.range(20).takeWhile(function(e){return e<10}).forEach(console.log),console.log("unzip"),r.unzip([r.count(),r("abc")]).forEach(console.log,console),console.log("zip"),r.zip(r.count(),r("abc")).forEach(console.log),console.log(".zip"),r.count().zipIterator("abc").toArray().forEach(console.log),console.log(".filter"),r.range(10).filterIterator(function(e){return e&1}).forEach(console.log),console.log("enumerate"),console.log(r("abc").enumerate().toArray()),console.log(r("abc").enumerate(1).toArray()),console.log(r("abc").enumerate(1,"i","x").toArray());var a=new r([1,2,3,4,5]);a.mapIterator(function(e){return console.log("producing",e*2),e*2}).filterIterator(function(e){if(e%3)return e;console.log("filtering",e)}).forEach(function(e){console.log("consuming",e)}),list=new i([1,2,3,4,5]);var a=list.iterate();console.log(a.next()),a=new r(a),console.log(a.next()),console.log(a.sum()),list=new i([1,2,3,4,5]);var a=new r(list);console.log(a.next()),a=new r(a),console.log(a.next()),console.log(a.average()),console.log(r([[1,2],[3,4]]).flatten()),console.log(r([1,2,3,4]).max()),console.log(r("abc").sum(""))}})