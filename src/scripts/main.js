'use strict';

const elements = document.querySelectorAll('.tree ul');

for (const element of elements) {
  const span = document.createElement('span');

  span.textContent = element.previousSibling.textContent;
  element.previousSibling.replaceWith(span);

  span.addEventListener('click', (e) => {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  });
};
