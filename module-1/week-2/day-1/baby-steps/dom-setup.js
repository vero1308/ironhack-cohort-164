/* REMEMBER THESE ONE IF ANY

=> document.getElementById (null || object)

=> document.querySelector (null || object)
=> document.querySelectorAll (nodeList == array )

=> element.querySelector (null || object)
=> element.querySelectorAll  (nodeList == array )

BONUS : the old schoold ones 
--->
document.getElementsByTagName (HTMLCollection == array)
document.getElementsByClassName (HTMLCollection == array)

*/

function testElementQuerySelector(parent, cssSelector) {
    const target = parent.querySelector(cssSelector);
    const targets = parent.querySelectorAll(cssSelector);
    console.log("unique > " , target); 
    console.log("multiple", targets);
}

function start() {
    var header = document.getElementById("header_main");
    var footer = document.getElementById("footer_main");
    var main = document.getElementById("main_content");
    console.log(header.innerHTML); // prints the HTML markup inside the header
    console.log(footer.textContent); // prints the text nodes inside the footer

    testElementQuerySelector(main, "p");
    testElementQuerySelector(header_main, ".link:nth-child(2)");
}

console.log(header); // null before load ....

window.addEventListener("DOMContentLoaded", start);