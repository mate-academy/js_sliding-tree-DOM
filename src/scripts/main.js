'use strict';

const tree = document.querySelector('.tree');

const items = tree.querySelectorAll('li');

items.forEach((li) => {
  const subList = li.querySelector('ul');

  if (!subList) {
    return;
  }

  const text = li.firstChild.textContent.trim();
  const span = document.createElement('span');

  span.textContent = text;

  li.firstChild.replaceWith(span);

  span.addEventListener('click', () => {
    subList.hidden = !subList.hidden;
  });
});
