'use strict';

const list = document.querySelector('.tree');

insertSpan(list);

function insertSpan(node) {
  const children = node.children;

  for (let i = 0; i < children.length; i++) {
    const firstChildren = children[i].firstElementChild;

    if (firstChildren && firstChildren.nodeName === 'UL') {
      const firstNode = children[i].firstChild;
      const textNode = firstNode.textContent.trim();

      const span = document.createElement('span');

      span.textContent = textNode;
      firstNode.replaceWith(span);

      insertSpan(firstChildren);
    }
  }
}

list.addEventListener('click', (e) => {
  if (e.target.nodeName === 'SPAN') {
    const ul = e.target.nextElementSibling;

    if (ul.style.display === '') {
      ul.style.display = 'none';
    } else {
      ul.style.display = '';
    }
  }
});
