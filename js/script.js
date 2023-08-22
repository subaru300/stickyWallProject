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
  const windowTextTitleDefault = 'Sticker title';
  const windowTextDescriptionDefault = 'Sticker description';

  // sticker ID counter
  let stickerCounter = 0;
  // creating sticker function
  const createNewSticker = function () {
    windowTextTitle.textContent = windowTextTitleDefault;
    windowTextDescription.textContent = windowTextDescriptionDefault;
    const sticker = document.createElement('div');
    sticker.classList.add('sticker__card');
    sticker.id = stickerCounter;
    sticker.setAttribute('contenteditable', 'true');
    grid.insertBefore(sticker, this);
    windowTextTitle.setAttribute('contenteditable', 'true');
    windowTextDescription.setAttribute('contenteditable', 'true');
    windowNewText.classList.remove('hidden');
    overlay.classList.remove('hidden');
    windowAddButton.addEventListener('click', function () {
      const currentSticker = document.getElementById(stickerCounter);

      currentSticker.innerHTML =
        windowTextTitle.textContent +
        '<br>' +
        '<br>' +
        windowTextDescription.textContent;

      stickerCounter++;
      closeWindowCreationNewSticker();
    });
  };

  // overlay closing function
  const closeWindowOnTapOverlay = function () {
    //del
    // const windowNewText = document.querySelector('.sticker__window_section');
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
  windowTextTitle.addEventListener('focus', () => {
    if (windowTextTitle.textContent === windowTextTitleDefault) {
      windowTextTitle.textContent = '';
    }
  });
  windowTextTitle.addEventListener('blur', () => {
    if (windowTextTitle.textContent === '') {
      windowTextTitle.textContent = windowTextTitleDefault;
    }
  });
  windowTextDescription.addEventListener('focus', () => {
    if (windowTextDescription.textContent === windowTextDescriptionDefault) {
      windowTextDescription.textContent = '';
    }
  });
  windowTextDescription.addEventListener('blur', () => {
    if (windowTextDescription.textContent === '') {
      windowTextDescription.textContent = windowTextDescriptionDefault;
    }
  });

  // creating sticker event
  stickerPlus.addEventListener('click', createNewSticker);
  // overlay closing event
  overlay.addEventListener('click', closeWindowOnTapOverlay);
  // close button event
  windowCancelButton.addEventListener('click', closeWindowCreationNewSticker);
  // adding text in sticker
  windowAddButton.addEventListener('click', function () {});
});
