// ==UserScript==
// @name         Remove YouTube Shorts Entry
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove the YouTube Shorts entry from the sidebar
// @author       You
// @match        https://*.youtube.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    function removeShortsEntry() {
        const element = document.querySelector('#endpoint[title="Shorts"]');
        if (element) {
            element.remove();
        }
    }

    removeShortsEntry();

    const observer = new MutationObserver(() => {
        removeShortsEntry();
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();

