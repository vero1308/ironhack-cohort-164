import apiService from "./api-service.js";

const input = document.getElementById("search_query");
const form = document.getElementById("search_bar");
const results = document.getElementById("search_results");

function displaySearchResults(data) {
  results.innerHTML = "";

  data.forEach(d => {
    results.innerHTML += `<div class="result">
        <a href="/artist/${d._id}">${d.name}</a>
    </div>`;
  });
}

function handleSearch(evt) {
  evt.preventDefault();
  // evt.preventDefault() avoids page refresh !!!
  apiService
    .get("/search?q=" + input.value)
    .then(ajaxRes => displaySearchResults(ajaxRes.data))
    .catch(ajaxErr => console.log(ajaxErr));
}

form.onsubmit = handleSearch;
