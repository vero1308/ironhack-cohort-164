const canvas = document.getElementById("board");

const chronometer = document.getElementById("chronometer");
const chronometerUpdate = chronometer.querySelector("#update");


const ctx = canvas.getContext("2d");

const updateChronoElement = (time, limit) => {
  const percent = (time * 100) / limit;
  chronometerUpdate.style.width = `${percent}%`;
};

export { canvas, ctx, updateChronoElement };
