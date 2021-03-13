'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

tree.addEventListener('click', (clickEvent) => {
  const ul = clickEvent.target.nextSibling;

  if (clickEvent.target.className === 'wrapper') {
    ul.hidden = !ul.hidden;
  }
});

for (const part of list) {
  const span = document.createElement('span');

  span.className = 'wrapper';
  span.textContent = part.firstChild.textContent;

  if (part.lastElementChild) {
    part.firstChild.replaceWith(span);
  }
}
