montageDefine("edc7bd3","docs/Quick-Start.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Quick Start - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<ol>\n<li><strong>Quick Start</strong></li>\n<li><a href=Exploring-components.html>Exploring Components</a></li>\n<li><a href=Hello-Montage.html>Hello Montage</a></li>\n</ol><hr><p><strong>Note:</strong> If you prefer to watch rather than read tutorials, you can also catch short video versions of this guide on YouTube for <a href="http://www.youtube.com/watch?v=JfT1ML200JI">Mac OS X</a>, <a href="http://www.youtube.com/watch?v=HDOItFcfopY">Windows</a>, or <a href="http://www.youtube.com/watch?v=OcLN-zP3A00">Ubuntu Linux</a> users.</p>\n\n<p>To begin, <a href="http://nodejs.org/download/">download</a> and install Node.js if you haven\'t already.</p>\n\n<p>Although Montage does not rely on Node.js, it does depend on the Node Package Manager (NPM) for fulfilling dependencies throughout development. Besides, our tools and utilities are written in JavaScript and executed using Node.js so it\'s useful to have it installed.</p>\n\n<p>Next, follow these steps to set up your Montage development environment and serve up your first Montage app:</p>\n\n<ol>\n<li>\n<p>Install <code>minit</code>, the Montage Initializer:</p>\n\n<p></p>\n<div class=highlight><pre><span class=nv>$ </span>sudo npm install -g minit@latest\n</pre></div>\n</li>\n<li>\n<p>Create your first app:</p>\n\n<p></p>\n<div class=highlight><pre><span class=nv>$ </span>minit create:app --name hello\n<span class=nv>$ </span><span class=nb>cd </span>hello\n</pre></div>\n</li>\n<li>\n<p>Serve up your new application for development (or use your own web server):</p>\n\n<p></p>\n<div class=highlight><pre><span class=nv>$ </span>python -m SimpleHTTPServer\n</pre></div>\n\n<p>and point your browser to <a href="http://localhost:8000">http://localhost:8000/</a>.</p>\n\n<p>The server is required because Montage uses XHR to load files during development, which cannot be done on the <code>file://</code> protocol.</p>\n</li>\n</ol><p>That\'s it. You\'ve created your first montage app. Curious how it all works? Read on.</p>\n\n<h2>Next Steps<a class=anchor id=Next-Steps href="#Next-Steps"></a>\n</h2>\n\n<ul>\n<li><p>Learn more about Montage components in <a href=Exploring-components.html>Exploring components</a>.</p></li>\n<li><p>Experiment with Montage on your own in the browser using <a href="http://montagejs.github.com/montage/samples/mfiddle/">MFiddle</a>.</p></li>\n</ul>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n\n</body>\n</html>'})