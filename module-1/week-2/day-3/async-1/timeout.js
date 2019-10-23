const message = "I come from the past !";

// setTimeout(function clbk() {
//   console.log(message);
// }, 5000);

// setTimeout(() => {
//   console.log(message);
// }, 5000);

// setTimeout(() => console.log(message), 5000);

function action() {
  console.log(message);
}

const timeOutID = setTimeout(action, 5000);
console.log(timeOutID)
