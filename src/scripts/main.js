'use strict';

// write code here

const titles = [...document.querySelectorAll('ul')];

titles.shift();

for (const item of titles) {
  const head = item.parentElement;

  const element = head.firstChild.textContent;

  const spanEl = document.createElement('span');

  head.prepend(spanEl);

  spanEl.textContent = element;

  spanEl.nextSibling.textContent = '';

  spanEl.addEventListener('click', () => {
    if (item.style.display === 'none') {
      item.style.display = '';

      return;
    }

    item.style.display = 'none';
  });
}
