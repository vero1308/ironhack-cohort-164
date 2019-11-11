import apiService from "./api-service.js";

const input = document.getElementById("search_query");
const form = document.getElementById("search_bar");

function handleSearch(evt) {
    evt.preventDefault();
    console.log("clicked");
    apiService.get("/search")
    .then(ajaxRes => {
        console.log(ajaxRes)
    })
    .catch(ajaxErr => {
        
    })
}

form.onsubmit = handleSearch;