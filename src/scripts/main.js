'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('li > ul > li');

  headers.forEach((header) => {
    const span = document.createElement('span');

    span.innerHTML = header.innerHTML;
    header.innerHTML = '';
    header.appendChild(span);

    // eslint-disable-next-line no-shadow
    span.addEventListener('click', (event) => {
      event.stopPropagation();

      const nestedList = header.querySelector('ul');

      if (nestedList) {
        nestedList.style.display =
          nestedList.style.display === 'none' ? 'block' : 'none';
      }
    });
  });
});
