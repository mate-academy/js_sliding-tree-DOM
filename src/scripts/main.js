'use strict';

const tree = document.querySelector('.tree');
const items = tree.querySelectorAll('li');

items.forEach((item) => {
  const list = item.querySelector('ul');
  const span = document.createElement('span');

  span.textContent = item.firstChild.textContent;

  item.firstChild.replaceWith(span);

  span.addEventListener('click', () => {
    list.toggleAttribute('hidden');
  });
});
