'use strict';

const tree = document.querySelector('.tree');
const listItems = tree.querySelectorAll('li');

for (const item of listItems) {
  if (!item.querySelector('ul')) {
    continue;
  }

  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

function toggleVisibility(e) {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childOfHeadline = e.target.parentNode.querySelector('ul');

  childOfHeadline.hidden = !childOfHeadline.hidden;
}

tree.addEventListener('click', toggleVisibility);
