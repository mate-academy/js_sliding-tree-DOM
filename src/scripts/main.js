'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');

li.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.prepend(span.nextSibling);
});

tree.addEventListener('click', (evt) => {
  const target = evt.target.closest('LI');

  if (!target || !tree.contains(target)) {
    return;
  }

  if (target.children.length) {
    target.children[1].hidden = target.children[1].hidden === false;
  }
});
