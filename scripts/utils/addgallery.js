import { globalAssets, galleryMedia } from "../pages/photographer.js";
let current;

export const addToGallery = (item, type, index) => {
  current = index;

  if (type === "photo") {
    handleAddPhoto(item, globalAssets);
  }
  if (type === "video") {
    handleAddVideo(item, globalAssets);
  }
};

export const handleNext = (action) => {
  let length = galleryMedia.length;

  switch (action) {
    case "next": {
      if (current < length - 1) {
        document.querySelector(".gallery").innerHTML = "";
        const item = galleryMedia[current + 1];

        if (item.photo) {
          current++;
          handleAddPhoto(item, globalAssets);
        }

        if (item.video) {
          current++;
          handleAddVideo(item, globalAssets);
        }
      }
      break;
    }
    case "previous": {
      if (current > 0) {
        document.querySelector(".gallery").innerHTML = "";
        const item = galleryMedia[current - 1];

        if (item.photo) {
          current--;
          handleAddPhoto(item, globalAssets);
        }

        if (item.video) {
          current--;
          handleAddVideo(item, globalAssets);
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

const handleAddPhoto = (item, assets) => {
  const photoSource = item.photo
  const photo = document.createElement("img");
  photo.setAttribute("src", `${assets}/${photoSource}`);
  photo.setAttribute("role", `Image`);
  photo.setAttribute("aria-label", `Lilac breasted roller`);

  const box = document.createElement("div");
  box.classList.add("gallery_media-box");

  const title = document.createElement("h3");
  title.classList.add("media-box_contentbox_title");
  title.textContent = item.title;
  title.setAttribute("role", "Text");

  box.appendChild(photo);
  document.querySelector(".gallery").append(box, title);
};

const handleAddVideo = (item, assets) => {
  const box = document.createElement("div");
  box.classList.add("gallery_media-box");

  const video = document.createElement("video");
  const source = document.createElement("source");

  source.setAttribute("src", `${assets}/${item.video}`);
  source.setAttribute("type", "video/mp4");
  video.setAttribute("role", "video");
  video.setAttribute("aria-label", "Lilac breasted roller");
  video.appendChild(source);
  video.autoplay = true;
  video.controls = true;

  const title = document.createElement("h3");
  title.classList.add("media-box_contentbox_title");
  title.textContent = item.title;
  title.setAttribute("role", "Text");

  // Push
  box.appendChild(video);
  document.querySelector(".gallery").append(box, title);
};
