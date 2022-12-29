'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  if (!e.target.firstElementChild) {
    return;
  }

  if (e.target.firstElementChild.tagName === 'UL') {
    e.target.firstElementChild.hidden = !e.target.firstElementChild.hidden;
  }
}
);
