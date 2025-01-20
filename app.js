// const form = document.querySelector("form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formData = new FormData(form);
//   const jsObjectPlease = Object.fromEntries(formData);
//   console.log(jsObjectPlease);
// });

// async function fetchFromThere() {
//   const response = await fetch(
//     "https://api.github.com/repos/ScatterCookie/endOfWeekProject3"
//   );
//   console.log("HTTP Response:", response);
//   const data = await response.json();
//   console.log("JSON Data:", data);
//   document.getElementById("p1").innerHTML = data.stargazers_count;
//}

// fetchFromThere();

const form = document.getElementById("form");
const displayElem = document.getElementById("holdUi");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const result = new FormData(form);
  const searchTerm = Object.fromEntries(result);
  console.log(searchTerm.query);
  fetchWordDef(searchTerm.query);
});

async function fetchWordDef(word) {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  const data = await response.json();
  generateUI(data[0]);
}

function generateUI(data) {
  displayElem.innerHTML = "";
  console.log(data.meanings[0].definitions[0].definition);

  displayElem.innerText = data.meanings[0].definitions[0].definition;
}
