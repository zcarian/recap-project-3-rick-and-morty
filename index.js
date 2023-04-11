import { createCharacterCard } from "./components/card/card.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import {
  createNextButton,
  createPrevButton,
} from "./components/nav-button/nav-button.js";
import {
  createSearchBar,
  searchQuery,
} from "./components/search-bar/search-bar.js";
export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
searchBarContainer.append(createSearchBar());
const navigation = document.querySelector('[data-js="navigation"]');

export const pageData = {
  page: 1,
  maxPage: 42,
};

export const pagination = createPagination();
navigation.append(createPrevButton());
navigation.append(pagination);
navigation.append(createNextButton());

export async function fetchData() {
  try {
    let page = pageData.page;
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
    );
    if (!response.ok) {
      console.log("Bad request!");
    } else {
      const rickAndMortyData = await response.json();
      console.log(rickAndMortyData);
      pageData.maxPage = rickAndMortyData.info.pages;
      pagination.textContent = `${pageData.page} / ${pageData.maxPage}`;
      rickAndMortyData.results.forEach((rickAndMortyCharacter) => {
        cardContainer.append(createCharacterCard(rickAndMortyCharacter));
      });
    }
  } catch (e) {
    console.error(e);
    pagination.textContent = "0/0";
  }
}

fetchData();
