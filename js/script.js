'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const grid = document.querySelector('.inner__wrapper_sticker');
  const stickerMain = document.querySelector('.sticker__card.card-add');
  const addButton = document.querySelector('.window__btn_add');

  let counter = 0;

  stickerMain.addEventListener('click', function () {
    const sticker = document.createElement('div');
    sticker.classList.add('sticker__card');
    sticker.id = `sticker${counter}`;
    sticker.setAttribute('contenteditable', 'true');
    grid.insertBefore(sticker, this);

    ///// adding text in sticker

    addButton.addEventListener('click', function () {
      let stickerTextId = document.getElementById(`sticker${counter}`);
      stickerTextId.textContent = windowTextTitle.textContent;
      stickerTextId.textContent = windowTextDescription.textContent;
    });
    counter++;
  });
});

const windowTextTitle = document.querySelector('.window__text_title');
const windowTextDescription = document.querySelector(
  '.window__text_description'
);
const stickerNew = document.querySelector('.card-add');
const windowNewText = document.querySelector('.sticker__window_section');

stickerNew.addEventListener('click', function () {
  windowTextTitle.setAttribute('contenteditable', 'true');
  windowTextDescription.setAttribute('contenteditable', 'true');
  windowNewText.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', function () {
  const windowNewText = document.querySelector('.sticker__window_section');
  overlay.classList.add('hidden');
  windowNewText.classList.add('hidden');
});

const stickyWindow = document.querySelector('.sticker__window_section');
const windowCancelButton = document.querySelector('.window__btn_cancel');

windowCancelButton.addEventListener('click', function () {
  stickyWindow.classList.add('hidden');
  windowNewText.classList.add('hidden');
  overlay.classList.add('hidden');
});

///// clean text on input window
const removeText = function (e) {
  windowTextTitle.textContent
    ? (windowTextDescription.textContent = 'Write your text')
    : (windowTextTitle.textContent = 'Write your title');

  e.textContent = '';
};
windowTextTitle.addEventListener('click', function () {
  removeText(windowTextTitle);
});
windowTextDescription.addEventListener('click', function () {
  removeText(windowTextDescription);
});

///// adding text in sticker

addButton.addEventListener('click', function () {
  windowTextTitle.textContent = windowTextTitle.value;
});
