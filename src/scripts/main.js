'use strict';

const tree = document.querySelector('.tree');

[...document.querySelectorAll('li')].forEach(li => {
  const span = document.createElement('span');
  if (li.parentNode.querySelector('ul')) {
    li.prepend(span);
    span.prepend(span.nextSibling);
  }
});

tree.addEventListener('click', e => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childrenContainer = e.target.parentNode.querySelector('ul');

  if (!childrenContainer) {
    return;
  }

  childrenContainer.style.display = (childrenContainer.style.display === 'none') ? 'block' : 'none';
});

