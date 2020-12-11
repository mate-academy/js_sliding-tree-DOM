'use strict';

const tree = document.querySelector('.tree');

const list = [...document.querySelectorAll('li')]
  .filter((listItem) => !!listItem.querySelector('ul'));

list.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', event => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const sibling = event.target.nextSibling;

  sibling.hidden = !sibling.hidden;
});
