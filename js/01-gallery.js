import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const fullGallery = galleryItems
  .map(
    (galleryItem) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
      <img
        class="gallery__image"
        src="${galleryItem.preview}"
        data-source="${galleryItem.original}"
        alt="${galleryItem.description}"
      />
    </a>
    </div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", fullGallery);

function addModal(event) {
  const target = event.target;
  if (target && target.nodeName === "IMG") {
    event.preventDefault();
    const instance = basicLightbox.create(
      `
      <img src="${target.dataset.source}" width="800" height="600">`,
      {
        onShow: (instance) => {
          document.addEventListener("keydown", closeModalOnEscape);
        },
        onClose: (instance) => {
          document.removeEventListener("keydown", closeModalOnEscape);
        },
      }
    );

    function closeModalOnEscape(event) {
      if (event.key === "Escape") {
        instance.close();
      }
    }

    instance.show();
  }
}

gallery.addEventListener("click", addModal);
console.log(galleryItems);
