'use strict';

const list = document.querySelector('.tree');

list.addEventListener('click', function(event) {
  const li = event.target;

  if (li.children.length > 0) {
    const liChildren = li.children;

    for (const child of liChildren) {
      if (child.style.display !== 'none') {
        child.style.display = 'none';
      } else {
        child.style.display = 'block';
      }
    }
  }
});
