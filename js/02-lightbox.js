import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const galleryMarkup = galleryElMarkup(galleryItems);

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

function galleryElMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `      <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        />
      </a>`;
    })
    .join("");
}
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);
