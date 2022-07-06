import { galleryMedia } from "../pages/photographer.js";
import { globalAssets } from "../pages/photographer.js";
let current;

export const addToGallery = (item, type, data, assets, index, func) => {
  current = index;

  if (type === "photo") {
    const box = document.createElement("div");
    box.classList.add("gallery_media-box");
    const Image = document.createElement("img");
    Image.setAttribute("src", `${assets}/${data[index].photo}`);
    const title = document.createElement("h3");
    title.classList.add("media-box_contentbox_title");
    title.textContent = item.title;

    // Push
    box.appendChild(Image);
    document.querySelector(".gallery").append(box, title);
  }
  if (type === "video") {
    const box = document.createElement("div");
    box.classList.add("gallery_media-box");
    const video = document.createElement("video");
    const source = document.createElement("source");
    const title = document.createElement("h3");
    title.classList.add("media-box_contentbox_title");
    title.textContent = item.title;

    source.setAttribute("src", `${assets}/${data[index].video}`);
    source.setAttribute("type", "video/mp4");
    video.appendChild(source);
    box.appendChild(video);
    document.querySelector(".gallery").appendChild(box);
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

          const box = document.createElement("div");
          box.classList.add("gallery_media-box");

          const title = document.createElement("h3");
          title.classList.add("media-box_contentbox_title");
          title.textContent = item.title;

          // Push
          box.appendChild(Image);
          document.querySelector(".gallery").append(box, title);
        }

        if (item.video) {
          current++;

          const box = document.createElement("div");
          box.classList.add("gallery_media-box");

          const video = document.createElement("video");
          const source = document.createElement("source");

          source.setAttribute("src", `${globalAssets}/${item.video}`);
          source.setAttribute("type", "video/mp4");
          video.appendChild(source);

          const title = document.createElement("h3");
          title.classList.add("media-box_contentbox_title");
          title.textContent = item.title;

          // Push
          box.appendChild(video);
          document.querySelector(".gallery").append(box, title);
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

          const box = document.createElement("div");
          box.classList.add("gallery_media-box");

          const title = document.createElement("h3");
          title.classList.add("media-box_contentbox_title");
          title.textContent = item.title;

          // Push
          box.appendChild(Image);
          document.querySelector(".gallery").append(box, title);
        }

        if (item.video) {
          current--;

          const box = document.createElement("div");
          box.classList.add("gallery_media-box");

          const video = document.createElement("video");
          const source = document.createElement("source");

          source.setAttribute("src", `${globalAssets}/${item.video}`);
          source.setAttribute("type", "video/mp4");
          video.appendChild(source);

          const title = document.createElement("h3");
          title.classList.add("media-box_contentbox_title");
          title.textContent = item.title;

          // Push
          box.appendChild(video);
          document.querySelector(".gallery").append(box, title);
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
