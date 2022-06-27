import addVideo from "../components/addVideo.js";
import addPhoto from "../components/addPhoto.js";

let slug;
let data;

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

  const Portrait = `../../assets/photographers/Photographer_Photos/${portrait}`;

  document.querySelector(".name").textContent = name;
  document.querySelector(".city").textContent = `${city}, ${country}`;
  document.querySelector(".tag").textContent = tagline;
  const photo = document.querySelector(".portrait");
  photo.setAttribute("src", Portrait);
  const photosBox = document.querySelector(".photos_Container");

  const medias = media.filter((i) => i.photographerId == slug);

  const photos = [];
  const videos = [];

  medias.forEach((med) => {
    med.image && photos.push(med.image);
    med.video && videos.push(med.video);

    if (med.image) {
      addPhoto(med.image, med.title, assets, photosBox);
    }
    if (med.video) {
      addVideo(med.video, assets, photosBox);
    }
  });
  const galleryPhoto = document.querySelector(".galleryPhoto");
  galleryPhoto.setAttribute("src", `${assets}/${photos[0]}`);
};

getData();
