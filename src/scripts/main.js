'use strict';

// write code here

const tree = document.querySelector('.tree');

tree.style.cursor = 'pointer';

tree.addEventListener('click', (e) => {
  const li = e.target.closest('li');

  let childrenUl;

  if (li !== null) {
    childrenUl = li.querySelector('ul');
  }

  if (li && e.target.tagName !== 'UL') {
    if (childrenUl.style.display === 'none') {
      childrenUl.style.display = 'block';
    } else {
      childrenUl.style.display = 'none';
    }
  }
});
