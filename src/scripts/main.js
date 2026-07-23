'use strict';

const tree = document.querySelector('.tree');

const items = tree.querySelectorAll('li');

items.forEach((item) => {
  const childList = item.querySelector(':scope > ul');

  if (!childList) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = item.firstChild.textContent.trim();

  item.firstChild.textContent = '';
  item.prepend(span);

  span.addEventListener('click', () => {
    childList.style.display = childList.style.display === 'none' ? '' : 'none';
  });
});
