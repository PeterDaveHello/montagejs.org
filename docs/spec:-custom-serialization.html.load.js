montageDefine("d8747a3","docs/spec:-custom-serialization.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Spec: Custom Serialization - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<p>title: Custom Serialization\neditor: António Afonso dos Santos Martins</p>\n\n<h2>Introduction<a class=anchor id=Introduction href="#Introduction"></a>\n</h2>\n\n<p>The former method to achieve a custom serialization on an object is to\nimplement the <code>serializeSelf(serializer, propertyNames)</code> method that allows the\nobject to specify which values to serialize.</p>\n\n<p>However, this approach only allows the object to choose which values to\nserialize in the properties of a serialization, while other units — like\nbindings or the type of object — are automatically decided by inspecting the\nobject. As a consequence, changing the object to be serialized is also not\npossible.\nThis type of fine grained customization is needed in different parts of the\nframework:\nThe bindings as well as the listeners just need to serialize a literal object\nand not the underlying montage object they are represented with; this is also\nthe format inputted by the user at the moment.\nThe repetition when serializing an iteration doesn’t need (or want) to\nreserialize its bindings and/or listeners.\nThis specification proposes a different API to accommodate these needs.</p>\n\n<h2>Functional Description<a class=anchor id=Functional-Description href="#Functional-Description"></a>\n</h2>\n\n<p>The API should be able to define the serialization of:</p>\n\n<ul>\n<li>  type: “object” or ”prototype” or ”value”</li>\n<li>  properties</li>\n<li>  other units: bindings, listeners</li>\n</ul><h2>API<a class=anchor id=API href="#API"></a>\n</h2>\n\n<p>Rename current <code>serializeSelf</code> to <code>serializeProperties</code>.\nRename current <code>deserializeSelf</code> to <code>deserializeProperties</code>.</p>\n\n<p>Add the following delegates:</p>\n\n<ul>\n<li>\n<p><code>serializeSelf(serializer, propertyNames)</code></p>\n\n<p>If this function returns a value other than undefined, that value\nwill be serialized instead of the current object.</p>\n\n<ul>\n<li>  <code>serializer</code>: serializer instance</li>\n<li>  <code>propertyNames</code>: array of property names declared as serializable.</li>\n</ul>\n</li>\n<li>\n<p><code>deserializeSelf(deserializer)</code></p>\n\n<ul>\n<li>  <code>deserializer</code>: deserializer instance</li>\n</ul>\n</li>\n</ul><p>Add the following API to Serializer:</p>\n\n<ul>\n<li>\n<p>setType(type, value)</p>\n\n<p>The set of the type is completely optional because the default for\nthe current object is already applied.</p>\n\n<ul>\n<li>  type: can be one of “prototype”, “object” or “value”.</li>\n<li>  value: the value of the type, a module id in the case of\n“property” or “object”, a value if “value”.</li>\n</ul>\n</li>\n<li>\n<p>setProperties(names)</p>\n\n<ul>\n<li>  names: an array of property names to be added to the properties serialization unit.</li>\n</ul>\n</li>\n<li>\n<p>setProperty(name, value)</p>\n\n<ul>\n<li>  name: the name to use in the properties serialization unit to\nserialize the value given.  value: the value to serialize.</li>\n</ul>\n</li>\n<li>\n<p>setUnits()</p>\n\n<p>add all serialization units to the object serialization.</p>\n</li>\n<li>\n<p>setUnit(name)</p>\n\n<ul>\n<li>  name: the name of the serialization unit to add to the object\nserialization.</li>\n</ul>\n</li>\n<li>\n<p>getObjectLabel(object)</p>\n\n<ul>\n<li>  object: the object to get the label from.</li>\n</ul>\n</li>\n</ul><p>Add the following API to Deserializer:</p>\n\n<ul>\n<li>\n<p>deserializeProperties()</p>\n\n<p>Deserializes the entire properties serialization unit.</p>\n</li>\n<li>\n<p>getProperty(name)</p>\n\n<p>Gets the value for the property name given.</p>\n\n<ul>\n<li>  name: the name of the property.</li>\n</ul>\n</li>\n<li>\n<p>deserializeUnits()</p>\n\n<p>Deserializes all serialization units.</p>\n</li>\n<li>\n<p>deserializeUnit(name)</p>\n\n<ul>\n<li>  name: the unit name to be deserialized.</li>\n</ul>\n</li>\n<li>\n<p>getType()</p>\n\n<p>Gets the type of the serialized object/value.  It can be one of:\n“prototype”, “object” or “value”.</p>\n</li>\n<li>\n<p>getTypeValue()</p>\n\n<p>Gets the value of the object type, a module id in the case of “property” or “object”, a value if “value”.</p>\n</li>\n<li>\n<p>getObjectByLabel(label)</p>\n\n<ul>\n<li>  label: The label of the object to return.</li>\n</ul>\n</li>\n</ul><p>Changes to the Serializer API:</p>\n\n<ul>\n<li>\n<p>addObjectReference(object) -&gt; </p>\n\n<p>Returns an object reference to the object.</p>\n</li>\n</ul><h2>Examples<a class=anchor id=Examples href="#Examples"></a>\n</h2>\n\n<h3>Repetition<a class=anchor id=Repetition href="#Repetition"></a>\n</h3>\n\n<p>The Repetition can improve the serialization of its iteration by using\nthe following delegate:</p>\n\n<p></p><div class=highlight><pre><span class=p>{</span>\n    <span class=nx>serializeSelf</span><span class=o>:</span> <span class=kd>function</span><span class=p>(</span><span class=nx>serializer</span><span class=p>)</span> <span class=p>{</span>\n        <span class=nx>serializer</span><span class=p>.</span><span class=nx>setProperty</span><span class=p>(</span><span class=s2>"element"</span><span class=p>,</span> <span class=k>this</span><span class=p>.</span><span class=nx>_element</span><span class=p>);</span>\n        <span class=nx>serializer</span><span class=p>.</span><span class=nx>setProperty</span><span class=p>(</span><span class=s2>"_isComponentExpanded"</span><span class=p>,</span> <span class=kc>true</span><span class=p>);</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>Bindings and listeners will not be serialized.</p>\n\n<h3>Binding Descriptor<a class=anchor id=Binding-Descriptor href="#Binding-Descriptor"></a>\n</h3>\n\n<p></p><div class=highlight><pre><span class=p>{</span>\n    <span class=nx>serializeSelf</span><span class=o>:</span> <span class=kd>function</span><span class=p>(</span><span class=nx>serializer</span><span class=p>)</span> <span class=p>{</span>\n        <span class=k>return</span> <span class=p>{</span>\n            <span class=nx>boundObject</span><span class=o>:</span> <span class=nx>serializer</span><span class=p>.</span><span class=nx>getObjectReference</span><span class=p>(</span><span class=k>this</span><span class=p>.</span><span class=nx>boundObject</span><span class=p>),</span>\n            <span class=nx>boundObjectPropertyPath</span><span class=o>:</span> <span class=k>this</span><span class=p>.</span><span class=nx>boundObjectPropertyPath</span><span class=p>,</span>\n            <span class=nx>oneway</span><span class=o>:</span> <span class=k>this</span><span class=p>.</span><span class=nx>oneway</span><span class=p>,</span>\n            <span class=nx>deferred</span><span class=o>:</span> <span class=k>this</span><span class=p>.</span><span class=nx>deferred</span><span class=p>,</span>\n            <span class=nx>converter</span><span class=o>:</span> <span class=k>this</span><span class=p>.</span><span class=nx>converter</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>Returns an object literal to serialize instead.</p>\n\n<h2>Concerns<a class=anchor id=Concerns href="#Concerns"></a>\n</h2>\n\n<ul>\n<li>  No idea on how to make (de)serializeSelf backwards compatible, ideas\nare welcome.</li>\n</ul>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montagejs" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montagejs data-count=none>Tweet</a>\n                <script>!function(n,s,a){var e,t=n.getElementsByTagName(s)[0];n.getElementById(a)||(e=n.createElement(s),e.id=a,e.src="//platform.twitter.com/widgets.js",t.parentNode.insertBefore(e,t))}(document,"script","twitter-wjs");</script>\n                <a href="https://twitter.com/montagejs" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montagejs</a>\n                <script>!function(n,s,a){var e,t=n.getElementsByTagName(s)[0];n.getElementById(a)||(e=n.createElement(s),e.id=a,e.src="//platform.twitter.com/widgets.js",t.parentNode.insertBefore(e,t))}(document,"script","twitter-wjs");</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js"></script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go();</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(n,s)}();</script>\n\n</body>\n</html>'});