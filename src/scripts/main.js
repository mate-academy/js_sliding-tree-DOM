'use strict';

const li = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const item of li) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', e => {
  const item = e.target.closest('li').children[1];

  if (!item) {
    return;
  }

  item.hidden = !item.hidden;
});
