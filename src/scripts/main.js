'use strict';

const list = document.querySelector('.tree');
const allListItem = [...list.querySelectorAll('li')];

allListItem.map(oneListItem => {
  const span = document.createElement('span');

  oneListItem.prepend(span);
  span.append(span.nextSibling);
});

list.addEventListener('click', even => {
  if (even.target.tagName === 'SPAN') {
    if (even.target.nextSibling.hidden === false) {
      even.target.nextSibling.hidden = true;
    } else {
      even.target.nextSibling.hidden = false;
    }
    ;
  };
});
