function photographerFactory(data) {
  const { name, portrait, id, city, country, tagline, price } = data;

  const picture = `assets/photographers/Photographer_Photos/${portrait}`;
  const path = `/details.html?id=${id}`;
  function getUserCardDOM() {
    const article = document.createElement("article");
    const link = document.createElement("a");
    link.setAttribute("href", path);
    link.setAttribute("target", "_blank");
    const Photo = document.createElement("img");
    Photo.classList.add("portrait");
    Photo.setAttribute("src", picture);
    Photo.setAttribute("alt", name);
    const Name = document.createElement("h2");
    Name.textContent = name;
    const Place = document.createElement("h3");
    Place.textContent = `${city}, ${country}`;
    const Bio = document.createElement("h4");
    Bio.textContent = tagline;
    const Price = document.createElement("p");
    Price.textContent = `$${price}/day`;

    link.appendChild(Photo);
    article.appendChild(link);
    article.appendChild(Name);
    article.appendChild(Place);
    article.appendChild(Bio);
    article.appendChild(Price);
    return article;
  }
  return { name, picture, getUserCardDOM };
}
