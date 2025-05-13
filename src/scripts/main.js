'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  function toggleSublist(evt) {
    const target = evt.target;

    if (target.tagName === 'SPAN') {
      const parentLi = target.parentNode;
      const sublist = parentLi.querySelector('ul');

      if (sublist) {
        sublist.style.display = sublist.style.display === 'none' ? '' : 'none';
      }
    }
  }

  function wrapTextNodes(node) {
    node.childNodes.forEach((child) => {
      if (child.nodeType === Node.ELEMENT_NODE) {
        if (child.tagName === 'LI' && child.querySelector('ul')) {
          child.childNodes.forEach((grandchild) => {
            if (
              grandchild.nodeType === Node.TEXT_NODE &&
              grandchild.textContent.trim() !== ''
            ) {
              if (grandchild.parentNode.tagName !== 'SPAN') {
                const span = document.createElement('span');

                span.textContent = grandchild.textContent;
                grandchild.replaceWith(span);
              }
            }
          });
        } else {
          wrapTextNodes(child);
        }
      }
    });
  }

  wrapTextNodes(tree);
  tree.addEventListener('click', toggleSublist);
});
