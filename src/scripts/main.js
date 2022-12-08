'use strict';

const tree = document.querySelector('.tree');
const headers = document.querySelectorAll('li');

headers.forEach(li => {
  if (li.children.length) {
    const span = document.createElement('span');

    span.textContent = li.firstChild.textContent;
    li.firstChild.replaceWith(span);
  }
});

tree.addEventListener('click', e => {
  const header = e.target.closest('span');

  if (!header) {
    return;
  }

  const list = e.target.nextElementSibling;

  if (list.hasAttribute('hidden')) {
    list.hidden = false;

    return;
  }

  list.hidden = true;
});
