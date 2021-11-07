// ==UserScript==
// @name       ddg2google
// @namespace  http://nozav.org/
// @version    0.3.0
// @description  Keyboard shortcut to send a DuckDuckGo query to Google
// @match      http*://duckduckgo.com/*
// @match      http*://next.duckduckgo.com/*
// @match      http*://search.brave.com/*
// @copyright  2021, Julien Barnier
// ==/UserScript==

function doc_keyUp(e) {
    switch (e.keyCode) {
        case 71:
            //g
            if (e.altKey) {
                // ddg
                let search_field = document.getElementById("search_form_input");
                // brave
                if (search_field === null) {
                    search_field = document.getElementById("searchbox");
                }
                const search_string = escape(search_field.value)
                window.location = "https://www.google.com/search?q=" + search_string;
            }
            break;
    }
}

document.addEventListener('keyup', doc_keyUp, false);

