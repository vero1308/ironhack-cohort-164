console.log("hello front end script !!!!");

const hearts = document.querySelectorAll(".fa-heart");
console.log(hearts);

function handleClick(evt) {
  evt.target.classList.toggle("is-active");
}

hearts.forEach(heart => {
  heart.onclick = handleClick;
});
