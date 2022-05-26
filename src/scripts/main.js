'use strict';

// write code here
const lists = document.querySelectorAll('ul');

for (const list of lists) {
  if (list.className !== 'tree') {
    const text = list.previousSibling.textContent.trim();
    const span = document.createElement('span');

    span.textContent = text;
    list.previousSibling.replaceWith(span);

    span.addEventListener('click', () => {
      span.nextElementSibling.hidden = !span.nextElementSibling.hidden;
    });
  }
}
