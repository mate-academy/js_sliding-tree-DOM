'use strict';

// write code here
const tree = document.querySelector('.tree');
const list = document.querySelectorAll('.tree li');

for (const li of list) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.tagName === 'SPAN') {
    const children = e.target.nextSibling;

    if (children) {
      children.hidden = !children.hidden;
    }
  }
});
