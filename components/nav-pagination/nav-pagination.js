import { page } from "../nav-button/nav-button.js";
import { maxPage } from "../../index.js";

export function createPagination() {
  const pagination = document.createElement("span");
  pagination.classList.add("navigation__pagination");
  pagination.setAttribute("data-js", "pagination");
  pagination.textContent = "1 / 42";
  return pagination;
}
