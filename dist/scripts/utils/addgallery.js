import{globalAssets,galleryMedia}from"../pages/photographer.js";let current;export const addToGallery=(e,t,l)=>{current=l,"photo"===t&&handleAddPhoto(e,globalAssets),"video"===t&&handleAddVideo(e,globalAssets)};export const handleNext=e=>{let t=galleryMedia.length;switch(e){case"next":if(current<t-1){document.querySelector(".gallery").innerHTML="";const e=galleryMedia[current+1];e.photo&&(current++,handleAddPhoto(e,globalAssets)),e.video&&(current++,handleAddVideo(e,globalAssets))}break;case"previous":if(current>0){document.querySelector(".gallery").innerHTML="";const e=galleryMedia[current-1];e.photo&&(current--,handleAddPhoto(e,globalAssets)),e.video&&(current--,handleAddVideo(e,globalAssets))}break;default:return console.error("Unable to handle click event in gallery, please make sure to put an action type.")}};const handleAddPhoto=(e,t)=>{const l=document.createElement("img");l.setAttribute("src",`${t}/${e.photo}`),l.setAttribute("role","Image"),l.setAttribute("aria-label","Lilac breasted roller");const o=document.createElement("div");o.classList.add("gallery_media-box");const r=document.createElement("h3");r.classList.add("media-box_contentbox_title"),r.textContent=e.title,r.setAttribute("role","Text"),o.appendChild(l),document.querySelector(".gallery").append(o,r)},handleAddVideo=(e,t)=>{const l=document.createElement("div");l.classList.add("gallery_media-box");const o=document.createElement("video"),r=document.createElement("source");r.setAttribute("src",`${t}/${e.video}`),r.setAttribute("type","video/mp4"),o.setAttribute("role","video"),o.setAttribute("aria-label","Lilac breasted roller"),o.appendChild(r),o.autoplay=!0,o.controls=!0;const a=document.createElement("h3");a.classList.add("media-box_contentbox_title"),a.textContent=e.title,a.setAttribute("role","Text"),l.appendChild(o),document.querySelector(".gallery").append(l,a)};
//# sourceMappingURL=addgallery.js.map
