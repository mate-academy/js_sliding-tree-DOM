'use strict';

const tree = document.querySelector('.tree');
const headers = document.querySelectorAll('li');

headers.forEach((header) => {
  if (header.childNodes.length !== 1) {
    const span = document.createElement('span');

    header.prepend(span);
    span.append(span.nextSibling);
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const hiddenUl = e.target.nextSibling;

    if (hiddenUl.style.display !== 'none') {
      hiddenUl.style.display = 'none';
    } else {
      hiddenUl.style.display = '';
    }
  }
});
