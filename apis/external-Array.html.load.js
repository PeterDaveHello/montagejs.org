montageDefine("edc7bd3","apis/external-Array.html",{text:'<!DOCTYPE html>\n<html lang=en>\n<head>\n    <meta charset=utf-8>\n    <title>JSDoc: External: Array</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="stylesheets/normalize.css">\n    <link rel=stylesheet href="stylesheets/base.css">\n    <link rel=stylesheet href="stylesheets/pages.css">\n    <link rel=stylesheet href="stylesheets/solarized.css">\n\n    <script src="scripts/prettify/prettify.js"></script>\n    <script src="scripts/prettify/lang-css.js"></script>\n    <script src="scripts/search.js"></script>\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n    <link type="text/css" rel=stylesheet href="styles/prettify-tomorrow.css">\n    <link type="text/css" rel=stylesheet href="styles/jsdoc-default.css">\n</head>\n\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="http://montagejs.org/apps">Apps</a>\n                <a class=nav-item href="http://montagejs.org/docs">Docs</a>\n                <a class="nav-item active" href="http://montagejs.org/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    \n\n    <section id=docs>\n\n\n\n\n<header>\n    <h2>\n    Array\n    </h2>\n\n</header>\n\n<article>\n\n    <div class=container-overview>\n\n\n\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/shim/array.js, line 4\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n\n        <h3 class=subsection-title>Methods</h3>\n\n        <dl>\n\n<dt>\n    <h4 class=name id=isArray><span class=type-signature>&lt;static </span>isArray<span class=signature>(value)</span><span class=type-signature> → {Boolean}</span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Returns whether the given value is an array, regardless of which\n    context it comes from.  The context may be another frame.</p>\n<pre><code>&lt;p&gt;This is the proper idiomatic way to test whether an object is an\narray and replaces the less generally useful &lt;code&gt;instanceof&lt;/code&gt;\ncheck (which does not work across contexts) and the strangeness that\nthe &lt;code&gt;typeof&lt;/code&gt; an array is &lt;code&gt;"object"&lt;/code&gt;.</code></pre>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>value</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Any</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>any value</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/shim/array.js, line 6\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>whether the given value is an array</p>\n\n</div>\n\n\n\n<dl>\n	<dt class=return-type-label>\n		Type\n	</dt>\n	<dd class=return-type>\n\n<span class=param-type>Boolean</span>\n\n\n	</dd>\n</dl>\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=isCanvasPixelArray><span class=type-signature>&lt;static </span>isCanvasPixelArray<span class=signature>(some)</span><span class=type-signature> → {Boolean}</span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Returns whether an object is a canvas pixel array</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>some</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Object</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>object</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n        <dt class="important tag-deprecated">Deprecated:</dt><dd><ul class=dummy><li>in favor of typed arrays in recent browsers</li><ul></ul></ul></dd>\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/extras/array.js, line 283\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>whether it is a canvas pixel array</p>\n\n</div>\n\n\n\n<dl>\n	<dt class=return-type-label>\n		Type\n	</dt>\n	<dd class=return-type>\n\n<span class=param-type>Boolean</span>\n\n\n	</dd>\n</dl>\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=any><span class=type-signature></span>any<span class=signature>(propertyPath, visitedCallback)</span><span class=type-signature> → {Boolean}</span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Returns whether any element (or property of each element) is truthy.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>propertyPath</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Object</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"></td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>visitedCallback</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Function</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"></td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n        <dt class="important tag-deprecated">Deprecated:</dt><dd><ul class=dummy><li>The property path and visited callback are deprecated in\n    anticipation of alternatives made available through selector evaluators and\n    observers.</li><ul></ul></ul></dd>\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/extras/array.js, line 215\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>whether any single value in the array (or property of\n    that element) is truthy.</p>\n\n</div>\n\n\n\n<dl>\n	<dt class=return-type-label>\n		Type\n	</dt>\n	<dd class=return-type>\n\n<span class=param-type>Boolean</span>\n\n\n	</dd>\n</dl>\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=count><span class=type-signature></span>count<span class=signature>()</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Returns the length of the array.  The purpose of this method is to provide\n    a generic way to access the quantity of elements in any collection.</p>\n\n    </div>\n\n\n\n\n\n\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/extras/array.js, line 198\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>the length of this array</p>\n\n</div>\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=getProperty><span class=type-signature></span>getProperty<span class=signature>(propertyPath, unique, preserve, visitedComponentCallback, currentIndex)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Returns the value at the end of a property path starting from this array.</p>\n<pre><code>&lt;p&gt;A property path is a dot delimited list of property names and supports\ncertain "function calls".  The argument of any function is a property\npath to traverse on each element of a collection of elements.  Indexing\na property of an array maps to an array of the corresponding property\nof each element in the array.</code></pre>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>propertyPath</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Object</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"></td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>unique</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Property</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"></td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>preserve</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Property</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"></td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>visitedComponentCallback</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Function</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"></td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>currentIndex</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type><a href=Array.html>Array</a></span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"></td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n        <dt class="important tag-deprecated">Deprecated:</dt><dd><ul class=dummy><li>in favor of upcoming selector evaluator and observer</li><ul></ul></ul></dd>\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/extras/array.js, line 4\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=sum><span class=type-signature></span>sum<span class=signature>(propertyPath, visitedCallback)</span><span class=type-signature> → {Number}</span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Returns the sum of all values in the array.</p>\n<pre><code>&lt;p&gt;Treats a nested array value as the sum of the array, recursively.\nDelegates to a property of the array if given, with an optional visitor for\neach element of the array.</code></pre>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>propertyPath</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Object</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"></td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>visitedCallback</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Function</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"></td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n        <dt class="important tag-deprecated">Deprecated:</dt><dd><ul class=dummy><li>The property path and visitor callback are deprecated in favor\n    of equivalent functionality provided by selector evaluators and observers.\n    The implicit recursive flattening of contained arrays is also deprecated\n    since selectors support explicit flattening.</li><ul></ul></ul></dd>\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/extras/array.js, line 247\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>the sum of every value in the array</p>\n\n</div>\n\n\n\n<dl>\n	<dt class=return-type-label>\n		Type\n	</dt>\n	<dd class=return-type>\n\n<span class=param-type>Number</span>\n\n\n	</dd>\n</dl>\n\n\n\n\n\n</dd>\n\n        </dl>\n\n\n\n\n\n</article>\n\n\n\n\n\n    </section>\n\n    <nav class=docs>\n        <h2>Search</h2><input id=index-search type=search placeholder="search for"><details open=open><summary>Types</summary><ul><li><a href=Application.html>Application</a></li><li><a href=ArrayController.html>ArrayController</a></li><li><a href=BindingDescriptor.html>BindingDescriptor</a></li><li><a href=BitField.html>BitField</a></li><li><a href=Button.html>Button</a></li><li><a href=BytesConverter.html>BytesConverter</a></li><li><a href=ChangeEventDispatchingArray.html>ChangeEventDispatchingArray</a></li><li><a href=CheckInput.html>CheckInput</a></li><li><a href=Component.html>Component</a></li><li><a href=Composer.html>Composer</a></li><li><a href=Condition.html>Condition</a></li><li><a href=Converter.html>Converter</a></li><li><a href=CurrencyConverter.html>CurrencyConverter</a></li><li><a href=DateConverter.html>DateConverter</a></li><li><a href=DateValidator.html>DateValidator</a></li><li><a href=DefaultLocalizer.html>DefaultLocalizer</a></li><li><a href=Deserializer.html>Deserializer</a></li><li><a href=DynamicElement.html>DynamicElement</a></li><li><a href=DynamicText.html>DynamicText</a></li><li><a href=EditableText.html>EditableText</a></li><li><a href=Enum.html>Enum</a></li><li><a href=EventManager.html>EventManager</a></li><li><a href=Exception.html>Exception</a></li><li><a href=Gate.html>Gate</a></li><li><a href=InputText.html>InputText</a></li><li><a href=InvertConverter.html>InvertConverter</a></li><li><a href=KeyComposer.html>KeyComposer</a></li><li><a href=KeyManager.html>KeyManager</a></li><li><a href=Localizer.html>Localizer</a></li><li><a href=Logger.html>Logger</a></li><li><a href=LowerCaseConverter.html>LowerCaseConverter</a></li><li><a href=MediaController.html>MediaController</a></li><li><a href=MessageFormat.html>MessageFormat</a></li><li><a href=MessageLocalizer.html>MessageLocalizer</a></li><li><a href=Montage.html>Montage</a></li><li><a href=MontageWindow.html>MontageWindow</a></li><li><a href=MutableEvent.html>MutableEvent</a></li><li><a href=NativeControl.html>NativeControl</a></li><li><a href=NewLineToBrConverter.html>NewLineToBrConverter</a></li><li><a href=NumberConverter.html>NumberConverter</a></li><li><a href=NumberValidator.html>NumberValidator</a></li><li><a href=ObjectController.html>ObjectController</a></li><li><a href=PressComposer.html>PressComposer</a></li><li><a href=PropertyChangeBindingListener.html>PropertyChangeBindingListener</a></li><li><a href=Repetition.html>Repetition</a></li><li><a href=RootComponent.html>RootComponent</a></li><li><a href=Serializer_.html>Serializer</a></li><li><a href=Slot.html>Slot</a></li><li><a href=State.html>State</a></li><li><a href=StateChart.html>StateChart</a></li><li><a href=Substitution.html>Substitution</a></li><li><a href=SwipeComposer.html>SwipeComposer</a></li><li><a href=Template_.html>Template</a></li><li><a href=TranslateComposer.html>TranslateComposer</a></li><li><a href=TrimConverter.html>TrimConverter</a></li><li><a href=UndoManager.html>UndoManager</a></li><li><a href=UpperCaseConverter.html>UpperCaseConverter</a></li><li><a href=Uuid_.html>Uuid</a></li><li><a href=Validator.html>Validator</a></li></ul></details><details><summary>Externals</summary><ul><li><a href=external-Array.html>Array</a></li><li><a href=external-Element.html>Element</a></li><li><a href=external-Function.html>Function</a></li><li><a href=external-Object.html>Object</a></li><li><a href=external-RegExp.html>RegExp</a></li><li><a href=external-String.html>String</a></li></ul></details><details><summary>Events</summary><ul><li><a href="PressComposer.html#event:longPress">longPress</a></li><li><a href="PressComposer.html#event:press">press</a></li><li><a href="PressComposer.html#event:pressCancel">pressCancel</a></li><li><a href="PressComposer.html#event:pressStart">pressStart</a></li></ul></details><details><summary>Tutorials</summary><ul><li><a href=tutorial-README.html>README</a></li></ul></details><details><summary>Global</summary><ul><li><a href="global.html#_bezierTubeBoundingSphere">_bezierTubeBoundingSphere</a></li><li><a href="global.html#_computeRotationValuesToXAxis">_computeRotationValuesToXAxis</a></li><li><a href="global.html#_rayRectangleIntersection">_rayRectangleIntersection</a></li><li><a href="global.html#_rayRectangleIntersectionPosition">_rayRectangleIntersectionPosition</a></li><li><a href="global.html#_sphereIntersection">_sphereIntersection</a></li><li><a href="global.html#linearScrollingVector">linearScrollingVector</a></li><li><a href="global.html#relative">relative</a></li><li><a href="global.html#resolve">resolve</a></li><li><a href="global.html#test">test</a></li></ul></details>\n    </nav>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n    <script>var codes=document.getElementsByTagName("code");codes&&Array.prototype.forEach.call(codes,function(e){e.classList.contains("lang-javascript")&&e.classList.add("prettyprint")}),prettyPrint()</script>\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n\n</body>\n</html>'})