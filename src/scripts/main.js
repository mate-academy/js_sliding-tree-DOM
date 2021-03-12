'use strict';

const tree = document.querySelector('.tree');
const lists = document.querySelectorAll('li');

lists.forEach(li => {
  if (li.children.length > 0) {
    const span = document.createElement('span');

    span.innerText = li.firstChild.textContent;
    span.className = 'span';
    li.firstChild.replaceWith(span);
  }
});

tree.addEventListener('click', (clickEvent) => {
  const list = clickEvent.target.closest('.span').nextElementSibling;

  if (!list) {
    return;
  }

  list.hidden = !list.hidden;
});
