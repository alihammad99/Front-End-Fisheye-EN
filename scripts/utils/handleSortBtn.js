import { handleSorting } from "../pages/photographer.js";

let openListState = false;

const handleSortBtn = (galleryMedia, updateFunc, defaultData) => {
  const sortBtn = document.querySelector(".sort-list");

  sortBtn.addEventListener("click", () => {
    if (!openListState) {
      openListState = !openListState;
      return sortBtn.setAttribute("aria-expanded", "true");
    } else {
      openListState = !openListState;
      return sortBtn.setAttribute("aria-expanded", "false");
    }
  });

  sortBtn.addEventListener("change", (e) =>
    handleSorting(sortBtn, updateFunc, e)
  );
};

export default handleSortBtn;
