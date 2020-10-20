'use strict';

const tree = document.querySelector('.tree');
const items = tree.querySelectorAll('ul');

const itemsWithChildren = [...items].map(item => item.parentElement);

itemsWithChildren.forEach(item => {
  const itemHeader = item.firstChild;
  const container = document.createElement('span');

  container.append(itemHeader);
  item.prepend(container);
});

tree.addEventListener('click', event => {
  if (event.target.tagName === 'SPAN') {
    const subTree = event.target.nextElementSibling;

    subTree.hidden = !subTree.hidden;
  }
});
