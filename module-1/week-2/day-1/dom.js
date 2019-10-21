// DOM => Document Object Model
// API => Application programming interface
// the DOM is an API specificaly designed to read/update any HTML/XML document

console.log("hello document");

function inspectDOMElement(node) {
  console.log(node, typeof node);
  console.log("node.id >");
  console.log(node.id);
  console.log("node.className > ");
  console.log(node.className);
  console.log("node.style > ");
  console.log(node.style);
  console.log(node.style.background);
  console.log("node.textContent >");
  console.log(node.textContent);
  console.log("node.innerHTML >");
  console.log(node.innerHTML);
  console.log("node.children > "); // for the header
  console.log(node.children); // for the header
  console.log(node.children[0]); // > nav
  console.log(node.children[0].children);
}

function fromParentToChildren(node) {
  if (node.children.length) {
    for (let i = 0; i < node.children.length; i += 1) {
      console.log(node.children[i]);
      fromParentToChildren(node.children[i]);
    }
  } else return;
}

function fromChildrenToParent(node) {

}

var header;

function start() {
  // 1st DOM selection method
  header = document.getElementById("header_main");
  const body = document.querySelector("body");
  //   inspectDOMElement(header);
  console.log(header);
  console.log("parent =>", header.parentElement); 
  console.log("next sibling => ", header.nextElementSibling);
  console.log("previous sibling => ", header.previousElementSibling.previousElementSibling.previousElementSibling);
  //   fromParentToChildren(header);

//   fromParentToChildren(body);
}

window.addEventListener("DOMContentLoaded", start);
