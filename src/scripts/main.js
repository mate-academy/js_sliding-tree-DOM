'use strict';

const list = document.querySelector('.tree');

list.addEventListener('click', e => {
  const targetSpan = e.target.closest('.list-item-toggle');

  if (targetSpan) {
    const header = targetSpan.parentNode.querySelector('ul');

    if (header) {
      header.hidden = !header.hidden;
    }
  }
});

document.querySelectorAll('li').forEach(item => {
  const span = document.createElement('span');

  span.classList.add('list-item-toggle');
  item.prepend(span);
  span.append(span.nextSibling);
});
