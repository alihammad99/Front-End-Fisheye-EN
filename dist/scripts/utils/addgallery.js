import{globalAssets,galleryMedia}from"../pages/photographer.js";let current;export const addToGallery=(e,t,l)=>{current=l,"photo"===t&&handleAddPhoto(e,globalAssets),"video"===t&&handleAddVideo(e,globalAssets)};export const handleNext=e=>{let t=galleryMedia.length;switch(e){case"next":if(current<t-1){document.querySelector(".gallery").innerHTML="";const e=galleryMedia[current+1];e.photo&&(current++,handleAddPhoto(e,globalAssets)),e.video&&(current++,handleAddVideo(e,globalAssets))}break;case"previous":if(current>0){document.querySelector(".gallery").innerHTML="";const e=galleryMedia[current-1];e.photo&&(current--,handleAddPhoto(e,globalAssets)),e.video&&(current--,handleAddVideo(e,globalAssets))}break;default:return console.error("Unable to handle click event in gallery, please make sure to put an action type.")}};const handleAddPhoto=(e,t)=>{const l=e.photo,o=document.createElement("img");o.setAttribute("src",`${t}/${l}`),o.setAttribute("role","Image"),o.setAttribute("aria-label","Lilac breasted roller");const r=document.createElement("div");r.classList.add("gallery_media-box");const a=document.createElement("h3");a.classList.add("media-box_contentbox_title"),a.textContent=e.title,a.setAttribute("role","Text"),r.appendChild(o),document.querySelector(".gallery").append(r,a)},handleAddVideo=(e,t)=>{const l=document.createElement("div");l.classList.add("gallery_media-box");const o=document.createElement("video"),r=document.createElement("source");r.setAttribute("src",`${t}/${e.video}`),r.setAttribute("type","video/mp4"),o.setAttribute("role","video"),o.setAttribute("aria-label","Lilac breasted roller"),o.appendChild(r),o.autoplay=!0,o.controls=!0;const a=document.createElement("h3");a.classList.add("media-box_contentbox_title"),a.textContent=e.title,a.setAttribute("role","Text"),l.appendChild(o),document.querySelector(".gallery").append(l,a)};
//# sourceMappingURL=addgallery.js.map
