import { addToGallery } from "./addgallery.js";
import { handleGallery } from "./gallery.js";

const addPhoto = (item, assets, cont, galleryMedia, galleryPhoto) => {
  const index = galleryMedia.indexOf(item);
  
  const box = document.createElement("div");
  box.classList.add("photos_box");
  // console.log(num);

  const img = document.createElement("img");
  img.setAttribute("src", `${assets}/${item.photo}`);
  img.setAttribute("alt", item.title);
  box.appendChild(img);
  cont.appendChild(box);

  // img.addEventListener("click", () => {
  //   handleGallery("current", galleryMedia, galleryPhoto, assets, index);
  //   document.querySelector(".gallery").style.display = "block";
  // });
  box.addEventListener("click", () => {
    document.querySelector(".galleryBox").style.display = "block";
    addToGallery(item.id, "photo", galleryMedia, assets, index);
  });
};

export default addPhoto;
