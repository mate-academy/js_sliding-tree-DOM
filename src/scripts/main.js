'use strict';

const list = document.querySelector('.tree');
const treeList = list.querySelectorAll('ul');

for (const tree of treeList) {
  const listName = tree.previousSibling.data.trim();

  tree.previousSibling.remove();

  tree.insertAdjacentHTML('beforebegin', `<span>${listName}</span>`);
}

list.addEventListener('click', event => {
  const cheked = event.target;

  if (cheked.tagName === 'SPAN') {
    const name = cheked.nextElementSibling;

    if (name.style.display === 'block') {
      name.style.display = 'none';
    } else {
      name.style.display = 'block';
    }
  }
});
