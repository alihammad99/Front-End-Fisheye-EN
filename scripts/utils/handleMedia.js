const handleMedia = (medias, defaultData) => {
  medias.forEach((med) => {
    med.image &&
      defaultData.push({
        photo: med.image,
        alt: med.title,
        id: med.id,
        title: med.title,
        price: med.price,
        displayDate: med.date,
        date: new Date(med.date),
        likes: med.likes,
        photographer: med.photographerId,
      });
    med.video &&
      defaultData.push({
        video: med.video,
        alt: med.title,
        id: med.id,
        title: med.title,
        price: med.price,
        displayDate: med.date,
        date: new Date(med.date),
        likes: med.likes,
        photographer: med.photographerId,
      });
  });
};

export default handleMedia;
