import photographerFactory from "../factories/photographer.js";

const request = new Request("../../data/photographers.json");

export const getPhotographers = async () => {
  // TODO : Replace with data from the JSON file
  const data = await fetch(request)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  const { photographers, media } = await data;

  // Return photographer array only once
  return {
    photographers,
    media,
  };
};

const displayData = async (photographers) => {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection && photographersSection.appendChild(userCardDOM);
  });
};

const init = async () => {
  // Retreive photographer data
  const { photographers } = await getPhotographers();
  displayData(photographers);
};
window.addEventListener("load", init());
