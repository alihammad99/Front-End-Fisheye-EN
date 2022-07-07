import { addToGallery } from "./addgallery.js";

const addPhoto = (item, assets, cont, galleryMedia, galleryPhoto) => {
  let likeState = false;

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
  const img = document.createElement("img");
  img.setAttribute("src", `${assets}/${item.photo}`);
  img.setAttribute("alt", item.title);
  img.addEventListener("click", () => {
    document.querySelector(".gallery").innerHTML = "";
    document.querySelector(".galleryBox").style.display = "block";
    addToGallery(item, "photo", index);
  });

  //Photo's Title
  const title = document.createElement("h3");
  title.textContent = item.title;
  title.classList.add("media-box_contentbox_title");

  //Photo's Likes number
  const likes = document.createElement("h4");
  likes.textContent = item.likes;

  //Like Icon
  const likeIcon = document.createElement("img");
  likeIcon.setAttribute("src", `../assets/icons/like.svg`);
  likeIcon.addEventListener("click", () => {
    likeState = !likeState;
    if (likeState) {
      likeIcon.setAttribute("src", `../assets/icons/like-fill.svg`);
      likes.textContent = item.likes + 1;
    }
    if (!likeState) {
      likeIcon.setAttribute("src", `../assets/icons/like.svg`);
      likes.textContent = item.likes;
    }
  });

  //Append Elements
  likebox.append(likes, likeIcon);
  contentbox.append(title, likebox);
  box.appendChild(img);
  box.append(contentbox);
  cont.appendChild(box);
};

export default addPhoto;
