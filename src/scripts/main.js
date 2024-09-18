'use strict';

const list = document.querySelectorAll('li');
const ul = document.querySelector('ul');

list.forEach((li) => {
  const span = document.createElement('span');

  span.textContent = li.firstChild.textContent.trim();
  li.firstChild.textContent = '';
  li.prepend(span);
});

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const el = e.target.nextElementSibling;

    if (el) {
      el.style.display = el.style.display ? '' : 'none';
    }
  }
});
