'use strict';

const tree = document.querySelector('.tree');

const collectionOfLi = document.querySelectorAll('li');

collectionOfLi.forEach((li) => {
  const span = document.createElement('span');

  li.before(span);

  span.prepend(li);
});

tree.style.cursor = 'pointer';

tree.addEventListener('click', (e) => {
  const targetSpan = e.target.closest('span');

  if (e.target.tagName === 'SPAN') {
    return;
  }

  const childrenUl = targetSpan.querySelector('ul');

  if (childrenUl) {
    childrenUl.style.display =
      childrenUl.style.display === 'none' ? 'block' : 'none';
  }
});
