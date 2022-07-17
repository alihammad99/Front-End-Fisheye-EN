import { addToGallery } from "./addgallery.js";

const addPhoto = (item, assets, cont, galleryMedia) => {
  let likeState = false;

  const index = galleryMedia.indexOf(item);
  const galleryVisible =
    document.querySelector(".galleryBox").style.display === "block";

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
  const handlePhoto = () => {
    document.querySelector(".gallery").innerHTML = "";
    document.querySelector(".galleryBox").style.display = "block";

    addToGallery(item, "photo", index);
  };
  img.setAttribute("src", `${assets}/${item.photo}`);
  img.setAttribute("alt", item.title);
  img.setAttribute("aria-label", "Lilac breasted roller, closeup view");
  img.setAttribute("role", "Button");
  img.addEventListener("click", () => handlePhoto());
  img.addEventListener("keypress", (e) => e.key === "Enter" && handlePhoto());
  img.setAttribute("tabindex", 0);

  //Photo's Title
  const title = document.createElement("h3");
  title.textContent = item.title;
  title.classList.add("media-box_contentbox_title");
  title.setAttribute("tabindex", 0);

  //Photo's Likes number
  const likes = document.createElement("h4");
  likes.textContent = item.likes;
  likes.setAttribute("tabindex", 0);

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

  // if (galleryVisible) {
  //   img.setAttribute("tabindex", "-1");
  //   title.setAttribute("tabindex", "-1");
  //   likes.setAttribute("tabindex", "-1");
  // }

  //Append Elements
  likebox.append(likes, likeIcon);
  contentbox.append(title, likebox);
  // box.appendChild();
  box.append(img, contentbox);
  cont.appendChild(box);
};

export default addPhoto;
