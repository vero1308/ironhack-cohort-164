const introOverlay = document.getElementById("intro_overlay");
const btnStart = document.getElementById("btn_start");
const arrows = document.getElementById("arrows");
const audio = document.getElementById("audio");

arrows.querySelectorAll(".icon").forEach(icon => {
    icon.onclick = (evt) => {
    console.log(evt.target.getAttribute("data-direction"));
  };
});

document.addEventListener("keydown", evt => {
  if (evt.key === "ArrowRight") {
    console.log("right");
  } else if (evt.key === "ArrowLeft") {
    console.log("left");
  } else if (evt.key === "ArrowUp") {
    console.log("up");
  } else if (evt.key === "ArrowDown") {
    console.log("down");
  }
});

btnStart.onclick = function() {
  introOverlay.classList.toggle("is-hidden");
  btnStart.classList.toggle("is-hidden");
  btnStart.style.display = "none";
  arrows.classList.toggle("is-hidden");
};

// window.onload = function() {
// audioTricks.addEventListener('click', musicPlay);
// audioTricks.click();

// function musicPlay() {
//   console.log(audio);

//     audio.play().catch(s => {
//       console.log(s)
     
//       audioTricks.removeEventListener('click', musicPlay);
//     })
// }
// }
