'use strict';

const list = document.querySelector('ul');
const headerLi = [...document.querySelectorAll('li')]
  .filter(item => item.firstElementChild);

headerLi.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

list.addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName !== 'SPAN') {
    return;
  }

  target.nextSibling.hidden = !target.nextSibling.hidden;
});
