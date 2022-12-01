// ==UserScript==
// @name         新浪微博彩色版
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http*://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=weibo.com
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
.grayTheme {
        -webkit-filter: grayscale(0);
        -moz-filter: grayscale(0);
        -ms-filter: grayscale(0);
        -o-filter: grayscale(0);
        filter: grayscale(0);
        filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=0);
      }
`)
