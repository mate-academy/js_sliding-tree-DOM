'use strict';

const listItems = [...document.querySelectorAll('ul')];

listItems.shift();

for (const item of listItems) {
  const itemHeader = item.parentElement;
  const textHeader = itemHeader.firstChild.textContent;
  const span = document.createElement('span');

  itemHeader.prepend(span);

  span.textContent = textHeader;
  span.nextSibling.textContent = '';

  span.addEventListener('click', () => {
    if (item.style.display === 'none') {
      item.style.display = '';

      return;
    }

    item.style.display = 'none';
  });
}
