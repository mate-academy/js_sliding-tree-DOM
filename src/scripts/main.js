'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('ul li');

for (const child of listItems) {
  if (child.querySelector('ul')) {
    const span = document.createElement('span');
    const text = child.firstChild;

    span.appendChild(text);

    child.prepend(span);
  }
}

tree.addEventListener('click', (e) => {
  const span = e.target.closest('span');

  if (!span) {
    return;
  }

  const nextElement = span.nextElementSibling;

  if (!nextElement) {
    return;
  }

  nextElement.hidden = !nextElement.hidden;
});
