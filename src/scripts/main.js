'use strict';

const items = [...document.querySelectorAll('li')];

items.forEach(item => {
  const list = item.querySelector('ul');

  if (!list) {
    return;
  }

  const textOfItem = item.firstChild;
  const span = document.createElement('span');

  textOfItem.replaceWith(span);
  span.textContent = textOfItem.data.trim();

  span.addEventListener('click', () => {
    list.hidden = !list.hidden;
  });
});
