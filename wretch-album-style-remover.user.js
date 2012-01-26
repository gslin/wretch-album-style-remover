// ==UserScript==
// @name        Wretch Album Style Remover
// @version     2011.1125.03
// @namespace   http://blog.gslin.org/plugins/wretch-album-style-remover
// @description Remove wretch album style
// @homepage    http://blog.gslin.org/plugins/wretch-album-style-remover
// @include     http://www.wretch.cc/album/*
// ==/UserScript==

(function(){
    var obj = document.styleSheets;
    for (var i = 0; i < obj.length; i++) {
        obj.item(i).disabled = true;
    }

    obj = document.getElementsByTagName('*');
    for (var i = 0; i < obj.length; i++) {
        obj[i].style.cssText = '';
    }

    var obj = document.getElementById('kukubar-upper');
    if (obj) {
        obj.parent.removeChild(obj);
    }

    obj = document.getElementById('kukubar-lower');
    if (obj) {
        obj.parent.removeChild(obj);
    }

})();
