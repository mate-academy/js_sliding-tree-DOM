'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (el) => {
  const lists = document.querySelectorAll('ul');

  for (const list of lists) {
    if (el.target === list) {
      return;
    }
  }

  const item = el.target;
  const element = item.firstElementChild;

  element.hidden = !element.hidden;
});
