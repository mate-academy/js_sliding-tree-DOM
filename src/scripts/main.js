'use strict';

const tree = document.querySelector('.tree');
const items = document.querySelectorAll('li');

[...items].forEach(li => {
  if (li.children.length > 0) {
    const text = li.firstChild;
    const span = document.createElement('span');

    span.append(text);
    li.prepend(span);
  }
});

tree.addEventListener('click', (e) => {
  const list = e.target;

  if (list.tagName === 'SPAN') {
    list.nextElementSibling.hidden = !list.nextElementSibling.hidden;
  }
});
