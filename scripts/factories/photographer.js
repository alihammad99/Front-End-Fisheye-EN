function photographerFactory(data) {
  const { name, portrait, id, city, country, tagline, price } = data;

  const picture = `assets/photographers/Photographer_Photos/${portrait}`;
  const path = `/details.html?id=${id}`;
  function getUserCardDOM() {
    const section = document.createElement("section");
    const link = document.createElement("a");
    link.setAttribute("href", path);
    link.setAttribute("role", "link");
    link.setAttribute("aria-label", name);
    link.setAttribute("target", "_blank");
    const Photo = document.createElement("img");
    Photo.classList.add("portrait");
    Photo.setAttribute("src", picture);
    Photo.setAttribute("alt", name);
    const Paragraph = document.createElement("p");

    const Name = document.createElement("h2");
    Name.textContent = name;

    const Place = document.createElement("span");
    Place.classList.add("place");
    Place.textContent = `${city}, ${country}`;

    const Bio = document.createElement("span");
    Bio.classList.add("bio");
    Bio.textContent = tagline;

    const Price = document.createElement("span");
    Price.textContent = `$${price}/day`;
    Price.classList.add("price");

    link.setAttribute("role", "Link");
    link.append(Photo, Name);
    Paragraph.append(Place, Bio, Price);
    Paragraph.setAttribute("role", "Paragraph text");
    section.appendChild(link);
    section.appendChild(Paragraph);
    return section;
  }
  return { name, picture, getUserCardDOM };
}
