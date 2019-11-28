'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

for (const item of listItems) {
  if (item.children.length) {
    item.classList.add('closed');
  }
}

tree.addEventListener('click', (e) => {
  const requiredListItem = e.target;

  if (requiredListItem.tagName !== 'LI') {
    return;
  }

  if (requiredListItem.children.length) {
    requiredListItem.classList.toggle('closed');
  }
});
