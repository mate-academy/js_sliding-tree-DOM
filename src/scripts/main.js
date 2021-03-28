'use strict';

const lists = document.querySelectorAll('.tree ul');

for (const list of lists) {
  const span = document.createElement('span');

  span.innerText = list.previousSibling.textContent;
  list.previousSibling.replaceWith(span);

  const spanClick = () => {
    span.nextElementSibling.hidden = !span.nextElementSibling.hidden;
  };

  span.addEventListener('click', spanClick);
}
