'use strict';

const tree = document.querySelector('.tree');
const listItems = tree.querySelectorAll('li');

listItems.forEach((item) => {
  if (item.querySelector('ul')) {
    const span = document.createElement('span');

    span.textContent = item.firstChild.textContent.trim();
    item.firstChild.textContent = '';
    item.insertBefore(span, item.firstChild);

    span.addEventListener('click', () => {
      const nestedList = span.nextElementSibling;

      if (nestedList.style.display === 'none') {
        nestedList.style.display = 'block';
      } else {
        nestedList.style.display = 'none';
      }
    });
  }
});
