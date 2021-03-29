'use strict';

const lists = document.querySelectorAll('.tree ul');

for (const item of lists) {
  const span = document.createElement('span');

  span.innerText = item.previousSibling.textContent;
  item.previousSibling.replaceWith(span);

  span.addEventListener('click', () => {
    span.nextSibling.hidden = !span.nextSibling.hidden;
  });
}
