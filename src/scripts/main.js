'use strict';

const items = Array.from(document.querySelectorAll('li'));
const tree = document.querySelector('.tree');

items.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(item.childNodes[1]);
});

tree.addEventListener('click', (ev) => {
  ev.target.nextSibling.hidden = !ev.target.nextSibling.hidden;
});
