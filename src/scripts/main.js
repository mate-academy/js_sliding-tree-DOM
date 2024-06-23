'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('.tree li');

listItems.forEach((el) => {
  const span = document.createElement('span');

  if (el.children.length !== 0) {
    span.textContent = el.firstChild.textContent.trim();
    el.firstChild.replaceWith(span);
  }
});

tree.addEventListener('click', (e) => {
  const headerItem = e.target.tagName === 'SPAN';
  const childItem = e.target.nextElementSibling;

  if (headerItem && !childItem.hasAttribute('hidden')) {
    childItem.setAttribute('hidden', '');
  } else {
    childItem.removeAttribute('hidden');
  }
});
