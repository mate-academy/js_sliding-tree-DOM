'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

for (const item of listItems) {
  if (item.children.length) {
    item.className = 'closed';
  }
}

tree.addEventListener('click', (occurrence) => {
  const requiredListItem = occurrence.target;

  if (requiredListItem.tagName !== 'LI') {
    return;
  }

  if (requiredListItem.children.length) {
    requiredListItem.classList.toggle('closed');
    requiredListItem.classList.toggle('open');
  }
});
