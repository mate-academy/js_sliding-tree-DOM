'use strict';

const tree = document.querySelector('.tree');
const allLi = tree.querySelectorAll('li');

for (const li of allLi) {
  const span = document.createElement('span');

  const textNode = li.firstChild;

  li.insertBefore(span, textNode);
  span.appendChild(textNode);
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const parentLi = e.target.parentNode;
  const subTree = parentLi.querySelector('ul');

  if (!subTree) {
    return;
  }

  subTree.hidden = !subTree.hidden;
});
