'use strict';

const tree = document.querySelector('.tree');
const { top, left } = tree.getBoundingClientRect();

tree.style.position = 'absolute';
tree.style.top = top + 'px';
tree.style.left = left + 'px';

const listItems = document.querySelectorAll('li');

for (const item of listItems) {
  if (item.children.length) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', event => {
  const header = event.target;

  if (header.nextElementSibling.tagName === 'UL') {
    header.nextElementSibling.hidden = !header.nextElementSibling.hidden;
  }
});
