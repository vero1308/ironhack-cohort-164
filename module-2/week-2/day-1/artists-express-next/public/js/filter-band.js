console.log("ready to rock");
import apiService from "./api-service.js";

const checkbox = document.getElementById("filter_band_only");
const artistsContainer = document.querySelector(".artists");

function updateList(artists) {
  artistsContainer.innerHTML = "";
  artists.forEach(artist => {
    const tpl = `<li data-artist-id="${artist._id}" class="artist shadow-box">
        <div class="color-code" style="background: chartreuse"></div>
        <h2 class="title">${artist.name}</h2>
        <a href="/artist/${artist._id}">see details...</a>
    </li>`;
    artistsContainer.innerHTML += tpl;
  });
}

function handleInput(evt) {
  //   console.log(evt.target.checked);
  apiService
    .get(`/filtered-artists?band=${evt.target.checked}`)
    .then(apiRes => {
      console.log(apiRes.data);
      updateList(apiRes.data);
    })
    .catch(apiErr => {
      console.log(apiErr);
    });
}

checkbox.oninput = handleInput;

// function updateList3(artists) {
//   const artistCards = document.querySelectorAll(".artists .artist");
//   artistCards.forEach(card => {
//     const id = card.getAttribute("data-artist-id");
//     let v = false;
//     console.log(id);
//     artists.forEach(artist => {
//       if (artist._id === id) {
//         v = true;
//       }
//     });
//     if (!v) card.remove();
//   });
// }

// function updateList2(artists) {
//   console.log("^^");
//   const artistCards = document.querySelectorAll(".artists .artist");
//   const x = [...artistCards].filter((artist, i) => {
//     const y = artists.findIndex(
//       x => x._id !== artist.getAttribute("data-artist-id")
//     );
//     console.log("------yata");
//     console.log(y);
//     return y;
//   });
// }