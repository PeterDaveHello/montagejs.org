montageDefine("4e18375","docs/abstractvideo.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>AbstractVideo - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<h1>AbstractVideo<a class=anchor id=AbstractVideo href="#AbstractVideo"></a>\n</h1>\n\n<p>The <code>AbstractVideo</code> component is a base component for video player components that takes care of the interaction between the component and the <code>[[Media Controller]]</code> object that controls playback of the media. This component must be extended by a video player component to add UI controls.</p>\n\n<h2>Properties<a class=anchor id=Properties href="#Properties"></a>\n</h2>\n\n<ul>\n<li>\n<p><code>mediaElement</code></p>\n\n<p>The native <code>video</code> element.</p>\n</li>\n<li>\n<p><code>videoController</code></p>\n\n<p>The <code>[[Media Controller]]</code> object that controls playback of the video.</p>\n</li>\n<li>\n<p><code>src</code></p>\n\n<p>The source file.</p>\n</li>\n<li>\n<p><code>sources</code></p>\n\n<p>An array of video sources. Use this to provide the video content in multiple formats. Example:\n</p>\n<div class=highlight><pre><span class=nx>video</span><span class=p>.</span><span class=nx>sources</span> <span class=o>=</span> <span class=p>[</span>\n    <span class=p>{</span><span class=nx>src</span><span class=o>:</span> <span class=s2>"movie.ogv"</span><span class=p>,</span> <span class=nx>type</span><span class=o>:</span> <span class=s2>"video/ogg"</span><span class=p>},</span>\n    <span class=p>{</span><span class=nx>src</span><span class=o>:</span> <span class=s2>"movie.mp4"</span><span class=p>,</span> <span class=nx>type</span><span class=o>:</span> <span class=s2>"video/mpeg"</span><span class=p>}</span>\n<span class=p>];</span>\n</pre></div>\n</li>\n<li>\n<p><code>posterSrc</code></p>\n\n<p>The path to a poster image that can be shown before the video is started.</p>\n</li>\n<li>\n<p><code>repeat</code></p>\n\n<p>Determines whether playback should loop back to the beginning when it reaches the end.</p>\n</li>\n<li>\n<p><code>supportsFullScreen</code></p>\n\n<p>Determines whether fullscreen mode is supported.</p>\n</li>\n<li>\n<p><code>isFullScreen</code></p>\n\n<p>Read-only property indicating whether the video is currently playing in fullscreen mode.</p>\n</li>\n</ul><h2>Methods<a class=anchor id=Methods href="#Methods"></a>\n</h2>\n\n<ul>\n<li>\n<p><code>loadMedia()</code></p>\n\n<p>Start loading the video.</p>\n</li>\n<li>\n<p><code>showPoster()</code></p>\n\n<p>Show the poster image.</p>\n</li>\n<li>\n<p><code>toggleRepeat()</code></p>\n\n<p>Toggles the <code>repeat</code> value.</p>\n</li>\n<li>\n<p><code>toggleFullScreen()</code></p>\n\n<p>Toggles fullscreen mode.</p>\n</li>\n</ul>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montagejs" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montagejs data-count=none>Tweet</a>\n                <script>!function(e,t,n){var o,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(o=e.createElement(t),o.id=n,o.src="//platform.twitter.com/widgets.js",a.parentNode.insertBefore(o,a))}(document,"script","twitter-wjs");</script>\n                <a href="https://twitter.com/montagejs" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montagejs</a>\n                <script>!function(e,t,n){var o,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(o=e.createElement(t),o.id=n,o.src="//platform.twitter.com/widgets.js",a.parentNode.insertBefore(o,a))}(document,"script","twitter-wjs");</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js"></script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go();</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();</script>\n\n</body>\n</html>'});