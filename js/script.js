'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const grid = document.querySelector('.inner__wrapper_sticker');
  const stickerMain = document.querySelector('.sticker__card-plus.card-add');

  stickerMain.addEventListener('click', function () {
    const sticker = document.createElement('div');
    sticker.classList.add('sticker__card');
    sticker.setAttribute('contenteditable', 'true');
    grid.insertBefore(sticker, this);

    const stickerNew = document.querySelector('.sticker__card');
    const windowNewText = document.querySelector('.sticker__window_section');
    stickerNew.addEventListener('click', function () {
      windowNewText.classList.remove('hidden');
      overlay.classList.remove('hidden');
    });
  });
});


const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', function () {
  const windowNewText = document.querySelector('.sticker__window_section');
  overlay.classList.add('hidden');
  windowNewText.classList.add('hidden');
})

let stickyWindow = document.querySelector('.sticker__window_section');
let windowCancelButton = document.querySelector('.window__btn_cancel');

windowCancelButton.addEventListener('click', function () {
  stickyWindow.style.display = 'none';
  overlay.classList.add('hidden');
})


