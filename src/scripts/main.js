'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tree li').forEach((li) => {
    if (li.querySelector('ul')) {
      for (const node of li.childNodes) {
        if (
          node.nodeType === Node.TEXT_NODE &&
          node.textContent.trim() !== ''
        ) {
          const span = document.createElement('span');

          span.textContent = node.textContent.trim();
          li.insertBefore(span, node);
          li.removeChild(node);
          break;
        }
      }
    }
  });

  const tree = document.querySelector('.tree');

  tree.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      const li = e.target.parentElement;
      const subTree = li.querySelector('ul');

      if (subTree) {
        subTree.style.display = subTree.style.display === 'none' ? '' : 'none';
      }
    }
  });
});
