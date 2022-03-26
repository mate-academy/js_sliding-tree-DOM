'use strict';

const list = document.querySelector('.tree');

list.addEventListener('click', e => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  e.target.clicked = !e.target.clicked;

  if (e.target.clicked) {
    e.target.nextElementSibling.style.display = 'none';
    e.target.style.fontWeight = 'bold';
  } else {
    e.target.nextElementSibling.style.display = '';
    e.target.style.fontWeight = 'normal';
  }
});
