'use strict';

const tree = document.querySelector('.tree');
const liAll = document.querySelectorAll('li');

for (const item of liAll) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  const item = e.target;
  const child = item.closest('li').children[1];

  if (!child) {
    return;
  }

  child.hidden = !child.hidden;
});
