'use strict';

const tree = document.querySelector('.tree');
const items = tree.querySelectorAll('li');

document.addEventListener('DOMContentLoaded', () => {
  const sublists = tree.querySelectorAll('ul ul');

  sublists.forEach((list) => {
    list.setAttribute('hidden', '');
  });
});

items.forEach((item) => {
  const list = item.querySelector('ul');
  const span = document.createElement('span');

  if (item.firstChild && item.firstChild.nodeType === Node.TEXT_NODE) {
    span.textContent = item.firstChild.textContent.trim();
    item.firstChild.replaceWith(span);
  }

  if (list) {
    span.addEventListener('click', (e) => {
      e.stopPropagation();
      list.toggleAttribute('hidden');
    });
  }
});
