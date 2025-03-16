'use strict';

const tree = document.querySelector('.tree');
const items = document.querySelectorAll('li');

[...items].map((item) => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  const list = e.target.parentNode.querySelector('ul');

  if (list) {
    list.hidden = !list.hidden;
  }
});
