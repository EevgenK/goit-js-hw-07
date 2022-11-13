import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const galleryMarkup = galleryElMarkup(galleryItems);

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

function galleryElMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
      </a> 
  </div>`;
    })
    .join("");
}

const onShowModalClick = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;
  const instance = basicLightbox.create(
    `
  <div class="modal">
    <img
    class="modal__image"
    src="${e.target.dataset.source}"
    />
  </div>`
  );

  const pictureShow = instance.element().querySelector(".modal");
  pictureShow.addEventListener("click", instance.close);
  window.addEventListener("keydown", pictureClose);
  function pictureClose(e) {
    if (e.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", pictureClose);
    }
  }
  instance.show();
};

galleryEl.addEventListener("click", onShowModalClick);
