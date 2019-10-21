// with module type scripts, you don't need to wait for the DOMLoad event...
// there are some other differences, we'll cover them later ; )

var footer = document.getElementById("footer_main");

function foo(d) {
  console.log(footer); // prints the text inside the footer
  console.log(d);
}

foo(footer);
