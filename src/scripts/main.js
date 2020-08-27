'use strict';

const tree = document.querySelector('.tree');
const liList = [...document.querySelectorAll('li')];

tree.style.position = 'absolute';
tree.style.top = `${tree.getBoundingClientRect().top}px`;
tree.style.left = `${tree.getBoundingClientRect().left}px`;

for (const li of liList) {
  if (li.querySelector('ul')) {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', (event) => {
  const target = event.target;

  if (!target.nextSibling) {
    return;
  }

  target.nextSibling.hidden = !target.nextSibling.hidden;
});
