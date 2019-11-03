const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

const home = document.getElementById("home");
const chronometer = document.getElementById("chronometer");
const chronometerUpdate = chronometer.querySelector(".update");
const life = document.getElementById("life");
const lifeUpdate = life.querySelector(".update");
const scoreElement = document.getElementById("score");

const toggleHome = () => home.classList.toggle("is-active");

const updateChronoElement = (time, limit = 60) => {
  const percent = (time * 100) / limit;
  chronometerUpdate.style.width = `${percent}%`;
};

const updateLifeElement = life => (lifeUpdate.style.width = `${100 - life}%`);

const updateScoreElement = score => (scoreElement.textContent = score);

export {
  canvas,
  ctx,
  updateChronoElement,
  updateLifeElement,
  updateScoreElement,
  toggleHome
};
