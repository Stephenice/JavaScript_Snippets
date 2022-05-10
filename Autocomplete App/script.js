const search = document.querySelector("#search");
const matchList = document.querySelector("#match-list");

let card = "";
// search state
async function searchStates(searchText) {
  const res = await fetch("./state_capitals.json");
  const states = await res.json();
  // get match to input
  let matches = states.filter((state) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return state.name.match(regex) || state.abbr.match(regex);
  });

  if (searchText.length === 0) {
    matches = [];
  }

  console.log(matches);
  outputHtml(matches);
}

function outputHtml(matches) {
  if (matches.length > 0) {
    const html = matches
      .map(
        (match) => `
    <div class="card cardIn card-body mb-1">
    <h4 class="putin">${match.name} (${match.abbr}) 
    <span class="text-primary">
    ${match.capital}</span></h4>
    </div>
    `
      )
      .join("");
    matchList.innerHTML = html;
  }
}
// searchStates();
search.addEventListener("input", function () {
  searchStates(search.value);
});
