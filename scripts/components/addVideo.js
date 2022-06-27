const addVideo = (src, assets, cont) => {
  const box = document.createElement("div");
  box.classList.add("photos_box");

  const video = document.createElement("video");

  const source = document.createElement("source");
  source.setAttribute("src", `${assets}/${src}`);
  source.setAttribute("type", "video/mp4");
  video.appendChild(source);
  video.classList.add("video");
  box.appendChild(video);
  cont.appendChild(box);
};

export default addVideo;
