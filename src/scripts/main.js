'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('.tree li');

list.forEach((v) => {
  const span = document.createElement('span');

  span.textContent = v.firstChild.textContent;
  v.firstChild.textContent = '';
  v.prepend(span);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const nextEl = e.target.nextElementSibling;

    if (nextEl.tagName === 'UL') {
      nextEl.hidden = !nextEl.hidden;
    }
  }
});
