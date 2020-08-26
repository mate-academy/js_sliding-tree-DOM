'use strict';

const tree = document.querySelector('.tree');
const liAll = document.querySelectorAll('li');

const headers = [...liAll].filter(li => li.children.length > 0);

[...headers].map(li => {
  const span = document.createElement('span');

  li.prepend(span);
  span.prepend(span.nextSibling.textContent);
  span.nextSibling.textContent = '';
});

tree.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    if (event.target.nextElementSibling.style.display !== 'none') {
      event.target.nextElementSibling.style.display = 'none';
    } else {
      event.target.nextElementSibling.style.display = 'block';
    }
  }
});
