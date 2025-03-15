'use strict';

const headers = document.querySelectorAll('li');

headers.forEach((header) => {
  const sublist = header.querySelector('ul');

  if (sublist) {
    const span = document.createElement('span');

    span.textContent = header.firstChild.textContent.trim();

    header.firstChild.textContent = '';

    header.insertBefore(span, header.firstChild);

    span.addEventListener('click', () => {
      if (sublist.style.display === 'none') {
        sublist.style.display = 'block';
      } else {
        sublist.style.display = 'none';
      }
    });
  }
});
