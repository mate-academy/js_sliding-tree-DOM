'use strict';

const items = document.querySelectorAll('li');

items.forEach((item) => {
  const span = document.createElement('span');

  span.textContent = item.firstChild.textContent;

  item.replaceChild(span, item.firstChild);

  span.addEventListener('click', () => {
    const list = item.querySelector('ul');

    if (list) {
      list.hidden = !list.hidden;
    }
  });
});
