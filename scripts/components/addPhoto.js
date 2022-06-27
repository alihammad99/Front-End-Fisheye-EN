
const addPhoto = (source, title, assets, cont) => {
  const box = document.createElement("div");
  box.classList.add("photos_box");

  const img = document.createElement("img");
  img.setAttribute("src", `${assets}/${source}`);
  img.setAttribute("alt", title);
  box.appendChild(img);
  cont.appendChild(box);
  // img.addEventListener(click, gallery(media, ));
};

export default addPhoto;
