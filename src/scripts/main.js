'use strict';

const list = document.querySelectorAll('ul');

for (const el of list) {
  if (el.className !== 'tree') {
    const txt = el.previousSibling.textContent.trim();
    const span = document.createElement('span');

    span.textContent = txt;
    el.previousSibling.replaceWith(span);

    span.addEventListener('click', () => {
      span.nextElementSibling.hidden = !span.nextElementSibling.hidden;
    });
  }
}
