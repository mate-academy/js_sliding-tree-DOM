'use strict';

const body = document.querySelector('body');
const tree = document.querySelector('.tree');
const listItems = tree.querySelectorAll('li');

body.style.justifyContent = 'flex-start';
body.style.padding = '80px';
tree.style.width = '280px';

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
    const span = event.target;
    const ul = span.nextSibling;

    ul.hidden = !ul.hidden;
  }
});
