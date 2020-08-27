'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

tree.style.position = 'absolute';
tree.style.top = `${tree.getBoundingClientRect().top}px`;
tree.style.left = `${tree.getBoundingClientRect().left}px`;

[...listItems].map(item => {
  const itemSpan = document.createElement('span');

  itemSpan.className = 'toggle';
  item.prepend(itemSpan);
  itemSpan.append(itemSpan.nextSibling);
});

tree.addEventListener('click', (event) => {
  const ul = event.target.nextElementSibling;

  if (ul.tagName === 'UL') {
    ul.hidden = !ul.hidden;
  }
});
