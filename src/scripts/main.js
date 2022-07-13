'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

for (const elements of list) {
  if (elements.children.length) {
    const span = document.createElement('span');

    elements.prepend(span);
    span.append(span.nextSibling);
  }
};

tree.addEventListener('click', (elm) => {
  const item = elm.target.closest('span').nextSibling;

  item.hidden = !item.hidden;
});
