'use strict';

const list = document.querySelectorAll('ul');

for (const item of list) {
  const span = document.createElement('span');

  span.innerHTML = item.previousSibling.textContent.trim();
  item.previousSibling.replaceWith(span);

  span.addEventListener('click', () => {
    span.nextElementSibling.hidden = !span.nextElementSibling.hidden;
  });
}
