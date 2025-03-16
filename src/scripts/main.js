'use strict';

const list = document.querySelector('ul');
const firstLi = [...document.querySelectorAll('li')].filter(
  (elem) => elem.firstElementChild,
);

firstLi.forEach((li) => {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
});

list.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }
  e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
});
