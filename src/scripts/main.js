'use strict';

const list = document.querySelector('.tree');
const treeList = list.querySelectorAll('ul');

list.style = 'position: absolute; top: 180px; left 400px';

for (const tree of treeList) {
  const listName = tree.previousSibling.data.trim();

  tree.previousSibling.remove();

  tree.insertAdjacentHTML('beforebegin', `<span>${listName}</span>`);
}

list.addEventListener('click', event => {
  const cheked = event.target;

  if (cheked.tagName === 'SPAN') {
    const name = cheked.nextElementSibling;

    name.hidden = !name.hidden;
  }
});
