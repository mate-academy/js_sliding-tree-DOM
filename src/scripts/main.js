'use strict';

const tree = document.querySelector('.tree');
const treeItems = [...tree.querySelectorAll('li')];

for (const treeItem of treeItems) {
  if (treeItem.children.length) {
    const itemChildNodes = [...treeItem.childNodes];
    const span = document.createElement('span');
    const nameItem = itemChildNodes[0].textContent;

    span.textContent = nameItem.trim();
    treeItem.replaceChild(span, itemChildNodes[0]);
  }
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const title = e.target;
    const listToHide = title.nextElementSibling;

    if (listToHide) {
      listToHide.classList.toggle('hidden');

      if (listToHide.classList.contains('hidden')) {
        listToHide.style.display = 'none';
      } else {
        listToHide.style.display = 'block';
      }
    }
  }
});
