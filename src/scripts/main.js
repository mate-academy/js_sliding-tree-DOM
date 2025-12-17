'use strict';

const tree = document.querySelector('.tree');
const lists = tree.querySelectorAll('ul');

if (lists) {
  for (const list of lists) {
    const head = list.previousSibling;
    const newHead = document.createElement('span');

    newHead.textContent = head.textContent;
    head.replaceWith(newHead);
  }

  tree.addEventListener('click', (ev) => {
    const header = ev.target.closest('span');
    const innerList = header.nextElementSibling;

    if (innerList.style.display === 'none') {
      innerList.style.display = '';
    } else {
      innerList.style.display = 'none';
    }
  });
}
