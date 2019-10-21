// with module type scripts, you don't need to wait for the DOMLoad event...
// there are some other differences, we'll cover them later ; )
// https://developer.mozilla.org/en-US/docs/Web/Events

var footer = document.getElementById("footer_main");
var mainContent = document.getElementById("main_content");
var myButton = document.getElementById("my_button");
var pCountBtn = document.getElementById("count_p_button");
var myInput = document.getElementById("my_input");

function foo(d) {
  console.log(footer.textContent); // prints the text inside the footer
  console.log(d === footer); // true here !
}

// foo(footer);

function clickHandler() {
  // console.log("i'm the click handler");
  // console.log(myInput.value); // represents the input's current value 
  mainContent.innerHTML += `<p class="paragraph">${myInput.value}</p>`;
};

function countPInMain() {
 // count how many paragraph are child of mainContent ...
 const ps = document.querySelectorAll("#main_content p");
 const psAlternative = mainContent.querySelectorAll("p");
 console.log(ps, ps.length);
 console.log(psAlternative, psAlternative.length);
 console.log(ps === psAlternative); // true or false, why ???
}

console.log(myButton);
console.log(myInput.value);

// add 1st events
myButton.onclick = clickHandler;
pCountBtn.onclick = countPInMain;
// above: clickHandler is executed each time the button is clicked

// myButton.addEventListener("click", function() {
//   console.log("clicked !!!");
// });

// myButton.addEventListener("click", clickHandler);

// myButton.onclick = function() {
//   console.log("clicked too !!!");
// };


// modify innerHTML
// modify through appendChild
// add / remove some css classes
