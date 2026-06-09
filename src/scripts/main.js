'use strict';

const items = document.querySelectorAll('li');

for (const item of items) {
  const nestedList = item.querySelector('ul');

  if (!nestedList) {
    continue;
  }

  const span = document.createElement('span');

  span.textContent = item.childNodes[0].textContent;
  item.childNodes[0].replaceWith(span);

  const list = span.nextElementSibling;

  span.addEventListener('click', () => {
    list.hidden = !list.hidden;
  });
}
