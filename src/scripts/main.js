'use strict';

const tree = document.querySelector('.tree');

const lis = [...tree.querySelectorAll('li')];

lis.forEach(li => {
  if (li.childElementCount > 0) {
    const span = document.createElement('span');

    li.prepend(span);
    span.prepend(span.nextSibling);
  }
});

tree.addEventListener('click', e => {
  const span = e.target.closest('span');

  if (!span) {
    return;
  }

  const ul = span.nextSibling;

  ul.style.display = (ul.style.display === 'none') ? '' : 'none';
});
