'use strict';

const list = document.querySelector('.tree');

list.querySelectorAll('li').forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

list.addEventListener('click', e => {
  const titleText = e.target.closest('span');

  if (!titleText) {
    return;
  }

  const liContent = titleText.parentNode.querySelector('ul');

  liContent.hidden = !liContent.hidden;
});
