'use strict';

// Очікування завантаження контенту сторінки
document.addEventListener('DOMContentLoaded', function () {
  // Вибірка необхідних DOM-елементів
  const grid = document.querySelector('.inner__wrapper_sticker');
  const stickerMain = document.querySelector('.sticker__card.card-add');
  const addButton = document.querySelector('.window__btn_add');

  // Лічильник для створення унікальних ідентифікаторів для стікерів
  let counter = 0;

  // Додавання події "click" на головний стікер
  stickerMain.addEventListener('click', function () {
    // Створення нового елементу стікера
    const sticker = document.createElement('div');
    sticker.classList.add('sticker__card');
    sticker.id = `sticker${counter}`;
    sticker.setAttribute('contenteditable', 'true');
    grid.insertBefore(sticker, this);

    // Додавання події "click" на кнопку додавання тексту в стікер
    addButton.addEventListener('click', function () {
      // Отримання стікера за його ідентифікатором
      let stickerTextId = document.getElementById(`sticker${counter}`);
      // Заповнення вмістом з вікна тексту
      stickerTextId.textContent = windowTextTitle.textContent;
      stickerTextId.textContent = windowTextDescription.textContent;
    });
    counter++;
  });
});

// Вибірка необхідних DOM-елементів поза "DOMContentLoaded"
const windowTextTitle = document.querySelector('.window__text_title');
const windowTextDescription = document.querySelector(
  '.window__text_description'
);
const stickerNew = document.querySelector('.card-add');
const windowNewText = document.querySelector('.sticker__window_section');

// Додавання події "click" на головний стікер для відкриття вікна
stickerNew.addEventListener('click', function () {
  // Активування режиму редагування для текстових полів
  windowTextTitle.setAttribute('contenteditable', 'true');
  windowTextDescription.setAttribute('contenteditable', 'true');
  // Показ вікна для вводу тексту
  windowNewText.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

// Вибірка необхідних DOM-елементів для закриття вікна
const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', function () {
  // Закриття вікна
  const windowNewText = document.querySelector('.sticker__window_section');
  overlay.classList.add('hidden');
  windowNewText.classList.add('hidden');
});

// Вибірка необхідних DOM-елементів для скасування введення тексту
const stickyWindow = document.querySelector('.sticker__window_section');
const windowCancelButton = document.querySelector('.window__btn_cancel');

// Додавання події "click" на кнопку скасування для закриття вікна
windowCancelButton.addEventListener('click', function () {
  stickyWindow.classList.add('hidden');
  windowNewText.classList.add('hidden');
  overlay.classList.add('hidden');
});

// Функція для очищення тексту в текстових полях
const removeText = function (e) {
  windowTextTitle.textContent
    ? (windowTextDescription.textContent = 'Write your text')
    : (windowTextTitle.textContent = 'Write your title');

  e.textContent = '';
};

// Додавання подій "click" на поля вводу тексту для очищення вмісту
windowTextTitle.addEventListener('click', function () {
  removeText(windowTextTitle);
});
windowTextDescription.addEventListener('click', function () {
  removeText(windowTextDescription);
});

// Додавання події "click" на кнопку додавання тексту в стікер
addButton.addEventListener('click', function () {
  // Заповнення заголовку стікера змістом поля вводу
  windowTextTitle.textContent = windowTextTitle.value;
});
