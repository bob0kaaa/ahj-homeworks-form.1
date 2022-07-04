import Popup from './creat';
import Delete from './del';

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
