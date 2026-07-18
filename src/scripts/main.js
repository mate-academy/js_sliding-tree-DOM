'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const curr = e.target;

  if (curr.children[0].children.length > 1) {
    // curr.children.style.display = 'none';
    if (curr.style.fontWeight !== 'bold') {
      curr.style.fontWeight = 'bold';
    } else {
      curr.style.fontWeight = '';
    }

    for (const item of [...curr.querySelectorAll('li')]) {
      // item.style.display = 'none';
      if (item.hidden) {
        item.removeAttribute('hidden');
      } else {
        item.setAttribute('hidden', 'true');
      }
    }
  }
});
