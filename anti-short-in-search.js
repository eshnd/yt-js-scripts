// ==UserScript==
// @name         Remove YouTube Videos with "Short" in Title
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes YouTube videos that contain the word "short" in the title
// @author       You
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeShorts() {
        let videos = document.querySelectorAll('ytd-video-renderer');
        videos.forEach(video => {
            if (video.innerText.toLowerCase().includes("short")) {
                video.remove();
            }
        });
    }

    removeShorts();

    const observer = new MutationObserver(mutations => {
        for (let mutation of mutations) {
            if (mutation.addedNodes.length) {
                removeShorts();
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();

