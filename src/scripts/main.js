'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('ul').forEach((list) => {
  const listHeader = list.previousSibling;
  const spanListHeader = document.createElement('span');

  spanListHeader.textContent = listHeader.textContent;
  listHeader.replaceWith(spanListHeader);

  spanListHeader.addEventListener('click', () => {
    Array.from(list.children).forEach((item) => {
      if (item.style.display === 'none') {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
