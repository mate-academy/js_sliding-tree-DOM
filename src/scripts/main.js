'use strict';

// write code here
const headers = document.querySelectorAll('li');

for (const header of headers) {
  header.addEventListener('click', function () {
    event.stopPropagation();

    for (const child of header.children) {
      child.style.display = child.style.display === 'none' ? '' : 'none';
    }
  });
}
