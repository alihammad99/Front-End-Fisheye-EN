import { galleryMedia } from "../pages/photographer.js";
import { globalAssets } from "../pages/photographer.js";
let current;

export const addToGallery = (id, type, data, assets, index, func) => {
  current = index;

  if (type === "photo") {
    const Image = document.createElement("img");
    Image.setAttribute("src", `${assets}/${data[index].photo}`);
    document.querySelector(".gallery").appendChild(Image);
    // Push
  }
  if (type === "video") {
    const video = document.createElement("video");
    const source = document.createElement("source");

    source.setAttribute("src", "#");
    source.setAttribute("type", "video/mp4");
    video.appendChild(source);
    document.querySelector(".gallery").appendChild(video);
    // Push
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

          const Image = document.createElement("img");
          Image.setAttribute("src", `${globalAssets}/${item.photo}`);
          document.querySelector(".gallery").appendChild(Image);
        }
        // current++;

        if (item.video) {
          current++;

          const video = document.createElement("video");
          const source = document.createElement("source");

          source.setAttribute("src", `${globalAssets}/${item.video}`);
          source.setAttribute("type", "video/mp4");
          video.appendChild(source);
          document.querySelector(".gallery").appendChild(video);
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

          const Image = document.createElement("img");
          Image.setAttribute("src", `${globalAssets}/${item.photo}`);
          document.querySelector(".gallery").appendChild(Image);
        }
        // current++;

        if (item.video) {
          current--;

          const video = document.createElement("video");
          const source = document.createElement("source");

          source.setAttribute("src", `${globalAssets}/${item.video}`);
          source.setAttribute("type", "video/mp4");
          video.appendChild(source);
          document.querySelector(".gallery").appendChild(video);
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
