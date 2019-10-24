const ranges = document.querySelectorAll(".range-color .range");
const sumElement = document.getElementById("sum");


function updateValue(input) {
  var activeClass;
  const p = input.parentElement.querySelector(".value");
  p.textContent = input.value;
  if (input.value < 33) activeClass = "danger";
  else if (input.value < 66) activeClass = "warning";
  else activeClass = "success";
  p.className = "value " + activeClass;
}

function displaySum(res) {
  sumElement.textContent = res
}

function sum1() {
  var tmp = 0;
  ranges.forEach(range => {
    tmp += Number(range.value);
  });
  return tmp;
}

function sum2() {
  return Array.from(ranges).reduce((acc, range) => acc + Number(range.value), 0);
}

function handleInputs(evt) {
  updateValue(evt.target);
  displaySum(sum2());
}

ranges.forEach(range => {
  // loop through each range
  range.oninput = handleInputs; // listen to input events and handle them
});

