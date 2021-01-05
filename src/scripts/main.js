'use strict';

const tree = document.querySelector('.tree');
const list = [...tree.querySelectorAll('li')];

list.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.textContent = span.nextSibling.textContent.trim();
  span.nextSibling.remove();
});

tree.addEventListener('click', (event) => {
  const element = event.target.nextElementSibling;

  if (event.target && element.tagName === 'UL') {
    element.hidden = !element.hidden;
  }
});
