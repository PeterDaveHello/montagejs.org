montageDefine("f9c294b","bootstrap",{dependencies:[],factory:function(){(function(e){"use strict";var t,n=function(t){function n(){document.removeEventListener("DOMContentLoaded",n,!0),c=!0,l()}function s(e){if(!f[e]&&m[e]){var t=f[e]={};f[e]=m[e](s,t)||t}return f[e]}function o(){h=s("promise"),p=s("require"),d=s("mini-url"),l()}function l(){c&&p&&t(p,h,d)}var c,p,h,d;a(),document.addEventListener("DOMContentLoaded",n,!0),"interactive"===document.readyState&&n();var u={require:"require.js","require/browser":"browser.js",promise:"packages/q/q.js"};if(!e.preload)for(var g in u)r(u[g]);var m={};e.bootstrap=function(t,n){m[t]=n,delete u[t];for(var t in u)return;delete e.bootstrap,o()},e.bootstrap("mini-url",function(e,t){t.resolve=i});var f={}},a=function(){var e,n,a,s,r,o,l;if(!t){t={};var c=document.getElementsByTagName("script");for(e=0;c.length>e;e++)if(s=c[e],s.src&&(a=s.src.match(/^(.*)bootstrap.js(?:[\?\.]|$)/i))&&(r=a[1]),s.hasAttribute("data-mr-location")&&(r=i(window.location,s.getAttribute("data-mr-location"))),r){if(s.dataset)for(l in s.dataset)t[l]=s.dataset[l];else if(s.attributes)for(n=0;s.attributes.length>n;n++)o=s.attributes[n],a=o.name.match(/^data-(.*)$/),a&&(t[a[1]]=o.value);s.parentNode.removeChild(s),t.mrLocation=r;break}}return t},s=function(){var e=document.querySelector("base"),t=e;t||(e=document.createElement("base"),e.href="");var n=document.querySelector("head"),a=document.createElement("a");return function(s,i){if(t||n.appendChild(e),s+="",!/^[\w\-]+:/.test(s))throw Error("Can't resolve "+JSON.stringify(i)+" relative to "+JSON.stringify(s));var r=e.href;e.href=s,a.href=i;var o=a.href;return e.href=r,t||n.removeChild(e),o}},i=s(),r=function(e){var t=a(),n=document.createElement("script");n.src=i(t.mrLocation,e),n.onload=function(){n.parentNode.removeChild(n)},document.querySelector("head").appendChild(n)};n(function(t,n,s){var i=a(),o={},l=s.resolve(window.location,i.package||"."),c=i.module||"";if(e.preload){var p={},h=function(e){return p[e]=p[e]||n.defer()};e.bundleLoaded=function(e){h(e).resolve()};var d=n.defer();o.preloaded=d.promise;var u=n.resolve();e.preload.forEach(function(e){u=u.then(function(){return n.all(e.map(function(e){return r(e),h(e).promise}))})}),d.resolve(u.then(function(){delete e.preload,delete e.bundleLoaded}))}t.loadPackage({location:i.mrLocation,hash:i.mrHash},o).then(function(e){return e.inject("mini-url",s),e.inject("promise",n),e.inject("require",t),e.loadPackage({name:"q",location:i.qLocation,hash:i.qHash}).then(function(t){return t.inject("q",n),"autoPackage"in i&&e.injectPackageDescription(l,{}),e.loadPackage({location:l,hash:i.applicationHash}).invoke("async",c)})}).done()})})(this)}});