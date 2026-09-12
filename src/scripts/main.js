'use strict';

const tree = document.querySelector('.tree');
const uls = tree.querySelectorAll('ul');

const headers = [];

for (const elem of uls) {
  headers.push(elem.parentNode);
}

headers.forEach((header) => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    content.style.display = content.style.display === 'none' ? '' : 'none';
  });
});
