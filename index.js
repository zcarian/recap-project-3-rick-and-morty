import { createCharacterCard } from "./components/card/card.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import {
  createNextButton,
  createPrevButton,
} from "./components/nav-button/nav-button.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";
export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
searchBarContainer.append(createSearchBar());
const queryInput = document.querySelector('[class="search-bar__input"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');

export const pagination = createPagination();
export let maxPage = 42;
navigation.append(createPrevButton());
navigation.append(pagination);
navigation.append(createNextButton());

// export let page = 1;
let searchQuery = "";

export async function fetchData(page = 1) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
    );
    if (!response.ok) {
      console.log("Bad request!");
    } else {
      const rickAndMortyData = await response.json();
      maxPage = rickAndMortyData.info.pages;
      // pagination.textContent = `${page} / ${maxPage}`;
      rickAndMortyData.results.forEach((rickAndMortyCharacter) => {
        cardContainer.append(createCharacterCard(rickAndMortyCharacter));
      });
    }
  } catch (e) {
    console.error(e);
  }
}

fetchData();

// nextButton.addEventListener("click", () => {
//   if (page < maxPage) {
//     cardContainer.innerHTML = "";
//     page++;
//     fetchData(page);
//   }
// });

// prevButton.addEventListener("click", () => {
//   if (page > 1) {
//     cardContainer.innerHTML = "";
//     page--;
//     fetchData(page);
//   }
// });

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  cardContainer.innerHTML = "";
  searchQuery = queryInput.value;
  fetchData();
  pagination.textContent = `${page} / ${maxPage}`;
});
