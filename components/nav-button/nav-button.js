import { fetchData, cardContainer, pageData } from "../../index.js";
export function createPrevButton() {
  const previousButton = document.createElement("button");
  previousButton.classList.add("button");
  previousButton.classList.add("button--prev");
  previousButton.setAttribute("data-js", "button-prev");
  previousButton.textContent = "previous";

  previousButton.onclick = function () {
    if (pageData.page > 1) {
      cardContainer.innerHTML = "";
      pageData.page--;
      fetchData(pageData.page);
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
    if (pageData.page < pageData.maxPage) {
      cardContainer.innerHTML = "";
      pageData.page++;
      fetchData(pageData.page);
    }
  };

  return nextButton;
}
