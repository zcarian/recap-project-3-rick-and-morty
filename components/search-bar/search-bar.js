import { fetchData, cardContainer, pageData } from "../../index.js";

export let searchQuery = "";

export function createSearchBar() {
  const form = document.createElement("form");
  form.classList.add("search-bar");
  form.setAttribute("action", "");
  form.setAttribute("data-js", "search-bar");

  const input = document.createElement("input");
  input.setAttribute("name", "query");
  input.setAttribute("class", "search-bar__input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "search characters");
  input.setAttribute("aria-label", "character name");
  form.append(input);

  const button = document.createElement("button");
  button.classList.add("search-bar__button");
  button.setAttribute("aria-label", "search for character");

  const img = document.createElement("img");
  img.classList.add("search-bar__icon");
  img.src = "assets/magnifying-glass.png";
  img.setAttribute("alt", "");
  button.append(img);
  form.append(button);

  form.onsubmit = function (event) {
    event.preventDefault();
    cardContainer.innerHTML = "";
    searchQuery = input.value;
    pageData.page = 1;
    fetchData();
  };

  return form;
}
