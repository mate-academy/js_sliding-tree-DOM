'use strict';

const list = document.querySelector('.tree');
const elements = document.querySelectorAll('li');

for (const element of elements) {
  if (!element.firstElementChild) {
    continue;
  }

  const span = document.createElement('span');

  span.textContent = element.firstChild.textContent;
  element.firstChild.replaceWith(span);
}

list.addEventListener('click', (action) => {
  const target = action.target.nextSibling;

  if (target) {
    target.hidden = !target.hidden;
  }
});
