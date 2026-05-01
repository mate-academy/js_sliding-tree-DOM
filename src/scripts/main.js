'use strict';

const headers = document.querySelectorAll('.tree li span');

headers.forEach((header) => {
  header.addEventListener('click', () => {
    const ul = header.nextElementSibling;

    if (ul) {
      ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
    }
  });
});
