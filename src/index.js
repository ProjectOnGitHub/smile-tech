import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import './index.css';

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

let list = document.querySelector('.questions-info_active');
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

const allTabs = document.querySelectorAll('.questions__list-item');
const tabsContent = document.querySelectorAll('.questions-info');
const tabsList = document.querySelector('.questions__list');
function changeActiveTab(e) {
  if (e.target.classList.contains('questions__list-item')) {
    allTabs.forEach((tab) => tab.classList.remove('questions__list-item_active'));
  }
  e.target.classList.add('questions__list-item_active');
  showCurrentAnswer();
}

function showCurrentAnswer() {
  let currentIndex;
  allTabs.forEach((tab, i) => (tab.classList.contains('questions__list-item_active') ? (currentIndex = i) : ''));
  tabsContent.forEach((tab) => tab.classList.remove('questions-info_active'));
  tabsContent[currentIndex].classList.add('questions-info_active');
  list = document.querySelector('.questions-info_active');
  console.log(list);
  list.addEventListener('click', toggleQuestions);
}
tabsList.addEventListener('click', changeActiveTab);
