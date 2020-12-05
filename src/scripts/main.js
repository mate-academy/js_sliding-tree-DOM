'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');

for (const el of li) {
  const span = document.createElement('span');

  if (el.children.length > 0) {
    el.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', (elem) => {
  if (elem.target.tagName !== 'SPAN') {
    return;
  }

  const e = elem.target.nextElementSibling;

  e.hidden = !e.hidden;
});
