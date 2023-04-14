'use strict';

const tree = document.querySelector('.tree');
const lists = document.querySelectorAll('li ul');

[...lists].forEach(item => {
  const text = item.parentNode.firstChild.textContent;
  const span = document.createElement('span');

  item.parentNode.firstChild.remove();
  span.textContent = text;
  item.parentNode.prepend(span);
});

tree.addEventListener('click', e => {
  const insideList = e.target.nextElementSibling;

  if (e.target.matches('span')) {
    insideList.hidden = !insideList.hidden;
  }
});
