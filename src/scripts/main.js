'use strict';

const tree = document.querySelector('.tree');
const allItems = tree.querySelectorAll('li');

allItems.forEach((item) => {
  const subList = item.querySelector('ul');

  if (!subList) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = item.firstChild.textContent.trim();
  item.firstChild.replaceWith(span);

  span.addEventListener('click', () => {
    subList.hidden = !subList.hidden;
  });
});
