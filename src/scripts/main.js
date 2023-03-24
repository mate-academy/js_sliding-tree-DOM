'use strict';

const treeListElement = document.querySelector('.tree');

treeListElement.addEventListener('click', (eventClick) => {
  if (!eventClick.target.matches('li span')) {
    return;
  }

  const innerList = eventClick.target.parentElement.lastElementChild;

  if (!innerList) {
    return;
  }

  innerList.style.display = innerList.style.display === 'none'
    ? innerList.style.display = 'revert'
    : innerList.style.display = 'none';
});

treeListElement.querySelectorAll('.tree li').forEach(liElement => {
  const spanElement = document.createElement('span');

  spanElement.textContent = liElement.firstChild.textContent.trim();

  if (liElement.children.length) {
    liElement.firstChild.replaceWith(spanElement);
  }
});
