'use strict';

const tree = document.querySelector('.tree');
const headers = [...document.querySelectorAll('li')];

for (const header of headers) {
  if (header.children.length) {
    const span = document.createElement('span');

    header.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', eventClick => {
  const header = eventClick
    .target
    .parentElement
    .querySelector('ul');

  if (!eventClick.target.closest('span')) {
    return;
  }

  if (header) {
    header.hidden = !header.hidden;
  }
});
