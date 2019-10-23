// console.log(this);

function foo() {
  console.log(this); // window
  this.thing = "yo";
}

// foo();

function bar() {
  "use strict";
  console.log(this); //  undefined because in strict mode
  //   this.thing = "yo"; // throws an error
}


// bar();

class Ironhacker {
  constructor(n) {
    this.name = n;
    // console.log(this); // the constructed object, instance of Ironhacker
  }

  sayMyName() {
    console.log(this);
    setTimeout(() => {
      console.log("---hey--->");
      console.log(this); // fat arrow functions use the parent's value of this
    }, 100);

    setTimeout(function() {
        console.log(this); // any function(){} will redefined it's own this
      }, 100);
  }
}

const noemie = new Ironhacker("Noémie");
// console.log(noemie);
noemie.sayMyName();


window.onload = function(evt) {
  console.log("this in onload ===>");
  console.log(this); // windows triggered the event ... so window
  const btn = document.getElementById("btn");
  btn.onclick = function(evt) {
    console.log("this in onclick ===>");
    console.log(this); // btn triggered the event ... so btn
  };
};

function baz() {
  console.log("this in baz is " + this); // gui
}

baz.bind("gui")(); // we bound 'gui' as value of this in the next function call
