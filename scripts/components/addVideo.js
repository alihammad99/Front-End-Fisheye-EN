import { addToGallery } from "./addgallery.js";

let photoIndex = 0;
const addVideo = (item, assets, cont, galleryMedia) => {
  let likeState = false;

  const box = document.createElement("div");
  box.classList.add("media-box");
  photoIndex = galleryMedia.length;

  //Text & Likes Container
  const contentbox = document.createElement("div");
  contentbox.classList.add("contentbox");

  const video = document.createElement("video");

  let index = galleryMedia.indexOf(item);

  //Photo's Title
  const title = document.createElement("h3");
  title.textContent = item.title;
  title.classList.add("media-box_contentbox_title")

  //Photo's Likes number
  const likes = document.createElement("h4");
  likes.textContent = item.likes;

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

  //ikes Container
  const likebox = document.createElement("div");
  likebox.classList.add("likebox");

  const source = document.createElement("source");
  source.setAttribute("src", `${assets}/${item.video}`);
  source.setAttribute("type", "video/mp4");
  video.appendChild(source);
  video.classList.add("video");
  likebox.append(likes, likeIcon);
  contentbox.append(title, likebox);
  box.append(video, contentbox);
  cont.appendChild(box);
  video.addEventListener("click", () => {
    document.querySelector(".gallery").innerHTML = "";
    document.querySelector(".galleryBox").style.display = "block";
    addToGallery(item, "video", galleryMedia, assets, index);
  });
};

export default addVideo;
