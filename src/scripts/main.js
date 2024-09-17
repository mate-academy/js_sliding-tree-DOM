'use strict';

const tree = document.querySelector('.tree');
const totalLi = tree.querySelectorAll('li');

totalLi.forEach(li => {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (evnt) => {
  if (!evnt.target.closest('li')) {
    return;
  }

  const children = evnt.target.nextSibling;

  if (!children) {
    return;
  }

  children.hidden = !children.hidden;
});
