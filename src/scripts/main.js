'use strict';

const tree = document.querySelector('.tree');

document.querySelectorAll('.tree li').forEach((li) => {
  const span = document.createElement('span');
  const element = li.firstChild;

  li.prepend(span);
  span.append(element);
});

tree.addEventListener('click', (el) => {
  const target = el.target;

  if (target.tagName === 'SPAN') {
    const showList = target.closest('li').querySelector('ul');

    if (showList) {
      showList.hidden = !showList.hidden;
    }
  }
});
