'use strict';

const tree = document.querySelector('.tree');
const items = document.querySelectorAll('li');

const titles = [...items].filter(item => item.firstElementChild);

titles.forEach(({ firstChild }) => {
  const span = document.createElement('span');

  firstChild.after(span);
  span.prepend(firstChild);
})

tree.addEventListener('click', ({ target }) => {
  if (target.tagName !== 'LI' || !target.firstElementChild) {
    return;
  }

  const list = target.firstElementChild;

  list.style.display = window.getComputedStyle(list).display === 'block'
    ? 'none'
    : 'block';
});
