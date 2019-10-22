function handler(event) {
  // event is an implicit parameter
  // it comes by default with any eventHandler function
  // ... so any function responding to an event !!!
//   const target = event.target || event.srcElement; // cross browser solution
  console.log(event);
  console.log(event.foo); // most likely undefined
  console.log(event.target); // the source of the click
  console.log(this === event.target); // true in taht case

//   event.target.classList.toggle("is-rotating");
  event.target.classList.toggle("is-moving");

  /* the lines above will apply a CSS class to the element if the element doesn't have it. else it will remove the specified CSS class */
}

document.querySelectorAll(".block").forEach(block => {
  // a event listener MUST allways be associated to a FUNCTION => these functions are called "event handler" :)
  block.onclick = handler;
});
