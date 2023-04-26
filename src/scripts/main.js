'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', e => {
  const list = e.target.firstElementChild;

  if (list.tagName === 'UL') {
    if (list.style.display === 'none') {
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
  }
});
