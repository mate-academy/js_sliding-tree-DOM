'use strict';

const tree = document.querySelector('.tree');

const allLi = document.querySelectorAll('li');

allLi.forEach((item) => {
  const firstChild = item.firstChild;
  const span = document.createElement('span');

  span.append(firstChild);
  item.prepend(span);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.closest('li');

  if (li) {
    const childrenUl = li.querySelector('ul');

    if (childrenUl) {
      if (childrenUl.style.display === 'none') {
        childrenUl.style.display = 'block';
      } else {
        childrenUl.style.display = 'none';
      }
    }
  }
});
