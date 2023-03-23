import 'swiper/css/bundle';
import './index.css';
import Swiper from 'swiper/bundle';

// import styles bundle

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  spaceBetween: 13,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function requireAll(icon) {
  icon.keys().forEach(icon);
}

requireAll(require.context('../src/svg', true, /\.svg$/));

const list = document.querySelector('.questions-info__list');
function toggleQuestions(e) {
  const { parentElement } = e.target;
  const textSelector = parentElement.querySelector('.questions-info__text');
  const buttonSelector = parentElement.querySelector('.questions-info__button');
  const button = e.target.classList.contains('questions-info__button');
  const title = e.target.classList.contains('questions-info__title');
  if (title || button) {
    textSelector.classList.toggle('questions-info__text_visible');
    buttonSelector.classList.toggle('questions-info__button_rotate');
  }
}

list.addEventListener('click', toggleQuestions);
