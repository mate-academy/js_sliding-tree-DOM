'use strict';

const tree = document.querySelector('.tree');
const itemsOfLi = document.querySelectorAll('li');

for (const item of itemsOfLi) {
  const span = document.createElement('span');

  if (item.childNodes.length > 1) {
    item.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', (e) => {
  const el = e.target.nextSibling;

  if (el.tagName === 'UL') {
    el.hidden = !el.hidden;
  }
});
