import addVideo from "../components/addVideo.js";
import addPhoto from "../components/addPhoto.js";
import { handleGallery } from "../components/gallery.js";
import { addToGallery, handleNext } from "../components/addgallery.js";

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
  const gallerymediasBox = document.createElement("div");
  gallerymediasBox.classList.add("gallerymediasBox");

  const medias = media.filter((i) => i.photographerId == slug);
  mediasBox.classList.add("photos_container_box");

  const gallery = document.querySelector(".gallery");
  const galleryPhoto = document.querySelector(".galleryPhoto");

  medias.forEach((med) => {
    med.image &&
      galleryMedia.push({
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
      galleryMedia.push({
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

  galleryMedia.forEach((item) => {
    if (item.video) {
      addVideo(item, assets, mediasBox, galleryMedia);
    }
    if (item.photo) {
      addPhoto(item, assets, mediasBox, galleryMedia, galleryPhoto);
    }
  });

  const sortBtn = document.getElementById("sort");
  sortBtn.addEventListener("click", () => {
    galleryMedia = galleryMedia.sort((a, b) => b.date - a.date);
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

  // galleryPhoto.setAttribute("alt", galleryMedia[photoIndex.value].alt);
  // document
  //   .querySelector(".arrowLeft")
  //   .addEventListener("click", () =>
  //     handleGallery("previous", galleryMedia, galleryPhoto, assets)
  //   );
  // document
  //   .querySelector(".arrowRight")
  //   .addEventListener("click", () =>
  //     handleGallery("next", galleryMedia, galleryPhoto, assets)
  //   );

  addToGallery(gallerymediasBox, galleryMedia, assets);
  gallery.appendChild(gallerymediasBox);
};

getData();
