'use strict';

const tree = document.querySelector('.tree');
const headers = [...document.querySelectorAll('li')];

for (const header of headers) {
  if (header.children.length !== 0) {
    const span = document.createElement('span');

    header.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', e => {
  if (!e.target.closest('span')) {
    return;
  };

  const header = e.target.parentElement.querySelector('ul');

  if (!header) {
    return;
  }

  header.hidden = !header.hidden;
});
