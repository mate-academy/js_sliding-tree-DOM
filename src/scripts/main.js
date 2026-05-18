'use strict';

const items = document.querySelectorAll('li');

items.forEach((item) => {
  const nestedList = item.querySelector('ul');

  if (nestedList) {
    const span = document.createElement('span');

    span.textContent = item.firstChild.textContent.trim();

    item.firstChild.replaceWith(span);

    span.addEventListener('click', () => {
      nestedList.hidden = !nestedList.hidden;
    });
  }
});
