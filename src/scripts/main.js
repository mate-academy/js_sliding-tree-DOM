'use strict';

const items = [...document.querySelectorAll('li')];

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
