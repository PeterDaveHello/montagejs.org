function assign(e,t,n,r,i,a){var o;o="string"==typeof t?parse(t):t;var s=compile(o),l=new Scope(e);return l.parameters=r,l.document=i,l.components=a,s(n,l)}var parse=require("./parse"),compile=require("./compile-assigner"),Scope=require("./scope");module.exports=assign;