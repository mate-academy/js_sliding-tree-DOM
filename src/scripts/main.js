'use strict';

// write code here
const tree = document.querySelector('.tree');
const li = tree.querySelectorAll('li');

Array.from(li).forEach((item) => {
  const span = document.createElement('span');

  span.textContent = item.childNodes[0].textContent;
  item.childNodes[0].textContent = '';
  item.prepend(span);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const nested = e.target.parentElement.querySelector('ul');

  if (!nested) {
    return;
  }

  nested.style.display = nested.style.display === 'none' ? 'block' : 'none';
});
