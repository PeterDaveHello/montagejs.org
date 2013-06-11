var Montage=require("montage").Montage,FlowBezierSpline=exports.FlowBezierSpline=Montage.specialize({constructor:{value:function(){this._knots=[],this._densities=[]}},knots:{get:function(){return this._knots},set:function(e){this._knots=e}},previousHandlers:{get:function(){return this._previousHandlers||(this._previousHandlers=[]),this._previousHandlers},set:function(e){this._previousHandlers=e}},nextHandlers:{get:function(){return this._nextHandlers||(this._nextHandlers=[]),this._nextHandlers},set:function(e){this._nextHandlers=e}},densities:{get:function(){return this._densities},set:function(e){this._densities=e,this._densitiesLength=this._densities.length,this._maxTime=null}},_parameters:{value:{}},parameters:{get:function(){return this._parameters||(this._parameters={}),this._parameters},set:function(e){this._parameters=e,this._parametersLength=this._parameters.length}},_maxTime:{enumerable:!1,value:null},computeMaxTime:{value:function(){return this._computeDensitySummation(),this._maxTime=this._densitySummation.length?this._densitySummation[this._densitySummation.length-1]:0,this._maxTime}},_densitySummation:{enumerable:!1,value:null},_computeDensitySummation:{enumerable:!1,value:function(){var e,t=this.densities,n=t.length-1,s=0;for(this._densitySummation=[],e=0;n>e;e++)s+=(t[e]+t[e+1])/2,this._densitySummation[e]=s;this._maxTime=null}},_convertSplineTimeToBezierIndexTime:{enumerable:!1,value:function(e){if(0>e)return null;if(null===this._maxTime&&this.computeMaxTime(),e>=this._maxTime)return null;for(var t,n,s,a,i,r=this._densitySummation,o=r.length,l=o-1,p=o>>1;p;)l-p>=0&&r[l-p]>e?l-=p:p>>=1;return t=e-(l?r[l-1]:0),s=this._densities[l],a=this._densities[l+1],i=s-a,n=-1e-10>i||i>1e-10?(s-Math.sqrt(s*s+2*(a-s)*t))/i:t/s,[l,n]}},getPositionAtIndexTime:{value:function(e){var t=e[0],n=e[1],s=this._knots[t],a=this._nextHandlers[t],i=this._previousHandlers[t+1],r=this._knots[t+1],o=1-n,l=o*o*o,p=3*o*o*n,c=3*o*n*n,u=n*n*n;return[s[0]*l+a[0]*p+i[0]*c+r[0]*u,s[1]*l+a[1]*p+i[1]*c+r[1]*u,s[2]*l+a[2]*p+i[2]*c+r[2]*u]}},getRotationAtIndexTime:{value:function(e){var t,n,s,a=e[0],i=e[1],r=1-i,o=this._parameters;return t=o.rotateX!==void 0?o.rotateX.data[a]*r+o.rotateX.data[a+1]*i:0,n=o.rotateY!==void 0?o.rotateY.data[a]*r+o.rotateY.data[a+1]*i:0,s=o.rotateZ!==void 0?o.rotateZ.data[a]*r+o.rotateZ.data[a+1]*i:0,[t,n,s]}},getStyleAtIndexTime:{value:function(e){var t,n,s=e[0],a=e[1],i=this._parameters,r=1-a,o="";for(parameterKeys=Object.keys(i),parameterKeyCount=parameterKeys.length,t=0;parameterKeyCount>t;t++)n=parameterKeys[t],jParameter=i[n],jParameterData=jParameter.data,"rotateX"!==n&&"rotateY"!==n&&"rotateZ"!==n&&jParameterData[s]!==void 0&&jParameterData[s+1]!==void 0&&(o+=n+":"+1e-5*(1e5*(jParameterData[s]*r+jParameterData[s+1]*a)>>0)+jParameter.units+";");return o}},transformVectorArray:{value:function(e,t){var n,s,a=e.length,i=[];for(s=0;a>s;s++)n=e[s],n&&(i[s]=[n[0]*t[0]+n[1]*t[4]+n[2]*t[8]+t[12],n[0]*t[1]+n[1]*t[5]+n[2]*t[9]+t[13],n[0]*t[2]+n[1]*t[6]+n[2]*t[10]+t[14]]);return i}},transform:{value:function(e){var t=new FlowBezierSpline;return t._densities=this._densities,t._densitySummation=this._densitySummation,t._knots=this.transformVectorArray(this.knots,e),t._previousHandlers=this.transformVectorArray(this.previousHandlers,e),t._nextHandlers=this.transformVectorArray(this.nextHandlers,e),t}},deCasteljau:{value:function(e,t,n,s,a){var i=1-a,r=i*e[0]+a*t[0],o=i*t[0]+a*n[0],l=i*n[0]+a*s[0],p=i*r+a*o,c=i*o+a*l,u=i*p+a*c,h=i*e[1]+a*t[1],d=i*t[1]+a*n[1],m=i*n[1]+a*s[1],g=i*h+a*d,f=i*d+a*m,v=i*g+a*f,b=i*e[2]+a*t[2],y=i*t[2]+a*n[2],w=i*n[2]+a*s[2],_=i*b+a*y,E=i*y+a*w,x=i*_+a*E;return[[e,[r,h,b],[p,g,_],[u,v,x]],[[u,v,x],[c,f,E],[l,m,w],s]]}},cubic:{enumerable:!1,value:function(e,t,n,s,a){return((e*a+t)*a+n)*a+s}},cubeRoot:{enumerable:!1,value:function(e){return e>0?Math.pow(e,1/3):-Math.pow(-e,1/3)}},cubicRealRoots:{enumerable:!1,value:function(e,t,n,s){var a=1e-100,i=Math;if(-a>e||e>a){var r=1/e,o=t*r,l=n*r,p=(3*l-o*o)*(1/9),c=(4.5*o*l-13.5*s*r-o*o*o)*(1/27),u=p*p*p+c*c;if(u>a){var h=i.sqrt(u);return[this.cubeRoot(c+h)+this.cubeRoot(c-h)+o*(-1/3)]}if(u>-a){if(-a>c||c>a){var d=this.cubeRoot(c),m=2*d+o*(-1/3),g=o*(-1/3)-d;return g>m?[m,g]:[g,m]}return[o*(-1/3)]}var f=i.acos(c/i.sqrt(-p*p*p))*(1/3),v=i.sqrt(-p),b=1.7320508075688772*v*i.sin(f),y=o*(-1/3);return v*=i.cos(f),[y-v-b,y-v+b,y+2*v]}if(-a>t||t>a){var w=n*n-4*t*s;return w>=0?(w=i.sqrt(w),[(-n-w)/(2*t),(w-n)/(2*t)]):[]}return-a>n||n>a?[-s/n]:[]}},_halfPI:{enumerable:!1,value:.5*Math.PI},reflectionMatrix:{enumerable:!1,value:function(e,t,n,s){var a=Math,i=this._halfPI-a.atan2(t,e),r=a.sin(i),o=a.cos(i),l=this._halfPI-a.atan2(n,e*r+t*o),p=a.sin(l);return s[0]=p*r,s[1]=o*p,s[2]=a.cos(l),s}},reflectedY:{enumerable:!1,value:function(e,t,n,s){return e*s[0]+t*s[1]+n*s[2]}},directedPlaneBezierIntersection:{enumerable:!1,value:function(e,t,n,s,a,i,r,o,l){for(var p,c,u=this.reflectionMatrix(s[0],s[1],s[2],l),h=this.reflectedY(a[0]-e,a[1]-t,a[2]-n,u),d=this.reflectedY(i[0]-e,i[1]-t,i[2]-n,u),m=this.reflectedY(r[0]-e,r[1]-t,r[2]-n,u),g=this.reflectedY(o[0]-e,o[1]-t,o[2]-n,u),f=3*(d-m)+g-h,v=3*(h+m)-6*d,b=3*(d-h),y=this.cubicRealRoots(f,v,b,h),w=0,_=0,E=[];y.length>_&&0>=y[_];)_++;for(;y.length>_&&1>y[_];)p=w,w=y[_],c=.5*(p+w),this.cubic(f,v,b,h,c)>=0&&E.push([p,w]),_++;return c=.5*(w+1),this.cubic(f,v,b,h,c)>=0&&E.push([w,1]),E}}});