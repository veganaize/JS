<img alt="JS" src="https://github.com/user-attachments/assets/54328c3b-0d27-4494-a1db-90e9188a6159" width="48px" />

_A list of resources primarily for classic Javascript ≤ ES 5.1 — its best era!_

## Style

* [Vanilla JS](http://vanilla-js.com/)
* [Guidelines for styling JavaScript code examples](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript) - Mozilla
* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html) ([_oldest snapshot_](http://web.archive.org/web/20161126025850id_/https://google.github.io/styleguide/jsguide.html))


## Books

* [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md) (1st Edition)
  - [Up & Going](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/up%20&%20going/README.md#you-dont-know-js-up--going)
  - [Scope & Closures](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20&%20closures/README.md#you-dont-know-js-scope--closures)
  - [this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes)
  - [Types & Grammar](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20&%20grammar/README.md#you-dont-know-js-types--grammar)
  - [Async & Performance](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20&%20performance/README.md#you-dont-know-js-async--performance)
  - [ES6 & Beyond](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20&%20beyond/README.md#you-dont-know-js-es6--beyond)
* [Functional-Light JavaScript](https://github.com/getify/Functional-Light-JS)
* [Eloquent Javascript](https://eloquentjavascript.net/2nd_edition/) (2nd Edition)
* [Javascript Succinctly](https://s3.amazonaws.com/ebooks.syncfusion.com/downloads/JavaScript_Succinctly/JavaScript_Succinctly.pdf) (pdf) ([epub](https://s3.amazonaws.com/ebooks.syncfusion.com/downloads/JavaScript_Succinctly/JavaScript_Succinctly.epub)) ([mobi](https://s3.amazonaws.com/ebooks.syncfusion.com/downloads/JavaScript_Succinctly/JavaScript_Succinctly.mobi)) ([github](https://github.com/SyncfusionSuccinctlyE-Books/JavaScript-Succinctly))
* [Javascript Wikibook](https://en.wikibooks.org/wiki/JavaScript)


## Resources

* w3schools
  - [js tutorial](https://www.w3schools.com/js/default.asp)
  - [js reference](https://www.w3schools.com/jsref/default.asp)
* mdn _([offline markdown](https://github.com/mdn/content))_
  - [js tutorial](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting)
  - [js](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    - [js guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
    - [js reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
* freecodecamp
  - [js dsa tutorials](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) _(original version!)_
* codecademy
  - [js reference](https://www.codecademy.com/resources/docs/javascript)


## Stuff

* DEVTOOLS
  - [`console`](https://developer.mozilla.org/en-US/docs/Web/API/console) - mdn
  - [Browser Developer Console](https://blog.teamtreehouse.com/mastering-developer-tools-console) - treehouse
  - [Chromium Dev Tools](https://developer.chrome.com/docs/devtools/)
    - [keyboard shortcuts](https://developer.chrome.com/docs/devtools/shortcuts/)
  - [Firefox Dev Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
    - [keyboard shortcuts](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html)
    - [web console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
    - [Mozilla's Command Line Options](https://www-archive.mozilla.org/docs/command-line-args.html) - 2003-2005
    - [Firefox/CommandLineOptions](https://wiki.mozilla.org/Firefox/CommandLineOptions) - mozilla wiki
    - `firefox.exe -h | more` <-- Pipe required for Windows because of bug.
    - `firefox.exe -P dev --new-instance --devtools --private-window`
    - `about:config`
    ```
    devtools.cache.disabled                   = true
    devtools.webconsole.persistlog            = true
    devtools.editor.tabsize                   = 4
    devtools.theme                            = dark
    devtools.chrome.enabled                   = true
    devtools.editor.autocomplete              = false
    devtools.editor.autoclosebrackets         = false
    devtools.webconsole.input.autocomplete    = false
    devtools.webconsole.input.eagerEvaluation = false
    ```
* AJAX - Asynchronous Javascript And Xml
  - [Ajax: A New Approach to Web Applications](http://web.archive.org/web/20170809043416id_/https://immagic.com/eLibrary/ARCHIVES/GENERAL/ADTVPATH/A050218G.pdf)
  - [Wikipedia](https://en.wikipedia.org/wiki/Ajax_(programming))
* IIFE - Immediately Invoked Function Expression
  - [Alman](https://web.archive.org/web/20101118035434id_/http://benalman.com/news/2010/11/immediately-invoked-function-expression/)
  - [MDN](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
  - [Wikipedia](https://en.wikipedia.org/wiki/Immediately_invoked_function_expression)
* UNICODE
  - [What every JavaScript developer should know about Unicode](https://dmitripavlutin.com/what-every-javascript-developer-should-know-about-unicode/)
  - [UTF-16 characters, Unicode code points, and grapheme clusters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) - mdn
  - [UTF-16](https://en.wikipedia.org/wiki/UTF-16) - wikipedia


## Standards

* Netscape
  - ___JS 1.0___ - 1995 - _Netscape 2.0_
    - [JavaScript Authoring Guide](https://web.archive.org/web/19970613234917id_/http://home.netscape.com/eng/mozilla/2.0/handbook/javascript/index.html) ([_updated_](https://minimum-viable-product.github.io/js-1.0-handbook/))
  - ___JS 1.1___ - 1996 - [_Netscape 3.0_](https://web.archive.org/web/20020219135930id_/http://ftp.netscape.com/pub/communicator/english/3.04/windows/windows95_or_nt/navigator_gold/g32d304.exe)
    - [JavaScript Guide](https://web.archive.org/web/19970614042441id_/http://home.netscape.com/eng/mozilla/3.0/handbook/javascript/index.html)
  - ___JS 1.2___ - 1997 - [_Netscape 4.0-4.05_](https://web.archive.org/web/20020527043835id_/http://ftp.netscape.com/pub/communicator/english/4.08/windows/windows95_or_nt/navigator_standalone/n32d408.exe)
    - [JavaScript Guide](https://web.archive.org/web/19981206151821id_/http://developer.netscape.com/docs/manuals/communicator/jsguide4/index.htm)
    - [JavaScript Reference](https://web.archive.org/web/19990420172150id_/http://developer.netscape.com/docs/manuals/communicator/jsref/index.htm)
  - ___JS 1.3___ - 1998 - [_Netscape 4.06-4.7x_](https://web.archive.org/web/20020622155649id_/http://ftp.netscape.com:80/pub/communicator/english/4.79/windows/windows95_or_nt/base_install/cb32d479.exe)
    - [Client-Side JavaScript Guide](https://web.archive.org/web/19990427055335id_/http://developer.netscape.com/docs/manuals/js/client/jsguide/index.htm) ([pdf](https://web.archive.org/web/20000818004353id_/http://developer.netscape.com/docs/manuals/js/client/jsguide/ClientGuideJS13.pdf)) ([zip](https://web.archive.org/web/20000818004401id_/http://developer.netscape.com/docs/manuals/js/client/jsguide/ClientGuideJS13.zip))
    - [Client-Side JavaScript Reference](https://web.archive.org/web/19990423121049id_/http://developer.netscape.com/docs/manuals/js/client/jsref/index.htm) ([pdf](https://web.archive.org/web/20000818004411id_/http://developer.netscape.com/docs/manuals/js/client/jsref/ClientReferenceJS13.pdf)) ([zip](https://web.archive.org/web/20000818004419id_/http://developer.netscape.com/docs/manuals/js/client/jsref/ClientReferenceJS13.zip))
  - ___JS 1.4___
    - [Core JavaScript Guide](https://web.archive.org/web/20000301015524id_/http://developer.netscape.com/docs/manuals/js/core/jsguide/index.htm) ([pdf](https://web.archive.org/web/20000818004517id_/http://developer.netscape.com/docs/manuals/js/core/jsguide/CoreGuideJS14.pdf)) ([zip](https://web.archive.org/web/20000818004526id_/http://developer.netscape.com/docs/manuals/js/core/jsguide/CoreGuideJS14.zip))
    - [Core JavaScript Reference](https://web.archive.org/web/20000301130413id_/http://developer.netscape.com/docs/manuals/js/core/jsref/index.htm) ([pdf](https://web.archive.org/web/20000818004546id_/http://developer.netscape.com/docs/manuals/js/core/jsref/CoreReferenceJS14.pdf)) ([zip](https://web.archive.org/web/20000818004552id_/http://developer.netscape.com/docs/manuals/js/core/jsref/CoreReferenceJS14.zip))
  - ___JS 1.5___ - 2000 - [_Netscape 6_](https://web.archive.org/web/20010702053004id_/http://ftp.netscape.com/pub/netscape6/english/6.01/windows/win32/sea/N6Setup.exe)
    - [Core JavaScript Guide](https://web.archive.org/web/20010204031200id_/http://developer.netscape.com/docs/manuals/js/core/jsguide15/contents.html) ([zip](https://web.archive.org/web/20030919183318id_/http://devedge.netscape.com:80/library/manuals/2000/javascript/1.5/guide/CoreGuideJS15.zip))
    - [Core JavaScript Reference](https://web.archive.org/web/20010204033300id_/http://developer.netscape.com/docs/manuals/js/core/jsref15/contents.html) ([zip](https://web.archive.org/web/20030403200417id_/http://developer.netscape.com/docs/manuals/js/core/jsref15/CoreReferenceJS15.zip))
  - ___DHTML___ - 1997 - [_Netscape 4.x_](https://web.archive.org/web/20020622155649id_/http://ftp.netscape.com:80/pub/communicator/english/4.79/windows/windows95_or_nt/base_install/cb32d479.exe)
    - [Dynamic HTML in Netscape Communicator](https://web.archive.org/web/19990423033152id_/http://developer.netscape.com/docs/manuals/communicator/dynhtml/index.htm)
* [ECMA 262](https://ecma-international.org/publications-and-standards/standards/ecma-262/)
  - [ES1](https://www.ecma-international.org/wp-content/uploads/ECMA-262_1st_edition_june_1997.pdf) - 1997 (pdf only) ([_untampered original_](https://web.archive.org/web/20040716162346id_/http://developer.netscape.com/docs/javascript/e262-pdf.pdf))
  - [ES2](https://ecma-international.org/wp-content/uploads/ECMA-262_2nd_edition_august_1998.pdf) - 1998 (pdf only)
  - [ES3](https://ecma-international.org/wp-content/uploads/ECMA-262_3rd_edition_december_1999.pdf) - 1999 (pdf only)
  - [ES5](https://ecma-international.org/wp-content/uploads/ECMA-262_5th_edition_december_2009.pdf) - 2009 (pdf only)
  - [ES5.1](https://262.ecma-international.org/5.1/index.html) - 2011 ([pdf](https://ecma-international.org/wp-content/uploads/ECMA-262_5.1_edition_june_2011.pdf))
  - [ES6](https://262.ecma-international.org/6.0/index.html) - 2015 ([pdf](https://ecma-international.org/wp-content/uploads/ECMA-262_6th_edition_june_2015.pdf))
  - [ES.next](https://tc39.es/ecma262/multipage/) - latest
