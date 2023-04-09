import { createCharacterCard } from "./components/card/card.js";
const cardContainer = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[class="search-bar__input"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

let maxPage;
let page = 1;
let searchQuery = "";

async function fetchData() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
    );
    if (!response.ok) {
      console.log("Bad request!");
    } else {
      const rickAndMortyData = await response.json();
      maxPage = rickAndMortyData.info.pages;
      pagination.textContent = `${page} / ${maxPage}`;
      rickAndMortyData.results.forEach((rickAndMortyCharacter) => {
        cardContainer.append(createCharacterCard(rickAndMortyCharacter));
      });
    }
  } catch (e) {
    console.error(e);
  }
}

fetchData();

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    cardContainer.innerHTML = "";
    page++;
    fetchData();
  }
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    cardContainer.innerHTML = "";
    page--;
    fetchData();
  }
});

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  cardContainer.innerHTML = "";
  searchQuery = queryInput.value;
  fetchData();
  page = 1;
});
