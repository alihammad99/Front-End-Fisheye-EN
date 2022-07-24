import addVideo from"./addVideo.js";import addPhoto from"./addPhoto.js";const updateSorted=(d,o,t,e)=>{d.innerHTML="",o.forEach((a=>{a.video&&addVideo(a,t,d,o),a.photo&&addPhoto(a,t,d,o,e)}))};export default updateSorted;
//# sourceMappingURL=updateSortedData.js.map
