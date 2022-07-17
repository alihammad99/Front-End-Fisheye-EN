import { addToGallery } from "./addgallery.js";
const addVideo = (item, assets, cont, galleryMedia) => {
  let likeState = false;

  const box = document.createElement("div");
  box.classList.add("media-box");

  const galleryVisible =
    document.querySelector(".galleryBox").style.display === "block";

  const handleVideo = () => {
    document.querySelector(".gallery").innerHTML = "";
    document.querySelector(".galleryBox").style.display = "block";
    addToGallery(item, "video", index);
  };
  //Text & Likes Container
  const contentbox = document.createElement("div");
  contentbox.classList.add("contentbox");

  const video = document.createElement("video");
  video.setAttribute("tabindex", 0);
  let index = galleryMedia.indexOf(item);

  //Photo's Title
  const title = document.createElement("h3");
  title.textContent = item.title;
  title.classList.add("media-box_contentbox_title");

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
  video.autoplay = true;
  video.loop = true;
  video.classList.add("video");

  if (galleryVisible) {
    video.setAttribute("tabindex", "-1");
    title.setAttribute("tabindex", "-1");
    likes.setAttribute("tabindex", "-1");
  }

  likebox.append(likes, likeIcon);
  contentbox.append(title, likebox);
  box.append(video, contentbox);
  cont.appendChild(box);
  video.addEventListener("click", () => handleVideo());
  video.addEventListener("keypress", (e) => e.key === "Enter" && handleVideo());
};

export default addVideo;
