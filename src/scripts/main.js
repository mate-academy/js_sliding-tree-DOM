'use strict';

const tree = document.querySelector('.tree');
const listItems = [...tree.querySelectorAll('li')]
  .filter(item => Boolean(item.querySelector('ul')));

listItems.forEach(listItem => {
  const span = document.createElement('span');

  span.append(listItem.firstChild);
  listItem.prepend(span);
});

tree.addEventListener('click', ({ target }) => {
  if (target.tagName !== 'SPAN') {
    return;
  }

  const displaySpan = target.nextElementSibling;

  displaySpan.hidden = !displaySpan.hidden;
});
