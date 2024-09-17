'use strict';

// write code here
const list = document.querySelector('.tree');

const listitems = document.querySelectorAll('li');

listitems.forEach(listHeader => {
  const listitemssWrap = document.createElement('span');

  listitemssWrap.hidden = false;

  if (listHeader.firstElementChild) {
    listitemssWrap.textContent = listHeader.firstChild.textContent;
    listHeader.firstChild.textContent = '';
    listHeader.insertAdjacentElement('afterbegin', listitemssWrap);
  };
});

list.addEventListener('click', function(evt) {
  if (evt.target.tagName !== 'SPAN') {
    return;
  }

  const clicked = evt.target;

  if (clicked) {
    const child = clicked.nextElementSibling;

    child.hidden = !child.hidden;
  }
});
