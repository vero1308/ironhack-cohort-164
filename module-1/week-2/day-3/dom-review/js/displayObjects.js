const musicArtists = [
  { name: "Wu Tang Clan", rate: 5 },
  { name: "Joy Division", rate: 4 },
  { name: "Lunatic", rate: 3 },
  { name: "Bad Brains", rate: 5 },
  { name: "Kendrick Lamar", rate: 5 },
  { name: "Duke Ellington", rate: 5 },
  { name: "Peter Tosh", rate: 1 }
];

const btn = document.getElementById("btn_display");
const artistsContainer = document.getElementById("artists");

function getStarsTemplate(count) {
  var tpl = '<div class="stars">';
  while (count > 0) {
    tpl += '<i class="fas fa-star"></i>';
    count--;
  }
  tpl += "</div>";
  return tpl;
}

function displayArtists() {
  musicArtists.forEach(artist => {
    artistsContainer.innerHTML += `<div class="artist">${
      artist.name
    } ${getStarsTemplate(artist.rate)}</div>`;
  });
}

btn.onclick = displayArtists;
