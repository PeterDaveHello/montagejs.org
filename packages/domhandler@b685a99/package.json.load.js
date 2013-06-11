montageDefine("b685a99","package.json",{exports:{name:"domhandler",version:"2.0.3",description:"handler for htmlparser2 that turns pages into a dom",main:"index.js",directories:{test:"tests",lib:"./"},scripts:{test:"node runtests.js"},repository:{type:"git",url:"git://github.com/FB55/domhandler.git"},keywords:["dom","htmlparser2"],dependencies:{domelementtype:"1"},devDependencies:{htmlparser2:"2.3"},author:{name:"Felix Boehm",email:"me@feedic.com"},readme:"#DOMHandler [![Build Status](https://secure.travis-ci.org/fb55/DomHandler.png)](http://travis-ci.org/fb55/DomHandler)\n\nThe DOM handler (formally known as DefaultHandler) creates a tree containing all nodes of a page. The tree may be manipulated using the DOMUtils library.\n\n##Usage\n```javascript\nvar handler = new DomHandler([ <func> callback(err, dom), ] [ <obj> options ]);\n// var parser = new Parser(handler[, options]);\n```\n\n##Example\n```javascript\nvar htmlparser = require(\"htmlparser2\");\nvar rawHtml = \"Xyz <script language= javascript>var foo = '<<bar>>';< /  script><!--<!-- Waah! -- -->\";\nvar handler = new htmlparser.DomHandler(function (error, dom) {\n    if (error)\n    	[...do something for errors...]\n    else\n    	[...parsing done, do something...]\n        console.log(dom);\n});\nvar parser = new htmlparser.Parser(handler);\nparser.write(rawHtml);\nparser.done();\n```\n\nOutput:\n\n```javascript\n[{\n    data: 'Xyz ',\n    type: 'text'\n}, {\n    type: 'script',\n    name: 'script',\n    attribs: {\n    	language: 'javascript'\n    },\n    children: [{\n    	data: 'var foo = \\'<bar>\\';<',\n    	type: 'text'\n    }]\n}, {\n    data: '<!-- Waah! -- ',\n    type: 'comment'\n}]\n```\n\n##Option: ignoreWhitespace\nIndicates whether the DOM should exclude text nodes that consists solely of whitespace. The default value is \"false\". \n\nThe following HTML will be used:\n\n```html\n<font>\n	<br>this is the text\n<font>\n```\n\n###Example: true\n\n```javascript\n[{\n    type: 'tag',\n    name: 'font',\n    children: [{\n    	type: 'tag',\n    	name: 'br'\n    }, {\n    	data: 'this is the text\\n',\n    	type: 'text'\n    }, {\n    	type: 'tag',\n    	name: 'font'\n    }]\n}]\n```\n\n###Example: false\n\n```javascript\n[{\n	type: 'tag',\n    name: 'font',\n    children: [{\n    	data: '\\n\\t',\n    	type: 'text'\n    }, {\n    	type: 'tag',\n    	name: 'br'\n    }, {\n    	data: 'this is the text\\n',\n    	type: 'text'\n    }, {\n    	type: 'tag',\n    	name: 'font'\n    }]\n}]\n```",readmeFilename:"readme.md",_id:"domhandler@2.0.3",_from:"domhandler@2.0",hash:"b685a99",mappings:{domelementtype:{name:"domelementtype",hash:"5022cbb",location:"../domelementtype@5022cbb/"}},production:!0,useScriptInjection:!0}});