'use strict';

const tree = document.querySelector('.tree');
const lists = tree.querySelectorAll('ul');

if (lists) {
  for (const list of lists) {
    const head = list.previousSibling;

    if (head && head.nodeType === 3) {
      const newHead = document.createElement('span');

      newHead.textContent = head.textContent;
      head.replaceWith(newHead);
    }
  }

  tree.addEventListener('click', (ev) => {
    const header = ev.target.closest('span');

    if (header) {
      const innerList = header.nextElementSibling;

      if (innerList.style.display === 'none') {
        innerList.style.display = '';
      } else {
        innerList.style.display = 'none';
      }
    }
  });
}
