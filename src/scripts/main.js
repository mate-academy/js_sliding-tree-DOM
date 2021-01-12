'use strict';

const items = [...document.querySelectorAll('li')];
const tree = document.querySelector('.tree');

items.forEach(item => {
  const list = item.querySelector('ul');
  const textNode = item.firstChild;
  const span = document.createElement('span');

  if (!list) {
    return;
  }

  textNode.replaceWith(span);
  span.textContent = textNode.data.trim();
});

tree.addEventListener('click', (e) => {
  e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
});
