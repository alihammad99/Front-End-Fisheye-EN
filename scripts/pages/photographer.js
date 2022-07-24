import * as components from "../utils/index.js";
import { getPhotographers } from "./index.js";

let slug;
let photographersData;
let mediaData;
export let globalAssets;
export const defaultData = [];
export let galleryMedia = [];

async function getData() {
  const { photographers, media } = await getPhotographers();

  photographersData = photographers;
  mediaData = media;
  await getSlug();
  handleData();
}

async function getSlug() {
  try {
    const url = await fetch(window.location.search).then(
      (response) => response.url
    );
    slug = new URL(url).search.slice(4);
  } catch (err) {
    console.error(err);
  }
}

export const handleData = async () => {
  // console;

  const photographers = photographersData;
  const media = mediaData;
  const item = photographers.filter((i) => i.id == slug);

  const [{ name, city, country, tagline, portrait, assets, price }] = item;
  globalAssets = assets;
  document.querySelector(".modal h2").innerHTML = `Contact me<br />${name}`;
  document
    .querySelector(".modal")
    .setAttribute("aria-label", "Contact me " + name);

  const Portrait = `../../assets/photographers/Photographer_Photos/${portrait}`;

  let totalLikes = 0;

  document.querySelector(".name").textContent = name;
  document.querySelector(".city").textContent = `${city}, ${country}`;
  document.querySelector(".tag").textContent = tagline;

  const photo = document.querySelector(".portrait");
  photo.setAttribute("src", Portrait);
  photo.setAttribute("role", "Image");
  photo.setAttribute("alt", name);
  const photosBox = document.querySelector(".photos_Container");
  const mediasBox = document.createElement("div");

  const medias = media.filter((i) => i.photographerId == slug);
  mediasBox.classList.add("photos_container_box");

  const galleryPhoto = document.querySelector(".galleryPhoto");

  //Add Data to Default Array Function
  components.handleMedia(medias, defaultData);
  galleryMedia = [...defaultData];

  galleryMedia.forEach((item) => {
    if (item.video) {
      components.addVideo(item, assets, mediasBox, galleryMedia);
    }
    if (item.photo) {
      components.addPhoto(item, assets, mediasBox, galleryMedia);
    }
    totalLikes += item.likes;
  });

  // Aria Expand state
  const updateFunc = () =>
    components.updateSorted(mediasBox, galleryMedia, assets, galleryPhoto);

  components.handleSortBtn(updateFunc);

  photosBox.appendChild(mediasBox);

  const closeGalleryBtn = document.querySelector(".closeBtn");
  closeGalleryBtn.addEventListener(
    "click",
    () => (document.querySelector(".galleryBox").style.display = "none")
  );
  closeGalleryBtn.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      return (document.querySelector(".galleryBox").style.display = "none");
    }
  });

  // document.getElementById("price").textContent = price;
  document.getElementById("price").textContent = `${price}€ / jour`;
  document.getElementById("totalLikes").textContent = totalLikes;
  components.handleGalleryBtn();
};

//Sorting Function
export const handleSorting = (sortBtn, updateFunc, e) => {
  sortBtn.setAttribute("aria-expanded", "true");

  switch (e.target.value) {
    case "Date":
      galleryMedia = galleryMedia.sort((a, b) => b.date - a.date);
      components.updateOptionsState(e.target.options, 1);
      updateFunc();
      break;

    case "Title":
      galleryMedia = galleryMedia.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (b.title < a.title) {
          return 1;
        }
        return 0;
      });
      components.updateOptionsState(e.target.options, 2);
      updateFunc();
      break;

    default:
      galleryMedia = [...defaultData];
      components.updateOptionsState(e.target.options, 0);
      updateFunc();
      break;
  }
};

getData();
