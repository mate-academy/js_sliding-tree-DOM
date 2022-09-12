'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const lists = document.querySelectorAll('ul');

  for (const list of lists) {
    if (e.target === list) {
      return;
    }
  }

  const item = e.target;
  const element = item.firstElementChild;

  element.hidden = !element.hidden;
});
