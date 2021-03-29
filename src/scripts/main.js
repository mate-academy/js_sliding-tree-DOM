'use strict';

const tree = document.querySelectorAll('ul');

for (const item of tree) {
  const span = document.createElement('span');

  span.textContent = item.previousSibling.textContent;
  item.previousSibling.replaceWith(span);

  span.addEventListener('click', () => {
    span.nextSibling.hidden = !span.nextSibling.hidden;
  });
}
