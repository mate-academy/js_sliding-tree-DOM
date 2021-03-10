'use strict';

const tree = document.querySelector('.tree');
const items = [...tree.querySelectorAll('li')];

items.forEach(item => {
  const list = item.querySelector('ul');

  if (!list) {
    return;
  }

  const textNode = item.firstChild;
  const span = document.createElement('span');

  textNode.replaceWith(span);
  span.textContent = textNode.data.trim();

  span.addEventListener('click', () => {
    list.hidden = !list.hidden;
  });
});
