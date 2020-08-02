'use strict';

const list = document.querySelector('.tree');
const items = list.querySelectorAll('li');

[...items].forEach(item => {
  if (item.querySelector('ul')) {
    const span = document.createElement('span');

    item.prepend(span);
    item.querySelector('span').append(item.childNodes[1]);
  }
});

list.addEventListener('click', (event) => {
  const target = event.target;

  if (!target.matches('span')) {
    return;
  }

  const ul = target.nextSibling;

  if (window.getComputedStyle(ul).display === 'none') {
    ul.style.display = 'block';

    return;
  }

  ul.style.display = 'none';
});
