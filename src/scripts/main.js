'use strict';

const tree = document.querySelector('.tree');
const items = document.querySelectorAll('li');

for (const item of items) {
  const span = document.createElement('span');

  span.style.cursor = 'pointer';
  item.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  const list = e.target;

  if (list.tagName !== 'SPAN') {
    return;
  }

  const childs = list.parentNode.querySelector('ul');

  if (!childs) {
    return;
  }

  childs.hidden = !childs.hidden;
});
