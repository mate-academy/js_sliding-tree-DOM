'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
  if (item.firstElementChild) {
    const span = document.createElement('span');

    span.textContent = item.childNodes[0].textContent.trim();
    item.childNodes[0].textContent = '';
    item.prepend(span);
  }
});

tree.addEventListener('click', e => {
  if (e.target.tagName === 'SPAN') {
    const children = e.target.parentNode.lastElementChild.children;

    for (const child of children) {
      if (!child.style.display) {
        child.style.display = 'none';
      } else {
        child.style.display = '';
      }
    }
  }
});
