montageDefine("d8747a3","docs/spec:-multi-window-application.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Spec: Multi window application - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<p>*** DRAFT ***\nSpec: Multi-window application  Editor JF Ducarroz</p>\n\n<p>Index\nIntroduction\nFunctional Description\nAPI\nExamples\nIntegration\nDependencies\nConcerns\nIntroduction</p>\n\n<p>While traditionally web pages and web apps use a single browser window, complex applications might require multiple windows. The goal of this spec is to provide support for multiple windows by allowing a reel to be opened inside its own browser window and still be accessible like it was in the same window as the rest of the application by, for example, using bindings (one-way or two-way).\nFunctional Description</p>\n\n<p>A single window Montage application is represented by an Application object (document.application). Internally, there is also a single root element, to which all the UI components are linked, and an events manager.</p>\n\n<p>When using multiple windows, each window has its own application object, its own root object, and event manager. That is, each window is an application by itself. The original window is the main application while every other window is a child application from either the main application or another child application. </p>\n\n<p>The Application object has two new properties: mainApplication and parentApplication. In the case of the main application, parentApplication is set to null.</p>\n\n<p>To open a new window, you call Application.openWindow and provide a Reel relative path and a module name to instantiate.  In return, you will get a MontageWindow object. When the DOM window has been loaded and the module instantiated, the MontageWindow will dispatch a load event.</p>\n\n<p>A MontageWindow object provides a pointer to the DOM window as well the reel\'s module instance. The MontageWindow object provides some other window management services such as setting the window title, moving or closing the window.</p>\n\n<p>The Application also keep track of the windows it opens and in the case of the mainApplication, it tracks all child  windows open by any application and sort them either by z order or open order.</p>\n\n<p>When a window closes (or reload), all its child windows are also closed. To prevent a child window to be closed when is parent is dismissed, you can detach the window, in that case, the detached window won\'t have any relation anymore with the parent or main window.</p>\n\n<p>Note: \n1) the module is loaded into the child window asynchronously using a Loader\n2) Events from a child window are propagated up to the document, then to the application and then up to the parent application chain up to the main application.</p>\n\n<p>API</p>\n\n<p>Application:</p>\n\n<p>Application.openWindow(component, name, parameters) -&gt; {MontageWindow}\nOpen asynchronously a Reel in a new browser window. When the returned window is ready, it dispatches a load event.</p>\n\n<p>Returns the newly created window </p>\n\n<p>Parameters:\ncomponent {Object}: the path to the reel component to open in the new window. Can be relative to the main bundle.\nname {String}: the component main class name\nparameters {Object}: the new window parameters. Accept same parameters than window.open with same security restrictions. Here are the possible parameters and their default value:\n                    location: false,\n                    height: undefined, (in pixels)\n                    width: undefined, (in pixels)\n                    left: undefined ,(in pixels)\n                    top: undefined, (in pixels)\n                    menubar: false,\n                    resizable: true,\n                    scrollbars: true,\n                    status: false,\n                    titlebar: true,\n                    toolbar: false</p>\n\n<p>Application.detachWindow(montageWindow) -&gt; {MontageWindow}\nDetach the window from its parent application. If no montageWindow is specified, the current application\'s windows will be detached</p>\n\n<p>Application.attachWindow(montageWindow) -&gt; {MontageWindow}\nAttach a window to a parent application. When a window open, it\'s automatically attach to the Application used to create the window.</p>\n\n<p>Application.mainApplication  :Application (read only)\nProvides a reference to the main application</p>\n\n<p>Application.parentApplication  :Application\nProvides a reference to the parent application</p>\n\n<p>Application.window  :MontageWindow (read only)\nProvides a reference to the MontageWindow associated to the application</p>\n\n<p>Application.attachedWindows  :Array[MontageWindow]\nAn array of the child windows attached to the application</p>\n\n<p>Application.windows  :Array<a href="read%20only">MontageWindow</a>\nProvides a reference to all the windows opened by the main application or any of its descendents, including the main window itself The list is kept sorted, the sort order is determined by the Application.windowsSortOrder property</p>\n\n<p>Application.windowsSortOrder  :String (default: reverse-z-order)\nDetermines the sort order for the Application.windows array.\nPossible values are: z-order, reverse-z-order, open-order, reverse-open-order</p>\n\n<p>Application.focusWindow  :MontageWindow\nReturn the top most window of any of the Montage Windows</p>\n\n<p>MontageWindow:</p>\n\n<p>MontageWindow.close()\nClose the window. Note: Any descendent window will be closed as well\nParameters: none</p>\n\n<p>MontageWindow.focus()\nSet the focus on the window, move it to the front\nParameters: none</p>\n\n<p>MontageWindow.resizeTo(width, height)\nResize the window to the specified width and height\nParameters: \nwidth {Integer}: The window\'s width desired\nheight {Integer}: The window\'s height desired</p>\n\n<p>MontageWindow.moveTo(x, y)\nMove the window to the specified screen coordinate x and y\nParameters: \nx {Integer}: The window\'s x screen position\ny {Integer}: The window\'s y screen position</p>\n\n<p>MontageWindow.application  :Application (readonly)\nProvides the Application associated with the window</p>\n\n<p>MontageWindow.window  :Window (readonly)\nProvides a reference to the native window</p>\n\n<p>MontageWindow.document  :DOM Document (readonly)\nProvides a reference to the DOM Document</p>\n\n<p>MontageWindow.component  :Object(readonly)\nProvides a reference to the main Montage component loaded in the window</p>\n\n<p>MontageWindow.title  :String\nThe window title. Make sure to use MontageWindow.title to access the window\'s title rather than directly accessing directly the title by the document, else you will not be able to use binding with the window\'s title.</p>\n\n<p>MontageWindow.focused  :Boolean\nTrue if the window is currently the topmost Montage Window and has focus</p>\n\n<p>MontageWindow.closed  :Boolean\nTrue is the window has been closed. Once a window has been close, the MontageWindow object still exist but you cannot use it anymore.</p>\n\n<p>Examples</p>\n\n<p>create a new window and listen to the load event to finish the window initialization:</p>\n\n<p>var childWindow = document.application.openWindow("image-viewer.reel",\n                      "ImageViewer", {scrollbar: false, titlebar: false});</p>\n\n<p>childWindow.addEventListener("load", function(event) {\n  childWindow.component.foo = bar;\n});</p>\n\n<p>Integration</p>\n\n<p>There is 5 parts:</p>\n\n<p>1) Some modification are required in EventManager in order to propagate the event up the chain of Applications</p>\n\n<p>2) Application has been modified and extended to support the notion of parent and main application</p>\n\n<p>3) A new component MontageWindow is added</p>\n\n<p>4) A window-loader, a minimalist montage stub is added. This is the page that we load in the new window and who is in charge to callback the opening application when the window is ready</p>\n\n<p>5) The loader has been modified to trigger a custom "load" event once the component has been created by the loader.</p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montagejs" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montagejs data-count=none>Tweet</a>\n                <script>!function(s,n,a){var e,t=s.getElementsByTagName(n)[0];s.getElementById(a)||(e=s.createElement(n),e.id=a,e.src="//platform.twitter.com/widgets.js",t.parentNode.insertBefore(e,t))}(document,"script","twitter-wjs");</script>\n                <a href="https://twitter.com/montagejs" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montagejs</a>\n                <script>!function(s,n,a){var e,t=s.getElementsByTagName(n)[0];s.getElementById(a)||(e=s.createElement(n),e.id=a,e.src="//platform.twitter.com/widgets.js",t.parentNode.insertBefore(e,t))}(document,"script","twitter-wjs");</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js"></script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go();</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var s=document.createElement("script");s.type="text/javascript",s.async=!0,s.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(s,n)}();</script>\n\n</body>\n</html>'});