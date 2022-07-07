import { galleryMedia } from "../pages/photographer.js";
import { globalAssets } from "../pages/photographer.js";
let current;

export const addToGallery = (item, type, index) => {
  current = index;

  if (type === "photo") {
    addPhoto(item, globalAssets);
  }
  if (type === "video") {
    addVideo(item, globalAssets);
  }
};

export const handleNext = (action) => {
  let length = galleryMedia.length;

  switch (action) {
    case "next": {
      if (current < length - 1) {
        document.querySelector(".gallery").innerHTML = "";
        console.log(galleryMedia);
        const item = galleryMedia[current + 1];

        if (item.photo) {
          current++;
          addPhoto(item, globalAssets);
        }

        if (item.video) {
          current++;
          addVideo(item, globalAssets);
        }
      }
      break;
    }
    case "previous": {
      if (current > 0) {
        document.querySelector(".gallery").innerHTML = "";
        console.log(galleryMedia);
        const item = galleryMedia[current - 1];

        if (item.photo) {
          current--;
          addPhoto(item, globalAssets);
        }

        if (item.video) {
          current--;
          addVideo(item, globalAssets);
        }
      }
      break;
    }
    default:
      return console.error(
        "Unable to handle click event in gallery, please make sure to put an action type."
      );
  }
};

const addPhoto = (item, assets) => {
  const Image = document.createElement("img");
  Image.setAttribute("src", `${assets}/${item.photo}`);

  const box = document.createElement("div");
  box.classList.add("gallery_media-box");

  const title = document.createElement("h3");
  title.classList.add("media-box_contentbox_title");
  title.textContent = item.title;

  box.appendChild(Image);
  document.querySelector(".gallery").append(box, title);
};

const addVideo = (item, assets) => {
  const box = document.createElement("div");
  box.classList.add("gallery_media-box");

  const video = document.createElement("video");
  const source = document.createElement("source");

  source.setAttribute("src", `${assets}/${item.video}`);
  source.setAttribute("type", "video/mp4");
  video.appendChild(source);
  video.autoplay = true;
  video.controls = true;

  const title = document.createElement("h3");
  title.classList.add("media-box_contentbox_title");
  title.textContent = item.title;

  // Push
  box.appendChild(video);
  document.querySelector(".gallery").append(box, title);
};
