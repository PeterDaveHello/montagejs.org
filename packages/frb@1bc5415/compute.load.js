montageDefine("1bc5415","compute",{dependencies:["./parse","./compile-observer","./compile-binder","./observers","./scope"],factory:function(e,t,n){function a(e,t,n){n.target=e,n.targetPath=t;var a=n.source=n.source||e,c=n.args,p=n.compute,h=n.parameters=n.parameters||a,u=n.document,d=n.components,g=n.trace,m=n.sourceScope=new l(a,null,h,u,d),f=n.targetScope=new l(e,null,h,u,d),v=c.map(function(e){return s(e)}).map(function(e){if("rangeContent"===e.type){var t=i(e.args[0]);return o.makeRangeContentObserver(t)}if("mapContent"===e.type){var t=i(e.args[0]);return o.makeMapContentObserver(t)}return i(e)}),y=o.makeRangeContentObserver(o.makeObserversObserver(v)),b=o.makeComputerObserver(y,p,e),w=s(t),L=r(w);return L(b,m,f,n,g?{sourcePath:c.join(", "),targetPath:t}:void 0)}var s=e("./parse"),i=e("./compile-observer"),r=e("./compile-binder"),o=e("./observers"),l=e("./scope");n.exports=a}});