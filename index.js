const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

// Task2 : Fetch the Data

// - Import the `createCharacterCard` function.
// - After successfully fetching the character data, use array methods to create an HTML card for each
//   character and append it to the `cardContainer`.
// - Make sure that the `cardContainer` is emptied every time new characters are fetched (HINT: you can
//   use `innerHTML = ''` for that).
// - Call the function inside the `index.js`. Now you should see 20 cards in your app.

async function fetchData() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) {
      console.log("Bad request!");
    } else {
      console.log("Fetch worked!");
    }
    const rickAndMortyData = await response.json();
    console.log(rickAndMortyData.results);

    // rickAndMortyData.results.forEach((rickAndMortyCharacter) => {
    //   renderElement(Card(rickAndMortyCharacter));
    // });
  } catch (e) {
    console.error(e);
  }
}
fetchData();
