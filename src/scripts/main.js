'use strict';

const list = document.querySelector('.tree');

list.addEventListener('click', (e) => {
  const item = e.target;

  if (!item.matches('li')) {
    return;
  }

  if (item.firstElementChild.style.display === 'none') {
    item.firstElementChild.style.display = 'block';
  } else {
    item.firstElementChild.style.display = 'none';
  }
});
