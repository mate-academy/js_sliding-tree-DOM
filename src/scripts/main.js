'use strict';

const tree = document.querySelector('.tree');
const branches = document.querySelectorAll('li');

for (const branch of branches) {
  if (branch.childElementCount > 0) {
    const span = document.createElement('span');

    span.className = 'tree__header';
    branch.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', e => {
  const header = e.target.closest('.tree__header');

  if (header) {
    header.nextElementSibling.hidden = !header.nextElementSibling.hidden;
  }
});
