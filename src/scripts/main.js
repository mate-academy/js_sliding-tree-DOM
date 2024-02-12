'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

listItems.forEach(li => {
  if (li.querySelector('ul')) {
    const span = document.createElement('span');

    span.append(li.firstChild);
    li.firstChild.parentNode.insertBefore(span, li.firstChild);
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const elementToToggle = e.target.nextElementSibling;

    getComputedStyle(elementToToggle).getPropertyValue('display') === 'block'
      ? elementToToggle.style.display = 'none'
      : elementToToggle.style.display = 'block';
  }
});
