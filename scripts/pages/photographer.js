import {
  addPhoto,
  addVideo,
  handleGalleryBtn,
  handleMedia,
  handleSortBtn,
  galleryMedia,
  updateSorted,
} from "../utils/index.js";
let slug;
let data;
export let globalAssets;
export const defaultData = [];

const getData = async () => {
  //Get photographers data
  try {
    const photographersdata = await fetch("../../data/photographers.json").then(
      (response) => response.json()
    );
    data = photographersdata;
  } catch (err) {
    console.error(err);
  }

  //Get URL Slug
  try {
    const url = await fetch(window.location.search).then(
      (response) => response.url
    );
    slug = new URL(url).search.slice(4);
  } catch (err) {
    console.error(err);
  }

  const photographers = data.photographers;
  const media = data.media;
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
  handleMedia(medias, defaultData);

  setTimeout(() => {
    galleryMedia.forEach((item) => {
      if (item.video) {
        addVideo(item, assets, mediasBox, galleryMedia);
      }
      if (item.photo) {
        addPhoto(item, assets, mediasBox, galleryMedia);
      }
      totalLikes += item.likes;
    });
  }, 400);

  //Sort Photos

  // Aria Expand state
  const updateFunc = () =>
    updateSorted(mediasBox, galleryMedia, assets, galleryPhoto);

  handleSortBtn(galleryMedia, updateFunc, defaultData);

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

  setTimeout(() => {
    document.getElementById("totalLikes").textContent = totalLikes;
  }, 700);

  handleGalleryBtn();
};

//Sorting Function

getData();
