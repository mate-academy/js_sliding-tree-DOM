'use strict';

const headers = document.querySelectorAll('li');

headers.forEach((header) => {
  const text = header.childNodes[0];
  const span = document.createElement('span');

  span.textContent = text.textContent.trim();
  text.replaceWith(span);

  const ul = header.querySelector('ul');

  if (ul) {
    ul.before(span);
  } else {
    header.append(span);
  }
});

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const ul = e.target.parentElement.querySelector('ul');

  if (!ul) {
    return;
  }

  ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
});
