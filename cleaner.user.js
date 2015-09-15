// ==UserScript==
// @name        m-Delfi 
// @namespace   foobar
// @include     http://m.delfi.ee/*
// @include     http://m.*.delfi.ee/*
// @version     1.01
// @grant       none
// @updateURL https://raw.githubusercontent.com/Jansza/GM-mDelfi/master/scratchpad.js
// @downloadURL https://raw.githubusercontent.com/Jansza/GM-mDelfi/master/scratchpad.js
// ==/UserScript==

var classes = ['md-banner', 'md-specialblock', 'mobile-widget'];
for (var i = 0; i < classes.length; i++) {
	var elements = document.querySelectorAll('div[class*="' + classes[i] + '"]') || [];
	for (var j = 0; j < elements.length; j++) {
		elements[j].style.display = 'none';
	}
}