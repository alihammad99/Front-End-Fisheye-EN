async function getPhotographers() {
  // TODO : Replace with data from the JSON file
  const data = await fetch("../../data/photographers.json").then((response) =>
    response.json()
  );

  const photographers = data.photographers;

  // Return photographer array only once
  return {
    photographers,
  };
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Retreive photographer data
  const { photographers } = await getPhotographers();
  data = photographers;
  displayData(photographers);
}

init();
