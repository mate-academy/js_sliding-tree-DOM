'use strict';

// write code here
const tree = document.querySelector('.tree');
const liArray = [...document.querySelectorAll('li')];

liArray.map(li => {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (event) => {
  const ul = event.target.nextElementSibling;

  if (ul.tagName === 'UL') {
    ul.hidden = !ul.hidden;
  }
});
