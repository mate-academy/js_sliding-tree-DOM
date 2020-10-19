'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (event) => {
  for (const element of [...event.target.children]) {
    if (element.style.display === 'block') {
      element.style.display = 'none';
    } else {
      element.style.display = 'block';
    }
  }
});
