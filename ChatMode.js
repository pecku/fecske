// ==UserScript==
// @name         ChatMode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.facebook.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    var elementsWithNavRole = document.querySelectorAll('[role="navigation"]');
    var arrayNeedToBeHidden = Array.from(elementsWithNavRole);
    arrayNeedToBeHidden.push(document.querySelector('[role="banner"]'));
    arrayNeedToBeHidden.push(document.querySelector('[data-pagelet="RightRail"]').firstElementChild);

    var contactsElement = document.querySelector('[data-pagelet="RightRail"]').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild;

    var chatMode = false;
    contactsElement.addEventListener('click',
                                     function(){
        if(chatMode){
            arrayNeedToBeHidden.map(f => (f.hidden=false));
            chatMode=false;
            document.querySelector('[role="main"]').style.display=""
        }else{
            arrayNeedToBeHidden.map(f => (f.hidden=true));
            document.querySelector('[role="main"]').style.display="none";
            chatMode=true;}
        })
    
    var modifiedChatWindow = document.createElement('style');
    modifiedChatWindow.type = "text/css";
    modifiedChatWindow.innerHTML = '.kwja4m9d {height: 1000px !important;} .jbcpqwzg {width: 450px !important;}';
    document.querySelector('head').appendChild(modifiedChatWindow);
})();
