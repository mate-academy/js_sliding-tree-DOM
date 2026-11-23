'use strict';

const allLi = document.querySelectorAll('li');

for (const li of allLi) {
  const nestedUl = li.querySelector('ul');

  if (nestedUl) {
    const span = document.createElement('span');

    span.append(li.firstChild);
    li.prepend(span);
  }
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const subTree = e.target.nextElementSibling;

  if (subTree) {
    subTree.hidden = !subTree.hidden;
  }
});
