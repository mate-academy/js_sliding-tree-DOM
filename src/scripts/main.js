'use strict';

const tree = document.querySelector('.tree');
const headers = document.querySelectorAll('li');

headers.forEach(header => {
  if (header.querySelector('ul')) {
    const headerText = header.firstChild.textContent;

    header.firstChild.remove();

    header.insertAdjacentHTML('afterbegin', `
      <span>${headerText}</span>
      `);
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const list = e.target.nextElementSibling;

    list.hidden = !list.hidden;
  };
});
