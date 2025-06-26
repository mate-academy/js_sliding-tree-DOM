'use strict';

// write code here

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  const childrenUl = li.querySelector('ul');

  if (li && e.target.tagName !== 'UL') {
    if (childrenUl) {
      childrenUl.style.display =
        childrenUl.style.display === 'none' ? 'block' : 'none';
    }
  }
});
