import addVideo from "../components/addVideo.js";
import addPhoto from "../components/addPhoto.js";
import { handleNext } from "../components/addgallery.js";

export const photoIndex = {
  value: 0,
};

let slug;
let data;
export let globalAssets;
export let galleryMedia = [];

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
    slug = url.split("?")[1].slice(3);
  } catch (err) {
    console.error(err);
  }

  const photographers = data.photographers;
  const media = data.media;
  const item = photographers.filter((i) => i.id == slug);
  const [{ name, city, country, tagline, portrait, assets }] = item;
  globalAssets = assets;
  const next = document.querySelector(".arrowRight");
  const previous = document.querySelector(".arrowLeft");

  next.addEventListener("click", () => handleNext("next"));
  previous.addEventListener("click", () => handleNext("previous"));

  const Portrait = `../../assets/photographers/Photographer_Photos/${portrait}`;

  document.querySelector(".name").textContent = name;
  document.querySelector(".city").textContent = `${city}, ${country}`;
  document.querySelector(".tag").textContent = tagline;
  const photo = document.querySelector(".portrait");
  photo.setAttribute("src", Portrait);
  const photosBox = document.querySelector(".photos_Container");
  const mediasBox = document.createElement("div");

  const medias = media.filter((i) => i.photographerId == slug);
  mediasBox.classList.add("photos_container_box");

  const galleryPhoto = document.querySelector(".galleryPhoto");
  const defaultData = [];

  medias.forEach((med) => {
    med.image &&
      defaultData.push({
        photo: med.image,
        alt: med.title,
        id: med.id,
        title: med.title,
        price: med.price,
        displayDate: med.date,
        date: new Date(med.date),
        likes: med.likes,
        photographer: med.photographerId,
      });
    med.video &&
      defaultData.push({
        video: med.video,
        alt: med.title,
        id: med.id,
        title: med.title,
        price: med.price,
        displayDate: med.date,
        date: new Date(med.date),
        likes: med.likes,
        photographer: med.photographerId,
      });
  });

  galleryMedia = [...defaultData];

  galleryMedia.forEach((item) => {
    if (item.video) {
      addVideo(item, assets, mediasBox, galleryMedia);
    }
    if (item.photo) {
      addPhoto(item, assets, mediasBox, galleryMedia, galleryPhoto);
    }
  });

  const defaultSort = document.getElementById("defaultSort");
  const sortByDate = document.getElementById("sort-date");
  const sortByName = document.getElementById("sort-name");

  //Default Sort
  defaultSort.addEventListener("click", () => {
    galleryMedia = [...defaultData];
    console.log(defaultData);

    updateSorted();
  });

  //Sort Photos by Dates
  sortByDate.addEventListener("click", () => {
    galleryMedia = galleryMedia.sort((a, b) => b.date - a.date);
    updateSorted();
  });

  //Sort Photos by titles
  sortByName.addEventListener("click", () => {
    galleryMedia.forEach((item) => console.log(item.title));
    galleryMedia = galleryMedia.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (b.title < a.title) {
        return 1;
      }
      return 0;
    });

    updateSorted();
  });

  photosBox.appendChild(mediasBox);

  const updateSorted = () => {
    mediasBox.innerHTML = "";
    galleryMedia.forEach((item) => {
      if (item.video) {
        addVideo(item, assets, mediasBox, galleryMedia);
      }
      if (item.photo) {
        addPhoto(item, assets, mediasBox, galleryMedia, galleryPhoto);
      }
    });
  };

  document
    .querySelector(".close")
    .addEventListener(
      "click",
      () => (document.querySelector(".galleryBox").style.display = "none")
    );
};

getData();
