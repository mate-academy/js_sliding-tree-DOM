'use strict';

const tree = document.querySelector('.tree');
const listOfLi = document.querySelectorAll('li');

for (const item of listOfLi) {
  if (item.children.length) {
    item.classList.add('closed');
  }
}

tree.addEventListener('click', (e) => {
  const requiredListItem = e.target;

  if (requiredListItem.tagName !== 'li') {
    return;
  }

  if (requiredListItem.children.length) {
    requiredListItem.classList.toggle('closed');
  }
});
