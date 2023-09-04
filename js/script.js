'use strict';

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
  const windowTextTitleDefault = 'Your topic';
  const windowTextDescriptionDefault = 'Your notes';
  let stickerCardMenuDelBtn;
  // buttons sidebar
  const buttonsSidebar = document.querySelectorAll('.task__btn');
  const buttonsContainer = document.querySelector('.main__task');
  const pagesMainWindow = document.querySelectorAll('.wrapper__main');
  const newListButton = document.querySelector('.list__newlist');
  const newListModal = document.querySelector('.list__modal');

  const listBlock = document.querySelector('.main__list_container');
  // timer 
  const optionDate = document.querySelector('.option__date');
  const optionDateIcon = document.querySelector('.option__date_icon');
  const dateTextTitle = document.querySelector('.date__text_title');

  // const rainbowColors = {
  //   red: '#FF0000',
  //   orange: '#FFA500',
  //   yellow: '#FFFF00',
  //   green: '#008000',
  //   blue: '#0000FF',
  //   indigo: '#4B0082',
  //   violet: '#800080',
  // };

  // list rec color
  // const listRecColor = innerColorIcon.style.backgroundColor;

  // sticker ID counter
  let stickerCounter = 0;

  // open sticker add window function
  const openNewStickerWindow = function () {
    createNewstickerWindow.classList.remove('hidden');
    windowNewText.classList.remove('hidden');
    overlay.classList.remove('hidden');
    windowTextTitle.setAttribute('contenteditable', 'true');
    windowTextDescription.setAttribute('contenteditable', 'true');
    windowTextTitle.textContent = windowTextTitleDefault;
    windowTextDescription.textContent = windowTextDescriptionDefault;
  };
  // creating sticker function
  const createNewSticker = function () {
    const sticker = document.createElement('div');
    sticker.classList.add('sticker__card_new');
    sticker.id = stickerCounter;
    sticker.addEventListener('mouseover', function () {
      stickerMenu.style.opacity = '1';
    });
    sticker.addEventListener('mouseout', function () {
      stickerMenu.style.opacity = '0';
    });

    // creating block with time

    // if (dateTextTitle.textContent == '1 hour' || dateTextTitle.textContent == '24 hours' || dateTextTitle.textContent == '7 days' || dateTextTitle.textContent == '1 month') {
    //   const stickerTimeBlock = document.createElement('div');
    //   stickerTimeBlock.classList.add('sticker__time_block');
    //   const timeBlockText = document.createElement('p');
    //   timeBlockText.classList.add('time__block_text');
      
    //   sticker.appendChild(stickerTimeBlock);
    //   stickerTimeBlock.appendChild(timeBlockText);
      
    //   if (dateTextTitle.textContent == '1 hour') {
    //     timeBlockText.textContent = '59m 59s';
    //   let firstItemID;
    //   let totalSeconds = 3600;
  
    //   function firstItemTimer() {
  
    //       firstItemID = setInterval(() => {
    //           totalSeconds--;
  
    //           if (totalSeconds < 0) {
    //               clearInterval(firstItemID);
    //               dateTextTitle.textContent = 'Select time';
    //           } else {
    //               let hours = Math.floor(totalSeconds / 3600);
    //               let minutes = Math.floor((totalSeconds % 3600) / 60);
    //               let seconds = totalSeconds % 60;
  
    //               let firstHours = hours.toString();
    //               let firstMinutes = minutes.toString();
    //               let firstSeconds = seconds.toString();
  
    //               if (hours < 10) {
    //                   firstHours = '0' + firstHours;
    //               }
    //               if (minutes < 10) {
    //                   firstMinutes = '0' + firstMinutes;
    //               }
    //               if (seconds < 10) {
    //                   firstSeconds = '0' + firstSeconds;
    //               }
  
    //               timeBlockText.innerHTML = `${firstMinutes}h ${firstSeconds}m`;
    //           };
  
    //       }, 1000)
    //   }
  
    //   firstItemTimer();
    //   }

    //   dateTextTitle.textContent = 'Select time';
    // }

  
    const stickerMenu = document.createElement('div');
    stickerMenu.classList.add('sticker__card_menu');
    const menuItem1 = document.createElement('img');
    menuItem1.src = 'images/trash-icon.svg';
    menuItem1.id = `del${stickerCounter}`;
    stickerCardMenuDelBtn = menuItem1;
    const menuItem2 = document.createElement('img');
    menuItem2.src = 'images/edit-icon.svg';
    stickerMenu.appendChild(menuItem1);
    stickerMenu.appendChild(menuItem2);
    sticker.appendChild(stickerMenu);
    grid.insertBefore(sticker, stickerPlus);

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
    currentSticker.append(inputHeaderText);
    currentSticker.append(ul);
    stickerCounter++;
    closeWindowCreationNewSticker();

    // del sticker
    const stickerDelete = function () {
      const elToDel = document.getElementById(sticker.id);
      elToDel.remove();
    };

    stickerCardMenuDelBtn.addEventListener('click', stickerDelete);
  };

  // overlay closing function
  const closeWindowOnTapOverlay = function () {
    overlay.classList.add('hidden');
    windowNewText.classList.add('hidden');
    newListModal.classList.add('hidden');
  };

  // close button function on creation window
  const closeWindowCreationNewSticker = function () {
    createNewstickerWindow.classList.add('hidden');
    windowNewText.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  //side bar buttons function
  const sideBarButtonSelection = function (e) {
    const clickedButton = e.target.closest('.task__btn');
    if (!clickedButton) return;
    buttonsSidebar.forEach(btn => {
      btn.classList.remove('task__active');
    });
    clickedButton.classList.add('task__active');
    pagesMainWindow.forEach(window => {
      window.classList.add('hidden');
    });
    document
      .querySelector(`.main--${clickedButton.dataset.btn}`)
      .classList.remove('hidden');
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

  // option date

  // let optionDateIsOpen = false;

  // const windowOptionList = document.createElement('ul');
  // windowOptionList.classList.add('option__date_list');

  // // first list 1 hour
  // const windowOptionItemFirst = document.createElement('li');
  // windowOptionItemFirst.classList.add('first__list_item');
  // windowOptionItemFirst.textContent = '1 hour';

  // // second list 24 hours 
  // const windowOptionItemSecond = document.createElement('li');
  // windowOptionItemSecond.classList.add('second__list_item');
  // windowOptionItemSecond.textContent = '24 hours';

  // // third list 7 days
  // const windowOptionItemThird = document.createElement('li');
  // windowOptionItemThird.classList.add('third__list_item');
  // windowOptionItemThird.textContent = '7 days';

  // // fourth list 1 month
  // const windowOptionItemFourth = document.createElement('li');
  // windowOptionItemFourth.classList.add('fourth__list_item');
  // windowOptionItemFourth.textContent = '1 month';

  // // appendChild for all 4 lists
  // windowOptionList.appendChild(windowOptionItemFirst);
  // windowOptionList.appendChild(windowOptionItemSecond);
  // windowOptionList.appendChild(windowOptionItemThird);
  // windowOptionList.appendChild(windowOptionItemFourth);
  // optionDate.appendChild(windowOptionList);

  // const optionDateCategory = function () {
  //   optionDateIsOpen = !optionDateIsOpen;

  //   if (optionDateIsOpen) {
  //     optionDateIcon.style.transform = 'rotate(180deg)';
  //     windowOptionList.style.display = 'block';
  //   } else {
  //     optionDateIcon.style.transform = 'rotate(0deg)';
  //     windowOptionList.style.display = 'none';
  //   }

  // };
  // optionDate.addEventListener('click', optionDateCategory);

  // windowOptionItemFirst.addEventListener('click', () => {
  //   dateTextTitle.textContent = windowOptionItemFirst.textContent;
  // })

  // windowOptionItemSecond.addEventListener('click', () => {
  //   dateTextTitle.textContent = windowOptionItemSecond.textContent;
  // })

  // windowOptionItemThird.addEventListener('click', () => {
  //   dateTextTitle.textContent = windowOptionItemThird.textContent;
  // })

  // windowOptionItemFourth.addEventListener('click', () => {
  //   dateTextTitle.textContent = windowOptionItemFourth.textContent;
  // })

  stickerPlus.addEventListener('click', openNewStickerWindow);
  windowAddButton.addEventListener('click', createNewSticker);
  // overlay closing event
  overlay.addEventListener('click', closeWindowOnTapOverlay);
  // close button event
  windowCancelButton.addEventListener('click', closeWindowCreationNewSticker);
  // side bar navigation
  buttonsContainer.addEventListener('click', sideBarButtonSelection);

  // side bar position по замовчанню
  pagesMainWindow[0].classList.remove('hidden');
  document;
  buttonsSidebar[3].classList.add('task__active');


  const newListOkButton = document.querySelector('.inner__btn_item');
  const innerColorIcon = document.querySelector('.inner__color_icon');

  const createNewListCategory = function () {
    newListModal.classList.remove('hidden');
    newListButton.classList.add('hidden');
    // ----

    // const firstColor = 'rgba(0, 194, 255, 0.60)';
    // const secondColor = 'rgba(255, 184, 53, 0.60)';
    // const thirdColor = '#FFD4AA';
    // const fourthColor = '#FEDADA';
    // const fivethColor = 'rgba(255, 0, 0, 0.60)';
  
    const innerRecColors = [
      '#FFA500',
      '#FFFF00',
      '#008000',
      '#0000FF',
      '#4B0082',
      '#800080',
    ];
    let currentInnerIndex = 0;
  
    const listColorIcon = function () {
      innerColorIcon.style.backgroundColor = innerRecColors[currentInnerIndex];
      currentInnerIndex = (currentInnerIndex + 1) % innerRecColors.length;
    };
  
    innerColorIcon.addEventListener('click', listColorIcon);

    const newListRec = document.createElement('div');
    newListRec.classList.add('inner__color_icon');
    newListRec.style.background = '#FF0000';
    // ----
  };
  
  const createNewList = function () {
    const listRecColor = innerColorIcon.style.backgroundColor;
    newListModal.classList.add('hidden');
    newListButton.classList.remove('hidden');

    // new list
    const newListElement = document.createElement('div');
    newListElement.classList.add('list__personal');

    // new list small rec
    const newListRec = document.createElement('div');
    newListRec.classList.add('inner__color_icon');
    newListRec.style.background = listRecColor;

    // new list text
    const listName = document.createElement('div');
    listName.classList.add('list_text');

    const inputTextContent = document.querySelector('.inner__input_text');
    listName.textContent = inputTextContent.value;
    inputTextContent.value = '';

    // new list rec with count 
    const listStickerNumber = document.createElement('div');
    listStickerNumber.classList.add('personal__number');

    const newListWrapper = document.querySelector('.main__list_container');

    newListElement.appendChild(newListRec);
    newListElement.appendChild(listName);
    newListElement.appendChild(listStickerNumber);
    
    newListWrapper.insertBefore(newListElement, newListWrapper.firstElementChild);
    listBlock.appendChild(newListElement);
  };

  // add new list event
  newListButton.addEventListener('click', createNewListCategory);
  
  newListOkButton.addEventListener('click', createNewList);


  // window category list
  let categoryIsOpen = false;

  const windowOptionCategory = document.querySelector('.option__category');
  const categoryIcon = document.querySelector('.category__text_icon');
  const windowCategoryList = document.createElement('ul');
  windowCategoryList.classList.add('window__category_list');
  const windowCategoryItem = document.createElement('li');
  windowCategoryItem.classList.add('window__category_item');
  windowCategoryItem.textContent = 'item 1';
  windowCategoryList.appendChild(windowCategoryItem);
  windowOptionCategory.appendChild(windowCategoryList);

  const optionCategory = function () {
    categoryIsOpen = !categoryIsOpen;

    if (categoryIsOpen) {
      categoryIcon.style.transform = 'rotate(180deg)';
      windowCategoryList.style.display = 'block';
    } else {
      categoryIcon.style.transform = 'rotate(0deg)';
      windowCategoryList.style.display = 'none';
    }
  };

  windowOptionCategory.addEventListener('click', optionCategory);

})
