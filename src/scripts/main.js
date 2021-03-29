'use strict';

const lists = document.querySelectorAll('ul');

for (const item of lists) {
  const span = document.createElement('span');

  span.textContent = item.previousSibling.textContent;
  item.previousSibling.replaceWith(span);

  span.addEventListener('click', () => {
    span.nextElementSibling.hidden = !span.nextElementSibling.hidden;
  });
}
