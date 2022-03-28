import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");

for (let i of galleryItems) {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery__item");
    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__link");
    galleryLink.href = i.original;
    const galleryImage = document.createElement("img");
    galleryImage.classList.add("gallery__image");
    galleryImage.src = i.preview;
    galleryImage.setAttribute("data-source", i.original);
    galleryImage.alt = i.description;
    galleryList.append(galleryItem);
    galleryItem.append(galleryLink);
    galleryLink.append(galleryImage);
    galleryList.insertAdjacentHTML("beforeend", galleryImage.innerHTML);
}
    
let basicInstance;
galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  basicInstance = basicLightbox
    .create(`
      <div class="modal">
        <img width="100%" src = ${event.target.getAttribute("data-source")}>
      </div>`,
      {
        onShow: (instance) => {
          document.addEventListener("keydown", escKeyHandler);
        },
        onClose: (instance) => document.removeEventListener("keydown", escKeyHandler)
      });
    basicInstance.show();
});

function escKeyHandler(event) {
  if (event.key === "Escape") {
    basicInstance.close();
  }
}
