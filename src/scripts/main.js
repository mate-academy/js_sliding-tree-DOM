'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const list = [...document.querySelectorAll('li')];

  const headers = list.filter((element) => element.querySelector('ul'));

  headers.forEach((header) => {
    const span = document.createElement('span');

    span.textContent = header.firstChild.textContent;
    header.firstChild.textContent = '';
    header.insertBefore(span, header.firstChild);

    const sublist = header.querySelector('ul');

    sublist.style.display = 'block';

    span.addEventListener('click', (e) => {
      if (sublist.style.display === 'block') {
        sublist.style.display = 'none';
      } else {
        sublist.style.display = 'block';
      }
    });
  });
});
