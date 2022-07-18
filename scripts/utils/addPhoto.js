import { addToGallery } from "./addgallery.js";
let likeState = false;

const handleLike = (likeIcon, likes, item) => {
  likeState = !likeState;
  if (likeState) {
    likeIcon.setAttribute("src", `../assets/icons/like-fill.svg`);
    likes.textContent = item.likes + 1;
  }
  if (!likeState) {
    likeIcon.setAttribute("src", `../assets/icons/like.svg`);
    likes.textContent = item.likes;
  }
};

const handlePhoto = (item, index) => {
  document.querySelector(".gallery").innerHTML = "";
  document.querySelector(".galleryBox").style.display = "block";

  addToGallery(item, "photo", index);
};

const addPhoto = (item, assets, cont, galleryMedia) => {
  const index = galleryMedia.indexOf(item);

  //Main container
  const box = document.createElement("div");
  box.classList.add("media-box");

  //Text & Likes Container
  const contentbox = document.createElement("div");
  contentbox.classList.add("contentbox");

  //ikes Container
  const likebox = document.createElement("div");
  likebox.classList.add("likebox");

  //Photo
  const photoLink = document.createElement("button");
  photoLink.setAttribute("role", `Image link`);
  photoLink.setAttribute("aria-label", "Lilac breasted roller, closeup view");
  photoLink.addEventListener("click", () => handlePhoto(item, index));
  photoLink.addEventListener(
    "keypress",
    (e) => e.key === "Enter" && handlePhoto(item, index)
  );

  const photo = document.createElement("img");
  photo.setAttribute("src", `${assets}/${item.photo}`);
  photo.setAttribute("alt", item.title);

  photoLink.appendChild(photo);

  //Photo's Title
  const title = document.createElement("h3");
  title.textContent = item.title;
  title.classList.add("media-box_contentbox_title");
  title.setAttribute("tabindex", 0);

  //Photo's Likes number
  const likes = document.createElement("h4");
  likes.textContent = item.likes;

  //Like Icon
  const likeIcon = document.createElement("img");
  likeIcon.setAttribute("src", `../assets/icons/like.svg`);
  likeIcon.setAttribute("role", `Image`);
  likeIcon.setAttribute("alt", `likes`);
  likeIcon.setAttribute("tabindex", 0);
  likeIcon.addEventListener(
    "keypress",
    (e) => e.key === "Enter" && handleLike(likeIcon, likes, item)
  );
  likeIcon.addEventListener("click", () => handleLike(likeIcon, likes, item));

  //Append Elements
  likebox.append(likes, likeIcon);
  contentbox.append(title, likebox);
  box.append(photoLink, contentbox);
  cont.appendChild(box);
};

export default addPhoto;
