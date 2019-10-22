const btnCreate = document.getElementById("btn_create");
const contentMain = document.getElementById("main_content");
const boxBackground = document.getElementById("box_bg");
const boxCount = document.getElementById("nb_blocks");

function foo() {
  console.log("foo");
}

function toggleActiveClass(evt) {
  // classList API doc : https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  console.log(evt);
  const element = evt.srcElement || evt.target;
  element.classList.toggle("is-active");
  console.log(element === this);
}

function addBox() {
  const box = document.createElement("div");
  const count = contentMain.querySelectorAll(".box").length;
  box.style.backgroundColor = boxBackground.value;
  box.className = "box";
  // box.style.visibility = "hidden";
  box.textContent = count + 1;
  // console.log(box);

  // this line below is the longest form of line 25
  // box.addEventListener("click", toggleActiveClass);
  box.onclick = toggleActiveClass;

  // you can add several listeners to an element
  box.onmouseenter = function() {
    // you may use anonymous function to wrap several actions
    console.log("mouse enter my friends");
    foo();
  };

  contentMain.appendChild(box);
}

function handleClick() {
  var count = Number(boxCount.value);
  while (count > 0) {
    addBox();
    count--;
  }
}

btnCreate.onclick = handleClick;

// function $(sCSS) {
//   return document.querySelector(sCSS);
// }

// console.log("my JQuery :D", $("#nb_blocks"));
