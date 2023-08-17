'use strict';
document.addEventListener('DOMContentLoaded', function () {
  const grid = document.querySelector('.inner__wrapper_sticker');
  let counter = 2;
  const stickerMain = document.querySelector('.sticker__card.card-add');
  console.log(stickerMain);
  stickerMain.addEventListener('click', function () {
    const sticker = document.createElement('div');
    sticker.classList.add('sticker__card');
    grid.insertBefore(sticker, this);
  });
});
