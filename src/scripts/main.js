'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('.tree li');

listItems.forEach((listItem) => {
  const span = document.createElement('span');

  listItem.prepend(span);
  span.prepend(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const nextElement = e.target.nextSibling;

    if (nextElement.tagName === 'UL') {
      nextElement.hidden = !nextElement.hidden;
    }
  }
});
