// console.log(axios);

const url =
  "https://opendata.paris.fr/api/records/1.0/search/?dataset=arbresremarquablesparis&rows=1000&facet=genre&facet=espece&facet=stadedeveloppement&facet=varieteoucultivar&facet=dateplantation&facet=libellefrancais";

const body = document.querySelector("body");

function displayTrees(trees) {
  console.log(trees); // all the nice trees in Paris
  body.innerHTML = "<ul>";
  // .... loop through the trees
  trees.forEach(tree => {
    body.innerHTML += `<li>
            ${tree.fields.espece} - 
            ${tree.fields.adresse}
        </li>`;
  });
  body.innerHTML += "</ul>";
}

axios
  .get(url)
  .then(res => {
    // console.log(res);
    displayTrees(res.data.records); // an array ojf objects
  })
  .catch(err => {
    console.error(err);
  });
