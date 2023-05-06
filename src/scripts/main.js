'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');

for (const item of li) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', e => {
  const element = e.target.closest('li').children[1];

  if (!element) {
    return;
  }

  element.hidden = !element.hidden;
});
