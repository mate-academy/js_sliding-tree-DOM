'use strict';

const items = document.querySelectorAll('ul');

for (const item of items) {
  if (item.className !== 'tree') {
    const text = item.previousSibling.textContent.trim();
    const span = document.createElement('span');

    span.textContent = text;
    item.previousSibling.replaceWith(span);

    span.addEventListener('click', () => {
      span.nextElementSibling.hidden = !span.nextElementSibling.hidden;
    });
  }
}
