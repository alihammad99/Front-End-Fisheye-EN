let photoIndex = 0;

// export const gallery1 = (type, galleryMedia, galleryPhoto, assets, count) => {
//   {
//     if (count) {
//       photoIndex = count;
//     }
//     if (type == "video") {
//       photoIndex = galleryMedia.length - 1;
//       const video = document.querySelector(".galleryVideo");
//       video.classList.add("galleryVideoAppear");
//       document.querySelector(".galleryPhoto").classList.add("galleryPhotoHide");
//     }
//     if (type == "next" && photoIndex < galleryMedia.length - 1) {
//       photoIndex++;
//       galleryPhoto.setAttribute(
//         "src",
//         `${assets}/${galleryMedia[photoIndex].src}`
//       );
//       galleryPhoto.setAttribute("alt", galleryMedia[photoIndex].alt);
//     }
//     if (type == "next" && photoIndex == galleryMedia.length - 1) {
//       photoIndex = photoIndex + 1;
//       const video = document.querySelector(".galleryVideo");
//       video.classList.add("galleryVideoAppear");
//       document.querySelector(".galleryPhoto").classList.add("galleryPhotoHide");
//     }
//     if (type == "next" && photoIndex > galleryMedia.length) {
//       photoIndex = 0;
//     }

//     if (type == "previous") {
//       photoIndex--;
//       galleryPhoto.setAttribute(
//         "src",
//         `${assets}/${galleryMedia[photoIndex].src}`
//       );
//       document
//         .querySelector(".galleryVideo")
//         .classList.remove("galleryVideoAppear");

//       document
//         .querySelector(".galleryPhoto")
//         .classList.remove("galleryPhotoHide");
//       console.log(photoIndex);
//     }
//     if (type == "current") {
//       galleryPhoto.setAttribute(
//         "src",
//         `${assets}/${galleryMedia[photoIndex].src}`
//       );
//       document
//         .querySelector(".galleryVideo")
//         .classList.remove("galleryVideoAppear");

//       document
//         .querySelector(".galleryPhoto")
//         .classList.remove("galleryPhotoHide");
//       console.log(photoIndex);
//     }
//   }
// };

export const handleGallery = (
  type,
  galleryMedia,
  galleryPhoto,
  assets,
  count
) => {
  const length = galleryMedia.length;

  if (count) {
    photoIndex = count;
    console.log(photoIndex);
  }
  // console.log(galleryMedia.length);

  switch (type) {
    case "video": {
      photoIndex = galleryMedia.length - 1;
      const video = document.querySelector(".galleryVideo");
      video.classList.add("galleryVideoAppear");
      document.querySelector(".galleryPhoto").classList.add("galleryPhotoHide");
      break;
    }
    case "next": {
      if (photoIndex < galleryMedia.length - 1) {
        photoIndex++;
        galleryPhoto.setAttribute(
          "src",
          `${assets}/${galleryMedia[photoIndex].src}`
        );
        galleryPhoto.setAttribute("alt", galleryMedia[photoIndex].alt);
      }
      if (photoIndex == galleryMedia.length - 1) {
        photoIndex++;
        const video = document.querySelector(".galleryVideo");
        video.classList.add("galleryVideoAppear");
        document
          .querySelector(".galleryPhoto")
          .classList.add("galleryPhotoHide");
      }
      if (photoIndex == galleryMedia.length) {
        photoIndex++;
        document
          .querySelector(".galleryVideo")
          .classList.remove("galleryVideoAppear");

        document
          .querySelector(".galleryPhoto")
          .classList.remove("galleryPhotoHide");

        // photoIndex = 0;
      }
      if (photoIndex == galleryMedia.length + 1) {
        photoIndex = 0;
      }
      break;
    }
    case "previous": {
      if (photoIndex > 0) {
        photoIndex--;
        galleryPhoto.setAttribute(
          "src",
          `${assets}/${galleryMedia[photoIndex].src}`
        );
        document
          .querySelector(".galleryVideo")
          .classList.remove("galleryVideoAppear");

        document
          .querySelector(".galleryPhoto")
          .classList.remove("galleryPhotoHide");
      }
      if (photoIndex === 0) {
        photoIndex = galleryMedia.length - 1;
        const video = document.querySelector(".galleryVideo");
        video.classList.add("galleryVideoAppear");
        document
          .querySelector(".galleryPhoto")
          .classList.add("galleryPhotoHide");
        break;
      }

      break;
    }

    case "current": {
      galleryPhoto.setAttribute(
        "src",
        `${assets}/${galleryMedia[photoIndex].src}`
      );
      document
        .querySelector(".galleryVideo")
        .classList.remove("galleryVideoAppear");

      document
        .querySelector(".galleryPhoto")
        .classList.remove("galleryPhotoHide");
      console.log(photoIndex);
      break;
    }
    default:
      photoIndex = 0;
  }
  console.log(photoIndex);
};
