'use strict';

// write code here
const list = document.querySelector('.tree');

const listitems = document.querySelectorAll('li');

listitems.forEach(listHeader => {
  const listitemssWrap = document.createElement('span');

  listitemssWrap.hidden = false;

  listHeader.insertAdjacentElement('beforebegin', listitemssWrap);

  listitemssWrap.insertAdjacentElement('afterbegin', listHeader);
});

list.addEventListener('click', function(evt) {
  evt.preventDefault();

  if (evt.target.parentNode.tagName === 'SPAN') {
    const clicked = evt.target;

    if (clicked.firstElementChild) {
      const child = clicked.firstElementChild;

      child.hidden === false
        ? child.hidden = true
        : child.hidden = false;
    };
  }
});
