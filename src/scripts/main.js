'use strict';

const tree = document.querySelector('.tree');

const headers = document.querySelectorAll('li');

headers.forEach(header => {
  if (header.querySelector('ul')) {
    const span = document.createElement('span');

    header.insertBefore(span, header.firstChild);
    span.appendChild(span.nextSibling);
  }
});

tree.addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName === 'SPAN') {
    const ul = target.parentNode.querySelector('ul');

    ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
  }
});
