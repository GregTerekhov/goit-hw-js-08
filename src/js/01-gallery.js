// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryCards(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryCards(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
        `;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery__item', {
  captionDelay: 250,
  captionsData: 'alt',
});

// Change code below this line

console.log(galleryItems);
