'use strict';

// write code here
const bigList = document.querySelectorAll('.tree ul');

for (const list of bigList) {
  const span = document.createElement('span');

  span.innerText = list.previousSibling.textContent;
  list.previousSibling.replaceWith(span);

  const spanClick = () => {
    span.nextElementSibling.hidden = !span.nextElementSibling.hidden;
  };

  span.addEventListener('click', spanClick);
}
