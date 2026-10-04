'use strict';

const listItems = document.querySelectorAll('li');

listItems.forEach((li) => {
  const subTree = li.querySelector('ul');

  if (subTree) {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(span.nextSibling);
  }
});

document.querySelector('.tree').addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const parentLi = e.target.parentElement;
  const subTree = parentLi.querySelector('ul');

  if (!subTree) {
    return;
  }

  subTree.hidden = !subTree.hidden;
});
