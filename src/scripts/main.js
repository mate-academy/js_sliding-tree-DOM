'use strict';

const list = document.querySelector('.tree');

list.querySelectorAll('li').forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
  span.classList.add('list_item');
});

list.querySelectorAll('ul').forEach(item => {
  item.classList.add('branch');
});

list.addEventListener('click', e => {
  const titleText = e.target.closest('.list_item');

  if (!titleText) {
    return;
  }

  const liContent = titleText.parentNode.querySelector('.branch');

  liContent.hidden = !liContent.hidden;
});
