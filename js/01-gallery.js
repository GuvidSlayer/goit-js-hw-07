import { galleryItems } from "./gallery-items.js";
// Change code below this line

const instance = basicLightbox.create(`
	<h1>Dynamic Content</h1>
	<p>You can set the content of the lightbox with JS.</p>
`);

instance.show();

document.addEventListener("keyup", (event) => {
  if (event.code === "Escape") {
    instance.close();
  }
});
console.log(galleryItems);
