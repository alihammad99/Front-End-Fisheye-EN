export const gallery = (media, id) => {
  const galleryPhotos = [];
  const medias = media.filter((item) => item.id === id);
  medias.forEach((item) => galleryPhotos.push(item.photo || item.video))
};
