'use strict';

const tree = document.querySelector('.tree');
const items = tree.querySelectorAll('li');

items.forEach((li) => {
  const childUl = li.querySelector('ul');

  if (!childUl) {
    return;
  }

  const span = document.createElement('span');

  span.append(li.firstChild);
  li.prepend(span);
});

tree.addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName !== 'SPAN') {
    return;
  }

  const parentLi = target.parentElement;
  const childUl = parentLi.querySelector('ul');

  if (!childUl) {
    return;
  }

  childUl.hidden = !childUl.hidden;
});
