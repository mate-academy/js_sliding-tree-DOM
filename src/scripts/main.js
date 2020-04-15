'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const { target } = e;
  const curentItem = target.closest('.tree__item');

  for (const child of curentItem.children) {
    if (child.classList.contains('tree__list')) {
      child.classList.toggle('hide');
    }
  }
});
