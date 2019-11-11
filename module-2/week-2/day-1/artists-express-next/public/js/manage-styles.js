import apiService from "./api-service.js";

const editBtns = document.querySelectorAll(".btn.edit");


function handleEditStyle(evt) {
  console.log(evt);
  const targetId = evt.target.getAttribute("data-style-id");
  console.log(targetId);
  evt.preventDefault();
}

editBtns.forEach(btn => {
  btn.onclick = handleEditStyle;
});
