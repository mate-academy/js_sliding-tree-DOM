'use strict';

const list = document.querySelector('.tree');
const treeList = list.querySelectorAll('ul');

list.style.cssText = 'position: absolute ; top: 200px; left 300px';

for (const tree of treeList) {
  const listName = tree.previousSibling.data.trim();

  tree.previousSibling.remove();

  tree.insertAdjacentHTML('beforebegin', `<span>${listName}</span>`);
}

list.addEventListener('click', event => {
  const target = event.target;

  if (target.tagName === 'SPAN') {
    const item = target.nextElementSibling;

    item.hidden = !item.hidden;
  }
});
