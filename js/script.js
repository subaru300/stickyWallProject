'use strict';

// Очікування завантаження контенту сторінки
document.addEventListener('DOMContentLoaded', function () {
  // variables
  const grid = document.querySelector('.inner__wrapper_sticker');
  const stickerPlus = document.querySelector('.sticker__card.card-add');
  const windowAddButton = document.querySelector('.window__btn_add');
  const windowCancelButton = document.querySelector('.window__btn_cancel');
  const windowTextTitle = document.querySelector('.window__text_title');
  const windowTextDescription = document.querySelector(
    '.window__text_description'
  );
  const overlay = document.querySelector('.overlay');
  const windowNewText = document.querySelector('.sticker__window_section');
  const createNewstickerWindow = document.querySelector(
    '.sticker__window_section'
  );

  // sticker ID counter
  let counterOfStickers = 0;

  // creating sticker function
  const createNewSticker = function () {
    const sticker = document.createElement('div');
    sticker.classList.add('sticker__card');
    sticker.id = `sticker${counterOfStickers}`;
    sticker.setAttribute('contenteditable', 'true');
    grid.insertBefore(sticker, this);
    windowTextTitle.setAttribute('contenteditable', 'true');
    windowTextDescription.setAttribute('contenteditable', 'true');
    windowNewText.classList.remove('hidden');
    overlay.classList.remove('hidden');

    // on progress!!!!! errors
    windowAddButton.addEventListener('click', function () {
      let stickerTextId = document.getElementById(
        `sticker${counterOfStickers}`
      );
      stickerTextId.textContent = windowTextTitle.textContent;
      stickerTextId.textContent = windowTextDescription.textContent;
    });
    counterOfStickers++;
  };

  // overlay closing function
  const closeWindowOnTapOverlay = function () {
    const windowNewText = document.querySelector('.sticker__window_section');
    overlay.classList.add('hidden');
    windowNewText.classList.add('hidden');
  };

  // close button function on creation window
  const closeWindowCreationNewSticker = function () {
    createNewstickerWindow.classList.add('hidden');
    windowNewText.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  // clean text on input window function
  const removeTextOnNewWindow = function (e) {
    windowTextTitle.textContent
      ? (windowTextDescription.textContent = 'Sticker description')
      : (windowTextTitle.textContent = 'Sticker title');
    e.textContent = '';
  };

  // creating sticker event
  stickerPlus.addEventListener('click', createNewSticker);
  // overlay closing event
  overlay.addEventListener('click', closeWindowOnTapOverlay);
  // close button event
  windowCancelButton.addEventListener('click', closeWindowCreationNewSticker);
  // removing text on inputs creation window events
  windowTextTitle.addEventListener('click', function () {
    removeTextOnNewWindow(windowTextTitle);
  });
  windowTextDescription.addEventListener('click', function () {
    removeTextOnNewWindow(windowTextDescription);
  });

  // adding text in sticker
  windowAddButton.addEventListener('click', function () {});
});
