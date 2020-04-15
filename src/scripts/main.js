'use strict';

const tree = document.querySelector('.tree');
const liItem = document.querySelectorAll('li');

for (const item of liItem) {
  const span = document.createElement('span');

  item.prepend(span);
  span.prepend(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  
  if (!li) {
    return;
  }

  if (li.children.length) {
    const children = li.children[1];

    children.hidden = !children.hidden;
  }
});
