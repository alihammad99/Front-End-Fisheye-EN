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
    const Paragraph = document.createElement("p");

    const Name = document.createElement("h2");
    Name.textContent = name;
    const Place = document.createElement("span");
    Place.textContent = `${city}, ${country}`;
    const Bio = document.createElement("span");
    Bio.textContent = tagline;
    const Price = document.createElement("span");
    Price.textContent = `$${price}/day`;
    link.setAttribute("role", "Link (h2) + image");
    link.append(Photo, Name);
    Paragraph.append(Place, Bio, Price);
    Paragraph.setAttribute("role", "Paragraph text");
    article.setAttribute("role", "Link (h2) + image");
    article.appendChild(link);
    article.appendChild(Paragraph);
    return article;
  }
  return { name, picture, getUserCardDOM };
}
