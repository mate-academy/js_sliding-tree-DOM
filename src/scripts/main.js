'use strict';

const list = document.querySelector('.tree');

list.querySelectorAll('li').forEach(el => {
  const span = document.createElement('span');

  el.prepend(span);
  span.append(span.nextSibling);
});

list.addEventListener('click', (e) => {
  const title = e.target.closest('span');

  if (!title) {
    return;
  }

  const liContent = title.parentNode.querySelector('ul');

  liContent.hidden = !liContent.hidden;
});
