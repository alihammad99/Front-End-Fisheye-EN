import { addToGallery } from "./addgallery.js";

let photoIndex = 0;
const addVideo = (item, assets, cont, galleryMedia) => {
  const box = document.createElement("div");
  box.classList.add("photos_box");
  photoIndex = galleryMedia.length;
  console.log(item);

  const video = document.createElement("video");

  let index = galleryMedia.indexOf(item);
  console.log(index)

  const source = document.createElement("source");
  source.setAttribute("src", `${assets}/${item.video}`);
  source.setAttribute("type", "video/mp4");
  video.appendChild(source);
  video.classList.add("video");
  box.appendChild(video);
  cont.appendChild(box);
  box.addEventListener("click", () => {
    document.querySelector(".galleryBox").style.display = "block";
    addToGallery(item.id, "video", galleryMedia, assets, index);
  });
};

export default addVideo;
