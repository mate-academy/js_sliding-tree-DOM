'use strict';

// write code here
const titles = document.querySelectorAll('li:has(ul)');
const treeEl = document.querySelector('.tree');

titles.forEach((elem) => {
  const span = document.createElement('span');

  span.textContent = elem.firstChild.textContent;
  elem.firstChild.replaceWith(span);
});

treeEl.addEventListener('click', (even) => {
  if (even.target.tagName === 'SPAN') {
    const ul = even.target.nextElementSibling;

    if (ul.style.display === 'none') {
      ul.style.display = '';
    } else {
      ul.style.display = 'none';
    }
  }
});
