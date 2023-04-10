import { fetchData, cardContainer, maxPage, pagination } from "../../index.js";
export let page = 1;
export function createPrevButton() {
  const previousButton = document.createElement("button");
  previousButton.classList.add("button");
  previousButton.classList.add("button--prev");
  previousButton.setAttribute("data-js", "button-prev");
  previousButton.textContent = "previous";

  previousButton.onclick = function () {
    if (page > 1) {
      cardContainer.innerHTML = "";
      page--;
      fetchData(page);
      pagination.textContent = `${page} / ${maxPage}`;
      console.log("page: ", page, "maxPage: ", maxPage);
    }
  };

  return previousButton;
}
export function createNextButton() {
  const nextButton = document.createElement("button");
  nextButton.classList.add("button");
  nextButton.classList.add("button--next");
  nextButton.setAttribute("data-js", "button-next");
  nextButton.textContent = "next";

  nextButton.onclick = function () {
    if (page < maxPage) {
      cardContainer.innerHTML = "";
      page++;
      fetchData(page);
      pagination.textContent = `${page} / ${maxPage}`;

      console.log("page: ", page, "maxPage: ", maxPage);
    }
  };

  return nextButton;
}
