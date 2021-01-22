// ==UserScript==
// @name       ddg2google
// @namespace  http://nozav.org/
// @version    0.2.1
// @description  Keyboard shortcut to send a DuckDuckGo query to Google
// @match      http*://duckduckgo.com/*
// @match      http*://next.duckduckgo.com/*
// @copyright  2014, Julien Barnier
// ==/UserScript==

function doc_keyUp(e) {
    switch (e.keyCode) {
        case 71:
            //g
            if (e.altKey) {
        		var search_field = document.getElementById("search_form_input");
                var search_string = escape(search_field.value)
        		window.location = "https://encrypted.google.com/search?q="+search_string;
            }
        break;
    }
}

document.addEventListener('keyup', doc_keyUp, false);

