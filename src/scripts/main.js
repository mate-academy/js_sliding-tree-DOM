'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

tree.addEventListener('click', (clickEvent) => {
  const ul = clickEvent.target.nextSibling;

  if (ul.hidden) {
    ul.hidden = !ul.hidden;
  } else {
    ul.hidden = 'true';
  }
});

for (const part of list) {
  const span = document.createElement('span');

  span.textContent = part.firstChild.textContent;
  part.firstChild.replaceWith(span);
}
