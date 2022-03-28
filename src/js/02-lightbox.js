import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");

for (let i of galleryItems) {
    const galleryItem = document.createElement("li");
    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__item");
    galleryLink.href = i.original;
    const galleryImage = document.createElement("img");
    galleryImage.classList.add("gallery__image");
    galleryImage.src = i.preview;
    galleryImage.alt = i.description;
    galleryList.append(galleryItem);
    galleryItem.append(galleryLink);
    galleryLink.append(galleryImage);
    galleryList.insertAdjacentHTML("beforeend", galleryImage.innerHTML);
}

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
