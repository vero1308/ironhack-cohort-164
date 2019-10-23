const ranges = document.querySelectorAll(".range-color .range");


function updateValue(evt) {
  var activeClass;
  const input = evt.target;
//   const p = input.parentElement.querySelector(".value");
  const p = input.previousElementSibling;
  p.textContent = input.value;
  if (input.value < 33) activeClass = "danger";
  else if (input.value < 66) activeClass = "warning";
  else activeClass = "success";
  p.className = "value " + activeClass;
}

ranges.forEach(range => {
  range.oninput = updateValue;
});
