'use strict';

const list = document.querySelectorAll('li');

list.forEach((li) => {
  if (li.querySelector('ul')) {
    const span = document.createElement('span');

    span.textContent = li.firstChild.textContent.trim();
    li.firstChild.textContent = '';
    li.insertAdjacentElement('afterbegin', span);

    span.addEventListener('click', (e) => {
      const nextEl = e.target.nextElementSibling;

      nextEl.style.display = nextEl.style.display === 'none' ? 'block' : 'none';
    });
  }
});
