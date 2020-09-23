// ==UserScript==
// @name         ChatMode
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://www.facebook.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var modifiedChatWindow = document.createElement('style');
    modifiedChatWindow.type = "text/css";
    //modifiedChatWindow.innerHTML = '.kwja4m9d {height: 1000px !important;} .jbcpqwzg {width: 450px !important;} .jgljxmt5{min-height: 100vh;} .be9z9djy{top: 0 !important;}';
    document.querySelector('head').appendChild(modifiedChatWindow);

    var elementsWithNavRole = document.querySelectorAll('[role="navigation"], [role="banner"]');
    var arrayNeedToBeHidden = Array.from(elementsWithNavRole);
    arrayNeedToBeHidden.push(document.querySelector('[data-pagelet="RightRail"]').firstElementChild);

    var contactsElement = document.querySelector('[data-pagelet="RightRail"]').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild;
    var mainElement = document.querySelector('[role="main"]');

    var chatMode = false;
    contactsElement.addEventListener('click',
                                     function(){
        if(chatMode){
            arrayNeedToBeHidden.map(f => (f.hidden=false));
            mainElement.style.display="";
            modifiedChatWindow.innerHTML = '';
            chatMode=false;
        }else{
            arrayNeedToBeHidden.map(f => (f.hidden=true));
            mainElement.style.display="none";
            modifiedChatWindow.innerHTML = '.kwja4m9d {height: 1000px !important;} .jbcpqwzg {width: 450px !important;} .jgljxmt5{min-height: 100vh !important;} .be9z9djy{top: 0 !important;}';
            chatMode=true;
        }
    })

})();
