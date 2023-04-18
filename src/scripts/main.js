'use strict';

const ulElements = document.querySelectorAll('ul');
const tree = document.querySelector('.tree');

ulElements.forEach((ul) => {
  if (ul.parentNode.tagName === 'LI') {
    const span = document.createElement('span');

    span.classList.add('header');

    span.innerHTML = ul.parentNode.firstChild.textContent.trim();
    ul.parentNode.firstChild.replaceWith(span);
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.classList.contains('header')) {
    const ul = e.target.nextElementSibling;

    if (ul.style.display === 'none') {
      ul.style.display = 'block';
    } else {
      ul.style.display = 'none';
    }
  }
});
