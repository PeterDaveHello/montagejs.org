montageDefine("1bc5415","grammar",{dependencies:[],factory:function(e,t,n){n.exports=function(){function e(e,t){function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n}function t(e,t,n,a,s){function r(e,t){function n(e){function t(e){return e.charCodeAt(0).toString(16).toUpperCase()}return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(e){return"\\x0"+t(e)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(e){return"\\x"+t(e)}).replace(/[\u0180-\u0FFF]/g,function(e){return"\\u0"+t(e)}).replace(/[\u1080-\uFFFF]/g,function(e){return"\\u"+t(e)})}var a,s;switch(e.length){case 0:a="end of input";break;case 1:a=e[0];break;default:a=e.slice(0,-1).join(", ")+" or "+e[e.length-1]}return s=t?'"'+n(t)+'"':"end of input","Expected "+a+" but "+s+" found."}this.expected=e,this.found=t,this.offset=n,this.line=a,this.column=s,this.name="SyntaxError",this.message=r(e,t)}function n(e){function n(t){function n(t,n,a){var s,r;for(s=n;a>s;s++)r=e.charAt(s),"\n"===r?(t.seenCR||t.line++,t.column=1,t.seenCR=!1):"\r"===r||"\u2028"===r||"\u2029"===r?(t.line++,t.column=1,t.seenCR=!0):(t.column++,t.seenCR=!1)}return Ps!==t&&(Ps>t&&(Ps=0,Os={line:1,column:1,seenCR:!1}),n(Os,Ps,t),Ps=t),Os}function a(e){Ds>Ts||(Ts>Ds&&(Ds=Ts,As=[]),As.push(e))}function s(e){var t=0;for(e.sort();e.length>t;)e[t-1]===e[t]?e.splice(t,1):t++}function r(){var e,t,n,a;if(e=Ts,t=G(),null!==t){for(n=[],a=i();null!==a;)n.push(a),a=i();null!==n?(a=G(),null!==a?(Bs=e,t=J(n),null===t?(Ts=e,e=t):e=t):(Ts=e,e=Z)):(Ts=e,e=Z)}else Ts=e,e=Z;return e}function i(){var t,n,s,r,i,c,p,h,u,d;return t=Ts,64===e.charCodeAt(Ts)?(n=$,Ts++):(n=null,0===Is&&a(Q)),null!==n?(s=z(),null!==s?(r=G(),null!==r?(i=o(),null===i&&(i=et),null!==i?(123===e.charCodeAt(Ts)?(c=tt,Ts++):(c=null,0===Is&&a(nt)),null!==c?(p=G(),null!==p?(h=l(),null!==h?(125===e.charCodeAt(Ts)?(u=at,Ts++):(u=null,0===Is&&a(st)),null!==u?(d=G(),null!==d?(Bs=t,n=rt(s,i,h),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z),t}function o(){var t,n,s,r,i,o,l,c;return t=Ts,60===e.charCodeAt(Ts)?(n=it,Ts++):(n=null,0===Is&&a(ot)),null===n&&(58===e.charCodeAt(Ts)?(n=lt,Ts++):(n=null,0===Is&&a(ct))),null!==n?(s=G(),null!==s?(r=S(),null===r&&(r=et),null!==r?(i=G(),null!==i?(o=Ts,l=Ts,Is++,123===e.charCodeAt(Ts)?(c=tt,Ts++):(c=null,0===Is&&a(nt)),Is--,null===c?l=et:(Ts=l,l=Z),null!==l?(c=p(),null!==c?(l=[l,c],o=l):(Ts=o,o=Z)):(Ts=o,o=Z),null===o&&(o=et),null!==o?(l=G(),null!==l?(Bs=t,n=pt(n,r,o),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z),null===t&&(t=Ts,n=G(),null!==n&&(Bs=t,n=ht()),null===n?(Ts=t,t=n):t=n),t}function l(){var t,n,s,r,i,o,l,p,h;if(t=Ts,n=c(),null!==n)if(s=G(),null!==s){for(r=[],i=Ts,59===e.charCodeAt(Ts)?(o=ut,Ts++):(o=null,0===Is&&a(dt)),null!==o?(l=G(),null!==l?(p=c(),null!==p?(h=G(),null!==h?(o=[o,l,p,h],i=o):(Ts=i,i=Z)):(Ts=i,i=Z)):(Ts=i,i=Z)):(Ts=i,i=Z);null!==i;)r.push(i),i=Ts,59===e.charCodeAt(Ts)?(o=ut,Ts++):(o=null,0===Is&&a(dt)),null!==o?(l=G(),null!==l?(p=c(),null!==p?(h=G(),null!==h?(o=[o,l,p,h],i=o):(Ts=i,i=Z)):(Ts=i,i=Z)):(Ts=i,i=Z)):(Ts=i,i=Z);null!==r?(59===e.charCodeAt(Ts)?(i=ut,Ts++):(i=null,0===Is&&a(dt)),null===i&&(i=et),null!==i?(o=G(),null!==o?(Bs=t,n=gt(n,r),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)}else Ts=t,t=Z;else Ts=t,t=Z;return null===t&&(t=Ts,n=c(),null!==n?(s=G(),null!==s?(59===e.charCodeAt(Ts)?(r=ut,Ts++):(r=null,0===Is&&a(dt)),null===r&&(r=et),null!==r?(i=G(),null!==i?(Bs=t,n=mt(n),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z),null===t&&(t=Ts,n=G(),null!==n&&(Bs=t,n=ft()),null===n?(Ts=t,t=n):t=n)),t}function c(){var t,n,s,r,i,o,l,c,h,u;return t=Ts,e.substr(Ts,2)===vt?(n=vt,Ts+=2):(n=null,0===Is&&a(yt)),null===n&&(e.substr(Ts,6)===bt?(n=bt,Ts+=6):(n=null,0===Is&&a(wt))),null!==n?(32===e.charCodeAt(Ts)?(s=Lt,Ts++):(s=null,0===Is&&a(Ct)),null!==s?(r=G(),null!==r?(i=z(),null!==i?(o=G(),null!==o?(e.substr(Ts,2)===xt?(l=xt,Ts+=2):(l=null,0===Is&&a(Mt)),null!==l?(c=G(),null!==c?(h=p(),null!==h?(u=G(),null!==u?(Bs=t,n=_t(n,i,h),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z),null===t&&(t=Ts,n=p(),null!==n?(s=G(),null!==s?(58===e.charCodeAt(Ts)?(r=lt,Ts++):(r=null,0===Is&&a(ct)),null===r&&(e.substr(Ts,3)===zt?(r=zt,Ts+=3):(r=null,0===Is&&a(St)),null===r&&(e.substr(Ts,2)===kt?(r=kt,Ts+=2):(r=null,0===Is&&a(Et)))),null!==r?(i=G(),null!==i?(o=p(),null!==o?(l=G(),null!==l?(Bs=t,n=jt(n,r,o),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)),t}function p(){var e,t;return Is++,e=d(),Is--,null===e&&(t=null,0===Is&&a(Tt)),e}function h(){var t,n,s,r,i,o,l;if(t=Ts,n=p(),null!==n){for(s=[],r=Ts,44===e.charCodeAt(Ts)?(i=Bt,Ts++):(i=null,0===Is&&a(Pt)),null!==i?(o=G(),null!==o?(l=p(),null!==l?(i=[i,o,l],r=i):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z);null!==r;)s.push(r),r=Ts,44===e.charCodeAt(Ts)?(i=Bt,Ts++):(i=null,0===Is&&a(Pt)),null!==i?(o=G(),null!==o?(l=p(),null!==l?(i=[i,o,l],r=i):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z);null!==s?(Bs=t,n=gt(n,s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)}else Ts=t,t=Z;return t}function u(){var t,n,s,r;return t=Ts,40===e.charCodeAt(Ts)?(n=Ot,Ts++):(n=null,0===Is&&a(Dt)),null!==n?(s=G(),null!==s?(41===e.charCodeAt(Ts)?(r=At,Ts++):(r=null,0===Is&&a(It)),null!==r?(Bs=t,n=ft(),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z),null===t&&(t=Ts,40===e.charCodeAt(Ts)?(n=Ot,Ts++):(n=null,0===Is&&a(Dt)),null!==n?(s=h(),null!==s?(41===e.charCodeAt(Ts)?(r=At,Ts++):(r=null,0===Is&&a(It)),null!==r?(Bs=t,n=Nt(s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)),t}function d(){var t,n,s,r,i,o,l,c,h,u,d;return t=Ts,n=g(),null!==n?(s=G(),null!==s?(r=Ts,63===e.charCodeAt(Ts)?(i=qt,Ts++):(i=null,0===Is&&a(Rt)),null!==i?(o=G(),null!==o?(l=p(),null!==l?(c=G(),null!==c?(58===e.charCodeAt(Ts)?(h=lt,Ts++):(h=null,0===Is&&a(ct)),null!==h?(u=G(),null!==u?(d=p(),null!==d?(i=[i,o,l,c,h,u,d],r=i):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z),null===r&&(r=et),null!==r?(Bs=t,n=Ft(n,r),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z),t}function g(){var t,n,s,r,i,o,l,c;if(t=Ts,n=m(),null!==n){for(s=[],r=Ts,i=G(),null!==i?(e.substr(Ts,2)===Wt?(o=Wt,Ts+=2):(o=null,0===Is&&a(Ut)),null!==o?(l=G(),null!==l?(c=m(),null!==c?(i=[i,o,l,c],r=i):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z);null!==r;)s.push(r),r=Ts,i=G(),null!==i?(e.substr(Ts,2)===Wt?(o=Wt,Ts+=2):(o=null,0===Is&&a(Ut)),null!==o?(l=G(),null!==l?(c=m(),null!==c?(i=[i,o,l,c],r=i):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z);null!==s?(Bs=t,n=Ht(n,s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)}else Ts=t,t=Z;return t}function m(){var t,n,s,r,i,o,l,c;if(t=Ts,n=f(),null!==n){for(s=[],r=Ts,i=G(),null!==i?(e.substr(Ts,2)===Gt?(o=Gt,Ts+=2):(o=null,0===Is&&a(Yt)),null!==o?(l=G(),null!==l?(c=f(),null!==c?(i=[i,o,l,c],r=i):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z);null!==r;)s.push(r),r=Ts,i=G(),null!==i?(e.substr(Ts,2)===Gt?(o=Gt,Ts+=2):(o=null,0===Is&&a(Yt)),null!==o?(l=G(),null!==l?(c=f(),null!==c?(i=[i,o,l,c],r=i):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z);null!==s?(Bs=t,n=Ht(n,s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)}else Ts=t,t=Z;return t}function f(){var t,n,s,r,i,o,l,c,p;return t=Ts,n=v(),null!==n?(s=Ts,r=G(),null!==r?(i=Ts,e.substr(Ts,3)===Kt?(o=Kt,Ts+=3):(o=null,0===Is&&a(Vt)),null===o&&(e.substr(Ts,2)===Xt?(o=Xt,Ts+=2):(o=null,0===Is&&a(Zt)),null===o&&(e.substr(Ts,2)===Jt?(o=Jt,Ts+=2):(o=null,0===Is&&a($t)),null===o&&(o=Ts,60===e.charCodeAt(Ts)?(l=it,Ts++):(l=null,0===Is&&a(ot)),null!==l?(c=Ts,Is++,45===e.charCodeAt(Ts)?(p=Qt,Ts++):(p=null,0===Is&&a(en)),Is--,null===p?c=et:(Ts=c,c=Z),null!==c?(l=[l,c],o=l):(Ts=o,o=Z)):(Ts=o,o=Z),null===o&&(62===e.charCodeAt(Ts)?(o=tn,Ts++):(o=null,0===Is&&a(nn)),null===o&&(e.substr(Ts,2)===an?(o=an,Ts+=2):(o=null,0===Is&&a(sn)),null===o&&(e.substr(Ts,2)===rn?(o=rn,Ts+=2):(o=null,0===Is&&a(on)))))))),null!==o&&(o=e.substring(i,Ts)),i=o,null!==i?(o=G(),null!==o?(l=v(),null!==l?(r=[r,i,o,l],s=r):(Ts=s,s=Z)):(Ts=s,s=Z)):(Ts=s,s=Z)):(Ts=s,s=Z),null===s&&(s=et),null!==s?(Bs=t,n=ln(n,s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z),t}function v(){var t,n,s,r,i,o,l,c;if(t=Ts,n=y(),null!==n){for(s=[],r=Ts,i=G(),null!==i?(o=Ts,43===e.charCodeAt(Ts)?(l=cn,Ts++):(l=null,0===Is&&a(pn)),null===l&&(45===e.charCodeAt(Ts)?(l=Qt,Ts++):(l=null,0===Is&&a(en))),null!==l&&(l=e.substring(o,Ts)),o=l,null!==o?(l=G(),null!==l?(c=y(),null!==c?(i=[i,o,l,c],r=i):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z);null!==r;)s.push(r),r=Ts,i=G(),null!==i?(o=Ts,43===e.charCodeAt(Ts)?(l=cn,Ts++):(l=null,0===Is&&a(pn)),null===l&&(45===e.charCodeAt(Ts)?(l=Qt,Ts++):(l=null,0===Is&&a(en))),null!==l&&(l=e.substring(o,Ts)),o=l,null!==o?(l=G(),null!==l?(c=y(),null!==c?(i=[i,o,l,c],r=i):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z);null!==s?(Bs=t,n=Ht(n,s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)}else Ts=t,t=Z;return t}function y(){var t,n,s,r,i,o,l,c;if(t=Ts,n=b(),null!==n){for(s=[],r=Ts,i=G(),null!==i?(o=Ts,42===e.charCodeAt(Ts)?(l=hn,Ts++):(l=null,0===Is&&a(un)),null===l&&(47===e.charCodeAt(Ts)?(l=dn,Ts++):(l=null,0===Is&&a(gn)),null===l&&(37===e.charCodeAt(Ts)?(l=mn,Ts++):(l=null,0===Is&&a(fn)),null===l&&(e.substr(Ts,3)===vn?(l=vn,Ts+=3):(l=null,0===Is&&a(yn))))),null!==l&&(l=e.substring(o,Ts)),o=l,null!==o?(l=G(),null!==l?(c=b(),null!==c?(i=[i,o,l,c],r=i):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z);null!==r;)s.push(r),r=Ts,i=G(),null!==i?(o=Ts,42===e.charCodeAt(Ts)?(l=hn,Ts++):(l=null,0===Is&&a(un)),null===l&&(47===e.charCodeAt(Ts)?(l=dn,Ts++):(l=null,0===Is&&a(gn)),null===l&&(37===e.charCodeAt(Ts)?(l=mn,Ts++):(l=null,0===Is&&a(fn)),null===l&&(e.substr(Ts,3)===vn?(l=vn,Ts+=3):(l=null,0===Is&&a(yn))))),null!==l&&(l=e.substring(o,Ts)),o=l,null!==o?(l=G(),null!==l?(c=b(),null!==c?(i=[i,o,l,c],r=i):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z);null!==s?(Bs=t,n=Ht(n,s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)}else Ts=t,t=Z;return t}function b(){var t,n,s,r,i,o,l,c;if(t=Ts,n=w(),null!==n){for(s=[],r=Ts,i=G(),null!==i?(o=Ts,e.substr(Ts,2)===bn?(l=bn,Ts+=2):(l=null,0===Is&&a(wn)),null===l&&(e.substr(Ts,2)===Ln?(l=Ln,Ts+=2):(l=null,0===Is&&a(Cn)),null===l&&(e.substr(Ts,2)===xn?(l=xn,Ts+=2):(l=null,0===Is&&a(Mn)))),null!==l&&(l=e.substring(o,Ts)),o=l,null!==o?(l=G(),null!==l?(c=w(),null!==c?(i=[i,o,l,c],r=i):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z);null!==r;)s.push(r),r=Ts,i=G(),null!==i?(o=Ts,e.substr(Ts,2)===bn?(l=bn,Ts+=2):(l=null,0===Is&&a(wn)),null===l&&(e.substr(Ts,2)===Ln?(l=Ln,Ts+=2):(l=null,0===Is&&a(Cn)),null===l&&(e.substr(Ts,2)===xn?(l=xn,Ts+=2):(l=null,0===Is&&a(Mn)))),null!==l&&(l=e.substring(o,Ts)),o=l,null!==o?(l=G(),null!==l?(c=w(),null!==c?(i=[i,o,l,c],r=i):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z);null!==s?(Bs=t,n=Ht(n,s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)}else Ts=t,t=Z;return t}function w(){var t,n,s,r,i,o,l,c;if(t=Ts,n=L(),null!==n){for(s=[],r=Ts,i=G(),null!==i?(e.substr(Ts,2)===_n?(o=_n,Ts+=2):(o=null,0===Is&&a(zn)),null!==o?(l=G(),null!==l?(c=L(),null!==c?(i=[i,o,l,c],r=i):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z);null!==r;)s.push(r),r=Ts,i=G(),null!==i?(e.substr(Ts,2)===_n?(o=_n,Ts+=2):(o=null,0===Is&&a(zn)),null!==o?(l=G(),null!==l?(c=L(),null!==c?(i=[i,o,l,c],r=i):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z);null!==s?(Bs=t,n=Ht(n,s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)}else Ts=t,t=Z;return t}function L(){var t,n,s;return t=Ts,n=Ts,33===e.charCodeAt(Ts)?(s=Sn,Ts++):(s=null,0===Is&&a(kn)),null===s&&(43===e.charCodeAt(Ts)?(s=cn,Ts++):(s=null,0===Is&&a(pn)),null===s&&(45===e.charCodeAt(Ts)?(s=Qt,Ts++):(s=null,0===Is&&a(en)),null===s&&(94===e.charCodeAt(Ts)?(s=En,Ts++):(s=null,0===Is&&a(jn))))),null!==s&&(s=e.substring(n,Ts)),n=s,null!==n?(s=L(),null!==s?(Bs=t,n=Tn(n,s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z),null===t&&(t=C()),t}function C(){var e,t,n,a;if(e=Ts,t=_(),null!==t){for(n=[],a=x();null!==a;)n.push(a),a=x();null!==n?(Bs=e,t=Bn(t,n),null===t?(Ts=e,e=t):e=t):(Ts=e,e=Z)}else Ts=e,e=Z;return e}function x(){var t,n,s,r;return t=Ts,46===e.charCodeAt(Ts)?(n=Pn,Ts++):(n=null,0===Is&&a(On)),null!==n?(s=M(),null!==s?(Bs=t,n=Dn(s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z),null===t&&(t=Ts,91===e.charCodeAt(Ts)?(n=An,Ts++):(n=null,0===Is&&a(In)),null!==n?(s=p(),null!==s?(93===e.charCodeAt(Ts)?(r=Nn,Ts++):(r=null,0===Is&&a(qn)),null!==r?(Bs=t,n=Rn(s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)),t}function M(){var t,n,s,r,i;return t=Ts,n=z(),null!==n?(123===e.charCodeAt(Ts)?(s=tt,Ts++):(s=null,0===Is&&a(nt)),null!==s?(r=p(),null!==r?(125===e.charCodeAt(Ts)?(i=at,Ts++):(i=null,0===Is&&a(st)),null!==i?(Bs=t,n=Fn(n,r),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z),null===t&&(t=Ts,n=z(),null!==n?(s=u(),null!==s?(Bs=t,n=Wn(n,s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z),null===t&&(t=Ts,n=F(),null!==n&&(Bs=t,n=Un(n)),null===n?(Ts=t,t=n):t=n,null===t&&(t=Ts,n=z(),null!==n&&(Bs=t,n=Hn(n)),null===n?(Ts=t,t=n):t=n,null===t&&(t=Ts,n=B(),null!==n&&(Bs=t,n=Gn(n)),null===n?(Ts=t,t=n):t=n,null===t&&(t=Ts,n=P(),null!==n&&(Bs=t,n=Gn(n)),null===n?(Ts=t,t=n):t=n,null===t&&(t=Ts,40===e.charCodeAt(Ts)?(n=Ot,Ts++):(n=null,0===Is&&a(Dt)),null!==n?(s=p(),null!==s?(41===e.charCodeAt(Ts)?(r=At,Ts++):(r=null,0===Is&&a(It)),null!==r?(Bs=t,n=Gn(s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z))))))),t}function _(){var t,n,s,r;return t=B(),null===t&&(t=P(),null===t&&(t=S(),null===t&&(t=A(),null===t&&(t=Ts,e.substr(Ts,4)===Yn?(n=Yn,Ts+=4):(n=null,0===Is&&a(Kn)),null!==n&&(Bs=t,n=Vn()),null===n?(Ts=t,t=n):t=n,null===t&&(t=Ts,e.substr(Ts,4)===Xn?(n=Xn,Ts+=4):(n=null,0===Is&&a(Zn)),null!==n&&(Bs=t,n=Jn()),null===n?(Ts=t,t=n):t=n,null===t&&(t=Ts,e.substr(Ts,5)===$n?(n=$n,Ts+=5):(n=null,0===Is&&a(Qn)),null!==n&&(Bs=t,n=ea()),null===n?(Ts=t,t=n):t=n,null===t&&(t=Ts,e.substr(Ts,4)===ta?(n=ta,Ts+=4):(n=null,0===Is&&a(na)),null!==n&&(Bs=t,n=aa()),null===n?(Ts=t,t=n):t=n,null===t&&(t=Ts,64===e.charCodeAt(Ts)?(n=$,Ts++):(n=null,0===Is&&a(Q)),null!==n?(s=z(),null!==s?(Bs=t,n=sa(s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z),null===t&&(t=Ts,36===e.charCodeAt(Ts)?(n=ra,Ts++):(n=null,0===Is&&a(ia)),null!==n?(s=z(),null!==s?(Bs=t,n=oa(s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z),null===t&&(t=Ts,36===e.charCodeAt(Ts)?(n=ra,Ts++):(n=null,0===Is&&a(ia)),null!==n&&(Bs=t,n=la()),null===n?(Ts=t,t=n):t=n,null===t&&(t=Ts,35===e.charCodeAt(Ts)?(n=ca,Ts++):(n=null,0===Is&&a(pa)),null!==n?(s=z(),null!==s?(Bs=t,n=ha(s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z),null===t&&(t=Ts,38===e.charCodeAt(Ts)?(n=ua,Ts++):(n=null,0===Is&&a(da)),null!==n?(s=z(),null!==s?(r=u(),null!==r?(Bs=t,n=ga(s,r),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z),null===t&&(t=Ts,40===e.charCodeAt(Ts)?(n=Ot,Ts++):(n=null,0===Is&&a(Dt)),null!==n?(s=p(),null!==s?(41===e.charCodeAt(Ts)?(r=At,Ts++):(r=null,0===Is&&a(It)),null!==r?(Bs=t,n=ma(s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z),null===t&&(t=Ts,n=M(),null!==n&&(Bs=t,n=fa(n)),null===n?(Ts=t,t=n):t=n,null===t&&(t=Ts,n=[],null!==n&&(Bs=t,n=va()),null===n?(Ts=t,t=n):t=n))))))))))))))),t}function z(){var t,n,s;if(Is++,t=Ts,n=[],ba.test(e.charAt(Ts))?(s=e.charAt(Ts),Ts++):(s=null,0===Is&&a(wa)),null!==s)for(;null!==s;)n.push(s),ba.test(e.charAt(Ts))?(s=e.charAt(Ts),Ts++):(s=null,0===Is&&a(wa));else n=Z;return null!==n&&(Bs=t,n=La(n)),null===n?(Ts=t,t=n):t=n,Is--,null===t&&(n=null,0===Is&&a(ya)),t}function S(){var t,n,s,r;if(Is++,t=Ts,39===e.charCodeAt(Ts)?(n=xa,Ts++):(n=null,0===Is&&a(Ma)),null!==n){for(s=[],r=k();null!==r;)s.push(r),r=k();null!==s?(39===e.charCodeAt(Ts)?(r=xa,Ts++):(r=null,0===Is&&a(Ma)),null!==r?(Bs=t,n=_a(s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z)}else Ts=t,t=Z;if(null===t)if(t=Ts,34===e.charCodeAt(Ts)?(n=za,Ts++):(n=null,0===Is&&a(Sa)),null!==n){for(s=[],r=E();null!==r;)s.push(r),r=E();null!==s?(34===e.charCodeAt(Ts)?(r=za,Ts++):(r=null,0===Is&&a(Sa)),null!==r?(Bs=t,n=_a(s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z)}else Ts=t,t=Z;return Is--,null===t&&(n=null,0===Is&&a(Ca)),t}function k(){var t,n;return ka.test(e.charAt(Ts))?(t=e.charAt(Ts),Ts++):(t=null,0===Is&&a(Ea)),null===t&&(t=Ts,e.substr(Ts,2)===ja?(n=ja,Ts+=2):(n=null,0===Is&&a(Ta)),null!==n&&(Bs=t,n=Ba()),null===n?(Ts=t,t=n):t=n,null===t&&(t=j())),t}function E(){var t,n;return Pa.test(e.charAt(Ts))?(t=e.charAt(Ts),Ts++):(t=null,0===Is&&a(Oa)),null===t&&(t=Ts,e.substr(Ts,2)===Da?(n=Da,Ts+=2):(n=null,0===Is&&a(Aa)),null!==n&&(Bs=t,n=Ia()),null===n?(Ts=t,t=n):t=n,null===t&&(t=j())),t}function j(){var t,n,s,r,i,o,l,c;return t=Ts,e.substr(Ts,2)===Na?(n=Na,Ts+=2):(n=null,0===Is&&a(qa)),null!==n&&(Bs=t,n=Ra()),null===n?(Ts=t,t=n):t=n,null===t&&(t=Ts,e.substr(Ts,2)===Fa?(n=Fa,Ts+=2):(n=null,0===Is&&a(Wa)),null!==n&&(Bs=t,n=Ua()),null===n?(Ts=t,t=n):t=n,null===t&&(t=Ts,e.substr(Ts,2)===Ha?(n=Ha,Ts+=2):(n=null,0===Is&&a(Ga)),null!==n&&(Bs=t,n=Ya()),null===n?(Ts=t,t=n):t=n,null===t&&(t=Ts,e.substr(Ts,2)===Ka?(n=Ka,Ts+=2):(n=null,0===Is&&a(Va)),null!==n&&(Bs=t,n=Xa()),null===n?(Ts=t,t=n):t=n,null===t&&(t=Ts,e.substr(Ts,2)===Za?(n=Za,Ts+=2):(n=null,0===Is&&a(Ja)),null!==n&&(Bs=t,n=$a()),null===n?(Ts=t,t=n):t=n,null===t&&(t=Ts,e.substr(Ts,2)===Qa?(n=Qa,Ts+=2):(n=null,0===Is&&a(es)),null!==n&&(Bs=t,n=ts()),null===n?(Ts=t,t=n):t=n,null===t&&(t=Ts,e.substr(Ts,2)===ns?(n=ns,Ts+=2):(n=null,0===Is&&a(as)),null!==n&&(Bs=t,n=ss()),null===n?(Ts=t,t=n):t=n,null===t&&(t=Ts,e.substr(Ts,2)===rs?(n=rs,Ts+=2):(n=null,0===Is&&a(is)),null!==n&&(Bs=t,n=os()),null===n?(Ts=t,t=n):t=n,null===t&&(t=Ts,e.substr(Ts,2)===ls?(n=ls,Ts+=2):(n=null,0===Is&&a(cs)),null!==n?(s=Ts,r=Ts,i=T(),null!==i?(o=T(),null!==o?(l=T(),null!==l?(c=T(),null!==c?(i=[i,o,l,c],r=i):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z),null!==r&&(r=e.substring(s,Ts)),s=r,null!==s?(Bs=t,n=ps(s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z))))))))),t}function T(){var t;return hs.test(e.charAt(Ts))?(t=e.charAt(Ts),Ts++):(t=null,0===Is&&a(us)),t}function B(){var t,n,s,r;return t=Ts,91===e.charCodeAt(Ts)?(n=An,Ts++):(n=null,0===Is&&a(In)),null!==n?(s=G(),null!==s?(93===e.charCodeAt(Ts)?(r=Nn,Ts++):(r=null,0===Is&&a(qn)),null!==r?(Bs=t,n=ds(),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z),null===t&&(t=Ts,91===e.charCodeAt(Ts)?(n=An,Ts++):(n=null,0===Is&&a(In)),null!==n?(s=h(),null!==s?(93===e.charCodeAt(Ts)?(r=Nn,Ts++):(r=null,0===Is&&a(qn)),null!==r?(Bs=t,n=gs(s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)),t}function P(){var t,n,s,r,i,o;return t=Ts,123===e.charCodeAt(Ts)?(n=tt,Ts++):(n=null,0===Is&&a(nt)),null!==n?(s=G(),null!==s?(125===e.charCodeAt(Ts)?(r=at,Ts++):(r=null,0===Is&&a(st)),null!==r?(i=G(),null!==i?(Bs=t,n=ms(),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z),null===t&&(t=Ts,123===e.charCodeAt(Ts)?(n=tt,Ts++):(n=null,0===Is&&a(nt)),null!==n?(s=G(),null!==s?(r=O(),null!==r?(125===e.charCodeAt(Ts)?(i=at,Ts++):(i=null,0===Is&&a(st)),null!==i?(o=G(),null!==o?(Bs=t,n=fs(r),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)),t}function O(){var t,n,s,r,i,o,l;if(t=Ts,n=D(),null!==n){for(s=[],r=Ts,44===e.charCodeAt(Ts)?(i=Bt,Ts++):(i=null,0===Is&&a(Pt)),null!==i?(o=G(),null!==o?(l=D(),null!==l?(i=[i,o,l],r=i):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z);null!==r;)s.push(r),r=Ts,44===e.charCodeAt(Ts)?(i=Bt,Ts++):(i=null,0===Is&&a(Pt)),null!==i?(o=G(),null!==o?(l=D(),null!==l?(i=[i,o,l],r=i):(Ts=r,r=Z)):(Ts=r,r=Z)):(Ts=r,r=Z);null!==s?(Bs=t,n=vs(n,s),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)}else Ts=t,t=Z;return t}function D(){var t,n,s,r,i;return t=Ts,n=z(),null!==n?(58===e.charCodeAt(Ts)?(s=lt,Ts++):(s=null,0===Is&&a(ct)),null!==s?(r=G(),null!==r?(i=p(),null!==i?(Bs=t,n=ys(n,i),null===n?(Ts=t,t=n):t=n):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z),t}function A(){var t,n,s;return Is++,t=Ts,n=Ts,s=I(),null!==s&&(s=e.substring(n,Ts)),n=s,null!==n&&(Bs=t,n=ws(n)),null===n?(Ts=t,t=n):t=n,Is--,null===t&&(n=null,0===Is&&a(bs)),t}function I(){var e,t,n,a;return e=Ts,t=N(),null!==t?(n=q(),null!==n?(a=R(),null!==a?(t=[t,n,a],e=t):(Ts=e,e=Z)):(Ts=e,e=Z)):(Ts=e,e=Z),null===e&&(e=Ts,t=N(),null!==t?(n=q(),null!==n?(t=[t,n],e=t):(Ts=e,e=Z)):(Ts=e,e=Z),null===e&&(e=Ts,t=N(),null!==t?(n=R(),null!==n?(t=[t,n],e=t):(Ts=e,e=Z)):(Ts=e,e=Z),null===e&&(e=N()))),e}function N(){var t,n,s,r;return t=Ts,n=H(),null!==n?(s=F(),null!==s?(n=[n,s],t=n):(Ts=t,t=Z)):(Ts=t,t=Z),null===t&&(t=U(),null===t&&(t=Ts,45===e.charCodeAt(Ts)?(n=Qt,Ts++):(n=null,0===Is&&a(en)),null!==n?(s=H(),null!==s?(r=F(),null!==r?(n=[n,s,r],t=n):(Ts=t,t=Z)):(Ts=t,t=Z)):(Ts=t,t=Z),null===t&&(t=Ts,45===e.charCodeAt(Ts)?(n=Qt,Ts++):(n=null,0===Is&&a(en)),null!==n?(s=U(),null!==s?(n=[n,s],t=n):(Ts=t,t=Z)):(Ts=t,t=Z)))),t}function q(){var t,n,s;return t=Ts,46===e.charCodeAt(Ts)?(n=Pn,Ts++):(n=null,0===Is&&a(On)),null!==n?(s=F(),null!==s?(n=[n,s],t=n):(Ts=t,t=Z)):(Ts=t,t=Z),t}function R(){var e,t,n;return e=Ts,t=W(),null!==t?(n=F(),null!==n?(t=[t,n],e=t):(Ts=e,e=Z)):(Ts=e,e=Z),e}function F(){var e,t;if(e=[],t=U(),null!==t)for(;null!==t;)e.push(t),t=U();else e=Z;return e}function W(){var t,n,s;return t=Ts,Ls.test(e.charAt(Ts))?(n=e.charAt(Ts),Ts++):(n=null,0===Is&&a(Cs)),null!==n?(xs.test(e.charAt(Ts))?(s=e.charAt(Ts),Ts++):(s=null,0===Is&&a(Ms)),null===s&&(s=et),null!==s?(n=[n,s],t=n):(Ts=t,t=Z)):(Ts=t,t=Z),t}function U(){var t;return _s.test(e.charAt(Ts))?(t=e.charAt(Ts),Ts++):(t=null,0===Is&&a(zs)),t}function H(){var t;return Ss.test(e.charAt(Ts))?(t=e.charAt(Ts),Ts++):(t=null,0===Is&&a(ks)),t}function G(){var t,n;for(t=[],Es.test(e.charAt(Ts))?(n=e.charAt(Ts),Ts++):(n=null,0===Is&&a(js));null!==n;)t.push(n),Es.test(e.charAt(Ts))?(n=e.charAt(Ts),Ts++):(n=null,0===Is&&a(js));return t}var Y,K=arguments.length>1?arguments[1]:{},V={expression:p,sheet:r},X=p,Z=null,J=function(e){return{type:"sheet",blocks:e}},$="@",Q='"@"',et="",tt="{",nt='"{"',at="}",st='"}"',rt=function(e,t,n){return{type:"block",connection:t.connection,module:t.module,exports:t.exports,label:e,statements:n}},it="<",ot='"<"',lt=":",ct='":"',pt=function(e,t,n){return{connection:{"<":"prototype",":":"object"}[e],module:t&&t.value,exports:""!==n?n[1]:void 0}},ht=function(){return{}},ut=";",dt='";"',gt=function(e,t){for(var n=[e],a=0;t.length>a;a++)n.push(t[a][2]);return n},mt=function(e){return[e]},ft=function(){return[]},vt="on",yt='"on"',bt="before",wt='"before"',Lt=" ",Ct='" "',xt="->",Mt='"->"',_t=function(e,t,n){return{type:"event",when:e,event:t,listener:n}},zt="<->",St='"<->"',kt="<-",Et='"<-"',jt=function(e,t,n){return{type:Fs[t],args:[e,n]}},Tt="expression",Bt=",",Pt='","',Ot="(",Dt='"("',At=")",It='")"',Nt=function(e){return e},qt="?",Rt='"?"',Ft=function(e,t){if(t){var n=t[2],a=t[6];return{type:"if",args:[e,n,a]}}return e},Wt="||",Ut='"||"',Ht=function(e,t){for(var n=0;t.length>n;n++)e={type:Ns[t[n][1]],args:[e,t[n][3]]};return e},Gt="&&",Yt='"&&"',Kt="<=>",Vt='"<=>"',Xt="<=",Zt='"<="',Jt=">=",$t='">="',Qt="-",en='"-"',tn=">",nn='">"',an="==",sn='"=="',rn="!=",on='"!="',ln=function(e,t){if(t){var n=t[1],a=t[3];return"!="===n?{type:"not",args:[{type:"equals",args:[e,a]}]}:{type:Ns[n],args:[e,a]}}return e},cn="+",pn='"+"',hn="*",un='"*"',dn="/",gn='"/"',mn="%",fn='"%"',vn="rem",yn='"rem"',bn="**",wn='"**"',Ln="//",Cn='"//"',xn="%%",Mn='"%%"',_n="??",zn='"??"',Sn="!",kn='"!"',En="^",jn='"^"',Tn=function(e,t){return{type:qs[e],args:[t]}},Bn=function(e,t){for(var n=0;t.length>n;n++)e=t[n](e);return e},Pn=".",On='"."',Dn=function(e){return e},An="[",In='"["',Nn="]",qn='"]"',Rn=function(e){return function(t){return{type:"property",args:[t,e]}}},Fn=function(e,t){return Rs[e]?function(n){return{type:Rs[e],args:[n,t]}}:"value"===t.type?function(t){return{type:e,args:[t]}}:function(n){return{type:e,args:[{type:"mapBlock",args:[n,t]}]}}},Wn=function(e,t){return function(n){return{type:e,args:[n].concat(t)}}},Un=function(e){return function(t){return{type:"property",args:[t,{type:"literal",value:+e.join("")}]}}},Hn=function(e){return function(t){return{type:"property",args:[t,{type:"literal",value:e}]}}},Gn=function(e){return function(t){return{type:"with",args:[t,e]}}},Yn="this",Kn='"this"',Vn=function(){return{type:"value"}},Xn="true",Zn='"true"',Jn=function(){return{type:"literal",value:!0}},$n="false",Qn='"false"',ea=function(){return{type:"literal",value:!1}},ta="null",na='"null"',aa=function(){return{type:"literal",value:null}},sa=function(e){return{type:"component",label:e}},ra="$",ia='"$"',oa=function(e){return{type:"property",args:[{type:"parameters"},{type:"literal",value:e}]}},la=function(){return{type:"parameters"}},ca="#",pa='"#"',ha=function(e){return{type:"element",id:e}},ua="&",da='"&"',ga=function(e,t){return{type:e,args:t,inline:!0}},ma=function(e){return e},fa=function(e){return e({type:"value"})},va=function(){return{type:"value"}},ya="word",ba=/^[a-zA-Z_0-9\-]/,wa="[a-zA-Z_0-9\\-]",La=function(e){return e.join("")},Ca="string",xa="'",Ma='"\'"',_a=function(e){return{type:"literal",value:e.join("")}},za='"',Sa='"\\""',ka=/^[^'\\\0-\x1F]/,Ea="[^'\\\\\\0-\\x1F]",ja="\\'",Ta='"\\\\\'"',Ba=function(){return"'"},Pa=/^[^"\\\0-\x1F]/,Oa='[^"\\\\\\0-\\x1F]',Da='\\"',Aa='"\\\\\\""',Ia=function(){return'"'},Na="\\\\",qa='"\\\\\\\\"',Ra=function(){return"\\"},Fa="\\/",Wa='"\\\\/"',Ua=function(){return"/"},Ha="\\b",Ga='"\\\\b"',Ya=function(){return"\b"},Ka="\\f",Va='"\\\\f"',Xa=function(){return"\f"},Za="\\n",Ja='"\\\\n"',$a=function(){return"\n"},Qa="\\r",es='"\\\\r"',ts=function(){return"\r"},ns="\\t",as='"\\\\t"',ss=function(){return"	"},rs="\\0",is='"\\\\0"',os=function(){return"\0"},ls="\\u",cs='"\\\\u"',ps=function(e){return String.fromCharCode(parseInt(e,16))},hs=/^[0-9a-fA-F]/,us="[0-9a-fA-F]",ds=function(){return{type:"tuple",args:[]}},gs=function(e){return{type:"tuple",args:e}},ms=function(){return{type:"record",args:[]}},fs=function(e){return{type:"record",args:e}},vs=function(e,t){var n={};n[e[0]]=e[1];for(var a=0;t.length>a;a++)n[t[a][2][0]]=t[a][2][1];return n},ys=function(e,t){return[e,t]},bs="number",ws=function(e){return{type:"literal",value:+e}},Ls=/^[eE]/,Cs="[eE]",xs=/^[+\-]/,Ms="[+\\-]",_s=/^[0-9]/,zs="[0-9]",Ss=/^[1-9]/,ks="[1-9]",Es=/^[ \n]/,js="[ \\n]",Ts=0,Bs=0,Ps=0,Os={line:1,column:1,seenCR:!1},Ds=0,As=[],Is=0;if("startRule"in K){if(!(K.startRule in V))throw Error("Can't start parsing from rule \""+K.startRule+'".');X=V[K.startRule]}var Ns={"**":"pow","//":"root","%%":"log","*":"mul","/":"div","%":"mod",rem:"rem","+":"add","-":"sub","<":"lt",">":"gt","<=":"le",">=":"ge","==":"equals","<=>":"compare","??":"default","&&":"and","||":"or","<-":"bind","<->":"bind2",":":"assign"},qs={"+":"number","-":"neg","!":"not","^":"parent"},Rs={map:"mapBlock",filter:"filterBlock",some:"someBlock",every:"everyBlock",sorted:"sortedBlock",group:"groupBlock",groupMap:"groupMapBlock",min:"minBlock",max:"maxBlock"},Fs={":":"assign","<-":"bind","<->":"bind2"};if(Y=X(),null!==Y&&Ts===e.length)return Y;throw s(As),Bs=Math.max(Ts,Ds),new t(As,e.length>Bs?e.charAt(Bs):null,Bs,n(Bs).line,n(Bs).column)}return e(t,Error),{SyntaxError:t,parse:n}}()}});