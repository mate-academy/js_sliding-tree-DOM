'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

for (const el of list) {
  const span = document.createElement('span');

  el.prepend(span);
  span.prepend(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  const item = e.target.closest('li').children[1];

  item.hidden = !item.hidden;
});
