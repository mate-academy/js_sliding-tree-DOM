'use strict';

const tree = document.querySelector('.tree');
const listItems = tree.querySelectorAll('li');

listItems.forEach(li => {
  if (li.children.length > 0) {
    const span = document.createElement('span');

    li.prepend(span);
    span.textContent = span.nextSibling.textContent;
    span.nextSibling.remove();
  }
});

tree.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    const li = event.target;
    const ul = li.nextSibling;

    ul.hidden = !ul.hidden;
  }
});
