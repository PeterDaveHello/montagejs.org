montageDefine("1bc5415","language",{dependencies:["collections/set","collections/dict"],factory:function(e,t){var n=e("collections/set"),a=e("collections/dict"),s=t.precedence=a(),r=t.precedenceLevels=[["tuple","record"],["literal","value","parameters","property","element","component","mapBlock","filterBlock","sortedBlock","groupBlock","groupMapBlock","with"],["not","neg","number","parent"],["scope"],["default"],["pow","root","log"],["mul","div","mod","rem"],["add","sub"],["equals","lt","gt","le","ge","compare"],["and"],["or"],["if"]];r.forEach(function(e){var t=n(s.keys());e.forEach(function(e){s.set(e,t)})});var i=t.operatorTokens=a({"**":"pow","//":"root","%%":"log","*":"mul","/":"div","%":"mod",rem:"rem","+":"add","-":"sub","<":"lt",">":"gt","<=":"le",">=":"ge","==":"equals","<=>":"compare","!=":"notEquals","??":"default","&&":"and","||":"or","?":"then",":":"else"});t.operatorTypes=a(i.map(function(e,t){return[e,t]}))}});