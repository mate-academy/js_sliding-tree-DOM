'use strict';

const tree = document.querySelector('.tree');

document.querySelectorAll('.tree li').forEach((li) => {
  const span = document.createElement('span');
  const element = li.firstChild;

  li.prepend(span);
  span.append(element);
});

tree.addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName === 'SPAN') {
    const list = target.closest('li').querySelector('ul');

    if (list) {
      list.hidden = !list.hidden;
    }
  }
});
