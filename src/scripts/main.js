'use strict';

const tree = document.querySelector('.tree');
const clollectionListItems = tree.querySelectorAll('li');

clollectionListItems.forEach((liEl) => {
  const spanEl = document.createElement('span');
  const text = liEl.firstChild.textContent.trim();

  liEl.firstChild.textContent = '';
  spanEl.textContent = text;
  liEl.insertAdjacentElement('afterbegin', spanEl);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const ulEl = e.target.nextElementSibling;

  if (!ulEl) {
    return;
  }

  ulEl.style.display =
    ulEl.style.display === '' || ulEl.style.display === 'block'
      ? 'none'
      : 'block';
});
