import { defaultData } from "../pages/photographer.js";
import updateOptionsState from "./updateOptionsState.js";

export let galleryMedia = [];

setTimeout(() => {
  galleryMedia = [...defaultData];
}, 150);

const handleSorting = (sortBtn, updateFunc, e) => {
  sortBtn.setAttribute("aria-expanded", "true");

  switch (e.target.value) {
    case "Date":
      galleryMedia = galleryMedia.sort((a, b) => b.date - a.date);
      updateOptionsState(e.target.options, 1);
      updateFunc();
      break;

    case "Title":
      galleryMedia = galleryMedia.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (b.title < a.title) {
          return 1;
        }
        return 0;
      });
      updateOptionsState(e.target.options, 2);
      updateFunc();
      break;

    default:
      galleryMedia = [...defaultData];
      updateOptionsState(e.target.options, 0);
      updateFunc();
      break;
  }
};

export default handleSorting;
