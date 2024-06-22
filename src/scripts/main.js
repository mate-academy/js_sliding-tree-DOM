'use strict';

const listItems = [...document.querySelectorAll('li')];
const headers = listItems.filter((item) => item.querySelector('ul'));

headers.forEach((header) => {
  const span = document.createElement('span');

  header.prepend(span);
  span.append(header.childNodes[1]);

  span.addEventListener('click', (e) => {
    const ul = header.querySelector('ul');

    ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
  });
});
