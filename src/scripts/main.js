'use strict';

const tree = document.body.querySelector('.tree');
const lis = tree.querySelectorAll('li');

lis.forEach((li) => {
  if (li.children.length > 0) {
    const spanWrap = document.createElement('span');

    spanWrap.textContent = li.firstChild.textContent.trim();
    li.firstChild.replaceWith(spanWrap);
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'span') {
    const ul = e.target.nextSibling;
    const display = ul.style.display;

    if (display === 'none') {
      ul.style.display = 'block';
    } else {
      ul.style.display = 'none';
    }
  }
});
