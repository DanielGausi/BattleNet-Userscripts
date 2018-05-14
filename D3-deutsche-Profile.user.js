// ==UserScript==
// @name         D3-deutsche-Profile
// @namespace    http://eu.battle.net/
// @include      http*://eu.battle.net/forums/de/d3/*
// @version      0.2
// @description  Ersetzt Links zu den englischen Profilen durch Links zu den deutschsprachigen Profilen
// @author       Hebalon
// @grant        none
// ==/UserScript==

var aLinks = document.getElementsByTagName('a');

for(var i = 0; i < aLinks.length; i++){
  aLinks[i].href = aLinks[i].href.replace("//eu.battle.net/d3/en-eu/profile/", "//eu.diablo3.com/de/profile/");
}