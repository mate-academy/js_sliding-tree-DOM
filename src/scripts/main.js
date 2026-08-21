'use strict';

const headers = document.querySelectorAll('li');

headers.forEach((header) => {
  const span = document.createElement('span');

  span.textContent = header.firstChild.textContent;
  header.firstChild.replaceWith(span);

  const list = header.querySelector('ul');

  span.addEventListener('click', () => {
    list.hidden = !list.hidden;
  });
});
