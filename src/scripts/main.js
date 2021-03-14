'use strict';

const list = document.querySelector('.tree');
const elements = document.querySelectorAll('li');

for (const element of elements) {
  if (element.firstElementChild) {
    const span = document.createElement('span');

    span.textContent = element.firstChild.textContent;

    element.firstChild.replaceWith(span);
  }
}

list.addEventListener('click', (action) => {
  action.preventDefault();

  const target = action.target.nextSibling;

  if (target) {
    target.hidden = !target.hidden;
  }
});
