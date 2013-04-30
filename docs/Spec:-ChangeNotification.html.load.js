montageDefine("edc7bd3","docs/Spec:-ChangeNotification.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Spec: ChangeNotification - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<p>Change Notification API Editor François Frisch</p>\n\n<p>Index\nIntroduction\nFunctional Description\nAPI\nExamples\nIntegration\nDependencies\nConcerns\n\nIntroduction</p>\n\n<p>The current API based on addEventListener and handleChange</p>\n\n<ul>\n<li>minus and plus are not correct</li>\n<li>change type is inconsistent</li>\n<li>no hooks before the change happens.\nWant to block? no, this is the job of a delegate</li>\n<li>consistency because of use of third argument for capture?\nuse handle... callback, ignore third argument </li>\n<li>collision with change event</li>\n<li>no way to integrate the @... into the callback name</li>\n<li>events are supposed to be immutable</li>\n<li>performance optimization</li>\n</ul><p>modify in property descriptor...\n    We need to add a listener on the property, but it might not be obvious that this is more expensive than get / set.</p>\n\n<p>Functional Description</p>\n\n<p>We implement change listeners as an extension on top of the apis and concepts of the “normal” events &amp; listeners.</p>\n\n<p>Listening to array reference or the content -- not necessary\nexposing getProperty arguments in bindings -- open\nremove dispatching setter when last listener is removed -- todo\nAPI</p>\n\n<p>PropertyListener\nPropertyPath(object, “property.path”, willChange).addEventListener()</p>\n\n<p>registration:</p>\n\n<p>myObject.addPropertyChangeListener(“property.path”, listener | function(){}), beforeChange)\nmyObject.removePropertyChangeListener(“property.path”, listener | function(){}), beforeChange)</p>\n\n<p>callback:</p>\n\n<p>handle[Identifier]WillChange(change)\nhandle[Identifier]Change(change)</p>\n\n<p>change.type : “property.path”\nchange.target : the object where the original change event was dispatched\nchange.propertyPath : “property.path”\nchange.currentTarget : object on which we are currently dispatching the change (myObject in this case)\nchange.plus : the values of the change on the target based on the splice logic, these don’t change\nchange.minus : the values of the change on the target based on the splice logic, these don’t change</p>\n\n<p>If the value of the property named handle[Identifier]Change is an object we assume that it is a table of callback functions indexed by change event type. </p>\n\n<p>handle[Identifier]Change: {\n    value: {\n        “property.path”: function(change) {\n            this === the listener\n        },\n        “another.property.path”: function(change) {\n            this === the listener\n        }\n    }\n}</p>\n\n<p>var ChangeEvent  = require(“core/event”).ChangeEvent\nvar WillChangeEvent  = require(“core/event”).WillChangeEvent</p>\n\n<p>this.dispatchEvent(WillChangeEvent.create())\nthis.doTheChange();\nthis.dispatchEvent(ChangeEvent.create())</p>\n\n<p>change.propertyPath = “bars.foo”\nchange.target = myObject</p>\n\n<p>// for arrays\ncall splice dispatching logic for all operations.</p>\n\n<p>splice \n    changeEvent.minus = removedMembers;\n        objects removed\n            changeEvent.plus = addedMembers;\n        objects added\n            changeEvent.changeIndex = index;\n        first argument of the splice\n            changeEvent.propertyChange = changeType;</p>\n\n<pre><code>for every item in the array\n    propertyChange should be tailored to each case\n</code></pre>\n\n<p>shift\nchangeEvent.minus = result;\n    the object that was removed\n            changeEvent.plus = this[0];\n        the new value that replaced the object that was removed\n            changeEvent.changeIndex = 0;\n            changeEvent.propertyChange = ChangeTypes.REMOVAL;</p>\n\n<pre><code>for every item in the array\n    changeEvent.type = "change@" + i;\n        index\n                changeEvent.minus = i === 0 ? result : this[i - 1];\n        old value at the index\n                changeEvent.plus = this[i];\n</code></pre>\n\n<p>new value at the index\n                    changeEvent.changeIndex = i;\n            index of change\n                    changeEvent.propertyChange = ChangeTypes.REMOVAL; ???\n            should be MODIFY</p>\n\n<p>unshift\n    changeEvent.minus = undefined;\n            changeEvent.plus = Array.prototype.slice.call(arguments, 0);\n        Array of object added\n            changeEvent.changeIndex = 0;\n            changeEvent.propertyChange = ChangeTypes.ADDITION;</p>\n\n<pre><code>for every item in the array\n    changeEvent.type = "change@" + i;\n        index\n                changeEvent.minus = this[addedCount + i];\n        old value at the index\n                changeEvent.plus = this[i];\n</code></pre>\n\n<p>new value at the index\n                    changeEvent.changeIndex = i;\n            index of change\n                    changeEvent.propertyChange = ChangeTypes.ADDITION;\n            Same problem as splice</p>\n\n<p>reverse\npush\npop\nsort</p>\n\n<p>// for maps\nget \nset\ndelete</p>\n\n<p>change.data.changeType = ChangeTypes</p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n\n</body>\n</html>'})