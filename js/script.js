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
  let stickerCardMenuDelBtn;
  // setTimeout(() => {
  //   console.log(stickerCardMenuDelBtn);
  // }, 5000);

  // sticker ID counter
  let stickerCounter = 0;
  // creating sticker function
  const createNewSticker = function () {
    windowTextTitle.textContent = windowTextTitleDefault;
    windowTextDescription.textContent = windowTextDescriptionDefault;
    const sticker = document.createElement('div');
    sticker.classList.add('sticker__card');
    sticker.id = stickerCounter;
    sticker.addEventListener('mouseover', function () {
      stickerMenu.style.opacity = '1';
    });
    sticker.addEventListener('mouseout', function () {
      stickerMenu.style.opacity = '0';
    });
    // sticker.setAttribute('contenteditable', 'true');

    const stickerMenu = document.createElement('div');
    stickerMenu.classList.add('sticker__card_menu');
    const menuItem1 = document.createElement('img');
    menuItem1.src = 'images/trash-icon.svg';
    menuItem1.id = `del${stickerCounter}`;

    stickerCardMenuDelBtn = menuItem1;
    const menuItem2 = document.createElement('img');
    menuItem2.src = 'images/edit-icon.svg';
    // const menuItem3 = document.createElement('img');
    // menuItem3.src = 'images/sticker-icon.svg';
    stickerMenu.appendChild(menuItem1);
    stickerMenu.appendChild(menuItem2);
    // stickerMenu.appendChild(menuItem3);
    sticker.appendChild(stickerMenu);

    grid.insertBefore(sticker, this);
    windowTextTitle.setAttribute('contenteditable', 'true');
    windowTextDescription.setAttribute('contenteditable', 'true');
    windowNewText.classList.remove('hidden');
    overlay.classList.remove('hidden');

    // add button click function
    windowAddButton.addEventListener('click', function () {
      const currentSticker = document.getElementById(stickerCounter);

      const userInput = windowTextDescription.innerText;
      const items = userInput.split('\n');
      const ul = document.createElement('ul');
      items.forEach(item => {
        if (item.trim() !== '') {
          const li = document.createElement('li');
          li.textContent = item;
          ul.appendChild(li);
        }
      });

      const inputHeaderText = document.createElement('p');
      inputHeaderText.textContent = windowTextTitle.textContent;
      inputHeaderText.classList.add('header-bold');
      // currentSticker.innerHTML = '';
      currentSticker.appendChild(inputHeaderText);
      currentSticker.appendChild(ul);

      stickerCounter++;
      closeWindowCreationNewSticker();
    });

    // del sticket event ON PROGRESS

    stickerCardMenuDelBtn.addEventListener('click', function () {
      const elToDel = document.getElementById(sticker.id);
      elToDel.remove();
    });

    // розширення стікера В ПРОЦЕСІ
    // sticker.addEventListener('click', function () {
    //   sticker.setAttribute('contenteditable', 'true');
    //   sticker.style.height = '500px';
    // });
  };

  // overlay closing function
  const closeWindowOnTapOverlay = function () {
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

  // Delete Sticker function ON PROGRESS
  // const delSticker = function (id) {
  //   const elToDel = document.getElementById(id);
  //   console.log(elToDel);
  //   elToDel.remove();
  // };

  // creating sticker event
  stickerPlus.addEventListener('click', createNewSticker);
  // overlay closing event
  overlay.addEventListener('click', closeWindowOnTapOverlay);
  // close button event
  windowCancelButton.addEventListener('click', closeWindowCreationNewSticker);

  ////// test buttons sidebar
  const buttonsSidebar = document.querySelectorAll('.task__btn');
  const buttonsContainer = document.querySelector('.main__task');
  const pagesMainWindow = document.querySelectorAll('.wrapper__main');

  buttonsContainer.addEventListener('click', function (e) {
    const clickedButton = e.target.closest('.task__btn');

    // захист
    if (!clickedButton) return;

    // активна кнопка
    buttonsSidebar.forEach(btn => {
      btn.classList.remove('task__active');
    });
    clickedButton.classList.add('task__active');

    // активне вікно
    pagesMainWindow.forEach(window => {
      window.classList.remove('main--window-active');
    });
    console.log(`${clickedButton.dataset.btn}`);
    document
      .querySelector(`.main--${clickedButton.dataset.btn}`)
      .classList.add('main--window-active');
  });
});
