console.log("hello");

const inputRow = document.getElementById("row_value");
const btnAdd = document.getElementById("btn_add");
const btnSum = document.getElementById("btn_sum");
const container = document.getElementById("container");
const sumResult = document.getElementById("sum_result");

function addRow() {
  const row = document.createElement("div");
  const button = document.createElement("button");
  const span = document.createElement("span");

  row.className = "row";

  span.className = "price"
  span.textContent = inputRow.value;

  button.className = "button";
  button.textContent = "delete";

  button.onclick = () => button.parentElement.remove();

  row.appendChild(span);
  row.appendChild(button);
  container.appendChild(row);
}

function sumRows() {
  const prices = document.querySelectorAll("#container .row .price");
  var total = 0;

  prices.forEach(price => {
    console.log(price.textContent)
    total += Number(price.textContent)
  });

  sumResult.textContent = total;
}

btnAdd.onclick = addRow;
btnSum.onclick = sumRows;
