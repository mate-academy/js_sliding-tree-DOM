'use strict';

const lists = document.querySelectorAll('li');
const element = document.querySelector('ul');

lists.forEach((list) => {
  const span = document.createElement('span');

  list.prepend(span);
  span.prepend(span.nextSibling);
});

element.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const el = e.target.nextSibling;

    if (el) {
      el.hidden = !el.hidden;
    }
  }
});
