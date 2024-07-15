'use strict';

const list = document.querySelectorAll('li');
const ul = document.querySelector('ul');

list.forEach((li) => {
  const span = document.createElement('span');

  li.prepend(span);
  span.prepend(span.nextSibling);
});

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const el = e.target.nextSibling;

    if (el) {
      el.hidden = !el.hidden;
    }
  }
});
