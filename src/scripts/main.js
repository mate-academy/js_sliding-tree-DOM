'use strict';

const tree = document.querySelector('.tree');
const items = document.querySelectorAll('li');

const titles = [...items].filter(item => item.firstElementChild);

titles.forEach(({ firstChild }) => {
  const span = document.createElement('span');

  firstChild.after(span);
  span.prepend(firstChild);
});

tree.addEventListener('click', ({ target }) => {
  const list = target.nextSibling;

  if (target.tagName !== 'SPAN' || !list) {
    return;
  }

  const currentDisplay = window.getComputedStyle(list).display;

  list.style.display = (currentDisplay === 'block')
    ? 'none'
    : 'block';
});
