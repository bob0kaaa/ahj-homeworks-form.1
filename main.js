/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/js/creat.js
class Popup {
  constructor() {
    this.$title = document.querySelector('.btn-click').dataset.title;
    this.$text = document.querySelector('.btn-click').dataset.text;
  }

  creating() {
    const btnBlock = document.getElementById('block-btn');
    const popoverDiv = document.createElement('div');
    const popupBlockDiv = document.createElement('div');
    const popupBlockTitleDiv = document.createElement('div');
    const popupBlocTextkDiv = document.createElement('div');
    btnBlock.insertBefore(popoverDiv, btnBlock.lastChild);
    popoverDiv.classList.add('popover');
    popoverDiv.style.left = `${btnBlock.offsetWidth / 2 - popoverDiv.offsetWidth / 2}px`;
    popoverDiv.style.bottom = `${btnBlock.offsetHeight + 35}px`;
    popoverDiv.insertBefore(popupBlockDiv, popoverDiv.lastChild);
    popupBlockDiv.classList.add('popup-block');
    popupBlockDiv.insertBefore(popupBlocTextkDiv, popupBlockDiv.lastChild);
    popupBlockDiv.insertBefore(popupBlockTitleDiv, popupBlockDiv.lastChild);
    popupBlockTitleDiv.classList.add('popup-block__title');
    popupBlockTitleDiv.textContent = this.$title;
    popupBlocTextkDiv.classList.add('popup-block__text');
    popupBlocTextkDiv.textContent = this.$text;
    console.log(popoverDiv.offsetParent);
  }

}
;// CONCATENATED MODULE: ./src/js/del.js
class Delete {
  constructor() {
    this.$btnBlock = document.getElementById('block-btn');
  }

  deleting() {
    this.$popoverDiv = document.querySelector('.popover');
    this.$btnBlock.removeChild(this.$popoverDiv);
  }

}
;// CONCATENATED MODULE: ./src/js/app.js


const popup = new Popup();
const del = new Delete();
const btnClick = document.querySelector('.btn-click');
btnClick.addEventListener('click', () => {
  if (document.querySelector('.popover') != null) {
    del.deleting();
  } else {
    popup.creating();
  }
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;