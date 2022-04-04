'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

for (const item of list) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
};

tree.addEventListener('click', e => {
  let target = e.target.closest('span');

  if (!target) return;

  target.nextSibling.hidden = !target.nextSibling.hidden;
});


