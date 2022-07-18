import { handleNext } from "./addgallery.js";

const handleGalleryBtn = () => {
  const next = document.querySelector(".nextBtn");
  const previous = document.querySelector(".prevBtn");

  next.addEventListener("click", () => handleNext("next"));
  next.addEventListener(
    "keypress",
    (e) => e.key == "Enter" && handleNext("next")
  );
  previous.addEventListener("click", () => handleNext("previous"));
  previous.addEventListener(
    "keypress",
    (e) => e.key == "Enter" && handleNext("previous")
  );
};

export default handleGalleryBtn;
