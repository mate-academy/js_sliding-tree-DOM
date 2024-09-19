'use strict';

const headers = document.querySelectorAll('.tree li');

headers.forEach((header) => {
  const textNode = header.firstChild;
  const span = document.createElement('span');

  span.textContent = textNode.textContent.trim();
  header.replaceChild(span, textNode);

  span.addEventListener('click', () => {
    const sublist = header.querySelector('ul');

    if (sublist) {
      if (sublist.style.display === 'none') {
        sublist.style.display = 'block';
      } else {
        sublist.style.display = 'none';
      }
    }
  });
});
