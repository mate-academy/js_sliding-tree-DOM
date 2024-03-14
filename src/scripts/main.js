'use strict';

const tree = document.querySelector('.tree');
const items = document.querySelectorAll('li');

for (const item of items) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  const item = e.target;

  if (item.parentNode.children[1]) {
    item.parentNode.children[1].hidden = !item.parentNode.children[1].hidden;
  }
});
