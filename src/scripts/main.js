'use strict';

const list = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const item of list) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', e => {
  e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
});
