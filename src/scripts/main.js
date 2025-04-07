'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('ul').forEach((list) => {
  const listHeader = list.previousSibling;
  const spanListHeader = document.createElement('span');

  spanListHeader.textContent = listHeader.textContent;
  listHeader.replaceWith(spanListHeader);

  spanListHeader.addEventListener('click', () => {
    Array.from(list.children).forEach((item) => {
      item.style.display = item.style.display === 'none' ? 'list-item' : 'none';
    });
  });
});
