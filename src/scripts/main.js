'use strict';

const tree = document.querySelector('.tree');
const itemsTree = tree.querySelectorAll('li');

for (const elem of itemsTree) {
  if (elem.children.length > 0) {
    const span = document.createElement('span');

    span.append(elem.childNodes[0]);
    elem.prepend(span);
  }
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  }
});
