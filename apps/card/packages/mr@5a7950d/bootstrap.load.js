montageDefine("5a7950d","bootstrap",{dependencies:[],factory:function(e,t,n){(function(e){"use strict";var t=function(t){function l(){document.removeEventListener("DOMContentLoaded",l,!0),n=!0,g()}function v(e){if(!d[e]&&p[e]){var t=d[e]={};d[e]=p[e](v,t)||t}return d[e]}function m(){u=v("promise"),i=v("require"),a=v("mini-url"),g()}function g(){n&&i&&t(i,u,a)}var n,i,u,a,f=r();document.addEventListener("DOMContentLoaded",l,!0),document.readyState==="interactive"&&l();var c={require:"require.js","require/browser":"browser.js",promise:"packages/q/q.js"};if(!e.preload)for(var h in c)o(c[h]);var p={};e.bootstrap=function(t,n){p[t]=n,delete c[t];for(var t in c)return;delete e.bootstrap,m()},e.bootstrap("mini-url",function(e,t){t.resolve=s});var d={}},n,r=function(){var e,t,r,i,o,u,a;if(!n){n={};var f=document.getElementsByTagName("script");for(e=0;e<f.length;e++){i=f[e],i.src&&(r=i.src.match(/^(.*)bootstrap.js(?:[\?\.]|$)/i))&&(o=r[1]),i.hasAttribute("data-mr-location")&&(o=s(window.location,i.getAttribute("data-mr-location")));if(o){if(i.dataset)for(a in i.dataset)n[a]=i.dataset[a];else if(i.attributes)for(t=0;t<i.attributes.length;t++)u=i.attributes[t],r=u.name.match(/^data-(.*)$/),r&&(n[r[1]]=u.value);i.parentNode.removeChild(i),n.mrLocation=o;break}}}return n},i=function(){var e=document.querySelector("base"),t=e;t||(e=document.createElement("base"),e.href="");var n=document.querySelector("head"),r=document.createElement("a");return function(i,s){t||n.appendChild(e),i=String(i);if(!/^[\w\-]+:/.test(i))throw new Error("Can't resolve "+JSON.stringify(s)+" relative to "+JSON.stringify(i));var o=e.href;e.href=i,r.href=s;var u=r.href;return e.href=o,t||n.removeChild(e),u}},s=i(),o=function(e){var t=r(),n=document.createElement("script");n.src=s(t.mrLocation,e),n.onload=function(){n.parentNode.removeChild(n)},document.querySelector("head").appendChild(n)};t(function(n,i,s){var u=r(),a={},f=s.resolve(window.location,u.package||"."),l=u.module||"";if(e.preload){var c={},h=function(e){return c[e]=c[e]||i.defer()};e.bundleLoaded=function(e){h(e).resolve()};var p=i.defer();a.preloaded=p.promise;var d=i.resolve();e.preload.forEach(function(e){d=d.then(function(){return i.all(e.map(function(e){return o(e),h(e).promise}))})}),p.resolve(d.then(function(){delete e.preload,delete e.bundleLoaded}))}n.loadPackage({location:u.mrLocation,hash:u.mrHash},a).then(function(e){return e.inject("mini-url",s),e.inject("promise",i),e.inject("require",n),e.loadPackage({name:"q",location:u.qLocation,hash:u.qHash}).then(function(t){return t.inject("q",i),"autoPackage"in u&&e.injectPackageDescription(f,{}),e.loadPackage({location:f,hash:u.applicationHash}).invoke("async",l)})}).done()})})(this)}})