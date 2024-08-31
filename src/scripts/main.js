'use strict';

const tree = document.querySelector('.tree');
const ul = document.querySelectorAll('ul');

ul.forEach((el) => {
  if (!el.className) {
    el.style.visibility = 'hidden';
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const childUl = e.target.querySelector('ul');

    if (childUl) {
      childUl.style.visibility =
        childUl.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }
  }
});
