'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (el) => {
  const item = el.target;
  const element = item.firstElementChild;

  if (element.hidden === false) {
    element.hidden = true;
  } else {
    element.hidden = false;
  }
});
