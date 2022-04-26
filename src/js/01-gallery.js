// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Add imports simplelightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const markupGallery = createMarkupGallery(galleryItems);

galleryList.insertAdjacentHTML('beforeend', markupGallery);

// Создание динамической разметки
function createMarkupGallery(array) {
  return array
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" style="display: block" />
        </a>`;
    })
    .join('');
}

// Создание и настройка библиотеки simplelightbox
new SimpleLightbox('.gallery a', {
  showCounter: false,
  captionsData: 'alt',
  captionDelay: 250,
});
