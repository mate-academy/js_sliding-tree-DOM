'use strict';

const tree = document.querySelector('.tree');
const ul = [...document.querySelectorAll('ul')];

const a = ul.map((el) => {
  const span = document.createElement('span');

  el.parentNode.insertBefore(span, el);
  span.append(el);

  return el;
});

a.forEach((el) => {
  if (!el.className) {
    el.style.display = 'none';
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const childUl = e.target.querySelector('ul');

    if (childUl) {
      childUl.style.display =
        childUl.style.display === 'none' ? 'block' : 'none';
    }
  }
});
