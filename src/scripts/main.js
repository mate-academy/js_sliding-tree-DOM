'use strict';

const lists = document.querySelectorAll('ul');

for (let i = 0; i < lists.length; i++) {
  const span = document.createElement('span');

  span.textContent = lists[i].previousSibling.textContent;
  lists[i].previousSibling.replaceWith(span);

  span.addEventListener('click', () => {
    span.nextElementSibling.hidden = !span.nextElementSibling.hidden;
  });
}
