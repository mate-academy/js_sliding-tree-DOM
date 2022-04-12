'use strict';

const tree = document.querySelector('.tree');
const collection = tree.querySelectorAll('li');

for (const li of collection) {
  const span = document.createElement('span');

  if (li.children.length) {
    li.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', (e) => {
  if (e.target.nextSibling.tagName === 'UL') {
    e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
  }
});
