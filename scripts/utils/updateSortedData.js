import addVideo from "./addVideo.js";
import addPhoto from "./addPhoto.js";

const updateSorted = (mediasBox, galleryMedia, assets, galleryPhoto) => {
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

export default updateSorted;
