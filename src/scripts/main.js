'use strict';

const liItems = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const li of liItems) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  const item = e.target;

  if (item.parentNode.children[1]) {
    item.parentNode.children[1].hidden = !item.parentNode.children[1].hidden;
  }
});
