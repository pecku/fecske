// ==UserScript==
// @name         ChatMode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @downloadURL  https://github.com/pecku/fecske/edit/master/ChatMode.js
// @description  try to take over the world!
// @author       You
// @match        https://www.facebook.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /*
    var contactsElement = document.querySelector('[data-pagelet="RightRail"]').firstElementChild.nextElementSibling;
    var buttonParent = contactsElement.querySelector('[aria-label="New room"]').parentElement.parentElement.parentElement;
    //var clonedButton = buttonParent.firstElementChild.cloneNode(true);

    var notReallyClonedButton = document.createElement('input');
    notReallyClonedButton.type="button";
    notReallyClonedButton.id="nrcb";
    notReallyClonedButton.value="CM";

    buttonParent.insertBefore(notReallyClonedButton, buttonParent.firstElementChild);
    */

    var elementsWithNavRole = document.querySelectorAll('[role="navigation"]');
    var arrayNeedToBeHidden = Array.from(elementsWithNavRole);
    arrayNeedToBeHidden.push(document.querySelector('[role="banner"]'));
    //arrayNeedToBeHidden.push(document.querySelector('[role="main"]'));
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
            chatMode=true;}})

    //arrayOfElementsWithNavRole.map(f => (f.style.display = "none"));



})();
