'use strict';

const elements = document.querySelectorAll('.tree ul');

for (const element of elements) {
  const span = document.createElement('span');

  span.textContent = element.previousSibling.textContent;
  element.previousSibling.replaceWith(span);

  span.onclick = () => {
    span.nextElementSibling.hidden = !span.nextElementSibling.hidden;
  };
};
