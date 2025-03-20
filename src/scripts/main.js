'use strict';

// write code here
const list = document.querySelectorAll('li');

list.forEach((header) => {
  const subList = header.querySelector('ul');

  if (subList) {
    const span = document.createElement('span');

    span.textContent = header.firstChild.textContent.trim();
    header.firstChild.textContent = '';

    header.insertBefore(span, header.firstChild);

    span.addEventListener('click', () => {
      if (subList.style.display === 'none') {
        subList.style.display = 'block';
      } else {
        subList.style.display = 'none';
      }
    });
  }
});
