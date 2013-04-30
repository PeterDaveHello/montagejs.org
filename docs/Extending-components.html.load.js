montageDefine("edc7bd3","docs/Extending-components.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Extending components - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<h1>Extending components<a class=anchor id=Extending-components href="#Extending-components"></a>\n</h1>\n\n<p>Extending a component is similar to extending a JavaScript object: you create a new object and make its prototype the object you want to extend. The main difference is that you may also need to extend the component’s HTML template, when one is present.</p>\n\n<p>The process of extending a component is the same as creating an entirely new component using the original one as its prototype. If the customization doesn’t require a change in the component’s controller (its JavaScript object) then it is sufficient to create an instance of the extended object. If the component being extended has an HTML template, the developer must either point to the template of the extended component, or create a new template.</p>\n\n<p>There are three options to extend a component’s template:</p>\n\n<ol>\n<li>If the extended component doesn’t wish to introduce changes in the template, the component can set its <code>templateModuleId</code> property to point to the parent module’s template.</li>\n<li>Create a new template that will completely redefine the markup of the component with no relation to the original template.</li>\n<li>Set the <code>extends</code> property of the template that points to the template to be imported and where. This is similar to the “decorator” pattern of the proposed <a href="http://dvcs.w3.org/hg/webcomponents/raw-file/tip/explainer/index.html#decorator-section">Web Components</a> feature. This approach is useful when the component needs to add additional CSS data, or reuse the original markup. The template object will be accessible through the <code>template</code> label of the serialization.</li>\n</ol><h2>Examples<a class=anchor id=Examples href="#Examples"></a>\n</h2>\n\n<h3>Extending the Toggle component only changing its markup<a class=anchor id=Extending-the-Toggle-component-only-changing-its-markup href="#Extending-the-Toggle-component-only-changing-its-markup"></a>\n</h3>\n\n<p></p><div class=highlight><pre><span class=c1>//my-toggle.js</span>\n<span class=kd>var</span> <span class=nx>Montage</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage"</span><span class=p>).</span><span class=nx>Montage</span><span class=p>,</span>\n    <span class=nx>Toggle</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"ui/toggle"</span><span class=p>).</span><span class=nx>Toggle</span><span class=p>;</span>\n\n<span class=nx>exports</span><span class=p>.</span><span class=nx>MyToggle</span> <span class=o>=</span> <span class=nx>Montage</span><span class=p>.</span><span class=nx>create</span><span class=p>(</span><span class=nx>Toggle</span><span class=p>);</span>\n</pre></div>\n\n<p></p><div class=highlight><pre>// my-toggle.html\n<span class=cp>&lt;!DOCTYPE html&gt;</span>\n<span class=nt>&lt;html&gt;</span>\n<span class=nt>&lt;head&gt;</span>\n    <span class=nt>&lt;title&gt;&lt;/title&gt;</span>\n    <span class=nt>&lt;link</span> <span class=na>rel=</span><span class=s>"stylesheet"</span> <span class=na>type=</span><span class=s>"text/css"</span> <span class=na>href=</span><span class=s>"my-toggle.css"</span><span class=nt>&gt;</span>\n    <span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span>\n    <span class=p>{</span>\n        <span class=s2>"owner"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"prototype"</span><span class=o>:</span> <span class=s2>"my-toggle.reel"</span><span class=p>,</span>\n            <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n                <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"my-toggle"</span><span class=p>}</span>\n            <span class=p>}</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n    <span class=nt>&lt;/script&gt;</span>\n\n<span class=nt>&lt;/head&gt;</span>\n<span class=nt>&lt;body&gt;</span>\n    <span class=nt>&lt;div</span> <span class=na>id=</span><span class=s>"my-toggle"</span><span class=nt>&gt;</span>\n        <span class=nt>&lt;div</span> <span class=na>id=</span><span class=s>"thumb"</span> <span class=nt>/&gt;</span>\n    <span class=nt>&lt;/div&gt;</span>\n<span class=nt>&lt;/body&gt;</span>\n<span class=nt>&lt;/html&gt;</span>\n</pre></div>\n\n<h3>Extending the Toggle component by only changing some of its logic<a class=anchor id=Extending-the-Toggle-component-by-only-changing-some-of-its-logic href="#Extending-the-Toggle-component-by-only-changing-some-of-its-logic"></a>\n</h3>\n\n<p></p><div class=highlight><pre><span class=c1>//my-toggle.js</span>\n<span class=kd>var</span> <span class=nx>Montage</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage"</span><span class=p>).</span><span class=nx>Montage</span><span class=p>,</span>\n    <span class=nx>Toggle</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage/ui/toggle.reel"</span><span class=p>).</span><span class=nx>Toggle</span><span class=p>;</span>\n\n<span class=nx>exports</span><span class=p>.</span><span class=nx>MyToggle</span> <span class=o>=</span> <span class=nx>Montage</span><span class=p>.</span><span class=nx>create</span><span class=p>(</span><span class=nx>Toggle</span><span class=p>,</span> <span class=p>{</span>\n    <span class=nx>draw</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span> <span class=kd>function</span><span class=p>()</span> <span class=p>{</span>\n            <span class=c1>// my different draw implementation</span>\n        <span class=p>}</span>\n    <span class=p>},</span>\n    <span class=nx>templateModuleId</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span> <span class=s2>"montage/ui/toggle.reel/toggle.html"</span>\n    <span class=p>}</span>\n<span class=p>});</span>\n</pre></div>\n\n<h3>Extending the Toggle component by adding styling elements<a class=anchor id=Extending-the-Toggle-component-by-adding-styling-elements href="#Extending-the-Toggle-component-by-adding-styling-elements"></a>\n</h3>\n\n<p></p><div class=highlight><pre><span class=c1>//my-toggle.js</span>\n<span class=kd>var</span> <span class=nx>Montage</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage"</span><span class=p>).</span><span class=nx>Montage</span><span class=p>,</span>\n    <span class=nx>Toggle</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage/ui/toggle.reel"</span><span class=p>).</span><span class=nx>Toggle</span><span class=p>;</span>\n\n<span class=nx>exports</span><span class=p>.</span><span class=nx>MyToggle</span> <span class=o>=</span> <span class=nx>Montage</span><span class=p>.</span><span class=nx>create</span><span class=p>(</span><span class=nx>Toggle</span><span class=p>,</span> <span class=p>{</span>\n    <span class=nx>draw</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span> <span class=kd>function</span><span class=p>()</span> <span class=p>{</span>\n            <span class=c1>// my different draw implementation</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>});</span>\n</pre></div>\n\n<p></p><div class=highlight><pre>//my-toggle.html\n<span class=cp>&lt;!DOCTYPE html&gt;</span>\n<span class=nt>&lt;html&gt;</span>\n<span class=nt>&lt;head&gt;</span>\n    <span class=nt>&lt;title&gt;&lt;/title&gt;</span>\n    <span class=nt>&lt;link</span> <span class=na>rel=</span><span class=s>"stylesheet"</span> <span class=na>type=</span><span class=s>"text/css"</span> <span class=na>href=</span><span class=s>"my-toggle.css"</span><span class=nt>&gt;</span>\n    <span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span>\n    <span class=p>{</span>   \n        <span class=s2>"owner"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s2>"prototype"</span><span class=o>:</span> <span class=s2>"my-toggle.reel"</span><span class=p>,</span>\n            <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n                <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"my-toggle"</span><span class=p>}</span>\n            <span class=p>}</span>\n        <span class=p>},</span>\n\n        <span class=s2>"template"</span><span class=o>:</span> <span class=p>{</span>\n           <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n               <span class=s2>"extends"</span><span class=o>:</span> <span class=p>{</span>\n                   <span class=s2>"templateModuleId"</span><span class=o>:</span> <span class=s2>"montage/ui/toggle.reel/toggle.html"</span><span class=p>,</span>\n                   <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"toggle"</span><span class=p>},</span>\n               <span class=s2>"instances"</span><span class=o>:</span> <span class=p>{</span>\n                  <span class=s2>"owner"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"@"</span><span class=o>:</span> <span class=s2>" owner"</span><span class=p>}</span>\n                   <span class=p>}</span>\n               <span class=p>}</span>\n           <span class=p>}</span>\n       <span class=p>}</span>\n    <span class=p>}</span>\n    <span class=nt>&lt;/script&gt;</span>\n\n<span class=nt>&lt;/head&gt;</span>\n<span class=nt>&lt;body&gt;</span>\n    <span class=nt>&lt;div</span> <span class=na>id=</span><span class=s>"my-toggle"</span><span class=nt>&gt;</span> ← (merge attributes from toggle.html)\n       <span class=nt>&lt;h1&gt;</span>My Toggle<span class=nt>&lt;/h1&gt;</span>\n       <span class=nt>&lt;div</span> <span class=na>id=</span><span class=s>"toggle"</span><span class=nt>&gt;&lt;/div&gt;</span>\n   <span class=nt>&lt;/div&gt;</span>\n<span class=nt>&lt;/body&gt;</span>\n<span class=nt>&lt;/html&gt;</span>\n</pre></div>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n\n</body>\n</html>'})