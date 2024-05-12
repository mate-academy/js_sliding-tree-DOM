'use strict';

const tree = document.querySelector('.tree');

function findTree(anyTree) {
  const liCollection = [...anyTree.querySelectorAll('li')];

  liCollection.forEach((li) => {
    const span = document.createElement('span');

    if (li.children.length >= 1) {
      li.insertBefore(span, li.firstChild);
      span.appendChild(span.nextSibling);
    }
  });

  anyTree.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      const ul = e.target.nextElementSibling;

      ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
    }
  });
}

findTree(tree);
