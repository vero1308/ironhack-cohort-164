const btnCreate = document.getElementById("btn_create");
const contentMain = document.getElementById("main_content");
const boxBackground = document.getElementById("box_bg");
const boxCount = document.getElementById("nb_blocks");

function addBox() {
  const box = document.createElement("div");
  const count = contentMain.querySelectorAll(".box").length;
  box.style.backgroundColor = boxBackground.value;
  box.className = "box";
  box.textContent = count + 1;
  box.onclick = toggleActiveClass;
  contentMain.appendChild(box);
}

function toggleActiveClass(evt) {
  // classList API doc : https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  evt.target.classList.toggle("is-active");
  console.log(evt.target === this);
}

function handleClick() {
  var count = Number(boxCount.value);
  while (count > 0) {
    addBox();
    count--;
  }
}

function $(sCSS) {
  return document.querySelector(sCSS);
}

console.log("my JQuery :D", $("#nb_blocks"));

btnCreate.onclick = handleClick;
