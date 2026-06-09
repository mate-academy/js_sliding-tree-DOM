'use strict';

const lis = document.querySelectorAll('.tree li');

for (const li of lis) {
  if (!li.querySelector('ul')) {
    continue;
  }

  const span = document.createElement('span');

  li.prepend(span);

  span.append(span.nextSibling);
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childUl = e.target.parentNode.querySelector('ul');

  if (childUl) {
    childUl.hidden = !childUl.hidden;
  }
});
