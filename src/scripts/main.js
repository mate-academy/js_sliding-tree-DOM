'use strict';

const tree = document.querySelector('.tree');
const headers = [...tree.querySelectorAll('li:has(ul)')];

headers.map(el => {
  el.insertAdjacentHTML(
    'afterbegin',
    `<span>${el.childNodes[0].textContent}</span>`
  );

  el.childNodes[1].remove();
});

tree.addEventListener('click', (e) => {
  const header = e.target.nodeName === 'SPAN'
    ? e.target
    : null;

  if (header) {
    const list = header.parentElement.querySelector('ul');

    list.style.display
      = list.style.display !== 'none'
        ? 'none'
        : null;
  }
});
