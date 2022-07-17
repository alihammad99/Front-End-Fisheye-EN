import addVideo from "../components/addVideo.js";
import addPhoto from "../components/addPhoto.js";
import { handleNext } from "../components/addgallery.js";

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
    slug = new URL(url).search.slice(4);
  } catch (err) {
    console.error(err);
  }
  const galleryVisible =
    document.querySelector(".galleryBox").style.display === "block";

  if (galleryVisible) {
  }

  const photographers = data.photographers;
  const media = data.media;
  const item = photographers.filter((i) => i.id == slug);
  const [{ name, city, country, tagline, portrait, assets }] = item;
  globalAssets = assets;
  document.querySelector(".modal h2").innerHTML = `Contact me<br />${name}`;
  document
    .querySelector(".modal")
    .setAttribute("aria-label", "Contact me " + name);
  const next = document.querySelector(".nextBtn");
  const previous = document.querySelector(".prevBtn");

  next.addEventListener("click", () => handleNext("next"));
  next.addEventListener(
    "keypress",
    (e) => e.key == "Enter" && handleNext("next")
  );
  previous.addEventListener("click", () => handleNext("previous"));
  previous.addEventListener(
    "keypress",
    (e) => e.key == "Enter" && handleNext("previous")
  );

  const Portrait = `../../assets/photographers/Photographer_Photos/${portrait}`;

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
      addPhoto(item, assets, mediasBox, galleryMedia);
    }
  });

  //Sort Photos
  const sortBtn = document.querySelector(".sort-list");

  let openListState = false;

  // Aria Expand state
  sortBtn.addEventListener("click", () => {
    if (!openListState) {
      openListState = !openListState;
      return sortBtn.setAttribute("aria-expanded", "true");
    } else {
      openListState = !openListState;
      return sortBtn.setAttribute("aria-expanded", "false");
    }
  });

  sortBtn.addEventListener("change", (e) => {
    console.log();
    sortBtn.setAttribute("aria-expanded", "true");
    switch (e.target.value) {
      case "Date":
        galleryMedia = galleryMedia.sort((a, b) => b.date - a.date);
        updateOptionsState(e.target.options, 1);
        // e.target.options[1].setAttribute("aria-selected", "true");
        updateSorted();
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
        updateOptionsState(e.target.options, 2);
        // e.target.options[2].setAttribute("aria-selected", "true");
        updateSorted();
        break;

      default:
        galleryMedia = [...defaultData];
        updateOptionsState(e.target.options, 0);

        // e.target.options[0].setAttribute("aria-selected", "true");
        updateSorted();
        break;
    }
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

  const updateOptionsState = (item, index) => {
    for (let i = 0; i < item.length; i++) {
      item[i].setAttribute("aria-selected", "false");
    }
    item[index].setAttribute("aria-selected", "true");
  };

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
};

getData();
