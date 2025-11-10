'use strict';

const tree = document.querySelector('.tree');
const li = tree.querySelectorAll('li');

li.forEach((liItem) => {
  const span = document.createElement('span');
  const text = liItem.firstChild;

  liItem.prepend(span);
  span.append(text);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const liItem = e.target.closest('li');
  const childUl = liItem.querySelector('ul');

  if (!childUl) {
    return;
  }

  if (childUl.style.display === 'none') {
    childUl.style.display = 'block';
  } else {
    childUl.style.display = 'none';
  }
});
